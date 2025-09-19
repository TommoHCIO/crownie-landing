import React from "react";
import { LucideIcon } from "lucide-react";
import { neon } from "@/lib/constants";

interface SectionTitleProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-16 text-center">
    <div className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
      {Icon && <Icon className="h-5 w-5 text-yellow-400" />}
      <span className="text-sm uppercase tracking-[0.2em] text-gradient-gold font-bold">👑 CROWNIE</span>
    </div>
    <h2 className="mt-8 text-4xl font-black text-gradient-royal animate-gradient-text sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-200 leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;