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
      <div className="bg-primary lg:h-[573px] h-[400px] w-screen absolute -z-10" />

      <div className="pt-[80px] flex flex-col items-center justify-center container mx-auto max-lg:px-6">
        <p className="text-white z-10 font-roboto text-[24px] md:text-[32px] lg:text-[48px] font-extrabold max-w-[900px] text-center leading-[110%]">
          Fully multi-threaded and lightning fast world loading speed
        </p>
        <img src="/chunk_loading.gif" className="mt-[49px] mb-[80px] rounded-xl" />
      </div>

      <div className="max-lg:py-[20px] py-[80px] flex gap-[80px] max-xl:items-center max-xl:justify-center lg:container lg:mx-auto max-lg:px-6">
        <img src="chunk_loading.gif" className="w-full max-w-[674px] rounded-xl max-xl:hidden" />

        <div className="flex flex-col items-start justify-center">
          <p className="font-roboto text-[34px] lg:text-[48px] font-extrabold tracking-[110%] text-white">
            Powerful server.
          </p>
          <p className="text-primary font-roboto text-[34px] lg:text-[48px] font-extrabold tracking-[110%] -mt-4">
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

          <button type="button" className="mt-4 bg-primary text-white px-5 max-lg:py-4 py-2 max-lg:w-full rounded-xl">
            Download
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-[80px] lg:container max-lg:px-6 lg:mx-auto">
        <p className="text-white font-roboto max-lg:text-center font-extrabold max-lg:text-[30px] lg:text-[46px] leading-[110%]">
          Want to start contributing?
        </p>
        <p className="text-primary font-roboto max-lg:text-center font-extrabold max-lg:text-[30px] lg:text-[46px] leading-[110%]">
          Check us out on GitHub
        </p>

        <div className="max-sm:w-full">
          <GitHubBtn className="mt-4 w-full" />
        </div>
      </div>
    </div>
  );
};
