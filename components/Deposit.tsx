import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import { BottomNav } from './BottomNav';

interface DepositProps {
  onNavigate: (view: string) => void;
}

export function Deposit({ onNavigate }: DepositProps) {
  const [currencyType, setCurrencyType] = useState<'BRL' | 'CRYPTO'>('BRL');
  const [amount, setAmount] = useState('0.00');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('TRC20');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9.]/g, '');
    if ((val.match(/\./g) || []).length > 1) {
        return;
    }
    setAmount(val);
  };

  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden text-foreground selection:bg-accent/20 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="fixed top-[-15%] left-[-25%] w-[90%] h-[60vh] bg-gradient-to-br from-purple-300/20 via-pink-300/20 to-blue-300/20 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 rounded-full blur-[100px] pointer-events-none transform-gpu transition-colors duration-300" />
      <div className="fixed top-[5%] right-[-30%] w-[85%] h-[55vh] bg-gradient-to-bl from-cyan-300/20 via-blue-400/20 to-purple-400/20 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-full blur-[100px] pointer-events-none transform-gpu transition-colors duration-300" />
      <div className="fixed bottom-[-15%] left-[15%] w-[90%] h-[50vh] bg-gradient-to-tr from-indigo-300/20 via-violet-300/20 to-fuchsia-300/20 dark:from-indigo-900/20 dark:via-violet-900/20 dark:to-fuchsia-900/20 rounded-full blur-[100px] pointer-events-none transform-gpu transition-colors duration-300" />
      
      {/* Content */}
      <div className="relative z-10 pb-32 h-full overflow-y-auto no-scrollbar">
        <header className="px-6 pt-14 pb-6 flex justify-between items-center sticky top-0 z-20">
          <button 
            onClick={() => onNavigate('portfolio')}
            className="size-11 bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 dark:border-white/10 shadow-sm active:scale-95 transition-all hover:bg-white/90 dark:hover:bg-white/20 text-foreground"
          >
            <Icon icon="solar:arrow-left-linear" className="size-6" />
          </button>
          <h1 className="text-xl font-bold text-foreground font-heading">Deposit</h1>
          <div className="size-11" />
        </header>

        {/* Currency Toggle */}
        <div className="px-6 mb-6">
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

        {/* Interactive Card Display */}
        <div className="px-6 mb-10">
          <div
            className="relative w-full h-52 perspective-1000 group cursor-pointer"
            style={{ perspective: "1000px" }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br backdrop-blur-2xl rounded-[1.5rem] border border-white/40 shadow-2xl transition-transform duration-700 ease-out group-hover:rotate-y-0 group-hover:rotate-x-0 ${currencyType === 'BRL' ? 'from-white/30 via-white/10 to-white/5 shadow-primary/10' : 'from-indigo-500/80 via-purple-500/80 to-blue-500/80 shadow-indigo-500/20'}`}
              style={{ transform: "rotateY(-4deg) rotateX(2deg) translateZ(10px)" }}
            >
              {/* Card Content Animation Wrapper */}
               <div className="relative h-full w-full transition-opacity duration-300">
                    {currencyType === 'BRL' ? (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-[1.5rem] opacity-60 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)] rounded-[1.5rem]" />
                            <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="size-12 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/40 shadow-inner">
                                        <Icon icon="solar:card-bold" className="size-7 text-white" />
                                    </div>
                                    <div className="text-white/90 text-xs font-bold tracking-wider bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-sm border border-white/10">VIRTUAL CARD</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-white/70 text-xs font-medium">Card Number</div>
                                    <div className="text-white text-xl font-bold tracking-widest drop-shadow-md font-mono">
                                        •••• •••• •••• 8336
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <div className="text-white/70 text-[10px] font-medium">Valid Thru</div>
                                        <div className="text-white text-sm font-bold font-mono">12/28</div>
                                    </div>
                                    <div className="text-white/90 text-lg font-bold">BRL</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 rounded-[1.5rem]" />
                             <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="size-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                            <Icon icon="cryptocurrency-color:usdt" className="size-8" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-lg">Tether</div>
                                            <div className="text-white/70 text-xs font-medium">USDT</div>
                                        </div>
                                    </div>
                                    <div className="text-white/90 text-xs font-bold tracking-wider bg-black/20 px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/10">{selectedNetwork}</div>
                                </div>
                                
                                <div className="bg-black/20 rounded-xl p-3 backdrop-blur-md border border-white/10 flex items-center justify-between">
                                    <div className="text-white/80 font-mono text-xs truncate mr-2">
                                        TV29...8xM2
                                    </div>
                                    <Icon icon="solar:copy-bold" className="size-4 text-white/80" />
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <div className="text-white/70 text-[10px] font-medium">Total Balance</div>
                                        <div className="text-white text-xl font-bold">1,087.00</div>
                                    </div>
                                    <div className="text-white/90 text-lg font-bold">USD</div>
                                </div>
                             </div>
                        </>
                    )}
               </div>
            </div>
          </div>
        </div>

        {currencyType === 'BRL' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Input Section */}
                <div className="px-6 mb-6">
                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 border border-white/50 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3 block">
                    Deposit Amount
                    </label>
                    <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/40 dark:border-white/10 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all group">
                        <input
                        type="text"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="0.00"
                        className="w-full bg-transparent text-3xl font-bold text-foreground outline-none placeholder:text-muted-foreground/50 transition-transform group-focus-within:scale-105 origin-left duration-200"
                        />
                    </div>
                    <button className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/40 dark:border-white/10 flex items-center gap-2 active:scale-95 transition-all hover:bg-white/80 dark:hover:bg-white/10">
                        <span className="text-xl font-bold text-foreground">R$</span>
                        <Icon icon="solar:alt-arrow-down-linear" className="size-4 text-muted-foreground" />
                    </button>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground font-medium flex items-center gap-2">
                    <Icon icon="solar:info-circle-linear" className="size-4" />
                    Min: R$ 10.00 • Max: R$ 50,000.00
                    </div>
                </div>
                </div>

                {/* Payment Method */}
                <div className="px-6 mb-6">
                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 border border-white/50 dark:border-white/10 shadow-lg transition-all duration-300">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4 block">
                    Payment Method
                    </label>
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 flex items-center justify-between border border-white/40 shadow-lg shadow-emerald-500/20 relative overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform">
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="size-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 4L4 12V20L16 28L28 20V12L16 4Z" fill="#32BCAD" />
                            <path d="M16 12L12 14.5V19.5L16 22L20 19.5V14.5L16 12Z" fill="#0C6B58" />
                        </svg>
                        </div>
                        <div>
                        <div className="text-white text-lg font-bold">PIX</div>
                        <div className="text-white/80 text-xs font-medium">Instant Transfer</div>
                        </div>
                    </div>
                    <Icon icon="solar:check-circle-bold" className="size-7 text-white relative z-10" />
                    </div>
                </div>
                </div>

                {/* QR Code Section */}
                <div className="px-6 mb-6">
                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 border border-white/50 dark:border-white/10 shadow-lg transition-all duration-300">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4 block">
                    PIX QR Code
                    </label>
                    <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center border border-white/40 dark:border-white/10 shadow-inner group cursor-pointer relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                            <span className="bg-card px-3 py-1 rounded-full text-xs font-bold shadow-sm text-card-foreground">Expand</span>
                        </div>
                    <div className="size-48 bg-white rounded-xl p-4 flex items-center justify-center border-4 border-primary shadow-xl transform transition-transform group-hover:scale-105">
                        <div
                        className="w-full h-full bg-primary opacity-90 rounded-lg"
                        style={{
                            backgroundImage:
                            "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23000'/%3E%3Crect x='10' y='10' width='15' height='15' fill='%23fff'/%3E%3Crect x='30' y='10' width='5' height='5' fill='%23fff'/%3E%3Crect x='40' y='10' width='5' height='5' fill='%23fff'/%3E%3Crect x='50' y='10' width='10' height='10' fill='%23fff'/%3E%3Crect x='75' y='10' width='15' height='15' fill='%23fff'/%3E%3Crect x='10' y='30' width='5' height='5' fill='%23fff'/%3E%3Crect x='20' y='30' width='5' height='5' fill='%23fff'/%3E%3Crect x='35' y='30' width='10' height='10' fill='%23fff'/%3E%3Crect x='50' y='30' width='5' height='5' fill='%23fff'/%3E%3Crect x='60' y='30' width='10' height='10' fill='%23fff'/%3E%3Crect x='75' y='30' width='5' height='5' fill='%23fff'/%3E%3Crect x='85' y='30' width='5' height='5' fill='%23fff'/%3E%3Crect x='10' y='75' width='15' height='15' fill='%23fff'/%3E%3Crect x='75' y='75' width='15' height='15' fill='%23fff'/%3E%3C/svg%3E')",
                            backgroundSize: "cover",
                        }}
                        />
                    </div>
                    </div>
                    <button 
                    onClick={() => handleCopy("00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-426614174000520400005303986540510.005802BR5913Cicero Teste6008Brasilia62070503***6304E2CA")}
                    className={`w-full mt-4 py-4 rounded-2xl backdrop-blur-sm border transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                        copied 
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600' 
                        : 'bg-white/50 dark:bg-white/5 border-white/40 dark:border-white/10 text-foreground hover:bg-white/80 dark:hover:bg-white/10'
                    }`}
                    >
                    {copied ? (
                        <>
                        <Icon icon="solar:check-circle-bold" className="size-5" />
                        Copied to Clipboard!
                        </>
                    ) : (
                        <>
                        <Icon icon="solar:copy-linear" className="size-5" />
                        Copy PIX Code
                        </>
                    )}
                    </button>
                </div>
                </div>

                {/* Generate Button */}
                <div className="px-6 pb-6">
                <button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full py-5 rounded-[1.5rem] bg-primary text-primary-foreground font-bold text-lg shadow-2xl shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-80"
                >
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 ${isGenerating ? 'translate-x-full' : 'group-hover:translate-x-full'}`} />
                    {isGenerating ? (
                    <>
                        <Icon icon="solar:refresh-circle-linear" className="size-6 animate-spin" />
                        <span>Generating...</span>
                    </>
                    ) : (
                    <>
                        <Icon icon="solar:qr-code-bold" className="size-6" />
                        <span>Generate PIX Code</span>
                    </>
                    )}
                </button>
                </div>
            </div>
        ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Network Selection */}
                <div className="px-6 mb-6">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3 block px-1">Network</label>
                    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                        {['TRC20', 'ERC20', 'SOL', 'BEP20'].map(net => (
                            <button
                                key={net}
                                onClick={() => setSelectedNetwork(net)}
                                className={`px-5 py-3 rounded-2xl text-sm font-bold border transition-all active:scale-95 whitespace-nowrap ${
                                    selectedNetwork === net
                                        ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                                        : 'bg-white/40 dark:bg-white/5 border-white/40 dark:border-white/10 text-muted-foreground hover:bg-white/60 dark:hover:bg-white/10'
                                }`}
                            >
                                {net}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Crypto QR Address */}
                <div className="px-6 mb-8">
                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 border border-white/50 dark:border-white/10 shadow-lg transition-all duration-300">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4 block">
                    Deposit Address (USDT)
                    </label>
                    <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center border border-white/40 dark:border-white/10 shadow-inner mb-6">
                    <div className="size-56 bg-white rounded-2xl p-4 flex items-center justify-center border-4 border-indigo-500 shadow-xl">
                        <div
                        className="w-full h-full bg-primary opacity-90 rounded-lg"
                        style={{
                            backgroundImage:
                            "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23000'/%3E%3Crect x='10' y='10' width='15' height='15' fill='%23fff'/%3E%3Crect x='30' y='10' width='5' height='5' fill='%23fff'/%3E%3Crect x='40' y='10' width='5' height='5' fill='%23fff'/%3E%3Crect x='50' y='10' width='10' height='10' fill='%23fff'/%3E%3Crect x='75' y='10' width='15' height='15' fill='%23fff'/%3E%3Crect x='10' y='30' width='5' height='5' fill='%23fff'/%3E%3Crect x='20' y='30' width='5' height='5' fill='%23fff'/%3E%3Crect x='35' y='30' width='10' height='10' fill='%23fff'/%3E%3Crect x='50' y='30' width='5' height='5' fill='%23fff'/%3E%3Crect x='60' y='30' width='10' height='10' fill='%23fff'/%3E%3Crect x='75' y='30' width='5' height='5' fill='%23fff'/%3E%3Crect x='85' y='30' width='5' height='5' fill='%23fff'/%3E%3Crect x='10' y='75' width='15' height='15' fill='%23fff'/%3E%3Crect x='75' y='75' width='15' height='15' fill='%23fff'/%3E%3C/svg%3E')",
                            backgroundSize: "cover",
                        }}
                        />
                    </div>
                    </div>
                    
                    <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-4 border border-white/40 dark:border-white/10 mb-4 flex items-center justify-between gap-3">
                        <div className="font-mono text-xs text-foreground truncate">
                            TV29...8xM2...Jk92
                        </div>
                        <button 
                            onClick={() => handleCopy("TV29...8xM2...Jk92")}
                            className="size-10 flex items-center justify-center rounded-xl bg-white/60 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 transition-colors active:scale-90"
                        >
                            <Icon icon="solar:copy-bold" className="size-5 text-indigo-500" />
                        </button>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
                        <Icon icon="solar:info-circle-bold" className="size-5 text-indigo-600 shrink-0 mt-0.5" />
                        <div className="text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
                            Send only <span className="font-bold">USDT</span> to this address. Sending any other asset will result in permanent loss.
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )}

        <BottomNav currentView="deposit" onNavigate={onNavigate} />
      </div>
    </div>
  );
}