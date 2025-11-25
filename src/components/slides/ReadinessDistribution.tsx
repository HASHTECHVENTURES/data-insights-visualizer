import { PresentationSlide } from "../PresentationSlide";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts";
import { skillDistribution } from "@/data/collegeData";
import CountUp from "react-countup";

export const ReadinessDistribution = () => {
  const colors = ["#ef4444", "#3b82f6", "#22c55e"];
  const pieData = skillDistribution.map((item, index) => ({
    ...item,
    fill: colors[index]
  }));

  return (
    <PresentationSlide title="Insight #1: Only Around 1 in 3 Students Is Industry-Ready">
      <div className="w-full h-full max-w-7xl overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-destructive rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        </div>

        <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-6 h-full overflow-hidden flex flex-col gap-6 shadow-2xl">
          <p className="text-base text-foreground font-medium flex-shrink-0 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-4 border border-primary/30">
            We classify PLAT Overall Scores into three bands: <span className="text-destructive font-bold">Score &lt; 50%</span> (Below Industry), <span className="text-primary font-bold">Score 50–90%</span> (Industry Level), <span className="text-green-500 font-bold">Score &gt; 90%</span> (High-Potential)
          </p>
          
          <div className="grid grid-cols-5 gap-3 flex-1 min-h-0">
            {/* Donut Chart */}
            <div className="col-span-2 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="percentage"
                    animationBegin={0}
                    animationDuration={1200}
                    filter="url(#glow)"
                  >
                    {pieData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={colors[index]} 
                        style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f1f5f9' }}
                    itemStyle={{ color: '#f1f5f9' }}
                    formatter={(value: number) => [`${value}%`, 'Students']}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">
                    <CountUp end={35} duration={2} suffix="%" />
                  </p>
                  <p className="text-xs text-muted-foreground">Industry Ready</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="col-span-1 flex flex-col justify-center gap-3">
              <div className="group relative bg-gradient-to-br from-destructive/20 to-destructive/5 border-2 border-destructive/40 rounded-2xl p-4 hover:border-destructive/60 hover:shadow-lg hover:shadow-destructive/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <p className="text-xs text-muted-foreground font-semibold mb-1 relative z-10">Score &lt; 50%</p>
                <p className="text-3xl font-black text-destructive mb-1 relative z-10">
                  <CountUp end={65} duration={2} suffix="%" />
                </p>
                <p className="text-xs font-bold mb-2 relative z-10">Below Industry</p>
                <div className="mt-2 h-3 bg-destructive/20 rounded-full overflow-hidden relative z-10 shadow-inner">
                  <div className="h-full bg-gradient-to-r from-destructive to-red-600 rounded-full transition-all duration-1000" style={{width: '65%'}}></div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 rounded-2xl p-4 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <p className="text-xs text-muted-foreground font-semibold mb-1 relative z-10">Score 50-90%</p>
                <p className="text-3xl font-black text-primary mb-1 relative z-10">
                  <CountUp end={30} duration={2} suffix="%" />
                </p>
                <p className="text-xs font-bold mb-2 relative z-10">Industry Ready</p>
                <div className="mt-2 h-3 bg-primary/20 rounded-full overflow-hidden relative z-10 shadow-inner">
                  <div className="h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full transition-all duration-1000 delay-200" style={{width: '30%'}}></div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/40 rounded-2xl p-4 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <p className="text-xs text-muted-foreground font-semibold mb-1 relative z-10">Score &gt; 90%</p>
                <p className="text-3xl font-black text-green-500 mb-1 relative z-10">
                  <CountUp end={5} duration={2} suffix="%" />
                </p>
                <p className="text-xs font-bold mb-2 relative z-10">High Potential</p>
                <div className="mt-2 h-3 bg-green-500/20 rounded-full overflow-hidden relative z-10 shadow-inner">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000 delay-400" style={{width: '5%'}}></div>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="col-span-2">
              <p className="text-xs text-muted-foreground mb-2 text-center">Distribution of PLAT Overall Scores</p>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={skillDistribution} barCategoryGap="20%">
                  <XAxis dataKey="band" tick={{ fill: '#f1f5f9', fontSize: 9 }} angle={-10} textAnchor="end" height={50} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} domain={[0, 70]} label={{ value: '% of Students', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f1f5f9' }}
                    itemStyle={{ color: '#f1f5f9' }}
                    formatter={(value: number) => [`${value}%`, 'Students']}
                  />
                  <Bar dataKey="percentage" radius={[4, 4, 0, 0]} animationDuration={1000}>
                    {skillDistribution.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={colors[index]} 
                        style={{ filter: `drop-shadow(0 0 6px ${colors[index]})`, cursor: 'pointer' }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-r from-primary/15 via-cyan-500/15 to-primary/15 border-2 border-primary/40 rounded-2xl p-4 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <p className="text-sm text-foreground font-medium relative z-10">
              <strong className="text-primary font-black text-base">Key Finding:</strong> This pattern holds even in many reputed institutions. Only <span className="text-primary font-bold">~1 in 3 students</span> meets industry-ready skill benchmarks.
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
