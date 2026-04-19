interface Props {
  speed?: number;
  direction?: "left" | "right";
  items: string[];
  className?: string;
  textClassName?: string;
}

const Marquee = ({ speed = 60, direction = "left", items, className = "", textClassName = "" }: Props) => {
  // duplicate enough times for loop
  const content = [...items, ...items, ...items, ...items];
  const duration = (items.length * 200) / speed;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex gap-12 will-change-transform"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {content.map((it, i) => (
          <span key={i} className={`inline-flex items-center gap-12 ${textClassName}`}>
            <span>{it}</span>
            <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-25%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
