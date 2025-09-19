"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

interface FAQItemProps {
  q: string;
  a: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white/5 ring-1 ring-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="font-medium text-white">{q}</span>
        <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-300">{a}</div>}
    </div>
  );
};

const faqs = [
  {
    q: "What is Engage‑to‑Earn (E2E)?",
    a: "A verifiable set of social actions (posts, shares, tips, invites) that roll into weekly on‑chain claims."
  },
  {
    q: "Is liquidity locked?",
    a: "Yes. LP is locked and audits are scheduled; the Royal Treasury is transparent."
  },
  {
    q: "How do meme contests work?",
    a: "Weekly brackets; winners get prizes, and select rounds trigger treasury burns."
  },
  {
    q: "How does governance work?",
    a: "Lock $CROWNIE for boosts and voting power on key proposals and budget allocations."
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="FAQ"
          subtitle="Quick answers about $CROWNIE and the ecosystem."
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;