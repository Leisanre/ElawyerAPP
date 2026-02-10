import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, Calendar } from 'lucide-react';
import { Card, CardContent } from '../renderer/components/ui/Card';
import { Input } from '../renderer/components/ui/Input';
import { Button } from '../renderer/components/ui/Button';
import { Badge } from '../renderer/components/ui/Badge';

interface Case {
  id: string;
  complainant: string;
  respondent: string;
  caseType: string;
  lastModified: string;
  outcome?: string;
}

export const CaseLibrary: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseType, setSelectedCaseType] = useState<string>('all');

  // Mock data
  const cases: Case[] = [
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
    {
      id: '3',
      complainant: 'Pedro Reyes',
      respondent: 'Quick Services LLC',
      caseType: 'Underpayment of Wages',
      lastModified: '2024-01-05',
      outcome: 'Settlement Reached',
    },
  ];

  const caseTypes = ['all', ...Array.from(new Set(cases.map((c) => c.caseType)))];

  const filteredCases = cases.filter((case_) => {
    const matchesSearch =
      case_.complainant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      case_.respondent.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      selectedCaseType === 'all' || case_.caseType === selectedCaseType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold text-gray-900">Case Library</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by complainant or respondent name..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedCaseType}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCaseType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          >
            {caseTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Case Types' : type}
              </option>
            ))}
          </select>
        </div>

        {/* Cases Table */}
        <Card>
          <CardContent className="p-0">
            {filteredCases.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No cases found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Case
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Modified
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Outcome
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredCases.map((case_) => (
                      <tr
                        key={case_.id}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => navigate(`/results/${case_.id}`)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {case_.complainant}
                            </div>
                            <div className="text-sm text-gray-500">
                              vs {case_.respondent}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {case_.caseType}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {case_.lastModified}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {case_.outcome ? (
                            <Badge variant="success">{case_.outcome}</Badge>
                          ) : (
                            <span className="text-sm text-gray-400">
                              Pending
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/results/${case_.id}`);
                            }}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
