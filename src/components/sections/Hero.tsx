import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import MagneticButton from "../MagneticButton";
import SplitReveal from "../SplitReveal";
import { ChevronDown } from "lucide-react";

type BookCover = { title: string; author: string; gradient: string; accent?: string };

const bookCovers: BookCover[] = [
  { title: "The Last Ember", author: "L. ARDEN", gradient: "from-[#3d6b3a] to-[#1c3a1c]", accent: "bg-gold" },
  { title: "Forgotten Echoes", author: "M. KAUR", gradient: "from-[#8a4a1a] to-[#3a1a0a]", accent: "bg-gold" },
  { title: "Crown of Ash", author: "R. NOVAK", gradient: "from-[#5a8a4a] to-[#2d5a27]", accent: "bg-gold" },
  { title: "Silent Tide", author: "J. MERCER", gradient: "from-[#1f5a7a] to-[#0a2a3a]", accent: "bg-gold" },
  { title: "Wildfire", author: "S. BLAKE", gradient: "from-[#a83a2a] to-[#3a0a1a]", accent: "bg-gold" },
  { title: "North Star", author: "E. KAINE", gradient: "from-[#2a4a7a] to-[#1c3a1c]", accent: "bg-gold" },
  { title: "Quiet Wonders", author: "T. HALL", gradient: "from-[#7a5a2a] to-[#2a1a0a]", accent: "bg-gold" },
];

const Hero = () => {
  const arcRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const books = arcRef.current?.querySelectorAll(".arc-book");
    if (books) {
      gsap.fromTo(
        books,
        { opacity: 0, scale: 0.5, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, stagger: 0.12, delay: 1.8, ease: "back.out(1.4)" }
      );
    }
    gsap.fromTo(subRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay: 1.4 });
    gsap.fromTo(ctaRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay: 1.7 });

    // Particles
    const container = bgRef.current;
    if (container) {
      for (let i = 0; i < 60; i++) {
        const p = document.createElement("div");
        p.className = "absolute rounded-full bg-gold";
        const size = Math.random() * 3 + 1;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;
        p.style.opacity = `${0.3 + Math.random() * 0.5}`;
        const dx = (Math.random() - 0.5) * 100;
        const dy = -(50 + Math.random() * 200);
        p.style.setProperty("--dx", `${dx}px`);
        p.style.setProperty("--dy", `${dy}px`);
        const dur = 8 + Math.random() * 12;
        const delay = Math.random() * 8;
        p.style.animation = `drift-particle ${dur}s ${delay}s linear infinite`;
        container.appendChild(p);
      }
    }
  }, []);

  const total = bookCovers.length;

  return (
    <section id="top" className="relative min-h-screen overflow-hidden gradient-hero pt-24">
      {/* Bokeh */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-forest-mid/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      {/* Particle field */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none overflow-hidden" />
      <div className="grain" />

      <div className="container relative z-10 flex flex-col items-center text-center pt-12 pb-12">
        <div className="text-xs tracking-[0.4em] text-gold uppercase mb-6 opacity-0 animate-[fade-in_0.8s_1.2s_forwards]">
          ◆ Best Company to Publish Your First Book ◆
        </div>

        <SplitReveal
          as="h1"
          text="Get Published"
          className="font-serif text-foreground text-[clamp(52px,9vw,112px)] leading-[1.05] font-bold"
          trigger="load"
          delay={1.2}
        />
        <SplitReveal
          as="h1"
          text="Within 48 Hours"
          className="font-serif text-gold italic text-[clamp(52px,9vw,112px)] leading-[1.05] font-bold mt-1"
          trigger="load"
          delay={1.5}
        />

        <div className="flex items-center gap-3 mt-7 opacity-0 animate-[fade-in_0.8s_1.7s_forwards]">
          <span className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-gold/70" />
          <span className="text-[10px] md:text-[11px] tracking-[0.35em] text-gold/90 uppercase font-medium">
            100% Royalties • Bestseller-Ready • Globally Distributed
          </span>
          <span className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-gold/70" />
        </div>

        <p
          ref={subRef}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          Book & Noble delivers professional book publishing services designed for authors. 
          As a trusted book publishing company in the USA, we specialize in self publishing. 
          We help you get your book professionally published across Amazon, Barnes & Noble, and worldwide platforms.
        </p>

        {/* Floating book arc */}
        <div ref={arcRef} className="relative w-full h-[260px] md:h-[300px] my-10 flex items-center justify-center">
          {bookCovers.map((book, i) => {
            const angle = -75 + (150 / (total - 1)) * i;
            const radius = 200;
            return (
              <div
                key={i}
                className="arc-book absolute left-1/2 bottom-4 anim-float"
                style={{
                  transform: `translateX(-50%) rotate(${angle}deg) translateY(-${radius}px)`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <div
                  className={`relative w-[80px] h-[112px] md:w-[100px] md:h-[140px] rounded-[3px] shadow-deep overflow-hidden border border-gold/30 bg-gradient-to-br ${book.gradient} flex flex-col justify-between p-2 md:p-2.5`}
                  style={{ transform: `rotate(${-angle}deg)` }}
                >
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
                  <div className="absolute top-0 bottom-0 left-1 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

                  <div className="text-[6px] md:text-[7px] tracking-[0.25em] text-gold/90 font-bold uppercase">
                    B&amp;N
                  </div>

                  <div>
                    <div className={`h-px w-6 md:w-8 mb-1.5 ${book.accent ?? "bg-gold/70"}`} />
                    <div className="font-serif text-foreground text-[10px] md:text-[12px] leading-[1.1] font-bold">
                      {book.title}
                    </div>
                    <div className="text-[6px] md:text-[7px] tracking-[0.2em] text-gold/70 font-bold uppercase mt-1.5">
                      {book.author}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={ctaRef}>
          <MagneticButton
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gold text-accent-foreground font-bold uppercase tracking-widest px-10 py-5 rounded-full text-sm shimmer-on-hover hover:shadow-gold transition-all"
          >
            Get Free Quote →
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground anim-scroll-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default Hero;
