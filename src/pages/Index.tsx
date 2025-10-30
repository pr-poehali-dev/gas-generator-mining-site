import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import BenefitsSection from "@/components/BenefitsSection";
import EquipmentSection from "@/components/EquipmentSection";
import ROICalculator from "@/components/ROICalculator";
import CasesSection from "@/components/CasesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <TechnologySection />
      <BenefitsSection />
      <EquipmentSection scrollToSection={scrollToSection} />
      <ROICalculator scrollToSection={scrollToSection} />
      <CasesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
