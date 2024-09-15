import { Check, Github } from "lucide-react";
import { GitHubBtn } from "./github-btn";

const FEATURES = [
  "Fully multithreaded and thread-safe architecture",
  "High performance and memory efficiency",
  "Customizable server list",
  "World importing from vanilla Minecraft",
  "Powerful Entity Component System",
  "Lightning-fast world loading",
  "Compatible with Vanilla Minecraft clients (1.20.1)",
];

export const Features = () => {
  return (
    <div className="relative mt-[80px]">
      <div className="bg-primary h-[573px] w-screen absolute -z-10" />

      <div className="pt-[80px] flex flex-col items-center justify-center container mx-auto">
        <p className="text-white z-10 font-roboto text-[48px] font-extrabold max-w-[900px] text-center leading-[110%]">
          Fully multi-threaded and lightning fast world loading speed
        </p>
        <img src="/chunk_loading.gif" className="mt-[49px] mb-[80px] rounded-xl" />
      </div>

      <div className="py-[80px] flex gap-[80px]  container mx-auto">
        <img src="chunk_loading.gif" className="max-w-[674px] rounded-xl" />

        <div className="flex flex-col items-start justify-center">
          <p className="font-roboto text-[48px] font-extrabold tracking-[110%] text-white">Powerful server.</p>
          <p className="text-primary font-roboto text-[48px] font-extrabold tracking-[110%] -mt-4">
            Fully Multithreaded.
          </p>

          <p className="text-white font-roboto text-[18px] leading-[160%] opacity-65">
            Here are the key features we have for this server:
          </p>

          <div className="mt-4">
            {FEATURES.map((feature) => {
              return (
                <div key={feature} className="flex items-center justify-start text-white gap-2">
                  <Check className="w-4 text-primary" />
                  <p>{feature}</p>
                </div>
              );
            })}
          </div>

          <button type="button" className="mt-4 bg-primary text-white px-5 py-2 rounded-xl">
            Download
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-[80px]  container mx-auto">
        <p className="text-white font-roboto font-extrabold text-[46px] leading-[110%]">Want to start contributing?</p>
        <p className="text-primary font-roboto font-extrabold text-[46px] leading-[110%]">Check us out on GitHub</p>

        <GitHubBtn className="mt-4" />
      </div>
    </div>
  );
};
