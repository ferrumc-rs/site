import { useEffect, useRef, type ReactNode } from "react";

interface AnimatedProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Animated({ children, delay = 0, className = "" }: AnimatedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      element.style.opacity = "1";
      element.style.transform = "none";
      return;
    }

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              element.setAttribute("data-in", "true");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
      );

      io.observe(element);
      return () => io.disconnect();
    }

    element.setAttribute("data-in", "true");
  }, []);

  return (
    <div
      ref={ref}
      data-animate
      style={{ "--a-delay": `${delay}s` } as React.CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
