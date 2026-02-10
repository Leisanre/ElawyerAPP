import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Dashboard } from './screens/Dashboard';
import { NewCase } from './screens/NewCase';
import { Results } from './screens/Results';
import { CaseLibrary } from './screens/CaseLibrary';
import { Settings } from './screens/Settings';
import { About } from './screens/About';

// Electron API types
declare global {
  interface Window {
    electronAPI?: {
      saveCase: (caseData: any) => Promise<any>;
      loadCase: (filePath: string) => Promise<any>;
      exportPdf: (caseData: any) => Promise<any>;
      selectFiles: () => Promise<any>;
      getDataPath: () => Promise<string>;
      getSettings: () => Promise<any>;
      setSettings: (settings: any) => Promise<any>;
      onNavigate: (callback: (route: string) => void) => void;
      onOpenCase: (callback: (filePath: string) => void) => void;
      onExportPdf: (callback: () => void) => void;
      onCheckUpdates: (callback: () => void) => void;
      removeAllListeners: (channel: string) => void;
      platform: string;
    };
  }
}

function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for navigation events from Electron menu
    if (window.electronAPI) {
      const handleNavigate = (route: string) => {
        navigate(route);
      };

      window.electronAPI.onNavigate(handleNavigate);

      return () => {
        window.electronAPI?.removeAllListeners('navigate');
      };
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-case" element={<NewCase />} />
        <Route path="/results/:caseId" element={<Results />} />
        <Route path="/library" element={<CaseLibrary />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
