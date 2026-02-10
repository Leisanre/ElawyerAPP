import { ipcMain, dialog, BrowserWindow } from 'electron';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

export interface CaseFile {
  version: string;
  created_at: string;
  last_modified: string;
  case_id: string;
  parties: {
    complainant: string;
    respondent: string;
    user_role: 'employee' | 'employer';
  };
  case_type: string;
  uploaded_files: UploadedFile[];
  features: Record<string, any>;
  prediction: PredictionResult;
  user_notes?: string;
}

export interface UploadedFile {
  name: string;
  path: string;
  type: string;
  size: number;
}

export interface PredictionResult {
  employee_win_probability: number;
  employer_win_probability: number;
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
  factors: Factor[];
  monetary_breakdown?: MonetaryBreakdown;
  laws_violated: LawViolation[];
  next_steps: string[];
}

export interface Factor {
  description: string;
  impact: 'positive' | 'negative';
  weight: number;
}

export interface MonetaryBreakdown {
  total_amount: number;
  breakdown: {
    category: string;
    amount: number;
    description: string;
  }[];
}

export interface LawViolation {
  law: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
}

export function registerIPCHandlers(mainWindow: BrowserWindow | null) {
  // Save case to .elb file
  ipcMain.handle('case:save', async (_, caseData: CaseFile) => {
    const result = await dialog.showSaveDialog(mainWindow!, {
      title: 'Save Case',
      defaultPath: `${caseData.parties.complainant}_vs_${caseData.parties.respondent}.elb`,
      filters: [{ name: 'E-Lawyer Case', extensions: ['elb'] }],
    });

    if (result.canceled || !result.filePath) {
      return { success: false, error: 'Save cancelled' };
    }

    try {
      caseData.last_modified = new Date().toISOString();
      writeFileSync(result.filePath, JSON.stringify(caseData, null, 2));
      return { success: true, path: result.filePath };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  });

  // Load case from .elb file
  ipcMain.handle('case:load', async (_, filePath: string) => {
    try {
      if (!existsSync(filePath)) {
        return { success: false, error: 'File not found' };
      }

      const content = readFileSync(filePath, 'utf-8');
      const caseData = JSON.parse(content) as CaseFile;
      return { success: true, data: caseData };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  });

  // Export to PDF
  ipcMain.handle('case:export-pdf', async (_, caseData: CaseFile) => {
    const result = await dialog.showSaveDialog(mainWindow!, {
      title: 'Export Report as PDF',
      defaultPath: `${caseData.parties.complainant}_vs_${caseData.parties.respondent}.pdf`,
      filters: [{ name: 'PDF Document', extensions: ['pdf'] }],
    });

    if (result.canceled || !result.filePath) {
      return { success: false, error: 'Export cancelled' };
    }

    // For MVP, we'll use a simple approach
    // In production, this would call the Python backend to generate the PDF
    return { success: true, path: result.filePath };
  });

  // Select files for upload
  ipcMain.handle('dialog:select-files', async () => {
    const result = await dialog.showOpenDialog(mainWindow!, {
      title: 'Select Documents',
      properties: ['openFile', 'multiSelections'],
      filters: [
        { name: 'Documents', extensions: ['pdf', 'docx', 'doc', 'txt'] },
        { name: 'Images', extensions: ['png', 'jpg', 'jpeg'] },
        { name: 'All Files', extensions: ['*'] },
      ],
    });

    if (result.canceled) {
      return { success: false, files: [] };
    }

    const files = result.filePaths.map((path) => {
      const name = path.split(/[/\\]/).pop() || '';
      const ext = name.split('.').pop()?.toLowerCase() || '';
      let type = 'unknown';

      if (['pdf'].includes(ext)) type = 'application/pdf';
      else if (['docx', 'doc'].includes(ext)) type = 'application/msword';
      else if (['png', 'jpg', 'jpeg'].includes(ext)) type = `image/${ext}`;
      else if (['txt'].includes(ext)) type = 'text/plain';

      return { name, path, type };
    });

    return { success: true, files };
  });

  // Get user data directory
  ipcMain.handle('app:get-data-path', () => {
    return process.env.ELAWYER_DATA_PATH || join(process.env.HOME || process.env.USERPROFILE || '', 'Documents', 'ELawyerBot');
  });

  // Get settings
  ipcMain.handle('settings:get', async () => {
    // For MVP, return default settings
    return {
      theme: 'light',
      autoSave: true,
      language: 'en',
    };
  });

  // Set settings
  ipcMain.handle('settings:set', async (_settings: Record<string, any>) => {
    // For MVP, just acknowledge
    return { success: true };
  });
}
