import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Send, 
  AlertCircle,
  FileCheck,
  CheckCircle2,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';

const CodeEditor = ({ code, setCode }: any) => {
  return (
    <div className="border border-zinc-200 bg-white overflow-hidden font-mono text-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-50 border-b border-zinc-200">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">fibonacci.py</span>
        </div>
        <div className="flex gap-1.5 grayscale opacity-30">
          <div className="w-2 h-2 rounded-full bg-zinc-400" />
          <div className="w-2 h-2 rounded-full bg-zinc-400" />
          <div className="w-2 h-2 rounded-full bg-zinc-400" />
        </div>
      </div>
      <textarea 
        spellCheck="false"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-96 p-6 bg-transparent outline-none resize-none text-zinc-800 leading-relaxed placeholder:text-zinc-300"
        placeholder="# Write your code here..."
      />
    </div>
  );
};

const SectionHeader = ({ title, subtitle }: any) => (
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-black tracking-tighter">{title}</h1>
    <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mt-1">{subtitle}</p>
  </div>
);

export default function StudentDashboard() {
  const [code, setCode] = useState(`def fib(n):
  if n <= 1:
    return n
  else:
    return fib(n-1) + fib(n-2)

# Test the function
print(fib(10))`);

  const [isGrading, setIsGrading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<any>(null);

  const handleGrade = () => {
    setIsGrading(true);
    setSubmissionResult(null);
    
    setTimeout(() => {
      setIsGrading(false);
      setSubmissionResult({
        score: 92,
        maxScore: 100,
        feedback: "The recursive implementation is mathematically correct and handles base cases well. For continuous professional production, consider an iterative approach or memoization to optimize time complexity from O(2^n) to O(n). Excellent overall quality.",
        testCases: [
          { name: "Zero input handling", passed: true },
          { name: "Unit case Fib(1)", passed: true },
          { name: "Positive integer Fib(10)", passed: true }
        ]
      });
      toast.success("Assignment evaluated successfully.");
    }, 2000);
  };

  return (
    <DashboardLayout role="student">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between border-b border-zinc-100 pb-8 mb-10">
          <SectionHeader title="CS101: Data Structures" subtitle="Module 04: Recursion & Complexity" />
          <div className="flex flex-col items-end gap-2">
            <Badge variant="outline" className="rounded-none border-zinc-200 text-zinc-500 font-bold tracking-widest text-[10px]">DUE APR 28</Badge>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter italic">2 days remaining</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Editor</h3>
                <div className="flex gap-4 items-center text-[10px] font-bold text-zinc-400">
                  <span>PYTHON 3.11</span>
                  <div className="w-1 h-1 rounded-full bg-zinc-200" />
                  <span>UTF-8</span>
                </div>
              </div>
              <CodeEditor code={code} setCode={setCode} />
              <div className="flex justify-end gap-4 pt-4">
                <Button variant="ghost" className="text-zinc-500 hover:text-black hover:bg-zinc-50 rounded-none px-8 font-bold text-xs uppercase tracking-widest transition-all">Save Draft</Button>
                <Button 
                  onClick={handleGrade} 
                  disabled={isGrading}
                  className="bg-black text-white hover:bg-zinc-800 rounded-none px-10 h-11 font-bold text-xs uppercase tracking-widest border-0 transition-all active:scale-95 disabled:opacity-50"
                >
                  {isGrading ? "Inference..." : "Evaluate"}
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {submissionResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="border border-black bg-white p-8">
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-100">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-black" />
                        <h3 className="font-bold text-xl tracking-tight uppercase">Analysis Report</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Final Score</p>
                        <p className="text-4xl font-black">{submissionResult.score}%</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-black mb-4">Inference Summary</h4>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                          {submissionResult.feedback}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-black mb-4">Verification Steps</h4>
                        <div className="space-y-2">
                          {submissionResult.testCases.map((test: any, i: number) => (
                            <div key={i} className="flex items-center justify-between p-3 border border-zinc-100 bg-zinc-50/50">
                              <div className="flex items-center gap-3">
                                {test.passed ? <CheckCircle2 className="w-3.5 h-3.5 text-black" /> : <AlertCircle className="w-3.5 h-3.5 text-red-500" />}
                                <span className="text-[11px] font-mono font-medium text-zinc-700">{test.name}</span>
                              </div>
                              <span className="text-[9px] font-bold uppercase tracking-tighter text-zinc-400 italic">Passed</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6">Requirements</h4>
              <div className="space-y-6">
                {[
                  { label: "Implementation", value: "Functional Recursion" },
                  { label: "Complexity", value: "O(2^n) or better" },
                  { label: "Memory", value: "Max 256MB" },
                  { label: "Documentation", value: "Docstrings required" }
                ].map((req, i) => (
                  <div key={i} className="flex border-b border-zinc-100 pb-2 justify-between">
                    <span className="text-xs text-zinc-500">{req.label}</span>
                    <span className="text-xs font-bold text-black">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6">History</h4>
              <div className="space-y-4">
                <div className="p-4 border border-zinc-100 hover:border-zinc-200 transition-colors group cursor-pointer">
                   <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-bold text-black group-hover:underline">Assignment 3: Lists</p>
                      <ArrowRight className="w-3 h-3 text-zinc-300 group-hover:text-black transition-colors" />
                   </div>
                   <div className="flex justify-between items-center text-[10px] text-zinc-400 font-bold uppercase tracking-tight">
                      <span>Apr 12, 2026</span>
                      <span className="text-black">98%</span>
                   </div>
                </div>
                <div className="p-4 border border-zinc-100 hover:border-zinc-200 transition-colors group cursor-pointer">
                   <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-bold text-black group-hover:underline">Assignment 2: Sorting</p>
                      <ArrowRight className="w-3 h-3 text-zinc-300 group-hover:text-black transition-colors" />
                   </div>
                   <div className="flex justify-between items-center text-[10px] text-zinc-400 font-bold uppercase tracking-tight">
                      <span>Mar 28, 2026</span>
                      <span className="text-black">85%</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
