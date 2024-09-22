import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export async function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex py-4 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border  transition-all ease-in hover:cursor-pointer border-white/5 bg-[#11283d] hover:bg-[#0a1724]",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
          <span>✨ Contact me</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
