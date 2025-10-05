import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSection from "@/components/ProblemSection";
import ValueSection from "@/components/ValueSection";
import MarketplacePreview from "@/components/MarketplacePreview";
import AgriStorePreview from "@/components/AgriStorePreview";
import NutritionPlanPreview from "@/components/NutritionPlanPreview";
import HowItWorks from "@/components/HowItWorks";
import VideoTestimonials from "@/components/VideoTestimonials";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <div id="hero"><Hero /></div>
      <SocialProof />
      <ProblemSection />
      <ValueSection />
      <div id="marketplace"><MarketplacePreview /></div>
      <div id="agristore"><AgriStorePreview /></div>
      <div id="nutrition"><NutritionPlanPreview /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <VideoTestimonials />
      <Testimonial />
      <FAQ />
      <div id="pricing"><Pricing /></div>
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
