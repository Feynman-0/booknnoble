import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  format?: (n: number) => string;
}

const Counter = ({ to, duration = 2, suffix = "", prefix = "", className = "", format }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / (duration * 1000), 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(Math.floor(eased * to));
              if (t < 1) requestAnimationFrame(tick);
              else setVal(to);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format ? format(val) : val.toLocaleString()}
      {suffix}
    </span>
  );
};

export default Counter;
