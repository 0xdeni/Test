
import React from 'react';
import { BottomNav } from './BottomNav';
import { IconButton } from './UIPrimitives';

interface PageLayoutProps {
  // children must be optional to satisfy JSX prop checking in some TypeScript configurations
  children?: React.ReactNode;
  title?: string;
  onBack?: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
  headerRight?: React.ReactNode;
  variant?: 'purple' | 'emerald' | 'blue';
}

export function PageLayout({ children, title, onBack, currentView, onNavigate, headerRight, variant = 'purple' }: PageLayoutProps) {
  const variantColors = {
    purple: 'from-purple-300/20 via-pink-300/20 to-blue-300/20 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20',
    emerald: 'from-emerald-300/20 via-teal-300/20 to-cyan-300/20 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20',
    blue: 'from-blue-300/20 via-indigo-300/20 to-violet-300/20 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-violet-900/20'
  };

  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden text-foreground selection:bg-primary/10 transition-colors duration-300">
      {/* Dynamic Background */}
      <div className={`fixed inset-0 bg-gradient-to-br ${variantColors[variant]} blur-[120px] pointer-events-none transform-gpu`} />
      
      <div className="relative z-10 flex flex-col h-screen">
        <header className="px-6 pt-14 pb-4 flex justify-between items-center sticky top-0 bg-background/5 backdrop-blur-sm z-30">
          {onBack ? (
            <IconButton icon="solar:arrow-left-linear" onClick={onBack} />
          ) : (
            <div className="size-11" />
          )}
          
          {title && <h1 className="text-xl font-bold text-foreground font-heading">{title}</h1>}
          
          {headerRight || <div className="size-11" />}
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
          {children}
        </main>

        <BottomNav currentView={currentView} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
