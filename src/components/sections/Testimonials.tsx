import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import SplitReveal from "../SplitReveal";

const testimonials = [
  {
    name: "Emily Carter",
    book: "First-Time Author",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop",
    quote: "Working with Book & Noble made the entire publishing process feel effortless. As a first-time author, I had no idea where to start but their team guided me through everything. Seeing my book live on Amazon was surreal.",
  },
  {
    name: "Daniel Brooks",
    book: "Amazon Bestseller",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    quote: "I was specifically looking for reliable Amazon KDP publishing support, and they delivered beyond expectations. The optimization alone helped my book gain visibility within weeks.",
  },
  {
    name: "Sophia Reynolds",
    book: "Independent Author",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop",
    quote: "Their book editing and proofreading team is exceptional. They refined my manuscript without changing my voice, which meant a lot to me as a writer.",
  },
  {
    name: "Michael Turner",
    book: "Non-Fiction Writer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop",
    quote: "I hired them for professional book writing services, and the experience was smooth from start to finish. The writer understood my vision perfectly and delivered something I’m truly proud of.",
  },
  {
    name: "Olivia Bennett",
    book: "Fiction Author",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
    quote: "The cover design and book formatting services were top-tier. My book looks just as professional as anything you’d find in a bookstore.",
  },
  {
    name: "Nathan Collins",
    book: "Serial Author",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=400&fit=crop",
    quote: "I needed a team that could handle everything from writing to publishing. Their full service book publishing package saved me months of effort and confusion.",
  },
  {
    name: "Hannah Scott",
    book: "Debut Author",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop",
    quote: "I was searching for the best company to publish my first book and I’m glad I chose them. They made the process simple, transparent, and actually enjoyable.",
  },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 5000);
    return () => clearInterval(t);
  }, [total]);

  const get = (offset: number) => testimonials[(idx + offset + total) % total];

  return (
    <section className="bg-background py-28 overflow-hidden">
      <div className="container text-center mb-14">
        <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ Testimonials</div>
        <SplitReveal
          as="h2"
          text="See What Our Clients Have to Say About Us"
          goldWords={[7, 8]}
          className="font-serif text-4xl md:text-5xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setIdx((i) => (i - 1 + total) % total)}
            className="hidden md:flex w-12 h-12 rounded-full border border-gold text-gold hover:bg-gold hover:text-accent-foreground transition-all items-center justify-center shrink-0"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          <div className="flex items-stretch gap-6 justify-center flex-1">
            <TestimonialCard t={get(-1)} small />
            <TestimonialCard t={get(0)} />
            <TestimonialCard t={get(1)} small />
          </div>

          <button
            onClick={() => setIdx((i) => (i + 1) % total)}
            className="hidden md:flex w-12 h-12 rounded-full border border-gold text-gold hover:bg-gold hover:text-accent-foreground transition-all items-center justify-center shrink-0"
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-gold" : "w-2 bg-muted"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ t, small }: { t: typeof testimonials[0]; small?: boolean }) => (
  <div
    className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 ${
      small ? "w-[280px] md:w-[340px] opacity-60 scale-95 hidden md:block" : "w-full max-w-[480px] shadow-deep"
    }`}
  >
    <div className="relative aspect-video">
      <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      <button className="absolute inset-0 flex items-center justify-center group">
        <span className="w-16 h-16 rounded-full bg-gold flex items-center justify-center transition-transform group-hover:scale-110">
          <Play className="text-accent-foreground ml-1" fill="currentColor" />
        </span>
      </button>
    </div>
    <div className="p-6">
      <div className="font-serif text-xl">{t.name}</div>
      <div className="italic text-muted-foreground text-sm mt-1">{t.book}</div>
      <div className="flex gap-0.5 my-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="text-foreground/80 text-sm leading-relaxed">"{t.quote}"</p>
    </div>
  </div>
);

export default Testimonials;
