import { Github } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { GitHubBtn } from "./github-btn";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start h-[calc(100vh-80px)] pt-[80px]">
      <h1 className="text-white text-center font-roboto text-[72px] font-extrabold leading-[110%] max-w-[994px]">
        <span className="pr-6">A</span>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "fast",
            3500, // wait 1s before replacing "Mice" with "Hamsters"
            "multithreaded",
            2500,
            "async",
            4000,
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
          className="text-primary"
        />{" "}
        server you never knew you needed
      </h1>
      <h2 className="text-white py-[25px] font-roboto text-[20px] tracking-[160%] opacity-65 max-w-[798px] text-center">
        A high-performance Minecraft server implementation, crafted in Rust for unparalleled speed and efficiency.
      </h2>

      <div className="flex items-center gap-4 text-white">
        <button type="button" className="bg-primary px-4 py-3 rounded-xl">
          Download
        </button>

        <GitHubBtn />
      </div>

      <img src="/icon.png" className="max-w-[450px]" />
    </div>
  );
};
