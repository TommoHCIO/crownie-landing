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
          <ul className="space-y-5 text-gray-200 text-lg">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-400 shadow-emerald-glow" />
              <span>Viral-first, <span className="text-gradient-gold font-semibold">value-backed economy</span></span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-400 shadow-emerald-glow" />
              <span>Locked LP, audits, governance = <span className="text-gradient-cyber font-semibold">anti‑rug</span></span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-400 shadow-emerald-glow" />
              <span>Every meme or share impacts <span className="text-gradient-emerald font-semibold">tokenomics</span></span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-400 shadow-emerald-glow" />
              <span><span className="text-gradient-royal font-semibold">Community holds the crown</span></span>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              { label: "E2E", color: "gold" },
              { label: "Creator Tips", color: "cyber" },
              { label: "On‑chain Claims", color: "emerald" },
              { label: "Royal Treasury", color: "royal" }
            ].map((item) => (
              <span key={item.label} className={`rounded-full bg-gradient-to-r from-purple-500/20 to-${item.color === 'gold' ? 'yellow' : item.color === 'cyber' ? 'cyan' : item.color === 'emerald' ? 'green' : 'purple'}-500/20 px-4 py-2 ring-1 ring-purple-500/40 text-gradient-${item.color} font-semibold transition-all hover:scale-105 hover:ring-yellow-400/60`}>
                {item.label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-black/40 p-4 ring-1 ring-purple-500/40 shadow-[0_0_24px_rgba(168,85,247,0.38)]`}>
            <div className="grid h-full w-full grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-xl"
              >
                <img
                  src="/images/meme-cards-crown.png"
                  alt="CROWNIE meme cards with crown"
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-xl"
              >
                <img
                  src="/images/meme-economy-banner.png"
                  alt="Join the Meme Economy"
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="col-span-2 relative overflow-hidden rounded-xl border border-purple-500/30 h-32">
                <img
                  src="/images/royal-treasury-vault.png"
                  alt="CROWNIE Royal Treasury Vault"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-sm text-gradient-gold font-bold">Royal Treasury Powers the Empire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;