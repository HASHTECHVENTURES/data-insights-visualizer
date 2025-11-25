import { PresentationSlide } from "../PresentationSlide";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { genderComparison } from "@/data/collegeData";

export const GenderAnalysis = () => {
  return (
    <PresentationSlide title="Insight #6: Gender Performance Analysis">
      <div className="w-full max-w-6xl space-y-8">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 zoom-in">
          <h3 className="text-3xl font-bold text-primary mb-6">Women Often Score Higher, Still Hired Less</h3>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="col-span-2 space-y-3">
              <p className="text-lg text-foreground/90 mb-4">
                Where gender mix is balanced, female students:
              </p>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground/90">
                  <strong className="text-primary">Match or slightly exceed</strong> male students on Overall PLAT Score
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-2 mt-2" />
                <p className="text-foreground/90">
                  Score <strong style={{ color: "hsl(var(--chart-2))" }}>5–10 points higher</strong> on communication, collaboration and discipline, on average
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                <p className="text-foreground/90">
                  Despite this, their <strong className="text-destructive">share in recruiter shortlists is lower</strong> than what their PLAT performance justifies
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-chart-2/10 border border-chart-2/30 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2" style={{ color: "hsl(var(--chart-2))" }}>Female Advantage</p>
                <p className="text-3xl font-bold text-foreground">+8pts</p>
                <p className="text-xs text-muted-foreground">Communication & Collaboration</p>
              </div>
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                <p className="text-sm font-semibold text-destructive mb-2">Hiring Gap</p>
                <p className="text-sm text-foreground">Lower representation in shortlists despite higher scores</p>
              </div>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={genderComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="skill" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  label={{ value: 'Average Score', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="male" 
                  name="Male Students" 
                  fill="hsl(var(--chart-1))" 
                  radius={[8, 8, 0, 0]}
                />
                <Bar 
                  dataKey="female" 
                  name="Female Students" 
                  fill="hsl(var(--chart-2))" 
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-chart-2/5 border border-chart-2/20 rounded-lg p-4">
              <p className="text-sm text-foreground/80">
                <strong style={{ color: "hsl(var(--chart-2))" }}>Data-backed diversity:</strong> PLAT data enables universities and employers to run evidence-based diversity programs, not tokenism.
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-foreground/80">
                <strong className="text-primary">Untapped potential:</strong> Female talent shows exceptional communication and collaboration skills – key for modern workplaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
