import { PresentationSlide } from "../PresentationSlide";
import CountUp from "react-countup";

export const TalentGrid = () => {
  return (
    <PresentationSlide title="From PLAT Data to a National Talent Grid">
      <div className="w-full h-full max-w-7xl overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-6 h-full overflow-hidden flex flex-col gap-5 shadow-2xl">
          <p className="text-base text-foreground font-medium flex-shrink-0 bg-gradient-to-r from-primary/10 via-cyan-500/10 to-green-500/10 rounded-2xl p-4 border-2 border-primary/30 animate-in fade-in slide-in-from-top-4 duration-700">
            This <span className="text-primary font-bold">50,000-student</span> dataset is a preview of what <span className="text-cyan-500 font-bold">India's skill landscape</span> could look like when mapped properly.
          </p>

          <div className="grid grid-cols-3 gap-4 flex-shrink-0">
            <div className="group relative bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 rounded-2xl p-5 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <h4 className="text-xl font-black text-primary mb-4 relative z-10">Today's Snapshot</h4>
              <div className="space-y-3 text-sm relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-500 animate-pulse" />
                  <span className="text-foreground font-medium"><strong className="text-primary"><CountUp end={50000} duration={2} separator="," />+</strong> Scorecards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-500 animate-pulse" />
                  <span className="text-foreground font-medium"><strong className="text-primary"><CountUp end={10} duration={1.5} /> cities</strong>, multiple programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-500 animate-pulse" />
                  <span className="text-foreground font-medium">Multiple institution types</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-2 border-cyan-500/40 rounded-2xl p-5 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 animate-in fade-in zoom-in duration-700 delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <h4 className="text-xl font-black text-cyan-500 mb-4 relative z-10">Next 24 Months</h4>
              <div className="space-y-3 text-sm relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-foreground font-medium">Scale to <strong className="text-cyan-500">1,000 colleges</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-foreground font-medium"><strong className="text-cyan-500">1 crore+</strong> students assessed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-foreground font-medium">State-level <strong className="text-cyan-500">Skill Census</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-foreground font-medium">Launch <strong className="text-cyan-500">Talent Grid</strong></span>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/40 rounded-2xl p-5 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <h4 className="text-xl font-black text-green-500 mb-4 relative z-10">Long-term Vision</h4>
              <div className="space-y-3 text-sm relative z-10">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full mt-1 bg-green-500 animate-pulse" />
                  <span className="text-foreground font-medium">
                    Offee becomes the <strong className="text-green-500">default infra layer</strong> connecting education → skills → employment
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-shrink-0">
            <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              <h5 className="font-black text-primary mb-3 text-base relative z-10">🎯 Talent Grid Features</h5>
              <ul className="space-y-2 text-xs text-foreground relative z-10">
                <li className="flex items-center gap-2 font-medium"><span className="text-primary font-bold">→</span> Search by skill pillar, city, gender, and institute</li>
                <li className="flex items-center gap-2 font-medium"><span className="text-primary font-bold">→</span> Live skill dashboards replacing static reports</li>
                <li className="flex items-center gap-2 font-medium"><span className="text-primary font-bold">→</span> Real-time talent matching for recruiters</li>
                <li className="flex items-center gap-2 font-medium"><span className="text-primary font-bold">→</span> Geographic skill heat maps</li>
              </ul>
            </div>
            <div className="group relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-2 border-cyan-500/30 rounded-2xl p-5 hover:border-cyan-500/50 transition-all duration-300 animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl" />
              <h5 className="font-black text-cyan-500 mb-3 text-base relative z-10">🚀 Impact</h5>
              <ul className="space-y-2 text-xs text-foreground relative z-10">
                <li className="flex items-center gap-2 font-medium"><span className="text-cyan-500 font-bold">→</span> Data-backed diversity programs, not tokenism</li>
                <li className="flex items-center gap-2 font-medium"><span className="text-cyan-500 font-bold">→</span> Discover hidden talent in Tier-2/3 cities</li>
                <li className="flex items-center gap-2 font-medium"><span className="text-cyan-500 font-bold">→</span> Evidence-based hiring decisions</li>
                <li className="flex items-center gap-2 font-medium"><span className="text-cyan-500 font-bold">→</span> Skill-first employment ecosystem</li>
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden group flex-shrink-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500 to-green-500 opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
            <div className="relative bg-gradient-to-r from-primary/15 via-cyan-500/15 to-green-500/15 border-2 border-primary/40 rounded-2xl p-5 text-center backdrop-blur-sm">
              <p className="text-base font-medium leading-relaxed">
                <strong className="bg-gradient-to-r from-primary via-cyan-500 to-green-500 bg-clip-text text-transparent font-black text-lg">We see PLAT as the data engine behind India's Talent Grid</strong> – and this <span className="text-primary font-bold">50,000-student</span> insight note is just the first slice of the system we want to build at <span className="text-green-500 font-bold">national scale</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
