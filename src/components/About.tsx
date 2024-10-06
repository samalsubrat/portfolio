"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Marquee from "@/components/magicui/marquee";
import {
  MapPin,
  BookA,
  Clock,
  GraduationCap,
  ChefHat,
  Zap,
  Laptop,
  ShoppingBag,
  Pen,
} from "lucide-react";

const images = [
  { src: "/Logos/next.png", alt: "nextjs" },
  { src: "/Logos/react.png", alt: "react" },
  { src: "/Logos/ts.png", alt: "typescript" },
  { src: "/Logos/postgres.png", alt: "postgres" },
  { src: "/Logos/js.png", alt: "javascript" },
  { src: "/Logos/tailwind.png", alt: "tailwind" },
  { src: "/Logos/adobe.png", alt: "adobe" },
  { src: "/Logos/figma.png", alt: "figma" },
];

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MaxWidthWrapper className="py-24 ">
      <div className="flex flex-col items-center justify-start overflow-y-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight pb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-black-100">
          About Me
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-rows-2 gap-4 w-full">
          <div className="bg-black-200 rounded-lg p-10 md:col-span-3 md:row-span-1 text-xl text-neutral-300/80">
            <p>
              I am <span className="text-[#85d2ff] opacity-100">Subrat</span>.
              <br />A designer & CS under-graduate from India.
              <br />
              <br />
              I blend technical skills with design to create efficient, visually
              appealing applications. I aim to develop scalable solutions for
              seamless user experiences.
              <br />
              <br />
              Outside of work, I focus on motion graphics and UI/UX design,
              constantly honing my skills, and play video games.
            </p>
          </div>

          {/* Hover image with transition */}
          <div
            className="bg-black-200 rounded-lg md:col-span-2 md:row-span-2 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* First image (BW) */}
            <div
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src="/portraitBW.webp"
                alt="subrat"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Second image (Color) */}
            <div
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src="/portrait.webp"
                alt="subrat"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="bg-black-200 rounded-lg\ md:col-span-2 p-5 text-neutral-300/80">
            <p className="text-center text-sm pb-2">What I Offer</p>

            <div className="space-y-2">
              <div className="flex gap-2 text-base">
                <div className="bg-black-300 rounded-md p-2 space-y-2 w-1/2">
                  <p className="flex items-center text-lg justify-between text-neutral-300">
                    Website Development
                    <Zap className="text-yellow-400 size-6" />
                  </p>
                  <p className="text-sm">
                    Fast websites prioritizing execution, speed, and
                    performance.
                  </p>
                </div>
                <div className="bg-black-300 rounded-md p-2 space-y-2 w-1/2">
                  <p className="flex items-center text-lg justify-between text-neutral-300">
                    Designs
                    <Laptop className="text-green-400 size-6" />
                  </p>
                  <p className="text-sm">
                    Modern responsive designs. Motion Graphics, UI/UX Designs &
                    more.
                  </p>
                </div>
              </div>

              <div className="flex gap-2 text-base">
                <div className="bg-black-300 rounded-md p-2 space-y-2 w-1/2">
                  <p className="flex items-center text-lg justify-between text-neutral-300">
                    E-Commerce Solutions
                    <ShoppingBag className="text-blue-400 size-6" />
                  </p>
                  <p className="text-sm">
                    Custom e-commerce with secure payments and smooth UX.
                  </p>
                </div>

                <div className="bg-black-300 rounded-md p-2 space-y-2 w-1/2">
                  <p className="flex items-center text-lg justify-between text-neutral-300">
                    Prototyping
                    <Pen className="text-pink-400 size-6" />
                  </p>
                  <p className="text-sm">
                    Turning ideas into interactive prototypes for concept
                    testing.
                  </p>
                </div>
              </div>

              <div className="bg-black-300 rounded-md p-2 w-full">
                <p className="text-lg justify-between text-neutral-300 text-center">
                  Your One-Stop Destination for all your needs.
                  {/* <ShoppingBag className="text-blue-400 size-6" /> */}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black-200 rounded-lg md:col-span-1"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4 w-full mt-4">
          <div className="bg-black-200 rounded-lg p-5 md:col-span-3 space-y-2 flex flex-col justify-center">
            <div className="flex justify-between">
              <span className="rounded-full px-3 py-1 bg-black-300 text-neutral-300/80 flex gap-1 items-center w-fit text-sm">
                <MapPin className="size-4 text-[#2A73B3]" />
                India
              </span>
              <span className="rounded-full px-3 py-1 bg-black-300 text-neutral-300/80 flex gap-1 items-center w-fit text-sm">
                <BookA className="size-4 text-[#2A73B3]" />
                English, Hindi & Odia
              </span>
              <span className="rounded-full px-3 py-1 bg-black-300 text-neutral-300/80 flex gap-1 items-center w-fit text-sm">
                <Clock className="size-4 text-[#2A73B3]" />
                IST | +5:30
              </span>
            </div>
            <div className="flex justify-between">
              <span className="rounded-full px-3 py-1 bg-black-300 text-neutral-300/80 flex gap-1 items-center w-fit text-sm">
                <GraduationCap className="size-4 text-[#2A73B3]" />
                ITER, Siksha O Anusandhan University
              </span>
              <span className="rounded-full px-3 py-1 bg-black-300 text-neutral-300/80 flex gap-1 items-center w-fit text-sm">
                <ChefHat className="size-4 text-[#2A73B3]" />
                Foodie
              </span>
            </div>
          </div>
          <div className="bg-black-200 rounded-lg py-5 space-y-3 md:col-span-3 relative">
            <p className="text-neutral-300/80 text-sm text-center">
              My Tech Stack
            </p>
            <div className="">
              <div className="absolute left-0 bottom-0 w-1/4 z-10 h-full bg-gradient-to-r from-black-200 via-40% via-black-200 to-transparent !rounded-lg" />
              <div className="absolute right-0 bottom-0 w-1/4 z-10 h-full bg-gradient-to-l from-black-200 via-40% via-black-200 to-transparent !rounded-lg" />
              <Marquee reverse pauseOnHover className="[--duration:15s]">
                {images.map((image, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <Image
                      src={image.src}
                      width={30}
                      height={30}
                      alt={image.alt}
                      className="rounded-md"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
          <div className="bg-black-200 rounded-lg p-5 md:col-span-4 text-sm text-neutral-300/80 flex flex-col  justify-between">
            <p className="text-center items-center">Fun Facts:</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="/tea.png"
                  alt="subrat"
                  height={40}
                  width={40}
                  objectFit="cover"
                  className="rounded-lg"
                />
                <p>&gt;</p>
                <Image
                  src="/coffee.png"
                  alt="subrat"
                  height={40}
                  width={40}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/shinchan.png"
                  alt="subrat"
                  height={75}
                  width={75}
                  objectFit="cover"
                  className="rounded-lg -my-10"
                />
                <p className="pr-1 -ml-2">is</p>
                <Image
                  src="/heart.png"
                  alt="subrat"
                  height={35}
                  width={35}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/game.png"
                  alt="subrat"
                  height={40}
                  width={40}
                  objectFit="cover"
                  className="rounded-lg"
                />
                <p className="pl-2">=</p>
                <Image
                  src="/massage.png"
                  alt="subrat"
                  height={40}
                  width={40}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
