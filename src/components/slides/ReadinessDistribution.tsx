import { PresentationSlide } from "../PresentationSlide";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { skillDistribution } from "@/data/collegeData";

export const ReadinessDistribution = () => {
  const colors = ["hsl(var(--destructive))", "hsl(var(--primary))", "hsl(var(--chart-2))"];

  return (
    <PresentationSlide title="Insight #1: Industry Readiness Distribution">
      <div className="w-full max-w-6xl space-y-8">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-primary mb-6">Only Around 1 in 3 Students Is Industry-Ready</h3>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Score &lt; 50%</p>
              <p className="text-4xl font-bold text-destructive mb-2">65%</p>
              <p className="text-sm font-semibold">Below Industry Level</p>
            </div>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Score 50-90%</p>
              <p className="text-4xl font-bold text-primary mb-2">30%</p>
              <p className="text-sm font-semibold">Industry Ready</p>
            </div>
            <div className="bg-chart-2/10 border border-chart-2/30 rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Score &gt; 90%</p>
              <p className="text-4xl font-bold" style={{ color: "hsl(var(--chart-2))" }}>5%</p>
              <p className="text-sm font-semibold">High Potential</p>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="band" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  label={{ value: '% of Students', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="percentage" name="Percentage of Students" radius={[8, 8, 0, 0]}>
                  {skillDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-foreground/80">
              <strong className="text-primary">Key Finding:</strong> This pattern holds even in many reputed institutions. 
              Only ~1 in 3 students meets industry-ready skill benchmarks.
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
