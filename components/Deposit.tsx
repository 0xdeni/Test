import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import { PageLayout } from './PageLayout';
import { GlassCard, InputField, SegmentedToggle } from './UIPrimitives';

export function Deposit({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [currencyType, setCurrencyType] = useState<'BRL' | 'CRYPTO'>('BRL');
  const [amount, setAmount] = useState('0.00');

  return (
    <PageLayout 
      title="Deposit" 
      currentView="deposit" 
      onNavigate={onNavigate} 
      onBack={() => onNavigate('portfolio')}
      variant="blue"
    >
      <div className="px-6 py-4 space-y-6">
        <SegmentedToggle 
          options={['BRL', 'CRYPTO']} 
          selected={currencyType} 
          onSelect={(val) => setCurrencyType(val as any)} 
        />

        <GlassCard className="p-8 flex flex-col items-center justify-center text-center space-y-4" hover={false}>
          <div className="size-48 bg-white rounded-2xl p-4 shadow-inner">
            <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center">
              <Icon icon="solar:qr-code-bold" className="size-32 text-slate-300" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Scan QR to Deposit</p>
            <p className="text-xs text-muted-foreground">Instant {currencyType} transfer</p>
          </div>
        </GlassCard>

        <GlassCard className="p-6 space-y-4">
          <InputField 
            label="Amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            prefix={currencyType === 'BRL' ? "R$" : ""}
            placeholder="0.00"
          />
          
          <button className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-xl active:scale-95 transition-all">
            Generate {currencyType} Code
          </button>
        </GlassCard>
      </div>
    </PageLayout>
  );
}
