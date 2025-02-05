import { TypingAnimation } from "./ui/typing-animation";

interface TypingAnimationComponentProps {
  text: string;
}

export function TypingAnimationComponent({
  text,
}: TypingAnimationComponentProps) {
  return (
    <TypingAnimation className="mt-6 text-3xl sm:text-lg text-neutral-300 max-w-lg mx-auto px-2">
      {text}
    </TypingAnimation>
  );
}
