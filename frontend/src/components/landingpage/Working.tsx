import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Mail } from "lucide-react";

const Working = () => {
  return (
    <>
      <MaxWidthWrapper className="pb-12 sm:pb-24">
        <div className="w-full bg-black-200/50  rounded-lg">
          <div className="mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-neutral-300/80">
            <p className="text-base sm:text-lg text-center sm:text-left">
              Interested in collaborating? Let&apos;s create something amazing
              together!
            </p>
            <a
              href="mailto:contact@subrat.dev"
              className="group flex items-center gap-2 px-4 py-2 bg-black-300 rounded-lg transition-colors hover:bg-black-200"
            >
              <Mail className="w-4 h-4 text-[#2A73B3] group-hover:scale-110 transition-transform" />
              <span className="text-[#85d2ff]">hey@subrat.com</span>
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Working;
