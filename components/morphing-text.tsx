import { MorphingText } from "@/components/ui/morphing-text";

const texts = ["Rust", "React", "Solana", "Blockchain", "NextJS", "Web3"];

export function HeroText() {
  return <MorphingText className="text-orange-400" texts={texts} />;
}
