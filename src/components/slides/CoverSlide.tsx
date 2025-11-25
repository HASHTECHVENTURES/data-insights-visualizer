import { PresentationSlide } from "../PresentationSlide";
import CountUp from "react-countup";

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
        <div className="text-center space-y-10 z-10 relative animate-in fade-in zoom-in duration-1000">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-sm font-semibold text-primary mb-6 inline-block animate-in slide-in-from-top-4 duration-700 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                🚀 National Insight Report 2025
              </span>
            </div>
            <h1 className="text-7xl font-black leading-tight tracking-tight drop-shadow-2xl">
              <span className="text-foreground">Offee PLAT</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-lg">Insight Note</span>
            </h1>
            <h2 className="text-2xl font-medium text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              What <span className="text-foreground font-bold border-b-2 border-primary"><CountUp end={50000} duration={2.5} separator="," />+</span> Assessments Tell Us About <br/>India's Graduate Talent Landscape
            </h2>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <div className="group relative bg-card/30 backdrop-blur-md border border-primary/20 rounded-2xl px-8 py-6 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 min-w-[200px] shadow-lg hover:shadow-primary/20">
              <p className="text-5xl font-black text-white drop-shadow-md mb-1"><CountUp end={50000} duration={2} separator="," />+</p>
              <p className="text-sm font-bold text-gray-200 drop-shadow-sm tracking-wider uppercase">Students</p>
            </div>
            
            <div className="group relative bg-card/30 backdrop-blur-md border border-cyan-500/20 rounded-2xl px-8 py-6 hover:border-cyan-500/50 hover:bg-card/50 transition-all duration-300 min-w-[200px] shadow-lg hover:shadow-cyan-500/20">
              <p className="text-5xl font-black text-white drop-shadow-md mb-1"><CountUp end={10} duration={1.5} /></p>
              <p className="text-sm font-bold text-gray-200 drop-shadow-sm tracking-wider uppercase">Cities</p>
            </div>

            <div className="group relative bg-card/30 backdrop-blur-md border border-amber-500/20 rounded-2xl px-8 py-6 hover:border-amber-500/50 hover:bg-card/50 transition-all duration-300 min-w-[200px] shadow-lg hover:shadow-amber-500/20">
              <p className="text-5xl font-black text-white drop-shadow-md mb-1"><CountUp end={18} duration={1.5} />+</p>
              <p className="text-sm font-bold text-gray-200 drop-shadow-sm tracking-wider uppercase">Universities</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="inline-flex items-center gap-3 bg-background/30 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse box-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            <p className="text-sm font-semibold text-foreground">Building India's Talent Grid</p>
            <span className="text-muted-foreground">|</span>
            <p className="text-xs text-muted-foreground">
              Data from 50,000+ students • 10 cities • Multiple universities
            </p>
          </div>
        </div>

        {/* Logo placeholder - Top Left */}
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-lg">O</div>
            <div className="text-xl font-black tracking-tight text-foreground drop-shadow-md">Offee</div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

