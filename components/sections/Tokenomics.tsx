"use client";

import React, { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Info, TrendingUp, Shield, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-lg border-2 border-purple-500/40 bg-black/90 px-4 py-3 text-sm text-gray-200 shadow-2xl backdrop-blur-lg"
      style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(168,85,247,0.1))',
        boxShadow: '0 0 30px rgba(168,85,247,0.5)'
      }}
    >
      <div className="font-bold text-gradient-gold text-base">{name}</div>
      <div className="text-purple-200 font-semibold">{value}% of total supply</div>
    </motion.div>
  );
};

const Tokenomics: React.FC = () => {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="tokenomics-card rounded-2xl p-6"
          >
            <div className="relative h-80 w-full group">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="40%"
                    outerRadius="75%"
                    paddingAngle={3}
                    stroke="rgba(168,85,247,0.3)"
                    strokeWidth={2}
                    onMouseEnter={(_, index) => setHoveredSegment(index)}
                    onMouseLeave={() => setHoveredSegment(null)}
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell
                        key={entry.name}
                        fill={COLORS[index % COLORS.length]}
                        style={{
                          filter: hoveredSegment === index ? 'brightness(1.3) drop-shadow(0 0 10px currentColor)' : 'brightness(1)',
                          transform: hoveredSegment === index ? 'scale(1.05)' : 'scale(1)',
                          transformOrigin: 'center',
                          transition: 'all 0.3s ease'
                        }}
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
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="rounded-full bg-gradient-to-br from-black/80 to-purple-900/40 px-8 py-6 text-center backdrop-blur-sm ring-2 ring-purple-500/40"
                >
                  <div className="text-gradient-cyber text-sm font-semibold">Total Supply</div>
                  <div className="text-3xl font-bold text-gradient-gold">{total}%</div>
                  <div className="text-xs text-purple-200 mt-1">Distribution</div>
                </motion.div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {tokenomicsData.map((d, index) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`metric-card rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                    hoveredSegment === index ? 'scale-105 ring-2 ring-purple-400/50' : ''
                  }`}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-gray-300 font-medium">{d.name}</span>
                  </div>
                  <div className="text-white font-bold text-lg mt-1">{d.value}%</div>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-sm text-center text-purple-200 font-medium">
              Interactive chart - hover segments for details
            </p>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="tokenomics-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-gold-500/20">
                  <TrendingUp className="h-6 w-6 text-gradient-gold" />
                </div>
                <h4 className="text-xl font-bold text-gradient-royal">Tax Mechanics</h4>
              </div>
              <div className="space-y-4">
                <div className="metric-card rounded-xl p-4 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-emerald-400" />
                      <span className="text-gray-200 font-medium">Treasury</span>
                    </div>
                    <span className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 text-emerald-200 px-3 py-1 rounded-full text-sm font-bold ring-1 ring-emerald-400/30">
                      2%
                    </span>
                  </div>
                </div>
                <div className="metric-card rounded-xl p-4 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-red-400" />
                      <span className="text-gray-200 font-medium">Burns</span>
                    </div>
                    <span className="bg-gradient-to-r from-red-500/20 to-red-500/10 text-red-200 px-3 py-1 rounded-full text-sm font-bold ring-1 ring-red-400/30">
                      1%
                    </span>
                  </div>
                </div>
                <div className="metric-card rounded-xl p-4 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-200 font-medium">Rewards</span>
                    </div>
                    <span className="bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-cyan-200 px-3 py-1 rounded-full text-sm font-bold ring-1 ring-cyan-400/30">
                      2%
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-center text-purple-200">
                Automated on-chain mechanisms ensure fair distribution
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { label: "Trust First", color: "emerald" },
                { label: "Deflationary", color: "red" },
                { label: "Community", color: "purple" }
              ].map((item, index) => (
                <motion.span
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-110 cursor-default ${
                    item.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/30' :
                    item.color === 'red' ? 'bg-red-500/10 text-red-200 ring-1 ring-red-400/30' :
                    'bg-purple-500/10 text-purple-200 ring-1 ring-purple-400/30'
                  }`}
                >
                  {item.label}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;