import { PresentationSlide } from "../PresentationSlide";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { platJourneys } from "@/data/collegeData";

export const ConsistentGrowth = () => {
  return (
    <PresentationSlide title="Insight #5: The Power of Consistent Growth">
      <div className="w-full max-w-6xl space-y-8">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 zoom-in">
          <h3 className="text-3xl font-bold text-primary mb-6">Consistent PLAT Growth → 2–3x Better Placements</h3>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="col-span-2 space-y-3">
              <p className="text-lg text-foreground/90 mb-4">
                A student's <strong className="text-primary">trajectory over time</strong> is a better signal than one-off high test scores.
              </p>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground/90">
                  We tracked students over <strong className="text-primary">4+ PLAT cycles</strong> in select institutes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-1 mt-2" />
                <p className="text-foreground/90">
                  Students with <strong className="text-chart-1">stable or improving PLAT scores</strong> across semesters achieved <strong>2–3x higher placement conversion rates</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                <p className="text-foreground/90">
                  Readiness is about <strong className="text-primary">habit and growth</strong>, not a single exam day
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-chart-1/10 border border-chart-1/30 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2" style={{ color: "hsl(var(--chart-1))" }}>Consistent Improvers</p>
                <p className="text-3xl font-bold text-foreground">2-3x</p>
                <p className="text-xs text-muted-foreground">Higher placement rate</p>
              </div>
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                <p className="text-sm font-semibold text-destructive mb-2">Spiky Performers</p>
                <p className="text-3xl font-bold text-foreground">1x</p>
                <p className="text-xs text-muted-foreground">Baseline placement rate</p>
              </div>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={platJourneys}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="cycle" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  label={{ value: 'PLAT Overall Score', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
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
                <Line 
                  type="monotone" 
                  dataKey="consistent" 
                  name="Consistent Improver" 
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--chart-1))', r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="spiky" 
                  name="Spiky Performer" 
                  stroke="hsl(var(--destructive))" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ fill: 'hsl(var(--destructive))', r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="flat" 
                  name="Flat/Stagnant" 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--muted-foreground))', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 bg-chart-1/5 border border-chart-1/20 rounded-lg p-4">
            <p className="text-sm text-foreground/80">
              <strong style={{ color: "hsl(var(--chart-1))" }}>PLAT is not just a test;</strong> it becomes a progress graph for each student and campus. Consistent improvement predicts real-world success better than single high scores.
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
