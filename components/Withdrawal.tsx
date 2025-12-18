import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import { PageLayout } from './PageLayout';
import { GlassCard, InputField, SegmentedToggle } from './UIPrimitives';

export function Withdrawal({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [currencyType, setCurrencyType] = useState<'BRL' | 'CRYPTO'>('BRL');
  const [address, setAddress] = useState('');

  return (
    <PageLayout 
      title="Withdraw" 
      currentView="withdrawal" 
      onNavigate={onNavigate} 
      onBack={() => onNavigate('portfolio')}
      variant="emerald"
    >
      <div className="px-6 py-4 space-y-6">
        <SegmentedToggle 
          options={['BRL', 'CRYPTO']} 
          selected={currencyType} 
          onSelect={(val) => setCurrencyType(val as any)} 
        />

        <GlassCard className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/5" hover={false}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-emerald-600/80 uppercase tracking-widest">Available Balance</p>
              <h2 className="text-3xl font-extrabold font-heading mt-1">R$ 12,458.90</h2>
            </div>
            <Icon icon="solar:wallet-bold-duotone" className="size-10 text-emerald-500" />
          </div>
        </GlassCard>

        <div className="space-y-4">
          <InputField 
            label={currencyType === 'BRL' ? "PIX Key" : "Wallet Address"} 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder={currencyType === 'BRL' ? "Email, Phone or CPF" : "0x..."} 
          />
          
          <button className="w-full py-5 rounded-[2rem] bg-emerald-600 text-white font-bold text-lg shadow-xl active:scale-95 transition-all">
            Confirm Withdrawal
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
