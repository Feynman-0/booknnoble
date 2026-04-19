import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  goldWords?: number[]; // indexes of words rendered in gold
  delay?: number;
  trigger?: "load" | "scroll";
  stagger?: number;
}

const SplitReveal = ({
  text,
  className = "",
  as: Tag = "h2",
  goldWords = [],
  delay = 0,
  trigger = "scroll",
  stagger = 0.12,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inners = el.querySelectorAll<HTMLElement>(".reveal-inner");
    if (!inners.length) return;
    gsap.set(inners, { yPercent: 110, opacity: 0 });

    const animate = () => {
      gsap.to(inners, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger,
        delay,
        clearProps: "transform,opacity",
      });
    };

    // Safety fallback: if animation never runs (e.g. tab inactive, gsap stalled),
    // ensure text becomes visible after a reasonable timeout.
    const fallbackMs = (delay + 1.2) * 1000 + 800;
    const fallback = window.setTimeout(() => {
      gsap.set(inners, { clearProps: "transform,opacity" });
    }, fallbackMs);

    if (trigger === "load") {
      const t = window.setTimeout(animate, 50);
      return () => {
        clearTimeout(t);
        clearTimeout(fallback);
      };
    } else {
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: animate,
        once: true,
      });
      return () => {
        st.kill();
        clearTimeout(fallback);
      };
    }
  }, [text, delay, trigger, stagger]);

  const words = text.split(" ");

  return (
    <Tag className={className}>
      <div ref={ref} className="inline">
        {words.map((w, i) => (
          <span key={i} className="reveal-mask">
            <span className={`reveal-inner ${goldWords.includes(i) ? "text-gold" : ""}`}>
              {w}
            </span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </div>
    </Tag>
  );
};

export default SplitReveal;
