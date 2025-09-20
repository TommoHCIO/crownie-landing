import React, { useMemo } from "react";

interface ParticlesProps {
  count?: number;
}

const Particles: React.FC<ParticlesProps> = ({ count = 80 }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reduce particle count on mobile for better performance
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const particleCount = useMemo(() => {
    if (prefersReduced) return 0;
    if (isMobile) return Math.min(count / 2, 30);
    return count;
  }, [count, prefersReduced, isMobile]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(particleCount)].map((_, i) => (
        <span
          aria-hidden
          key={i}
          className="absolute h-0.5 w-0.5 rounded-full bg-white/50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.15,
            filter: "drop-shadow(0 0 8px rgba(168,85,247,0.9))",
            animation: prefersReduced
              ? undefined
              : `float ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 4}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-8px) translateX(3px) }
        }
      `}</style>
    </div>
  );
};

export default Particles;