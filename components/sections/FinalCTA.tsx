"use client";

import React from "react";
import { neon } from "@/lib/constants";

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1a022d] to-[#3b0a6e]" />

      {/* Cyberpunk Background */}
      <div className="absolute inset-0 -z-5">
        <img
          src="/images/cyberpunk-meme-city.png"
          alt="Cyberpunk Meme City"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a022d] via-transparent to-[#1a022d]" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-black text-gradient-royal animate-gradient-text sm:text-6xl lg:text-7xl leading-tight">
          $CROWNIE isn&apos;t just a coin.
          <br />
          <span className="text-gradient-gold animate-gradient-text">It&apos;s a crown.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-2xl text-gray-200 leading-relaxed">
          The <span className="text-gradient-cyber font-semibold">community</span> decides who wears it.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            id="buy"
            href="#"
            className="btn-gradient-gold rounded-full px-10 py-5 text-xl font-black text-black shadow-gold-glow"
          >
            👑 Buy $CROWNIE
          </a>
          <a
            href="#"
            className="btn-gradient-cyber rounded-full px-10 py-5 text-xl font-black text-black shadow-cyber-glow"
          >
            💬 Join Telegram
          </a>
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-white/10 to-purple-500/20 px-10 py-5 text-xl font-bold text-white ring-2 ring-white/30 transition-all hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            🐦 Follow on X
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;