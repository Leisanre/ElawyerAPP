import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Save } from 'lucide-react';
import { Button } from '../renderer/components/ui/Button';
import { Card, CardContent, CardHeader } from '../renderer/components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../renderer/components/ui/Tabs';
import { Badge } from '../renderer/components/ui/Badge';
import { VsChart } from './results/VsChart';
import { FactorsList } from './results/FactorsList';
import { MonetaryBreakdown } from './results/MonetaryBreakdown';
import { LawsViolated } from './results/LawsViolated';
import { NextSteps } from './results/NextSteps';

export const Results: React.FC = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);

  // Mock prediction data - in production, this would come from the backend
  const prediction = {
    complainant: 'Juan Dela Cruz',
    respondent: 'ABC Corporation',
    employee_win_probability: 72,
    employer_win_probability: 28,
    confidence: 'HIGH' as const,
    factors: [
      { description: 'No written notice to explain was given', impact: 'positive' as const, weight: 25 },
      { description: 'No written notice of dismissal was provided', impact: 'positive' as const, weight: 20 },
      { description: 'Regular employment status', impact: 'positive' as const, weight: 15 },
      { description: 'More than 6 months tenure', impact: 'positive' as const, weight: 12 },
      { description: 'No clear evidence of just cause', impact: 'positive' as const, weight: 20 },
      { description: 'Previous disciplinary record exists', impact: 'negative' as const, weight: -8 },
    ],
    monetary_breakdown: {
      total_amount: 185000,
      breakdown: [
        { category: 'Back Wages (3 months)', amount: 75000, description: '₱25,000/month x 3 months' },
        { category: 'Separation Pay', amount: 50000, description: 'One month salary per year of service' },
        { category: '13th Month Pay', amount: 20833, description: 'Prorated 13th month pay' },
        { category: 'Moral Damages', amount: 25000, description: 'Awarded at court discretion' },
        { category: "Attorney's Fees", amount: 14167, description: '10% of total award' },
      ],
    },
    laws_violated: [
      { law: 'Article 297, Labor Code', description: 'No just cause for dismissal established', severity: 'high' as const },
      { law: 'Article 297, Labor Code', description: 'Due process requirements not met (twin notice rule)', severity: 'high' as const },
      { law: 'DOLE Department Order No. 147', description: 'Required hearing/conference not conducted', severity: 'medium' as const },
    ],
    next_steps: [
      'Document all evidence of the dismissal, including dates and conversations',
      'File a complaint with the National Labor Relations Commission (NLRC) within 4 years',
      'Consider seeking assistance from DOLE Single Entry Approach (SEnA) for amicable settlement',
      'Gather witnesses who can attest to your work performance and the dismissal process',
      'Prepare a position paper detailing your arguments against the dismissal',
      'Consider consulting with a labor lawyer for case evaluation',
    ],
  };

  const handleSaveCase = async () => {
    setIsSaving(true);
    try {
      if (window.electronAPI) {
        await window.electronAPI.saveCase({
          case_id: caseId || '',
          version: '1.0.0',
          created_at: new Date().toISOString(),
          last_modified: new Date().toISOString(),
          parties: {
            complainant: prediction.complainant,
            respondent: prediction.respondent,
            user_role: 'employee',
          },
          case_type: 'Illegal Dismissal',
          uploaded_files: [],
          features: {},
          prediction,
        });
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleExportPdf = async () => {
    if (window.electronAPI) {
      await window.electronAPI.exportPdf({
        case_id: caseId || '',
        parties: {
          complainant: prediction.complainant,
          respondent: prediction.respondent,
          user_role: 'employee',
        },
        prediction,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="secondary" onClick={handleSaveCase} disabled={isSaving} className="gap-2">
                <Save className="w-4 h-4" />
                Save Case
              </Button>
              <Button variant="primary" onClick={handleExportPdf} className="gap-2">
                <Download className="w-4 h-4" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {prediction.complainant} <span className="text-gray-400">vs</span>{' '}
            {prediction.respondent}
          </h1>
          <p className="text-gray-600">Case Analysis Results</p>
        </div>

        {/* Main VS Chart */}
        <div className="mb-6">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <VsChart
                  employeeWin={prediction.employee_win_probability}
                  employerWin={prediction.employer_win_probability}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">
                      Employee Favorable
                    </h2>
                    <Badge variant="success">{prediction.confidence} Confidence</Badge>
                  </div>
                  <p className="text-gray-600">
                    Based on our analysis, this case has a strong probability of
                    ruling in favor of the employee. The employer appears to have
                    failed to follow due process requirements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Strength of Case</p>
              <p className="text-2xl font-bold text-green-600">Strong</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Key Violation</p>
              <p className="text-2xl font-bold text-gray-900">
                Due Process
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Potential Award</p>
              <p className="text-2xl font-bold text-gray-900">₱185,000</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="factors">
          <TabsList>
            <TabsTrigger value="factors">Why This Score</TabsTrigger>
            <TabsTrigger value="monetary">Monetary Breakdown</TabsTrigger>
            <TabsTrigger value="laws">Laws Violated</TabsTrigger>
            <TabsTrigger value="next-steps">Next Steps</TabsTrigger>
          </TabsList>

          <TabsContent value="factors">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Factors Affecting Your Case</h3>
              </CardHeader>
              <CardContent>
                <FactorsList factors={prediction.factors} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monetary">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Monetary Breakdown</h3>
              </CardHeader>
              <CardContent>
                <MonetaryBreakdown breakdown={prediction.monetary_breakdown} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="laws">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Laws Violated</h3>
              </CardHeader>
              <CardContent>
                <LawsViolated laws={prediction.laws_violated} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="next-steps">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Recommended Next Steps</h3>
              </CardHeader>
              <CardContent>
                <NextSteps steps={prediction.next_steps} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <span className="font-medium">Disclaimer:</span> This analysis is
            provided for informational purposes only and does not constitute
            legal advice. Please consult with a qualified attorney for advice on
            your specific situation.
          </p>
        </div>
      </main>
    </div>
  );
};
