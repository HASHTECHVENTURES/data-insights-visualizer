import { PresentationSlide } from "../PresentationSlide";

export const ExecutiveSnapshot = () => {
  return (
    <PresentationSlide>
      <div className="max-w-5xl space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Offee PLAT Insight Note
          </h1>
          <h2 className="text-4xl font-semibold text-foreground">
            What 50,000 Assessments Tell Us About India's Graduate Talent
          </h2>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-10 space-y-6">
          <h3 className="text-3xl font-bold text-primary mb-6">Executive Snapshot</h3>
          <p className="text-2xl font-semibold text-foreground italic">In One Line: Degrees ≠ Readiness</p>
          
          <div className="space-y-4 text-lg">
            <div className="flex items-start gap-4 hover-scale">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/90">
                From 50,000 PLAT assessments, only <span className="font-bold text-primary">~28–35%</span> final-year students fall in the "industry-ready" skill band.
              </p>
            </div>
            
            <div className="flex items-start gap-4 hover-scale">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/90">
                In multiple cities, <span className="font-bold text-primary">Tier-2/Tier-3 colleges</span> show stronger problem-solving than Tier-1 brands.
              </p>
            </div>
            
            <div className="flex items-start gap-4 hover-scale">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/90">
                <span className="font-bold text-primary">Communication</span> (written + spoken) is the biggest failure point, not IQ or domain knowledge.
              </p>
            </div>
            
            <div className="flex items-start gap-4 hover-scale">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/90">
                Students with steady or improving PLAT scores have <span className="font-bold text-primary">2–3x higher</span> placement conversions.
              </p>
            </div>
            
            <div className="flex items-start gap-4 hover-scale">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/90">
                Women often score <span className="font-bold text-primary">equal or higher</span> than men on PLAT, especially in collaboration and communication.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-muted-foreground text-lg">
          <p className="font-semibold">Offee – Building India's Talent Grid</p>
          <p>Data from 50,000+ students | 10 cities | Multiple universities</p>
        </div>
      </div>
    </PresentationSlide>
  );
};
