import React from 'react';
import { Icon } from "@iconify/react";
import { PageLayout } from './PageLayout';
import { GlassCard, IconButton } from './UIPrimitives';

const MOCK_DATA = {
  balance: "35,292.29",
  currency: "TEA",
  vault: "34,209",
  wallet: "0xfK07...8336"
};

export function Portfolio({ onNavigate }: { onNavigate: (view: any) => void }) {
	return (
    <PageLayout 
      currentView="portfolio" 
      onNavigate={onNavigate}
      headerRight={<IconButton icon="solar:qr-code-linear" />}
    >
      <section className="flex flex-col items-center justify-center py-8">
        <h2 className="mb-2 text-sm font-medium text-muted-foreground">Portfolio Balance</h2>
        <div className="flex items-baseline gap-2">
          <h1 className="font-heading text-4xl font-extrabold text-foreground tracking-tight">
            {MOCK_DATA.balance}
          </h1>
          <span className="text-2xl font-bold text-muted-foreground/60">{MOCK_DATA.currency}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-muted-foreground">{MOCK_DATA.balance} USD</p>
      </section>

      <section className="px-6 py-4">
        <div className="relative mx-auto flex h-[72px] max-w-[340px] items-center justify-between rounded-[36px] bg-black/90 dark:bg-white/10 px-1.5 shadow-xl border border-white/10">
          <button onClick={() => onNavigate('deposit')} className="flex flex-1 items-center justify-center gap-2 pl-2 active:scale-95 transition-transform">
            <Icon icon="solar:arrow-left-down-linear" className="size-5 text-white" />
            <span className="text-base font-medium text-white">Receive</span>
          </button>
          <div className="relative z-10 -mx-3 flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 via-purple-100 to-white dark:from-blue-900 dark:via-purple-900 dark:to-slate-800 p-0.5 shadow-lg ring-4 ring-background">
            <button onClick={() => onNavigate('ai-search')} className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-slate-800 active:scale-90 transition-transform">
              <Icon icon="solar:magic-stick-3-bold-duotone" className="size-7 text-indigo-600" />
            </button>
          </div>
          <button onClick={() => onNavigate('withdrawal')} className="flex flex-1 items-center justify-center gap-2 pr-2 active:scale-95 transition-transform">
            <span className="text-base font-medium text-white">Send</span>
            <Icon icon="solar:arrow-right-up-linear" className="size-5 text-white" />
          </button>
        </div>
      </section>

      <section className="px-6 py-4">
        <GlassCard className="p-5 flex items-center justify-between" onClick={() => onNavigate('activity')}>
          <div className="flex items-center gap-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10 text-foreground">
              <Icon icon="solar:safe-square-linear" className="size-6" />
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground">Recent Activity</span>
              <p className="text-sm font-bold text-foreground">View last transactions</p>
            </div>
          </div>
          <Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground" />
        </GlassCard>
      </section>

      <section className="pl-6 pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">My Assets</h3>
        <div className="flex gap-4 overflow-x-auto pr-6 pb-6 no-scrollbar">
          {[
            { name: 'Solana', symbol: 'SOL', amount: '34,209', usd: '6,534.95', color: '#9945ff' },
            { name: 'Tether', symbol: 'USDT', amount: '1,087', usd: '1,134.95', color: '#26a17b' },
            { name: 'Ethereum', symbol: 'ETH', amount: '2.5', usd: '5,420.00', color: '#627eea' }
          ].map((asset) => (
            <GlassCard key={asset.symbol} className="w-64 shrink-0 p-5 relative overflow-hidden" onClick={() => onNavigate('asset-detail')}>
              <div className="mb-8 flex items-start justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <div className="size-10 rounded-full bg-black flex items-center justify-center" style={{ backgroundColor: asset.color }}>
                    <span className="text-white font-bold">{asset.symbol[0]}</span>
                  </div>
                  <span className="font-bold">{asset.name}</span>
                </div>
              </div>
              <div className="mb-6 relative z-10">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold">{asset.amount}</span>
                  <span className="text-lg font-bold opacity-40">{asset.symbol}</span>
                </div>
                <p className="text-xs font-medium text-muted-foreground">{asset.usd} USD</p>
              </div>
              <div className="absolute -bottom-10 -right-10 size-32 blur-3xl rounded-full opacity-20" style={{ backgroundColor: asset.color }} />
            </GlassCard>
          ))}
        </div>
      </section>
    </PageLayout>
	);
}
