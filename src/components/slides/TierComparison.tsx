import { PresentationSlide } from "../PresentationSlide";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { cityWiseData } from "@/data/collegeData";

export const TierComparison = () => {
  return (
    <PresentationSlide title="Insight #3: Tier-2/3 vs Tier-1 Problem-Solving">
      <div className="w-full max-w-6xl space-y-8">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-primary mb-6">Tier-2/Tier-3 Colleges Hide Serious Problem-Solving Talent</h3>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="col-span-2 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground/90">
                  In <strong className="text-primary">4 out of 10 cities</strong>, median PLAT problem-solving scores of Tier-2/Tier-3 colleges are <strong>higher than Tier-1 colleges</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground/90">
                  Tier-2/Tier-3 students often lose out due to <strong className="text-destructive">weaker communication or lesser brand</strong>, not lack of thinking ability
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground/90">
                  Campus hiring focused only on "top brands" <strong className="text-primary">leaves strong problem-solvers on the table</strong>
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-chart-1/20 border border-primary/30 rounded-lg p-6 flex flex-col items-center justify-center">
              <p className="text-5xl font-bold text-primary mb-2">40%</p>
              <p className="text-sm text-center font-semibold text-foreground">of cities show Tier-2/3 advantage</p>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cityWiseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="city" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
                  angle={-15}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  label={{ value: 'Median Problem-Solving Score', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
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
                  dataKey="tier1Ready" 
                  name="Tier-1 Colleges" 
                  fill="hsl(var(--chart-1))" 
                  radius={[8, 8, 0, 0]}
                />
                <Bar 
                  dataKey="tier2Ready" 
                  name="Tier-2/3 Colleges" 
                  fill="hsl(var(--primary))" 
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-foreground/80">
              <strong className="text-primary">Hidden Problem-Solving Advantage:</strong> Notice how Tier-2/3 colleges in cities like Pune, Bangalore, and Chhatrapati Sambhajinagar outperform Tier-1 institutions.
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
