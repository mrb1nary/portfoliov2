"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { HeroText } from "./morphing-text";

export function HeroSpotlight() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden px-4">
      <Spotlight />
      <div className="relative z-10 w-full max-w-7xl text-center pt-16 md:pt-0">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Anubhab Nayak
        </h1>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <HeroText />
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Developer
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-lg mx-auto px-2">
          Jack of all tech, master of Rust
        </p>
      </div>
    </div>
  );
}
