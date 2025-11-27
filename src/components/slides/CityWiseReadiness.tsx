import { PresentationSlide } from "../PresentationSlide";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { cityWiseData } from "@/data/collegeData";
import CountUp from "react-countup";
export const CityWiseReadiness = () => {
  const sortedData = [...cityWiseData].sort((a, b) => b.industryReady - a.industryReady);
  const colors = ['#06b6d4', '#3b82f6', '#3b82f6', '#6366f1', '#6366f1', '#8b5cf6', '#8b5cf6', '#a78bfa'];
  return <PresentationSlide title="Insight #2: Tier-2 Cities Often Match or Beat Metros">
      <div className="w-full h-full max-w-7xl overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-6 h-full overflow-hidden flex flex-col gap-5 shadow-2xl">
          <div className="flex items-start justify-between flex-shrink-0 animate-in fade-in slide-in-from-top-4 duration-700">
            <h3 className="text-2xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
                Tier-2 Cities Often Match or Beat Metros
              </span>
            </h3>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-green-500/20 border-2 border-cyan-500/50 rounded-2xl px-6 py-3 text-center backdrop-blur-sm">
                <p className="text-xs font-bold text-cyan-400 mb-1">🏆 Top Performer</p>
                <p className="text-2xl font-black text-foreground">Bangalore - 48.33%<CountUp end={38} duration={2} suffix="%" /></p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-3 flex-shrink-0">
            <div className="group flex items-start gap-3 bg-gradient-to-br from-primary/15 to-primary/5 p-3 rounded-xl hover:from-primary/25 hover:to-primary/10 transition-all duration-300 border-2 border-primary/30 hover:border-primary/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-500 mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                % of students with PLAT Score ≥ 60
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-green-500/15 to-green-500/5 p-3 rounded-xl hover:from-green-500/25 hover:to-green-500/10 transition-all duration-300 border-2 border-green-500/30 hover:border-green-500/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                <strong className="text-green-500">Tier-2 cities</strong> have higher share than metros
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-amber-500/15 to-amber-500/5 p-3 rounded-xl hover:from-amber-500/25 hover:to-amber-500/10 transition-all duration-300 border-2 border-amber-500/30 hover:border-amber-500/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-amber-500 mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                <strong className="text-amber-500">Bottleneck is visibility</strong>, not capability
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-destructive/15 to-destructive/5 p-3 rounded-xl hover:from-destructive/25 hover:to-destructive/10 transition-all duration-300 border-2 border-destructive/30 hover:border-destructive/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-destructive mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                Hidden talent in <strong className="text-destructive">Tier-2/3 cities</strong>
              </p>
            </div>
          </div>

          {/* Full Width Chart */}
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sortedData} layout="vertical" barCategoryGap="15%">
                <XAxis type="number" domain={[0, 45]} tick={{
                fill: '#94a3b8',
                fontSize: 11
              }} />
                <YAxis type="category" dataKey="city" tick={{
                fill: '#f1f5f9',
                fontSize: 11
              }} width={140} />
                <Tooltip contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#f1f5f9'
              }} itemStyle={{
                color: '#f1f5f9'
              }} formatter={(value: number) => [`${value}%`, 'Industry Ready']} cursor={{
                fill: 'rgba(59,130,246,0.1)'
              }} />
                <Bar dataKey="industryReady" radius={[0, 8, 8, 0]} animationDuration={1000}>
                  {sortedData.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index]} style={{
                  filter: index === 0 ? 'drop-shadow(0 0 8px #06b6d4)' : 'none',
                  cursor: 'pointer'
                }} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </PresentationSlide>;
};