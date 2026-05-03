import { useState } from "react";
import { Mail, Phone, Globe, Send, Loader2, Check } from "lucide-react";
import MagneticButton from "../MagneticButton";
import { toast } from "sonner";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send');

      setStatus("done");
      toast.success("Message sent! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 2500);
    } catch (error) {
      setStatus("idle");
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative bg-background py-28 overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 border border-gold/20 rounded-full anim-slow-rotate pointer-events-none" />
          <div className="absolute -top-2 -left-2 w-56 h-56 border border-gold/30 rounded-full anim-slow-rotate-rev pointer-events-none" />

          <div className="relative">
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ Get in touch</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Ready to Write Your <span className="italic text-gold">Next Chapter</span> with a Professional Publishing Company?
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed max-w-md">
              Take the next step toward becoming a published author with a trusted book publishing company in the USA. Tell us about your book, and we’ll create a plan based on your goals, genre, and publishing vision.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { Icon: Mail, label: "oliverkeen.booksandnoble@gmail.com" },
                { Icon: Phone, label: "+1 (800) 555-0192" },
                { Icon: Globe, label: "New York · London · Dubai" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-card border border-gold/40 flex items-center justify-center">
                    <Icon className="text-gold" size={18} />
                  </span>
                  <span className="text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-5">
          <FloatInput name="name" label="Your Name" type="text" required />
          <FloatInput name="email" label="Email Address" type="email" required />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Service Interest</label>
            <select name="service" className="w-full mt-2 bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition">
              <option>Book Publishing</option>
              <option>Formatting</option>
              <option>Cover Design</option>
              <option>Marketing</option>
              <option>Amazon Optimization</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell Us About Your Book</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full mt-2 bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition resize-none"
            />
          </div>
          <MagneticButton
            type="submit"
            disabled={status !== "idle"}
            className="w-full bg-gold text-accent-foreground font-semibold uppercase tracking-widest py-4 rounded-full shimmer-on-hover hover:shadow-gold transition-all flex items-center justify-center gap-2 disabled:opacity-80"
          >
            {status === "idle" && (<>Send Message <Send size={16} /></>)}
            {status === "loading" && <Loader2 className="animate-spin" />}
            {status === "done" && <Check />}
          </MagneticButton>
        </form>
      </div>
    </section>
  );
};

const FloatInput = ({ label, type, required, name }: { label: string; type: string; required?: boolean; name: string }) => (
  <div>
    <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full mt-2 bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
    />
  </div>
);

export default Contact;
