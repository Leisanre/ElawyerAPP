import { Input } from '../../renderer/components/ui/Input';

interface ConfirmFindingsStepProps {
  data: {
    extractedData?: Record<string, any>;
  };
  onChange: (updates: any) => void;
}

export const ConfirmFindingsStep: React.FC<ConfirmFindingsStepProps> = ({
  data,
  onChange,
}) => {
  const findings = data.extractedData || {};

  const updateField = (field: string, value: any) => {
    onChange({
      extractedData: {
        ...findings,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <span className="font-medium">Review and confirm:</span> Please verify
          the information extracted from your documents. You can edit any field
          if needed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Case Type"
          value={findings.caseType || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('caseType', e.target.value)}
        />

        <Input
          label="Employment Status"
          value={findings.employmentStatus || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('employmentStatus', e.target.value)}
        />

        <Input
          label="Length of Tenure"
          value={findings.tenure || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('tenure', e.target.value)}
          placeholder="e.g., 3 years"
        />

        <Input
          label="Monthly Salary"
          value={findings.salary || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('salary', e.target.value)}
          placeholder="₱"
        />

        <Input
          label="Cause of Dismissal/Termination"
          value={findings.causeOfDismissal || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('causeOfDismissal', e.target.value)}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Were written notices given?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="noticesGiven"
                checked={findings.noticesGiven === true}
                onChange={() => updateField('noticesGiven', true)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="noticesGiven"
                checked={findings.noticesGiven === false}
                onChange={() => updateField('noticesGiven', false)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
