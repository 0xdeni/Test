import React, { useState, useRef, useEffect } from 'react';
import { Icon } from "@iconify/react";
import { GoogleGenAI } from "@google/genai";
import { BottomNav } from './BottomNav';

interface AISearchProps {
  onNavigate: (view: string) => void;
}

interface Source {
  uri: string;
  title: string;
}

interface Message {
  role: 'user' | 'model';
  text: string;
  sources?: Source[];
}

export function AISearch({ onNavigate }: AISearchProps) {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your AI financial assistant. Ask me about crypto markets, recent news, or financial concepts.' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || loading) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMsg,
        config: {
          tools: [{ googleSearch: {} }],
        }
      });

      const text = response.text || "I couldn't find an answer for that.";
      
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const sources: Source[] = chunks
        ?.map((c: any) => c.web)
        .filter((w: any) => w) || [];

      setMessages(prev => [...prev, { role: 'model', text, sources }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error accessing the network. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden text-foreground selection:bg-accent/20 flex flex-col transition-colors duration-300">
      {/* Background Blobs */}
      <div className="fixed top-[-10%] left-[-20%] w-[80%] h-[50vh] bg-cyan-400/20 dark:bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-300" />
      <div className="fixed top-[10%] right-[-20%] w-[70%] h-[50vh] bg-blue-400/20 dark:bg-blue-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-300" />
      <div className="fixed bottom-[-10%] left-[20%] w-[80%] h-[40vh] bg-indigo-400/20 dark:bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-300" />

      {/* Header */}
      <header className="px-6 pt-14 pb-4 flex justify-between items-center relative z-10 bg-white/10 backdrop-blur-sm border-b border-white/20 dark:border-white/5">
        <h1 className="text-xl font-bold text-foreground font-heading flex items-center gap-2">
            <Icon icon="solar:magic-stick-3-bold-duotone" className="size-6 text-indigo-500" />
            Ask AI
        </h1>
        <button onClick={() => setMessages([])} className="size-9 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 dark:border-white/10 shadow-sm active:scale-95 transition-transform hover:bg-white/60 dark:hover:bg-white/10">
          <Icon icon="solar:trash-bin-minimalistic-linear" className="size-5 text-muted-foreground" />
        </button>
      </header>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 space-y-6 relative z-10 pb-40 no-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm border transition-all ${
              msg.role === 'user' 
                ? 'bg-primary text-primary-foreground border-primary/50 rounded-tr-sm' 
                : 'bg-white/70 dark:bg-black/40 backdrop-blur-md text-foreground border-white/40 dark:border-white/10 rounded-tl-sm'
            }`}>
              <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</div>
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-3 pt-3 border-t border-dashed border-white/20">
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-70 mb-2 flex items-center gap-1">
                     <Icon icon="solar:link-circle-bold" className="size-3" />
                     Sources
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {msg.sources.map((source, idx) => (
                      <a 
                        key={idx} 
                        href={source.uri} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-white/20 hover:bg-white/30 transition-colors px-2 py-1 rounded-md text-[10px] truncate max-w-[150px] block"
                      >
                        {source.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
             <div className="bg-white/70 dark:bg-black/40 backdrop-blur-md rounded-2xl rounded-tl-sm p-4 border border-white/40 dark:border-white/10 shadow-sm flex gap-2 items-center">
                <div className="size-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="size-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="size-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-32 left-4 right-4 z-20">
        <form onSubmit={handleSearch} className="relative">
            <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-xl rounded-[2rem] border border-white/40 dark:border-white/10 shadow-lg -z-10 transition-colors duration-300" />
            <div className="flex items-center gap-2 p-2 pl-5">
                <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask about crypto, stocks, or news..."
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/70 font-medium h-12"
                />
                <button 
                    type="submit" 
                    disabled={!query.trim() || loading}
                    className="size-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                >
                    <Icon icon="solar:plain-3-bold" className="size-6 ml-1" />
                </button>
            </div>
        </form>
      </div>

      <BottomNav currentView="ai-search" onNavigate={onNavigate} />
    </div>
  );
}