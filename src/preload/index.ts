import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Case operations
  saveCase: (caseData: any) => ipcRenderer.invoke('case:save', caseData),
  loadCase: (filePath: string) => ipcRenderer.invoke('case:load', filePath),
  exportPdf: (caseData: any) => ipcRenderer.invoke('case:export-pdf', caseData),

  // File operations
  selectFiles: () => ipcRenderer.invoke('dialog:select-files'),

  // App operations
  getDataPath: () => ipcRenderer.invoke('app:get-data-path'),
  getSettings: () => ipcRenderer.invoke('settings:get'),
  setSettings: (settings: any) => ipcRenderer.invoke('settings:set', settings),

  // Navigation events
  onNavigate: (callback: (route: string) => void) => {
    ipcRenderer.on('navigate', (_, route) => callback(route));
  },
  onOpenCase: (callback: (filePath: string) => void) => {
    ipcRenderer.on('case:open-file', (_, filePath) => callback(filePath));
  },
  onExportPdf: (callback: () => void) => {
    ipcRenderer.on('export-pdf', () => callback());
  },
  onCheckUpdates: (callback: () => void) => {
    ipcRenderer.on('check-updates', () => callback());
  },

  // Remove listeners
  removeAllListeners: (channel: string) => {
    ipcRenderer.removeAllListeners(channel);
  },

  // Platform info
  platform: process.platform,
});

export type {};
