import React from 'react';
import { Icon } from "@iconify/react";
import { BottomNav } from './BottomNav';

interface PortfolioProps {
  onNavigate: (view: string) => void;
}

export function Portfolio({ onNavigate }: PortfolioProps) {
	return (
		<div className="min-h-screen relative flex w-full flex-col overflow-hidden bg-background font-sans transition-colors duration-300">
			<div className="absolute inset-0 z-0">
				<div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-200/40 dark:bg-blue-900/20 blur-[100px] filter transition-colors duration-300" />
				<div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-purple-200/40 dark:bg-purple-900/20 blur-[100px] filter transition-colors duration-300" />
				<div className="absolute bottom-0 left-20 h-96 w-96 rounded-full bg-indigo-200/40 dark:bg-indigo-900/20 blur-[100px] filter transition-colors duration-300" />
			</div>
			<div className="relative z-10 flex-1 overflow-y-auto pb-32 no-scrollbar">
				<header className="flex items-center justify-between px-6 pt-14 pb-4">
					<div className="relative">
						<div className="size-10 overflow-hidden rounded-full border-2 border-white/80 dark:border-white/20 shadow-sm">
							<img
								src="https://randomuser.me/api/portraits/women/44.jpg"
								alt="Profile"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[#ff4d4d] text-[10px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-black">
							8
						</div>
					</div>
					<button className="flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md shadow-sm border border-white/40 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/20 transition-all">
						<div className="flex items-center justify-center rounded-full bg-[#0052ff] p-1 text-white">
							<Icon icon="solar:wallet-bold" className="size-3" />
						</div>
						<span className="text-foreground">0xfK07...8336</span>
						<Icon icon="solar:alt-arrow-down-linear" className="size-4 text-muted-foreground" />
					</button>
					<button className="flex size-10 items-center justify-center rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-sm border border-white/40 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/20 transition-all">
						<Icon icon="solar:qr-code-linear" className="size-5 text-foreground" />
					</button>
				</header>
				<section className="flex flex-col items-center justify-center py-8">
					<h2 className="mb-2 text-sm font-medium text-muted-foreground">Portfolio</h2>
					<div className="flex items-baseline gap-2">
						<h1 className="font-heading text-4xl font-extrabold text-foreground tracking-tight">
							35,292.29
						</h1>
						<span className="text-2xl font-bold text-muted-foreground/60">TEA</span>
					</div>
					<p className="mt-1 text-sm font-medium text-muted-foreground">35,292.29 USD</p>
				</section>
				<section className="px-6 py-4">
					<div className="relative mx-auto flex h-[72px] max-w-[340px] items-center justify-between rounded-[36px] bg-black/90 dark:bg-white/10 px-1.5 shadow-xl transition-colors duration-300 border border-white/10">
						<button 
                            onClick={() => onNavigate('deposit')}
                            className="flex flex-1 items-center justify-center gap-2 pl-2 active:scale-95 transition-transform"
                        >
							<Icon icon="solar:arrow-left-down-linear" className="size-5 text-white" />
							<span className="text-base font-medium text-white">Receive</span>
						</button>
						<div className="relative z-10 -mx-3 flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 via-purple-100 to-white dark:from-blue-900 dark:via-purple-900 dark:to-slate-800 p-0.5 shadow-lg ring-4 ring-[#f2f4f7] dark:ring-[#1e293b]">
							<button 
                                onClick={() => onNavigate('ai-search')}
                                className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-white to-gray-100 dark:from-slate-800 dark:to-black active:scale-90 transition-transform"
                            >
								<Icon icon="solar:magic-stick-3-bold-duotone" className="size-7 text-indigo-600 dark:text-indigo-400" />
							</button>
						</div>
						<button 
                            onClick={() => onNavigate('withdrawal')}
                            className="flex flex-1 items-center justify-center gap-2 pr-2 active:scale-95 transition-transform"
                        >
							<span className="text-base font-medium text-white">Send</span>
							<Icon icon="solar:arrow-right-up-linear" className="size-5 text-white" />
						</button>
					</div>
				</section>
				<section className="px-6 py-4">
					<div className="flex items-center justify-between rounded-3xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:bg-white/70 dark:hover:bg-slate-900/50">
						<div className="flex items-center gap-4">
							<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10 text-foreground">
								<Icon icon="solar:safe-square-linear" className="size-6" />
							</div>
							<div>
								<span className="text-xs font-medium text-muted-foreground">Vault</span>
								<p className="text-xl font-bold text-foreground">$34,209</p>
							</div>
						</div>
						<button className="flex size-10 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black shadow-lg transition-transform active:scale-95">
							<Icon icon="solar:add-linear" className="size-6" />
						</button>
					</div>
				</section>
				<section className="pl-6 pt-2 pb-8">
					<div
						className="flex w-full overflow-x-auto pr-6 pb-4 no-scrollbar"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					>
						<div className="flex gap-4">
							<div className="relative w-64 shrink-0 overflow-hidden rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-5 shadow-sm backdrop-blur-xl transition-colors duration-300">
								<div className="mb-8 flex items-start justify-between">
									<div className="flex items-center gap-2">
										<div className="flex size-10 items-center justify-center rounded-full bg-black dark:bg-white">
											<div
												className="h-4 w-6 rounded-sm bg-gradient-to-r from-[#9945ff] to-[#14f195]"
												style={{
													clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
													transform: "skew(-20deg)",
												}}
											/>
										</div>
										<span className="font-bold text-foreground">Solana</span>
									</div>
									<button className="flex size-8 items-center justify-center rounded-full bg-white/50 dark:bg-white/10 text-muted-foreground">
										<Icon icon="solar:menu-dots-bold" className="size-5" />
									</button>
								</div>
								<div className="mb-6 space-y-1">
									<div className="flex items-baseline gap-1.5">
										<span className="text-2xl font-bold text-foreground">34,209</span>
										<span className="text-lg font-bold text-muted-foreground/60">SOL</span>
									</div>
									<p className="text-xs font-medium text-muted-foreground">6,534.95 USD</p>
								</div>
								<button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/10 py-3 text-xs font-bold text-foreground backdrop-blur-sm transition-colors hover:bg-white/80 dark:hover:bg-white/20 active:scale-95">
									<Icon icon="solar:safe-square-bold" className="size-4" />
									Add to Vault
								</button>
								<div className="absolute -bottom-10 -right-10 -z-10 size-40 rounded-full bg-[#9945ff]/10 blur-2xl" />
							</div>
							<div className="relative w-64 shrink-0 overflow-hidden rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-5 shadow-sm backdrop-blur-xl transition-colors duration-300">
								<div className="mb-8 flex items-start justify-between">
									<div className="flex items-center gap-2">
										<div className="flex size-10 items-center justify-center rounded-full bg-[#26a17b]">
											<span className="text-lg font-bold text-white">T</span>
										</div>
										<span className="font-bold text-foreground">Tether</span>
									</div>
									<button className="flex size-8 items-center justify-center rounded-full bg-white/50 dark:bg-white/10 text-muted-foreground">
										<Icon icon="solar:menu-dots-bold" className="size-5" />
									</button>
								</div>
								<div className="mb-6 space-y-1">
									<div className="flex items-baseline gap-1.5">
										<span className="text-2xl font-bold text-foreground">1,087</span>
										<span className="text-lg font-bold text-muted-foreground/60">USDT</span>
									</div>
									<p className="text-xs font-medium text-muted-foreground">1,134.95 USD</p>
								</div>
								<button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/10 py-3 text-xs font-bold text-foreground backdrop-blur-sm transition-colors hover:bg-white/80 dark:hover:bg-white/20 active:scale-95">
									<Icon icon="solar:safe-square-bold" className="size-4" />
									Add to Vault
								</button>
								<div className="absolute -bottom-10 -right-10 -z-10 size-40 rounded-full bg-[#26a17b]/10 blur-2xl" />
							</div>
							<div className="w-8 shrink-0 rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl transition-colors duration-300" />
						</div>
					</div>
				</section>
                
                <BottomNav currentView="portfolio" onNavigate={onNavigate} />
			</div>
		</div>
	);
}