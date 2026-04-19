import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Logo from "./Logo";

const Preloader = () => {
  const [done, setDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => setDone(true) });
    tl.fromTo(logoRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" })
      .to(logoRef.current, { opacity: 0, duration: 0.4, delay: 0.4 })
      .to(leftRef.current, { xPercent: -100, duration: 0.9, ease: "power3.inOut" }, "-=0.1")
      .to(rightRef.current, { xPercent: 100, duration: 0.9, ease: "power3.inOut" }, "<");
  }, []);

  if (done) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[10000] pointer-events-none">
      <div ref={leftRef} className="absolute inset-y-0 left-0 w-1/2 bg-ink" />
      <div ref={rightRef} className="absolute inset-y-0 right-0 w-1/2 bg-ink" />
      <div ref={logoRef} className="absolute inset-0 flex items-center justify-center">
        <Logo variant="light" />
      </div>
    </div>
  );
};

export default Preloader;
