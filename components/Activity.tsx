import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import { PageLayout } from './PageLayout';
import { GlassCard, ListItem, Badge, SegmentedToggle } from './UIPrimitives';

const TRANSACTIONS = [
  { id: 1, type: 'received', asset: 'SOL', amount: '+12.50', status: 'success', date: 'Oct 24, 2023', icon: 'solar:alt-arrow-down-linear', color: 'bg-emerald-500' },
  { id: 2, type: 'sent', asset: 'USDT', amount: '-450.00', status: 'success', date: 'Oct 22, 2023', icon: 'solar:alt-arrow-up-linear', color: 'bg-slate-800' },
  { id: 3, type: 'swap', asset: 'SOL/USDC', amount: '2.00', status: 'pending', date: 'Oct 21, 2023', icon: 'solar:refresh-linear', color: 'bg-indigo-500' },
  { id: 4, type: 'failed', asset: 'BTC', amount: '0.004', status: 'error', date: 'Oct 19, 2023', icon: 'solar:close-circle-linear', color: 'bg-rose-500' },
  { id: 5, type: 'received', asset: 'BRL', amount: '+1,200.00', status: 'success', date: 'Oct 15, 2023', icon: 'solar:wallet-money-linear', color: 'bg-emerald-500' },
];

export function Activity({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [filter, setFilter] = useState('All');

  return (
    <PageLayout 
      title="Activity" 
      currentView="activity" 
      onNavigate={onNavigate}
      variant="purple"
    >
      <div className="px-6 py-4 space-y-6">
        <SegmentedToggle 
          options={['All', 'Income', 'Outcome']} 
          selected={filter} 
          onSelect={(val) => setFilter(val)} 
        />

        <div className="space-y-4">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-2">Recent Transactions</h3>
          <GlassCard className="p-2 space-y-1" hover={false}>
            {TRANSACTIONS.map((tx) => (
              <ListItem 
                key={tx.id}
                icon={tx.icon}
                iconColor={tx.color}
                title={`${tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} ${tx.asset}`}
                subtitle={tx.date}
                rightElement={
                  <div className="text-right">
                    <p className={`text-sm font-bold ${tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-foreground'}`}>
                      {tx.amount}
                    </p>
                    <Badge variant={tx.status as any}>{tx.status}</Badge>
                  </div>
                }
              />
            ))}
          </GlassCard>
        </div>

        <GlassCard className="p-6 flex flex-col items-center text-center space-y-3" hover={false}>
          <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center">
             <Icon icon="solar:document-text-bold-duotone" className="size-8 text-primary" />
          </div>
          <div>
            <p className="font-bold text-foreground">Need a statement?</p>
            <p className="text-xs text-muted-foreground">Export your history as a PDF or CSV file.</p>
          </div>
          <button className="text-sm font-bold text-primary hover:underline">Download Report</button>
        </GlassCard>
      </div>
    </PageLayout>
  );
}
