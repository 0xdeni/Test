import React from 'react';
import { Icon } from "@iconify/react";
import { PageLayout } from './PageLayout';
import { GlassCard, Metric, IconButton } from './UIPrimitives';

interface AssetDetailProps {
  onNavigate: (view: string) => void;
  asset?: any; // In real app, pass asset data
}

export function AssetDetail({ onNavigate, asset }: AssetDetailProps) {
  const data = asset || { name: 'Solana', symbol: 'SOL', price: '142.34', change: '+5.2%', balance: '34,209', usdValue: '6,534.95' };

  return (
    <PageLayout 
      title={data.name} 
      currentView="portfolio" 
      onNavigate={onNavigate}
      onBack={() => onNavigate('portfolio')}
      headerRight={<IconButton icon="solar:star-linear" />}
      variant="blue"
    >
      <div className="px-6 py-4 space-y-8">
        <section className="text-center space-y-2">
          <div className="size-16 bg-black rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold shadow-xl">
            {data.symbol[0]}
          </div>
          <div>
            <h2 className="text-3xl font-extrabold font-heading">${data.price}</h2>
            <p className="text-emerald-500 font-bold text-sm">{data.change} <span className="text-muted-foreground font-medium ml-1">last 24h</span></p>
          </div>
        </section>

        {/* Pseudo-Chart Area */}
        <GlassCard className="h-48 relative overflow-hidden flex items-end px-4 pb-4 bg-gradient-to-t from-primary/5 to-transparent">
           <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Icon icon="solar:graph-up-bold" className="size-32" />
           </div>
           <div className="flex w-full items-end justify-between h-32 gap-1.5">
              {[40, 70, 45, 90, 65, 85, 100, 75, 95, 60, 80, 110].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-primary/20 rounded-t-sm transition-all duration-1000" 
                  style={{ height: `${h}%`, opacity: i === 11 ? 1 : 0.4 }} 
                />
              ))}
           </div>
        </GlassCard>

        <section className="grid grid-cols-2 gap-4">
           <GlassCard className="p-5 space-y-4">
              <Metric label="Your Balance" value={`${data.balance} ${data.symbol}`} />
              <div className="h-px bg-border" />
              <Metric label="USD Value" value={`$${data.usdValue}`} trend={{ value: '2.4%', positive: true }} />
           </GlassCard>
           <GlassCard className="p-5 space-y-4">
              <Metric label="Market Cap" value="$52.4B" />
              <div className="h-px bg-border" />
              <Metric label="Volume 24h" value="$2.1B" />
           </GlassCard>
        </section>

        <section className="flex gap-4">
          <button 
            onClick={() => onNavigate('deposit')}
            className="flex-1 py-4 rounded-2xl bg-primary text-primary-foreground font-bold shadow-lg active:scale-95 transition-all"
          >
            Buy {data.symbol}
          </button>
          <button 
            onClick={() => onNavigate('withdrawal')}
            className="flex-1 py-4 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/50 dark:border-white/10 font-bold active:scale-95 transition-all"
          >
            Sell
          </button>
        </section>

        <section className="space-y-4">
           <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">About {data.name}</h3>
           <p className="text-sm leading-relaxed text-muted-foreground">
             {data.name} is a decentralized computing platform that uses {data.symbol} to pay for transaction fees. It is designed to facilitate the creation of decentralized applications (dApps).
           </p>
        </section>
      </div>
    </PageLayout>
  );
}
