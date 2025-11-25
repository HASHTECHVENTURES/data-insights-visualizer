import { PresentationSlide } from "../PresentationSlide";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { platJourneys } from "@/data/collegeData";
import CountUp from "react-countup";

export const ConsistentGrowth = () => {
  return (
    <PresentationSlide title="Insight #5: Consistent PLAT Growth → 2–3x Better Placements">
      <div className="w-full h-full max-w-7xl overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        </div>

        <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-6 h-full overflow-hidden flex flex-col gap-5 shadow-2xl">
          <div className="flex items-start justify-between flex-shrink-0 animate-in fade-in slide-in-from-top-4 duration-700">
            <h3 className="text-2xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-cyan-500 to-primary bg-clip-text text-transparent">
                Consistent PLAT Growth → 2–3x Better Placements
              </span>
            </h3>
            <div className="flex gap-3">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-cyan-500/25 to-cyan-500/10 border-2 border-cyan-500/50 rounded-2xl px-5 py-3 text-center hover:scale-105 transition-all duration-300">
                  <p className="text-3xl font-black text-white drop-shadow-md mb-1">
                    <CountUp end={3} duration={2} prefix="2-" suffix="x" />
                  </p>
                  <p className="text-xs text-cyan-100 font-bold tracking-wider uppercase">Consistent Improvers</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-destructive to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-destructive/25 to-destructive/10 border-2 border-destructive/50 rounded-2xl px-5 py-3 text-center hover:scale-105 transition-all duration-300">
                  <p className="text-2xl font-black text-white drop-shadow-md mb-1">1x</p>
                  <p className="text-xs text-red-100 font-bold tracking-wider uppercase">Spiky Performers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-3 flex-shrink-0">
            <div className="group flex items-start gap-3 bg-gradient-to-br from-primary/15 to-primary/5 p-3 rounded-xl hover:from-primary/25 hover:to-primary/10 transition-all duration-300 border-2 border-primary/30 hover:border-primary/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-primary mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                <strong className="text-primary">Trajectory over time</strong> is a better signal than one-off scores
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 p-3 rounded-xl hover:from-cyan-500/25 hover:to-cyan-500/10 transition-all duration-300 border-2 border-cyan-500/30 hover:border-cyan-500/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-cyan-500 mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                Tracked students over <strong className="text-cyan-500">4+ PLAT cycles</strong>
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-green-500/15 to-green-500/5 p-3 rounded-xl hover:from-green-500/25 hover:to-green-500/10 transition-all duration-300 border-2 border-green-500/30 hover:border-green-500/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                <strong className="text-green-500">Stable/improving scores</strong> = 2-3x higher placement
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-muted/30 to-muted/10 p-3 rounded-xl hover:from-muted/40 hover:to-muted/20 transition-all duration-300 border-2 border-muted/30 hover:border-muted/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-muted-foreground mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                Readiness is about <strong className="text-foreground">habit and growth</strong>
              </p>
            </div>
          </div>

          <div className="flex-1 min-h-0 bg-gradient-to-br from-background/50 to-background/20 rounded-2xl p-4 border border-border/50">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={platJourneys} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="consistentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="spikyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <filter id="shadow" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#06b6d4" floodOpacity="0.5"/>
                  </filter>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis 
                  dataKey="cycle" 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} 
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} 
                  domain={[0, 100]} 
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f1f5f9' }}
                  itemStyle={{ color: '#f1f5f9' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Area 
                  type="monotone" 
                  dataKey="consistent" 
                  name="Consistent Improver" 
                  stroke="#06b6d4" 
                  strokeWidth={4}
                  fill="url(#consistentGradient)"
                  dot={{ fill: '#06b6d4', r: 6, strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8, stroke: '#06b6d4', strokeWidth: 2, fill: 'white' }}
                  animationDuration={2000}
                  animationEasing="ease-out"
                />
                <Area 
                  type="monotone" 
                  dataKey="spiky" 
                  name="Spiky Performer" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  fill="url(#spikyGradient)"
                  dot={{ fill: '#ef4444', r: 4, strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2, fill: 'white' }}
                  animationDuration={2000}
                  animationBegin={500}
                  animationEasing="ease-out"
                />
                <Area 
                  type="monotone" 
                  dataKey="flat" 
                  name="Flat/Stagnant" 
                  stroke="#64748b" 
                  strokeWidth={2}
                  fill="transparent"
                  dot={{ fill: '#64748b', r: 4, strokeWidth: 2, stroke: '#fff' }}
                  animationDuration={2000}
                  animationBegin={1000}
                  animationEasing="ease-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500/15 via-primary/15 to-cyan-500/15 border-2 border-cyan-500/40 rounded-2xl p-4 flex-shrink-0 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl" />
            <p className="text-sm text-foreground font-medium relative z-10">
              <strong className="text-cyan-500 font-black text-base">PLAT is not just a test;</strong> it becomes a progress graph. <span className="text-primary font-bold">Consistent improvement predicts real-world success.</span>
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
