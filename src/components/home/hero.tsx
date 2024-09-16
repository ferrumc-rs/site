import { TypeAnimation } from "react-type-animation";
import { GitHubBtn } from "./github-btn";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center max-lg:px-6 justify-start min-h-[calc(100vh-80px)] pt-[80px]">
      <h1 className="text-white text-center font-roboto text-[30px] sm:text-[40px] xl:text-[72px] font-extrabold leading-[110%] max-w-[994px]">
        <TypeAnimation
          sequence={[
            "Multithreaded",
            4500,
            "Customizable",
            4500,
            "Powerful",
            4500,
            "Fast",
            4500,
            "Robust",
            4500,
            "Lightweight",
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className="text-primary"
          style={{ width: "100%", display: "block" }}
        />
        server you never knew you needed
      </h1>
      <h2 className="text-white py-[25px] font-roboto text-[16px] lg:text-[20px] tracking-[160%] opacity-65 max-w-[798px] text-center">
        A high-performance Minecraft server implementation, crafted in Rust for unparalleled speed and efficiency.
      </h2>

      <div className="flex max-lg:flex-col items-center gap-4 text-white">
        <button type="button" className="bg-primary px-4 py-3 rounded-xl">
          Download
        </button>

        <GitHubBtn />
      </div>

      <img src="/icon.png" className="w-full max-w-[450px]" />
    </div>
  );
};
