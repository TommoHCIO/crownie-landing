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
              <div className="col-span-2 relative overflow-hidden rounded-xl border border-purple-500/30">
                <img
                  src="/images/royal-treasury-vault.png"
                  alt="CROWNIE Royal Treasury Vault"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-sm text-purple-200 font-medium">Royal Treasury Powers the Empire</p>
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