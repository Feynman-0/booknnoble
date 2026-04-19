import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9998] bg-transparent">
      <div className="h-full bg-gold transition-[width] duration-75" style={{ width: `${p}%` }} />
    </div>
  );
};

export default ScrollProgress;
