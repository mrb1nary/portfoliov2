"use client";

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProjectTimeline() {
  const data = [
    {
      title: "ReputeChain",
      url: "https://repute-chain.vercel.app/",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            ReputeChain is a decentralized social reputation system that
            calculates and stores user reputation scores on the Solana
            blockchain
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/reputechainhome.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/reputechainscore.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Solana Payment Splitter",
      url: "https://solana-payment-splitter.vercel.app/",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            A decentralized application built on the Solana blockchain that
            allows users to split payments securely and efficiently
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/spshome.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/spstxn.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Solana Trading Bot",
      url: "https://github.com/mrb1nary/solana-trading-bot",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Automated trading bot that monitors Twitter users, extracts token
            addresses using AI, and executes trades on Raydium
          </p>
          <div className="grid grid-cols-2 gap-4">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              <source src="/assets/soltradingbotvideo.mp4" type="video/mp4" />
              Cant load video
            </video>
            <Image
              src="/assets/soltradingbot2.png"
              alt="feature template"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Rust Blockchain",
      url: "https://github.com/mrb1nary/rust-blockchain",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            A simple blockchain implementation in Rust featuring wallets,
            transactions, and a Proof-of-Stake (PoS) consensus mechanism.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              <source src="/assets/rustbc.mp4" type="video/mp4" />
              Cant load video
            </video>
            <Image
              src="/assets/rustbcimage.png"
              alt="feature template"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Amazon Web Clone",
      url: "https://clone-ad6ce.web.app/",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            A pixel perfect clone of Amazon with cart and authentication
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/amazonhome.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/amazoncart.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "....and much more",
      url: "#",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Follow me on socials to stay updated with my latest projects
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-screen bg-black mb-30">
      <Timeline data={data} />
    </div>
  );
}
