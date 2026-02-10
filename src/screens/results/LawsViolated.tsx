import { AlertTriangle } from 'lucide-react';
import { Badge } from '../../renderer/components/ui/Badge';

interface LawViolation {
  law: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
}

interface LawsViolatedProps {
  laws: LawViolation[];
}

export const LawsViolated: React.FC<LawsViolatedProps> = ({ laws }) => {
  return (
    <div className="space-y-4">
      {laws.map((law, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0" />
                <h4 className="font-semibold text-gray-900">{law.law}</h4>
                <Badge
                  variant={law.severity === 'high' ? 'danger' : 'warning'}
                  size="sm"
                >
                  {law.severity} severity
                </Badge>
              </div>
              <p className="text-gray-600 pl-8">{law.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Disclaimer */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Legal Reference:</span> These are the
          relevant labor laws and regulations that may have been violated based
          on the information provided. Consult with a lawyer for detailed legal
          advice.
        </p>
      </div>
    </div>
  );
};
