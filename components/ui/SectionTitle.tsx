import React from "react";
import { LucideIcon } from "lucide-react";
import { neon } from "@/lib/constants";

interface SectionTitleProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-10 text-center">
    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${neon.border} ${neon.glow} bg-black/30`}>
      {Icon && <Icon className="h-4 w-4 text-purple-400" />}
      <span className="text-xs uppercase tracking-widest text-purple-300">CROWNIE</span>
    </div>
    <h2 className={`mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl ${neon.textGlow}`}>{title}</h2>
    {subtitle && <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 sm:text-base">{subtitle}</p>}
  </div>
);

export default SectionTitle;