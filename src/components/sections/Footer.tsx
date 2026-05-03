import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "../Logo";

const cols = [
  { title: "Company", links: ["About", "Careers", "Press", "Partners"] },
  { title: "Services", links: ["Publishing", "Formatting", "Cover Design", "Marketing"] },
  { title: "Resources", links: ["Blog", "Case Studies", "Author Toolkit", "FAQ"] },
];

const Footer = () => (
  <footer className="relative bg-[hsl(120_30%_3%)] pt-20 pb-8 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-forest-mid/20 blur-3xl anim-radial-pulse pointer-events-none" />

    <div className="container relative z-10">
      <div className="flex justify-center mb-14">
        <Logo variant="light" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">{c.title}</div>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-foreground/70 hover:text-gold transition-colors text-sm">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li>oliverkeen.booksandnoble@gmail.com</li>
            <li>+1 (800) 555-0192</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-gold hover:bg-gold hover:text-accent-foreground hover:scale-110 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© 2025 Book & Noble Inc. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gold transition">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-gold transition">Terms of Service</a>
        </div>
        <div className="italic">Made with passion for authors worldwide.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
