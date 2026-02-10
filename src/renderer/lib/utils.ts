import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(amount);
}

export function generateId(): string {
  return `case_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function getConfidenceColor(confidence: 'HIGH' | 'MEDIUM' | 'LOW'): string {
  switch (confidence) {
    case 'HIGH':
      return 'text-green-600 bg-green-50';
    case 'MEDIUM':
      return 'text-yellow-600 bg-yellow-50';
    case 'LOW':
      return 'text-red-600 bg-red-50';
  }
}

export function getConfidenceLabel(confidence: 'HIGH' | 'MEDIUM' | 'LOW'): string {
  switch (confidence) {
    case 'HIGH':
      return 'High Confidence';
    case 'MEDIUM':
      return 'Medium Confidence';
    case 'LOW':
      return 'Low Confidence';
  }
}
