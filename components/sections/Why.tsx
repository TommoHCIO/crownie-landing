"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const Why: React.FC = () => {
  return (
    <section id="why" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Why $CROWNIE?"
          subtitle="Fixing the fundamentals of the meme coin meta."
        />
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="relative border-2 border-red-500/30 bg-red-900/10">
            <div className="absolute right-6 top-6 text-red-400 animate-pulse">
              <XCircle className="h-8 w-8" />
            </div>
            <h3 className="mb-6 text-2xl font-bold text-red-300">Traditional Problems</h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-red-400 rounded-full"></span>
                Hype burns fast, trust erodes
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-red-400 rounded-full"></span>
                No alignment between creators and holders
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-red-400 rounded-full"></span>
                Opaque token flows and rug mechanics
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-red-400 rounded-full"></span>
                Engagement ≠ value
              </li>
            </ul>
          </Card>
          <Card className="relative border-2 border-emerald-500/50 bg-emerald-900/10 shadow-emerald-glow">
            <div className="absolute right-6 top-6 text-emerald-400 animate-pulse">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gradient-emerald">How $CROWNIE Fixes It</h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-gradient-cyber">E2E</span> converts culture into on‑chain rewards
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                Locked LP, audits, <span className="text-gradient-gold">transparent treasury</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-gradient-royal">Governance locks</span> align power with commitment
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                Memes & shares drive demand / <span className="text-gradient-gold">burns</span>
              </li>
            </ul>
          </Card>
        </div>
        <div className="relative my-12 h-px w-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

        {/* Meme Battle Visualization */}
        <div className="mt-12 text-center">
          <img
            src="/images/pepe-vs-doge-classic.png"
            alt="Epic Meme Battle: The CROWNIE Solution"
            className="mx-auto h-48 w-full max-w-2xl object-contain rounded-lg"
          />
          <p className="mt-4 text-sm text-purple-200">
            CROWNIE brings unity to the meme wars through fair rewards and governance
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;