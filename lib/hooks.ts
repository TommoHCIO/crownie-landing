import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const handler = (e: Event) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) {
        return;
      }

      const href = target.getAttribute("href");
      if (!href || href === "#" || !href.startsWith("#")) {
        return;
      }

      try {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } catch (error) {
        console.warn("Smooth scroll aborted for selector", href, error);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}