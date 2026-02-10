PRODUCT REQUIREMENTS DOCUMENT (PRD)
E-Lawyer Bot - Desktop Application (Executable)
________________________________________
DOCUMENT CONTROL
Version	Date	Author	Changes
1.0	February 10, 2026	Development Team	Initial PRD for Desktop App
________________________________________
TABLE OF CONTENTS
1.	Executive Summary
2.	Product Overview
3.	Goals & Objectives
4.	Target Users
5.	User Stories
6.	Features & Requirements
7.	User Flow & Journey
8.	Technical Requirements
9.	Data Structure & ML Model
10.	UI/UX Requirements
11.	Success Metrics
12.	Risks & Mitigations
13.	Timeline & Milestones
14.	Appendices
________________________________________
1. EXECUTIVE SUMMARY
1.1 Product Name
E-Lawyer Bot Desktop - Standalone AI-Powered Philippine Labor Law Case Prediction Application
1.2 Product Vision
To provide Filipino workers and employers with a completely offline, private desktop application that predicts labor law case outcomes using AI, without requiring internet connectivity or cloud services.
1.3 Problem Statement
•	Current Pain Points: 
o	Web-based tools require internet connectivity (not accessible in rural areas)
o	Users concerned about privacy when uploading sensitive documents to the cloud
o	Lawyers/HR professionals need offline tools for client consultations
o	No portable solution for use in areas with poor internet
o	Students/researchers need standalone tool for academic work
1.4 Solution
A downloadable desktop application (.exe for Windows) where users:
1.	Install the app on their computer (Windows 10/11)
2.	Upload legal documents locally (no internet required)
3.	AI analyzes documents offline using embedded ML model
4.	Get instant predictions: 
o	Win probability (e.g., 72% employee favorable)
o	Expected monetary awards (e.g., ₱715,000)
o	Labor law violations identified
o	Similar past cases (from embedded database)
o	Actionable next steps
5.	Generate PDF reports locally
6.	All data stays on user's computer (complete privacy)
1.5 Key Differentiators vs. Web Version
Feature	Web App	Desktop App (.exe)
Internet Required	Yes (always)	No (fully offline)
Data Privacy	Uploads to cloud	Stays on your computer
Installation	None (browser)	One-time install
Updates	Automatic	Manual download
Portability	Any device with browser	Windows PC only
Speed	Network dependent	Instant (local processing)
File Storage	Cloud (30-day limit)	Local (unlimited)
Cost	Free/subscription	One-time purchase or free
1.6 Value Proposition
•	✅ 100% Offline - Works without internet (perfect for remote areas)
•	✅ Complete Privacy - Documents never leave your computer
•	✅ Fast - No network delays, instant analysis
•	✅ Portable - Install on USB drive, use anywhere
•	✅ No Subscription - One-time purchase or free download
•	✅ Professional - Ideal for lawyers, HR consultants doing client work
________________________________________
2. PRODUCT OVERVIEW
2.1 Product Type
Windows Desktop Application (Executable)
•	File format: .exe (Windows executable)
•	Installation: Double-click installer, follow wizard
•	Platform: Windows 10 (64-bit) and Windows 11
Future Versions (Out of Scope for MVP):
•	macOS app (.dmg)
•	Linux app (.AppImage)
•	Android/iOS mobile apps
2.2 Core Functionality
Offline AI-powered labor law case analysis and outcome prediction
•	All processing happens locally on user's computer
•	Embedded ML model (no cloud API calls)
•	Embedded case database (10,000+ cases shipped with app)
•	Local document storage and management
2.3 Scope - MVP (Version 1.0)
Supported Case Types:
1.	✅ Illegal Dismissal / Termination
2.	✅ Unpaid Wages / Money Claims
3.	✅ Constructive Dismissal
Future Versions:
•	Sexual Harassment
•	Discrimination
•	Unfair Labor Practice
Supported File Types:
•	PDF documents
•	Word documents (.docx)
•	Images (JPG, PNG - scanned documents)
•	Excel files (.xlsx) - for payroll records
•	Multiple file upload support
Geographic Coverage:
•	Philippines only (Philippine Labor Code, NLRC, Supreme Court jurisprudence)
2.4 Application Structure
E-Lawyer Bot Desktop/
├── Application Files
│   ├── ELawyerBot.exe          # Main executable
│   ├── config/                 # Settings, preferences
│   ├── models/                 # ML models (embedded)
│   ├── database/               # Case database (SQLite)
│   ├── assets/                 # Icons, images, fonts
│   └── libs/                   # Python runtime, dependencies
│
├── User Data (Created on First Run)
│   ├── cases/                  # User's saved cases
│   ├── uploads/                # Uploaded documents
│   ├── reports/                # Generated PDF reports
│   └── settings.json           # User preferences
│
└── Installation
    ├── Installer.exe           # Setup wizard
    └── Uninstaller.exe         # Removal tool
2.5 Out of Scope (MVP)
•	❌ Cloud sync (all data is local)
•	❌ Multi-user accounts (single-user app)
•	❌ Real-time updates (manual app updates)
•	❌ Lawyer matching/hiring features
•	❌ Filing cases on behalf of users
•	❌ Online chatbot (offline FAQ only)
•	❌ macOS/Linux versions (Windows only)
•	❌ Mobile apps
________________________________________
3. GOALS & OBJECTIVES
3.1 Business Goals
1.	Launch desktop MVP within 4 months (June 2026)
2.	Achieve 500+ downloads in first 3 months post-launch
3.	Maintain 70%+ prediction accuracy (same as web version)
4.	Enable offline access for users in rural Philippines (40% of population)
5.	Position as premium tool for lawyers/HR professionals
3.2 User Goals
1.	Lawyers/HR Professionals: Use during client consultations without internet
2.	Remote Area Users: Access labor law predictions without connectivity
3.	Privacy-Conscious Users: Keep sensitive documents offline
4.	Students/Researchers: Offline tool for case studies and research
5.	Employers/Employees: Quick case assessment without cloud uploads
3.3 Success Criteria
•	✅ App installs successfully on Windows 10/11 (95%+ success rate)
•	✅ Offline document analysis works without internet (100% offline)
•	✅ Predictions match web version accuracy (70%+ correct)
•	✅ Users can analyze a case in <5 minutes (same as web)
•	✅ App size <500MB (reasonable download/install)
•	✅ Runs smoothly on mid-range PCs (4GB RAM, dual-core CPU)
•	✅ Users rate app 4+ stars for ease of use
________________________________________
4. TARGET USERS
4.1 Primary Users
User Persona 1: "Attorney Rosa - Rural Lawyer"
•	Demographics: 42 years old, lawyer in provincial town (Iloilo)
•	Pain Point: Internet connection unreliable, can't use web tools during consultations
•	Goal: Offline tool to quickly assess client cases and provide immediate guidance
•	Tech Savvy: Medium (uses Word, email, but not cloud-heavy)
•	Quote: "I need a tool I can use even when the internet is down, which is often here."
•	Why Desktop App: Needs offline capability, handles 5-10 cases per week
User Persona 2: "Carlo - HR Manager (Small Company)"
•	Demographics: 35 years old, HR manager, 50-employee manufacturing company
•	Pain Point: Needs to assess termination risks before acting, concerned about data privacy
•	Goal: Private tool to evaluate labor disputes without uploading sensitive employee data to cloud
•	Tech Savvy: High (uses HR software, Excel, familiar with desktop apps)
•	Quote: "I can't upload employee files to a website. I need everything to stay on my computer."
•	Why Desktop App: Privacy requirements, professional use case
User Persona 3: "Maria - Terminated Employee (Rural Area)"
•	Demographics: 28 years old, factory worker, terminated, lives in Mindanao town
•	Pain Point: No reliable internet at home, can't access web-based tools
•	Goal: Understand her case outcome using computer at internet cafe (download app once)
•	Tech Savvy: Low-Medium (uses Facebook, basic computer skills)
•	Quote: "Internet is expensive and slow here. I need something I can download once and use anytime."
•	Why Desktop App: Limited internet access, cost constraints
4.2 Secondary Users
User Persona 4: "Prof. Santos - Law Professor"
•	Demographics: 50 years old, teaches labor law at university
•	Pain Point: Needs offline tool for classroom demonstrations and student exercises
•	Goal: Teaching aid for labor law cases, students can practice analysis
•	Tech Savvy: Medium-High
•	Quote: "Perfect for computer lab exercises. Students can analyze cases without needing internet."
•	Why Desktop App: Classroom use (no internet in lab), batch student usage
User Persona 5: "Juan - Small Business Owner"
•	Demographics: 45 years old, restaurant owner, 15 employees
•	Pain Point: Wants to assess labor risks privately before consulting expensive lawyers
•	Goal: Preliminary risk assessment without leaving digital footprints
•	Tech Savvy: Medium
•	Quote: "I want to check my exposure before talking to anyone. Complete privacy."
•	Why Desktop App: Privacy, discretion, one-time cost vs. subscription
4.3 User Distribution (Estimated)
•	40% - Lawyers / Legal Professionals (primary target)
•	25% - Employees (complainants, especially rural)
•	20% - HR / Employers
•	10% - Students / Academics
•	5% - Researchers / NGOs
________________________________________
5. USER STORIES
5.1 Core User Stories (Must-Have - MVP)
As a lawyer,
•	✅ I want to install the app once and use it offline so that I can work in areas without internet
•	✅ I want to import client documents from my computer so that I don't upload to cloud
•	✅ I want to save multiple cases locally so that I can manage several clients
•	✅ I want to generate professional PDF reports so that I can share analysis with clients
•	✅ I want to see prediction explanations so that I can explain to clients why the outcome is likely
•	✅ I want to export case data so that I can use it in other tools (Word, Excel)
As an employee in a remote area,
•	✅ I want to download the app once so that I don't need internet every time I use it
•	✅ I want to analyze my case offline so that I'm not dependent on expensive internet
•	✅ I want to get the same accurate predictions as the web version
•	✅ I want to understand which laws were violated so that I know my rights
As an HR professional,
•	✅ I want to keep all case data on my computer so that sensitive employee info doesn't go to cloud
•	✅ I want to assess termination risks before acting so that I avoid lawsuits
•	✅ I want to run "what-if" scenarios so that I can see impact of different actions
•	✅ I want to password-protect the app so that unauthorized people can't access case data
As a law professor,
•	✅ I want to install the app on classroom computers so that students can practice
•	✅ I want to use it without internet so that computer lab limitations don't stop lessons
•	✅ I want to show similar past cases so that students learn from real examples
As the system,
•	✅ I need to run ML predictions locally so that users don't need internet
•	✅ I need to store everything locally so that user privacy is guaranteed
•	✅ I need to work on low-spec computers so that most users can run it (4GB RAM minimum)
•	✅ I need to update the case database when user downloads updates
5.2 Enhanced User Stories (Nice-to-Have - Future)
As a lawyer,
•	⏳ I want to sync cases to my other computer via USB drive
•	⏳ I want to batch-process multiple cases to save time
•	⏳ I want to customize report templates with my firm's branding
As any user,
•	⏳ I want to automatic updates to get latest case law without manual download
•	⏳ I want to dark mode for comfortable nighttime use
•	⏳ I want to multi-language support (Tagalog, Cebuano)
________________________________________
6. FEATURES & REQUIREMENTS
6.1 Feature List - MVP (Version 1.0)
F1: Installation & Setup
F1.1 Installer Wizard
•	Download: 
o	File name: ELawyerBot_Setup_v1.0.exe
o	Size: ~450MB (includes ML models, database, Python runtime)
o	Download from: Official website (elawyer-bot.ph/download)
o	Checksum/signature: Verify file integrity
•	Installation Process: 
o	Welcome screen with EULA (End User License Agreement)
o	Choose installation directory (default: C:\Program Files\ELawyerBot\)
o	Select components: 
	☑ Main Application (required)
	☑ Case Database (10,000+ cases, required)
	☑ Desktop Shortcut (optional)
	☑ Start Menu Entry (optional)
o	Progress bar (extracting files, installing dependencies)
o	Completion screen with "Launch ELawyer Bot" checkbox
•	First-Run Setup: 
o	Create user data folder (e.g., Documents/ELawyerBot/)
o	Tutorial walkthrough (optional, can skip)
o	Terms of Service acceptance (disclaimer: not legal advice)
o	Privacy notice (all data stays local)
o	Default settings configuration
F1.2 System Requirements Check
•	Minimum Requirements: 
o	OS: Windows 10 (64-bit) or Windows 11
o	RAM: 4GB (8GB recommended)
o	Storage: 1GB free space
o	CPU: Dual-core processor (2.0 GHz+)
o	Display: 1280x720 minimum resolution
•	Pre-Installation Check: 
o	Verify Windows version
o	Check available RAM
o	Check disk space
o	Warn if requirements not met (but allow install)
F1.3 Updates & Versioning
•	Manual Updates (MVP): 
o	Menu: Help → Check for Updates
o	Opens website download page
o	User downloads new installer, overwrites old version
o	Preserves user data folder
•	Version Display: 
o	Show version number in app (e.g., "v1.0.3")
o	Changelog accessible from Help menu
F1.4 Uninstaller
•	Clean Removal: 
o	Start Menu → Uninstall ELawyer Bot
o	Option: "Keep my case data" vs. "Delete everything"
o	Remove application files
o	Optionally remove user data folder
o	Remove registry entries (if any)
________________________________________
F2: Main Application Interface
F2.1 Dashboard / Home Screen
•	Layout:
  ┌────────────────────────────────────────────┐
  │ [Logo] E-Lawyer Bot    [Menu] [Settings]   │
  ├────────────────────────────────────────────┤
  │                                            │
  │          Welcome, [User Name]              │
  │                                            │
  │  ┌──────────────┐  ┌──────────────┐       │
  │  │  New Case    │  │  Open Case   │       │
  │  │              │  │              │       │
  │  │  [+ Start]   │  │  [📁 Browse] │       │
  │  └──────────────┘  └──────────────┘       │
  │                                            │
  │  Recent Cases:                             │
  │  ┌────────────────────────────────────┐   │
  │  │ Santos vs ABC Corp                 │   │
  │  │ Illegal Dismissal | Jan 15, 2026   │   │
  │  │ 72% Employee Win                   │   │
  │  └────────────────────────────────────┘   │
  │  ┌────────────────────────────────────┐   │
  │  │ Cruz vs XYZ Inc                    │   │
  │  │ Unpaid Wages | Jan 10, 2026        │   │
  │  │ 65% Employee Win                   │   │
  │  └────────────────────────────────────┘   │
  │                                            │
  │  [View All Cases →]                        │
  │                                            │
  │  Quick Stats:                              │
  │  📊 Total Cases: 12                        │
  │  ⚖️ Avg Success Rate: 68%                  │
  │  📄 Reports Generated: 8                   │
  └────────────────────────────────────────────┘
•	Main Menu Bar: 
o	File: New Case, Open Case, Save, Export, Exit
o	Edit: Preferences, Clear Cache
o	Tools: Batch Analysis (future), Database Search
o	Help: User Guide, About, Check for Updates, Disclaimer
F2.2 Settings / Preferences
•	General: 
o	Default save location
o	Language: English (Tagalog future)
o	Theme: Light / Dark (future)
•	Privacy: 
o	Auto-delete uploaded files after analysis: Yes/No
o	Clear case history on exit: Yes/No
o	Password protect app: Yes/No (future)
•	Analysis: 
o	Confidence threshold (show predictions only if >50% confidence)
o	Include similar cases in results: Yes/No
o	Max similar cases to show: 5/10/15
•	Reports: 
o	Default PDF template
o	Include company logo: Yes/No (future)
o	Auto-save reports: Yes/No
________________________________________
F3: Case Input Flow (Same as Web, but Local)
F3.1 New Case Wizard
•	Step 1: Party Information 
o	Input fields: 
	Complainant name (employee)
	Respondent name (employer)
	User role: "I am the: ○ Employee ○ Employer"
o	Button: "Next"
•	Step 2: Document Upload 
o	Local File Browser: 
	Button: "Browse Files" → opens Windows file picker
	Drag-and-drop zone (from Windows Explorer)
	Multi-file selection (Ctrl+Click)
	File preview (thumbnails for images/PDFs)
o	Supported Formats: 
	PDF, DOCX, JPG, PNG, XLSX
	Max file size: 50MB per file (no cloud limits)
	Max total files: 20 files
o	File Management: 
	List of uploaded files with: 
	File name
	File size
	File type icon
	[Remove] button
	"Upload More Files" button
	"Scan Document" button (uses webcam/scanner - future)
o	Actions: 
	"Analyze Documents" (primary button)
	"Skip & Fill Manually" (link)
•	Step 3: AI Processing (Local) 
o	Processing Screen: 
	Progress bar with stages: 
	✓ Files loaded (instant)
	⏳ Extracting text... (5-10 seconds)
	⏸ Detecting case type...
	⏸ Analyzing against labor laws...
	Status text: "Processing document 2 of 3..."
	Educational tip rotating every 3 seconds
	NO internet connection required (all local)
o	Processing Speed: 
	Target: <30 seconds for 3 documents (local processing faster than web)
	Uses local CPU/GPU if available
	Multi-threaded processing
•	Step 4: Confirm AI Findings 
o	Same as web version: 
	Show extracted data (case type, employment details, timeline, evidence)
	User can edit any field
	Evidence checklist (✓ Found, ⚠️ Missing, ? Unknown)
	Evidence strength score: 74/100
o	Buttons: "Looks good, continue" / "Edit details"
•	Step 5: Additional Questions 
o	Dynamic form based on case type (same as web)
o	Only shows questions AI couldn't answer from documents
o	Examples: 
	"Was a hearing conducted?" ○ Yes ○ No
	"Do you have witnesses?" Number: ___
o	Button: "Next"
•	Step 6: Your Goals 
o	Radio buttons: 
	○ Full Reinstatement + Backwages + Damages
	○ Monetary Settlement (faster)
	○ Just want to know my rights (informational)
o	"Willing to negotiate?" ○ Yes ○ No
o	Large button: "Get My Prediction"
________________________________________
F4: Analysis & Prediction (Local ML)
F4.1 Local ML Processing
•	Backend Process (All Offline): 
1.	Load embedded ML model from models/ folder
2.	Query embedded case database (SQLite) for historical cases
3.	Extract features (70 universal + case-specific)
4.	Run XGBoost prediction locally (no API calls)
5.	Calculate SHAP values for explainability
6.	Find similar cases from local database
7.	Calculate monetary awards
8.	Generate scenario analysis
9.	Compile recommendations
•	Processing Time: 
o	Target: <20 seconds (faster than web, no network latency)
o	Progress indicator with percentage
o	Can cancel mid-process
F4.2 Results Dashboard
•	Same Layout as Web Version: 
o	Header: "Complainant VS Respondent"
o	Large circular VS chart: 72% Employee | 28% Employer
o	Confidence badge: HIGH / MEDIUM / LOW
o	Quick summary cards (success %, expected award, violations, evidence)
•	Tabbed Interface: 
o	Tab 1: Why This Score (factors helping/hurting)
o	Tab 2: Scenario Analysis (what-if scenarios)
o	Tab 3: Monetary Breakdown (detailed calculation)
o	Tab 4: Laws Violated (with explanations)
o	Tab 5: Similar Cases (from embedded database)
o	Tab 6: Next Steps (recommendations)
•	Desktop-Specific Features: 
o	Larger Charts: Bigger display (not mobile constrained)
o	Expandable Sections: All tabs visible at once (side-by-side)
o	Keyboard Shortcuts: 
	Ctrl+P: Print report
	Ctrl+S: Save case
	Ctrl+E: Export to PDF
	F5: Refresh analysis
•	Action Buttons: 
o	💾 Save Case (to local database)
o	📥 Export PDF Report
o	📊 Export Data (CSV/Excel)
o	🖨️ Print Results
o	🔄 Re-analyze (with different inputs)
o	✖️ Close (back to dashboard)
F4.3 Similar Cases (From Local Database)
•	Embedded Database: 
o	10,000+ cases shipped with app (SQLite database)
o	No internet needed to query
o	Fast search (indexed by case type, features)
•	Display: 
o	5-10 most similar cases
o	Each case card shows: 
	Case number (G.R. No. XXXXX)
	Similarity score (89%)
	Facts summary
	Outcome (Employee Won / Employer Won / Settled)
	Monetary award
	Year decided
	"View Full Details" button (opens case viewer)
•	Case Viewer (New Feature): 
o	Full case details in popup window: 
	Complete facts
	Court reasoning
	Legal basis
	Full text of decision (if available)
	Searchable/printable
________________________________________
F5: Case Management
F5.1 Save & Load Cases
•	Save Case: 
o	Auto-save on analysis complete
o	Manual save: File → Save or Ctrl+S
o	Save location: Documents/ELawyerBot/cases/
o	File format: Custom .elb file (JSON internally)
o	File name: [Complainant]_vs_[Respondent]_[Date].elb
•	Load Case: 
o	File → Open Case or Ctrl+O
o	File browser (filter: .elb files)
o	Double-click .elb file in Windows Explorer (opens app)
o	Recent cases list on dashboard
•	Case Storage: 
o	Unlimited local storage (no cloud limits)
o	Each case includes: 
	Party information
	Uploaded documents (embedded or linked)
	Extracted features
	Prediction results
	User notes (optional)
	Timestamp (created, modified)
F5.2 Case Library
•	View All Cases: 
o	Dashboard → "View All Cases"
o	Table view: 
	Case name
	Case type
	Date created
	Win probability
	Status (Draft / Analyzed / Archived)
	Actions (Open / Delete / Export)
•	Search & Filter: 
o	Search by name, case type, date range
o	Filter: Show only Employee wins / Employer wins / Uncertain
o	Sort by: Date, Success rate, Case name
•	Bulk Actions: 
o	Select multiple cases
o	Batch export (all to PDF)
o	Batch delete
o	Archive old cases
F5.3 Case Notes & Annotations
•	Add Notes: 
o	Text area for user notes on any case
o	Examples: "Follow up with client on evidence" / "Settlement negotiation in progress"
o	Auto-save notes
•	Annotations on Results: 
o	Highlight/comment on specific violations
o	Add reminders (e.g., "File at NLRC by March 15")
________________________________________
F6: PDF Report Generation (Local)
F6.1 Report Templates
•	Default Template: 
o	Professional layout (similar to web version)
o	Sections: 
	Cover page (case title, date, E-Lawyer Bot branding)
	Executive summary (1-page)
	Prediction results (charts, scores)
	Detailed analysis (factors, scenarios)
	Monetary breakdown (table)
	Laws violated (with explanations)
	Similar cases (summary)
	Next steps (checklist)
	Disclaimers (legal notice)
•	Customization (Future): 
o	Add company logo
o	Choose color scheme
o	Include/exclude sections
F6.2 Export Functionality
•	Export PDF: 
o	Button: "Export PDF Report"
o	Save location: Documents/ELawyerBot/reports/
o	File name: Report_[CaseName]_[Date].pdf
o	Uses local PDF library (ReportLab or similar)
o	No internet required
•	Export Data: 
o	Format options: CSV, Excel (.xlsx), JSON
o	What's exported: 
	Case details (all fields)
	Prediction results
	Similar cases data
o	Use case: Import into other tools (Excel analysis, Word mail merge)
•	Print: 
o	Standard Windows print dialog
o	Print preview
o	Save as PDF (via Windows print to PDF)
________________________________________
F7: Database & Updates
F7.1 Embedded Case Database
•	Database Engine: SQLite (file-based, no server needed)
•	Location: app_folder/database/cases.db
•	Size: ~200MB (10,000+ cases with full text)
•	Tables: 
o	historical_cases - Training data (10,000+ rows)
o	user_cases - User's saved cases
o	predictions - Prediction history
•	Search Capabilities: 
o	Full-text search on case facts
o	Filter by case type, year, outcome
o	Find similar cases (cosine similarity)
F7.2 Database Updates (Manual)
•	Update Process: 
o	Help → Check for Updates
o	If new case database available: 
	Download database_update_v1.1.zip from website
	Extract and replace cases.db file
	App detects new database on restart
o	Quarterly updates (every 3 months)
•	What Gets Updated: 
o	New Supreme Court cases added
o	New NLRC cases added
o	Corrected errors in existing cases
o	ML model improvements (separate download)
F7.3 Model Updates
•	Update ML Model: 
o	Download model_update_v1.1.zip
o	Extract to app_folder/models/
o	Overwrite old model files
o	App loads new model on restart
•	Versioning: 
o	Display model version in Settings
o	Show accuracy metrics for current model
________________________________________
F8: Additional Features
F8.1 Offline Help & Documentation
•	Built-in User Guide: 
o	Help → User Guide (opens embedded HTML)
o	Sections: 
	Getting started
	How to analyze a case
	Understanding results
	Troubleshooting
o	Searchable
o	No internet required
•	FAQ: 
o	Common questions about labor law
o	How the AI works
o	Privacy and data security
•	Tooltips: 
o	Hover over any field for explanation
o	Example: Hover over "Twin-Notice Rule" → popup explains it
F8.2 Data Privacy & Security
•	Local Storage Only: 
o	All data in Documents/ELawyerBot/
o	No cloud sync
o	No telemetry/analytics sent (optional anonymous usage stats)
•	Encryption (Future): 
o	Password-protect app on launch
o	Encrypt saved cases (AES-256)
o	Secure deletion (overwrite files on delete)
•	Backup: 
o	File → Backup All Cases → creates .zip file
o	Can restore from backup later
F8.3 Disclaimers & Legal Notices
•	Prominent Disclaimers: 
o	On first launch (Terms of Service)
o	Before showing prediction results
o	In every PDF report footer
o	In Help → About section
•	Content: 
o	"This is not legal advice"
o	"Consult a licensed attorney"
o	"Predictions are statistical estimates"
o	"Individual outcomes vary"
________________________________________
6.2 Non-Functional Requirements
NFR1: Performance
•	Installation: 
o	Download size: <500MB
o	Install time: <2 minutes (SSD), <5 minutes (HDD)
•	Application Startup: 
o	Cold start: <5 seconds (first launch)
o	Warm start: <2 seconds (subsequent launches)
•	Document Processing: 
o	PDF parsing: <5 seconds per document
o	OCR (images): <10 seconds per image
o	AI extraction: <20 seconds total (all documents)
•	ML Prediction: 
o	Prediction generation: <15 seconds
o	Similar case search: <3 seconds
•	Memory Usage: 
o	Idle: <200MB RAM
o	Processing: <800MB RAM (peak)
o	Works on 4GB RAM systems (leaves 3GB for OS)
•	CPU Usage: 
o	Idle: <5% CPU
o	Processing: 50-80% CPU (multi-threaded, temporary)
NFR2: Usability
•	User Interface: 
o	Responsive to window resizing (minimum 1280x720)
o	Keyboard navigation (Tab, Enter, Esc)
o	Standard Windows UI conventions (File/Edit/Help menus)
o	Consistent with Windows 10/11 design language
•	Accessibility: 
o	Screen reader support (NVDA, JAWS)
o	High contrast mode support
o	Keyboard-only operation
o	Scalable fonts (zoom 100%-200%)
•	Error Handling: 
o	Clear error messages (not technical jargon)
o	Suggest solutions ("Try re-uploading a clearer scan")
o	Never crash (catch all exceptions)
o	Auto-save work to prevent data loss
NFR3: Reliability
•	Stability: 
o	No crashes during normal use (99.9% uptime)
o	Graceful handling of: 
	Corrupted files
	Missing files
	Insufficient disk space
	Low memory conditions
•	Data Integrity: 
o	Validate all user input
o	Prevent data corruption
o	Auto-backup before major operations (overwrite case, delete, etc.)
NFR4: Security
•	No Network Communication: 
o	Zero outbound connections (except manual update check)
o	No telemetry/tracking (unless user opts in)
o	Firewall-friendly (doesn't need internet permission)
•	Local Data Security: 
o	Files stored with user permissions (Windows ACLs)
o	No plaintext passwords (if password protection added)
o	Secure temp file handling (delete on exit)
NFR5: Portability
•	Standalone: 
o	No external dependencies (Python runtime embedded)
o	Doesn't require admin rights (can install to user folder)
o	Portable mode: Run from USB drive (future)
•	Compatibility: 
o	Windows 10 (1909+)
o	Windows 11 (all versions)
o	Both 64-bit (32-bit future if needed)
NFR6: Maintainability
•	Modular Code: 
o	Separate UI, logic, ML model layers
o	Easy to update ML model without changing UI
o	Easy to add new case types
•	Logging: 
o	Debug log file (for troubleshooting)
o	User can access: Help → View Log
o	Log rotation (max 10MB per file)
________________________________________
7. USER FLOW & JOURNEY
7.1 Primary User Flow (Happy Path)
START: User Downloads & Installs App
│
▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: Download & Install                                 │
│  - User visits elawyer-bot.ph/download                      │
│  - Downloads ELawyerBot_Setup_v1.0.exe (~450MB)            │
│  - Double-clicks installer                                  │
│  - Follows wizard: Accept EULA → Choose folder → Install   │
│  - Installation completes in ~2 minutes                     │
│  - Clicks "Launch ELawyer Bot"                              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 2: First Launch & Setup                               │
│  - App starts (shows splash screen)                         │
│  - First-run wizard:                                        │
│    1. Welcome screen                                        │
│    2. Terms of Service (must accept)                        │
│    3. Privacy notice (all data local)                       │
│    4. Optional tutorial (can skip)                          │
│  - Lands on Dashboard (empty, no cases yet)                 │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 3: Dashboard - Start New Case                         │
│  - User sees:                                               │
│    ┌──────────────┐  ┌──────────────┐                      │
│    │  New Case    │  │  Open Case   │                      │
│    │  [+ Start]   │  │  [📁 Browse] │                      │
│    └──────────────┘  └──────────────┘                      │
│  - Clicks "New Case"                                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 4: Enter Party Names                                  │
│  - Form:                                                    │
│    Complainant: [Emman Santos________]                      │
│    Respondent:  [ABC Corporation_____]                      │
│    I am the: ● Employee  ○ Employer                         │
│  - Clicks "Next"                                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 5: Upload Documents (LOCAL FILES)                     │
│  - Large drop zone: "Drag files here or click Browse"      │
│  - User clicks "Browse Files"                               │
│  - Windows file picker opens                                │
│  - User navigates to Documents folder                       │
│  - Selects 3 files:                                         │
│    ✓ contract.pdf                                           │
│    ✓ termination_letter.pdf                                │
│    ✓ payslips.jpg                                           │
│  - Files appear in list with [Remove] buttons              │
│  - Clicks "Analyze Documents" (gold button)                 │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 6: AI Processing (OFFLINE, LOCAL)                     │
│  - Progress screen:                                         │
│    ⚖️ Analyzing your documents...                          │
│    ████████████░░░░░░░░ 65%                                │
│    ✓ Files loaded (3 documents)                            │
│    ✓ Text extracted from PDFs                              │
│    ⏳ Detecting case type... (current)                      │
│    ⏸ Analyzing against 10,000+ cases...                    │
│                                                             │
│    Tip: The twin-notice rule requires employers to...      │
│                                                             │
│  - Processing time: ~18 seconds (all on local computer)    │
│  - NO internet connection used                              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 7: Confirm AI Findings                                │
│  - Shows extracted data:                                    │
│    Case Type: [Illegal Dismissal ▼] ✓ Correct              │
│                                                             │
│    Employee Position: Sales Manager ✓                       │
│    Years of Service: 3 years ✓                              │
│    Termination Date: Dec 15, 2025 ✓                         │
│    First Written Notice: ⚠️ Not found ✎ Edit               │
│                                                             │
│    Evidence Found:                                          │
│    ✓ Employment contract                                   │
│    ✓ Termination letter                                    │
│    ✓ Pay slips                                              │
│    ⚠️ First written notice (missing)                        │
│                                                             │
│    Evidence Strength: 74/100                                │
│  - User reviews, clicks "Looks good, continue"             │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 8: Additional Questions                               │
│  - Dynamic questions:                                       │
│    "Was a hearing conducted?"                               │
│    ○ Yes  ● No  ○ Don't know                                │
│                                                             │
│    "Do you have witnesses?"                                 │
│    ● Yes  Number: [2___]                                    │
│  - Clicks "Next"                                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 9: Your Goals                                         │
│  - Radio buttons:                                           │
│    ○ Full Reinstatement + Backwages + Damages              │
│    ● Monetary Settlement (faster)                           │
│    ○ Just want to know my rights                            │
│  - Clicks "Get My Prediction" (large gold button)          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 10: ML Prediction (LOCAL PROCESSING)                  │
│  - Loading screen:                                          │
│    ⚖️ Analyzing your case...                               │
│    ████████████████░░░░ 85%                                │
│    ✓ Case details validated                                │
│    ✓ Matched against labor law database (local)            │
│    ⏳ Calculating win probability...                        │
│    ⏸ Finding similar cases...                              │
│                                                             │
│  - Processing time: ~15 seconds (local ML model)           │
│  - Queries local SQLite database for similar cases         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  ⚠️ DISCLAIMER SCREEN (Must Accept)                         │
│  - Warning icon + full disclaimer text                      │
│  - Checkbox: "I understand this is not legal advice"       │
│  - Button: "I Understand - Show Results"                   │
│  - User checks box and clicks button                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 11: RESULTS DASHBOARD                                 │
│  ┌────────────────────────────────────────────────────┐    │
│  │ Emman Santos VS ABC Corporation                    │    │
│  │                                                     │    │
│  │         ┌──────────────────┐                       │    │
│  │         │   72%  │  28%    │                       │    │
│  │         │ Employee│Employer │                       │    │
│  │         │    ⚖️ VS         │                       │    │
│  │         │ CONFIDENCE: HIGH │                       │    │
│  │         └──────────────────┘                       │    │
│  │                                                     │    │
│  │  🎯 Success: 72%    💰 Award: ₱715,000            │    │
│  │  ⚖️ Violations: 3    📊 Evidence: 74/100          │    │
│  │                                                     │    │
│  │  [Why Score] [Scenarios] [Money] [Laws] [Cases]   │    │
│  │                                                     │    │
│  │  [💾 Save] [📥 Export PDF] [🖨️ Print] [🔄 Edit]    │    │
│  └────────────────────────────────────────────────────┘    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 12: User Explores Tabs                                │
│  - Clicks "Why This Score" tab:                             │
│    Factors Helping: ✓ Twin-notice violation (+25%)         │
│                     ✓ Strong evidence (+15%)               │
│    Factors Hurting: ⚠️ Missing notice (-5%)                │
│                                                             │
│  - Clicks "Similar Cases" tab:                              │
│    Shows 5 cases from embedded database (offline)          │
│    Santos vs XYZ (2023) - 89% similar - Employee Won       │
│    Cruz vs ABC (2022) - 82% similar - Settlement           │
│                                                             │
│  - Clicks "Monetary Breakdown" tab:                         │
│    Backwages: ₱450,000                                     │
│    Separation: ₱150,000                                    │
│    Damages: ₱110,000                                       │
│    TOTAL: ₱715,000                                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 13: Save Case & Export Report                         │
│  - User clicks "Save Case" (💾)                             │
│  - Auto-saves to: Documents/ELawyerBot/cases/              │
│    File: Santos_vs_ABC_2026-02-10.elb                      │
│  - Confirmation: "Case saved successfully ✓"               │
│                                                             │
│  - User clicks "Export PDF" (📥)                            │
│  - Save dialog: Documents/ELawyerBot/reports/              │
│    File: Report_Santos_vs_ABC_2026-02-10.pdf              │
│  - PDF generated in ~3 seconds (local, no internet)        │
│  - Confirmation: "Report exported ✓ Open folder?"          │
│  - User clicks "Yes" → Windows Explorer opens folder       │
│  - User sees PDF, opens in Adobe Reader                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 14: Return to Dashboard                               │
│  - User clicks "Close" or ✖️ button                         │
│  - Returns to Dashboard                                     │
│  - Sees saved case in "Recent Cases" list:                  │
│    ┌────────────────────────────────────┐                  │
│    │ Santos vs ABC Corp                 │                  │
│    │ Illegal Dismissal | Feb 10, 2026   │                  │
│    │ 72% Employee Win                   │                  │
│    │ [Open] [Export] [Delete]           │                  │
│    └────────────────────────────────────┘                  │
│                                                             │
│  - User can:                                                │
│    • Start another new case                                 │
│    • Re-open this case to edit/review                       │
│    • Exit app (File → Exit)                                 │
└─────────────────────────────────────────────────────────────┘

END: User has completed full flow, case saved locally
________________________________________
7.2 Alternative Flows
Alt Flow 1: User Has No Documents (Manual Entry)
STEP 5: Upload Documents
│
▼ [User clicks "Skip & Fill Manually"]
│
Manual Entry Form:
├─ Employment Details
│  ├─ Position: [__________]
│  ├─ Hire Date: [__/__/____]
│  ├─ Salary: [₱_________]
│  └─ ...
├─ Termination Details
├─ Timeline
└─ Evidence Checklist (user manually checks boxes)
│
▼ [Continues to STEP 9: Your Goals]
Alt Flow 2: Load Existing Case
Dashboard
│
▼ [User clicks "Open Case"]
│
File Browser (Windows)
├─ Shows .elb files in Documents/ELawyerBot/cases/
│
▼ [User selects file, clicks Open]
│
Case loads → Shows Results Dashboard
├─ All previous data intact
├─ Can re-analyze with different inputs
└─ Can export new report
Alt Flow 3: Batch Analysis (Future)
Dashboard
│
▼ [User clicks Tools → Batch Analysis]
│
Batch Upload Screen:
├─ Upload folder containing multiple case folders
├─ Each folder = one case (naming convention)
│
▼ App processes all cases sequentially
│
Results Table:
├─ List of all cases with predictions
├─ Export all to Excel
└─ Generate batch PDF report
________________________________________
8. TECHNICAL REQUIREMENTS
8.1 Tech Stack
Desktop Application Framework
Primary Choice: Electron (cross-platform, HTML/CSS/JS-based)
Why Electron:
•	✅ Build once, deploy to Windows/Mac/Linux (future)
•	✅ Use existing web frontend code (Next.js/React components)
•	✅ Easy to bundle Python backend (via child process or REST API)
•	✅ Large community, many examples (VS Code, Slack, Discord use Electron)
•	✅ Auto-updater built-in (for future automatic updates)
Electron Stack:
•	UI Layer: React (same components as web version)
•	Styling: Tailwind CSS + shadcn/ui
•	Main Process: Electron (Node.js)
•	Renderer Process: React app (HTML/CSS/JS)
•	Backend: Python (runs as subprocess or local REST API)
Alternative: PyQt/PySide (pure Python)
•	Pros: Single-language stack, native look
•	Cons: More complex UI development, harder to reuse web code
•	Decision: Use Electron to maximize code reuse with web version
________________________________________
Backend (ML & Data Processing)
•	Language: Python 3.10+
•	ML Libraries: 
o	scikit-learn (XGBoost, Random Forest)
o	pandas (data processing)
o	numpy (numerical operations)
o	spaCy or transformers (NLP for text extraction)
o	PyPDF2 or pdfplumber (PDF parsing)
o	python-docx (Word document parsing)
o	pytesseract (OCR for images)
o	openpyxl (Excel files)
o	SHAP (explainability)
•	Local API (Electron ↔ Python Communication): 
o	Option 1: Flask/FastAPI (lightweight REST API on localhost) 
	Electron calls http://localhost:5000/predict
	Python server embedded in app, starts on launch
o	Option 2: Python subprocess (stdin/stdout communication) 
	Electron spawns Python process, sends JSON via stdin
	Python returns JSON via stdout
o	Recommendation: FastAPI (cleaner, easier to debug)
________________________________________
Database (Embedded)
•	Engine: SQLite (file-based, no server)
•	Location: app_folder/database/cases.db
•	Size: ~200MB (10,000+ cases)
•	Tables: 
o	historical_cases (training data)
o	user_cases (user's saved cases)
o	predictions (prediction history)
•	Advantages: 
o	No installation required
o	Fast local queries
o	Portable (single file)
o	No server/daemon needed
________________________________________
File Storage
•	User Data Folder: Documents/ELawyerBot/ 
o	cases/ - Saved cases (.elb files)
o	uploads/ - Uploaded documents (optional, can embed in .elb)
o	reports/ - Generated PDF reports
o	settings.json - User preferences
o	logs/ - Debug logs
•	Application Folder: C:\Program Files\ELawyerBot\ (or user-chosen) 
o	app/ - Electron app files
o	models/ - ML models (XGBoost .pkl files)
o	database/ - Embedded SQLite database
o	python/ - Embedded Python runtime + libraries
o	resources/ - Icons, images, fonts
________________________________________
Packaging & Distribution
Windows Installer
•	Tool: Electron Builder or NSIS (Nullsoft Scriptable Install System)
•	Output: ELawyerBot_Setup_v1.0.exe
•	Includes: 
o	Electron app (bundled)
o	Python runtime (embedded, ~100MB)
o	ML models (~50MB)
o	Case database (~200MB)
o	Total size: ~450MB
•	Installer Features: 
o	Welcome screen
o	EULA acceptance
o	Choose installation directory
o	Component selection (optional)
o	Progress bar
o	Desktop shortcut creation
o	Start Menu entry
o	Uninstaller
Portable Version (Future)
•	No Installation Required: 
o	Extract ZIP to folder
o	Run ELawyerBot.exe
o	Perfect for USB drives
o	All data in same folder
________________________________________
Code Signing (For Trust)
•	Windows Code Signing Certificate: 
o	Sign .exe with certificate (prevents "Unknown Publisher" warning)
o	Costs ~$200/year (DigiCert, Sectigo)
o	Shows "Verified Publisher: E-Lawyer Bot"
o	Users more likely to trust and install
________________________________________
8.2 System Architecture
┌─────────────────────────────────────────────────────────────┐
│                    DESKTOP APPLICATION                      │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │              ELECTRON MAIN PROCESS                    │ │
│  │  - Window management                                  │ │
│  │  - File system access                                 │ │
│  │  - Start Python backend                               │ │
│  │  - IPC (Inter-Process Communication)                  │ │
│  └────────────┬──────────────────────────────────────────┘ │
│               │                                             │
│  ┌────────────▼──────────────────────────────────────────┐ │
│  │         ELECTRON RENDERER PROCESS (UI)               │ │
│  │  ┌─────────────────────────────────────────────┐     │ │
│  │  │          React Frontend (Same as Web)       │     │ │
│  │  │  - Dashboard                                │     │ │
│  │  │  - Upload Screen                            │     │ │
│  │  │  - Results Display                          │     │ │
│  │  │  - Charts (Recharts)                        │     │ │
│  │  │  - Tailwind CSS + shadcn/ui                 │     │ │
│  │  └─────────────────────────────────────────────┘     │ │
│  └────────────┬──────────────────────────────────────────┘ │
└───────────────┼──────────────────────────────────────────────┘
                │
                │ HTTP REST API (localhost:5000)
                │ OR stdin/stdout IPC
                ▼
┌─────────────────────────────────────────────────────────────┐
│              PYTHON BACKEND (Local Server)                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              FastAPI / Flask                         │   │
│  │  POST /api/extract - Document extraction            │   │
│  │  POST /api/predict - ML prediction                  │   │
│  │  GET  /api/similar-cases - Query database           │   │
│  └────────────┬─────────────────────────────────────────┘   │
│               │                                             │
│  ┌────────────▼─────────────────────────────────────────┐   │
│  │        Document Processing Pipeline              │   │
│  │  - PDF Parser (pdfplumber)                           │   │
│  │  - OCR Engine (pytesseract)                          │   │
│  │  - NLP Engine (spaCy)                                │   │
│  └────────────┬─────────────────────────────────────────┘   │
│               │                                             │
│  ┌────────────▼─────────────────────────────────────────┐   │
│  │            ML Model (XGBoost)                        │   │
│  │  - Load model from models/xgboost_model.pkl         │   │
│  │  - Feature extraction                                │   │
│  │  - Prediction generation                             │   │
│  │  - SHAP explainability                               │   │
│  └────────────┬─────────────────────────────────────────┘   │
└───────────────┼──────────────────────────────────────────────┘
                │
                │ SQLite queries (local file)
                ▼
┌─────────────────────────────────────────────────────────────┐
│           EMBEDDED SQLITE DATABASE (Local File)             │
│  File: app_folder/database/cases.db (~200MB)                │
│  - historical_cases table (10,000+ rows)                    │
│  - user_cases table (user's saved cases)                    │
│  - predictions table (prediction history)                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  LOCAL FILE SYSTEM                          │
│  Documents/ELawyerBot/                                      │
│  ├── cases/           - User's saved .elb files             │
│  ├── uploads/         - Uploaded documents                  │
│  ├── reports/         - Generated PDF reports               │
│  └── settings.json    - User preferences                    │
└─────────────────────────────────────────────────────────────┘

NOTE: NO INTERNET CONNECTION REQUIRED FOR ANY OPERATION
________________________________________
8.3 API Specifications (Electron ↔ Python)
API 1: Extract Document (Local)
POST http://localhost:5000/api/extract
Content-Type: application/json

Request:
{
  "file_paths": [
    "C:\\Users\\User\\Documents\\ELawyerBot\\uploads\\contract.pdf",
    "C:\\Users\\User\\Documents\\ELawyerBot\\uploads\\termination.pdf",
    "C:\\Users\\User\\Documents\\ELawyerBot\\uploads\\payslips.jpg"
  ]
}

Response:
{
  "success": true,
  "extraction_time": 18.5,
  "case_type_detected": "illegal_dismissal",
  "case_type_confidence": 0.92,
  "extracted_features": {
    "universal": {
      "employee_full_name": "Emman Santos",
      "employee_position": "Sales Manager",
      // ... all 70 universal fields
    },
    "dismissal_specific": {
      "cause_of_termination": "Tardiness",
      "first_written_notice": { "received": false, "confidence": 0.95 },
      // ... dismissal-specific fields
    }
  },
  "evidence_found": [
    { "type": "employment_contract", "found": true, "source": "contract.pdf" },
    { "type": "first_written_notice", "found": false }
  ],
  "confidence_score": 0.87
}
API 2: Generate Prediction (Local)
POST http://localhost:5000/api/predict
Content-Type: application/json

Request:
{
  "confirmed_features": {
    "universal": { /* 70 fields */ },
    "case_specific": { /* case-type fields */ }
  },
  "user_goal": "monetary_settlement"
}

Response:
{
  "success": true,
  "prediction_time": 14.8,
  "prediction": {
    "outcome_binary": 1,
    "outcome_probability": 0.72,
    "outcome_text": "Employee Likely to Win",
    "confidence_level": "high",
    "legal_basis": [ /* array of laws */ ],
    "violations_found": [ /* array of violations */ ],
    "monetary_awards": { /* detailed breakdown */ },
    "similar_cases": [ /* from local DB */ ],
    "scenario_analysis": { /* what-if scenarios */ },
    "next_steps": [ /* recommendations */ ]
  }
}
API 3: Query Similar Cases (Local Database)
GET http://localhost:5000/api/similar-cases?case_type=illegal_dismissal&features={...}&limit=5

Response:
{
  "success": true,
  "similar_cases": [
    {
      "case_number": "G.R. No. 230642",
      "similarity_score": 0.89,
      "facts": "Employee, 3 years, dismissed for tardiness...",
      "outcome": "employee_won",
      "monetary_award": 450000,
      "year": 2023
    },
    // ... 4 more cases
  ]
}
API 4: Save Case (File System)
POST http://localhost:5000/api/save-case
Content-Type: application/json

Request:
{
  "case_data": {
    "complainant": "Emman Santos",
    "respondent": "ABC Corp",
    // ... all case data
  },
  "file_path": "C:\\Users\\User\\Documents\\ELawyerBot\\cases\\Santos_vs_ABC_2026-02-10.elb"
}

Response:
{
  "success": true,
  "saved_path": "C:\\Users\\User\\Documents\\ELawyerBot\\cases\\Santos_vs_ABC_2026-02-10.elb"
}
________________________________________
8.4 Data Persistence
Case File Format (.elb)
File Extension: .elb (E-Lawyer Bot Case File) Format: JSON (human-readable, editable if needed) Structure:
json
{
  "version": "1.0",
  "created_at": "2026-02-10T10:30:00Z",
  "last_modified": "2026-02-10T11:15:00Z",
  "case_id": "uuid-here",
  
  "parties": {
    "complainant": "Emman Santos",
    "respondent": "ABC Corporation",
    "user_role": "employee"
  },
  
  "case_type": "illegal_dismissal",
  
  "uploaded_files": [
    {
      "original_path": "C:\\Users\\...\\contract.pdf",
      "embedded": true,  // File embedded in .elb as base64
      "base64_data": "JVBERi0xLjQKJeLjz9...",  // Or null if linked
      "file_name": "contract.pdf",
      "file_size": 245678
    }
  ],
  
  "features": {
    "universal": { /* 70 fields */ },
    "case_specific": { /* case-type fields */ }
  },
  
  "prediction": {
    "outcome_probability": 0.72,
    "outcome_text": "Employee Likely to Win",
    // ... full prediction results
  },
  
  "user_notes": "Follow up with client on Feb 15",
  
  "metadata": {
    "ml_model_version": "1.0.2",
    "database_version": "2026-01"
  }
}
File Size:
•	Without embedded files: ~50KB (just data)
•	With embedded files: 50KB + file sizes (e.g., 2MB total for 3 docs)
Advantages:
•	Portable (single file contains everything)
•	Shareable (send .elb file to colleague)
•	Backup-friendly (copy file = backup case)
________________________________________
Settings File (settings.json)
Location: Documents/ELawyerBot/settings.json
json
{
  "version": "1.0",
  "general": {
    "language": "english",
    "theme": "light",
    "default_save_location": "C:\\Users\\User\\Documents\\ELawyerBot\\cases"
  },
  "privacy": {
    "auto_delete_uploads": false,
    "clear_history_on_exit": false,
    "password_protect": false
  },
  "analysis": {
    "confidence_threshold": 0.5,
    "include_similar_cases": true,
    "max_similar_cases": 5
  },
  "reports": {
    "default_template": "standard",
    "auto_save_reports": true
  },
  "window": {
    "width": 1280,
    "height": 900,
    "maximized": false
  }
}
```

---

### **8.5 Security & Privacy**

#### **No Cloud, No Network**
- ✅ **Zero outbound connections** (except manual update check)
- ✅ All processing local (CPU/RAM)
- ✅ No telemetry/analytics sent to servers
- ✅ User can verify: Monitor network traffic (should be zero)

#### **Data Encryption (Future Enhancement)**
- **Option:** Password-protect app on launch
- **Implementation:**
  - Encrypt `settings.json` and `.elb` files with user password (AES-256)
  - Require password on app start
  - Decrypt files in memory only
- **Use Case:** Lawyers with sensitive client data

#### **Secure File Deletion (Future)**
- When user deletes case:
  - Overwrite file with random data (DoD 5220.22-M standard)
  - Prevent recovery with forensic tools

#### **User Data Isolation**
- Each user's data in their own Windows user profile
- No sharing between Windows users
- Respects Windows file permissions

---

### **8.6 Performance Optimization**

#### **Fast Startup**
- **Lazy Loading:**
  - Load ML model only when needed (first prediction)
  - Don't load full database on startup
  - Cache frequently-used data in memory
  
- **Splash Screen:**
  - Show branding while initializing (hides startup delay)
  - Pre-load critical components in background

#### **Efficient Document Processing**
- **Multi-threading:**
  - Process multiple documents in parallel
  - Use all CPU cores (Python `multiprocessing`)
  
- **Caching:**
  - Cache OCR results (if user re-analyzes same document)
  - Cache extracted text from PDFs

#### **Memory Management**
- **Release Memory:**
  - Clear extracted text after processing
  - Unload ML model if idle for 5 minutes (reload on next use)
  - Garbage collection after each prediction

#### **Database Query Optimization**
- **Indexing:**
  - Index on `case_type`, `outcome_binary`, `decision_year`
  - Full-text index on `facts_summary`
- **Query Limits:**
  - Only fetch top 10 similar cases (not all 10,000)
  - Use LIMIT in SQL queries

---

## **9. DATA STRUCTURE & ML MODEL**

### **9.1 Feature Set**
**Same as web version:**
- **Universal Features:** 70 fields (party info, employment, compensation, timeline, etc.)
- **Case-Specific Features:** 250+ fields (illegal dismissal, unpaid wages, constructive dismissal, etc.)
- **Output Features:** 50 fields (prediction, legal basis, violations, awards, scenarios)

**Total:** ~370 data points

**Reference:** See Section 9 of Web PRD for complete field definitions.

---

### **9.2 ML Model (Embedded)**

#### **Model Files (Shipped with App)**
```
models/
├── xgboost_model.pkl         # Primary model (XGBoost, ~20MB)
├── random_forest_model.pkl   # Secondary model (Random Forest, ~15MB)
├── logistic_model.pkl        # Baseline (Logistic Regression, ~5MB)
├── feature_scaler.pkl        # StandardScaler for normalization
├── label_encoder.pkl         # For categorical encoding
├── tfidf_vectorizer.pkl      # For text features
└── model_metadata.json       # Version, accuracy, training date
Total Size: ~50MB
Model Loading (Python)
python
import pickle
import xgboost as xgb

# Load models on startup (or lazy load)
with open('models/xgboost_model.pkl', 'rb') as f:
    xgb_model = pickle.load(f)

with open('models/feature_scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

# Use for prediction
def predict_outcome(features):
    # Scale features
    features_scaled = scaler.transform(features)
    
    # Predict
    probability = xgb_model.predict_proba(features_scaled)[0][1]  # Probability of employee win
    
    return probability
Model Performance (Same as Web)
•	Accuracy: 70%+ on validation set
•	Precision: 72%+
•	Recall: 68%+
•	F1-Score: 70%+
•	AUC-ROC: 0.75+
Model Updates
•	Quarterly Updates: New model released every 3 months
•	Download: User downloads model_update_v1.1.zip from website
•	Install: Extract to models/ folder, overwrite old files
•	Auto-Detection: App loads newest model based on version in model_metadata.json
________________________________________
9.3 Database (10,000+ Cases)
Embedded SQLite Database
File: database/cases.db (~200MB)
Schema:
sql
CREATE TABLE historical_cases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  case_number VARCHAR(50) UNIQUE,
  decision_date DATE,
  court_level VARCHAR(50),
  case_type VARCHAR(50),
  
  -- Features (JSON for flexibility)
  universal_features TEXT,  -- JSON blob
  case_specific_features TEXT,  -- JSON blob
  
  -- Ground truth
  outcome_binary INTEGER,  -- 0 or 1
  outcome_text VARCHAR(100),
  monetary_award INTEGER,
  
  -- Legal analysis
  legal_basis TEXT,  -- JSON array
  violations_identified TEXT,  -- JSON array
  
  -- Case narrative
  facts_summary TEXT,
  court_reasoning TEXT,
  
  -- Metadata
  added_date DATE,
  data_quality_score INTEGER
);

CREATE INDEX idx_case_type ON historical_cases(case_type);
CREATE INDEX idx_outcome ON historical_cases(outcome_binary);
CREATE INDEX idx_decision_date ON historical_cases(decision_date);

-- Full-text search
CREATE VIRTUAL TABLE facts_fts USING fts5(facts_summary, content=historical_cases);
Querying:
python
import sqlite3

conn = sqlite3.connect('database/cases.db')
cursor = conn.cursor()

# Find similar cases
cursor.execute('''
  SELECT case_number, facts_summary, outcome_binary, monetary_award
  FROM historical_cases
  WHERE case_type = ?
  ORDER BY similarity_score DESC  -- Calculated via cosine similarity
  LIMIT 5
''', ('illegal_dismissal',))

similar_cases = cursor.fetchall()
```

---

### **9.4 Similarity Matching (Same as Web)**
**Algorithm:** Cosine similarity on vectorized features + boosting for key matches

**See Web PRD Section 9.3** for full algorithm details.

---

## **10. UI/UX REQUIREMENTS**

### **10.1 Design System (Same as Web)**

- **Colors:** Gold `#D4AF37`, Dark Blue `#1E3A8A`, Green/Orange/Red for states
- **Typography:** Inter or Roboto, 16px body, clear hierarchy
- **Spacing:** Tailwind defaults (4px base unit)
- **Components:** shadcn/ui (buttons, cards, inputs, dialogs)
- **Icons:** Lucide React

**Reference:** See Web PRD Section 10.1 for full design system.

---

### **10.2 Desktop-Specific UI Considerations**

#### **Window Management**
- **Default Size:** 1280x900px (comfortable for most screens)
- **Minimum Size:** 1024x768px (enforced, can't resize smaller)
- **Resizable:** Yes (content adapts to window size)
- **Maximize/Minimize:** Standard Windows controls
- **Remember Size:** Save window size/position in `settings.json`, restore on next launch

#### **Native Desktop Elements**
- **Menu Bar:**
```
  File  Edit  Tools  Help
```
  - File: New Case, Open, Save, Export, Exit
  - Edit: Preferences, Undo/Redo (if applicable)
  - Tools: Database Search, Batch Analysis (future)
  - Help: User Guide, About, Check for Updates
  
- **Title Bar:**
  - App icon + "E-Lawyer Bot - [Case Name]"
  - Standard Windows minimize/maximize/close buttons
  
- **Status Bar (Bottom):**
  - Left: Current action (e.g., "Ready" / "Processing..." / "Saved")
  - Right: ML Model version, Database version
  
- **Right-Click Context Menus:**
  - On case list: Open, Export, Delete, Properties
  - On text fields: Cut, Copy, Paste
  - On file list: Remove, Open in Explorer

#### **File Dialogs**
- **Open/Save:** Native Windows file dialogs (not web-based)
- **Drag-and-Drop:** From Windows Explorer to app window
- **File Associations:** Double-clicking `.elb` file opens app

#### **Keyboard Shortcuts**
- **Global:**
  - Ctrl+N: New Case
  - Ctrl+O: Open Case
  - Ctrl+S: Save Case
  - Ctrl+P: Print/Export PDF
  - Ctrl+Q: Quit
  - F1: Help
  - F5: Refresh/Re-analyze
  
- **In Results:**
  - Tab: Switch between tabs
  - Ctrl+E: Export PDF
  - Ctrl+C: Copy results to clipboard
  - Esc: Close window

#### **Notifications**
- **System Tray Notifications (Windows):**
  - "Case analysis complete ✓"
  - "PDF report saved"
  - "Update available"
  
- **In-App Toasts:**
  - Success: Green toast (top-right corner)
  - Error: Red toast
  - Warning: Orange toast
  - Auto-dismiss after 5 seconds

---

### **10.3 Accessibility**

**Same as web version, plus:**
- **Screen Reader Support:** NVDA, JAWS (Windows screen readers)
- **High Contrast Mode:** Detect Windows high contrast settings, adjust UI
- **Keyboard-Only Navigation:** All features accessible via keyboard
- **Font Scaling:** Respect Windows display scaling (125%, 150%, 200%)

---

### **10.4 Error Handling**

#### **Graceful Degradation**
- **If ML Model Fails to Load:**
  - Show warning: "Prediction engine unavailable. Please reinstall app."
  - Offer manual input mode (no predictions, just data entry)
  
- **If Database Corrupted:**
  - Show error: "Case database corrupted. Similar cases unavailable."
  - Allow predictions without similar cases
  
- **If Low Disk Space:**
  - Warn before saving: "Low disk space. Save may fail."
  - Suggest cleanup

#### **Error Messages**
- **User-Friendly:**
  - ❌ Bad: "FileNotFoundError: cases.db"
  - ✅ Good: "We couldn't find the case database. Please reinstall the app or contact support."
  
- **Actionable:**
  - ❌ Bad: "An error occurred."
  - ✅ Good: "We couldn't read this PDF. Try saving it as a different format or scan it at higher quality."

#### **Crash Recovery**
- **Auto-Save:**
  - Save work every 30 seconds
  - On crash, offer to restore last session on restart
  
- **Crash Reporting (Optional):**
  - Ask user: "Would you like to send an error report to help us fix this?"
  - Anonymous crash logs sent if user agrees

---

## **11. SUCCESS METRICS**

### **11.1 Product Metrics**

#### **Downloads & Installation**
- **Target:** 500 downloads in first 3 months
- **Measurement:** Track downloads from website
- **Install Success Rate:** 95%+ (users who download successfully install)

#### **User Engagement**
- **Active Users:** 60%+ of installers use app at least once
- **Cases Analyzed:** Average 2-3 cases per user
- **Session Duration:** 10-15 minutes per session
- **Retention:** 30% return within 30 days

#### **Prediction Quality**
- **Accuracy:** 70%+ (same as web)
- **User Satisfaction:** 4+ stars average rating
- **Useful Predictions:** 80%+ users rate prediction as "helpful" or "very helpful"

#### **Performance**
- **Startup Time:** <5 seconds (cold), <2 seconds (warm)
- **Analysis Time:** <30 seconds for standard case
- **Crash Rate:** <1% of sessions
- **Error Rate:** <5% of analyses fail

---

### **11.2 Technical Metrics**

- **App Size:** <500MB (installer)
- **Memory Usage:** <800MB RAM (during analysis)
- **CPU Usage:** <80% (peak during processing)
- **Disk Usage:** <1GB total (app + user data)

---

### **11.3 User Feedback**

#### **Surveys (Post-Analysis)**
- "Was this prediction helpful?" (1-5 stars)
- "How likely are you to recommend this app?" (NPS)
- "What could we improve?" (open text)

#### **Feature Requests**
- Track most-requested features for future versions
- Examples: macOS version, automatic updates, batch processing

---

## **12. RISKS & MITIGATIONS**

### **12.1 Technical Risks**

#### **Risk 1: Large App Size (450MB)**
- **Threat:** Users on slow internet can't download
- **Likelihood:** Medium
- **Impact:** Medium (lost users)
- **Mitigation:**
  - ✅ Offer minimal version (without database, download separately)
  - ✅ Torrent download option (faster for large files)
  - ✅ Clearly state size before download: "Download size: 450MB (~10 min on 1 Mbps)"

#### **Risk 2: Python Runtime Embedding**
- **Threat:** Embedding Python adds complexity, increases size
- **Likelihood:** Low
- **Impact:** Medium (bloated app)
- **Mitigation:**
  - ✅ Use PyInstaller or Nuitka to bundle Python + dependencies
  - ✅ Strip unnecessary modules (reduce size by 30-40%)
  - ✅ Test on clean Windows VM (ensure no missing dependencies)

#### **Risk 3: Windows Defender / Antivirus False Positives**
- **Threat:** AV software flags .exe as malware (unsigned executable)
- **Likelihood:** Medium (common for unsigned apps)
- **Impact:** High (users scared to install)
- **Mitigation:**
  - ✅ **Code Signing Certificate** (essential)
  - ✅ Submit to Microsoft SmartScreen whitelist
  - ✅ VirusTotal scan link (prove clean)
  - ✅ Clear messaging: "Windows may warn - this is normal for new software. Click 'More Info' → 'Run Anyway'"

#### **Risk 4: Compatibility Issues (Old Windows Versions)**
- **Threat:** App doesn't work on Windows 7 or 32-bit systems
- **Likelihood:** Low (target is Win 10/11 64-bit)
- **Impact:** Low (small user base on old Windows)
- **Mitigation:**
  - ✅ Clearly state requirements: "Requires Windows 10 64-bit or newer"
  - ✅ Installer checks Windows version, warns if incompatible
  - ✅ Future: Offer separate build for Win 7 (if demand exists)

---

### **12.2 User Experience Risks**

#### **Risk 5: Users Expect Automatic Updates**
- **Threat:** Users frustrated by manual update process
- **Likelihood:** Medium
- **Impact:** Low-Medium (inconvenience)
- **Mitigation:**
  - ✅ Clear "Check for Updates" button in Help menu
  - ✅ Notify on startup if update available (once per week max)
  - ✅ Future: Implement auto-updater (Electron has built-in support)

#### **Risk 6: Users Lose Saved Cases**
- **Threat:** Cases saved in obscure location, users can't find them
- **Likelihood:** Low
- **Impact:** Medium (user frustration)
- **Mitigation:**
  - ✅ Default to familiar location: `Documents/ELawyerBot/`
  - ✅ "Open Folder" button next to saved cases
  - ✅ Backup reminder: "Back up your cases folder regularly"
  - ✅ Export function (save to USB, cloud manually)

---

### **12.3 Legal/Compliance Risks**

**Same as web version:**
- **Risk:** Unauthorized Practice of Law (UPL)
- **Risk:** Data Privacy Violations
- **Risk:** Liability for Incorrect Predictions

**Mitigations:** (See Web PRD Section 12.1)
- ✅ Disclaimers everywhere
- ✅ Terms of Service acceptance
- ✅ No legal advice language
- ✅ Recommend consulting lawyer

**Additional for Desktop:**
- ✅ Offline = more private (mitigates some data concerns)
- ✅ No cloud uploads = no breach risk

---

### **12.4 Distribution Risks**

#### **Risk 7: Users Download from Unofficial Sources**
- **Threat:** Fake versions with malware distributed
- **Likelihood:** Low-Medium (if app becomes popular)
- **Impact:** Critical (reputation damage, user harm)
- **Mitigation:**
  - ✅ Official website only: elawyer-bot.ph/download
  - ✅ Code signing (verifies authenticity)
  - ✅ Checksum/hash on website (users can verify)
  - ✅ Warning on website: "Only download from this official page"
  - ✅ DMCA takedowns if found on other sites

---

## **13. TIMELINE & MILESTONES**

### **13.1 Development Phases**

#### **Phase 1: Foundation & Setup (Weeks 1-4)**
**Goal:** Set up desktop development environment, reuse web code

- **Week 1-2: Environment Setup**
  - Install Electron, set up project
  - Configure Electron Builder (for packaging)
  - Set up Python backend (FastAPI local server)
  - Test Electron ↔ Python communication
  
- **Week 3-4: Code Migration**
  - Port React components from web version to Electron
  - Adapt API calls (change from cloud to localhost)
  - Set up file system access (upload from local disk)
  - Test on Windows 10/11

**Deliverable:** Basic Electron app that can open, upload files, display UI

---

#### **Phase 2: Core Features (Weeks 5-10)**
**Goal:** Implement document processing, ML prediction, results display

- **Week 5-6: Document Processing (Local)**
  - Integrate PDF parser, OCR, NLP
  - Test on various document qualities
  - Implement extraction confidence scoring
  
- **Week 7-8: ML Model Integration**
  - Embed XGBoost model in app
  - Test local predictions (no API calls)
  - Implement SHAP explainability
  - Optimize for speed (<15 sec predictions)
  
- **Week 9-10: Results Dashboard**
  - Port results screens from web version
  - Add desktop-specific features (keyboard shortcuts, etc.)
  - Implement tabbed interface
  - Test data visualization (charts, gauges)

**Deliverable:** Working MVP (upload → extract → predict → view results)

---

#### **Phase 3: Database & Case Management (Weeks 11-12)**
**Goal:** Embed case database, implement save/load

- **Week 11: Database Integration**
  - Compile 10,000+ cases into SQLite database
  - Test queries (similar cases, search)
  - Optimize database size (<200MB)
  
- **Week 12: Case Management**
  - Save/load functionality (.elb files)
  - Case library (view all cases)
  - Search and filter cases
  - Export to PDF

**Deliverable:** Complete case management system

---

#### **Phase 4: Polish & Packaging (Weeks 13-14)**
**Goal:** Final touches, create installer, test thoroughly

- **Week 13: UI/UX Polish**
  - Desktop-specific UI improvements
  - Menu bar, keyboard shortcuts
  - Error handling, loading states
  - Settings/preferences screen
  - Help documentation (embedded)
  
- **Week 14: Packaging & Testing**
  - Create installer with Electron Builder
  - Test on clean Windows VMs (Win 10, Win 11)
  - Test on low-spec PC (4GB RAM)
  - Obtain code signing certificate
  - Sign executable

**Deliverable:** Production-ready installer

---

#### **Phase 5: Beta Testing & Launch (Weeks 15-16)**
**Goal:** Beta test with real users, fix bugs, public launch

- **Week 15: Beta Testing**
  - Distribute to 20-30 beta testers (lawyers, HR, students)
  - Collect feedback (surveys, bug reports)
  - Fix critical bugs
  - Performance tuning
  
- **Week 16: Public Launch**
  - Finalize v1.0
  - Upload to official website (download page)
  - Announce launch (social media, forums, email)
  - Monitor downloads, support requests
  - Celebrate! 🎉

**Deliverable:** Live product, publicly downloadable

---

### **13.2 Timeline Summary**
```
┌──────────────────────────────────────────────────────────────┐
│                    16-WEEK TIMELINE                          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  PHASE 1: Foundation (Weeks 1-4)                            │
│  ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                 │
│                                                              │
│  PHASE 2: Core Features (Weeks 5-10)                        │
│  ░░░░░░░░████████████████████░░░░░░░░░░░░░░               │
│                                                              │
│  PHASE 3: Database & Case Mgmt (Weeks 11-12)                │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████░░░░░░               │
│                                                              │
│  PHASE 4: Polish & Package (Weeks 13-14)                    │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████░░           │
│                                                              │
│  PHASE 5: Beta & Launch (Weeks 15-16)                       │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████       │
│                                                              │
└──────────────────────────────────────────────────────────────┘

Week 1  Week 4  Week 8  Week 12  Week 14  Week 16
│       │       │       │         │         │
Setup   Code    ML      Database Package   LAUNCH
        Port    Model                        🚀
Total Timeline: 4 Months (16 Weeks)
Comparison to Web Version:
•	Web: 6 months (24 weeks)
•	Desktop: 4 months (16 weeks)
•	Why faster? Reusing existing web frontend code, no cloud infrastructure setup
________________________________________
13.3 Key Milestones
Milestone	Target Week	Success Criteria
Electron App Runs	Week 2	Basic window opens, UI loads
Document Upload Works	Week 4	Can select files from disk, preview
ML Model Embedded	Week 7	Predictions run offline successfully
Results Dashboard Complete	Week 10	Full results display, all tabs working
Database Integrated	Week 11	Similar cases load from local DB
Save/Load Cases Works	Week 12	Cases save/load as .elb files
Installer Created	Week 14	.exe installer works on clean PC
Beta Testing Complete	Week 15	20+ users tested, bugs fixed
PUBLIC LAUNCH	Week 16	🎉 v1.0 Live & Downloadable
________________________________________
13.4 Post-Launch Roadmap (Months 5-8)
Month 5: Iteration & Bug Fixes
•	Monitor user feedback
•	Fix bugs reported in first month
•	Performance improvements
•	Release v1.0.1, v1.0.2 (minor updates)
Month 6: Feature Enhancements
•	Add password protection (encrypted cases)
•	Dark mode
•	Portable version (USB drive mode)
•	Release v1.1
Month 7: Expansion
•	Add more case types (Sexual Harassment, Discrimination)
•	Update database with new 2026 cases
•	Retrain ML model with latest data
•	Release v1.2
Month 8: Cross-Platform
•	macOS version (.dmg)
•	Linux version (.AppImage)
•	Test on different platforms
•	Release v2.0 (multi-platform)
________________________________________
14. APPENDICES
14.1 Comparison: Desktop vs. Web
Feature	Web App	Desktop App
Internet Required	Always	Never (fully offline)
Installation	None (browser)	One-time install (~2 min)
File Upload	Cloud (AWS S3)	Local disk only
Data Privacy	Uploaded to server	Stays on computer
Processing Speed	Network dependent	Instant (local CPU)
Updates	Automatic	Manual download
Cross-Platform	Any OS with browser	Windows only (Mac/Linux future)
Portability	Access from anywhere	Tied to installed PC
File Storage Limit	10 files, 10MB each	Unlimited (disk space)
Case History	Cloud (30-day limit)	Local (unlimited)
Similar Cases	API query	Local database
PDF Export	Server-side generation	Local generation
Collaboration	Shareable links (future)	Share .elb files manually
Cost Model	Free tier + subscription	One-time purchase or free
Use Cases	Quick access, casual users	Lawyers, offline areas, privacy-focused
________________________________________
14.2 Target User Distribution
Desktop App Primary Users:
1.	Lawyers in remote areas (40%) - Poor internet, need offline tool
2.	Privacy-conscious professionals (30%) - HR, employers, don't trust cloud
3.	Employees in rural Philippines (20%) - Limited internet access
4.	Academic/research users (10%) - Computer labs, classroom use
Web App Primary Users:
1.	Casual employees (60%) - Quick check, one-time use
2.	Urban users with good internet (25%)
3.	Mobile users (10%) - Phones, tablets
4.	International users (5%) - Access from abroad
Overlap: Some users will use both (web for quick checks, desktop for serious analysis)
________________________________________
14.3 Monetization Options (Future)
Option 1: Freemium Desktop App
•	Free Version: 
o	3 case analyses per month
o	Basic PDF reports
o	Community support
•	Pro Version ($49 one-time or $9.99/month): 
o	Unlimited cases
o	Advanced reports (custom templates)
•	Password protection
•	Priority support
•	Free updates for 1 year
Option 2: One-Time Purchase
•	$29.99 one-time fee
•	Includes all features
•	Free updates for life
Option 3: Institutional Licensing
•	Lawyer/Firm License: $199/year (5 users)
•	University License: $499/year (unlimited students)
•	NGO/Government: Free or discounted
Recommendation for MVP: Start free, gather users, then introduce Pro version in Month 6.
________________________________________
14.4 Glossary
Same terms as Web PRD, plus:
•	Electron: Framework for building desktop apps with web technologies (HTML/CSS/JS)
•	.exe: Windows executable file (program that runs on Windows)
•	Installer: Setup wizard that installs software on user's computer
•	Portable App: Software that runs without installation (e.g., from USB drive)
•	Code Signing: Cryptographic signature that proves software authenticity
•	SQLite: File-based database (no server required)
•	Embedded: Included within the app (e.g., embedded Python runtime)
•	.elb File: E-Lawyer Bot case file (custom format, JSON internally)
•	Offline: Works without internet connection
________________________________________
14.5 Technical Dependencies
Frontend
•	Electron: ^28.0
•	React: ^18.2
•	Tailwind CSS: ^3.4
•	shadcn/ui: Latest
•	Recharts: ^2.10
Backend (Embedded Python)
•	Python: 3.10+
•	FastAPI: ^0.109
•	scikit-learn: ^1.4
•	XGBoost: ^2.0
•	pandas: ^2.2
•	spaCy: ^3.7
•	pdfplumber: ^0.11
•	pytesseract: ^0.3
•	python-docx: ^1.1
•	openpyxl: ^3.1
•	SHAP: ^0.44
•	Pillow: ^10.2 (image processing)
Packaging
•	Electron Builder: ^24.9
•	PyInstaller: ^6.3 (bundle Python)
•	NSIS: ^3.09 (Windows installer)
Database
•	SQLite: ^3.45 (bundled with Python)
Tools
•	Node.js: ^20.11
•	npm: ^10.3
•	Git: Latest
________________________________________
14.6 Download & Installation Instructions (For Users)
System Requirements
•	Operating System: Windows 10 (64-bit, version 1909 or later) or Windows 11
•	RAM: 4GB minimum (8GB recommended)
•	Storage: 1GB free disk space
•	Processor: Dual-core CPU, 2.0 GHz or faster
•	Display: 1280x720 minimum resolution
•	Additional: No internet required after installation
Download
1.	Visit: https://elawyer-bot.ph/download
2.	Click "Download for Windows" (450MB)
3.	Save ELawyerBot_Setup_v1.0.exe to your Downloads folder
4.	Verify checksum (optional, for security)
Installation
1.	Double-click ELawyerBot_Setup_v1.0.exe
2.	Windows may warn "Unknown Publisher" (if not code-signed yet): 
o	Click "More Info" → "Run Anyway"
3.	Follow installer wizard: 
o	Accept EULA
o	Choose installation folder (default: C:\Program Files\ELawyerBot\)
o	Select components (all recommended)
o	Click "Install"
4.	Wait ~2 minutes for installation
5.	Click "Finish" (check "Launch E-Lawyer Bot" to start immediately)
First Launch
1.	App opens with welcome screen
2.	Accept Terms of Service (includes disclaimer: not legal advice)
3.	Read privacy notice (all data stays local)
4.	Optional: Take 2-minute tutorial
5.	Land on Dashboard → Ready to use!
Uninstallation
1.	Start Menu → E-Lawyer Bot → Uninstall
2.	Choose: "Keep my case data" or "Delete everything"
3.	Follow uninstall wizard
4.	Done!
________________________________________
14.7 FAQs (For Users)
Q: Does this app require internet? A: No! After installation, E-Lawyer Bot works 100% offline. All processing happens on your computer.
Q: Is my data safe? Where is it stored? A: Yes, completely safe. All your documents and cases stay on YOUR computer (in Documents/ELawyerBot/). Nothing is uploaded to the cloud or sent to our servers.
Q: How accurate are the predictions? A: Our AI model has ~70% accuracy based on validation against 10,000+ real Philippine labor cases. However, this is NOT a guarantee—individual case outcomes vary. Always consult a licensed lawyer.
Q: Can I use this on Mac or Linux? A: Not yet. Version 1.0 is Windows only. Mac and Linux versions are planned for 2026.
Q: How do I update the app? A: Go to Help → Check for Updates. If a new version is available, download and install it (your cases will be preserved).
Q: Can I share my case analysis with my lawyer? A: Yes! Export a PDF report (📥 button) and email it, or save the .elb case file and share it with anyone who has E-Lawyer Bot installed.
Q: Is this legal advice? A: NO. E-Lawyer Bot provides statistical predictions based on historical cases. It is an educational tool, NOT a replacement for a licensed attorney. Always consult a lawyer before making legal decisions.
Q: I found a bug. How do I report it? A: Email support@elawyer-bot.ph with details (include screenshot if possible). We appreciate your help!
________________________________________
14.8 Contact & Team
Product Owner: [Your Name] Lead Developer: [Name] Desktop Engineer: [Name] Data Scientist: [Name] UX Designer: [Name] Legal Advisor: [Attorney Name], Philippine Bar
Contact:
•	Email: support@elawyer-bot.ph
•	Website: https://elawyer-bot.ph
•	Download: https://elawyer-bot.ph/download
•	GitHub: https://github.com/elawyer-bot/desktop

