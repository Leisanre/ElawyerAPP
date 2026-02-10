import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface VsChartProps {
  employeeWin: number;
  employerWin: number;
}

export const VsChart: React.FC<VsChartProps> = ({ employeeWin, employerWin }) => {
  const data = [
    { name: 'Employee', value: employeeWin, color: '#10B981' },
    { name: 'Employer', value: employerWin, color: '#F59E0B' },
  ];

  return (
    <div className="relative w-48 h-48">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900">{employeeWin}%</div>
          <div className="text-sm text-gray-600">Employee</div>
        </div>
      </div>
    </div>
  );
};
