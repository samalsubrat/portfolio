import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Testimonials = () => {
  return (
    <>
      <MaxWidthWrapper className="pb-12 sm:pb-24 ">
        <div className="flex flex-col items-center justify-start overflow-y-auto" id="testimonials">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight pb-8 sm:pb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-black-100">
            Testimonials
          </h1>
          <div className="grid grid-cols-2 gap-5 ">
            <div className="bg-black-200 p-5 rounded-lg">
              <p className="text-base sm:text-lg text-neutral-300 mb-2">
                He worked in various areas of graphic design, using tools such
                as Adobe Photoshop, Adobe Illustrator, and DaVinci Resolve. He
                successfully met the creative objectives that were set at the
                beginning of each project, delivering visually compelling
                results. Subrat is diligent and hardworking, consistently taking
                delivery timelines for all assigned tasks very seriously.
              </p>
              <p className="text-base text-neutral-400">Saumya Kumari</p>
              <p className="text-sm text-neutral-400">Kloudmate</p>
            </div>
            <div className="bg-black-200 p-5 rounded-lg">
              <p className="text-base sm:text-lg text-neutral-300 mb-2">
              He worked in diverse areas including DevOps (setting up Redis on 
              WordPress and NGINX), monitoring with Prometheus, Loki, and Grafana,
              and web development (sales/product pages, bug fixes, and UX improvements).
              He contributed to product design and UI/UX, managed online communities,
              and led marketing campaigns across social media and email, working with
              influencers. He also conducted market research and created social media
              assets, packaging, and videos. Subrat is hardworking and dependable,
              consistently meeting deadlines with quality results.
              </p>
              <p className="text-base text-neutral-400">Co Founder</p>
              <p className="text-sm text-neutral-400">M</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Testimonials;
