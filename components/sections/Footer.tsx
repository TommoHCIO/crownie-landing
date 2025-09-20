"use client";

import React from "react";
import { Twitter, MessageCircle, Link as LinkIcon } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="px-6 pb-20 pt-10 text-center text-xs text-gray-400">
      <div className="mx-auto mb-6 flex max-w-5xl flex-wrap items-center justify-center gap-3">
        <a
          className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"
          href="https://x.com/crownie"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="h-4 w-4" /> X
        </a>
        <a
          className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"
          href="https://t.me/crownie"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4" /> Telegram
        </a>
        <a
          className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"
          href="https://docs.crownie.xyz"
          target="_blank"
          rel="noreferrer"
        >
          <LinkIcon className="h-4 w-4" /> Docs
        </a>
      </div>
      &copy; {new Date().getFullYear()} CROWNIE - Built on Base
    </footer>
  );
};

export default Footer;