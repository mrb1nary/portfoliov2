import { ProjectsHeadline } from "@/components/projects";
import Hero from "./Hero";
import { ProjectTimeline } from "@/components/project-timeline";
import { ToolsOrbit } from "@/components/tools-orbit";
import { SocialHeadline } from "@/components/socials";
import { ToolsMarquee } from "@/components/tools-marquee";
// import { SocialCard } from "@/components/social-cards";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsHeadline />
      <ProjectTimeline />
      <ToolsOrbit />
      <ToolsMarquee />
      <SocialHeadline />
      {/* <SocialCard/> */}
      <div className="bg-black text-white text-center items-center">
        made with ❤️ and ☕ by mrb1nary
      </div>
    </>
  );
}
