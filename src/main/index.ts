import { app, BrowserWindow, Menu, dialog, shell } from 'electron';
import { join, dirname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { registerIPCHandlers } from './ipc-handlers';
import { PythonServer } from './python-server';
import { fileURLToPath } from 'url';

// Polyfill __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow: BrowserWindow | null = null;
let pythonServer: PythonServer | null = null;

const isDev = process.env.NODE_ENV === 'development';

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 900,
    minWidth: 1024,
    minHeight: 768,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      webSecurity: false,
      devTools: true,
    },
    icon: existsSync(join(__dirname, '../../resources/icons/icon.png'))
      ? join(__dirname, '../../resources/icons/icon.png')
      : undefined,
    show: false,
  });

  // Log for debugging
  console.log('Main process loaded from:', __dirname);
  console.log('Preload script at:', join(__dirname, '../preload/index.js'));

  // Register ready-to-show BEFORE loading
  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });

  // Load the app
  if (isDev) {
    // Try multiple ports in case one is in use
    const ports = [5173, 5174, 5175, 5176];
    let loaded = false;
    for (const port of ports) {
      try {
        await mainWindow.loadURL(`http://localhost:${port}`);
        console.log(`Loaded app on port ${port}`);
        loaded = true;
        break;
      } catch (e) {
        // Try next port
      }
    }
    if (!loaded) {
      throw new Error('Could not connect to dev server');
    }
    mainWindow.webContents.openDevTools();
  } else {
    // In production, load from the renderer-dist directory
    // Files are unpacked from asar to app.asar.unpacked
    const rendererPath = join(process.resourcesPath, 'app.asar.unpacked', 'renderer-dist', 'index.html');
    const rendererUrl = `file://${rendererPath.replace(/\\/g, '/')}`;
    console.log('Production mode - Resources path:', process.resourcesPath);
    console.log('Production mode - Loading from:', rendererUrl);
    console.log('File exists:', existsSync(rendererPath));

    // Open DevTools in production for debugging
    mainWindow.webContents.openDevTools();

    mainWindow.loadURL(rendererUrl).catch((err) => {
      console.error('Failed to load URL:', err);
    });

    // Log console messages from renderer
    mainWindow.webContents.on('console-message', (event) => {
      console.log('[Renderer]', event.message);
    });

    // Log any navigation errors
    mainWindow.webContents.on('did-fail-load', (event) => {
      console.error('Failed to load:', event);
    });
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Create menu
  createMenu();
}

function createMenu() {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Case',
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            mainWindow?.webContents.send('navigate', '/new-case');
          },
        },
        {
          label: 'Open Case...',
          accelerator: 'CmdOrCtrl+O',
          click: async () => {
            const result = await dialog.showOpenDialog(mainWindow!, {
              title: 'Open Case File',
              filters: [{ name: 'E-Lawyer Case', extensions: ['elb'] }],
              properties: ['openFile'],
            });
            if (!result.canceled && result.filePaths.length > 0) {
              mainWindow?.webContents.send('case:open-file', result.filePaths[0]);
            }
          },
        },
        { type: 'separator' },
        {
          label: 'Export Report as PDF...',
          click: () => {
            mainWindow?.webContents.send('export-pdf');
          },
        },
        { type: 'separator' },
        {
          label: 'Exit',
          accelerator: 'Alt+F4',
          click: () => {
            app.quit();
          },
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo', label: 'Undo' },
        { role: 'redo', label: 'Redo' },
        { type: 'separator' },
        { role: 'cut', label: 'Cut' },
        { role: 'copy', label: 'Copy' },
        { role: 'paste', label: 'Paste' },
        { type: 'separator' },
        {
          label: 'Preferences',
          click: () => {
            mainWindow?.webContents.send('navigate', '/settings');
          },
        },
      ],
    },
    {
      label: 'Tools',
      submenu: [
        {
          label: 'Case Library',
          click: () => {
            mainWindow?.webContents.send('navigate', '/library');
          },
        },
        {
          label: 'Database Search',
          click: () => {
            mainWindow?.webContents.send('navigate', '/search');
          },
        },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'User Guide',
          click: () => {
            shell.openExternal('https://elawyerbot.com/guide');
          },
        },
        {
          label: 'Check for Updates',
          click: () => {
            mainWindow?.webContents.send('check-updates');
          },
        },
        { type: 'separator' },
        {
          label: 'About',
          click: () => {
            mainWindow?.webContents.send('navigate', '/about');
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

function ensureUserDataDirectory() {
  const userDataPath = app.getPath('documents');
  const elawyerPath = join(userDataPath, 'ELawyerBot');

  if (!existsSync(elawyerPath)) {
    mkdirSync(elawyerPath, { recursive: true });
  }

  const subdirectories = ['cases', 'uploads', 'reports', 'temp'];
  subdirectories.forEach((dir) => {
    const dirPath = join(elawyerPath, dir);
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }
  });

  return elawyerPath;
}

app.whenReady().then(async () => {
  // Create user data directory
  const userDataPath = ensureUserDataDirectory();
  process.env.ELAWYER_DATA_PATH = userDataPath;

  // Start Python backend
  pythonServer = new PythonServer();
  pythonServer.start().catch((err) => {
    console.error('Failed to start Python server:', err);
  });

  // Create main window
  await createWindow();

  // Register IPC handlers
  registerIPCHandlers(mainWindow);

  app.on('activate', async () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      await createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    // Stop Python server
    if (pythonServer) {
      pythonServer.stop();
    }
    app.quit();
  }
});

app.on('before-quit', () => {
  // Stop Python server before quitting
  if (pythonServer) {
    pythonServer.stop();
  }
});

// Handle protocol for .elb files
app.setAsDefaultProtocolClient('elawyer');
