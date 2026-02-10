import React from 'react';
import { Check, X } from 'lucide-react';

interface Factor {
  description: string;
  impact: 'positive' | 'negative';
  weight: number;
}

interface FactorsListProps {
  factors: Factor[];
}

export const FactorsList: React.FC<FactorsListProps> = ({ factors }) => {
  const positiveFactors = factors.filter((f) => f.impact === 'positive');
  const negativeFactors = factors.filter((f) => f.impact === 'negative');

  return (
    <div className="space-y-8">
      {/* Positive Factors */}
      <div>
        <h4 className="text-lg font-semibold text-green-600 mb-4 flex items-center gap-2">
          <Check className="w-5 h-5" />
          Helping Your Case ({positiveFactors.length})
        </h4>
        <div className="space-y-3">
          {positiveFactors.map((factor, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <div className="p-2 bg-green-500 rounded-full flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{factor.description}</p>
                <p className="text-sm text-green-700 mt-1">
                  +{Math.abs(factor.weight)}% impact
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Negative Factors */}
      {negativeFactors.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
            <X className="w-5 h-5" />
            Hurting Your Case ({negativeFactors.length})
          </h4>
          <div className="space-y-3">
            {negativeFactors.map((factor, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <div className="p-2 bg-red-500 rounded-full flex-shrink-0">
                  <X className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    {factor.description}
                  </p>
                  <p className="text-sm text-red-700 mt-1">
                    {factor.weight}% impact
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Analysis:</span> This case shows strong
          indicators for a favorable employee outcome. The primary factor is
          the lack of proper due process, which is a fundamental requirement
          under Philippine labor law.
        </p>
      </div>
    </div>
  );
};
