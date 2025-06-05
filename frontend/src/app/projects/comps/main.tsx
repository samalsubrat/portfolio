'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getProjects } from "@/lib/strapi";
import { Project } from "@/types/project";

interface MainCompProps {
  onProjectSelect: (project: Project) => void;
}

const MainComp = ({ onProjectSelect }: MainCompProps) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="space-y-4 pb-6 md:py-12">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="p-2 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-colors cursor-pointer"
          onClick={() => onProjectSelect(project)}
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
