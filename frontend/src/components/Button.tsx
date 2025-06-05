
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export async function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex pb-2 sm:py-4 items-center justify-center">
      <div
        className={cn(
          "group transition-all ease-in",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out  hover:duration-300 hover:text-neutral-300">
          <span className="tracking-wider">Scripting stories through code✨</span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
