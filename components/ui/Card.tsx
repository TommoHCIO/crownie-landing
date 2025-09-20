import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Card: React.FC<CardProps> = ({ children, className = "", as: Comp = "div" }) => (
  <Comp
    className={`group rounded-2xl bg-black/50 p-8 backdrop-blur-xl border border-purple-500/30 transition-all duration-300 ease-out hover:bg-black/60 hover:border-yellow-400/50 hover:shadow-[0_20px_40px_rgba(168,85,247,0.4),_0_0_30px_rgba(255,215,0,0.3)] hover:-translate-y-2 hover:scale-[1.02] ${className}`}
  >
    {children}
  </Comp>
);

export default Card;