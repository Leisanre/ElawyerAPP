import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variantStyles = {
      default: 'bg-gray-100 text-gray-800',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      danger: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
    };

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export interface StatusBadgeProps extends Omit<BadgeProps, 'variant'> {
  status: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
}

export const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ className, status, children, ...props }, ref) => {
    const statusMap: Record<StatusBadgeProps['status'], BadgeProps['variant']> = {
      success: 'success',
      warning: 'warning',
      danger: 'danger',
      info: 'info',
      neutral: 'default',
    };

    return (
      <Badge
        ref={ref}
        variant={statusMap[status]}
        className={className}
        {...props}
      >
        {children}
      </Badge>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';
