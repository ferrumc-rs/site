import { Github } from "lucide-react";
import { GitHubBtn } from "./home/github-btn";

const NAVIGATION_ITEMS = [
  { title: "Features", href: "#" },
  { title: "Documentation", href: "#" },
  { title: "Releases", href: "#" },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto py-4">
      <p className="font-roboto font-bold text-[32px] text-white">FerrumC</p>
      <div className="flex items-center justify-center gap-4 text-white">
        {NAVIGATION_ITEMS.map((item) => {
          const { title, href } = item;
          return <p>{title}</p>;
        })}
      </div>

      <GitHubBtn />
    </nav>
  );
};
