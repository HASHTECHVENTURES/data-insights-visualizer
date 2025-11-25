import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ExecutiveSnapshot } from "@/components/slides/ExecutiveSnapshot";
import { DatasetSlide } from "@/components/slides/DatasetSlide";
import { ReadinessDistribution } from "@/components/slides/ReadinessDistribution";
import { CityWiseReadiness } from "@/components/slides/CityWiseReadiness";
import { TierComparison } from "@/components/slides/TierComparison";
import { CommunicationGap } from "@/components/slides/CommunicationGap";
import { ConsistentGrowth } from "@/components/slides/ConsistentGrowth";
import { GenderAnalysis } from "@/components/slides/GenderAnalysis";
import { TalentGrid } from "@/components/slides/TalentGrid";
import { ProgramWiseProfiles } from "@/components/slides/ProgramWiseProfiles";

const slides = [
  ExecutiveSnapshot,
  DatasetSlide,
  ReadinessDistribution,
  CityWiseReadiness,
  TierComparison,
  CommunicationGap,
  ConsistentGrowth,
  GenderAnalysis,
  TalentGrid,
  ProgramWiseProfiles,
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-background"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <CurrentSlideComponent />

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-card/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <span className="text-sm font-medium text-foreground px-4">
          {currentSlide + 1} / {slides.length}
        </span>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute top-8 right-8 text-xs text-muted-foreground bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
        Use arrow keys or click to navigate
      </div>
    </div>
  );
};

export default Presentation;
