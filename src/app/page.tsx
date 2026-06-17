import HeroSection from "@/components/HeroSection";
import FeaturesBento from "@/components/FeaturesBento";
import TeamSection from "@/components/TeamSection";
import PrivacyPolicySection from "@/components/PrivacyPolicySection";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-transparent selection:bg-primary/30">
      <ThreeBackground />
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        <FeaturesBento />
        <TeamSection />
        <PrivacyPolicySection />
        <Footer />
      </div>
    </main>
  );
}
