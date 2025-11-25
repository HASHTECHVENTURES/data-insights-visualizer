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
    <PresentationSlide title="Appendix: Program-wise Skill Profiles">
      <div className="w-full max-w-6xl space-y-8">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-primary mb-6">Different Programs, Different Skill Gaps</h3>
          
          <p className="text-lg text-foreground/90 mb-8">
            Different degrees show different strengths and gaps across pillars. This allows <strong className="text-primary">program-specific interventions</strong> instead of one-size-fits-all training.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-4">Skill Profile by Program</h4>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis 
                      dataKey="skill" 
                      tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]}
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Radar 
                      name="B.Com" 
                      dataKey="B.Com" 
                      stroke="hsl(var(--chart-1))" 
                      fill="hsl(var(--chart-1))" 
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Radar 
                      name="BMS" 
                      dataKey="BMS" 
                      stroke="hsl(var(--chart-2))" 
                      fill="hsl(var(--chart-2))" 
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Radar 
                      name="B.Sc IT" 
                      dataKey="B.Sc IT" 
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary))" 
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Radar 
                      name="Engineering" 
                      dataKey="Engineering" 
                      stroke="hsl(var(--chart-3))" 
                      fill="hsl(var(--chart-3))" 
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Legend />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-primary mb-4">Top Departments by Student Count</h4>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {topDepartments.map((dept, index) => (
                  <div 
                    key={dept.department}
                    className="flex items-center justify-between bg-muted/30 rounded-lg p-3 hover-scale"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary/50">#{index + 1}</span>
                      <span className="font-medium text-foreground">{dept.department}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{dept.students.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-chart-1/5 border border-chart-1/20 rounded-lg p-4">
              <p className="text-sm font-semibold mb-2" style={{ color: "hsl(var(--chart-1))" }}>B.Com / BMS</p>
              <p className="text-sm text-foreground/80">Stronger communication & collaboration, weaker analytical reasoning</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-semibold text-primary mb-2">B.Sc IT / Engineering</p>
              <p className="text-sm text-foreground/80">Higher in problem-solving & analytical, lower in communication</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
