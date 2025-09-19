"use client";

import React from "react";
import { Crown, X } from "lucide-react";
import { neon } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen }) => (
  <div className={`fixed inset-0 z-40 bg-black/60 backdrop-blur transition ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}>
    <div className={`absolute right-3 top-3 w-72 rounded-2xl bg-[#0c0612] p-5 ring-1 ring-white/10 ${neon.glow} transition-transform ${open ? "translate-y-0" : "-translate-y-3"}`}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown className="h-5 w-5 text-purple-400" />
          <span className="font-semibold">CROWNIE</span>
        </div>
        <button
          className="rounded p-1 hover:bg-white/5"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="grid gap-2 text-sm text-gray-200">
        {[
          ["About", "#about"],
          ["Utilities", "#utilities"],
          ["Why", "#why"],
          ["Tokenomics", "#tokenomics"],
          ["Roadmap", "#roadmap"],
          ["FAQ", "#faq"],
        ].map(([label, href]) => (
          <a
            key={href as string}
            href={href as string}
            className="rounded px-3 py-2 hover:bg-white/5"
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="#final-cta"
          className="mt-2 rounded bg-emerald-400 px-3 py-2 text-center font-semibold text-black"
        >
          Buy $CROWNIE
        </a>
      </nav>
    </div>
  </div>
);

export default MobileNav;