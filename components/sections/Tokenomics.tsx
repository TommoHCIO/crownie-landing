"use client";

import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Info } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { tokenomicsData, COLORS } from "@/lib/constants";

type ChartTooltipPayload = {
  name: string;
  value: number;
  payload?: {
    name: string;
    value: number;
  };
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: ChartTooltipPayload[];
  label?: string;
}

const ChartTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload?.length) {
    return null;
  }

  const { name, value } = payload[0];

  return (
    <div className="rounded-lg border border-purple-500/30 bg-black/80 px-3 py-2 text-xs text-gray-200 shadow-lg backdrop-blur">
      <div className="font-semibold text-white">{name}</div>
      <div className="text-purple-200">{value}% of supply</div>
    </div>
  );
};

const Tokenomics: React.FC = () => {
  const total = useMemo(
    () => tokenomicsData.reduce((sum, item) => sum + item.value, 0),
    []
  );

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
            <div className="relative h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="45%"
                    outerRadius="70%"
                    paddingAngle={2}
                    stroke="#0f0b1a"
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell
                        key={entry.name}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    content={<ChartTooltip />}
                    wrapperClassName="!bg-transparent"
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-black/60 px-6 py-4 text-center text-xs text-purple-200 ring-1 ring-purple-500/30">
                  Total Supply
                  <div className="text-2xl font-bold text-white">{total}%</div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {tokenomicsData.map((d) => (
                <div
                  key={d.name}
                  className="rounded-xl bg-white/5 p-3 ring-1 ring-purple-500/20"
                >
                  <div className="text-gray-300">{d.name}</div>
                  <div className="text-white">{d.value}%</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-400">
              Hover the chart for a detailed breakdown.
            </p>
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
              <p className="mt-3 text-xs text-gray-400">
                On-chain mechanisms align incentives for holders and creators.
              </p>
            </Card>
            <div className="flex flex-wrap gap-2">
              {["Trust First", "Deflationary", "Holder-Focused"].map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-200 ring-1 ring-purple-500/30"
                >
                  {label}
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