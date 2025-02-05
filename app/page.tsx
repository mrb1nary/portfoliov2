import { ProjectsHeadline } from "@/components/projects";
import Hero from "./Hero";
import { ProjectTimeline } from "@/components/project-timeline";
import { ToolsOrbit } from "@/components/tools-orbit";
import { SocialHeadline } from "@/components/socials";
// import { SocialCard } from "@/components/social-cards";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsHeadline />
      <ProjectTimeline />
      <ToolsOrbit />
      <SocialHeadline />
      {/* <SocialCard/> */}
    </>
  );
}
