"use client";

import React from "react";
import { Shield } from "lucide-react";

const ContractBar: React.FC = () => (
  <div className="sticky top-0 z-30 border-b border-white/10 bg-black/60 backdrop-blur">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2 text-xs text-gray-300">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-2 py-0.5 text-[10px] text-blue-300 ring-1 ring-blue-400/30">
          <Shield className="h-3 w-3" /> Built on Base
        </span>
        <span className="hidden sm:inline">Audits incoming • LP locked</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="truncate rounded bg-white/5 px-2 py-1 font-mono">0xCROW...N1E</span>
        <button
          className="rounded bg-white/10 px-2 py-1 ring-1 ring-white/20 hover:bg-white/15"
          onClick={() => navigator.clipboard?.writeText("0xCROW...N1E")}
        >
          Copy
        </button>
      </div>
    </div>
  </div>
);

export default ContractBar;