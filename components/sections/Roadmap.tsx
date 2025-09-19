"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const roadmapItems = [
  {
    phase: "Phase 1 – Launch ⚡",
    done: true,
    points: ["Token launch on Base", "LP locked & audit announced", "First meme contests"]
  },
  {
    phase: "Phase 2 – E2E Alpha 🎮",
    done: false,
    points: ["Engage‑to‑Earn claims", "Creator portal", "Royal Treasury dashboards"]
  },
  {
    phase: "Phase 3 – Governance 🗳️",
    done: false,
    points: ["Locking & boosts", "On‑chain proposals", "Meme Arcade mini‑games"]
  },
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Roadmap"
          subtitle="Phases light up as progress is made."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-purple-400/70 via-purple-500/50 to-purple-600/30" />
          <div className="space-y-10">
            {roadmapItems.map((item, idx) => (
              <div key={idx} className="relative grid grid-cols-1 items-start gap-6 md:grid-cols-2">
                <div className={`order-2 md:order-${idx % 2 === 0 ? 2 : 1}`}></div>
                <Card className={`order-1 md:order-${idx % 2 === 0 ? 1 : 2}`}>
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 h-3 w-3 rounded-full ${item.done ? "bg-emerald-400" : "bg-purple-400"} shadow-[0_0_15px_rgba(168,85,247,0.8)]`} />
                    <div>
                      <h4 className="font-semibold">{item.phase}</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-300">
                        {item.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      {item.done && (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/30">
                          <CheckCircle2 className="h-4 w-4" />
                          Completed
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center">
          <h3 className="mb-6 text-2xl font-bold text-white">The Future of Meme Culture</h3>
          <img
            src="/images/neon-city-billboards.png"
            alt="CROWNIE Vision: Neon City with Meme Billboards"
            className="mx-auto h-64 w-full max-w-4xl object-cover rounded-lg"
          />
          <p className="mt-4 text-sm text-purple-200 max-w-2xl mx-auto">
            A world where memes power economies, creators are rewarded fairly, and the crown belongs to the community
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;