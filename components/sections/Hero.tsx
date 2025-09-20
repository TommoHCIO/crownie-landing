"use client";

import React from "react";
import { Crown, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Particles from "@/components/ui/Particles";
import { neon } from "@/lib/constants";

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [6, -6]);
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6]);

  const onMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top) / height);
  };

  return (
    <section
      className="relative overflow-hidden"
      onMouseMove={onMouseMove}
      style={{
        backgroundImage: "url('/images/hero-banner-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <Particles />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 ring-1 ring-purple-500/40">
            <span className="text-[10px] uppercase tracking-widest text-purple-200">On Base</span>
          </div>
          <h1 className="mt-6 text-3xl font-black leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block text-gradient-royal animate-gradient-text">
              Own Meme Culture.
            </span>
            <span className="block text-gradient-gold animate-gradient-text mt-2">
              Earn the Crown.
            </span>
          </h1>
          <p className="mt-6 sm:mt-8 max-w-2xl text-lg sm:text-xl text-gray-200 leading-relaxed">
            <span className="text-gradient-cyber font-semibold">$CROWNIE</span> is the first meme economy on Base — rewarding
            <span className="text-gradient-emerald font-semibold"> creativity</span>, driving
            <span className="text-gradient-gold font-semibold"> culture</span>, and turning engagement into value.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#about" className="btn-gradient-gold rounded-full px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-black shadow-gold-glow text-center">
              👑 Join the Kingdom
            </a>
            <a href="#tokenomics" className="btn-gradient-cyber rounded-full px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-black shadow-cyber-glow text-center">
              📊 View Tokenomics
            </a>
          </div>
        </div>
        <div className="relative">
          <motion.div
            style={{ rotateX, rotateY }}
            className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-black/40 p-1 ${neon.border} ${neon.glow}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.16),transparent_50%)]" />
            <div className="relative z-10 grid h-full w-full place-items-center">
              <div className="text-center">
                <div className="relative">
                  <img
                    src="/images/crown-coin-glow.png"
                    alt="CROWNIE Crown Coin with Golden Glow"
                    className="mx-auto h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 object-contain animate-crown-pulse"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-shimmer rounded-full" />
                </div>
                <p className="mt-4 text-lg font-semibold text-gradient-gold">The Crown Awaits</p>
                <div className="mt-2 flex justify-center gap-1">
                  <div className="h-1 w-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
                  <div className="h-1 w-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="h-1 w-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;