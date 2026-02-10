import React from 'react';
import { Check } from 'lucide-react';

interface GoalsStepProps {
  data: {
    goals: string[];
  };
  onChange: (updates: any) => void;
}

const goalOptions = [
  {
    id: 'reinstatement',
    title: 'Reinstatement to Position',
    description: 'Get your job back with full benefits and back wages',
    icon: '💼',
  },
  {
    id: 'separation-pay',
    title: 'Separation Pay',
    description: 'Receive fair compensation instead of reinstatement',
    icon: '💰',
  },
  {
    id: 'back-wages',
    title: 'Back Wages',
    description: 'Recover unpaid salary from the time of dismissal',
    icon: '📅',
  },
  {
    id: 'damages',
    title: 'Moral and Exemplary Damages',
    description: 'Compensation for emotional distress and as punishment',
    icon: '⚖️',
  },
  {
    id: 'legal-fees',
    title: "Attorney's Fees",
    description: 'Reimbursement for legal representation costs',
    icon: '👔',
  },
  {
    id: 'other',
    title: 'Other Relief',
    description: 'Any other specific outcome you are seeking',
    icon: '📋',
  },
];

export const GoalsStep: React.FC<GoalsStepProps> = ({ data, onChange }) => {
  const toggleGoal = (goalId: string) => {
    const updatedGoals = data.goals.includes(goalId)
      ? data.goals.filter((g) => g !== goalId)
      : [...data.goals, goalId];
    onChange({ goals: updatedGoals });
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <span className="font-medium">Your goals:</span> Select all outcomes
          you are seeking. This helps us provide more accurate predictions and
          recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {goalOptions.map((goal) => {
          const isSelected = data.goals.includes(goal.id);

          return (
            <button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                isSelected
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    isSelected
                      ? 'border-primary bg-primary'
                      : 'border-gray-300'
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{goal.icon}</span>
                    <h4 className="font-medium text-gray-900">{goal.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{goal.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {data.goals.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          Select at least one goal to continue
        </p>
      )}
    </div>
  );
};
