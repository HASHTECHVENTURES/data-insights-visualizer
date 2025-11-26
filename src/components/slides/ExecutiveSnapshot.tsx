import { PresentationSlide } from "../PresentationSlide";

export const ExecutiveSnapshot = () => {
  return (
    <PresentationSlide title="Executive Snapshot">
      <div className="w-full h-full max-w-7xl flex flex-col justify-between gap-6 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[100px]" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-8 relative z-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight">
              <span className="text-muted-foreground/70">Degrees</span>
              <span className="text-destructive mx-3 text-5xl">≠</span>
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Readiness
              </span>
            </h2>
            <p className="text-sm text-muted-foreground font-medium tracking-wide">
              Key findings from <span className="text-primary font-bold">50,000</span> PLAT assessments
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-background/95 backdrop-blur-sm border-2 border-primary/50 rounded-xl px-6 py-3 shadow-2xl">
              <p className="text-3xl font-black bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                50K+
              </p>
              <p className="text-xs text-muted-foreground font-semibold tracking-wider">STUDENTS</p>
            </div>
          </div>
        </div>

        {/* Main Content - 2 columns */}
        <div className="grid grid-cols-2 gap-4 relative z-10">
          {/* Left Column */}
          <div className="space-y-3">
            <div className="group relative flex gap-4 bg-gradient-to-br from-destructive/15 to-destructive/5 border-2 border-destructive/40 rounded-2xl p-5 hover:border-destructive/60 hover:shadow-lg hover:shadow-destructive/20 transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="flex items-center justify-center min-w-[80px] h-20 rounded-xl bg-destructive/20 border border-destructive/30 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-black text-destructive">20%</div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-bold text-foreground text-lg mb-1">Industry Ready</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Only ~20% of final-year students meet industry-ready benchmarks
                </p>
              </div>
            </div>

            <div className="group relative flex gap-4 bg-gradient-to-br from-green-500/15 to-green-500/5 border-2 border-green-500/40 rounded-2xl p-5 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
              <div className="flex items-center justify-center min-w-[80px] h-20 rounded-xl bg-green-500/20 border border-green-500/30 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-black text-green-500">T2</div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-bold text-foreground text-lg mb-1">Hidden Talent</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tier-2/3 colleges often outperform Tier-1 in problem-solving
                </p>
              </div>
            </div>

            <div className="group relative flex gap-4 bg-gradient-to-br from-amber-500/15 to-amber-500/5 border-2 border-amber-500/40 rounded-2xl p-5 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
              <div className="flex items-center justify-center min-w-[80px] h-20 rounded-xl bg-amber-500/20 border border-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-black text-amber-500">#1</div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-bold text-foreground text-lg mb-1">Communication Gap</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Communication is the biggest failure point, not IQ
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <div className="group relative flex gap-4 bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 border-2 border-cyan-500/40 rounded-2xl p-5 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="flex items-center justify-center min-w-[80px] h-20 rounded-xl bg-cyan-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-black text-cyan-500">3×</div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-bold text-foreground text-lg mb-1">Consistency Wins</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Steady improvers have 2–3× higher placement conversions
                </p>
              </div>
            </div>

            <div className="group relative flex gap-4 bg-gradient-to-br from-pink-500/15 to-pink-500/5 border-2 border-pink-500/40 rounded-2xl p-5 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
              <div className="flex items-center justify-center min-w-[80px] h-20 rounded-xl bg-pink-500/20 border border-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-black text-pink-500">♀=♂</div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-bold text-foreground text-lg mb-1">Gender Parity</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Women score equal or higher, but less visible in hiring
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              <p className="text-sm leading-relaxed relative z-10">
                <span className="text-primary font-black text-base">Key Insight:</span>
                <span className="text-foreground font-medium block mt-2">
                  Massive gap between academic credentials and workplace readiness.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="relative overflow-hidden group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500 to-primary opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
          <div className="relative bg-gradient-to-r from-primary/15 via-cyan-500/15 to-primary/15 border-2 border-primary/40 rounded-2xl p-4 text-center backdrop-blur-sm">
            <p className="text-sm font-medium">
              <span className="text-primary font-black text-base">Bottom Line:</span>{" "}
              <span className="text-foreground">
                This is an early view of the skill heatmap India needs – the foundation of{" "}
                <span className="font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Offee's Talent Grid
                </span>
                .
              </span>
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
