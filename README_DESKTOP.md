# E-Lawyer Bot - Desktop Application

A standalone Windows desktop application for Philippine Labor Law case prediction. Built with Electron + React + TypeScript.

## Features

- **100% Offline**: All processing happens locally on your computer
- **AI-Powered**: Case outcome predictions using machine learning (placeholder for MVP)
- **Document Upload**: Support for PDF, DOCX, and image files
- **PDF Export**: Generate professional reports
- **Case Management**: Save and load cases with .elb file format

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, Radix UI
- **Desktop**: Electron 40
- **Backend**: Python FastAPI (for document processing and ML)
- **Charts**: Recharts
- **Build**: Vite, Electron Builder

## Project Structure

```
elawyer-desktop/
├── package.json                 # Node.js dependencies
├── vite.config.ts              # Vite + Electron config
├── electron-builder.yml        # Packager config
├── src/
│   ├── main/                   # Electron main process
│   │   ├── index.ts            # Entry point
│   │   ├── ipc-handlers.ts     # IPC communication
│   │   └── python-server.ts    # Python server management
│   ├── preload/                # Preload scripts
│   │   └── index.ts
│   └── renderer/               # React frontend
│       ├── App.tsx
│       ├── components/ui/      # UI components
│       ├── screens/            # Main screens
│       ├── hooks/              # Custom React hooks
│       └── lib/                # Utilities
├── python/                     # Python backend
│   ├── main.py                 # FastAPI entry
│   ├── requirements.txt
│   └── services/               # Business logic
├── resources/                  # App resources
└── dist/                       # Build output
```

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.11+ (optional, for backend features)
- Windows 10/11

### Installation

```bash
# Install dependencies
npm install

# Install Python dependencies (optional)
pip install -r python/requirements.txt
```

### Development

```bash
# Start the development server (Electron + Vite)
npm run dev
```

### Building

```bash
# Build for production
npm run build

# Create Windows installer
npm run electron:build
```

### Running the Built App

After building, the installer will be in `dist/` directory. Run the `.exe` file to install.

## Main Screens

### Dashboard
- Welcome message with user stats
- Quick action cards (New Case, Open Case)
- Recent cases list

### New Case Wizard
Multi-step wizard:
1. **Party Information** - Complainant/Respondent details
2. **Document Upload** - File picker with drag-drop
3. **AI Processing** - Progress screen with stages
4. **Confirm Findings** - Review/edit extracted data
5. **Your Goals** - Select desired outcomes

### Results Dashboard
- VS chart showing win probabilities
- Confidence badge (HIGH/MEDIUM/LOW)
- Tabbed content:
  - Why This Score - Factors helping/hurting
  - Monetary Breakdown - Detailed calculation
  - Laws Violated - With explanations
  - Next Steps - Recommendations

### Case Library
- Table view of all saved cases
- Search and filter functionality

## File Format (.elb)

Cases are saved as JSON files with the following structure:

```typescript
interface CaseFile {
  version: string;
  created_at: string;
  last_modified: string;
  case_id: string;
  parties: {
    complainant: string;
    respondent: string;
    user_role: "employee" | "employer";
  };
  case_type: string;
  uploaded_files: UploadedFile[];
  features: Record<string, any>;
  prediction: PredictionResult;
  user_notes?: string;
}
```

## MVP Notes

This is an MVP (Minimum Viable Product). The following features are placeholders:

- **ML Model**: Predictions use mock data
- **Database**: Similar cases use mock data
- **Document Processing**: Text extraction returns mock results
- **PDF Generation**: Returns success but doesn't generate actual PDF

These will be integrated in future versions.

## License

Copyright © 2024 E-Lawyer Bot Team
