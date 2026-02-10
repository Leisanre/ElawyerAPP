import React from 'react';
import { Card, CardContent } from '../renderer/components/ui/Card';
import { Button } from '../renderer/components/ui/Button';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold text-gray-900">About</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Logo and Title */}
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚖️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                E-Lawyer Bot
              </h2>
              <p className="text-gray-600 mb-4">
                Philippine Labor Law Case Prediction Desktop App
              </p>
              <p className="text-sm text-gray-500">Version 1.0.0 (MVP)</p>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                What is E-Lawyer Bot?
              </h3>
              <p className="text-gray-600 mb-4">
                E-Lawyer Bot is an AI-powered desktop application designed to
                help employees and employers in the Philippines understand their
                labor law cases. Our system analyzes case documents and provides
                predictions on case outcomes based on Philippine labor laws and
                regulations.
              </p>
              <p className="text-gray-600">
                This is a fully offline application - all data stays on your
                computer, ensuring complete privacy and security.
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI-powered case outcome prediction</li>
                <li>• Document upload and analysis</li>
                <li>• Monetary award estimation</li>
                <li>• Laws and regulations reference</li>
                <li>• Step-by-step guidance</li>
                <li>• PDF report generation</li>
                <li>• 100% offline functionality</li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-yellow-200">
            <CardContent className="p-6 bg-yellow-50">
              <h3 className="font-semibold text-yellow-900 mb-3">
                Disclaimer
              </h3>
              <p className="text-yellow-800 text-sm">
                This application provides information and predictions for
                educational purposes only. It does not constitute legal advice.
                Please consult with a qualified attorney for advice on your
                specific case. The developers are not responsible for any
                decisions made based on the information provided by this
                application.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Get Help</h3>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full justify-start">
                  User Guide
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  Report an Issue
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  Check for Updates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
