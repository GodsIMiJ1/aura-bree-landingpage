import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FounderVisionSection } from "@/components/FounderVisionSection";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { TechnologyDemoSection } from "@/components/TechnologyDemoSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { DevelopmentStatusSection } from "@/components/DevelopmentStatusSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TrainingImplementationSection } from "@/components/TrainingImplementationSection";
import { ContactSection } from "@/components/ContactSection";
import AIHost from "@/components/AIHost";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FounderVisionSection />
      <TechnicalSpecsSection />
      <TechnologyDemoSection />
      <UseCasesSection />
      <DevelopmentStatusSection />
      <RoadmapSection />
      <TrainingImplementationSection />
      <ContactSection />
      <AIHost />
    </div>
  );
};

export default Index;
