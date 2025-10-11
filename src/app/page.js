'use client';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PremiumTechMarquee from "@/components/TechStackMarquee";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Hero />
      <Services />
      <PremiumTechMarquee />
    </div>
  );
}
