import { AnimatedShinyTextDemo } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-custom-gradient -mt-5 pb-20 sm:py-32 relative overflow-clip">
        <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[3000px] lg:h-[968px] rounded-[100%] bg-[#0a0a0a] left-1/2 -translate-x-1/2 border-[#2A73B3] bg-[radial-gradient(closest-side,#0a0a0a_82%,#2A73B3)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"/>
        <MaxWidthWrapper className="space-y-4 relative flex flex-col justify-center items-center">
          <div className="space-y-1 relative flex flex-col justify-center items-center">
            <video
              src="/ai.webm"
              autoPlay
              muted
              width="400"
              height="400"
              className="block sm:hidden"
            />
            <AnimatedShinyTextDemo />
            <div className="flex items-end relative">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-center">
                Hi, I&apos;m Subrat, a
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-center text-[#85d2ff]">
              designer & developer
            </h1>
            <div className="flex items-end relative">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-center">
                based in India
              </h1>
              <video
                src="/ai.webm"
                autoPlay
                muted
                width="400"
                height="400"
                className="absolute -bottom-3/4 -left-[73%] rotate-180 hidden sm:block"
              />
            </div>
          </div>
          <p className="text-center text-gray-300 font-medium text-base md:text-lg">
            I blend technical expertise with design to<br />create efficient,
            scalable applications that deliver<br />seamless and engaging user experiences.
          </p>
          <Button variant="secondary">Show my work</Button>
        </MaxWidthWrapper>
      
        {/* <div className="bg-black rounded-full h-[700px] w-[700px] absolute bottom-0 left-1/2 translate-x-[-50%]"/> */}
      </div>
  )
}

export default Hero