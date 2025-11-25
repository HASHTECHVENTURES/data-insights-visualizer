import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
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
const slides = [ExecutiveSnapshot, DatasetSlide, ReadinessDistribution, CityWiseReadiness, TierComparison, CommunicationGap, ConsistentGrowth, GenderAnalysis, TalentGrid, ProgramWiseProfiles];
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

      {/* Presenter Notes */}
      <PresenterNotes currentSlide={currentSlide} />

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-card/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg z-30">
        <Button variant="ghost" size="icon" onClick={prevSlide} disabled={currentSlide === 0 || isTransitioning} className="rounded-full">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <span className="text-sm font-medium text-foreground px-4">
          {currentSlide + 1} / {slides.length}
        </span>
        
        <Button variant="ghost" size="icon" onClick={nextSlide} disabled={currentSlide === slides.length - 1 || isTransitioning} className="rounded-full">
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div className="w-px h-6 bg-border mx-2" />

        <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="rounded-full" title="Toggle Fullscreen (F)">
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} disabled={isTransitioning} className={cn("rounded-full transition-all hover-scale", index === currentSlide ? "bg-primary w-8 h-2" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2 h-2")} title={`Go to slide ${index + 1}`} />)}
      </div>

      {/* Instructions */}
      <div className="absolute top-8 right-8 text-xs text-muted-foreground bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border z-30">
        
      </div>
    </div>;
};
export default Presentation;