import { MorphingText } from "@/components/ui/morphing-text";
import { Bungee_Spice } from "next/font/google";

const bungeeSpice = Bungee_Spice({
  subsets: ["latin"],
  weight: "400",
});

const texts = ["Rust", "React", "Solana", "Blockchain", "NextJS", "Web3"];

export function HeroText() {
  return (
    <MorphingText
      className={`text-orange-400 ${bungeeSpice.className}`}
      texts={texts}
    />
  );
}
