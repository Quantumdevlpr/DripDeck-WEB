"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "MyCloset",
    description: "Smart image-cropping automatically removes backgrounds from clothing photos to create a clean digital inventory.",
    image: "/features/closet.jpg",
  },
  {
    title: "FitFeed",
    description: "Smart outfit recommendations curated specifically for your upcoming occasions and unique style preferences.",
    image: "/features/feed.jpg",
  },
  {
    title: "StyleCanvas",
    description: "Your interactive digital playground for creating, mixing, and matching your own outfit combinations.",
    image: "/features/canvas.jpg",
  },
  {
    title: "StyleLens",
    description: "Visualize and preview your built outfits in high fidelity before ever putting them on.",
    image: "/features/lens.jpg",
  },
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  // Parallax translation for the background image (moves slightly opposite to tilt)
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-3%", "3%"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-3%", "3%"]);

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
    <div style={{ perspective: 1200 }} className="w-full h-[400px] md:h-[450px]">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/20 bg-indigo-950"
      >
        {/* Parallax Background Image */}
        <motion.div 
          className="absolute inset-[-10%] w-[120%] h-[120%]"
          style={{ x: translateX, y: translateY, transformStyle: "preserve-3d" }}
        >
          <Image 
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-30 group-hover:opacity-50"
            sizes="(max-width: 640px) 85vw, 400px"
            priority
          />
        </motion.div>

        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

        {/* Glossy overlay reflection */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
          style={{ transform: "translateZ(1px)" }}
        />

        <div 
          className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none"
          style={{ transform: "translateZ(60px)" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-lg">{feature.title}</h3>
          <p className="text-white/90 leading-relaxed font-medium drop-shadow-md text-sm md:text-base">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function FeaturesBento() {
  return (
    <section className="w-full py-24 bg-transparent relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12 md:mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-indigo-950">
              Intelligence built for your wardrobe
            </h2>
            <p className="text-indigo-950/70 text-lg font-medium">
              Explore the digital tools designed to elevate your personal style, powered by cutting-edge AI.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16 pt-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
