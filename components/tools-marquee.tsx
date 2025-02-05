import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const reviews = [
  {
    name: "Rust",
    img: "/assets/icons/rust.svg",
  },
  {
    name: "React",
    img: "/assets/icons/react.svg",
  },
  {
    name: "Web3.js",
    img: "/assets/icons/solana.svg",
  },
  {
    name: "NextJS",
    img: "/assets/icons/nextjs.svg",
  },
  {
    name: "Git",
    img: "/assets/icons/git.svg",
  },
  {
    name: "Anchor Lang",
    img: "/assets/icons/anchor.svg",
  },
  {
    name: "Typescript",
    img: "/assets/icons/ts.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ToolsScroll = ({ img, name }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-800 bg-gray-900 hover:bg-gray-800 text-white"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <figcaption className="text-sm font-medium">{name}</figcaption>
      </div>
    </figure>
  );
};

export function ToolsMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ToolsScroll key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ToolsScroll key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}
