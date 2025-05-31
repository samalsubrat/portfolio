/* eslint-disable  @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Marquee from "@/components/magicui/marquee";
import { getProjects } from "@/lib/strapi";

const ProjectMarquee = async () => {
  const projects = await getProjects();

  return (
    <div className="hidden sm:block relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black-100 to-transparent z-10 pointer-events-none border-t border-neutral-800" />
      {/* <Marquee pauseOnHover className="[--duration:35s]"> */}
        <Marquee className="gap-4 whitespace-nowrap">
          {projects.concat(projects).map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="p-2 rounded-lg border border-neutral-700"
            >
              <div className="flex gap-1">
                <div className="p-1 rounded-full bg-neutral-700 size-1" />
                <div className="p-1 rounded-full bg-neutral-700 size-1" />
                <div className="p-1 rounded-full bg-neutral-700 size-1" />
              </div>
              <div className="rounded-md mt-1 border border-neutral-700 max-w-[600px]">
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
        </Marquee>
      {/* </Marquee> */}
    </div>
  );
};

export default ProjectMarquee;
