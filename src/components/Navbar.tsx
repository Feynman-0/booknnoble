import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onAnchor = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled ? "py-3 backdrop-blur-md" : "py-5"
        }`}
        style={{
          background: scrolled ? "hsl(120 22% 5% / 0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
        }}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="anim-nav-item"
            style={{ animation: "navDrop 0.6s ease-out 0s both" }}
          >
            <Logo />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); onAnchor(l.href); }}
                className="text-sm uppercase tracking-widest text-foreground/80 hover:text-gold transition-colors relative group"
                style={{ animation: `navDrop 0.6s ease-out ${0.08 * (i + 1)}s both` }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4" style={{ animation: "navDrop 0.6s ease-out 0.6s both" }}>
            <a href="#contact" className="text-sm uppercase tracking-widest text-foreground/80 hover:text-gold transition-colors">
              Login
            </a>
            <MagneticButton
              onClick={() => onAnchor("#contact")}
              className="bg-gold text-accent-foreground font-semibold text-sm uppercase tracking-widest px-6 py-3 rounded-full shimmer-on-hover hover:shadow-gold transition-shadow"
            >
              Get Started
            </MagneticButton>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <style>{`
          @keyframes navDrop {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-ink transition-all duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); onAnchor(l.href); }}
              className="text-3xl font-serif text-foreground hover:text-gold transition-colors"
              style={{
                animation: open ? `navDrop 0.5s ease-out ${0.1 * i}s both` : "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => onAnchor("#contact")}
            className="bg-gold text-accent-foreground font-semibold uppercase tracking-widest px-8 py-3 rounded-full mt-4"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
