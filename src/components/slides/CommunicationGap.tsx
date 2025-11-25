import { PresentationSlide } from "../PresentationSlide";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { communicationVsProblemSolving } from "@/data/collegeData";

export const CommunicationGap = () => {
  const colors = ["hsl(var(--chart-1))", "hsl(var(--destructive))"];

  return (
    <PresentationSlide title="Insight #4: The Communication Barrier">
      <div className="w-full max-w-6xl space-y-8">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 zoom-in">
          <h3 className="text-3xl font-bold text-primary mb-6">Communication, Not IQ, Fails the Majority</h3>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="col-span-2 space-y-4">
              <p className="text-lg text-foreground/90">
                In the <strong className="text-destructive">Below Industry Level</strong> band (PLAT Overall &lt; 50):
              </p>
              <div className="space-y-3 pl-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                  <p className="text-foreground/90">
                    More than <strong className="text-destructive">half have communication scores</strong> (written + spoken) below our threshold
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-foreground/90">
                    Many of them have <strong className="text-primary">decent problem-solving scores</strong>, but cannot express clearly
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-chart-1 mt-2" />
                  <p className="text-foreground/90">
                    In pilots, improving communication alone has lifted overall PLAT scores by <strong className="text-chart-1">+10–15 points</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-destructive/20 to-destructive/10 border border-destructive/30 rounded-lg p-6 flex flex-col items-center justify-center">
              <p className="text-6xl font-bold text-destructive mb-2">62%</p>
              <p className="text-sm text-center font-semibold text-foreground">Low Communication Skills</p>
              <p className="text-xs text-muted-foreground text-center mt-2">vs 28% Low Problem-Solving</p>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={communicationVsProblemSolving} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  type="number"
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  label={{ value: '% of Below-Industry Students', position: 'insideBottom', offset: -5, fill: 'hsl(var(--foreground))' }}
                />
                <YAxis 
                  type="category"
                  dataKey="category" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  width={180}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="percentage" radius={[0, 8, 8, 0]}>
                  {communicationVsProblemSolving.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 bg-destructive/5 border border-destructive/20 rounded-lg p-4">
            <p className="text-sm text-foreground/80">
              <strong className="text-destructive">Communication is the #1 skill gap</strong> among below-industry students. 
              The good news: it's trainable and shows quick improvement with focused intervention.
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
