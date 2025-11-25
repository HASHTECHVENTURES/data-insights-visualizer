import { PresentationSlide } from "../PresentationSlide";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import CountUp from "react-countup";

export const CommunicationGap = () => {
  const data = [
    { name: "Low Communication", value: 62, color: "#ef4444" },
    { name: "Low Problem-Solving", value: 28, color: "#22c55e" },
  ];

  return (
    <PresentationSlide title="Insight #4: Communication, Not IQ, Fails the Majority">
      <div className="w-full h-full max-w-7xl overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-destructive rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-6 h-full overflow-hidden flex flex-col gap-5 shadow-2xl">
          <h3 className="text-2xl font-black flex-shrink-0 tracking-tight animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent">
              Communication, Not IQ, Fails the Majority
            </span>
          </h3>
          
          <div className="grid grid-cols-5 gap-4 flex-1 min-h-0">
            {/* Left - Key Points */}
            <div className="col-span-2 space-y-3 animate-in fade-in slide-in-from-left-4 duration-700">
              <p className="text-sm text-foreground font-medium bg-gradient-to-r from-destructive/10 to-transparent rounded-lg p-3 border border-destructive/30">
                In the <strong className="text-destructive font-bold">Below Industry Level</strong> band (PLAT Overall &lt; 50):
              </p>
              <div className="space-y-2">
                <div className="group flex items-start gap-3 bg-gradient-to-br from-destructive/15 to-destructive/5 p-3 rounded-xl hover:from-destructive/25 hover:to-destructive/10 transition-all duration-300 border-2 border-destructive/30 hover:border-destructive/50 hover:scale-105">
                  <div className="w-3 h-3 rounded-full bg-destructive mt-1 animate-pulse" />
                  <p className="text-foreground font-medium text-xs">
                    More than <strong className="text-destructive">half have communication scores</strong> (written + spoken) below threshold
                  </p>
                </div>
                <div className="group flex items-start gap-3 bg-gradient-to-br from-primary/15 to-primary/5 p-3 rounded-xl hover:from-primary/25 hover:to-primary/10 transition-all duration-300 border-2 border-primary/30 hover:border-primary/50 hover:scale-105">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1 animate-pulse" />
                  <p className="text-foreground font-medium text-xs">
                    Many have <strong className="text-primary">decent problem-solving scores</strong>, but cannot express clearly
                  </p>
                </div>
                <div className="group flex items-start gap-3 bg-gradient-to-br from-green-500/15 to-green-500/5 p-3 rounded-xl hover:from-green-500/25 hover:to-green-500/10 transition-all duration-300 border-2 border-green-500/30 hover:border-green-500/50 hover:scale-105">
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-1 animate-pulse" />
                  <p className="text-foreground font-medium text-xs">
                    Improving communication alone has lifted PLAT scores by <strong className="text-green-500">+10–15 points</strong>
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-destructive/20 to-destructive/5 border-2 border-destructive/40 rounded-2xl p-4">
                <div className="absolute top-0 right-0 w-20 h-20 bg-destructive/20 rounded-full blur-2xl" />
                <p className="text-xs text-foreground font-medium leading-relaxed relative z-10">
                  <strong className="text-destructive font-black text-sm">Communication is the #1 skill gap</strong> among below-industry students. 
                  <span className="block mt-1 text-green-500 font-bold">The good news: it's trainable!</span>
                </p>
              </div>
            </div>

            {/* Middle - Big Stats */}
            <div className="col-span-1 flex flex-col justify-center items-center gap-4 animate-in fade-in zoom-in duration-700 delay-200">
              <div className="group relative text-center w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive to-red-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-br from-destructive/25 to-destructive/10 border-2 border-destructive/50 rounded-2xl p-5 hover:border-destructive/70 hover:scale-105 transition-all duration-300">
                  <p className="text-5xl font-black text-white drop-shadow-md mb-2">
                    <CountUp end={62} duration={2} suffix="%" />
                  </p>
                  <p className="text-xs text-red-100 font-bold tracking-wider uppercase">Low Communication</p>
                </div>
              </div>
              <div className="text-center text-muted-foreground text-lg font-bold">vs</div>
              <div className="group relative text-center w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-br from-green-500/25 to-green-500/10 border-2 border-green-500/50 rounded-2xl p-5 hover:border-green-500/70 hover:scale-105 transition-all duration-300">
                  <p className="text-5xl font-black text-white drop-shadow-md mb-2">
                    <CountUp end={28} duration={2} suffix="%" />
                  </p>
                  <p className="text-xs text-green-100 font-bold tracking-wider uppercase">Low Problem-Solving</p>
                </div>
              </div>
            </div>

            {/* Right - Chart */}
            <div className="col-span-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" barCategoryGap="30%">
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <YAxis type="category" dataKey="name" tick={{ fill: '#f1f5f9', fontSize: 11 }} width={120} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f1f5f9' }}
                    itemStyle={{ color: '#f1f5f9' }}
                    formatter={(value: number) => [`${value}%`, 'Percentage']}
                  />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} animationDuration={1000}>
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        style={{ filter: `drop-shadow(0 0 8px ${entry.color})`, cursor: 'pointer' }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
