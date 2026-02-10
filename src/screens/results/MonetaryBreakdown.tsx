import React from 'react';
import { formatCurrency } from '../../renderer/lib/utils';

interface MonetaryBreakdownProps {
  breakdown: {
    total_amount: number;
    breakdown: {
      category: string;
      amount: number;
      description: string;
    }[];
  };
}

export const MonetaryBreakdown: React.FC<MonetaryBreakdownProps> = ({
  breakdown,
}) => {
  return (
    <div className="space-y-6">
      {/* Total */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
        <p className="text-blue-100 mb-1">Estimated Total Award</p>
        <p className="text-4xl font-bold">{formatCurrency(breakdown.total_amount)}</p>
      </div>

      {/* Breakdown */}
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 mb-3">Detailed Breakdown</h4>
        {breakdown.breakdown.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex-1">
              <p className="font-medium text-gray-900">{item.category}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <p className="text-lg font-semibold text-gray-900 ml-4">
              {formatCurrency(item.amount)}
            </p>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <span className="font-medium">Note:</span> Actual awards may vary
          based on the NLRC or court's discretion, additional evidence
          presented, and specific circumstances of the case.
        </p>
      </div>
    </div>
  );
};
