import React from "react";
import Image from "next/image";
import { getProjects } from "@/lib/strapi";
import { Project } from "@/types/project";

const MainComp = async () => {
  const projects = await getProjects();

  return (
    <div className="space-y-4 pb-6 md:py-12">
      {projects.map((project) => (
        <div key={project.id} className="p-2 rounded-lg border border-neutral-700">
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
