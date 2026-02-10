import { useEffect, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { CircularProgress } from '../../renderer/components/ui/Progress';

const processingStages = [
  { id: 1, label: 'Uploading documents...', duration: 500 },
  { id: 2, label: 'Extracting text from files...', duration: 1000 },
  { id: 3, label: 'Analyzing case details...', duration: 1500 },
  { id: 4, label: 'Identifying labor law violations...', duration: 1500 },
  { id: 5, label: 'Generating prediction...', duration: 1000 },
  { id: 6, label: 'Preparing report...', duration: 500 },
];

const tips = [
  'Did you know? Under Philippine labor law, an employee cannot be terminated without just or authorized cause?',
  'The Labor Code of the Philippines requires at least two written notices before an employee can be dismissed.',
  'Illegal dismissal cases must be filed within 4 years from the time the cause of action accrued.',
  'Separation pay is mandatory in cases of retrenchment, redundancy, or installation of labor-saving devices.',
  'Night shift differential is additional compensation of at least 10% of the regular wage.',
];

export const ProcessingStep: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState<Set<number>>(new Set());
  const [progress, setProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    // Rotate tips every 3 seconds
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 3000);

    return () => clearInterval(tipInterval);
  }, []);

  useEffect(() => {
    if (currentStage < processingStages.length) {
      const stage = processingStages[currentStage];

      // Set progress for this stage
      const stageProgress = ((currentStage + 1) / processingStages.length) * 100;
      setProgress(stageProgress);

      const timer = setTimeout(() => {
        setCompletedStages((prev) => new Set([...prev, currentStage]));
        setCurrentStage((prev) => prev + 1);
      }, stage.duration);

      return () => clearTimeout(timer);
    }
  }, [currentStage]);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Progress Circle */}
      <div className="mb-8">
        <CircularProgress value={progress} size={160} strokeWidth={12} />
      </div>

      {/* Current Status */}
      <div className="text-center mb-8">
        {currentStage < processingStages.length ? (
          <>
            <div className="flex items-center justify-center gap-3 mb-2">
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
              <h3 className="text-lg font-medium text-gray-900">
                {processingStages[currentStage].label}
              </h3>
            </div>
            <p className="text-gray-600">
              This usually takes about 10-15 seconds...
            </p>
          </>
        ) : (
          <h3 className="text-lg font-medium text-gray-900">
            Processing complete!
          </h3>
        )}
      </div>

      {/* Stage List */}
      <div className="w-full max-w-md space-y-2 mb-8">
        {processingStages.map((stage, index) => {
          const isCompleted = completedStages.has(index);
          const isCurrent = index === currentStage;

          return (
            <div
              key={stage.id}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                isCompleted
                  ? 'bg-green-50'
                  : isCurrent
                  ? 'bg-blue-50'
                  : 'bg-gray-50'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isCurrent
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-xs">{index + 1}</span>
                )}
              </div>
              <span
                className={`text-sm ${
                  isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Educational Tip */}
      <div className="w-full max-w-md bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <span className="font-medium">Did you know? </span>
          {tips[currentTip]}
        </p>
      </div>
    </div>
  );
};
