import { PresentationSlide } from "../PresentationSlide";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { cityWiseData } from "@/data/collegeData";
import CountUp from "react-countup";

export const TierComparison = () => {
  return (
    <PresentationSlide title="Insight #3: Tier-2/Tier-3 Colleges Hide Serious Problem-Solving Talent">
      <div className="w-full h-full max-w-7xl overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-6 h-full overflow-hidden flex flex-col gap-5 shadow-2xl">
          <div className="flex items-start justify-between flex-shrink-0 animate-in fade-in slide-in-from-top-4 duration-700">
            <h3 className="text-2xl font-black tracking-tight max-w-2xl leading-tight">
              <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                Tier-2/Tier-3 Colleges Hide Serious Problem-Solving Talent
              </span>
            </h3>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-primary/20 to-cyan-500/20 border-2 border-primary/50 rounded-2xl px-6 py-3 text-center backdrop-blur-sm">
                <p className="text-4xl font-black text-white mb-1 drop-shadow-md">
                  <CountUp end={40} duration={2} suffix="%" />
                </p>
                <p className="text-xs text-cyan-100 font-bold">cities show Tier-2/3 advantage</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3 flex-shrink-0">
            <div className="group flex items-start gap-3 bg-gradient-to-br from-primary/15 to-primary/5 p-3 rounded-xl hover:from-primary/25 hover:to-primary/10 transition-all duration-300 border-2 border-primary/30 hover:border-primary/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-500 mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                In <strong className="text-primary">4 out of 10 cities</strong>, Tier-2/3 problem-solving scores are higher than Tier-1
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-destructive/15 to-destructive/5 p-3 rounded-xl hover:from-destructive/25 hover:to-destructive/10 transition-all duration-300 border-2 border-destructive/30 hover:border-destructive/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-destructive mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                Tier-2/3 lose out due to <strong className="text-destructive">weaker communication</strong>, not thinking ability
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-green-500/15 to-green-500/5 p-3 rounded-xl hover:from-green-500/25 hover:to-green-500/10 transition-all duration-300 border-2 border-green-500/30 hover:border-green-500/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                "Top brands" hiring <strong className="text-green-500">leaves strong problem-solvers on the table</strong>
              </p>
            </div>
          </div>
          
          {/* Full Width Chart */}
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cityWiseData} barCategoryGap="20%">
                <XAxis 
                  dataKey="city" 
                  tick={{ fill: '#f1f5f9', fontSize: 10 }}
                  angle={-20}
                  textAnchor="end"
                  height={60}
                />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} domain={[0, 60]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f1f5f9' }}
                  itemStyle={{ color: '#f1f5f9' }}
                  cursor={{ fill: 'rgba(59,130,246,0.1)' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px' }} />
                <Bar 
                  dataKey="tier1Ready" 
                  name="Tier-1 Colleges" 
                  fill="#06b6d4" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={800}
                  style={{ filter: 'drop-shadow(0 0 4px #06b6d4)', cursor: 'pointer' }}
                />
                <Bar 
                  dataKey="tier2Ready" 
                  name="Tier-2/3 Colleges" 
                  fill="#22c55e" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={800}
                  animationBegin={200}
                  style={{ filter: 'drop-shadow(0 0 4px #22c55e)', cursor: 'pointer' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-r from-green-500/15 via-emerald-500/15 to-green-500/15 border-2 border-green-500/40 rounded-2xl p-4 flex-shrink-0 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/20 rounded-full blur-2xl" />
            <p className="text-sm text-foreground font-medium relative z-10">
              <strong className="text-green-500 font-black text-base">Hidden Advantage:</strong> Tier-2/3 colleges in <span className="text-green-500 font-bold">Pune, Bangalore, and Chhatrapati Sambhajinagar</span> outperform Tier-1.
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
