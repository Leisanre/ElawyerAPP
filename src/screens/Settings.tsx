import React from 'react';
import { Card, CardContent, CardHeader } from '../renderer/components/ui/Card';
import { Button } from '../renderer/components/ui/Button';

export const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">General Settings</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  defaultValue="light"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark (Coming Soon)</option>
                  <option value="system">System (Coming Soon)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  defaultValue="en"
                >
                  <option value="en">English</option>
                  <option value="tl">Filipino (Coming Soon)</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Auto-save cases</p>
                  <p className="text-sm text-gray-600">
                    Automatically save cases as you work
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 text-primary focus:ring-primary rounded"
                />
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Data Management</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">Data Directory</p>
                <p className="text-sm text-gray-600 mb-2">
                  C:\Users\...\Documents\ELawyerBot
                </p>
                <Button variant="secondary" size="sm">
                  Open Folder
                </Button>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-medium text-gray-900 mb-2">
                  Clear Application Data
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  This will remove all cached data. Saved cases will not be
                  affected.
                </p>
                <Button variant="danger" size="sm">
                  Clear Cache
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">About</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Version:</span> 1.0.0 (MVP)
                </p>
                <p>
                  <span className="font-medium">Build:</span> Development
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
