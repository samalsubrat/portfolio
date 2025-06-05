import React from "react";
import Image from "next/image";
import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Arion",
    description: "A modern landing page for ARION, a mechanical keyboard brand.",
    image: {
      url: "/arion.png",
      alt: "Arion"
    },
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://arion.com",
    GLink: "https://github.com/samalsubrat/arion"
  },
  {
    title: "CaseCobra",
    description: "Custom phone case design and ordering platform.",
    image: {
      url: "/casecobra.png",
      alt: "CaseCobra"
    },
    technologies: ["NextJs", "Stripe", "PostgreSQL"],
    link: "https://casecobra.com",
    GLink: "https://github.com/samalsubrat/casecobra"
  },
  {
    title: "Independence",
    description: "A custom sale page for Meckeys Independence Sale.",
    image: {
      url: "/independence.png",
      alt: "Independence"
    },
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://independence.com",
    GLink: "https://github.com/samalsubrat/independence"
  },
  {
    title: "MedNex",
    description: "Healthcare management system for clinics and hospitals.",
    image: {
      url: "/mednex.png",
      alt: "MedNex"
    },
    technologies: ["NextJs", "Python", "PostgreSQL"],
    link: "https://mednex.com",
    GLink: "https://github.com/samalsubrat/hms"
  }
];

interface MainCompProps {
  onProjectClick: (project: Project) => void;
}

const MainComp = ({ onProjectClick }: MainCompProps) => {
  return (
    <div className="space-y-4 pb-6 md:py-12">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="p-2 rounded-lg border border-neutral-700 cursor-pointer hover:border-neutral-500 transition-colors"
          onClick={() => onProjectClick(project)}
        >
          <div className="flex gap-1">
            <div className="p-1 rounded-full bg-neutral-700 size-1" />
            <div className="p-1 rounded-full bg-neutral-700 size-1" />
            <div className="p-1 rounded-full bg-neutral-700 size-1" />
          </div>
          <div className="rounded-md mt-1 border border-neutral-700 md:max-w-[600px]">
            <Image
              src={project.image.url}
              width={1280}
              height={720}
              alt={project.image.alt}
              className="rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainComp;
