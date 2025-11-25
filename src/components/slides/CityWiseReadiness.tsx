import { PresentationSlide } from "../PresentationSlide";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { cityWiseData } from "@/data/collegeData";

export const CityWiseReadiness = () => {
  return (
    <PresentationSlide title="Insight #2: City-wise Industry Readiness">
      <div className="w-full max-w-6xl space-y-8">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-primary mb-6">Tier-2 Cities Often Match or Beat Metros</h3>
          
          <div className="mb-6 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-foreground/90">
                For each city, we compute % of students with PLAT Score ≥ 50
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-foreground/90">
                In several cases, <strong className="text-primary">Tier-2 cities have a higher share</strong> of industry-ready students than some metros
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-foreground/90">
                Talent is geographically distributed – the <strong className="text-primary">bottleneck is visibility, not capability</strong>
              </p>
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
                  label={{ value: '% Industry Ready', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
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
                  dataKey="industryReady" 
                  name="Industry Ready %" 
                  fill="hsl(var(--primary))" 
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-chart-1/10 border border-chart-1/30 rounded-lg p-4">
              <p className="text-sm font-semibold mb-2" style={{ color: "hsl(var(--chart-1))" }}>🏆 Top Performer</p>
              <p className="text-2xl font-bold text-foreground">Pune - 38%</p>
              <p className="text-xs text-muted-foreground">Tier-2 city outperforming metros</p>
            </div>
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
              <p className="text-sm font-semibold text-destructive mb-2">💡 Key Insight</p>
              <p className="text-sm text-foreground">Hidden talent clusters exist in Tier-2/3 cities waiting to be discovered</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
