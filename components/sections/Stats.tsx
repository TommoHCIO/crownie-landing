"use client";

import React from "react";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

interface StatProps {
  value: React.ReactNode;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div className="rounded-2xl bg-white/5 p-5 text-center ring-1 ring-white/10">
    <div className="text-3xl font-extrabold text-white">{value}</div>
    <div className="mt-1 text-xs uppercase tracking-widest text-gray-400">{label}</div>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="px-6 pb-6 -mt-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat value={<AnimatedNumber to={120} suffix="k" />} label="Total Memes" />
        <Stat value={<AnimatedNumber to={48} suffix="%" />} label="Community Share" />
        <Stat value={<AnimatedNumber to={7} />} label="Days / Claim" />
        <Stat value={<AnimatedNumber to={0} suffix="%" />} label="Mint Tax" />
      </div>
    </section>
  );
};

export default Stats;