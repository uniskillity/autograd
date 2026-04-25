import { motion } from 'motion/react';
import { Button } from '@/components/ui/button.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Code2, 
  Zap, 
  BarChart3, 
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Terminal,
  ShieldCheck,
  Search
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-black flex items-center justify-center">
          <Terminal className="w-5 h-5 text-white" />
        </div>
        <span className="font-sans font-bold text-lg tracking-tighter text-black uppercase">AutoGrade</span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-500">
        <a href="#features" className="hover:text-black transition-colors">Platform</a>
        <a href="#how-it-works" className="hover:text-black transition-colors">Solutions</a>
        <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/dashboard">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-zinc-600 hover:text-black">Sign In</Button>
        </Link>
        <Link to="/dashboard">
          <Button size="sm" className="bg-black text-white hover:bg-zinc-800 transition-colors rounded-none px-6">Get Started</Button>
        </Link>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            Announcing V2.0 Evaluation Engine
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-black mb-8 leading-[1]">
            Intelligent grading <br/>
            for the next generation.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-2xl leading-relaxed">
            Automate evaluation for assignments, complex code, and free-form text with professional AI that understands intent, not just syntax.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="h-14 px-10 text-lg bg-black text-white hover:bg-zinc-800 rounded-none border-0 transition-transform active:scale-95">
                Start building
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-zinc-200 text-black hover:bg-zinc-50 rounded-none">
              Book a demo
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="p-8 border-t border-zinc-200 hover:bg-zinc-50 transition-colors group">
    <div className="w-10 h-10 flex items-center justify-center mb-6 text-black">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold mb-3 text-black font-sans">{title}</h3>
    <p className="text-zinc-500 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Features = () => (
  <section id="features" className="py-32 border-t border-zinc-200">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-r border-l border-b border-zinc-200">
        <FeatureCard 
          icon={Zap} 
          title="Instant Feedback" 
          description="Evaluate thousands of submissions in seconds with our optimized inference engine."
        />
        <FeatureCard 
          icon={ShieldCheck} 
          title="Logic-first" 
          description="Move beyond regex. Our AI understands the semantic logic of code and natural language."
        />
        <FeatureCard 
          icon={Code2} 
          title="Polyglot Support" 
          description="Native support for 50+ programming languages and frameworks out of the box."
        />
        <FeatureCard 
          icon={BarChart3} 
          title="Real-time Analytics" 
          description="Identify class-wide misconceptions early with automatically generated performance clusters."
        />
      </div>
    </div>
  </section>
);

const SectionHeading = ({ subtitle, title, description }: any) => (
  <div className="max-w-2xl mb-16">
    <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4">{subtitle}</p>
    <h2 className="text-4xl font-medium tracking-tight text-black mb-6">{title}</h2>
    <p className="text-lg text-zinc-500 leading-relaxed">{description}</p>
  </div>
);

const CodeDemo = () => (
  <section className="py-32 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <SectionHeading 
            subtitle="Deep Analysis"
            title="Beyond simple matching"
            description="Our evaluation engine processes context, logic, and efficiency. It doesn't just grade—it teaches by providing human-like reasoning for every mark."
          />
          <div className="space-y-6">
            {[
              "Semantic logic validation",
              "Intent-aware error detection",
              "Automated rubric alignment",
              "Class-wide bias mitigation"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:scale-150 transition-transform" />
                <span className="text-sm font-medium text-zinc-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white border border-zinc-200 shadow-2xl overflow-hidden rounded-sm">
            <div className="h-10 border-b border-zinc-200 bg-zinc-50 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
              </div>
              <span className="text-[10px] font-mono text-zinc-400">analysis_v2.log</span>
            </div>
            <div className="p-8 font-mono text-sm leading-relaxed text-zinc-800">
              <div className="flex gap-6 mb-2">
                <span className="text-zinc-300 w-4">1</span>
                <div><span className="text-zinc-400">def</span> <span className="text-black font-bold">score_logic</span>():</div>
              </div>
              <div className="flex gap-6 mb-2">
                <span className="text-zinc-300 w-4">2</span>
                <div className="pl-4 italic text-zinc-400"># Evaluating sub-routine...</div>
              </div>
              <div className="flex gap-6 mb-2">
                <span className="text-zinc-300 w-4">3</span>
                <div className="pl-4">grade = <span className="bg-blue-100 px-1 border-b border-blue-400">calculate_intent()</span></div>
              </div>
              <div className="flex gap-6">
                <span className="text-zinc-300 w-4">4</span>
                <div className="pl-4 flex items-center gap-2">
                   <span className="text-zinc-400">return</span> <Search className="w-3 h-3 text-zinc-400" /> 
                </div>
              </div>
            </div>
            <div className="p-6 bg-zinc-50 border-t border-zinc-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Evaluation Engine</span>
                <Badge className="bg-black text-white hover:bg-black rounded-none border-0 px-3">Grade: A+</Badge>
              </div>
              <p className="text-sm text-zinc-600 font-sans leading-relaxed">
                "Significant improvement in O(n) reduction. Logic correctly accounts for all edge cases defined in the rubric."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-32 border-t border-zinc-200">
    <div className="container mx-auto px-6">
      <SectionHeading 
        subtitle="Pricing"
        title="Predictable scaling"
        description="Scalable infrastructure for individual classrooms or global learning platforms."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-200 divide-x divide-zinc-200">
        <div className="p-10 flex flex-col hover:bg-zinc-50 transition-colors">
          <h3 className="text-xl font-medium text-black mb-2">Open Source</h3>
          <p className="text-3xl font-bold text-black mb-6">$0<span className="text-sm font-normal text-zinc-400">/mo</span></p>
          <ul className="space-y-4 mb-10 text-sm text-zinc-500 flex-1">
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> 50 evaluations/mo</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Community support</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Standard API access</li>
          </ul>
          <Button className="w-full h-12 bg-white text-black border border-zinc-200 hover:bg-zinc-100 rounded-none shadow-none">Get Started</Button>
        </div>
        <div className="p-10 flex flex-col bg-zinc-50">
          <h3 className="text-xl font-medium text-black mb-2">Pro</h3>
          <p className="text-3xl font-bold text-black mb-6">$45<span className="text-sm font-normal text-zinc-400">/mo</span></p>
          <ul className="space-y-4 mb-10 text-sm text-zinc-500 flex-1">
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> 5,000 evaluations/mo</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Logic-engine v2.0</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Priority support</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> LMS Integrations</li>
          </ul>
          <Button className="w-full h-12 bg-black text-white hover:bg-zinc-800 rounded-none border-0 shadow-none">Start 14-day trial</Button>
        </div>
        <div className="p-10 flex flex-col hover:bg-zinc-50 transition-colors">
          <h3 className="text-xl font-medium text-black mb-2">Enterprise</h3>
          <p className="text-3xl font-bold text-black mb-6">Custom</p>
          <ul className="space-y-4 mb-10 text-sm text-zinc-500 flex-1">
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Unlimited evaluations</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Custom model fine-tuning</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Dedicated infrastructure</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> White-label support</li>
          </ul>
          <Button className="w-full h-12 bg-white text-black border border-zinc-200 hover:bg-zinc-100 rounded-none shadow-none">Contact Sales</Button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 border-t border-zinc-200 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded bg-black flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="font-sans font-bold text-lg tracking-tighter text-black uppercase">AutoGrade</span>
          </div>
          <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
            Scalable, intent-aware evaluation infrastructure for classrooms, bootcamps, and global platforms.
          </p>
          <div className="flex gap-6">
            <Twitter className="w-5 h-5 text-zinc-400 hover:text-black cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-zinc-400 hover:text-black cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-zinc-400 hover:text-black cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Platform</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-black transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-black transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-black transition-colors">About</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Customers</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-black transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-zinc-400">
        <p>© 2026 AutoGrade Systems Inc.</p>
        <div className="flex gap-12">
          <span>Islamabad, PK</span>
          <span>Lahore, PK</span>
          <span>Karachi, PK</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection-primary">
      <Navbar />
      <Hero />
      <Features />
      <CodeDemo />
      <Pricing />
      <Footer />
    </div>
  );
}
