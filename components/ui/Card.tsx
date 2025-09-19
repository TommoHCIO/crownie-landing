import React from "react";
import { neon } from "@/lib/constants";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Card: React.FC<CardProps> = ({ children, className = "", as: Comp = "div" }) => (
  <Comp
    className={`group rounded-2xl bg-black/40 p-6 backdrop-blur ${neon.border} transition ${neon.glow} hover:shadow-[0_0_38px_rgba(168,85,247,0.58)] ${className}`}
  >
    {children}
  </Comp>
);

export default Card;