"use client";

import React from "react";
import { CheckCircle2, XCircle, AlertTriangle, Shield, Crown, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const Why: React.FC = () => {
  return (
    <section id="why" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Why $CROWNIE?"
          subtitle="Fixing the fundamentals of the meme coin meta."
        />
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="problem-card rounded-2xl p-8 transition-all duration-400"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-red-500/20">
                <AlertTriangle className="h-8 w-8 text-red-400 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-red-300">The Meme Problem</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                  <XCircle className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <span className="text-red-200 font-semibold block">Hype Cycles</span>
                  <span className="text-gray-400 text-sm">Pump fast, dump faster - no sustainable value</span>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                  <XCircle className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <span className="text-red-200 font-semibold block">Creator Exploitation</span>
                  <span className="text-gray-400 text-sm">Viral content makers get zero rewards</span>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                  <XCircle className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <span className="text-red-200 font-semibold block">Rug Mechanics</span>
                  <span className="text-gray-400 text-sm">Opaque flows, exit liquidity for insiders</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="solution-card rounded-2xl p-8 transition-all duration-400"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-emerald-500/20 to-gold-500/20">
                <Crown className="h-8 w-8 text-gradient-gold" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-emerald">The CROWNIE Solution</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                  <Zap className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-gradient-cyber font-semibold block">Creator Economy</span>
                  <span className="text-gray-300 text-sm">Viral content = instant $CROWNIE rewards</span>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <Shield className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-gradient-emerald font-semibold block">Anti-Rug Protocol</span>
                  <span className="text-gray-300 text-sm">LP locked, audited, transparent treasury</span>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <Crown className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-gradient-royal font-semibold block">Community Governance</span>
                  <span className="text-gray-300 text-sm">Holders control the kingdom's future</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative my-16 h-1 w-full bg-gradient-to-r from-transparent via-purple-500/60 via-gold-500/60 to-transparent rounded-full animate-divider-glow"
        />

        {/* Meme Battle Visualization */}
        <div className="mt-12 text-center">
          <img
            src="/images/pepe-vs-doge-classic.png"
            alt="Epic Meme Battle: The CROWNIE Solution"
            className="mx-auto h-48 w-full max-w-2xl object-contain rounded-lg"
          />
          <p className="mt-4 text-sm text-purple-200">
            CROWNIE brings unity to the meme wars through fair rewards and governance
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;