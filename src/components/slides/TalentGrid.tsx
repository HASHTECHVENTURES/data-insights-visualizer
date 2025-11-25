import { PresentationSlide } from "../PresentationSlide";

export const TalentGrid = () => {
  return (
    <PresentationSlide title="From PLAT Data to India's Talent Grid">
      <div className="w-full max-w-6xl space-y-8">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 zoom-in">
          <h3 className="text-3xl font-bold text-primary mb-6">
            From 50,000 Students to a National Talent Grid
          </h3>
          
          <p className="text-xl text-foreground/90 mb-8">
            This 50,000-student dataset is a preview of what India's skill landscape could look like when mapped properly.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-6">
              <h4 className="text-2xl font-bold text-primary mb-4">Today's Snapshot</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground/90"><strong>50,000+</strong> PLAT Skill Scorecards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground/90"><strong>10 cities</strong>, multiple programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground/90">Multiple institution types</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-chart-1/20 to-chart-1/5 border border-chart-1/30 rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-4" style={{ color: "hsl(var(--chart-1))" }}>Next 24 Months</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "hsl(var(--chart-1))" }} />
                  <span className="text-foreground/90">Scale to <strong>1,000 colleges</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "hsl(var(--chart-1))" }} />
                  <span className="text-foreground/90"><strong>1 crore+ students</strong> assessed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "hsl(var(--chart-1))" }} />
                  <span className="text-foreground/90">State-level <strong>Skill Census</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "hsl(var(--chart-1))" }} />
                  <span className="text-foreground/90">Launch <strong>Talent Grid</strong> for recruiters</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-chart-2/20 to-chart-2/5 border border-chart-2/30 rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-4" style={{ color: "hsl(var(--chart-2))" }}>Long-term Vision</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "hsl(var(--chart-2))" }} />
                  <span className="text-foreground/90">
                    Offee becomes the <strong>default infra layer</strong> connecting education → skills → employment in India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">Talent Grid Features</h5>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li>• Search by skill pillar, city, gender, and institute</li>
                <li>• Live skill dashboards replacing static reports</li>
                <li>• Real-time talent matching for recruiters</li>
                <li>• Geographic skill heat maps</li>
              </ul>
            </div>
            <div className="bg-chart-1/5 border border-chart-1/20 rounded-lg p-6">
              <h5 className="font-bold mb-3" style={{ color: "hsl(var(--chart-1))" }}>Impact</h5>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li>• Data-backed diversity programs, not tokenism</li>
                <li>• Discover hidden talent in Tier-2/3 cities</li>
                <li>• Evidence-based hiring decisions</li>
                <li>• Skill-first employment ecosystem</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-primary/10 via-chart-1/10 to-chart-2/10 border border-primary/30 rounded-lg p-6 text-center">
            <p className="text-lg font-semibold text-foreground">
              <strong className="text-primary">We see PLAT as the data engine behind India's Talent Grid</strong> – and this 50,000-student insight note is just the first slice of the system we want to build at national scale.
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
