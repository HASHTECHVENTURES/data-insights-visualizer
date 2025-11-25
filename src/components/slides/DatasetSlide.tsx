import { PresentationSlide } from "../PresentationSlide";

export const DatasetSlide = () => {
  return (
    <PresentationSlide title="About the Dataset & PLAT">
      <div className="grid grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-4">
          <h3 className="text-2xl font-bold text-primary mb-4">The Dataset Behind These Insights</h3>
          
          <div className="space-y-3 text-foreground/90">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span><strong>50,000 students</strong> assessed through PLAT</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span><strong>10 cities</strong> – mix of metros and Tier-2/Tier-3</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Multiple universities and colleges</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Programs: BMS, B.Com, B.Sc IT/CS, BBA, Engineering, MCA, MBA</span>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <p className="font-semibold text-primary">PLAT run at 3 levels:</p>
            <div className="pl-4 space-y-1 text-sm">
              <p>• Level 1 – Foundation (Year 1)</p>
              <p>• Level 2 – Intermediate (Year 2)</p>
              <p>• Level 3 – Career Readiness (Year 3)</p>
            </div>
          </div>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-4">
          <h3 className="text-2xl font-bold text-primary mb-4">What PLAT Measures</h3>
          <p className="text-sm text-muted-foreground mb-4">13+ 21st-century skills across 4 pillars:</p>
          
          <div className="space-y-4">
            <div className="bg-primary/10 rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2">1. Core Cognitive Skills</h4>
              <p className="text-sm text-foreground/80">Problem-Solving, Analytical Reasoning, Foundational Numeracy & Verbal</p>
            </div>

            <div className="bg-primary/10 rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2">2. Social & Emotional</h4>
              <p className="text-sm text-foreground/80">Communication, Collaboration, Emotional Intelligence</p>
            </div>

            <div className="bg-primary/10 rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2">3. Adaptive & Innovative</h4>
              <p className="text-sm text-foreground/80">Learning Agility, Growth Mindset, Creativity & Innovation</p>
            </div>

            <div className="bg-primary/10 rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2">4. Practical & Functional</h4>
              <p className="text-sm text-foreground/80">Decision-Making, Digital Literacy, Productivity</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground italic mt-4">
            Each student receives a PLAT Skill Scorecard: overall score (0–100) + pillar-wise scores.
          </p>
        </div>
      </div>
    </PresentationSlide>
  );
};
