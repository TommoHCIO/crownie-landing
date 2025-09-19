"use client";

import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Info } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { tokenomicsData, COLORS } from "@/lib/constants";

const Tokenomics: React.FC = () => {
  const total = useMemo(() => tokenomicsData.reduce((s, d) => s + d.value, 0), []);

  return (
    <section id="tokenomics" className="relative px-6 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Tokenomics"
          subtitle="Trust-first. Deflationary dynamics. Holder-focused design."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={{
                      background: "#0b0710",
                      border: "1px solid rgba(168,85,247,0.3)",
                      borderRadius: 12,
                      color: "white",
                    }}
                  />
                  <Pie
                    data={tokenomicsData}
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {tokenomicsData.map((_, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                        stroke="rgba(255,255,255,0.08)"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {tokenomicsData.map((d) => (
                <div key={d.name} className="rounded-xl bg-white/5 p-3 ring-1 ring-purple-500/20">
                  <div className="text-gray-300">{d.name}</div>
                  <div className="text-white">{d.value}%</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-400">Total: {total}%</p>
          </Card>
          <div className="space-y-4">
            <Card>
              <h4 className="flex items-center gap-2 font-semibold text-white">
                <Info className="h-4 w-4 text-purple-300" />
                Taxes & Flows
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-300">
                <li className="flex items-center justify-between">
                  <span>Treasury</span>
                  <span className="rounded bg-purple-500/15 px-2 py-0.5 text-purple-200 ring-1 ring-purple-400/30">
                    2%
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Burns</span>
                  <span className="rounded bg-purple-500/15 px-2 py-0.5 text-purple-200 ring-1 ring-purple-400/30">
                    1%
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Rewards</span>
                  <span className="rounded bg-purple-500/15 px-2 py-0.5 text-purple-200 ring-1 ring-purple-400/30">
                    2%
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-gray-400">Hover the chart for tooltips.</p>
            </Card>
            <div className="flex flex-wrap gap-2">
              {["Trust First", "Deflationary", "Holder‑Focused"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-200 ring-1 ring-purple-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;