import { ProjectsHeadline } from "@/components/projects";
import Hero from "./Hero";
import { ProjectTimeline } from "@/components/project-timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsHeadline />
      <ProjectTimeline />
    </>
  );
}
