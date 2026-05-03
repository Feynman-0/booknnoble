import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Pencil, Star, Rocket } from "lucide-react";
import SplitReveal from "../SplitReveal";
import Counter from "../Counter";

const steps = [
  { n: 1, icon: BookOpen, title: "Free Consultation", desc: "Start with a personalized consultation where we evaluate your manuscript, genre, and publishing goals. We provide clear guidance on the best path forward, including full service book publishing packages according to your needs." },
  { n: 2, icon: Pencil, title: "Editing & Professional Revision", desc: "Our editors enhance your manuscript through detailed editing and proofreading. This stage ensures your book meets industry standards." },
  { n: 3, icon: Star, title: "Cover Design & Book Formatting", desc: "We handle every aspect of design, from eye-catching covers to professional KDP book formatting services. Your book is structured for seamless readability and optimized for Kindle, paperback, and global distribution." },
  { n: 4, icon: Rocket, title: "Launch & Distribution", desc: "We finalize your Amazon book publishing services, including expert Amazon KDP setup, keyword optimization, and category placement." },
];

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll(".step-card");
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.95, y: 40 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="features" className="bg-background py-28">
      <div className="container">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ How It Works</div>
          <SplitReveal
            as="h2"
            text="Your Journey to Amazon KDP Success"
            goldWords={[4, 5]}
            className="font-serif text-4xl md:text-6xl text-foreground"
          />
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className="step-card group relative bg-card border border-border rounded-3xl p-8 md:p-10 overflow-hidden hover:border-gold/60 transition-all duration-500 border-b-2 border-b-gold/30"
              >
                <span className="absolute -top-4 right-4 font-serif text-[140px] leading-none text-gold/10 font-black select-none">
                  <Counter to={s.n} duration={1.5} format={(n) => String(n).padStart(2, "0")} />
                </span>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-forest/40 border border-gold/30 flex items-center justify-center mb-6">
                    <Icon className="text-gold" size={26} />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
