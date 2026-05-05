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
  ChevronRight,
  Flame,
  Award,
  Target,
  Zap,
  Star,
  BarChart3,
  Lightbulb,
  PlayCircle
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

        {/* Comprehensive Overview Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Learning Performance Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Learning Performance</h3>
                <p className="text-indigo-100 text-sm font-medium">Your academic metrics</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-black">{completedLessons.length}</div>
                <div className="text-xs text-indigo-100 font-medium uppercase tracking-wider">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black">{totalLessons - completedLessons.length}</div>
                <div className="text-xs text-indigo-100 font-medium uppercase tracking-wider">Remaining</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black">{Math.round(progressPercentage)}%</div>
                <div className="text-xs text-indigo-100 font-medium uppercase tracking-wider">Progress</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/10 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Course Completion</span>
                <span className="text-sm font-bold">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  className="h-full bg-white transition-all duration-1000 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Time Investment Card */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Time Invested</h3>
                <p className="text-green-100 text-sm font-medium">Study hours</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Clock size={20} />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Hours</span>
                <span className="text-lg font-black">{(completedLessons.length * 2.5).toFixed(1)}h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">This Week</span>
                <span className="text-lg font-black">{Math.min(completedLessons.length * 0.8, 12).toFixed(1)}h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Avg/Lesson</span>
                <span className="text-lg font-black">2.5h</span>
              </div>
            </div>
          </div>

          {/* Achievement Summary Card */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Achievements</h3>
                <p className="text-amber-100 text-sm font-medium">Milestones reached</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Award size={20} />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Badges Earned</span>
                <span className="text-lg font-black">
                  {[
                    completedLessons.length > 0,
                    completedLessons.length >= 5,
                    syllabus.some(s => s.lessons.every(l => completedLessons.includes(l.id))),
                    progressPercentage >= 50
                  ].filter(Boolean).length}/4
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Current Streak</span>
                <span className="text-lg font-black">{Math.floor(completedLessons.length / 3)} days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">XP Points</span>
                <span className="text-lg font-black">{completedLessons.length * 25 + Math.floor(completedLessons.length / 3) * 50}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Insights & Recommendations */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-slate-600 text-white rounded-2xl flex items-center justify-center">
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Learning Insights</h3>
              <p className="text-slate-600 font-medium">Personalized recommendations based on your progress</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Current Focus */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Target size={18} className="text-blue-600" />
                <h4 className="font-bold text-slate-900">Current Focus</h4>
              </div>
              <div className="space-y-2">
                {(() => {
                  const incompleteSections = syllabus.filter(section => 
                    !section.lessons.every(l => completedLessons.includes(l.id))
                  );
                  const currentSection = incompleteSections[0];
                  return currentSection ? (
                    <>
                      <p className="text-sm font-bold text-slate-700">{currentSection.title}</p>
                      <p className="text-xs text-slate-600">
                        {currentSection.lessons.filter(l => completedLessons.includes(l.id)).length} of {currentSection.lessons.length} lessons completed
                      </p>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 transition-all duration-1000"
                          style={{ 
                            width: `${(currentSection.lessons.filter(l => completedLessons.includes(l.id)).length / currentSection.lessons.length) * 100}%` 
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-slate-600">All sections completed!</p>
                  );
                })()}
              </div>
            </div>

            {/* Next Milestone */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Star size={18} className="text-purple-600" />
                <h4 className="font-bold text-slate-900">Next Milestone</h4>
              </div>
              <div className="space-y-2">
                {progressPercentage < 25 ? (
                  <>
                    <p className="text-sm font-bold text-slate-700">Foundation Builder</p>
                    <p className="text-xs text-slate-600">Complete 25% of the course</p>
                    <p className="text-xs font-bold text-purple-600">{Math.max(0, 25 - progressPercentage).toFixed(0)}% to go</p>
                  </>
                ) : progressPercentage < 50 ? (
                  <>
                    <p className="text-sm font-bold text-slate-700">Half Way Hero</p>
                    <p className="text-xs text-slate-600">Complete 50% of the course</p>
                    <p className="text-xs font-bold text-purple-600">{Math.max(0, 50 - progressPercentage).toFixed(0)}% to go</p>
                  </>
                ) : progressPercentage < 75 ? (
                  <>
                    <p className="text-sm font-bold text-slate-700">Advanced Learner</p>
                    <p className="text-xs text-slate-600">Complete 75% of the course</p>
                    <p className="text-xs font-bold text-purple-600">{Math.max(0, 75 - progressPercentage).toFixed(0)}% to go</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-bold text-slate-700">Course Master</p>
                    <p className="text-xs text-slate-600">Complete 100% of the course</p>
                    <p className="text-xs font-bold text-purple-600">{Math.max(0, 100 - progressPercentage).toFixed(0)}% to go</p>
                  </>
                )}
              </div>
            </div>

            {/* Study Recommendation */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={18} className="text-amber-600" />
                <h4 className="font-bold text-slate-900">Study Tip</h4>
              </div>
              <div className="space-y-2">
                {completedLessons.length === 0 ? (
                  <>
                    <p className="text-sm font-bold text-slate-700">Get Started!</p>
                    <p className="text-xs text-slate-600">Begin with Course Overview lessons to build foundation</p>
                  </>
                ) : completedLessons.length < 5 ? (
                  <>
                    <p className="text-sm font-bold text-slate-700">Consistency is Key</p>
                    <p className="text-xs text-slate-600">Try to complete 1 lesson daily to maintain momentum</p>
                  </>
                ) : progressPercentage < 50 ? (
                  <>
                    <p className="text-sm font-bold text-slate-700">Deep Dive Time</p>
                    <p className="text-xs text-slate-600">Focus on understanding concepts rather than speed</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-bold text-slate-700">Apply Your Knowledge</p>
                    <p className="text-xs text-slate-600">Use the IDE to practice coding concepts learned</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Streak & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Learning Streak */}
          <div className="lg:col-span-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Flame size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black">Learning Streak</h3>
                  <p className="text-orange-100 text-sm font-medium">Keep the momentum going!</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-black">{Math.floor(completedLessons.length / 3)}</div>
                <div className="text-orange-100 text-xs font-bold uppercase tracking-widest">Days Active</div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 7 }, (_, i) => {
                const isActive = i < Math.min(Math.floor(completedLessons.length / 3) + 1, 7);
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                      isActive 
                        ? 'bg-white text-orange-600 shadow-lg scale-110' 
                        : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {isActive ? '✓' : ''}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-medium text-orange-100">
                {Math.floor(completedLessons.length / 3) >= 7 ? 'Amazing consistency!' : 'Complete lessons daily to build your streak'}
              </span>
              <div className="flex items-center gap-1">
                <Zap size={16} className="text-yellow-300" />
                <span className="text-sm font-bold text-yellow-300">{Math.floor(completedLessons.length / 3) * 10} XP</span>
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award size={20} className="text-purple-600" />
              <h3 className="text-xl font-bold text-slate-900">Achievements</h3>
            </div>
            <div className="space-y-3">
              {[
                { 
                  icon: <Star size={16} />, 
                  label: "First Steps", 
                  earned: completedLessons.length > 0,
                  color: "text-yellow-500",
                  bg: "bg-yellow-50"
                },
                { 
                  icon: <Target size={16} />, 
                  label: "Quick Learner", 
                  earned: completedLessons.length >= 5,
                  color: "text-blue-500",
                  bg: "bg-blue-50"
                },
                { 
                  icon: <Trophy size={16} />, 
                  label: "Module Master", 
                  earned: syllabus.some(s => s.lessons.every(l => completedLessons.includes(l.id))),
                  color: "text-purple-500",
                  bg: "bg-purple-50"
                },
                { 
                  icon: <Zap size={16} />, 
                  label: "Speed Demon", 
                  earned: progressPercentage >= 50,
                  color: "text-red-500",
                  bg: "bg-red-50"
                }
              ].map((badge, i) => (
                <div 
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                    badge.earned 
                      ? `${badge.bg} border-2 border-transparent` 
                      : 'bg-slate-50 border-2 border-slate-100 opacity-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${badge.earned ? badge.bg : 'bg-slate-100'}`}>
                    <div className={badge.earned ? badge.color : 'text-slate-400'}>
                      {badge.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-bold ${badge.earned ? 'text-slate-900' : 'text-slate-400'}`}>
                      {badge.label}
                    </p>
                  </div>
                  {badge.earned && (
                    <CheckCircle2 size={14} className="text-green-500" />
                  )}
                </div>
              ))}
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

        {/* Upcoming Lessons Roadmap */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Learning Roadmap</h3>
                <p className="text-slate-600 font-medium">Your next lessons and recommendations</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentView('lesson')}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <PlayCircle size={16} />
              Continue Learning
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(() => {
              const allLessons = syllabus.flatMap(section => 
                section.lessons.map(lesson => ({
                  ...lesson,
                  sectionTitle: section.title,
                  sectionId: section.id
                }))
              );
              
              const upcomingLessons = allLessons.filter(lesson => !completedLessons.includes(lesson.id)).slice(0, 6);
              const currentProgress = completedLessons.length;
              
              return upcomingLessons.length > 0 ? upcomingLessons.map((lesson, index) => (
                <div key={lesson.id} className="bg-white rounded-2xl p-4 border border-blue-100 hover:border-blue-300 transition-all hover:shadow-md group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    {index === 0 && (
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">NEXT UP</span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mb-2">{lesson.sectionTitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen size={12} className="text-slate-400" />
                      <span className="text-xs text-slate-500">
                        {lesson.subTopics?.length || 0} topics
                      </span>
                    </div>
                    <button 
                      onClick={() => setCurrentView('lesson')}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Start →
                    </button>
                  </div>
                </div>
              )) : (
                <div className="col-span-full text-center py-12">
                  <Trophy size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Congratulations! 🎉</h4>
                  <p className="text-slate-600 font-medium">You've completed all available lessons!</p>
                </div>
              );
            })()}
          </div>
          
          {completedLessons.length > 0 && (
            <div className="mt-6 p-4 bg-white/50 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BarChart3 size={20} className="text-blue-600" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Your Progress</p>
                    <p className="text-xs text-slate-600">
                      {completedLessons.length} of {totalLessons} lessons completed ({Math.round(progressPercentage)}%)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-blue-600">{Math.round(progressPercentage)}%</span>
                </div>
              </div>
            </div>
          )}
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

          {/* Study Time Analytics */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 size={20} className="text-green-600" />
                <h3 className="text-xl font-bold text-slate-900">Study Time Analytics</h3>
              </div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Last 7 Days</span>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Weekly Chart */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Weekly Activity</h4>
                  <div className="space-y-3">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                      const hours = Math.random() * 4 + 1; // Mock data
                      const isActive = index < 5; // Show activity for weekdays
                      return (
                        <div key={day} className="flex items-center gap-4">
                          <span className="text-sm font-bold text-slate-600 w-8">{day}</span>
                          <div className="flex-1 h-8 bg-slate-100 rounded-lg overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${isActive ? (hours / 5) * 100 : 0}%` }}
                              className={`h-full transition-all duration-1000 ${
                                isActive ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-slate-200'
                              }`}
                            />
                          </div>
                          <span className="text-sm font-bold text-slate-700 w-12 text-right">
                            {isActive ? `${hours.toFixed(1)}h` : '0h'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Study Stats */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Study Statistics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={16} className="text-green-600" />
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Total Time</span>
                      </div>
                      <div className="text-2xl font-black text-slate-900">
                        {(completedLessons.length * 2.5).toFixed(1)}h
                      </div>
                      <div className="text-xs text-slate-600 font-medium">This week</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={16} className="text-blue-600" />
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Avg Daily</span>
                      </div>
                      <div className="text-2xl font-black text-slate-900">
                        {((completedLessons.length * 2.5) / 7).toFixed(1)}h
                      </div>
                      <div className="text-xs text-slate-600 font-medium">Per day</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Target size={16} className="text-purple-600" />
                        <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Best Day</span>
                      </div>
                      <div className="text-2xl font-black text-slate-900">Wed</div>
                      <div className="text-xs text-slate-600 font-medium">4.2 hours</div>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap size={16} className="text-amber-600" />
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Focus Score</span>
                      </div>
                      <div className="text-2xl font-black text-slate-900">92%</div>
                      <div className="text-xs text-slate-600 font-medium">Excellent</div>
                    </div>
                  </div>
                  
                  {/* Study Tips */}
                  <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb size={16} className="text-indigo-600" />
                      <span className="text-sm font-bold text-indigo-700">Study Tip</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      You're most productive on Wednesdays! Consider scheduling your most challenging topics during peak focus hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Progress Visualization */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Star size={20} className="text-purple-600" />
              <h3 className="text-xl font-bold text-slate-900">Skills Progress</h3>
            </div>
            <div className="space-y-4">
              {[
                { skill: "Core Java", progress: Math.min(100, (completedLessons.filter(l => l.includes('java') || l.includes('core')).length / 9) * 100), color: "from-red-400 to-red-600", icon: "☕" },
                { skill: "Spring Framework", progress: Math.min(100, (completedLessons.filter(l => l.includes('spring')).length / 6) * 100), color: "from-green-400 to-green-600", icon: "🍃" },
                { skill: "Web Development", progress: Math.min(100, (completedLessons.filter(l => l.includes('web') || l.includes('html') || l.includes('css') || l.includes('js')).length / 4) * 100), color: "from-blue-400 to-blue-600", icon: "🌐" },
                { skill: "Database Skills", progress: Math.min(100, (completedLessons.filter(l => l.includes('sql') || l.includes('db') || l.includes('jdbc')).length / 2) * 100), color: "from-amber-400 to-amber-600", icon: "🗄️" },
                { skill: "Problem Solving", progress: Math.min(100, (completedLessons.length / totalLessons) * 100), color: "from-purple-400 to-purple-600", icon: "🧩" }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-bold text-slate-700">{skill.skill}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-600">{Math.round(skill.progress)}%</span>
                  </div>
                  <div className="h-2 bg-white/70 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 rounded-full`}
                    />
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-3 bg-white/50 rounded-xl border border-purple-200">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy size={14} className="text-purple-600" />
                  <span className="text-xs font-bold text-purple-700">Skill Level</span>
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  {progressPercentage >= 80 ? "Expert Level - You're mastering the curriculum!" :
                   progressPercentage >= 60 ? "Advanced Level - Great progress!" :
                   progressPercentage >= 40 ? "Intermediate Level - Keep building!" :
                   progressPercentage >= 20 ? "Beginner Level - Good start!" :
                   "Just Starting - Begin your learning journey!"}
                </p>
              </div>
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
