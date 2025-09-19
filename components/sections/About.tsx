"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const About: React.FC = () => {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <SectionTitle
            title="Not Just a Meme Coin"
            subtitle="Viral-first, value-backed. Every post and share powers the engine."
          />
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 text-purple-400" />
              <span>Viral-first, value-backed economy</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 text-purple-400" />
              <span>Locked LP, audits, governance = anti‑rug</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 text-purple-400" />
              <span>Every meme or share impacts tokenomics</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 text-purple-400" />
              <span>Community holds the crown</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-purple-200">
            {["E2E", "Creator Tips", "On‑chain Claims", "Royal Treasury"].map((t) => (
              <span key={t} className="rounded-full bg-purple-500/10 px-3 py-1 ring-1 ring-purple-500/30">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-black/40 p-4 ring-1 ring-purple-500/40 shadow-[0_0_24px_rgba(168,85,247,0.38)]`}>
            <div className="grid h-full w-full grid-cols-3 gap-3">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="relative overflow-hidden rounded-xl bg-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="absolute inset-0 animate-pulse" style={{ boxShadow: "inset 0 0 30px rgba(168,85,247,0.15)" }} />
                  <div className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-1 text-[10px] text-purple-200 ring-1 ring-purple-400/40">
                    meme #{i + 1}
                  </div>
                </motion.div>
              ))}
              <div className="col-span-3 flex items-center justify-center rounded-xl border border-purple-500/30 bg-gradient-to-br from-black/40 to-purple-950/20 p-6 text-center text-sm text-purple-200">
                Scroll to preview more NFTs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;