import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Counter from "../Counter";

const Impact = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const panels = ref.current.querySelectorAll(".impact-panel");
    gsap.fromTo(
      panels,
      { x: -120, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section className="relative bg-background py-28 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1600&h=900&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

      <div ref={ref} className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[460px]">
          <div className="impact-panel absolute top-0 left-0 w-[58%] h-[420px] bg-gold rounded-3xl p-8 flex flex-col justify-between shadow-deep">
            <div>
              <Counter
                to={50}
                suffix="M+"
                className="font-serif text-6xl md:text-7xl font-bold text-accent-foreground"
              />
              <div className="h-1 w-16 bg-accent-foreground/40 mt-4" />
            </div>
            <p className="text-accent-foreground font-medium leading-snug text-lg">
              Readers Reached Globally Through Our Authors' Books
            </p>
          </div>
          <div className="impact-panel absolute top-[60px] right-0 w-[58%] h-[420px] bg-gold rounded-3xl p-8 flex flex-col justify-between shadow-deep" style={{ background: "linear-gradient(135deg, hsl(34 92% 48%), hsl(34 92% 38%))" }}>
            <div>
              <Counter
                to={30000}
                suffix="+"
                className="font-serif text-6xl md:text-7xl font-bold text-accent-foreground"
              />
              <div className="h-1 w-16 bg-accent-foreground/40 mt-4" />
            </div>
            <p className="text-accent-foreground font-medium leading-snug text-lg">
              Books Successfully Published and Distributed Worldwide
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-xs uppercase tracking-[0.4em] text-gold">◆ Our Impact</div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            A Leading Book Publishing Company Delivering Global Author Success
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Book & Noble goes beyond basic publishing. We build author success stories. We have helped thousands of writers navigate self publishing and turn their manuscripts into professionally published books with global reach.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From first-time authors searching for the best company to publish my first book to experienced writers expanding their audience through Amazon book publishing services, our approach is centered on quality, visibility, and long-term growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
