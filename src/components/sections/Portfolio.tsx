import Marquee from "../Marquee";

const covers = [
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1531901599143-ef2fec3a83d4?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=420&fit=crop",
  "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&h=420&fit=crop",
];

const Portfolio = () => {
  const row1 = covers.slice(0, 7);
  const row2 = covers.slice(7);

  const Row = ({ items, dir }: { items: string[]; dir: "left" | "right" }) => {
    const rep = [...items, ...items, ...items];
    return (
      <div className="overflow-hidden">
        <div
          className="inline-flex gap-5 will-change-transform"
          style={{
            animation: `cover-${dir} ${items.length * 5}s linear infinite`,
          }}
        >
          {rep.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-[130px] h-[180px] rounded-lg overflow-hidden border border-border shadow-lg hover:scale-110 hover:border-gold hover:shadow-gold transition-all duration-300 cursor-pointer"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes cover-left { from { transform: translateX(0); } to { transform: translateX(-${items.length * 150}px); } }
          @keyframes cover-right { from { transform: translateX(-${items.length * 150}px); } to { transform: translateX(0); } }
        `}</style>
      </div>
    );
  };

  return (
    <section id="portfolio" className="bg-background py-28">
      <div className="container text-center mb-14">
        <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ Portfolio</div>
        <h2 className="font-serif text-4xl md:text-5xl">
          Books We've <span className="italic text-gold">Brought to Life</span>
        </h2>
        <p className="text-muted-foreground mt-4">
          Every cover tells a story. Every title, a journey.
        </p>
      </div>
      <div className="space-y-6">
        <Row items={row1} dir="left" />
        <Row items={row2} dir="right" />
      </div>
    </section>
  );
};

export default Portfolio;
