import { Github } from "lucide-react";
import { cn } from "../../utils/utils";

interface GitHubBtnProps {
  className?: string;
}
export const GitHubBtn = (props: GitHubBtnProps) => {
  const { className } = props;

  return (
    <a href="https://github.com/ferrumc-rs/ferrumc/" target="_blank" rel="noopenner noreferrer">
      <div className={cn("flex items-center justify-center gap-2 bg-btn px-4 py-3 rounded-xl text-white", className)}>
        Contibute <Github className="w-5 text-white" />
      </div>
    </a>
  );
};
