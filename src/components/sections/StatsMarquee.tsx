import Marquee from "../Marquee";

const StatsMarquee = () => {
  const items = [
    "50M+ Readers Reached",
    "30,000+ Books Published",
    "48hr Turnaround",
    "98% Author Satisfaction",
    "Global Distribution",
    "Award-Winning Covers",
  ];
  return (
    <div className="bg-forest border-y border-forest-mid/60 h-16 flex items-center">
      <Marquee
        items={items}
        speed={50}
        textClassName="text-gold uppercase tracking-[0.25em] text-xs md:text-sm font-medium"
      />
    </div>
  );
};

export default StatsMarquee;
