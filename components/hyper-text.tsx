import { HyperText } from "./ui/hyper-text";

interface HyperTextComponentProps {
  text: string;
}

export function HyperTextComponent({ text }: HyperTextComponentProps) {
  return <HyperText>{text}</HyperText>;
}
