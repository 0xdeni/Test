import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import { BottomNav } from './BottomNav';

interface WithdrawalProps {
  onNavigate: (view: string) => void;
}

export function Withdrawal({ onNavigate }: WithdrawalProps) {
  const [currencyType, setCurrencyType] = useState<'BRL' | 'CRYPTO'>('BRL');
  const [amount, setAmount] = useState('');
  
  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden text-foreground selection:bg-emerald-100 transition-colors duration-300">
      {/* Background Blobs */}
      <div className="fixed top-[-10%] left-[-20%] w-[80%] h-[50vh] bg-emerald-400/20 dark:bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-300" />
      <div className="fixed top-[10%] right-[-20%] w-[70%] h-[50vh] bg-blue-400/20 dark:bg-blue-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-300" />
      <div className="fixed bottom-[-10%] left-[20%] w-[80%] h-[40vh] bg-teal-400/20 dark:bg-teal-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-300" />
      
      <div className="relative z-10 pb-32 h-full overflow-y-auto no-scrollbar">
        <header className="px-6 pt-14 pb-6 flex justify-between items-center sticky top-0 z-20">
          <button 
            onClick={() => onNavigate('portfolio')}
            className="size-11 bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 dark:border-white/10 shadow-sm active:scale-95 transition-all hover:bg-white/90 dark:hover:bg-white/20 text-foreground"
          >
            <Icon icon="solar:arrow-left-linear" className="size-6" />
          </button>
          <h1 className="text-xl font-bold text-foreground font-heading">Withdrawal</h1>
          <div className="size-11" />
        </header>

        {/* Currency Toggle */}
        <div className="px-6 mb-8">
            <div className="flex p-1 bg-white/30 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-[1.25rem] relative">
                <div 
                    className={`absolute inset-y-1 w-[calc(50%-4px)] bg-white dark:bg-white/10 shadow-sm rounded-2xl transition-all duration-300 ease-spring ${currencyType === 'CRYPTO' ? 'left-[calc(50%+2px)]' : 'left-1'}`} 
                />
                <button 
                    onClick={() => setCurrencyType('BRL')}
                    className={`flex-1 py-3 text-sm font-bold relative z-10 transition-colors duration-300 ${currencyType === 'BRL' ? 'text-foreground' : 'text-muted-foreground'}`}
                >
                    Fiat (BRL)
                </button>
                <button 
                    onClick={() => setCurrencyType('CRYPTO')}
                    className={`flex-1 py-3 text-sm font-bold relative z-10 transition-colors duration-300 ${currencyType === 'CRYPTO' ? 'text-foreground' : 'text-muted-foreground'}`}
                >
                    Crypto
                </button>
            </div>
        </div>

        {/* Interactive Balance Display */}
        <section className="flex flex-col items-center mb-10 text-center px-4">
           <div className={`relative w-full max-w-sm rounded-[2rem] p-6 border shadow-xl transition-all duration-500 overflow-hidden ${currencyType === 'BRL' ? 'bg-gradient-to-br from-white/60 to-white/30 border-white/60 dark:from-white/10 dark:to-white/5 dark:border-white/10' : 'bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border-indigo-500/30 text-white'}`}>
             <div className="absolute top-0 right-0 p-4 opacity-50">
                 <Icon icon={currencyType === 'BRL' ? "solar:wallet-money-bold-duotone" : "solar:shield-star-bold-duotone"} className="size-24 -mr-4 -mt-4 rotate-12" />
             </div>
             
             <div className="relative z-10 flex flex-col items-start text-left">
                <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${currencyType === 'BRL' ? 'text-muted-foreground' : 'text-indigo-200'}`}>
                    Available Balance
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                    <h2 className={`text-4xl font-extrabold tracking-tight font-heading ${currencyType === 'BRL' ? 'text-foreground' : 'text-white'}`}>
                    {currencyType === 'BRL' ? 'R$ 12,458.90' : '2,487.50'}
                    </h2>
                    <span className={`text-lg font-bold ${currencyType === 'BRL' ? 'text-muted-foreground' : 'text-indigo-200'}`}>
                        {currencyType === 'BRL' ? 'BRL' : 'USDT'}
                    </span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold ${currencyType === 'BRL' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-indigo-400/20 text-indigo-200'}`}>
                    <Icon icon="solar:graph-up-bold" className="size-3" />
                    +2.4% this week
                </div>
             </div>
           </div>
        </section>

        {currencyType === 'BRL' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Amount Input */}
                <div className="px-6 mb-6">
                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 shadow-sm border border-white/50 dark:border-white/10 transition-all duration-300">
                    <label className="text-xs font-bold text-muted-foreground mb-3 block uppercase tracking-wide">
                    Withdrawal Amount
                    </label>
                    <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-2xl px-4 py-4 border border-white/40 dark:border-white/10 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all group">
                        <input
                        type="text"
                        placeholder="0.00"
                        className="w-full text-2xl font-bold text-foreground bg-transparent outline-none placeholder:text-muted-foreground/40 transition-transform group-focus-within:translate-x-1 duration-200"
                        />
                    </div>
                    <button className="bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/40 dark:border-white/10 shadow-sm flex items-center gap-2 active:scale-95 transition-all hover:bg-white/80 dark:hover:bg-white/10">
                        <span className="text-lg font-bold text-foreground">BRL</span>
                        <Icon icon="solar:alt-arrow-down-linear" className="size-4 text-muted-foreground" />
                    </button>
                    </div>
                    <div className="flex gap-2">
                    {['25%', '50%', '75%', 'MAX'].map((val) => (
                        <button key={val} className="flex-1 bg-white/40 dark:bg-white/5 backdrop-blur-sm rounded-xl px-3 py-2.5 text-xs font-bold text-muted-foreground hover:bg-white/80 dark:hover:bg-white/20 hover:text-foreground active:scale-95 transition-all border border-transparent hover:border-white/40 dark:hover:border-white/10">
                        {val}
                        </button>
                    ))}
                    </div>
                </div>
                </div>

                {/* PIX Key Input */}
                <div className="px-6 mb-6">
                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 shadow-sm border border-white/50 dark:border-white/10 transition-all duration-300">
                    <label className="text-xs font-bold text-muted-foreground mb-3 block uppercase tracking-wide">PIX Key</label>
                    <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-2xl px-4 py-4 border border-white/40 dark:border-white/10 shadow-sm flex items-center gap-3 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
                    <Icon icon="solar:key-bold-duotone" className="size-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Email, phone, CPF or random key"
                        className="flex-1 text-base font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground/60"
                    />
                    </div>
                    <div className="flex gap-2 mt-4">
                    {['Email', 'Phone', 'CPF'].map((type) => (
                         <button key={type} className="flex-1 bg-white/40 dark:bg-white/5 backdrop-blur-sm rounded-xl px-3 py-2.5 flex items-center justify-center gap-2 active:scale-95 transition-all border border-white/40 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/20 group">
                            <Icon icon={type === 'Email' ? "solar:letter-bold" : type === 'Phone' ? "solar:phone-bold" : "solar:document-bold"} className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">{type}</span>
                        </button>
                    ))}
                    </div>
                </div>
                </div>

                {/* Recent PIX Keys */}
                <div className="px-6 mb-6">
                <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Recent PIX Keys</h3>
                <div className="space-y-3">
                    {[
                    { icon: 'solar:letter-bold', color: 'from-emerald-400 to-green-500', shadow: 'shadow-emerald-500/30', title: 'contact@email.com', sub: 'Last used: 2 days ago' },
                    { icon: 'solar:phone-bold', color: 'from-blue-400 to-indigo-500', shadow: 'shadow-blue-500/30', title: '+55 11 98765-4321', sub: 'Last used: 1 week ago' },
                    ].map((item, i) => (
                    <div key={i} className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl p-4 shadow-sm border border-white/50 dark:border-white/10 flex items-center gap-4 active:scale-[0.98] transition-all hover:bg-white/90 dark:hover:bg-slate-900/60 cursor-pointer group">
                        <div className={`size-11 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg ${item.shadow} group-hover:scale-110 transition-transform`}>
                        <Icon icon={item.icon} className="size-5" />
                        </div>
                        <div className="flex-1">
                        <div className="text-sm font-bold text-foreground">{item.title}</div>
                        <div className="text-xs text-muted-foreground font-medium">{item.sub}</div>
                        </div>
                        <Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    ))}
                </div>
                </div>
            </div>
        ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Crypto Inputs */}
                <div className="px-6 mb-6">
                    <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 shadow-sm border border-white/50 dark:border-white/10 transition-all duration-300">
                        {/* Asset Select */}
                         <div className="mb-4">
                            <label className="text-xs font-bold text-muted-foreground mb-3 block uppercase tracking-wide">Asset</label>
                            <button className="w-full bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/40 dark:border-white/10 shadow-sm flex items-center justify-between active:scale-[0.99] transition-all">
                                <div className="flex items-center gap-3">
                                    <Icon icon="cryptocurrency-color:usdt" className="size-6" />
                                    <span className="font-bold text-foreground">USDT (Tether)</span>
                                </div>
                                <Icon icon="solar:alt-arrow-down-linear" className="size-4 text-muted-foreground" />
                            </button>
                         </div>

                         {/* Network Select */}
                         <div className="mb-4">
                            <label className="text-xs font-bold text-muted-foreground mb-3 block uppercase tracking-wide">Network</label>
                            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                                {['TRC20', 'ERC20', 'SOL', 'BEP20'].map((net, i) => (
                                    <button key={net} className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all whitespace-nowrap ${i === 0 ? 'bg-primary text-primary-foreground border-primary' : 'bg-white/40 dark:bg-white/5 text-muted-foreground border-white/40 dark:border-white/10'}`}>
                                        {net}
                                    </button>
                                ))}
                            </div>
                         </div>

                        {/* Address Input */}
                        <div className="mb-4">
                            <label className="text-xs font-bold text-muted-foreground mb-3 block uppercase tracking-wide">Withdrawal Address</label>
                            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-2xl px-4 py-4 border border-white/40 dark:border-white/10 shadow-sm flex items-center gap-3 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all group">
                                <Icon icon="solar:wallet-bold-duotone" className="size-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Paste address here"
                                    className="flex-1 text-base font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground/60"
                                />
                                <button className="text-xs font-bold text-indigo-500 hover:text-indigo-600 uppercase">Paste</button>
                            </div>
                        </div>

                         {/* Amount Input */}
                        <div>
                            <label className="text-xs font-bold text-muted-foreground mb-3 block uppercase tracking-wide">Amount</label>
                             <div className="flex items-center gap-3">
                                <div className="flex-1 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-2xl px-4 py-4 border border-white/40 dark:border-white/10 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
                                    <input
                                    type="text"
                                    placeholder="0.00"
                                    className="w-full text-2xl font-bold text-foreground bg-transparent outline-none placeholder:text-muted-foreground/40"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <button className="bg-white/50 dark:bg-white/5 rounded-lg px-3 py-1.5 text-[10px] font-bold text-muted-foreground border border-white/40 dark:border-white/10 hover:bg-white/80 transition-colors">MAX</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Withdrawal Details Summary */}
        <div className="px-6 mb-6">
          <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 shadow-sm border border-white/50 dark:border-white/10 transition-all duration-300">
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground font-medium">Network Fee</span>
                <span className="text-sm font-bold text-foreground">{currencyType === 'BRL' ? 'Free' : '1.00 USDT'}</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="flex justify-between items-center pt-1">
                <span className="text-base font-bold text-foreground">You Will Receive</span>
                <span className={`text-base font-bold ${currencyType === 'BRL' ? 'text-emerald-600' : 'text-indigo-500'}`}>
                  {currencyType === 'BRL' ? 'R$ 0.00' : '0.00 USDT'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="px-6 pt-4 pb-8">
          <button className={`w-full py-5 rounded-[2rem] text-white font-bold text-lg shadow-xl active:scale-[0.98] transition-all relative overflow-hidden group ${currencyType === 'BRL' ? 'bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 shadow-emerald-500/30' : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 shadow-indigo-500/30'}`}>
            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-center gap-2">
              <span>Withdraw Funds</span>
              <Icon icon="solar:arrow-right-linear" className="size-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        <BottomNav currentView="withdrawal" onNavigate={onNavigate} />
      </div>
    </div>
  );
}