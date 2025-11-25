import { PresentationSlide } from "../PresentationSlide";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { genderComparison } from "@/data/collegeData";
import CountUp from "react-countup";

export const GenderAnalysis = () => {
  return (
    <PresentationSlide title="Insight #6: Women Often Score Higher, Still Hired Less">
      <div className="w-full h-full max-w-7xl overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-6 h-full overflow-hidden flex flex-col gap-4 shadow-2xl">
          <div className="flex items-start justify-between flex-shrink-0 animate-in fade-in slide-in-from-top-4 duration-700">
            <h3 className="text-2xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Women Often Score Higher, Still Hired Less
              </span>
            </h3>
            <div className="flex gap-3">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-pink-500/25 to-pink-500/10 border-2 border-pink-500/50 rounded-2xl px-5 py-3 text-center hover:scale-105 transition-all duration-300">
                  <p className="text-3xl font-black text-white drop-shadow-md mb-1">
                    +<CountUp end={8} duration={2} />pts
                  </p>
                  <p className="text-xs text-pink-100 font-bold tracking-wider uppercase">Female Advantage</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-destructive to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-destructive/25 to-destructive/10 border-2 border-destructive/50 rounded-2xl px-5 py-3 text-center hover:scale-105 transition-all duration-300">
                  <p className="text-2xl font-black text-white drop-shadow-md mb-1">Gap</p>
                  <p className="text-xs text-red-100 font-bold tracking-wider uppercase">Lower Hiring</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-3 flex-shrink-0">
            <div className="group flex items-start gap-3 bg-gradient-to-br from-primary/15 to-primary/5 p-3 rounded-xl hover:from-primary/25 hover:to-primary/10 transition-all duration-300 border-2 border-primary/30 hover:border-primary/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-500 mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                <strong className="text-primary">Match or exceed</strong> male students on Overall PLAT
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-pink-500/15 to-pink-500/5 p-3 rounded-xl hover:from-pink-500/25 hover:to-pink-500/10 transition-all duration-300 border-2 border-pink-500/30 hover:border-pink-500/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-pink-500 mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                Score <strong className="text-pink-500">5–10 pts higher</strong> on communication
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-destructive/15 to-destructive/5 p-3 rounded-xl hover:from-destructive/25 hover:to-destructive/10 transition-all duration-300 border-2 border-destructive/30 hover:border-destructive/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-destructive mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                <strong className="text-destructive">Lower shortlist share</strong> despite higher scores
              </p>
            </div>
            <div className="group flex items-start gap-3 bg-gradient-to-br from-green-500/15 to-green-500/5 p-3 rounded-xl hover:from-green-500/25 hover:to-green-500/10 transition-all duration-300 border-2 border-green-500/30 hover:border-green-500/50 hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-1 animate-pulse" />
              <p className="text-foreground font-medium text-xs">
                <strong className="text-green-500">Untapped potential</strong> in female talent
              </p>
            </div>
          </div>

          {/* Full Width Chart - Better height management */}
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={genderComparison} barCategoryGap="25%">
                <XAxis dataKey="skill" tick={{ fill: '#f1f5f9', fontSize: 12 }} />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} domain={[0, 70]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f1f5f9' }}
                  itemStyle={{ color: '#f1f5f9' }}
                  cursor={{ fill: 'rgba(59,130,246,0.1)' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px' }} />
                <Bar 
                  dataKey="male" 
                  name="Male Students" 
                  fill="#06b6d4" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={800}
                  style={{ filter: 'drop-shadow(0 0 6px #06b6d4)', cursor: 'pointer' }}
                />
                <Bar 
                  dataKey="female" 
                  name="Female Students" 
                  fill="#ec4899" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={800}
                  animationBegin={200}
                  style={{ filter: 'drop-shadow(0 0 6px #ec4899)', cursor: 'pointer' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-3 flex-shrink-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="relative overflow-hidden bg-gradient-to-br from-pink-500/15 to-pink-500/5 border-2 border-pink-500/40 rounded-2xl p-4 hover:border-pink-500/60 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl" />
              <p className="text-sm text-foreground font-medium relative z-10">
                <strong className="text-pink-500 font-black text-base">Data-backed diversity:</strong> Evidence-based diversity programs, not tokenism.
              </p>
            </div>
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 border-2 border-cyan-500/40 rounded-2xl p-4 hover:border-cyan-500/60 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl" />
              <p className="text-sm text-foreground font-medium relative z-10">
                <strong className="text-cyan-500 font-black text-base">Untapped potential:</strong> Exceptional communication and collaboration skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
