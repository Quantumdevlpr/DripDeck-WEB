import { ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-black/5 py-12 text-sm text-foreground/70">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-foreground font-bold tracking-tight text-xl">
             <div className="text-3xl font-black text-primary drop-shadow-[2px_2px_0_var(--color-secondary)] leading-none italic pr-1">
               D
             </div>
            DripDeck
          </div>
          
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors font-medium">Download App</Link>
            <Link href="#" className="hover:text-primary transition-colors font-medium">Features</Link>
            <Link href="#" className="hover:text-primary transition-colors font-medium">Support</Link>
            <Link href="#" className="hover:text-primary transition-colors font-medium">Press Kit</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-black/5 flex justify-center items-center">
          <p>© 2026 DripDeck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
