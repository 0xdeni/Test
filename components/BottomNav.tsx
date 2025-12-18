import React from 'react';
import { Icon } from "@iconify/react";

interface BottomNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function BottomNav({ currentView, onNavigate }: BottomNavProps) {
  const items = [
    { 
      id: 'portfolio', 
      label: 'Home', 
      icon: 'solar:home-smile-linear', 
      activeIcon: 'solar:home-smile-bold-duotone' 
    },
    { 
      id: 'activity', 
      label: 'Activity', 
      icon: 'solar:history-linear', 
      activeIcon: 'solar:history-bold-duotone' 
    },
    { 
      id: 'ai-search', 
      label: 'Ask AI', 
      icon: 'solar:magic-stick-3-linear', 
      activeIcon: 'solar:magic-stick-3-bold-duotone',
      isSpecial: true
    },
    { 
      id: 'deposit', 
      label: 'Deposit', 
      icon: 'solar:wallet-money-linear', 
      activeIcon: 'solar:wallet-money-bold-duotone' 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: 'solar:settings-linear', 
      activeIcon: 'solar:settings-bold-duotone' 
    },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      <div className="w-full max-w-lg bg-white/70 dark:bg-[#170f2a]/90 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-2 flex justify-between items-center relative transition-colors duration-300 pointer-events-auto">
         {items.map((item) => {
            const isActive = currentView === item.id;
            
            if (item.isSpecial) {
                return (
                    <div key={item.id} className="relative -top-6 mx-2">
                        <button
                            onClick={() => onNavigate(item.id)}
                            className={`size-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                                isActive 
                                    ? 'bg-gradient-to-br from-indigo-500 to-purple-600 scale-110 shadow-indigo-500/40 ring-4 ring-white/20' 
                                    : 'bg-gradient-to-br from-slate-800 to-slate-900 scale-100 shadow-slate-900/30'
                            }`}
                        >
                            <Icon 
                                icon={isActive ? item.activeIcon : item.icon} 
                                className="size-7 text-white" 
                            />
                        </button>
                        <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold transition-all duration-300 ${isActive ? 'text-indigo-600' : 'text-slate-400 opacity-0'}`}>
                            {item.label}
                        </span>
                    </div>
                );
            }

            return (
                <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`relative flex flex-1 flex-col items-center justify-center h-14 rounded-2xl transition-all duration-300 group ${
                        isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                    }`}
                >
                    <div className={`transition-all duration-300 relative ${isActive ? '-translate-y-1' : ''}`}>
                        <Icon 
                            icon={isActive ? item.activeIcon : item.icon} 
                            className={`size-6 transition-all duration-300 ${isActive ? 'scale-110 drop-shadow-sm' : 'group-hover:scale-110'}`} 
                        />
                        {isActive && (
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-current rounded-full" />
                        )}
                    </div>
                    <span className={`text-[10px] font-bold mt-1 transition-all duration-300 absolute -bottom-2 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        {item.label}
                    </span>
                </button>
            )
         })}
      </div>
    </div>
  )
}
