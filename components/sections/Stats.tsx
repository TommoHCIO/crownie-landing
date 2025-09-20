"use client";

import React from "react";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { TrendingUp, Users, Calendar, Zap } from "lucide-react";

interface StatProps {
  value: React.ReactNode;
  label: string;
  icon: React.ReactNode;
}

const Stat: React.FC<StatProps> = ({ value, label, icon }) => (
  <div className="metric-card rounded-2xl p-5 text-center group">
    <div className="flex justify-center mb-3">
      <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-gold-500/20 group-hover:from-purple-500/30 group-hover:to-gold-500/30 transition-all duration-300">
        <div className="text-purple-300 group-hover:text-gold-400 transition-colors duration-300">
          {icon}
        </div>
      </div>
    </div>
    <div className="text-3xl font-extrabold text-gradient-gold group-hover:animate-pulse-glow transition-all duration-300">{value}</div>
    <div className="mt-2 text-xs uppercase tracking-widest text-gray-300 group-hover:text-purple-200 transition-colors duration-300">{label}</div>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="px-6 pb-6 -mt-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat
          value={<AnimatedNumber to={120} suffix="k" />}
          label="Total Memes"
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <Stat
          value={<AnimatedNumber to={48} suffix="%" />}
          label="Community Share"
          icon={<Users className="h-5 w-5" />}
        />
        <Stat
          value={<AnimatedNumber to={7} />}
          label="Days / Claim"
          icon={<Calendar className="h-5 w-5" />}
        />
        <Stat
          value={<AnimatedNumber to={0} suffix="%" />}
          label="Mint Tax"
          icon={<Zap className="h-5 w-5" />}
        />
      </div>
    </section>
  );
};

export default Stats;