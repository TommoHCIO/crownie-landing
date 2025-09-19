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
        <h2 className={`text-3xl font-extrabold sm:text-5xl ${neon.textGlow}`}>
          $CROWNIE isn&apos;t just a coin. It&apos;s a crown.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-300">The community decides who wears it.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            id="buy"
            href="#"
            className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black shadow transition hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Buy $CROWNIE
          </a>
          <a
            href="#"
            className={`rounded-full px-6 py-3 font-semibold text-white ring-2 ring-purple-400/80 transition hover:-translate-y-0.5 hover:bg-purple-500/10 ${neon.glow}`}
          >
            Join Telegram
          </a>
          <a
            href="#"
            className="rounded-full bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/20 transition hover:-translate-y-0.5"
          >
            Follow on X
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;