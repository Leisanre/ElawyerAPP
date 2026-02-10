import React from 'react';
import { Circle } from 'lucide-react';

interface NextStepsProps {
  steps: string[];
}

export const NextSteps: React.FC<NextStepsProps> = ({ steps }) => {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">
                {index + 1}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-900">{step}</p>
          </div>
          <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
        </div>
      ))}

      {/* Additional Resources */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">
          Additional Resources
        </h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>
            • National Labor Relations Commission (NLRC):{' '}
            <a
              href="https://nlrc.gov.ph"
              className="underline hover:no-underline"
            >
              nlrc.gov.ph
            </a>
          </li>
          <li>
            • Department of Labor and Employment (DOLE):{' '}
            <a
              href="https://dole.gov.ph"
              className="underline hover:no-underline"
            >
              dole.gov.ph
            </a>
          </li>
          <li>
            • Public Attorney's Office (PAO): Free legal assistance for
            qualified individuals
          </li>
        </ul>
      </div>
    </div>
  );
};
