import { useState } from "react";
import { Plus } from "lucide-react";
import SplitReveal from "../SplitReveal";

const faqs = [
  { q: "How long does the publishing process take?", a: "Our standard turnaround is 48 hours for full publication once your manuscript is finalized. Editing and design phases vary by scope and book length, typically 2–6 weeks." },
  { q: "What is included in the publishing package?", a: "Editing, formatting, cover design, ISBN registration, eBook & print conversion, distribution to 40+ retailers, and 90 days of marketing support." },
  { q: "Do I retain the rights to my book?", a: "Absolutely. You retain 100% of your copyright and royalties. We act as your publishing partner, not your owner." },
  { q: "How much does it cost to publish with Book & Noble?", a: "Packages start at $1,499 for essentials and scale based on services. Every quote is custom — request a free consultation for transparent pricing." },
  { q: "Can I publish on Amazon and other platforms simultaneously?", a: "Yes — we list your book on Amazon, Barnes & Noble, Apple Books, Kobo, Google Play, and dozens more, all in one launch." },
  { q: "Do you offer editing services for non-English manuscripts?", a: "We currently support English, Spanish, French, German, Arabic, and Mandarin manuscripts, with translation services available." },
  { q: "What file formats do I need to submit?", a: "Microsoft Word (.docx) is preferred, but we also accept Google Docs, Pages, Scrivener exports, and PDF manuscripts." },
  { q: "How do royalties work?", a: "You earn standard retailer royalties (35–70% on Amazon, varies elsewhere). We do not take a percentage of your sales — your earnings are yours." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-28">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ Questions</div>
          <SplitReveal
            as="h2"
            text="Frequently Asked Questions"
            goldWords={[1]}
            className="font-serif text-4xl md:text-5xl"
          />
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-l-4 border-l-gold" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-serif text-lg md:text-xl transition-colors ${isOpen ? "text-gold" : "text-foreground"}`}>
                    {f.q}
                  </span>
                  <Plus
                    size={20}
                    className={`text-gold shrink-0 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
