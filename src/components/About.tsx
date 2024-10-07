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
  Mail,
  Calendar,
  Crown,
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

const offerItems = [
  {
    title: "Website Development",
    description:
      "Fast websites prioritizing execution, speed, and performance.",
    icon: <Zap className="text-yellow-400 size-6" />,
  },
  {
    title: "Designs",
    description:
      "Modern responsive designs. Motion Graphics, UI/UX Designs & more.",
    icon: <Laptop className="text-green-400 size-6" />,
  },
  {
    title: "E-Commerce Solutions",
    description: "Custom e-commerce with secure payments and smooth UX.",
    icon: <ShoppingBag className="text-blue-400 size-6" />,
  },
  {
    title: "Prototyping",
    description:
      "Turning ideas into interactive prototypes for concept testing.",
    icon: <Pen className="text-pink-400 size-6" />,
  },
];

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MaxWidthWrapper className="py-12 sm:py-24">
      <div className="flex flex-col items-center justify-start overflow-y-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight pb-8 sm:pb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-black-100">
          About Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 w-full">
          <div className="bg-black-200 rounded-lg p-6 lg:col-span-3 text-base sm:text-lg text-neutral-300/80">
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

          <div
            className="bg-black-200 rounded-lg lg:col-span-2 lg:row-span-2 relative overflow-hidden h-96 lg:h-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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

          <div className="bg-black-200 rounded-lg col-span-1 lg:col-span-2 p-5 text-neutral-300/80">
            <h2 className="text-center text-sm pb-4">What I Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offerItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-black-300 rounded-md p-3 space-y-2"
                >
                  <p className="flex items-center text-base sm:text-lg justify-between text-neutral-300">
                    {item.title}
                    {item.icon}
                  </p>
                  <p className="text-xs sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-black-300 rounded-md p-3 mt-4 w-full">
              <p className="text-base sm:text-lg justify-between text-neutral-300 text-center">
                Your One-Stop Destination for all your needs.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-custom bg-400% animate-gradient rounded-lg col-span-1 p-5 flex flex-col justify-center items-center space-y-2">
            <div className="bg-black-300 rounded-full p-3">
              <Crown className="text-[#2A73B3]" />
            </div>
            <h2 className="text-lg font-semibold text-neutral-300/80">
              Let&apos;s Work Together
            </h2>
            <p className="text-sm text-neutral-300/60 text-center">
              Let&apos;s make the magic happen
            </p>
            <div className="flex flex-col gap-2 w-full py-2 ">
              <a href="mailto:samalsubrat919@gmail.com" target="_blank">
                <div className="bg-black-300 rounded-md p-2 flex gap-2 text-lg items-center justify-center text-neutral-300/80 w-full hover:scale-105 transition-all duration-300 ">
                  <Mail className="text-[#2A73B3]" />
                  Email Me
                </div>
              </a>
              <a href="https://cal.com/samalsubrat/15min" target="_blank">
                <div className="bg-black-300 rounded-md p-2 flex gap-2 text-lg items-center justify-center text-neutral-300/80 w-full hover:scale-105 transition-all duration-300">
                  <Calendar className="text-[#2A73B3]" />
                  Schedule a Call
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 w-full mt-4">
          <div className="bg-black-200 rounded-lg p-5 lg:p-2 xl:p-5 md:col-span-3 space-y-2 flex flex-col justify-center ">
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

          
          <div className="bg-black-200 rounded-lg py-5 space-y-3 lg:col-span-3 relative flex flex-col justify-evenly">
            <h2 className="text-neutral-300/80 text-sm text-center">
              My Tech Stack
            </h2>
            <div className="relative">
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
          
          <div className="bg-black-200 rounded-lg p-5 lg:col-span-4 text-sm text-neutral-300/80 flex flex-col justify-evenly max-md:mr-0 max-lg:-mr-4">
            <h2 className="text-center items-center mb-4">Fun Facts:</h2>
            <div className="flex flex-wrap justify-around gap-4">
              <div className="flex items-center">
                <Image
                  src="/tea.png"
                  alt="Tea"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <p className="mx-2">&gt;</p>
                <Image
                  src="/coffee.png"
                  alt="Coffee"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/shinchan.png"
                  alt="Shinchan"
                  width={75}
                  height={75}
                  className="rounded-lg -my-10"
                />
                <p className="mx-2">is</p>
                <Image
                  src="/heart.png"
                  alt="Heart"
                  width={35}
                  height={35}
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/game.png"
                  alt="Game"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <p className="mx-2">=</p>
                <Image
                  src="/massage.png"
                  alt="Massage"
                  width={40}
                  height={40}
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
