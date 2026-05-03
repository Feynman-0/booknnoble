import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";

const SubscribeBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section ref={ref} className="relative bg-forest-mid overflow-hidden">
      {/* abstract curved lines */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] border border-foreground rounded-full anim-slow-rotate" />
        <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] border border-foreground rounded-full anim-slow-rotate-rev" />
      </div>

      <div className="container relative z-10 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <h3 className="font-serif italic text-3xl md:text-4xl text-foreground max-w-xl">
          Join Thousands of Authors Using Our Professional Book Publishing Services
        </h3>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const email = (e.target as HTMLFormElement).email.value;
            
            try {
              const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
              });
              
              if (!response.ok) throw new Error('Failed');
              
              (e.target as HTMLFormElement).reset();
              toast.success("Subscribed successfully!");
            } catch (error) {
              toast.error("Failed to subscribe. Please try again.");
            }
          }}
          className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[480px]"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 bg-transparent border border-foreground/40 text-foreground placeholder:text-foreground/50 rounded-full px-6 py-3.5 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
          />
          <button
            type="submit"
            className="bg-forest hover:bg-gold hover:text-accent-foreground text-foreground font-semibold uppercase tracking-widest text-sm rounded-full px-8 py-3.5 transition-all shimmer-on-hover"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeBanner;
