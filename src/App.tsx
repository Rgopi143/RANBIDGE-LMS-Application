import { useState, useEffect, useRef } from 'react';
import { syllabus } from './data/syllabus';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  Code2, 
  Coffee,
  ArrowLeft,
  ArrowRight,
  LogOut,
  User as UserIcon,
  CheckCircle2,
  CheckCircle,
  HelpCircle,
  Trophy,
  Users,
  Terminal,
  LayoutDashboard,
  Loader2,
  FileText,
  Copy,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { User } from '@supabase/supabase-js';
import { supabase } from './supabase';
import Auth from './components/Auth';
import LandingPage from './components/LandingPage';
import LoadingSpinner from './components/LoadingSpinner';
import CodingSpace from './components/CodingSpace';
import ErrorBoundary from './components/ErrorBoundary';
import Dashboard from './components/Dashboard';
import LMSDashboard from './components/LMSDashboard';
import CourseCatalog from './components/CourseCatalog';
import AdminAuth from './components/AdminAuth';
import AdminDashboard from './components/AdminDashboard';
import { subTopicData } from './data/subTopicContent';
import InstallGuide from './components/InstallGuide';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [admin, setAdmin] = useState<any>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isProgressLoading, setIsProgressLoading] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showAdminAuth, setShowAdminAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [currentSectionIdx, setCurrentSectionIdx] = useState(() => {
    const saved = localStorage.getItem('appCurrentSectionIdx');
    return saved ? JSON.parse(saved) : 0;
  });
  const [currentLessonIdx, setCurrentLessonIdx] = useState(() => {
    const saved = localStorage.getItem('appCurrentLessonIdx');
    return saved ? JSON.parse(saved) : 0;
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState<'home' | 'landing' | 'lms' | 'lesson' | 'playground' | 'notes' | 'assignments' | 'references' | 'admin'>(() => {
    const saved = localStorage.getItem('appCurrentView');
    return saved ? JSON.parse(saved) : 'home';
  });
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [moduleStats, setModuleStats] = useState<Record<string, { startTime: string | null, endTime: string | null }>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'course-overview': true,
    'core-java': false,
    'java-intermediate': false,
    'java-advanced': false,
    'frontend': false,
    'sql': false,
    'mongodb': false,
    'projects': false
  });
  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({});
  const [selectedSubTopic, setSelectedSubTopic] = useState<string | null>(null);
  const [totalInterns, setTotalInterns] = useState<number>(0);
  const mainContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    localStorage.setItem('appCurrentView', JSON.stringify(currentView));
    localStorage.setItem('appCurrentSectionIdx', JSON.stringify(currentSectionIdx));
    localStorage.setItem('appCurrentLessonIdx', JSON.stringify(currentLessonIdx));
  }, [currentView, currentSectionIdx, currentLessonIdx]);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSectionIdx, currentLessonIdx]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsAuthReady(true);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsAuthReady(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setCompletedLessons([]);
      return;
    }

    const fetchProgress = async () => {
      setIsProgressLoading(true);
      try {
        const response = await fetch(`/api/progress/${user.id}`);
        const contentType = response.headers.get('content-type');
        
        if (response.ok && contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setCompletedLessons(data.completedLessons || []);
          setModuleStats(data.moduleStats || {});
        } else {
          // Fallback to Supabase if MongoDB is not connected/fails or returns non-JSON
          const { data, error } = await supabase
            .from('user_progress')
            .select('completed_lessons, module_stats')
            .eq('user_id', user.id)
            .single();

          if (!error && data) {
            setCompletedLessons(data.completed_lessons || []);
            setModuleStats(data.module_stats || {});
          }
        }
      } catch (err) {
        console.error('Error fetching progress from MongoDB:', err);
      }
      setIsProgressLoading(false);
    };

    const fetchTotalInterns = async () => {
      try {
        const response = await fetch('/api/interns/count');
        const contentType = response.headers.get('content-type');

        if (response.ok && contentType && contentType.includes('application/json')) {
          const { count } = await response.json();
          setTotalInterns(count);
        } else {
          // Fallback to Supabase
          const { count, error } = await supabase
            .from('user_progress')
            .select('*', { count: 'exact', head: true });
          
          if (!error && count !== null) {
            setTotalInterns(count);
          }
        }
      } catch (err) {
        console.error('Error fetching total interns:', err);
      }
    };

    fetchTotalInterns();
  }, [user]);

  // Helper to count total trackable items
  const totalItemsCount = syllabus.reduce((acc, section) => {
    return acc + section.lessons.reduce((lAcc, lesson) => {
      return lAcc + (lesson.subTopics && lesson.subTopics.length > 0 ? lesson.subTopics.length : 1);
    }, 0);
  }, 0);

  const progressPercentage = totalItemsCount > 0 ? (completedLessons.length / totalItemsCount) * 100 : 0;

  const toggleLessonCompletion = async (lessonId: string) => {
    if (!user) return;
    
    const trackingId = selectedSubTopic ? `${lessonId}:${selectedSubTopic}` : lessonId;
    const isCompleted = completedLessons.includes(trackingId);
    
    let newCompletedLessons = isCompleted
      ? completedLessons.filter(id => id !== trackingId)
      : [...completedLessons, trackingId];

    // If marking a sub-topic as complete, check if all sub-topics for this lesson are now done
    if (!isCompleted && selectedSubTopic) {
      const currentLessonData = syllabus[currentSectionIdx].lessons[currentLessonIdx];
      if (currentLessonData.subTopics) {
        const allSubTopicsDone = currentLessonData.subTopics.every(st => 
          newCompletedLessons.includes(`${lessonId}:${st}`)
        );
        if (allSubTopicsDone && !newCompletedLessons.includes(lessonId)) {
          newCompletedLessons.push(lessonId);
        }
      }
    }

    const section = syllabus.find(s => s.lessons.some(l => l.id === lessonId));
    let newModuleStats = { ...moduleStats };
    
    if (section) {
      const allTrackingItemsInModule: string[] = [];
      section.lessons.forEach(l => {
        if (l.subTopics && l.subTopics.length > 0) {
          l.subTopics.forEach(st => allTrackingItemsInModule.push(`${l.id}:${st}`));
          // Also include the lessonId itself in the requirement if it's meant to be marked complete
          allTrackingItemsInModule.push(l.id);
        } else {
          allTrackingItemsInModule.push(l.id);
        }
      });

      const completedInModule = newCompletedLessons.filter(id => allTrackingItemsInModule.includes(id));
      const currentStats = moduleStats[section.id] || { startTime: null, endTime: null };
      
      if (!currentStats.startTime && !isCompleted) {
        currentStats.startTime = new Date().toISOString();
      }

      if (completedInModule.length === allTrackingItemsInModule.length) {
        if (!currentStats.endTime) {
          newModuleStats[section.id] = { ...currentStats, endTime: new Date().toISOString() };
        }
      } else {
        if (currentStats.endTime) {
          newModuleStats[section.id] = { ...currentStats, endTime: null };
        } else {
          newModuleStats[section.id] = currentStats;
        }
      }
    }

    setIsActionLoading(true);
    try {
      setCompletedLessons(newCompletedLessons);
      setModuleStats(newModuleStats);

      const { error } = await supabase
        .from('user_progress')
        .upsert({ 
          user_id: user.id, 
          completed_lessons: newCompletedLessons,
          module_stats: newModuleStats
        }, { onConflict: 'user_id' });

      if (error) throw error;

      // Auto-navigate to next topic if marking as complete
      if (!isCompleted) {
        setTimeout(nextLesson, 300);
      }
    } catch (error) {
      console.error('Error updating progress:', error);
    } finally {
      setIsActionLoading(false);
    }
  };

  const handlePlayground = () => {
    setCurrentView('playground');
  };

  const handleNotes = () => {
    setCurrentView('notes');
  };

  const handleAssignments = () => {
    setCurrentView('assignments');
  };

  const handleLanding = () => {
    setCurrentView('landing');
  };

  const handleReferences = () => {
    setCurrentView('references');
  };

  const handleLogout = async () => {
    setIsActionLoading(true);
    try {
      await supabase.auth.signOut();
      setUser(null);
      setAdmin(null);
      setCurrentView('lms');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleAdminLogin = (adminData: any) => {
    setAdmin(adminData);
    setShowAdminAuth(false);
    setCurrentView('admin');
  };

  const handleAdminLogout = () => {
    setAdmin(null);
    setCurrentView('lms');
  };

  const currentSection = syllabus[currentSectionIdx] || syllabus[0];
  const currentLesson = (currentSection && currentSection.lessons) ? (currentSection.lessons[currentLessonIdx] || currentSection.lessons[0]) : { id: 'error', title: 'Error', content: 'Lesson not found' };

  const formatDuration = (start: string | null | undefined, end: string | null | undefined) => {
    if (!start) return '—';
    const startTime = new Date(start).getTime();
    const endTime = end ? new Date(end).getTime() : new Date().getTime();
    const diff = endTime - startTime;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    let result = '';
    if (hours > 0) result += `${hours}h `;
    result += `${minutes}m`;
    
    if (!end) return `${result} (Active)`;
    return result;
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const selectLesson = (sIdx: number, lIdx: number, subTopic: string | null = null) => {
    const sectionId = syllabus[sIdx].id;
    
    if (!moduleStats[sectionId]?.startTime) {
      const newModuleStats = {
        ...moduleStats,
        [sectionId]: {
          startTime: new Date().toISOString(),
          endTime: moduleStats[sectionId]?.endTime || null
        }
      };
      setModuleStats(newModuleStats);
      
      if (user) {
        supabase.from('user_progress').upsert({
          user_id: user.id,
          module_stats: newModuleStats
        }, { onConflict: 'user_id' }).then(({ error }) => {
          if (error) console.error('Error saving module start time:', error);
        });
      }
    }

    setCurrentSectionIdx(sIdx);
    setCurrentLessonIdx(lIdx);
    setSelectedSubTopic(subTopic);
    setCurrentView('lesson');
    setExpandedSections(prev => ({
      ...prev,
      [syllabus[sIdx].id]: true
    }));
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const nextLesson = () => {
    const currentLesson = syllabus[currentSectionIdx].lessons[currentLessonIdx];
    
    // Handle sub-topics navigation first
    if (currentLesson.subTopics && currentLesson.subTopics.length > 0) {
      if (selectedSubTopic === null) {
        setSelectedSubTopic(currentLesson.subTopics[0]);
        return;
      }
      
      const subIdx = currentLesson.subTopics.indexOf(selectedSubTopic);
      if (subIdx < currentLesson.subTopics.length - 1) {
        setSelectedSubTopic(currentLesson.subTopics[subIdx + 1]);
        return;
      }
    }

    // Fall back to main lesson navigation
    if (currentLessonIdx < syllabus[currentSectionIdx].lessons.length - 1) {
      const nextLIdx = currentLessonIdx + 1;
      const nextLessonData = syllabus[currentSectionIdx].lessons[nextLIdx];
      setCurrentLessonIdx(nextLIdx);
      setSelectedSubTopic(null); // Reset sub-topic for the new lesson
      
      // Auto-expand if the next lesson has sub-topics
      if (nextLessonData.subTopics && nextLessonData.subTopics.length > 0) {
        setExpandedLessons(prev => ({ ...prev, [nextLessonData.id]: true }));
      }
    } else if (currentSectionIdx < syllabus.length - 1) {
      const nextSIdx = currentSectionIdx + 1;
      const firstLessonOfNextSection = syllabus[nextSIdx].lessons[0];
      setCurrentSectionIdx(nextSIdx);
      setCurrentLessonIdx(0);
      setSelectedSubTopic(null);
      setExpandedSections(prev => ({
        ...prev,
        [syllabus[nextSIdx].id]: true
      }));
      
      // Auto-expand first lesson if it has sub-topics
      if (firstLessonOfNextSection.subTopics && firstLessonOfNextSection.subTopics.length > 0) {
        setExpandedLessons(prev => ({ ...prev, [firstLessonOfNextSection.id]: true }));
      }
    }
  };

  const prevLesson = () => {
    const currentLesson = syllabus[currentSectionIdx].lessons[currentLessonIdx];
    
    // Handle sub-topics navigation back
    if (currentLesson.subTopics && currentLesson.subTopics.length > 0 && selectedSubTopic !== null) {
      const subIdx = currentLesson.subTopics.indexOf(selectedSubTopic);
      if (subIdx > 0) {
        setSelectedSubTopic(currentLesson.subTopics[subIdx - 1]);
        return;
      } else {
        setSelectedSubTopic(null);
        return;
      }
    }

    // Fall back to main lesson navigation back
    if (currentLessonIdx > 0) {
      const prevLIdx = currentLessonIdx - 1;
      const prevLessonData = syllabus[currentSectionIdx].lessons[prevLIdx];
      setCurrentLessonIdx(prevLIdx);
      
      // If the prev lesson has sub-topics, go to the last one
      if (prevLessonData.subTopics && prevLessonData.subTopics.length > 0) {
        setSelectedSubTopic(prevLessonData.subTopics[prevLessonData.subTopics.length - 1]);
        setExpandedLessons(prev => ({ ...prev, [prevLessonData.id]: true }));
      } else {
        setSelectedSubTopic(null);
      }
    } else if (currentSectionIdx > 0) {
      const prevSIdx = currentSectionIdx - 1;
      const lastLessonOfPrevSection = syllabus[prevSIdx].lessons[syllabus[prevSIdx].lessons.length - 1];
      setCurrentSectionIdx(prevSIdx);
      setCurrentLessonIdx(syllabus[prevSIdx].lessons.length - 1);
      
      if (lastLessonOfPrevSection.subTopics && lastLessonOfPrevSection.subTopics.length > 0) {
        setSelectedSubTopic(lastLessonOfPrevSection.subTopics[lastLessonOfPrevSection.subTopics.length - 1]);
        setExpandedLessons(prev => ({ ...prev, [lastLessonOfPrevSection.id]: true }));
      } else {
        setSelectedSubTopic(null);
      }
      
      setExpandedSections(prev => ({
        ...prev,
        [syllabus[prevSIdx].id]: true
      }));
    }
  };

  const filteredSyllabus = syllabus.map(section => {
    const matchingLessons = section.lessons.filter(lesson =>
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sectionMatches = section.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    return {
      ...section,
      lessons: searchQuery ? matchingLessons : section.lessons,
      hasMatch: sectionMatches || matchingLessons.length > 0
    };
  }).filter(section => section.hasMatch);

  useEffect(() => {
    if (searchQuery) {
      const newExpanded: Record<string, boolean> = {};
      filteredSyllabus.forEach(section => {
        newExpanded[section.id] = true;
      });
      setExpandedSections(prev => ({ ...prev, ...newExpanded }));
    }
  }, [searchQuery]);

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-slate-600 border-t-transparent rounded-full mb-4"
        />
        <p className="text-slate-600 font-medium">Loading...</p>
      </div>
    );
  }

  if (showAdminAuth) {
    return (
      <div className="relative">
        <button 
          onClick={() => setShowAdminAuth(false)}
          className="fixed top-6 left-6 z-[60] flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-slate-100 font-bold text-slate-600 hover:text-slate-900 transition-all group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
          Back to Login
        </button>
        <AdminAuth 
          onAdminLogin={handleAdminLogin}
          onBack={() => setShowAdminAuth(false)}
        />
      </div>
    );
  }

  if (admin) {
    return <AdminDashboard admin={admin} onLogout={handleAdminLogout} />;
  }

  if (!user && !admin) {
    if (showAuth) {
      return (
        <div className="relative">
          <button 
            onClick={() => setShowAuth(false)}
            className="fixed top-6 left-6 z-[60] flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-slate-100 font-bold text-slate-600 hover:text-slate-900 transition-all group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            Back to Dashboard
          </button>
          <Auth 
            initialMode={authMode as any} 
          />
        </div>
      );
    }
    
    if (showAdminAuth) {
      return (
        <div className="relative">
          <button 
            onClick={() => setShowAdminAuth(false)}
            className="fixed top-6 left-6 z-[60] flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-slate-100 font-bold text-slate-600 hover:text-slate-900 transition-all group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            Back to Dashboard
          </button>
          <AdminAuth 
             onAdminLogin={handleAdminLogin}
             onBack={() => setShowAdminAuth(false)}
          />
        </div>
      );
    }

    // Allow fall-through to the main layout so that currentView states (like 'lesson') work properly for guests
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#f3f4f6] text-slate-900 font-sans selection:bg-slate-100 selection:text-slate-900">
        <div className="flex h-screen overflow-hidden">
          {currentView === 'lesson' && (
            <aside 
              className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-40 w-84 bg-white border-r border-slate-200 h-full overflow-y-auto transition-all duration-300 ease-in-out shrink-0`}
            >
              <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => {
                        localStorage.setItem('lmsActiveTab', JSON.stringify('overview'));
                        setCurrentView('lms');
                      }}
                      className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-500 hover:text-slate-900"
                      title="Back to Dashboard"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    
                    <button 
                      onClick={() => setIsSidebarOpen(false)}
                      className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-slate-600 hidden lg:flex"
                      title="Hide Sidebar"
                    >
                      <Menu size={16} className="rotate-90" />
                    </button>
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <Trophy size={18} className="text-amber-500" />
                      <span>Your Progress</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setIsSidebarOpen(false)}
                      className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-500 lg:hidden"
                      title="Close Sidebar"
                    >
                      <X size={16} />
                    </button>
                    <span className="text-xs font-bold text-slate-600 bg-slate-50 px-2 py-1 rounded-full">
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      key="progress-bar"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      className="h-full bg-emerald-500"
                    />
                  </div>
                   <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>{completedLessons.length} Topics Done</span>
                    <span>{totalItemsCount - completedLessons.length} Left</span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  {filteredSyllabus.length === 0 ? (
                  <div className="text-center py-8 px-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-3">
                      <Search size={24} />
                    </div>
                    <p className="text-sm font-medium text-slate-600">No results found</p>
                    <p className="text-xs text-slate-400 mt-1">Try a different search term</p>
                  </div>
                ) : (
                  filteredSyllabus.map((section, sIdx) => (
                    <div key={section.id} className="space-y-1">
                      <motion.button 
                        whileTap={{ scale: 0.97 }}
                        onClick={() => toggleSection(section.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg transition-all group ${
                          expandedSections[section.id] ? 'bg-slate-50 text-slate-600' : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span className="font-semibold text-sm group-hover:text-slate-600 transition-colors">
                          {section.title}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedSections[section.id] ? 0 : -90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} className={expandedSections[section.id] ? 'text-slate-600' : 'text-slate-400'} />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence initial={false}>
                        {expandedSections[section.id] && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 space-y-1"
                          >
                            {section.lessons.map((lesson, lIdx) => (
                              <div key={lesson.id} className="space-y-1">
                                <div 
                                  className={`flex items-center gap-2 p-2.5 rounded-lg transition-all text-sm group cursor-pointer ${
                                    currentSectionIdx === sIdx && currentLessonIdx === lIdx && !selectedSubTopic
                                      ? 'bg-slate-50 text-slate-700 font-medium border-l-4 border-slate-600'
                                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                  }`}
                                  onClick={() => selectLesson(sIdx, lIdx)}
                                >
                                  <div className="flex-1 flex items-center gap-2 min-w-0">
                                    {lesson.quizId && <HelpCircle size={16} className="text-slate-500 shrink-0" />}
                                    <span className="truncate">{lesson.title}</span>
                                  </div>
                                  
                                  {lesson.subTopics && lesson.subTopics.length > 0 && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedLessons(prev => ({ ...prev, [lesson.id]: !prev[lesson.id] }));
                                      }}
                                      className="p-1 hover:bg-slate-200/50 rounded-md transition-colors text-slate-600 hover:text-slate-900 shrink-0"
                                    >
                                      <motion.div
                                        animate={{ rotate: expandedLessons[lesson.id] ? 90 : 0 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <ChevronRight size={16} />
                                      </motion.div>
                                    </button>
                                  )}
                                </div>

                                <AnimatePresence>
                                  {expandedLessons[lesson.id] && lesson.subTopics && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="pl-6 pb-2 space-y-2 border-l border-slate-100 ml-4"
                                    >
                                      {lesson.subTopics.map((topic, tIdx) => (
                                        <button 
                                          key={tIdx} 
                                          onClick={() => selectLesson(sIdx, lIdx, topic)}
                                          className={`w-full flex items-center gap-2 text-[12px] p-1.5 rounded-md transition-colors ${
                                            selectedSubTopic === topic 
                                              ? 'text-slate-900 bg-slate-100 font-bold' 
                                              : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                                          }`}
                                        >
                                          <div className={`w-1.5 h-1.5 rounded-full transition-colors ${selectedSubTopic === topic ? 'bg-slate-900' : 'bg-slate-300'}`} />
                                          <span className="flex-1 text-left whitespace-normal leading-tight">{topic}</span>
                                          {completedLessons.includes(`${lesson.id}:${topic}`) && (
                                            <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                                          )}
                                        </button>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}

                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))
                )}
              </div>
              </div>
            </aside>
          )}

          {/* Main Content Area */}
          <main 
            ref={mainContentRef}
            className={`flex-1 overflow-y-auto relative transition-all duration-300 ${isSidebarOpen && currentView === 'lesson' ? 'lg:pl-84' : ''}`}
          >
            {currentView === 'lesson' && !isSidebarOpen && (
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="fixed top-6 left-6 z-50 p-3 bg-white rounded-2xl shadow-xl border border-slate-100 text-slate-600 hover:text-slate-900 transition-all hover:scale-110 active:scale-95 group"
                title="Open Sidebar"
              >
                <Menu size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
            )}
            {currentView === 'home' ? (
              <LandingPage 
                onLogin={() => selectLesson(0, 0)}
                onRegister={() => selectLesson(0, 0)}
                hideNav={true} 
                ctaText="Continue Course"
              />
            ) : currentView === 'lesson' ? (
              <>
                {/* Progress Bar */}
                <div className="sticky top-0 left-0 right-0 h-1 bg-slate-100 z-30">
                  <motion.div 
                    className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12">
                  <motion.div
                    key={currentLesson.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-600 font-medium text-sm uppercase tracking-wider">
                        <BookOpen size={16} />
                        <span>{currentSection.title}</span>
                      </div>
                      <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                        {currentLesson.title}
                      </h1>
                      
                      {!currentLesson.quizId && (
                        <motion.button 
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleLessonCompletion(selectedSubTopic ? `${currentLesson.id}:${selectedSubTopic}` : currentLesson.id)}
                          className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-bold transition-all shadow-lg ${
                            completedLessons.includes(selectedSubTopic ? `${currentLesson.id}:${selectedSubTopic}` : currentLesson.id)
                            ? 'bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-800 shadow-emerald-200/50 border-2 border-emerald-200'
                            : 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-emerald-600/40 hover:scale-105 active:scale-100 hover:from-emerald-700 hover:to-emerald-800'
                          }`}
                          disabled={isActionLoading}
                        >
                          {completedLessons.includes(selectedSubTopic ? `${currentLesson.id}:${selectedSubTopic}` : currentLesson.id) ? (
                            <>
                              <CheckCircle size={18} />
                              Completed
                            </>
                          ) : (
                            <>
                              <CheckCircle2 size={18} />
                              Mark as Completed
                            </>
                          )}
                        </motion.button>
                      )}
                    </div>

                    {currentLesson.id === 'install-guide-lesson' ? (
                      <div className="py-8">
                        <InstallGuide />
                      </div>
                    ) : currentLesson.quizId ? (
                      <div className="py-8">
                        <div className="p-8 bg-amber-50 border border-amber-100 rounded-2xl text-amber-700 text-center">
                          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <HelpCircle size={24} />
                          </div>
                          <div className="text-lg font-semibold mb-2">Quiz Coming Soon</div>
                          <div className="text-sm">Interactive quiz functionality will be available in a future update.</div>
                        </div>
                      </div>
                    ) : (
                      <>
                    <div className="prose prose-slate max-w-none">
                      <div className="text-slate-600 whitespace-pre-wrap leading-relaxed text-lg text-left">
                        {selectedSubTopic ? (
                          <motion.div 
                            initial={{ opacity: 0, x: 20 }} 
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6 text-left"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold shrink-0">
                                <BookOpen size={20} />
                              </div>
                              <h2 className="text-3xl font-bold text-slate-900 flex-1">{selectedSubTopic}</h2>
                              <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => alert("AI Summary functionality will be implemented in a future update!")}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 rounded-xl transition-all shadow-md shadow-violet-300/40"
                              >
                                <Sparkles size={16} />
                                Summarize
                              </motion.button>
                            </div>
                            
                            {subTopicData[selectedSubTopic] ? (
                              <div className="space-y-8">
                                {subTopicData[selectedSubTopic].description && (
                                  <p className="text-slate-700 text-lg leading-relaxed font-medium pb-2 border-b border-slate-100 italic text-justify">
                                    {subTopicData[selectedSubTopic].description}
                                  </p>
                                )}

                                {subTopicData[selectedSubTopic].sections && subTopicData[selectedSubTopic].sections!.length > 0 && (
                                  <div className="space-y-8">
                                    {subTopicData[selectedSubTopic].sections!.map((section, sIdx) => (
                                      <motion.div 
                                        key={sIdx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: sIdx * 0.1 }}
                                        className="space-y-3"
                                      >
                                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                          <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                                          {section.heading}
                                        </h3>
                                        {section.content && (
                                          <p className="text-slate-600 leading-relaxed text-base text-justify">
                                            {section.content}
                                          </p>
                                        )}
                                        {section.points && section.points.length > 0 && (
                                          <ul className="space-y-2 mt-2">
                                            {section.points.map((point, pIdx) => (
                                              <li key={pIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                                                <span className="leading-relaxed">{point}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </motion.div>
                                    ))}
                                  </div>
                                )}
                                
                                {subTopicData[selectedSubTopic].keyPoints && subTopicData[selectedSubTopic].keyPoints!.length > 0 && (
                                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Key Learning Points</h3>
                                    <ul className="space-y-4">
                                      {subTopicData[selectedSubTopic].keyPoints!.map((point, i) => (
                                        <motion.li 
                                          key={i} 
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: i * 0.1 }}
                                          className="flex items-start gap-3 text-slate-600"
                                        >
                                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                                            {i + 1}
                                          </div>
                                          <span className="leading-relaxed">{point}</span>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className="py-12 flex flex-col items-center justify-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-400 mb-4">
                                  <FileText size={32} />
                                </div>
                                <p className="text-slate-500 font-medium">Concept details coming soon...</p>
                                <p className="text-slate-400 text-sm mt-1 text-center max-w-xs">We're currently preparing the specialized content for this topic. Check back later!</p>
                              </div>
                            )}
                          </motion.div>
                        ) : (
                          <>
                            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg mb-6">
                              <h2 className="text-2xl font-bold text-slate-900 mb-4">{currentLesson.title}</h2>
                              <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                                {currentLesson.content}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                        {(selectedSubTopic && subTopicData[selectedSubTopic]?.code) || (!selectedSubTopic && currentLesson.codeExample) ? (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between bg-slate-900 text-slate-400 px-4 py-2 rounded-t-xl text-xs font-mono">
                              <div className="flex items-center gap-2">
                                <Code2 size={14} />
                                <span>Example Code ({(!selectedSubTopic && currentLesson.language) || "JAVA"})</span>
                              </div>
                              <button 
                                onClick={() => navigator.clipboard.writeText((selectedSubTopic ? subTopicData[selectedSubTopic]?.code : currentLesson.codeExample) || '')}
                                className="hover:text-white transition-colors flex items-center gap-1.5"
                              >
                                <Copy size={12} />
                                Copy
                              </button>
                            </div>
                            <pre className="bg-slate-900 text-slate-300 p-6 rounded-b-xl overflow-x-auto font-mono text-sm leading-relaxed shadow-2xl border-x border-b border-white/5">
                              <code>{selectedSubTopic ? subTopicData[selectedSubTopic]?.code : currentLesson.codeExample}</code>
                            </pre>
                          </div>
                        ) : null}
                      </>
                    )}

                    {/* Navigation Buttons */}
                    <div className="pt-12 border-t border-slate-100 flex items-center justify-between">
                      <motion.button 
                        whileHover={{ x: -4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevLesson}
                        disabled={currentSectionIdx === 0 && currentLessonIdx === 0 && selectedSubTopic === null}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md shadow-blue-200/50"
                      >
                        <ArrowLeft size={18} />
                        <div className="font-semibold">Back</div>
                      </motion.button>

                      <motion.button 
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextLesson}
                        disabled={
                          currentSectionIdx === syllabus.length - 1 && 
                          currentLessonIdx === syllabus[currentSectionIdx].lessons.length - 1 &&
                          (!currentLesson.subTopics || currentLesson.subTopics.length === 0 || selectedSubTopic === currentLesson.subTopics[currentLesson.subTopics.length - 1])
                        }
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-blue-300/40"
                      >
                        <div className="font-semibold">Continue</div>
                        <ArrowRight size={18} />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </>
            ) : (
              <LMSDashboard 
                user={user || { email: 'guest@student.com', user_metadata: { display_name: 'Guest Learner' } }}
                setCurrentView={setCurrentView}
                onLogout={user ? handleLogout : () => setShowAuth(true)}
                completedLessons={completedLessons}
                moduleStats={moduleStats}
                syllabus={syllabus}
              />
            )}
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
}
