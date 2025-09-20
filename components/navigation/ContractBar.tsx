"use client";

import React, { useState, useEffect } from "react";
import { Shield, Check, Copy, ExternalLink } from "lucide-react";

const CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890"; // Placeholder - replace with real address

const ContractBar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`sticky top-0 z-30 border-b transition-all duration-300 backdrop-blur-lg ${
      isSticky
        ? 'border-purple-500/30 bg-black/80 shadow-lg shadow-purple-500/10'
        : 'border-white/10 bg-black/60'
    }`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2 text-xs text-gray-300">
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] ring-1 transition-all duration-300 ${
            isSticky
              ? 'bg-purple-500/20 text-purple-200 ring-purple-400/40'
              : 'bg-blue-500/15 text-blue-300 ring-blue-400/30'
          }`}>
            <Shield className="h-3 w-3" /> Built on Base
          </span>
          <span className="hidden sm:inline text-gray-400">Audits incoming • LP locked</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`truncate rounded px-2 py-1 font-mono text-[10px] sm:text-xs transition-all duration-300 ${
            isSticky
              ? 'bg-purple-500/10 text-purple-200 ring-1 ring-purple-400/20'
              : 'bg-white/5 text-gray-300'
          }`}>
            {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-4)}
          </span>
          <button
            className={`flex items-center gap-1 rounded px-2 py-1 ring-1 transition-all duration-300 ${
              isSticky
                ? 'bg-purple-500/15 text-purple-200 ring-purple-400/30 hover:bg-purple-500/25 hover:ring-purple-400/50'
                : 'bg-white/10 text-gray-300 ring-white/20 hover:bg-white/15 hover:ring-white/30'
            }`}
            onClick={handleCopy}
            aria-label="Copy contract address"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          <a
            href="#"
            className={`btn-gradient-gold rounded px-3 py-1 text-[10px] sm:text-xs font-bold text-black transition-all duration-300 flex items-center gap-1 ${
              isSticky ? 'shadow-gold-glow' : ''
            }`}
          >
            <span>Buy $CROWNIE</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContractBar;