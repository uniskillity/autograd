import DashboardLayout from '@/components/DashboardLayout.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Progress } from '@/components/ui/progress.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { 
  Users, 
  BookOpen, 
  Clock, 
  AlertCircle,
  TrendingUp,
  ArrowUpRight,
  Filter,
  Download,
  Plus
} from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon }: any) => (
  <div className="p-8 border border-zinc-200 bg-white">
    <div className="flex items-center justify-between mb-4">
      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">{title}</p>
      <Icon className="w-4 h-4 text-black" />
    </div>
    <div className="flex items-end justify-between">
      <h3 className="text-3xl font-bold tracking-tighter text-black leading-none">{value}</h3>
      <div className="flex items-center gap-1 text-[10px] font-bold text-black uppercase tracking-tighter">
        <ArrowUpRight className="w-3 h-3" />
        {change}
      </div>
    </div>
  </div>
);

const SectionHeader = ({ title, subtitle }: any) => (
  <div className="mb-0">
    <h1 className="text-3xl font-bold text-black tracking-tighter">{title}</h1>
    <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mt-1">{subtitle}</p>
  </div>
);

export default function TeacherDashboard() {
  const performanceData = [
    { subject: 'Recursion', score: 85, color: 'bg-black' },
    { subject: 'Data Structures', score: 72, color: 'bg-zinc-400' },
    { subject: 'Algorithms', score: 94, color: 'bg-zinc-200' },
  ];

  const recentAssignments = [
    { name: "Final Project: Neural Net", students: 42, status: "Grading", priority: "High" },
    { name: "Lab 7: Graphs", students: 38, status: "80% Complete", priority: "Normal" },
    { name: "Midterm Evaluation", students: 45, status: "Submitted", priority: "Medium" },
  ];

  return (
    <DashboardLayout role="teacher">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-8">
          <SectionHeader title="Academic Intelligence" subtitle="Institutional Overview / Spring 2026" />
          <div className="flex gap-4">
             <Button variant="outline" className="border-zinc-200 rounded-none h-11 px-6 text-xs font-bold uppercase tracking-widest">
                <Download className="w-4 h-4 mr-2" />
                Export
             </Button>
             <Button className="bg-black text-white hover:bg-zinc-800 rounded-none h-11 px-6 text-xs font-bold uppercase tracking-widest border-0">
                <Plus className="w-4 h-4 mr-2" />
                Create Batch
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 border border-zinc-200">
          <StatCard title="Total Students" value="1,284" change="+12%" icon={Users} />
          <StatCard title="Active Courses" value="12" change="+2" icon={BookOpen} />
          <StatCard title="Avg. Grade" value="84.2%" change="+5.4%" icon={TrendingUp} />
          <StatCard title="Evals / Hour" value="342" change="+24%" icon={Clock} />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-black">Active Assignments</h3>
                <div className="flex items-center gap-2">
                  <Filter className="w-3 h-3 text-zinc-400" />
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Sort by Priority</span>
                </div>
              </div>
              <div className="border border-zinc-200 divide-y divide-zinc-200">
                {recentAssignments.map((assignment, i) => (
                  <div key={i} className="p-6 flex items-center justify-between hover:bg-zinc-50 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-6">
                       <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:scale-150 transition-transform" />
                       <div>
                          <h4 className="text-sm font-bold text-black uppercase tracking-tight">{assignment.name}</h4>
                          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">{assignment.students} Submissions</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-10">
                       <div className="text-right hidden sm:block">
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Status</p>
                          <p className="text-xs font-bold text-black tracking-tight uppercase">{assignment.status}</p>
                       </div>
                       <Badge variant="outline" className={`rounded-none border-zinc-200 text-zinc-500 font-bold tracking-widest text-[9px] uppercase ${assignment.priority === 'High' ? 'border-red-200 text-red-500' : ''}`}>
                         {assignment.priority}
                       </Badge>
                       <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-black transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 border border-zinc-200 bg-zinc-50/50">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-5 h-5 text-black" />
                <h3 className="text-sm font-extrabold uppercase tracking-widest text-black">Common Misconceptions</h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
                  Anomalous patterns detected in <span className="text-black font-bold">Module 04: Recursion</span>. 
                  24% of students are struggling with base-case stack overflow logic. 
                  <span className="text-black font-bold cursor-pointer hover:underline ml-1">View logic cluster analysis →</span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Performance Clustering</h3>
              <div className="space-y-8">
                {performanceData.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-black uppercase tracking-tighter">{item.subject}</span>
                      <span className="text-xl font-black">{item.score}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-100 overflow-hidden">
                      <div 
                        className={`h-full ${item.color} transition-all duration-1000`} 
                        style={{ width: `${item.score}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-zinc-100">
                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-widest h-11 border-zinc-200 rounded-none hover:bg-zinc-50">
                   Generate Full Report
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">System Health</h3>
              <div className="space-y-4">
                 {[
                   { label: "Model Latency", val: "142ms", status: "Optimal" },
                   { label: "Inference Engine", val: "V2.1", status: "Active" },
                   { label: "Storage", val: "4.2TB", status: "Healthy" }
                 ].map((stat, i) => (
                   <div key={i} className="flex items-center justify-between p-4 border border-zinc-100 bg-white">
                      <div>
                         <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-0.5">{stat.label}</p>
                         <p className="text-sm font-bold text-black">{stat.val}</p>
                      </div>
                      <Badge variant="outline" className="rounded-none text-[8px] font-bold tracking-widest border-green-200 text-green-600 uppercase">
                        {stat.status}
                      </Badge>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
