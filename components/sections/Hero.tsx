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
    <section className="relative overflow-hidden" onMouseMove={onMouseMove}>
      <Particles />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 ring-1 ring-purple-500/40">
            <span className="text-[10px] uppercase tracking-widest text-purple-200">On Base</span>
          </div>
          <h1 className={`mt-4 text-4xl font-extrabold leading-tight sm:text-6xl ${neon.textGlow}`}>
            <span className="inline-flex items-center gap-3">
              <Crown className="h-8 w-8 -translate-y-1 text-purple-400 sm:h-10 sm:w-10" />
              Own Meme Culture. Earn the Crown.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-gray-300 sm:text-lg">
            $CROWNIE is the first meme economy on Base — rewarding creativity, driving culture, and turning engagement into value.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#about" className={`rounded-full px-5 py-3 text-sm font-semibold text-white ring-2 ring-purple-400/70 transition hover:-translate-y-0.5 hover:bg-purple-500/10 ${neon.glow}`}>
              ↓ Learn More
            </a>
            <a href="#tokenomics" className={`rounded-full px-5 py-3 text-sm font-semibold text-white ring-2 ring-purple-400/70 transition hover:-translate-y-0.5 hover:bg-purple-500/10 ${neon.glow}`}>
              View Tokenomics
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
                <Sparkles className="mx-auto h-8 w-8 text-purple-300" />
                <Crown className="mx-auto mt-2 h-20 w-20 text-purple-400" />
                <p className="mt-3 text-sm text-gray-300">The Crown Awaits</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;