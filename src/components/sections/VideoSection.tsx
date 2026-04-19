import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Play } from "lucide-react";

const VideoSection = () => {
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;
    gsap.to(bgRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: { trigger: bgRef.current, start: "top bottom", end: "bottom top", scrub: true },
    });
  }, []);

  return (
    <section className="relative bg-background py-28 overflow-hidden">
      <img
        ref={bgRef}
        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&h=900&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-[120%] object-cover opacity-[0.10]"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-forest-mid/30 blur-3xl pointer-events-none" />

      <div className="container relative z-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-gold italic mb-3">Watch Our Authors' Stories</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          See real authors talk about their publishing journey with Book & Noble.
        </p>

        <div className="relative max-w-[720px] aspect-video mx-auto bg-[hsl(120_30%_5%)] rounded-3xl border border-gold/40 overflow-hidden shadow-gold">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=675&fit=crop"
            alt="Video preview"
            className="w-full h-full object-cover opacity-60"
          />
          <button className="absolute inset-0 flex items-center justify-center group" data-cursor-hover>
            <span className="w-20 h-20 rounded-full bg-gold flex items-center justify-center transition-transform group-hover:scale-110 ring-pulse">
              <Play className="text-accent-foreground ml-1.5" size={32} fill="currentColor" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
