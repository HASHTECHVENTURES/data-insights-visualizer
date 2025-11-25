import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { CoverSlide } from "@/components/slides/CoverSlide";
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
import { PresenterNotes } from "@/components/PresenterNotes";
import { cn } from "@/lib/utils";
const slides = [CoverSlide, ExecutiveSnapshot, DatasetSlide, ReadinessDistribution, CityWiseReadiness, TierComparison, CommunicationGap, ConsistentGrowth, GenderAnalysis, TalentGrid, ProgramWiseProfiles];
const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setDirection("forward");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };
  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setDirection("backward");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };
  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setDirection(index > currentSlide ? "forward" : "backward");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  };
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      nextSlide();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    }
    if (e.key === "f" || e.key === "F") {
      toggleFullscreen();
    }
    if (e.key === "Home") {
      goToSlide(0);
    }
    if (e.key === "End") {
      goToSlide(slides.length - 1);
    }
  };
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);
  const CurrentSlideComponent = slides[currentSlide];
  return <div className="relative w-full h-screen overflow-hidden bg-background" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Slide Container with Transitions */}
      <div className={cn("w-full h-full transition-all duration-300 ease-in-out", isTransitioning && direction === "forward" && "opacity-0 scale-95 translate-x-8", isTransitioning && direction === "backward" && "opacity-0 scale-95 -translate-x-8")}>
        <CurrentSlideComponent />
      </div>

      {/* Left Navigation Arrow */}
      <Button 
        variant="ghost" 
        size="icon"
        onClick={prevSlide}
        disabled={currentSlide === 0 || isTransitioning}
        className={cn(
          "absolute left-8 top-1/2 -translate-y-1/2 z-30 rounded-full h-14 w-14 bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card/60 hover:scale-110 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.2)]",
          (currentSlide === 0 || isTransitioning) && "opacity-30 cursor-not-allowed"
        )}
      >
        <ChevronLeft className="h-8 w-8 text-primary" />
      </Button>

      {/* Right Navigation Arrow */}
      <Button 
        variant="ghost" 
        size="icon"
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1 || isTransitioning}
        className={cn(
          "absolute right-8 top-1/2 -translate-y-1/2 z-30 rounded-full h-14 w-14 bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card/60 hover:scale-110 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.2)]",
          (currentSlide === slides.length - 1 || isTransitioning) && "opacity-30 cursor-not-allowed"
        )}
      >
        <ChevronRight className="h-8 w-8 text-primary" />
      </Button>

      {/* Minimal Slide Indicator - Only dots, hidden by default, show on hover */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} disabled={isTransitioning} className={cn("rounded-full transition-all", index === currentSlide ? "bg-primary w-8 h-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2 h-2")} title={`Go to slide ${index + 1}`} />)}
      </div>
    </div>;
};
export default Presentation;