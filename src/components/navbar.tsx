import { Github, Menu } from "lucide-react";
import { GitHubBtn } from "./home/github-btn";
import { useState } from "react";

const NAVIGATION_ITEMS = [
  { title: "Features", href: "#" },
  { title: "Documentation", href: "#" },
  { title: "Releases", href: "#" },
];

export const Navbar = () => {
  const [isShowMenu, setIsShowMennu] = useState(false);

  const handleOnClick = () => {
    setIsShowMennu((prev) => !prev);
  };
  return (
    <>
      {/* DESKTOP VIEW */}
      <nav className="flex items-center justify-between container mx-auto py-4 max-lg:hidden">
        <p className="font-roboto font-bold text-[32px] text-white">FerrumC</p>
        <div className="flex items-center justify-center gap-4 text-white">
          {NAVIGATION_ITEMS.map((item) => {
            const { title, href } = item;
            return <p>{title}</p>;
          })}
        </div>

        <GitHubBtn />
      </nav>

      {/* MOBILE VIEW */}
      <nav className="flex items-center justify-between py-4 lg:hidden relative px-4">
        <p className="font-roboto font-bold text-[32px] text-white">FerrumC</p>

        <button type="button" onClick={handleOnClick}>
          <Menu className="text-white" />
        </button>

        {isShowMenu && (
          <div className="absolute mt-56 w-full bg-secondary z-50 px-6">
            <div className="flex flex-col items-end justify-center gap-4 text-white pb-4">
              {NAVIGATION_ITEMS.map((item) => {
                const { title, href } = item;
                return <p>{title}</p>;
              })}
            </div>

            <GitHubBtn />
          </div>
        )}
      </nav>
    </>
  );
};
