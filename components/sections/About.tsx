"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Crown, Sparkles, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const About: React.FC = () => {
  const [currentMeme, setCurrentMeme] = useState(0);
  const memeFeatures = [
    { icon: Crown, title: "Royal Treasury", desc: "Community-owned vault" },
    { icon: Sparkles, title: "Meme Mining", desc: "Create & earn rewards" },
    { icon: Zap, title: "Instant Claims", desc: "On-chain verification" },
    { icon: TrendingUp, title: "Viral Growth", desc: "Exponential rewards" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMeme((prev) => (prev + 1) % memeFeatures.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [memeFeatures.length]);

  return (
    <section id="about" className="px-6 py-20 relative overflow-hidden">
      {/* Split-screen background effects */}
      <div className="absolute inset-0">
        <div className="split-screen-left absolute left-0 top-0 w-1/2 h-full" />
        <div className="split-screen-right absolute right-0 top-0 w-1/2 h-full" />
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-purple-500/40 via-gold-500/40 to-purple-500/40 animate-divider-glow transform -translate-x-1/2" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 relative z-10">
        <div className="relative">
          <div className="absolute -top-4 -left-4 text-6xl opacity-10 animate-crown-parallax">👑</div>
          <SectionTitle
            title="Own Meme Culture"
            subtitle="The first economy where creativity becomes currency. Every meme you create builds the kingdom."
          />
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="group metric-card rounded-xl p-4 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 group-hover:from-emerald-500/30 group-hover:to-emerald-500/20 transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-gradient-gold font-bold text-lg block">Creator Economy</span>
                  <span className="text-gray-300">Every viral post earns $CROWNIE rewards</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group metric-card rounded-xl p-4 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 group-hover:from-cyan-500/30 group-hover:to-cyan-500/20 transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-gradient-cyber font-bold text-lg block">Anti-Rug Protocol</span>
                  <span className="text-gray-300">LP locked, audited, community-governed</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="group metric-card rounded-xl p-4 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/10 group-hover:from-purple-500/30 group-hover:to-purple-500/20 transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-gradient-royal font-bold text-lg block">Royal Governance</span>
                  <span className="text-gray-300">Community holds the crown and decides the future</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              { label: "E2E", color: "gold" },
              { label: "Creator Tips", color: "cyber" },
              { label: "On‑chain Claims", color: "emerald" },
              { label: "Royal Treasury", color: "royal" }
            ].map((item) => (
              <span key={item.label} className={`rounded-full bg-gradient-to-r from-purple-500/20 to-${item.color === 'gold' ? 'yellow' : item.color === 'cyber' ? 'cyan' : item.color === 'emerald' ? 'green' : 'purple'}-500/20 px-4 py-2 ring-1 ring-purple-500/40 text-gradient-${item.color} font-semibold transition-all hover:scale-105 hover:ring-yellow-400/60`}>
                {item.label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative meme-showcase-container">
          {/* Rotating meme feature showcase */}
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black/40 p-6 ring-2 ring-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.38)]">
            <div className="h-full w-full flex flex-col justify-center items-center text-center">
              <motion.div
                key={currentMeme}
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -180 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="space-y-6"
              >
                <div className="p-4 rounded-full bg-gradient-to-br from-gold-500/20 to-purple-500/20 w-20 h-20 flex items-center justify-center mx-auto">
                  {React.createElement(memeFeatures[currentMeme].icon, {
                    className: "h-10 w-10 text-gradient-gold"
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-royal mb-2">
                    {memeFeatures[currentMeme].title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {memeFeatures[currentMeme].desc}
                  </p>
                </div>
              </motion.div>

              {/* Feature indicators */}
              <div className="flex gap-2 mt-8">
                {memeFeatures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMeme(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentMeme
                        ? 'bg-gradient-to-r from-gold-500 to-purple-500 scale-125'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 text-3xl opacity-20 animate-float">
              💎
            </div>
            <div className="absolute bottom-4 left-4 text-2xl opacity-15 animate-float" style={{animationDelay: '1s'}}>
              🚀
            </div>
            <div className="absolute top-1/2 left-4 text-2xl opacity-10 animate-float" style={{animationDelay: '2s'}}>
              ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;