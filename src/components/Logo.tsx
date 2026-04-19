interface LogoProps {
  variant?: "default" | "light";
  className?: string;
}

const Logo = ({ variant = "default", className = "" }: LogoProps) => {
  const main = variant === "light" ? "hsl(var(--foreground))" : "hsl(var(--forest-mid))";
  const sub = variant === "light" ? "hsl(var(--foreground) / 0.7)" : "hsl(var(--muted-foreground))";

  return (
    <div className={`flex flex-col items-start leading-none select-none ${className}`}>
      <div className="font-serif font-black text-2xl md:text-3xl tracking-tight">
        <span style={{ color: main }}>book</span>
        <span className="text-gold mx-1 font-serif italic">&amp;</span>
        <span style={{ color: main }}>noble</span>
      </div>
      <div
        className="text-[9px] md:text-[10px] tracking-[0.35em] mt-1 font-sans-body font-medium"
        style={{ color: sub }}
      >
        DIGITAL PUBLISHERS
      </div>
    </div>
  );
};

export default Logo;
