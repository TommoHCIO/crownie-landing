"use client";

import React, { useState } from "react";
import { Shield, Check, Copy } from "lucide-react";

const CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890"; // Placeholder - replace with real address

const ContractBar: React.FC = () => {
  const [copied, setCopied] = useState(false);

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
    <div className="sticky top-0 z-30 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2 text-xs text-gray-300">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-2 py-0.5 text-[10px] text-blue-300 ring-1 ring-blue-400/30">
            <Shield className="h-3 w-3" /> Built on Base
          </span>
          <span className="hidden sm:inline">Audits incoming • LP locked</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="truncate rounded bg-white/5 px-2 py-1 font-mono text-[10px] sm:text-xs">
            {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-4)}
          </span>
          <button
            className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 ring-1 ring-white/20 hover:bg-white/15 transition-colors"
            onClick={handleCopy}
            aria-label="Copy contract address"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractBar;