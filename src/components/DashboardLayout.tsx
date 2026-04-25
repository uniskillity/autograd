import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  Settings, 
  LogOut,
  Bell,
  Terminal,
  User,
  Users,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface SidebarItemProps {
  to: string;
  icon: any;
  label: string;
}

const SidebarItem = ({ to, icon: Icon, label }: SidebarItemProps) => (
  <NavLink 
    to={to}
    className={({ isActive }) => `
      flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors
      ${isActive 
        ? 'bg-zinc-100 text-black border-l-2 border-black -ml-[1px]' 
        : 'text-zinc-500 hover:text-black hover:bg-zinc-50'
      }
    `}
  >
    <Icon className="w-4 h-4" />
    {label}
  </NavLink>
);

export default function DashboardLayout({ children, role = 'student' }: { children: React.ReactNode, role?: 'student' | 'teacher' }) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-200 flex flex-col fixed inset-y-0 left-0 z-50 bg-white">
        <div className="p-8">
          <Link to="/" className="flex items-center gap-3 mb-12">
            <div className="w-6 h-6 rounded bg-black flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-sans font-bold text-sm tracking-tighter text-black uppercase">AutoGrade</span>
          </Link>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-4 mb-4">Perspective</p>
              <div className="space-y-1">
                <SidebarItem to={role === 'teacher' ? '/teacher' : '/dashboard'} icon={LayoutDashboard} label="Overview" />
                <SidebarItem to="/assignments" icon={BookOpen} label="Assignments" />
                {role === 'student' ? (
                  <SidebarItem to="/grades" icon={GraduationCap} label="My Grades" />
                ) : (
                  <SidebarItem to="/students" icon={Users} label="Students" />
                )}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-4 mb-4">Workspace</p>
              <div className="space-y-1">
                <SidebarItem to="/settings" icon={Settings} label="Settings" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto p-8">
          <div className="p-4 bg-zinc-50 border border-zinc-200 mb-6">
            <p className="text-[10px] font-bold text-black uppercase tracking-widest mb-2">Pro Plan</p>
            <div className="flex items-end justify-between mb-2">
              <p className="text-xl font-bold">1.2k</p>
              <p className="text-[10px] text-zinc-400">/ 5k evals</p>
            </div>
            <div className="w-full bg-zinc-200 h-1 overflow-hidden">
              <div className="bg-black h-full w-[24%]" />
            </div>
          </div>
          
          <Button variant="ghost" className="w-full justify-start gap-3 px-4 text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-colors rounded-none">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-64 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-zinc-200 flex items-center justify-between px-10 bg-white/80 backdrop-blur sticky top-0 z-40">
          <div className="flex items-center gap-6 flex-1 max-w-xl">
             <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="Search assignments, students..." 
                  className="w-full h-9 pl-10 pr-4 bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-1 focus:ring-black rounded-none"
                />
             </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="relative text-zinc-400 hover:text-black">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-black rounded-full border border-white" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer group">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs font-bold leading-tight text-black">{role === 'teacher' ? 'Prof. Sarah Chen' : 'Alex Rivers'}</p>
                    <p className="text-[10px] text-zinc-400 leading-tight uppercase font-bold tracking-widest">{role}</p>
                  </div>
                  <Avatar className="w-8 h-8 rounded-none border border-zinc-200 ring-offset-2 group-hover:ring-2 ring-zinc-100 transition-all">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${role}`} />
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-none border-zinc-200 shadow-xl" align="end">
                <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-zinc-400">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-sm rounded-none">Profile</DropdownMenuItem>
                <DropdownMenuItem className="text-sm rounded-none">Security</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-sm text-red-500 rounded-none">Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        <div className="p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
import { Link } from 'react-router-dom';
