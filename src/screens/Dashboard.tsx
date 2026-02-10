import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, FolderOpen, FileText, TrendingUp, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../renderer/components/ui/Card';
import { Button } from '../renderer/components/ui/Button';
import { Badge } from '../renderer/components/ui/Badge';

interface RecentCase {
  id: string;
  complainant: string;
  respondent: string;
  caseType: string;
  lastModified: string;
  outcome?: string;
}

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Mock data - in production, this would come from the backend
  const recentCases: RecentCase[] = [
    {
      id: '1',
      complainant: 'Juan Dela Cruz',
      respondent: 'ABC Corporation',
      caseType: 'Illegal Dismissal',
      lastModified: '2024-01-15',
      outcome: 'Employee Favorable',
    },
    {
      id: '2',
      complainant: 'Maria Santos',
      respondent: 'XYZ Inc.',
      caseType: 'Illegal Suspension',
      lastModified: '2024-01-10',
    },
  ];

  const stats = {
    totalCases: 12,
    successRate: 75,
    reportsGenerated: 8,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">E-Lawyer Bot</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-500">Ready to assist</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to E-Lawyer Bot
            </h2>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </div>
          <p className="text-gray-600">
            Your AI-powered assistant for Philippine Labor Law case prediction
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card
            hoverable
            className="group border-l-4 border-l-primary bg-gradient-to-br from-white to-primary/5"
            onClick={() => navigate('/new-case')}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    New Case
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Start analyzing a new labor case with AI assistance
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Get started</span>
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Plus className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            hoverable
            className="group border-l-4 border-l-warning bg-gradient-to-br from-white to-warning/5"
            onClick={() => navigate('/library')}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-warning transition-colors">
                    Open Case
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Access and manage your saved cases
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm text-warning opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Browse library</span>
                    <FolderOpen className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-3 bg-warning/10 rounded-xl group-hover:bg-warning/20 group-hover:scale-110 transition-all duration-300">
                  <FolderOpen className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card hoverable className="group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Cases</p>
                  <p className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {stats.totalCases}
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card hoverable className="group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Success Rate</p>
                  <p className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {stats.successRate}%
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card hoverable className="group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Reports Generated</p>
                  <p className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {stats.reportsGenerated}
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Cases */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Cases
            </h3>
            {recentCases.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No recent cases found</p>
                <Button
                  variant="primary"
                  className="mt-4"
                  onClick={() => navigate('/new-case')}
                >
                  Create Your First Case
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {recentCases.map((case_) => (
                  <div
                    key={case_.id}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg hover:from-primary/5 hover:to-primary/10 hover:shadow-md transition-all duration-200 cursor-pointer group border border-transparent hover:border-primary/20"
                    onClick={() => navigate(`/results/${case_.id}`)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                          {case_.complainant} vs {case_.respondent}
                        </h4>
                        {case_.outcome && (
                          <Badge variant="success">{case_.outcome}</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {case_.caseType} • Last modified {case_.lastModified}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-primary text-sm font-medium">View →</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
