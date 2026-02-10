import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Wand2 } from 'lucide-react';
import { Button } from '../renderer/components/ui/Button';
import { Card, CardContent } from '../renderer/components/ui/Card';
import { PartyInfoStep } from './newcase/PartyInfoStep';
import { DocumentUploadStep } from './newcase/DocumentUploadStep';
import { ProcessingStep } from './newcase/ProcessingStep';
import { ConfirmFindingsStep } from './newcase/ConfirmFindingsStep';
import { GoalsStep } from './newcase/GoalsStep';
import { generateId } from '../renderer/lib/utils';

type Step =
  | 'party-info'
  | 'document-upload'
  | 'processing'
  | 'confirm-findings'
  | 'goals';

interface CaseData {
  caseId: string;
  complainant: string;
  respondent: string;
  userRole: 'employee' | 'employer';
  caseType: string;
  documents: UploadedFile[];
  extractedData?: Record<string, any>;
  goals: string[];
}

interface UploadedFile {
  name: string;
  path: string;
  type: string;
  size: number;
}

const steps: { id: Step; title: string; description: string }[] = [
  {
    id: 'party-info',
    title: 'Party Information',
    description: 'Tell us about the parties involved',
  },
  {
    id: 'document-upload',
    title: 'Document Upload',
    description: 'Upload relevant case documents',
  },
  {
    id: 'processing',
    title: 'AI Processing',
    description: 'Analyzing documents with AI',
  },
  {
    id: 'confirm-findings',
    title: 'Confirm Findings',
    description: 'Review and edit extracted information',
  },
  {
    id: 'goals',
    title: 'Your Goals',
    description: 'What would you like to achieve?',
  },
];

// Mock data for demo
const mockCaseData: Partial<CaseData> = {
  complainant: 'Juan Dela Cruz',
  respondent: 'ABC Corporation',
  userRole: 'employee',
  caseType: 'Illegal Dismissal',
  documents: [
    { name: 'employment_contract.pdf', path: '/mock/contract.pdf', type: 'application/pdf', size: 245000 },
    { name: 'termination_notice.pdf', path: '/mock/notice.pdf', type: 'application/pdf', size: 128000 },
    { name: 'salary_records.pdf', path: '/mock/salary.pdf', type: 'application/pdf', size: 89000 },
  ],
  extractedData: {
    caseType: 'Illegal Dismissal',
    employmentStatus: 'Regular',
    tenure: '3 years',
    salary: '25000',
    causeOfDismissal: 'Absenteeism',
    noticesGiven: false,
  },
  goals: ['reinstatement', 'back-wages', 'damages'],
};

export const NewCase: React.FC = () => {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [caseData, setCaseData] = useState<CaseData>({
    caseId: generateId(),
    complainant: '',
    respondent: '',
    userRole: 'employee',
    caseType: '',
    documents: [],
    goals: [],
  });

  const currentStep = steps[currentStepIndex].id;

  const updateCaseData = (updates: Partial<CaseData>) => {
    setCaseData((prev) => ({ ...prev, ...updates }));
  };

  const fillDemoData = () => {
    setCaseData((prev) => ({
      ...prev,
      ...mockCaseData,
      caseId: prev.caseId, // Keep the existing case ID
    }));
  };

  const canGoNext = () => {
    switch (currentStep) {
      case 'party-info':
        return (
          caseData.complainant.trim() !== '' &&
          caseData.respondent.trim() !== '' &&
          caseData.caseType.trim() !== ''
        );
      case 'document-upload':
        return caseData.documents.length > 0;
      case 'processing':
        return false; // Auto-advance
      case 'confirm-findings':
        return true;
      case 'goals':
        return caseData.goals.length > 0;
      default:
        return true;
    }
  };

  const handleNext = async () => {
    if (currentStep === 'document-upload') {
      // Move to processing step
      setCurrentStepIndex((prev) => prev + 1);
      // Simulate processing, then auto-advance
      setTimeout(() => {
        setCaseData((prev) => ({
          ...prev,
          extractedData: mockCaseData.extractedData!,
        }));
        setCurrentStepIndex((prev) => prev + 1);
      }, 3000);
    } else if (currentStep === 'goals') {
      // Complete the wizard and navigate to results
      navigate(`/results/${caseData.caseId}`);
    } else {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentStepIndex === 0 ? 'Cancel' : 'Back'}
            </Button>
            <h1 className="text-lg font-semibold text-gray-900">
              New Case Wizard
            </h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={fillDemoData}
              className="gap-2 text-primary hover:text-primary-dark"
            >
              <Wand2 className="w-4 h-4" />
              Demo Data
            </Button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      index < currentStepIndex
                        ? 'bg-primary text-white scale-110'
                        : index === currentStepIndex
                        ? 'bg-primary text-white ring-4 ring-primary/20'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {index < currentStepIndex ? (
                      <span>✓</span>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className="text-xs mt-1 text-gray-600 hidden sm:block">
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${
                      index < currentStepIndex
                        ? 'bg-primary'
                        : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {steps[currentStepIndex].title}
          </h2>
          <p className="text-gray-600">
            {steps[currentStepIndex].description}
          </p>
        </div>

        <Card className="animate-fade-in">
          <CardContent className="p-6">
            {currentStep === 'party-info' && (
              <PartyInfoStep data={caseData} onChange={updateCaseData} />
            )}
            {currentStep === 'document-upload' && (
              <DocumentUploadStep
                data={caseData}
                onChange={updateCaseData}
              />
            )}
            {currentStep === 'processing' && <ProcessingStep />}
            {currentStep === 'confirm-findings' && (
              <ConfirmFindingsStep
                data={caseData}
                onChange={updateCaseData}
              />
            )}
            {currentStep === 'goals' && (
              <GoalsStep data={caseData} onChange={updateCaseData} />
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        {currentStep !== 'processing' && (
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={!canGoNext()}
              className="gap-2"
            >
              {currentStep === 'goals' ? 'Complete' : 'Continue'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};
