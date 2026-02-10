import React from 'react';
import { User, Building2 } from 'lucide-react';
import { Input } from '../../renderer/components/ui/Input';
import { Button } from '../../renderer/components/ui/Button';

interface PartyInfoStepProps {
  data: {
    complainant: string;
    respondent: string;
    userRole: 'employee' | 'employer';
    caseType: string;
  };
  onChange: (updates: any) => void;
}

const caseTypes = [
  'Illegal Dismissal',
  'Illegal Suspension',
  'Underpayment of Wages',
  'Overtime Pay Claims',
  'Illegal Deduction',
  'Discrimination',
  'Retaliation',
  'Other',
];

export const PartyInfoStep: React.FC<PartyInfoStepProps> = ({
  data,
  onChange,
}) => {
  return (
    <div className="space-y-6">
      {/* User Role */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What is your role in this case?
        </label>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant={data.userRole === 'employee' ? 'primary' : 'secondary'}
            onClick={() => onChange({ userRole: 'employee' })}
            className="h-20 flex-col gap-2"
          >
            <User className="w-6 h-6" />
            <span>Employee</span>
          </Button>
          <Button
            variant={data.userRole === 'employer' ? 'primary' : 'secondary'}
            onClick={() => onChange({ userRole: 'employer' })}
            className="h-20 flex-col gap-2"
          >
            <Building2 className="w-6 h-6" />
            <span>Employer</span>
          </Button>
        </div>
      </div>

      {/* Complainant Name */}
      <Input
        label="Complainant Name"
        placeholder="Enter the name of the person filing the case"
        value={data.complainant}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({ complainant: e.target.value })}
        required
      />

      {/* Respondent Name */}
      <Input
        label="Respondent Name"
        placeholder="Enter the name of the person or company being complained against"
        value={data.respondent}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({ respondent: e.target.value })}
        required
      />

      {/* Case Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Case Type
        </label>
        <select
          value={data.caseType}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ caseType: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        >
          <option value="">Select case type...</option>
          {caseTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
