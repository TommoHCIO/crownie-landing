"use client";

import React from "react";
import { Crown, Menu } from "lucide-react";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setMenuOpen }) => (
  <header className="z-20 border-b border-white/5 bg-black/30 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <a href="#" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-400/60">
        <Crown className="h-6 w-6 text-purple-400" />
        <span className="font-semibold tracking-wide">CROWNIE</span>
      </a>
      <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#utilities" className="hover:text-white">Utilities</a>
        <a href="#why" className="hover:text-white">Why</a>
        <a href="#tokenomics" className="hover:text-white">Tokenomics</a>
        <a href="#roadmap" className="hover:text-white">Roadmap</a>
        <a href="#faq" className="hover:text-white">FAQ</a>
      </nav>
      <div className="flex items-center gap-3">
        <a href="#final-cta" className="rounded-full bg-white/5 px-4 py-2 text-xs text-gray-200 hover:bg-white/10">Join</a>
        <a href="#buy" className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-black shadow hover:bg-emerald-400">Buy $CROWNIE</a>
        <button
          className="ml-1 rounded p-2 hover:bg-white/5 md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </div>
  </header>
);

export default Header;