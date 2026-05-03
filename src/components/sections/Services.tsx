import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, LayoutGrid, TrendingUp, Palette, Share2, Globe, PenTool, CheckCircle } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Book Publishing",
    desc: "Get your book published in just 48 hours with our book publishing services. We handle everything from production to Amazon book publishing services and multi-platform distribution.",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
  },
  {
    icon: PenTool,
    title: "Ghostwriting",
    desc: "Need help writing your book? Hire a book writer online and work with experienced fiction book writing consultants and non-fiction book writing experts who bring your ideas to life.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
  },
  {
    icon: CheckCircle,
    title: "Book Editing & Proofreading",
    desc: "Our editors polish your manuscript through detailed editing and proofreading. We make sure your book meets professional publishing standards while maintaining your unique voice.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  },
  {
    icon: LayoutGrid,
    title: "Book Formatting",
    desc: "We provide professional KDP book formatting services to ensure your book is perfectly structured for Kindle, print, and digital platforms with industry-standard layouts.",
    img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=400&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Amazon Optimization",
    desc: "Maximize your visibility with expert Amazon KDP publishing support. Hire an expert for Amazon KDP setup, keyword optimization, category placement, and listing enhancements to boost rankings and sales.",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop",
  },
  {
    icon: Palette,
    title: "Book Cover Design",
    desc: "Stand out in a competitive market with visually compelling, genre-specific cover designs that capture attention and increase conversions across online bookstores.",
    img: "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=600&h=400&fit=crop",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Grow your audience with targeted marketing strategies designed for authors. We help you build visibility, engagement, and long-term brand presence across social platforms.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
  },
  {
    icon: Globe,
    title: "Global Book Distribution",
    desc: "Reach readers worldwide through our Amazon book publishing services and global distribution network. This way, we make your book available across major online retailers and marketplaces.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth;
      const horizontalTween = gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll + 200}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      const cards = track.querySelectorAll(".service-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.9 },
          {
            scale: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left center",
              end: "right center",
              scrub: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative bg-background overflow-hidden">
      {/* Mobile: vertical stack */}
      <div className="md:hidden container py-20">
        <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ What We Do</div>
        <h2 className="font-serif text-4xl text-foreground mb-12">Complete Book Publishing Services</h2>
        <div className="grid gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>

      {/* Desktop: pinned horizontal scroll */}
      <div className="hidden md:flex h-screen items-center relative">
        <div ref={trackRef} className="flex gap-8 pl-[55vw] pr-[10vw] will-change-transform">
          {services.map((s, i) => (
            <div key={i} className="service-card shrink-0 w-[380px] h-[78vh]">
              <ServiceCard service={s} />
            </div>
          ))}
        </div>

        {/* Left gradient shield — fades incoming cards so they don't clash with the heading */}
        <div className="absolute inset-y-0 left-0 w-[45vw] z-10 bg-gradient-to-r from-background via-background/95 to-transparent pointer-events-none" />

        {/* Heading sits above the shield */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 container pointer-events-none">
          <div className="max-w-sm">
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ What We Do</div>
            <h2 className="font-serif text-5xl lg:text-6xl text-foreground leading-[1.05]">Complete Book Publishing Services</h2>
            <p className="text-muted-foreground mt-4">
              We offer full service book publishing packages designed to support authors at every stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const Icon = service.icon;
  return (
    <div className="group relative h-full bg-card border border-border rounded-3xl p-8 flex flex-col overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-gold">
      <div className="w-14 h-14 rounded-xl bg-forest/40 border border-gold/30 flex items-center justify-center mb-6">
        <Icon className="text-gold" size={26} />
      </div>
      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{service.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
      <div className="mt-auto rounded-2xl overflow-hidden aspect-[3/2] border border-border">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Services;
