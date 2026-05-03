import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { toast } from "sonner";

const FloatingQuote = () => {
  const [open, setOpen] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    data.service = "Free Quote Request"; // Tagging this as a quote request

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed');

      setOpen(false);
      toast.success("Quote request received! We'll be in touch shortly.");
    } catch (error) {
      toast.error("Failed to send request. Please try again later.");
    }
  };

  return (
    <>
      <MagneticButton
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[990] bg-gold text-accent-foreground rounded-full pl-5 pr-6 py-3.5 font-semibold uppercase tracking-widest text-xs flex items-center gap-2 shadow-gold ring-pulse"
      >
        <Sparkles size={16} />
        Free Quote
      </MagneticButton>

      {open && (
        <div className="fixed inset-0 z-[995] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-card border border-border rounded-3xl p-8 max-w-md w-full relative shadow-deep">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-gold"
            >
              <X />
            </button>
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ No obligation</div>
            <h3 className="font-serif text-2xl mb-4">Get Your Free Publishing Quote</h3>
            <form onSubmit={submit} className="space-y-4">
              <input
                required
                name="name"
                placeholder="Your name"
                className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:border-gold focus:outline-none"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:border-gold focus:outline-none"
              />
              <textarea
                required
                name="message"
                rows={3}
                placeholder="Tell us briefly about your book..."
                className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:border-gold focus:outline-none resize-none"
              />
              <button className="w-full bg-gold text-accent-foreground font-semibold uppercase tracking-widest py-3.5 rounded-full shimmer-on-hover">
                Request Quote
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingQuote;
