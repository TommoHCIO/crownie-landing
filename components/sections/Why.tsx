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
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="relative">
            <div className="absolute right-4 top-4 text-rose-400/80">
              <XCircle className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg font-semibold text-white">Traditional Problems</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Hype burns fast, trust erodes</li>
              <li>No alignment between creators and holders</li>
              <li>Opaque token flows and rug mechanics</li>
              <li>Engagement ≠ value</li>
            </ul>
          </Card>
          <Card className="relative">
            <div className="absolute right-4 top-4 text-emerald-400/80">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg font-semibold text-white">How $CROWNIE Fixes It</h3>
            <ul className="space-y-2 text-gray-300">
              <li>E2E converts culture into on‑chain rewards</li>
              <li>Locked LP, audits, transparent treasury</li>
              <li>Governance locks align power with commitment</li>
              <li>Memes & shares drive demand / burns</li>
            </ul>
          </Card>
        </div>
        <div className="relative my-12 h-px w-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      </div>
    </section>
  );
};

export default Why;