import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicySection() {
  return (
    <section className="w-full bg-background py-16 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl flex justify-center">
        <div className="flex items-start md:items-center gap-4 max-w-4xl text-sm md:text-base bg-card px-8 py-6 rounded-2xl border border-black/5 shadow-sm">
          <ShieldCheck size={28} className="text-primary flex-shrink-0 mt-0.5 md:mt-0" />
          <p className="leading-relaxed text-foreground/80">
            <Link href="/privacy" className="text-foreground hover:text-primary transition-colors font-bold underline underline-offset-4 decoration-black/20 hover:decoration-primary mr-1.5">
              Privacy Policy
            </Link>
            DripDeck safely processes all your data purely client-side to render your style boards and never retains or sells your private user data.
          </p>
        </div>
      </div>
    </section>
  );
}
