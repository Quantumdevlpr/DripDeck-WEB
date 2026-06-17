"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const team = [
  {
    name: "Shivansh Maurya",
    role: "Founder & Developer",
    github: "#",
    linkedin: "#",
    initials: "SM",
  },
  {
    name: "Aditya Vardhan Rai",
    role: "Developer",
    github: "#",
    linkedin: "#",
    initials: "AR",
  },
  {
    name: "Naman Gupta",
    role: "Developer",
    github: "#",
    linkedin: "#",
    initials: "NG",
  },
  {
    name: "Devansh Tekwani",
    role: "Developer",
    github: "#",
    linkedin: "#",
    initials: "DT",
  },
];

function TeamCard({ member }: { member: typeof team[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-[400px] bg-card backdrop-blur-xl rounded-[2rem] p-8 border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(193,155,227,0.3)] hover:border-white transition-colors duration-300 flex flex-col items-center justify-center text-center group cursor-default overflow-hidden"
      >
        {/* Glossy reflection layer */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ transform: "translateZ(1px)" }} 
        />
        
        {/* Floating Avatar */}
        <div 
          className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-4xl font-bold text-indigo-950 mb-8 border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500 ease-out" 
          style={{ transform: "translateZ(50px)" }}
        >
          {member.initials}
        </div>
        
        {/* Floating Text */}
        <h3 className="text-2xl font-black mb-2 text-indigo-950" style={{ transform: "translateZ(40px)" }}>{member.name}</h3>
        <p className="text-md font-bold text-primary mb-6 uppercase tracking-wider" style={{ transform: "translateZ(30px)" }}>{member.role}</p>
        
        {/* Dynamic Sliding Socials */}
        <div 
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/90 to-transparent flex items-end justify-center pb-8 gap-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        >
          <div style={{ transform: "translateZ(60px)" }} className="flex gap-4">
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-indigo-950 text-white hover:scale-110 hover:-translate-y-1 transition-all shadow-xl pointer-events-auto">
              <GithubIcon size={22} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#0077b5] text-white hover:scale-110 hover:-translate-y-1 transition-all shadow-xl pointer-events-auto">
              <LinkedinIcon size={22} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-24 bg-transparent relative z-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-indigo-950">
            Meet the Team
          </h2>
          <p className="text-indigo-950/70 text-lg max-w-2xl mx-auto font-medium">
            The passionate builders bringing DripDeck to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
