import { PresentationSlide } from "../PresentationSlide";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { programWiseSkills, topDepartments } from "@/data/departmentData";

export const ProgramWiseProfiles = () => {
  const radarData = [
    {
      skill: "Problem-Solving",
      "B.Com": 48,
      "BMS": 52,
      "B.Sc IT": 68,
      "Engineering": 70,
    },
    {
      skill: "Communication",
      "B.Com": 62,
      "BMS": 65,
      "B.Sc IT": 45,
      "Engineering": 42,
    },
    {
      skill: "Decision-Making",
      "B.Com": 55,
      "BMS": 58,
      "B.Sc IT": 60,
      "Engineering": 62,
    },
    {
      skill: "Analytical",
      "B.Com": 52,
      "BMS": 54,
      "B.Sc IT": 72,
      "Engineering": 75,
    },
  ];

  return (
    <PresentationSlide title="Appendix: Different Programs, Different Skill Gaps">
      <div className="w-full h-full max-w-7xl overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-6 h-full overflow-hidden flex flex-col gap-4 shadow-2xl">
          <p className="text-base text-foreground font-medium flex-shrink-0 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-4 border-2 border-primary/30 animate-in fade-in slide-in-from-top-4 duration-700">
            Different degrees show different strengths and gaps across pillars. This allows <strong className="text-primary font-bold">program-specific interventions</strong> instead of one-size-fits-all training.
          </p>

          <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
            <div className="min-h-0 flex flex-col animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
              <h4 className="text-lg font-black text-primary mb-3 flex-shrink-0">Skill Profile by Program</h4>
              <div className="flex-1 min-h-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-4 border border-primary/20">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="65%">
                    <PolarGrid stroke="hsl(var(--border))" strokeWidth={1.5} />
                    <PolarAngleAxis 
                      dataKey="skill" 
                      tick={{ fill: 'hsl(var(--foreground))', fontSize: 12, fontWeight: 600 }}
                      tickLine={false}
                      dy={5}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]}
                      tick={false}
                      axisLine={false}
                    />
                    <Radar 
                      name="B.Com" 
                      dataKey="B.Com" 
                      stroke="hsl(var(--chart-1))" 
                      fill="hsl(var(--chart-1))" 
                      fillOpacity={0.3}
                      strokeWidth={3}
                    />
                    <Radar 
                      name="BMS" 
                      dataKey="BMS" 
                      stroke="hsl(var(--chart-2))" 
                      fill="hsl(var(--chart-2))" 
                      fillOpacity={0.3}
                      strokeWidth={3}
                    />
                    <Radar 
                      name="B.Sc IT" 
                      dataKey="B.Sc IT" 
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary))" 
                      fillOpacity={0.3}
                      strokeWidth={3}
                    />
                    <Radar 
                      name="Engineering" 
                      dataKey="Engineering" 
                      stroke="hsl(var(--chart-3))" 
                      fill="hsl(var(--chart-3))" 
                      fillOpacity={0.3}
                      strokeWidth={3}
                    />
                    <Legend wrapperStyle={{ fontWeight: 600 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '2px solid #334155',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        color: '#f1f5f9'
                      }}
                      labelStyle={{ color: '#f1f5f9', fontWeight: 'bold' }}
                      itemStyle={{ color: '#f1f5f9' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="min-h-0 overflow-hidden flex flex-col animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              <h4 className="text-lg font-black text-primary mb-3 flex-shrink-0">Top Departments by Student Count</h4>
              <div className="space-y-2 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {topDepartments.map((dept, index) => (
                  <div 
                    key={dept.department}
                    className="group flex items-center justify-between bg-gradient-to-r from-muted/40 to-muted/20 rounded-xl p-3 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary/40 hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-primary/50 group-hover:text-primary transition-colors min-w-[2rem]">#{index + 1}</span>
                      <span className="text-sm font-semibold text-foreground">{dept.department}</span>
                    </div>
                    <span className="text-base font-black text-primary">{dept.students.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-shrink-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 border-2 border-cyan-500/40 rounded-2xl p-4 hover:border-cyan-500/60 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl" />
              <p className="text-base font-black text-cyan-500 mb-2 relative z-10">B.Com / BMS</p>
              <p className="text-sm text-foreground font-medium relative z-10">Stronger communication & collaboration, weaker analytical</p>
            </div>
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/40 rounded-2xl p-4 hover:border-primary/60 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              <p className="text-base font-black text-primary mb-2 relative z-10">B.Sc IT / Engineering</p>
              <p className="text-sm text-foreground font-medium relative z-10">Higher problem-solving & analytical, lower communication</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
