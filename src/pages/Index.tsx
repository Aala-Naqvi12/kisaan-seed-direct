import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSection from "@/components/ProblemSection";
import ValueSection from "@/components/ValueSection";
import MarketplacePreview from "@/components/MarketplacePreview";
import AgriStorePreview from "@/components/AgriStorePreview";
import NutritionPlanPreview from "@/components/NutritionPlanPreview";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <main className="min-h-screen">
      <LanguageSelector />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <ValueSection />
      <MarketplacePreview />
      <AgriStorePreview />
      <NutritionPlanPreview />
      <HowItWorks />
      <Testimonial />
      <FAQ />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
