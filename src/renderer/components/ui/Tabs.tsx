import React, { createContext, useContext } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { cn } from '../../lib/utils';

const TabsContext = createContext<{ variant: 'default' | 'pills' }>({
  variant: 'default',
});

export interface TabsProps extends RadixTabs.TabsProps {
  variant?: 'default' | 'pills';
  children: React.ReactNode;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <TabsContext.Provider value={{ variant }}>
        <RadixTabs.Root
          ref={ref}
          className={cn('w-full', className)}
          {...props}
        >
          {children}
        </RadixTabs.Root>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

export const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { variant } = useContext(TabsContext);

  return (
    <RadixTabs.List
      ref={ref}
      className={cn(
        'inline-flex',
        variant === 'default' &&
          'border-b border-gray-200 bg-gray-50 rounded-t-lg p-1',
        variant === 'pills' && 'bg-gray-100 rounded-lg p-1 gap-1',
        className
      )}
      {...props}
    >
      {children}
    </RadixTabs.List>
  );
});

TabsList.displayName = 'TabsList';

export interface TabsTriggerProps extends RadixTabs.TabsTriggerProps {
  children: React.ReactNode;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { variant } = useContext(TabsContext);

    return (
      <RadixTabs.Trigger
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          variant === 'default' && [
            'border-b-2 border-transparent rounded-t-lg',
            'data-[state=active]:border-primary data-[state=active]:text-primary',
            'data-[state=inactive]:text-gray-600 hover:text-gray-900',
          ],
          variant === 'pills' && [
            'rounded-md',
            'data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm',
            'data-[state=inactive]:text-gray-600 hover:text-gray-900',
          ],
          className
        )}
        {...props}
      >
        {children}
      </RadixTabs.Trigger>
    );
  }
);

TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = React.forwardRef<
  HTMLDivElement,
  RadixTabs.TabsContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <RadixTabs.Content
      ref={ref}
      className={cn(
        'mt-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </RadixTabs.Content>
  );
});

TabsContent.displayName = 'TabsContent';
