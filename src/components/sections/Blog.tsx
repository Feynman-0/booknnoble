import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitReveal from "../SplitReveal";

const posts = [
  {
    cat: "Marketing",
    title: "5 Proven Strategies to Market Your Self-Published Book",
    excerpt: "From email funnels to influencer reviews — the launch tactics top 1% authors actually use.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
  },
  {
    cat: "Writing",
    title: "How to Write a Book Blurb That Actually Sells",
    excerpt: "The 200 words on the back of your book matter more than chapter one. Here's how to craft them.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
  },
  {
    cat: "Publishing",
    title: "Amazon KDP vs. IngramSpark: Which is Right for You?",
    excerpt: "A side-by-side comparison of royalties, reach, formats, and distribution speed.",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop",
  },
  {
    cat: "Design",
    title: "The Secret to a Book Cover That Stands Out on Shelves",
    excerpt: "Color theory, typography hierarchy, and the psychology behind covers readers can't ignore.",
    img: "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=600&h=400&fit=crop",
  },
];

const Blog = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll(".blog-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="blog" className="bg-background py-28">
      <div className="container">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ Insights</div>
          <SplitReveal
            as="h2"
            text="From the Publishing Desk"
            goldWords={[3]}
            className="font-serif text-4xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p) => (
            <article
              key={p.title}
              className="blog-card group bg-card border border-border rounded-2xl overflow-hidden hover:border-gold hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-gold/10 text-gold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  {p.cat}
                </span>
                <h3 className="font-serif text-lg mt-4 leading-snug group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{p.excerpt}</p>
                <div className="text-gold text-sm font-medium mt-5 inline-flex items-center gap-1 group-hover:gap-3 transition-all">
                  Read More <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
