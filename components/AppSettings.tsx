import React from 'react';
import { Icon } from "@iconify/react";
import { BottomNav } from './BottomNav';

interface AppSettingsProps {
  onNavigate: (view: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function AppSettings({ onNavigate, isDarkMode, toggleTheme }: AppSettingsProps) {
	return (
		<div className="min-h-screen relative flex w-full flex-col overflow-hidden bg-background font-sans transition-colors duration-300">
			<div className="absolute inset-0 z-0">
				<div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-[100px] filter transition-colors duration-300" />
				<div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-[100px] filter transition-colors duration-300" />
				<div className="absolute bottom-0 left-20 h-96 w-96 rounded-full bg-indigo-50/50 dark:bg-indigo-900/20 blur-[100px] filter transition-colors duration-300" />
			</div>
			
            <div className="relative z-10 flex-1 overflow-y-auto pb-32 no-scrollbar">
				<header className="flex items-center justify-between px-6 pt-14 pb-6 sticky top-0 bg-background/5 backdrop-blur-sm z-20">
					<button 
                        onClick={() => onNavigate('portfolio')}
                        className="flex size-10 items-center justify-center rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-sm border border-white/50 dark:border-white/10 active:scale-95 transition-all hover:bg-white/90 dark:hover:bg-white/20"
                    >
						<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
					</button>
					<h1 className="text-xl font-bold font-heading text-foreground">Settings</h1>
					<div className="size-10" />
				</header>

				<section className="px-6 pb-4">
					<h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
						General
					</h2>
					<div className="rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl shadow-sm overflow-hidden transition-all duration-300">
						<button className="flex w-full items-center justify-between px-5 py-4 transition-colors active:bg-white/80 dark:active:bg-white/10 hover:bg-white/70 dark:hover:bg-slate-900/60">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:global-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Language</p>
									<p className="text-xs text-muted-foreground">English</p>
								</div>
							</div>
							<Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground" />
						</button>
						<div className="mx-5 h-px bg-border/50" />
						<button className="flex w-full items-center justify-between px-5 py-4 transition-colors active:bg-white/80 dark:active:bg-white/10 hover:bg-white/70 dark:hover:bg-slate-900/60">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:dollar-minimalistic-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Currency</p>
									<p className="text-xs text-muted-foreground">USD</p>
								</div>
							</div>
							<Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground" />
						</button>
						<div className="mx-5 h-px bg-border/50" />
						<div className="flex w-full items-center justify-between px-5 py-4 hover:bg-white/70 dark:hover:bg-slate-900/60 transition-colors">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:bell-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Notifications</p>
									<p className="text-xs text-muted-foreground">Push notifications enabled</p>
								</div>
							</div>
							<div className="relative h-7 w-12 rounded-full bg-black dark:bg-white shadow-inner">
								<div className="absolute right-0.5 top-0.5 size-6 rounded-full bg-white dark:bg-black shadow-sm" />
							</div>
						</div>
					</div>
				</section>
				<section className="px-6 pb-4">
					<h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
						Security
					</h2>
					<div className="rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl shadow-sm overflow-hidden transition-all duration-300">
						<div className="flex w-full items-center justify-between px-5 py-4 hover:bg-white/70 dark:hover:bg-slate-900/60 transition-colors">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:fingerprint-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Biometric Auth</p>
									<p className="text-xs text-muted-foreground">Face ID enabled</p>
								</div>
							</div>
							<div className="relative h-7 w-12 rounded-full bg-black dark:bg-white shadow-inner">
								<div className="absolute right-0.5 top-0.5 size-6 rounded-full bg-white dark:bg-black shadow-sm" />
							</div>
						</div>
						<div className="mx-5 h-px bg-border/50" />
						<button className="flex w-full items-center justify-between px-5 py-4 transition-colors active:bg-white/80 dark:active:bg-white/10 hover:bg-white/70 dark:hover:bg-slate-900/60">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:lock-keyhole-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Auto-Lock</p>
									<p className="text-xs text-muted-foreground">After 5 minutes</p>
								</div>
							</div>
							<Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground" />
						</button>
						<div className="mx-5 h-px bg-border/50" />
						<div className="flex w-full items-center justify-between px-5 py-4 hover:bg-white/70 dark:hover:bg-slate-900/60 transition-colors">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:shield-keyhole-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Two-Factor Auth</p>
									<p className="text-xs text-muted-foreground">Additional security layer</p>
								</div>
							</div>
							<div className="relative h-7 w-12 rounded-full bg-gray-300/50 dark:bg-white/20 shadow-inner">
								<div className="absolute left-0.5 top-0.5 size-6 rounded-full bg-white shadow-sm" />
							</div>
						</div>
					</div>
				</section>
				<section className="px-6 pb-4">
					<h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
						Appearance
					</h2>
					<div className="rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl shadow-sm overflow-hidden transition-all duration-300">
						<div className="flex w-full items-center justify-between px-5 py-4 hover:bg-white/70 dark:hover:bg-slate-900/60 transition-colors">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:palette-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Theme</p>
									<p className="text-xs text-muted-foreground">{isDarkMode ? 'Dark mode' : 'Light mode'}</p>
								</div>
							</div>
                            <button 
                                onClick={toggleTheme}
                                className={`relative h-7 w-12 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-indigo-500 shadow-inner' : 'bg-gray-300/50 shadow-inner'}`}
                            >
                                <span 
                                    className={`absolute top-0.5 left-0.5 size-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`} 
                                />
                            </button>
						</div>
						<div className="mx-5 h-px bg-border/50" />
						<button className="flex w-full items-center justify-between px-5 py-4 transition-colors active:bg-white/80 dark:active:bg-white/10 hover:bg-white/70 dark:hover:bg-slate-900/60">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:monitor-smartphone-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Display Options</p>
									<p className="text-xs text-muted-foreground">Customize interface</p>
								</div>
							</div>
							<Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground" />
						</button>
					</div>
				</section>
				<section className="px-6 pb-4">
					<h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
						Network
					</h2>
					<div className="rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl shadow-sm overflow-hidden transition-all duration-300">
						<button className="flex w-full items-center justify-between px-5 py-4 transition-colors active:bg-white/80 dark:active:bg-white/10 hover:bg-white/70 dark:hover:bg-slate-900/60">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:server-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Node Selection</p>
									<p className="text-xs text-muted-foreground">Mainnet</p>
								</div>
							</div>
							<Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground" />
						</button>
						<div className="mx-5 h-px bg-border/50" />
						<button className="flex w-full items-center justify-between px-5 py-4 transition-colors active:bg-white/80 dark:active:bg-white/10 hover:bg-white/70 dark:hover:bg-slate-900/60">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:fire-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Gas Fees</p>
									<p className="text-xs text-muted-foreground">Standard priority</p>
								</div>
							</div>
							<Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground" />
						</button>
					</div>
				</section>
				<section className="px-6 pb-4">
					<h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
						Privacy
					</h2>
					<div className="rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl shadow-sm overflow-hidden transition-all duration-300">
						<button className="flex w-full items-center justify-between px-5 py-4 transition-colors active:bg-white/80 dark:active:bg-white/10 hover:bg-white/70 dark:hover:bg-slate-900/60">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:eye-closed-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Privacy Settings</p>
									<p className="text-xs text-muted-foreground">Control your data</p>
								</div>
							</div>
							<Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground" />
						</button>
						<div className="mx-5 h-px bg-border/50" />
						<div className="flex w-full items-center justify-between px-5 py-4 hover:bg-white/70 dark:hover:bg-slate-900/60 transition-colors">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:graph-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Analytics</p>
									<p className="text-xs text-muted-foreground">Help improve the app</p>
								</div>
							</div>
							<div className="relative h-7 w-12 rounded-full bg-black dark:bg-white shadow-inner">
								<div className="absolute right-0.5 top-0.5 size-6 rounded-full bg-white dark:bg-black shadow-sm" />
							</div>
						</div>
					</div>
				</section>
				<section className="px-6 pb-8">
					<h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
						About
					</h2>
					<div className="rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl shadow-sm overflow-hidden transition-all duration-300">
						<button className="flex w-full items-center justify-between px-5 py-4 transition-colors active:bg-white/80 dark:active:bg-white/10 hover:bg-white/70 dark:hover:bg-slate-900/60">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:document-text-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Terms of Service</p>
								</div>
							</div>
							<Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground" />
						</button>
						<div className="mx-5 h-px bg-border/50" />
						<button className="flex w-full items-center justify-between px-5 py-4 transition-colors active:bg-white/80 dark:active:bg-white/10 hover:bg-white/70 dark:hover:bg-slate-900/60">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:shield-check-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">Privacy Policy</p>
								</div>
							</div>
							<Icon icon="solar:alt-arrow-right-linear" className="size-5 text-muted-foreground" />
						</button>
						<div className="mx-5 h-px bg-border/50" />
						<button className="flex w-full items-center justify-between px-5 py-4 transition-colors active:bg-white/80 dark:active:bg-white/10 hover:bg-white/70 dark:hover:bg-slate-900/60">
							<div className="flex items-center gap-4">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/10">
									<Icon icon="solar:info-circle-bold" className="size-5 text-foreground" />
								</div>
								<div className="text-left">
									<p className="text-sm font-semibold text-foreground">App Version</p>
									<p className="text-xs text-muted-foreground">v2.4.1</p>
								</div>
							</div>
						</button>
					</div>
				</section>
			</div>
            
            <BottomNav currentView="settings" onNavigate={onNavigate} />
		</div>
	);
}