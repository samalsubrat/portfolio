import React from "react";
import Image from "next/image";
const images = [
  { src: "/arion.png", alt: "Arion" },
  { src: "/casecobra.png", alt: "casecobra" },
  { src: "/independence.png", alt: "independence" },
  { src: "/mednex.png", alt: "mednex" },
];

const MainComp = () => {
  return (
    <div className="space-y-4 pb-6 md:py-12">
      {images.map((image, index) => (
        <div key={index} className="p-2 rounded-lg border border-neutral-700">
          <div className="flex gap-1">
            <div className="p-1 rounded-full bg-neutral-700 size-1" />
            <div className="p-1 rounded-full bg-neutral-700 size-1" />
            <div className="p-1 rounded-full bg-neutral-700 size-1" />
          </div>
          <div className="rounded-md mt-1 border border-neutral-700 md:max-w-[600px]">
            <Image
              src={image.src}
              width={1280}
              height={720}
              alt={image.alt}
              className="rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainComp;
