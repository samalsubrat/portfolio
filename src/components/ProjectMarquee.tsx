'use client'
import Image from "next/image";

const images = [
  { src: "/arion.png", alt: "Arion" },
  { src: "/casecobra.png", alt: "casecobra" },
  { src: "/independence.png", alt: "independence" },
  { src: "/mednex.png", alt: "mednex" },
];

const ProjectMarquee = () => {


  return (
    <div className="hidden sm:block relative overflow-hidden w-full" >
      <div className="absolute inset-0 bg-gradient-to-b from-black-100 to-transparent z-10 pointer-events-none border-t border-neutral-800" />
      <div className="flex gap-4 animate-marquee whitespace-nowrap">
        {images.concat(images).map((image, index) => (
          <div
            key={index}
            className="p-2 rounded-lg border border-neutral-700"
            style={{ flex: "0 0 30%" }}
          >
            <div className="flex gap-1">
              <div className="p-1 rounded-full bg-neutral-700 size-1" />
              <div className="p-1 rounded-full bg-neutral-700 size-1" />
              <div className="p-1 rounded-full bg-neutral-700 size-1" />
            </div>
            <div className="rounded-md mt-1 border border-neutral-700">
              <Image
                src={image.src}
                width={1584}
                height={950}
                alt={image.alt}
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMarquee;
