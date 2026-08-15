import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CuratedBrands } from "@/components/home/CuratedBrands";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { TailoringTeaser } from "@/components/home/TailoringTeaser";
import { BranchesTeaser } from "@/components/home/BranchesTeaser";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhyChooseUs />
      <CuratedBrands />
      <FeaturedCollections />
      <TailoringTeaser />
      <BranchesTeaser />
      <TestimonialsSection />
      <ClosingCta />
    </div>
  );
}
