"use client";

import React from "react";
import { Gamepad2, Swords, Vote, Gem, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const utilities = [
  { icon: Gamepad2, title: "Engage to Earn (E2E)", desc: "Post memes, shorts, invites, and tips — earn on‑chain weekly." },
  { icon: Swords, title: "Meme Contests", desc: "Brackets & viral challenges with prize pools and burns." },
  { icon: Vote, title: "Governance Locks", desc: "Lock $CROWNIE for boosts and voting power." },
  { icon: Gem, title: "Royal Treasury", desc: "Fees reinvested into burns, marketing, community." },
  { icon: Gamepad2, title: "Meme Arcade + NFTs", desc: "Mini‑games, collectibles, creator drops to fuel loops." },
  { icon: Wallet, title: "Creator Tips", desc: "Peer tipping + referral boosts tied to growth." },
];

const Utilities: React.FC = () => {
  return (
    <section id="utilities" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="The Engine Behind the Meme Empire"
          subtitle="A layered utility stack designed for culture, alignment, and durability."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Meme Arcade Feature with Visual */}
          <Card className="relative overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
            <div className="flex flex-col gap-4">
              <img
                src="/images/meme-arcade.png"
                alt="Meme Arcade Machine"
                className="h-32 w-full object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-white">Meme Arcade + NFTs</h3>
                <p className="mt-1 text-sm text-gray-300">Mini‑games, collectibles, creator drops to fuel loops.</p>
              </div>
            </div>
          </Card>

          {/* E2E Feature with Visual */}
          <Card className="relative overflow-hidden">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
            <div className="flex flex-col gap-4">
              <img
                src="/images/meme-cards-hands.png"
                alt="Hands holding meme cards with coins"
                className="h-32 w-full object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-white">Engage to Earn (E2E)</h3>
                <p className="mt-1 text-sm text-gray-300">Post memes, shorts, invites, and tips — earn on‑chain weekly.</p>
              </div>
            </div>
          </Card>

          {/* Meme Contests with Visual */}
          <Card className="relative overflow-hidden">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
            <div className="flex flex-col gap-4">
              <img
                src="/images/meme-war-crown.png"
                alt="Epic Meme Contests with Crown Prize"
                className="h-32 w-full object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-white">Meme Contests</h3>
                <p className="mt-1 text-sm text-gray-300">Brackets & viral challenges with prize pools and burns.</p>
              </div>
            </div>
          </Card>

          {/* Regular utility cards */}
          {utilities.slice(2, -2).map(({ icon: Icon, title, desc }, i) => (
            <Card key={i + 2} className="relative overflow-hidden">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 6 }}
                  className="rounded-xl bg-purple-500/15 p-3 ring-1 ring-purple-500/40"
                >
                  <Icon className="h-6 w-6 text-purple-300" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{desc}</p>
                </div>
              </div>
            </Card>
          ))}

          {/* Creator Tips with Visual */}
          <Card className="relative overflow-hidden">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
            <div className="flex flex-col gap-4">
              <img
                src="/images/meme-cards-variety-1.png"
                alt="Meme cards variety for creator tips"
                className="h-32 w-full object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-white">Creator Tips</h3>
                <p className="mt-1 text-sm text-gray-300">Peer tipping + referral boosts tied to growth.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Utilities;