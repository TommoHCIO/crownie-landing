"use client";

import React, { useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, useTransform, useScroll } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Utilities from "@/components/sections/Utilities";
import Why from "@/components/sections/Why";
import Tokenomics from "@/components/sections/Tokenomics";
import Roadmap from "@/components/sections/Roadmap";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import ContractBar from "@/components/navigation/ContractBar";
import Header from "@/components/navigation/Header";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/sections/Footer";
import { useSmoothScroll } from "@/lib/hooks";

export default function App() {
  useSmoothScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll progress for back-to-top
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-black via-[#0a0113] to-[#2a0a4e] text-white">
      {/* Ambient radial glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      <ContractBar />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileNav open={menuOpen} setOpen={setMenuOpen} />

      <Hero />
      <Stats />
      <About />
      <Utilities />
      <Why />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <FinalCTA />
      <Footer />

      {/* Back to top button */}
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 rounded-full bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur hover:bg-white/15"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Scroll progress bar */}
      <motion.div
        style={{ width: useTransform(progress, (v) => `${v}%`) }}
        className="fixed left-0 top-0 h-1 bg-purple-500 z-50"
      />
    </main>
  );
}