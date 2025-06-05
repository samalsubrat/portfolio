"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { useState } from "react";
import MainComp from "./comps/main";
import Working from "@/components/landingpage/Working";
import ProjectModal from "./comps/ProjectModal";
import { Project } from "@/types/project";

const Page = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <MaxWidthWrapper className="md:flex md:justify-between">
        <div className="md:sticky md:top-0 md:h-screen md:flex md:flex-col md:pt-12 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight pb-3  text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-black-100">
            Projects
          </h1>
          <h1 className="text-xl lg:text-2xl font-medium text-[#85d2ff]">
            Website Design & Development
          </h1>
          <h1 className="text-lg lg:text-xl text-neutral-300">
            A collection of my designs and developments.
          </h1>
        </div>
        <div className="md:overflow-y-auto">
          <MainComp onProjectClick={handleProjectClick} />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <Working />
      </MaxWidthWrapper>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Page;
