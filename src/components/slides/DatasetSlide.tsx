import { PresentationSlide } from "../PresentationSlide";
import CountUp from "react-countup";

export const DatasetSlide = () => {
  const pillars = [
    { num: 1, title: "Core Cognitive Skills", desc: "Problem-Solving, Analytical Reasoning, Foundational Numeracy & Verbal", color: "#3b82f6" },
    { num: 2, title: "Social & Emotional", desc: "Communication, Collaboration, Emotional Intelligence", color: "#22c55e" },
    { num: 3, title: "Adaptive & Innovative", desc: "Learning Agility, Growth Mindset, Creativity & Innovation", color: "#f59e0b" },
    { num: 4, title: "Practical & Functional", desc: "Decision-Making, Digital Literacy, Productivity", color: "#8b5cf6" },
  ];

  return (
    <PresentationSlide title="About the Dataset & PLAT">
      <div className="grid grid-cols-2 gap-6 w-full h-full max-w-7xl relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500 rounded-full blur-[120px]" />
        </div>

        {/* Left Panel - Dataset Info */}
        <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-6 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-left-6 duration-700">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          
          <h3 className="text-2xl font-black mb-5 relative z-10">
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              The Dataset Behind These Insights
            </span>
          </h3>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
            <div className="group relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 rounded-2xl p-5 text-center hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-4xl font-black text-primary relative z-10 mb-2">
                <CountUp end={50000} duration={2} separator="," />
              </p>
              <p className="text-xs text-muted-foreground font-semibold tracking-wider uppercase relative z-10">Students Assessed</p>
            </div>
            <div className="group relative overflow-hidden bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/40 rounded-2xl p-5 text-center hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-4xl font-black text-green-500 relative z-10 mb-2">
                <CountUp end={22} duration={1.5} />
              </p>
              <p className="text-xs text-muted-foreground font-semibold tracking-wider uppercase relative z-10">Cities Covered</p>
            </div>
          </div>

          <div className="space-y-3 mb-6 relative z-10">
            <div className="group flex items-center gap-3 bg-primary/5 hover:bg-primary/10 rounded-xl p-3 transition-all duration-300 border border-primary/20 hover:border-primary/40">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-500 animate-pulse" />
              <span className="text-sm font-medium">Mix of metros and <strong className="text-primary">Tier-2/Tier-3</strong> cities</span>
            </div>
            <div className="group flex items-center gap-3 bg-green-500/5 hover:bg-green-500/10 rounded-xl p-3 transition-all duration-300 border border-green-500/20 hover:border-green-500/40">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Multiple universities and colleges</span>
            </div>
            <div className="group flex items-center gap-3 bg-amber-500/5 hover:bg-amber-500/10 rounded-xl p-3 transition-all duration-300 border border-amber-500/20 hover:border-amber-500/40">
              <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-medium">Programs: BMS, B.Com, B.Sc IT/CS, BBA, Engineering, MCA, MBA</span>
            </div>
          </div>

          <div className="space-y-3 bg-gradient-to-br from-muted/40 to-muted/20 rounded-2xl p-5 border border-primary/20 relative z-10">
            <p className="font-black text-primary text-base mb-3">PLAT run at 3 levels:</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="group relative bg-gradient-to-br from-primary/30 to-primary/10 hover:from-primary/40 hover:to-primary/20 rounded-xl p-4 text-center border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <p className="font-bold text-sm relative z-10">Level 1</p>
                <p className="text-xs text-muted-foreground relative z-10 mt-1">Foundation</p>
              </div>
              <div className="group relative bg-gradient-to-br from-primary/40 to-primary/20 hover:from-primary/50 hover:to-primary/30 rounded-xl p-4 text-center border-2 border-primary/40 hover:border-primary/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <p className="font-bold text-sm relative z-10">Level 2</p>
                <p className="text-xs text-muted-foreground relative z-10 mt-1">Intermediate</p>
              </div>
              <div className="group relative bg-gradient-to-br from-primary/50 to-primary/30 hover:from-primary/60 hover:to-primary/40 rounded-xl p-4 text-center border-2 border-primary/50 hover:border-primary/70 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <p className="font-bold text-sm relative z-10">Level 3</p>
                <p className="text-xs text-muted-foreground relative z-10 mt-1">Career Ready</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - PLAT Measures */}
        <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-6 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-6 duration-700">
          <div className="absolute top-0 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
          
          <h3 className="text-2xl font-black mb-2 relative z-10">
            <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
              What PLAT Measures
            </span>
          </h3>
          <p className="text-sm text-muted-foreground mb-5 font-medium relative z-10">
            <span className="text-primary font-bold">13+</span> 21st-century skills across <span className="text-primary font-bold">4 pillars</span>:
          </p>
          
          <div className="space-y-3 mb-5 relative z-10">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.num}
                className="group rounded-2xl p-4 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-right-4 border-2"
                style={{
                  background: `linear-gradient(135deg, ${pillar.color}20 0%, ${pillar.color}05 100%)`,
                  borderColor: `${pillar.color}40`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center text-base font-black text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: pillar.color,
                      boxShadow: `0 4px 20px ${pillar.color}40`
                    }}
                  >
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur"
                      style={{backgroundColor: pillar.color}}
                    />
                    <span className="relative z-10">{pillar.num}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base mb-1" style={{color: pillar.color}}>
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-foreground/80 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-4 border-2 border-primary/30 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 z-10">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <p className="text-sm leading-relaxed relative z-10">
              <span className="text-muted-foreground italic">Each student receives a </span>
              <strong className="text-primary font-black text-base">PLAT Skill Scorecard</strong>
              <span className="text-muted-foreground italic">: overall score (0–100) + pillar-wise scores.</span>
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
