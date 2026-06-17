"use client";

import { motion } from "framer-motion";
import { Download, LayoutGrid } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--color-card)_0%,_transparent_70%)] opacity-70 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-generous text-foreground leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
          >
            {"DripDeck".split("").map((char, index) => (
              <motion.span key={`line1-${index}`} variants={{ hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline" } }}>
                {char}
              </motion.span>
            ))}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-950 to-purple-800">
              {"Add, Style and Visualise the best".split("").map((char, index) => (
                <motion.span key={`line2-${index}`} variants={{ hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline" } }}>
                  {char}
                </motion.span>
              ))}
            </span>
            <motion.span 
              className="inline-block w-[0.4em] h-[1em] bg-secondary ml-2 align-middle -mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            />
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-yellow-950/80 max-w-2xl leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            DripDeck maps your real-world wardrobe into a sleek interface. Analyze your style DNA and visualize outfits before putting them on.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <button className="flex items-center justify-center gap-2 bg-foreground hover:bg-foreground/90 text-background font-medium px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl">
              <Download size={20} />
              Download for iOS
            </button>
            <button className="flex items-center justify-center gap-2 bg-card border border-muted/20 hover:border-muted/50 text-foreground font-medium px-8 py-4 rounded-full transition-all hover:bg-card/80 hover:scale-105 active:scale-95">
              <LayoutGrid size={20} />
              Meet the Team
            </button>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
