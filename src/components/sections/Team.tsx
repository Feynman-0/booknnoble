import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitReveal from "../SplitReveal";

const team = [
  { name: "Sarah Mitchell", role: "Chief Editor", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
  { name: "James Okonkwo", role: "Head of Design", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
  { name: "Priya Sharma", role: "Amazon Strategist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
  { name: "Marcus Lee", role: "Marketing Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
  { name: "Elena Rossi", role: "Cover Artist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" },
  { name: "David Chen", role: "Tech Director", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop" },
  { name: "Aisha Bello", role: "Distribution Manager", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop" },
  { name: "Tom Hartley", role: "Content Strategist", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" },
];

const Team = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(".team-card");
    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="team" className="bg-background py-28">
      <div className="container text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">◆ The Team</div>
        <SplitReveal
          as="h2"
          text="Meet Our Expert Team Behind the Magic"
          goldWords={[2]}
          className="font-serif text-4xl md:text-5xl text-foreground"
        />
        <p className="text-muted-foreground mt-6 max-w-3xl mx-auto">
          Behind every successful book is a team that understands the publishing journey inside out. Our specialists include experienced editors, creative designers, Amazon KDP publishing experts, and marketing strategists who work together to deliver high-quality book publishing services to each author.
        </p>

        <div ref={ref} className="mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-4">
          {team.map((m) => (
            <div key={m.name} className="team-card group flex flex-col items-center cursor-pointer">
              <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-transparent group-hover:border-gold transition-all duration-500 group-hover:scale-110">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 overflow-hidden">
                <div className="font-serif text-foreground text-base transition-transform duration-300 group-hover:-translate-y-1">{m.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
