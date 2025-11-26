import { PresentationSlide } from "../PresentationSlide";
import CountUp from "react-countup";
import offeeLogoImage from "@/assets/offee-logo.png";

export const CoverSlide = () => {
  return (
    <PresentationSlide>
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
        {/* Live Color Changing Gradient Background */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#0f172a,#1e293b,#0f172a,#334155)] bg-[length:400%_400%] animate-gradient-xy opacity-90 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse-slow" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-float-delayed" />
        </div>

        {/* Main Content - Centered & Clean */}
        <div className="text-center space-y-6 sm:space-y-10 z-10 relative px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 border border-primary/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-semibold text-primary mb-4 sm:mb-6 inline-block shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                🚀 National Insight Report 2025
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-2xl">
              <span className="text-foreground">Offee PLAT</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-lg">
                Insight Note
              </span>
            </h1>
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              What{" "}
              <span className="text-foreground font-bold border-b-2 border-primary">
                <CountUp end={50000} duration={2.5} separator="," />+
              </span>{" "}
              Assessments Tell Us About <br className="hidden sm:block" />
              India's Graduate Talent Landscape
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-12">
            <div className="group relative bg-card/30 backdrop-blur-md border border-primary/20 rounded-xl sm:rounded-2xl px-4 py-4 sm:px-8 sm:py-6 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 w-[200px] sm:min-w-[200px] md:min-w-[220px] shadow-lg hover:shadow-primary/20">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-md mb-1 whitespace-nowrap">
                <CountUp end={50000} duration={2} separator="," />+
              </p>
              <p className="text-xs sm:text-sm font-bold text-gray-200 drop-shadow-sm tracking-wider uppercase">
                Students
              </p>
            </div>

            <div className="group relative bg-card/30 backdrop-blur-md border border-cyan-500/20 rounded-xl sm:rounded-2xl px-4 py-4 sm:px-8 sm:py-6 hover:border-cyan-500/50 hover:bg-card/50 transition-all duration-300 w-[200px] sm:min-w-[200px] md:min-w-[220px] shadow-lg hover:shadow-cyan-500/20">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-md mb-1 whitespace-nowrap">
                <CountUp end={22} duration={1.5} />
              </p>
              <p className="text-xs sm:text-sm font-bold text-gray-200 drop-shadow-sm tracking-wider uppercase">
                Cities
              </p>
            </div>

            <div className="group relative bg-card/30 backdrop-blur-md border border-amber-500/20 rounded-xl sm:rounded-2xl px-4 py-4 sm:px-8 sm:py-6 hover:border-amber-500/50 hover:bg-card/50 transition-all duration-300 w-[200px] sm:min-w-[200px] md:min-w-[220px] shadow-lg hover:shadow-amber-500/20">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-md mb-1 whitespace-nowrap">
                <CountUp end={100} duration={1.5} />+
              </p>
              <p className="text-xs sm:text-sm font-bold text-gray-200 drop-shadow-sm tracking-wider uppercase">
                Colleges
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center z-10 px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-background/30 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse box-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              <p className="text-xs sm:text-sm font-semibold text-foreground">Building India's Talent Grid</p>
            </div>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
              Data from 50,000+ students • 22 cities • Multiple Colleges
            </p>
          </div>
        </div>

        {/* Offee Logo - Top Left */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10">
          <img
            src={offeeLogoImage}
            alt="Offee Logo"
            className="h-8 sm:h-10 md:h-12 w-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300"
          />
        </div>
      </div>
    </PresentationSlide>
  );
};
