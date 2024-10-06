import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "/arion.png",
    alt: "Arion",
    title: "Arion",
    description: "Website Design & Development",
    link:"https://arion-three.vercel.app/",
  },
  {
    src: "/casecobra.png",
    alt: "casecobra",
    title: "Case Cobra",
    description: "Custom Case e-Commerce website",
    link:"https://casecobra-project.vercel.app/",
  },
  {
    src: "/independence.png",
    alt: "independence",
    title: "Meckeys Sale",
    description: "Meckeys Independence Sale Page",
    link:"https://samalsubrat.github.io/independence/",
  },
  {
    src: "/mednex.png",
    alt: "mednex",
    title: "Mednex",
    description: "AI Driven Hospital Management",
    link:"https://github.com/samalsubrat/hms",
  },
];
const Projects = () => {
  return (
    <>
      <MaxWidthWrapper className="py-24 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight pb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-black-100">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 whitespace-nowrap">
          {images.map((image, index) => (
            <div
              key={index}
              className="p-1 rounded-lg border border-neutral-700"
              style={{ flex: "0 0 30%" }}
            >
              <div className="flex gap-1 ml-1 mt-0.5">
                <div className="p-1 rounded-full bg-neutral-700 size-1" />
                <div className="p-1 rounded-full bg-neutral-700 size-1" />
                <div className="p-1 rounded-full bg-neutral-700 size-1" />
              </div>
              <div className="rounded-tr-md rounded-tl-md mt-1.5 overflow-hidden md:h-[180px] lg:h-[250px] xl:h-[300px] 2xl:h-[360px] ">
                
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image.src}
                  width={1584}
                  height={950}
                  alt={image.alt}
                  className="rounded-tr-sm rounded-tl-sm transform transition-transform duration-300 hover:scale-105"
                />
                </a>
              </div>
              <div className="bg-[#2A73B3] h-1 w-[calc(100%+8px)] -ml-1"/>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
              <div className="flex items-end justify-between p-4 -mx-2 -mb-2  bg-gradient-l from-black-200 to-black-100 rounded-br-md rounded-bl-md hover:bg-gradient-to-r group transition-all duration-300">
                <div className="mx-1 mb-1">
                  <h1 className="text-2xl font-semibold">{image.title}</h1>
                  <h1 className="text-base font-regular text-neutral-400">
                    {image.description}
                  </h1>
                </div>
                <div className=" mx-1 mb-1 transition-transform duration-300 transform -rotate-45 group-hover:rotate-0">
                  <ArrowRight />
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Projects;
