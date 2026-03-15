import HeroSection from "@/components/sections/HeroSection";
import MarketPulseSection from "@/components/sections/MarketPulseSection";
import IntelligenceGridSection from "@/components/sections/IntelligenceGridSection";
import DashboardSection from "@/components/sections/DashboardSection";
import CategoryMatrixSection from "@/components/sections/CategoryMatrixSection";
import VaultSection from "@/components/sections/VaultSection";
import EtsySyncSection from "@/components/sections/EtsySyncSection";
import TechSpecsSection from "@/components/sections/TechSpecsSection";
import CreatorAnalyticsSection from "@/components/sections/CreatorAnalyticsSection";
import BundleArchitectSection from "@/components/sections/BundleArchitectSection";
import FAQSection from "@/components/sections/FAQSection";
import EmailCaptureSection from "@/components/sections/EmailCaptureSection";
import FooterSection from "@/components/sections/FooterSection";
import NavigationBar from "@/components/sections/NavigationBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <HeroSection />
      <MarketPulseSection />
      <IntelligenceGridSection />
      <DashboardSection />
      <CategoryMatrixSection />
      <VaultSection />
      <EtsySyncSection />
      <TechSpecsSection />
      <CreatorAnalyticsSection />
      <BundleArchitectSection />
      <FAQSection />
      <EmailCaptureSection />
      <FooterSection />
    </div>
  );
};

export default Index;
