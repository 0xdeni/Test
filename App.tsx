import React, { useState, useEffect } from 'react';
import { Portfolio } from './components/Portfolio';
import { Deposit } from './components/Deposit';
import { Withdrawal } from './components/Withdrawal';
import { AISearch } from './components/AISearch';
import { AppSettings } from './components/AppSettings';
import { Activity } from './components/Activity';
import { AssetDetail } from './components/AssetDetail';

export default function App() {
  const [view, setView] = useState('portfolio');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="w-full h-full">
      {view === 'portfolio' ? (
        <Portfolio onNavigate={setView} />
      ) : view === 'deposit' ? (
        <Deposit onNavigate={setView} />
      ) : view === 'withdrawal' ? (
        <Withdrawal onNavigate={setView} />
      ) : view === 'ai-search' ? (
        <AISearch onNavigate={setView} />
      ) : view === 'activity' ? (
        <Activity onNavigate={setView} />
      ) : view === 'asset-detail' ? (
        <AssetDetail onNavigate={setView} />
      ) : (
        <AppSettings onNavigate={setView} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      )}
    </div>
  );
}
