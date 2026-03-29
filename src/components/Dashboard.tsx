import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Users, 
  CheckCircle2, 
  BookOpen, 
  Code2, 
  Terminal, 
  FileText,
  Clock,
  TrendingUp,
  Calendar,
  ChevronRight
} from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import { Section } from '../data/syllabus';

interface DashboardProps {
  isProgressLoading: boolean;
  progressPercentage: number;
  completedLessons: string[];
  totalLessons: number;
  syllabus: Section[];
  moduleStats: Record<string, { startTime: string | null, endTime: string | null }>;
  setCurrentView: (view: 'home' | 'lesson' | 'dashboard' | 'ide' | 'notes') => void;
  formatDuration: (start: string | null | undefined, end: string | null | undefined) => string;
  totalInterns: number;
}

export default function Dashboard({
  isProgressLoading,
  progressPercentage,
  completedLessons,
  totalLessons,
  syllabus,
  moduleStats,
  setCurrentView,
  formatDuration,
  totalInterns
}: DashboardProps) {
  if (isProgressLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <LoadingSpinner size={48} label="Loading your progress..." />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Learning Dashboard</h1>
            <p className="text-slate-500 font-medium">Track your course performance and achievements</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-600 rounded-3xl text-white shadow-xl shadow-slate-200">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Trophy size={32} />
            </div>
            <div>
              <div className="text-3xl font-black">{Math.round(progressPercentage)}%</div>
              <div className="text-slate-100 text-xs font-bold uppercase tracking-widest">Overall Progress</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <div className="text-4xl font-black text-slate-900 mb-1">{(1240 + totalInterns).toLocaleString()}+</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Interns</div>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mb-4">
              <CheckCircle2 size={24} />
            </div>
            <div className="text-4xl font-black text-slate-900 mb-1">{completedLessons.length}</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Lessons Completed</div>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
              <BookOpen size={24} />
            </div>
            <div className="text-4xl font-black text-slate-900 mb-1">{totalLessons}</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Lessons</div>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
              <Code2 size={24} />
            </div>
            <div className="text-4xl font-black text-slate-900 mb-1">{syllabus.length}</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Course Modules</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => setCurrentView('ide')}
            className="group p-8 bg-slate-900 rounded-[2.5rem] text-white text-left hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
          >
            <div className="w-14 h-14 bg-slate-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Terminal size={28} />
            </div>
            <h3 className="text-2xl font-black mb-2">Java IDE</h3>
            <p className="text-slate-400 font-medium text-sm">Write, compile, and run Java code directly in your browser with AI assistance.</p>
          </button>
          <button 
            onClick={() => setCurrentView('notes')}
            className="group p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] text-left hover:border-slate-500 transition-all shadow-sm hover:shadow-xl hover:shadow-slate-50/50"
          >
            <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-slate-50 group-hover:text-slate-600">
              <FileText size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-slate-600 transition-colors">Preparation Notes</h3>
            <p className="text-slate-500 font-medium text-sm">Access curated study guides and interview preparation material.</p>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed Breakdown */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} className="text-slate-500" />
                <h3 className="text-xl font-bold text-slate-900">Module Breakdown</h3>
              </div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Progress per section</span>
            </div>
            <div className="p-8 space-y-8">
              {syllabus.map(section => {
                const sectionLessons = section.lessons.length;
                const sectionCompleted = section.lessons.filter((l: any) => completedLessons.includes(l.id)).length;
                const sectionProgress = (sectionCompleted / sectionLessons) * 100;
                
                return (
                  <div key={section.id} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${sectionProgress === 100 ? 'bg-slate-500' : 'bg-slate-300'}`} />
                        <span className="font-bold text-slate-700">{section.title}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-slate-400 uppercase">{sectionCompleted} / {sectionLessons}</span>
                        <span className="text-sm font-black text-slate-600 w-12 text-right">{Math.round(sectionProgress)}%</span>
                      </div>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${sectionProgress}%` }}
                        className={`h-full transition-all duration-1000 ${sectionProgress === 100 ? 'bg-slate-500' : 'bg-slate-400'}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Activity Mock */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex items-center gap-2">
              <Clock size={20} className="text-blue-500" />
              <h3 className="text-xl font-bold text-slate-900">Recent Activity</h3>
            </div>
            <div className="p-6 space-y-6">
              {completedLessons.length > 0 ? (
                completedLessons.slice(-5).reverse().map((lessonId, i) => {
                  const lesson = syllabus.flatMap(s => s.lessons).find(l => l.id === lessonId);
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                        <CheckCircle2 size={18} className="text-slate-500" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">{lesson?.title || 'Lesson Completed'}</p>
                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Completed Recently</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12">
                  <Calendar size={32} className="text-slate-200 mx-auto mb-4" />
                  <p className="text-sm text-slate-400 font-medium">No recent activity yet</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Module Completion Timeline */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Completion Timeline</h3>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Module Timestamps</span>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {syllabus.map((section, idx) => {
                const stats = moduleStats[section.id];
                const isCompleted = section.lessons.every((l: any) => completedLessons.includes(l.id));
                
                return (
                  <div key={section.id} className="flex items-start gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full border-4 transition-all duration-500 ${isCompleted ? 'bg-slate-500 border-slate-100' : stats?.startTime ? 'bg-amber-500 border-amber-100 animate-pulse' : 'bg-slate-200 border-slate-50'}`} />
                      {idx !== syllabus.length - 1 && <div className="w-0.5 h-full bg-slate-100 min-h-[60px]" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h4 className="font-bold text-slate-900 group-hover:text-slate-600 transition-colors">{section.title}</h4>
                        <div className="flex items-center gap-2">
                          {isCompleted ? (
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-slate-50 px-2 py-1 rounded-md">Completed</span>
                          ) : stats?.startTime ? (
                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-1 rounded-md">In Progress</span>
                          ) : (
                             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded-md">Not Started</span>
                          )}
                          <button 
                            onClick={() => setCurrentView('lesson')}
                            className="p-1 hover:bg-slate-100 rounded-md transition-colors text-slate-400 hover:text-slate-600"
                          >
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                        <div className="space-y-1">
                          <p className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Started At</p>
                          <p className="text-slate-600 font-medium">
                            {stats?.startTime ? new Date(stats.startTime).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Finished At</p>
                          <p className="text-slate-600 font-medium">
                            {stats?.endTime ? new Date(stats.endTime).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Time Taken</p>
                          <p className="text-slate-900 font-black">{formatDuration(stats?.startTime, stats?.endTime)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Ready for the next challenge?</h3>
            <p className="text-slate-400">Jump back into your current lesson and keep learning.</p>
          </div>
          <button 
            onClick={() => setCurrentView('lesson')}
            className="px-8 py-4 bg-slate-500 text-white rounded-2xl font-black hover:bg-slate-400 transition-all shadow-xl shadow-slate-500/20"
          >
            Continue Learning
          </button>
        </div>
      </motion.div>
    </div>
  );
}
