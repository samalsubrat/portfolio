import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { getProjects } from "@/lib/strapi";

const Projects = async () => {
  const projects = await getProjects();

  return (
    <>
      <MaxWidthWrapper className="py-24 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight pb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-black-100" id="projects">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 whitespace-nowrap">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-1 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-colors duration-300"
              style={{ flex: "0 0 30%" }}
            >
              <div className="flex gap-1 ml-1 mt-0.5">
                <div className="p-1 rounded-full bg-neutral-700 size-1" />
                <div className="p-1 rounded-full bg-neutral-700 size-1" />
                <div className="p-1 rounded-full bg-neutral-700 size-1" />
              </div>
              <div className="rounded-tr-md rounded-tl-md mt-1.5 overflow-hidden md:h-[180px] lg:h-[250px] xl:h-[300px] 2xl:h-[360px] ">
                <Image
                  src={project.image.url}
                  width={1584}
                  height={950}
                  alt={project.image.alt}
                  className="rounded-tr-sm rounded-tl-sm transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="bg-[#2A73B3] h-1 w-[calc(100%+8px)] -ml-1" />
              
              <div className="flex items-end justify-between p-4 -mx-2 -mb-2  bg-gradient-l from-black-200 to-black-100 rounded-br-md rounded-bl-md hover:bg-gradient-to-r group transition-all duration-300">
                <div className="mx-1 mb-1">
                  <h1 className="text-2xl font-semibold">{project.title}</h1>
                  <h1 className="text-base font-regular text-neutral-400">
                    {project.description}
                  </h1>
                </div>
                <div className=" mx-1 mb-1 transition-transform duration-300 transform -rotate-45 group-hover:rotate-0">
                  <ArrowRight />
                </div>
              </div>
            </a>
          ))}
        </div>
        <a href="/projects">
          <Button variant="secondary" className="group transition-all duration-300 mt-10 flex items-center justify-center">
            Check Other Projects
            <div className=" mx-1 transition-transform duration-300 transform -rotate-45 group-hover:rotate-0">
              <ArrowRight className="size-4"/>
            </div>
          </Button>
        </a>
      </MaxWidthWrapper>
    </>
  );
};

export default Projects;
