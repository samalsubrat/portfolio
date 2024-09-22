import { AnimatedShinyTextDemo } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <>
      <div className="bg-custom-gradient pt-2 pb-20 sm:py-20">
        <MaxWidthWrapper className="space-y-4">
          <div className="space-y-1 relative flex flex-col justify-center items-center">
          <video
                src="/ai.webm"
                autoPlay
                muted
                width="400"
                height="400"
                className="block sm:hidden"
              />
          <AnimatedShinyTextDemo/>
            <div className="flex items-end relative">
              <h1 className="text-7xl font-bold tracking-tight text-center">
                Hi, I&apos;m Subrat,
              </h1>
              <video
                src="/ai.webm"
                autoPlay
                muted
                width="400"
                height="400"
                className="absolute -right-1/2 hidden sm:block"
              />
            </div>
            <h1 className="text-7xl font-bold tracking-tight text-center text-[#85d2ff]">
              a software engineer
            </h1>
            <div className="flex items-end relative">
              <h1 className="text-7xl font-bold tracking-tight text-center">
                based in India
              </h1>
              <video
                src="/ai.webm"
                autoPlay
                muted
                width="400"
                height="400"
                className="absolute -bottom-3/4 -left-[69%] rotate-180 hidden sm:block"
              />
            </div>
          </div>
          <p className="text-center text-gray-300 font-medium text-lg">
            I blend technical expertise with design to create efficient,
            scalable applications
            <br />
            that deliver seamless and engaging user experiences.
          </p>
        </MaxWidthWrapper>
        {/* <div className="bg-black rounded-full h-[700px] w-[700px] absolute bottom-0 left-1/2 translate-x-[-50%]"/> */}
      </div>
    </>
  );
}
