import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Check } from "lucide-react";

const features = [
  "Chicago Style–Compliant Formatting",
  "Custom Chapter Headings",
  "Balanced Margins and Gutters",
  "Elegant Drop Caps and Stylistic Elements",
  "Print and eBook Ready Files",
];

const PagePreview = () => {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(cardRef.current, { x: 80, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1,
      scrollTrigger: { trigger: ref.current, start: "top 70%" },
    });
    gsap.to(imgRef.current, {
      scale: 1.08,
      ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
    });
  }, []);

  return (
    <section ref={ref} className="relative bg-background py-28 overflow-hidden">
      <div className="container">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ Craftsmanship</div>
          <h2 className="font-serif text-4xl md:text-5xl">
            What Your <span className="italic text-gold">Formatted Pages</span> Look Like
          </h2>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-[520px]">
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1600&h=1000&fit=crop"
            alt="Open book interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/30" />

          <div
            ref={cardRef}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[hsl(36_50%_93%)] text-[hsl(120_35%_10%)] rounded-3xl p-8 shadow-deep"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[hsl(116_38%_25%)] mb-3">
              Format Specifications
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
              Industry-Standard Interior Formatting for Every Genre
            </h3>
            <p className="text-sm mb-6 opacity-80 font-medium">
              We focus on delivering high-quality book formatting and publishing solutions that include:
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center shrink-0">
                    <Check size={14} className="text-accent-foreground" strokeWidth={3} />
                  </span>
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagePreview;
