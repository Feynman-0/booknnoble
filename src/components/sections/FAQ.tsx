import { useState } from "react";
import { Plus } from "lucide-react";
import SplitReveal from "../SplitReveal";

const faqs = [
  { q: "What are professional book publishing services?", a: "Professional book publishing services include everything needed to turn your manuscript into a published book, such as editing, formatting, cover design, and distribution. A full-service provider helps authors navigate self publishing and launch their books across major platforms." },
  { q: "How do I publish my first book?", a: "To publish your first book, you need to prepare your manuscript, format it properly, design a cover, and upload it to platforms like Amazon. Many authors choose a book publishing company in the USA to handle the process professionally and avoid technical challenges." },
  { q: "What is Amazon KDP publishing?", a: "Amazon KDP publishing (Kindle Direct Publishing) is a platform that allows authors to self-publish eBooks and paperbacks. With expert guidance, you can optimize your book listing, improve visibility, and reach a global audience." },
  { q: "Do you offer full service book publishing packages?", a: "Yes, we offer full service book publishing packages that cover writing, editing, book formatting and publishing, cover design, and Amazon book publishing services, ensuring a complete end-to-end solution." },
  { q: "Can I hire a professional to write my book?", a: "Absolutely. You can hire a book writer online through our professional book writing services. Our team includes experienced fiction book writing consultants and non-fiction book writing experts who can bring your ideas to life." },
  { q: "What is included in book formatting and publishing?", a: "Book formatting and publishing includes structuring your manuscript for readability, applying professional layouts, and preparing files for Kindle, print, and other digital platforms." },
  { q: "How long does it take to publish a book?", a: "The timeline varies depending on the services required. Basic Amazon KDP publishing can take a few days, while complete book publishing services including editing and design may take a few weeks." },
  { q: "Do I retain rights to my book?", a: "Yes, with our self publishing model, authors retain full ownership and rights to their work, including royalties and distribution control." },
  { q: "What makes your company the best choice for first-time authors?", a: "We provide personalized guidance, transparent processes, and complete support, making us a trusted choice for authors searching for the best company to publish my first book." },
  { q: "Do you help with Amazon optimization?", a: "Yes, we offer expert Amazon book publishing services, including keyword optimization, category selection, and listing enhancement to improve your book’s visibility and ranking." },
  { q: "Can you publish my book globally?", a: "Yes, we provide global distribution through Amazon KDP publishing and other platforms, making your book available to readers worldwide." },
  { q: "How do I get started with your publishing services?", a: "You can get started by filling out our contact form or requesting a free consultation. Our team will review your manuscript and recommend the best book publishing services based on your goals." },
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
