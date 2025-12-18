import React from 'react';
import { Icon } from "@iconify/react";

// Added key to props type to satisfy strict TS checking when used in maps
export function GlassCard({ children, className = "", hover = true, onClick }: { children?: React.ReactNode, className?: string, hover?: boolean, onClick?: () => void, key?: React.Key }) {
  return (
    <div 
      onClick={onClick}
      className={`rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl shadow-sm transition-all duration-300 ${hover ? 'hover:bg-white/70 dark:hover:bg-slate-900/50 cursor-pointer active:scale-[0.99]' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

// Added key to props and made children optional to prevent "missing children" error in some environments
export const Badge = ({ children, variant = 'default' }: { children?: React.ReactNode, variant?: 'default' | 'success' | 'warning' | 'error' | 'info', key?: React.Key }) => {
  const variants = {
    default: 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300',
    success: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    warning: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
    error: 'bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400',
    info: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};

// Added key to props type to fix TS error when rendering in list iterations
export const ListItem = ({ icon, title, subtitle, rightElement, onClick, iconColor = "bg-primary" }: { icon: string, title: string, subtitle: string, rightElement?: React.ReactNode, onClick?: () => void, iconColor?: string, key?: React.Key }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition-all active:scale-[0.98] group"
  >
    <div className="flex items-center gap-4">
      <div className={`size-12 ${iconColor} rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
        <Icon icon={icon} className="size-6" />
      </div>
      <div className="text-left">
        <p className="text-sm font-bold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>
      </div>
    </div>
    {rightElement}
  </button>
);

export const Metric = ({ label, value, trend }: { label: string, value: string, trend?: { value: string, positive: boolean } }) => (
  <div className="space-y-1">
    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
    <div className="flex items-baseline gap-2">
      <p className="text-lg font-bold text-foreground">{value}</p>
      {trend && (
        <span className={`text-[10px] font-bold ${trend.positive ? 'text-emerald-500' : 'text-rose-500'}`}>
          {trend.positive ? '↑' : '↓'} {trend.value}
        </span>
      )}
    </div>
  </div>
);

export const IconButton = ({ icon, onClick, className = "", badge }: { icon: string, onClick?: () => void, className?: string, badge?: string | number }) => (
  <button 
    onClick={onClick}
    className={`relative size-11 bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 dark:border-white/10 shadow-sm active:scale-95 transition-all hover:bg-white/90 dark:hover:bg-white/20 text-foreground ${className}`}
  >
    <Icon icon={icon} className="size-6" />
    {badge !== undefined && (
      <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-white shadow-sm ring-2 ring-background">
        {badge}
      </div>
    )}
  </button>
);

export const SegmentedToggle = ({ options, selected, onSelect }: { options: string[], selected: string, onSelect: (opt: any) => void }) => (
  <div className="flex p-1 bg-white/30 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-[1.25rem] relative">
    <div 
      className="absolute inset-y-1 bg-white dark:bg-white/10 shadow-sm rounded-2xl transition-all duration-300 ease-spring"
      style={{ 
        width: `calc(${100 / options.length}% - 4px)`,
        left: `calc(${options.indexOf(selected) * (100 / options.length)}% + ${options.indexOf(selected) === 0 ? '4px' : '2px'})`
      }}
    />
    {options.map(opt => (
      <button 
        key={opt}
        onClick={() => onSelect(opt)}
        className={`flex-1 py-3 text-sm font-bold relative z-10 transition-colors duration-300 ${selected === opt ? 'text-foreground' : 'text-muted-foreground'}`}
      >
        {opt}
      </button>
    ))}
  </div>
);

export const InputField = ({ label, value, onChange, placeholder, prefix, type = "text" }: { label: string, value: string, onChange: (e: any) => void, placeholder?: string, prefix?: string, type?: string }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide block ml-1">{label}</label>
    <div className="flex items-center gap-3 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/40 dark:border-white/10 focus-within:ring-2 focus-within:ring-primary/20 transition-all group">
      {prefix && <span className="text-xl font-bold text-foreground opacity-50">{prefix}</span>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-xl font-bold text-foreground outline-none placeholder:text-muted-foreground/30"
      />
    </div>
  </div>
);