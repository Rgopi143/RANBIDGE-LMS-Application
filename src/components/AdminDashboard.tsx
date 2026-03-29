import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Users,
  BookOpen,
  BarChart3,
  Settings,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Shield,
  LogOut,
  Plus,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Clock,
  Mail,
  Calendar,
  Award,
  TrendingUp,
  Activity,
  FileText,
  Database,
  UserCheck,
  UserX,
  AlertCircle,
  Save,
  X,
  Grid,
  PlayCircle,
  Code2,
  Target,
  Zap,
  Star,
  PieChart,
  TrendingDown,
  Lock,
  Unlock,
  Send,
  Copy,
  Share2,
  Bell,
  User
} from 'lucide-react';
import { adminService, UserProfile } from '../services/adminService';
import { assessmentsService, Question, Answer } from '../services/assessmentsService';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  coursesEnrolled: number;
  coursesCompleted: number;
  lastLogin: string;
}

interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  category: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface AdminDashboardProps {
  admin: any;
  onLogout: () => void;
}

export default function AdminDashboard({ admin, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'courses' | 'progress' | 'schedule' | 'assignments' | 'assessments' | 'playground' | 'notes' | 'analytics' | 'settings'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [editingUser, setEditingUser] = useState<UserProfile | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Real database state
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalCourses: 0,
    totalEnrollments: 0,
    avgProgress: 0
  });

  // User monitoring state
  const [userActivities, setUserActivities] = useState([
    { userId: 'user1', activity: 'Login', timestamp: '2024-03-25T10:30:00Z', details: 'User logged in from Chrome' },
    { userId: 'user1', activity: 'Course Access', timestamp: '2024-03-25T10:35:00Z', details: 'Accessed Java Fundamentals course' },
    { userId: 'user2', activity: 'Assignment Submitted', timestamp: '2024-03-25T11:20:00Z', details: 'Submitted Java OOP Project' },
    { userId: 'user3', activity: 'Note Created', timestamp: '2024-03-25T14:15:00Z', details: 'Created note on React Hooks' }
  ]);

  const [userProgress, setUserProgress] = useState([
    { userId: 'user1', courseId: 'java-fundamentals', progress: 75, timeSpent: '24h 30m', lastAccess: '2024-03-25T09:45:00Z' },
    { userId: 'user2', courseId: 'java-fundamentals', progress: 45, timeSpent: '18h 15m', lastAccess: '2024-03-24T16:20:00Z' },
    { userId: 'user3', courseId: 'react-frontend', progress: 90, timeSpent: '32h 45m', lastAccess: '2024-03-25T08:30:00Z' }
  ]);

  const [userSessions, setUserSessions] = useState([
    { userId: 'user1', loginTime: '2024-03-25T08:00:00Z', logoutTime: '2024-03-25T17:30:00Z', duration: '9h 30m', ipAddress: '192.168.1.100' },
    { userId: 'user2', loginTime: '2024-03-24T09:15:00Z', logoutTime: '2024-03-24T16:45:00Z', duration: '7h 30m', ipAddress: '192.168.1.101' },
    { userId: 'user3', loginTime: '2024-03-25T07:30:00Z', logoutTime: null, duration: 'Ongoing', ipAddress: '192.168.1.102' }
  ]);

  const [userAssignments, setUserAssignments] = useState([
    { userId: 'user1', assignmentId: 'assign1', title: 'Java OOP Project', course: 'Java Fundamentals', submittedDate: '2024-03-25T11:20:00Z', score: 85, status: 'graded' },
    { userId: 'user2', assignmentId: 'assign2', title: 'Spring Boot API', course: 'Spring Boot', submittedDate: '2024-03-24T14:30:00Z', score: 92, status: 'graded' },
    { userId: 'user3', assignmentId: 'assign3', title: 'React Portfolio', course: 'React Frontend', submittedDate: null, score: 0, status: 'pending' }
  ]);

  const [userNotes, setUserNotes] = useState([
    { userId: 'user1', noteId: 'note1', title: 'Java OOP Concepts', content: 'Key principles of Object-Oriented Programming', created: '2024-03-25T10:45:00Z', shared: false, course: 'Java Fundamentals' },
    { userId: 'user2', noteId: 'note2', title: 'Spring Boot Tips', content: 'Best practices for Spring Boot development', created: '2024-03-24T15:20:00Z', shared: true, course: 'Spring Boot' },
    { userId: 'user3', noteId: 'note3', title: 'React State Management', content: 'Understanding useState and useEffect hooks', created: '2024-03-25T09:15:00Z', shared: true, course: 'React Frontend' }
  ]);

  const [userCodeSessions, setUserCodeSessions] = useState([
    { userId: 'user1', sessionId: 'code1', language: 'Java', code: 'public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, World!"); } }', executed: '2024-03-25T11:30:00Z', success: true, course: 'Java Fundamentals' },
    { userId: 'user2', sessionId: 'code2', language: 'JavaScript', code: 'const App = () => { return <div>Hello React</div>; };', executed: '2024-03-25T14:20:00Z', success: true, course: 'React Frontend' },
    { userId: 'user3', sessionId: 'code3', language: 'Python', code: 'def fibonacci(n): return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)', executed: '2024-03-25T13:45:00Z', success: false, course: 'Python Basics' }
  ]);

  // Assessments state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [editingAnswer, setEditingAnswer] = useState<Answer | null>(null);

  // Load assessments data
  useEffect(() => {
    loadAssessmentsData();
  }, []);

  const loadAssessmentsData = async () => {
    try {
      const [questionsData, answersData] = await Promise.all([
        assessmentsService.getAllQuestions(),
        assessmentsService.getAllAnswers()
      ]);
      setQuestions(questionsData);
      setAnswers(answersData);
    } catch (err: any) {
      console.error('Error loading assessments data:', err);
    }
  };

  const handleCreateQuestion = async (questionData: Omit<Question, 'id' | 'created'>) => {
    try {
      const newQuestion = await assessmentsService.createQuestion(questionData);
      setQuestions([...questions, newQuestion]);
      setShowQuestionModal(false);
      setEditingQuestion(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleUpdateQuestion = async (questionId: string, updates: Partial<Question>) => {
    try {
      const updatedQuestion = await assessmentsService.updateQuestion(questionId, updates);
      setQuestions(questions.map(q => q.id === questionId ? updatedQuestion : q));
      setShowQuestionModal(false);
      setEditingQuestion(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Are you sure you want to delete this question? This action cannot be undone.')) {
      try {
        await assessmentsService.deleteQuestion(questionId);
        setQuestions(questions.filter(q => q.id !== questionId));
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  const handleGradeAnswer = async (answerId: string, score: number, feedback?: string) => {
    try {
      const gradedAnswer = await assessmentsService.gradeAnswer(answerId, score, feedback);
      setAnswers(answers.map(a => a.id === answerId ? gradedAnswer : a));
      setShowAnswerModal(false);
      setEditingAnswer(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Load data from database
  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [usersData, statsData] = await Promise.all([
        adminService.getAllUsers(),
        adminService.getDashboardStats()
      ]);
      setUsers(usersData);
      setStats(statsData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditUser = (user: UserProfile) => {
    setEditingUser({ ...user });
    setShowUserModal(true);
  };

  const handleSaveUser = async () => {
    if (editingUser) {
      setLoading(true);
      try {
        const updatedUser = await adminService.updateUser(editingUser.id, editingUser);
        setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
        setShowUserModal(false);
        setEditingUser(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      setLoading(true);
      try {
        await adminService.deleteUser(userId);
        setUsers(users.filter(u => u.id !== userId));
        await loadDashboardData(); // Refresh stats
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleToggleUserStatus = async (userId: string) => {
    setLoading(true);
    try {
      const updatedUser = await adminService.toggleUserStatus(userId);
      setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
      await loadDashboardData(); // Refresh stats
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await adminService.signOutAdmin();
    onLogout();
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-white">
                <Shield size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Admin Dashboard</h1>
                <p className="text-sm text-slate-600">Welcome back, {admin.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">{admin.email}</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLogout}
                className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <LogOut size={20} className="text-slate-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 min-h-screen">
          <nav className="p-4 space-y-2">
            {/* Admin Management Section */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Admin Management</h3>
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'users', label: 'Users', icon: Users },
                { id: 'analytics', label: 'Analytics', icon: Activity },
                { id: 'settings', label: 'Settings', icon: Settings }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <tab.icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* User Monitoring Section */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">User Monitoring</h3>
              {[
                { id: 'progress', label: 'Progress Tracking', icon: BarChart3 },
                { id: 'schedule', label: 'Schedule', icon: Calendar },
                { id: 'assignments', label: 'Assignments', icon: FileText },
                { id: 'assessments', label: 'Assessments', icon: Database },
                { id: 'playground', label: 'Code Playground', icon: Code2 },
                { id: 'notes', label: 'Notes', icon: FileText }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-slate-600 text-white'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <tab.icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                  <div className="ml-auto">
                    <Eye size={14} className="opacity-60" />
                  </div>
                </motion.button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl p-6 border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                      <Users size={24} className="text-slate-600" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded-full">
                      +12%
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stats.totalUsers}</div>
                  <div className="text-sm text-slate-500">Total Users</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl p-6 border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <UserCheck size={24} className="text-blue-600" />
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      +8%
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stats.activeUsers}</div>
                  <div className="text-sm text-slate-500">Active Users</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl p-6 border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <BookOpen size={24} className="text-purple-600" />
                    </div>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                      +15%
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stats.totalCourses}</div>
                  <div className="text-sm text-slate-500">Total Courses</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-xl p-6 border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <TrendingUp size={24} className="text-amber-600" />
                    </div>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                      {stats.avgProgress}%
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stats.totalEnrollments}</div>
                  <div className="text-sm text-slate-500">Total Enrollments</div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">User Management</h2>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowUserModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700"
                  >
                    <Plus size={16} />
                    Add User
                  </motion.button>
                </div>
              </div>

              {/* Users Table */}
              <div className="bg-white rounded-xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Progress</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Courses</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Last Login</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {filteredUsers.map((user) => (
                        <motion.tr
                          key={user.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="hover:bg-slate-50"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                                <User size={20} className="text-slate-600" />
                              </div>
                              <div>
                                <div className="font-medium text-slate-900">{user.name}</div>
                                <div className="text-sm text-slate-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              user.role === 'admin' 
                                ? 'bg-purple-100 text-purple-800' 
                                : 'bg-slate-100 text-slate-800'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              user.status === 'active' 
                                ? 'bg-slate-100 text-slate-800' 
                                : user.status === 'inactive'
                                ? 'bg-slate-100 text-slate-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-slate-200 rounded-full h-2 mr-2">
                                <div 
                                  className="bg-slate-600 h-2 rounded-full" 
                                  style={{ width: '0%' }} // Will be calculated from enrollments
                                ></div>
                              </div>
                              <span className="text-sm text-slate-600">0%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                            0/0
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                            {user.last_login || 'Never'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleEditUser(user)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <Edit size={16} />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleToggleUserStatus(user.id)}
                                className={`p-1 rounded ${
                                  user.status === 'active' 
                                    ? 'text-amber-600 hover:text-amber-900' 
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                              >
                                {user.status === 'active' ? <UserX size={16} /> : <UserCheck size={16} />}
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleDeleteUser(user.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 size={16} />
                              </motion.button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Progress Tracking Tab */}
          {activeTab === 'progress' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Progress Tracking (Admin View)</h2>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
                    <Download size={16} />
                    Export Progress Report
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200">
                    <Filter size={16} />
                    Filter
                  </button>
                </div>
              </div>

              {/* Progress Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="text-blue-600" size={24} />
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">+8%</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">72%</div>
                  <div className="text-sm text-slate-500">Avg. Completion</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="text-slate-600" size={24} />
                    <span className="text-xs font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded-full">+12</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">45</div>
                  <div className="text-sm text-slate-500">Certificates Issued</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <Clock className="text-purple-600" size={24} />
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">+24h</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">156h</div>
                  <div className="text-sm text-slate-500">Total Learning Hours</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="text-amber-600" size={24} />
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">+15%</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">89%</div>
                  <div className="text-sm text-slate-500">Active Learners</div>
                </div>
              </div>

              {/* Detailed User Progress Table */}
              <div className="bg-white rounded-xl border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Individual User Progress</h3>
                    <div className="flex items-center gap-3">
                      <select className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500">
                        <option>All Users</option>
                        <option>Active Users</option>
                        <option>Inactive Users</option>
                      </select>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
                        <Eye size={16} />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Course</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Progress</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Time Spent</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Last Activity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {userProgress.map((progress) => {
                        const user = users.find(u => u.id === progress.userId);
                        return (
                          <tr key={progress.userId} className="hover:bg-slate-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                                  <User size={20} className="text-slate-600" />
                                </div>
                                <div>
                                  <div className="font-medium text-slate-900">{user?.name || 'Unknown User'}</div>
                                  <div className="text-sm text-slate-500">{user?.email || 'No email'}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">{progress.courseId}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex-1 bg-slate-200 rounded-full h-2 mr-2">
                                  <div 
                                    className="bg-slate-600 h-2 rounded-full" 
                                    style={{ width: `${progress.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-slate-600">{progress.progress}%</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">{progress.timeSpent}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{new Date(progress.lastAccess).toLocaleDateString()}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button className="text-blue-600 hover:text-blue-900">
                                  <Eye size={16} />
                                </button>
                                <button className="text-slate-600 hover:text-slate-800">
                                  <Mail size={16} />
                                </button>
                                <button className="text-amber-600 hover:text-amber-900">
                                  <Download size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Progress Heatmap */}
              <div className="bg-white rounded-xl border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Activity Heatmap</h3>
                  <div className="flex items-center gap-4">
                    <select className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                      <option>Last 90 Days</option>
                    </select>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
                      <BarChart3 size={16} />
                      Generate Report
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-7 gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                      <div key={day} className="text-center">
                        <div className="text-sm font-medium text-slate-700 mb-2">{day}</div>
                        <div className="space-y-1">
                          {Array.from({ length: 4 }, (_, hourIndex) => {
                            const activity = Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low';
                            return (
                              <div 
                                key={hourIndex}
                                className={`w-8 h-8 rounded ${
                                  activity === 'high' ? 'bg-red-500' : 
                                  activity === 'medium' ? 'bg-amber-500' : 
                                  'bg-slate-500'
                                }`}
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Schedule Management (Admin View)</h2>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
                    <Plus size={16} />
                    Add Event
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200">
                    <Calendar size={16} />
                    Export Calendar
                  </button>
                </div>
              </div>

              {/* User Sessions Table */}
              <div className="bg-white rounded-xl border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900">User Sessions</h3>
                  <div className="flex items-center gap-3">
                    <select className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500">
                      <option>All Users</option>
                      <option>Active Sessions</option>
                      <option>Completed Sessions</option>
                    </select>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
                      <Download size={16} />
                      Export Sessions Data
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Login Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Logout Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Duration</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">IP Address</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {userSessions.map((session) => {
                        const user = users.find(u => u.id === session.userId);
                        return (
                          <tr key={session.userId} className="hover:bg-slate-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                                  <User size={20} className="text-slate-600" />
                                </div>
                                <div>
                                  <div className="font-medium text-slate-900">{user?.name || 'Unknown User'}</div>
                                  <div className="text-sm text-slate-500">{user?.email || 'No email'}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">{new Date(session.loginTime).toLocaleString()}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{session.logoutTime ? new Date(session.logoutTime).toLocaleString() : 'Active'}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{session.duration}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{session.ipAddress}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                session.duration === 'Ongoing' 
                                  ? 'bg-slate-100 text-slate-800'
                                  : 'bg-slate-100 text-slate-800'
                              }`}>
                                {session.duration === 'Ongoing' ? 'Active' : 'Completed'}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button className="text-blue-600 hover:text-blue-800">
                                  <Eye size={16} />
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                  <XCircle size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Assessments Tab */}
          {activeTab === 'assessments' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Assessments Management (Admin View)</h2>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
                    <Plus size={16} />
                    Add Question
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200">
                    <Download size={16} />
                    Export Questions
                  </button>
                </div>
              </div>

              {/* Assessment Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <Database className="text-blue-600" size={24} />
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Total</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{questions.length}</div>
                  <div className="text-sm text-slate-500">Total Questions</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <FileText className="text-slate-600" size={24} />
                    <span className="text-xs font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded-full">Submitted</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{answers.length}</div>
                  <div className="text-sm text-slate-500">Total Answers</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <CheckCircle2 className="text-purple-600" size={24} />
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Graded</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{answers.filter(a => a.graded).length}</div>
                  <div className="text-sm text-slate-500">Graded Answers</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <Clock className="text-amber-600" size={24} />
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Pending</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{answers.filter(a => !a.graded).length}</div>
                  <div className="text-sm text-slate-500">Pending Grading</div>
                </div>
              </div>

              {/* Questions Management Section */}
              <div className="bg-white rounded-xl border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Questions Management</h3>
                    <div className="flex items-center gap-3">
                      <select className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500">
                        <option>All Questions</option>
                        <option>Essay Questions</option>
                        <option>Multiple Choice</option>
                        <option>Coding Questions</option>
                      </select>
                      <button 
                        onClick={() => {
                          setEditingQuestion({
                            id: '',
                            question: '',
                            type: 'essay',
                            courseId: 'java-fundamentals',
                            difficulty: 'medium',
                            points: 10
                          });
                          setShowQuestionModal(true);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700"
                      >
                        <Plus size={16} />
                        Add Question
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Question</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Course</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Difficulty</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Points</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Created</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {questions.map((question) => (
                        <tr key={question.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4">
                            <div className="max-w-md">
                              <div className="font-medium text-slate-900 truncate">{question.question}</div>
                              <div className="text-sm text-slate-500">ID: {question.id}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              question.type === 'essay' ? 'bg-blue-100 text-blue-800' :
                              question.type === 'multiple-choice' ? 'bg-slate-100 text-slate-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {question.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">{question.courseId}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              question.difficulty === 'easy' ? 'bg-slate-100 text-slate-800' :
                              question.difficulty === 'medium' ? 'bg-amber-100 text-amber-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {question.difficulty}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">{question.points}</td>
                          <td className="px-6 py-4 text-sm text-slate-600">{new Date(question.created).toLocaleDateString()}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => {
                                  setEditingQuestion(question);
                                  setShowQuestionModal(true);
                                }}
                                className="text-blue-600 hover:text-blue-800"
                              >
                                <Edit size={16} />
                              </button>
                              <button className="text-slate-600 hover:text-slate-800">
                                <Eye size={16} />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Answers Management Section */}
              <div className="bg-white rounded-xl border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Student Answers & Grading</h3>
                    <div className="flex items-center gap-3">
                      <select className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500">
                        <option>All Answers</option>
                        <option>Graded</option>
                        <option>Pending Grading</option>
                        <option>High Scores</option>
                      </select>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
                        <Download size={16} />
                        Export Results
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Question</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Answer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Score</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Submitted</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {answers.map((answer) => {
                        const user = users.find(u => u.id === answer.userId);
                        const question = questions.find(q => q.id === answer.questionId);
                        return (
                          <tr key={answer.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                                  <User size={20} className="text-slate-600" />
                                </div>
                                <div>
                                  <div className="font-medium text-slate-900">{user?.name || 'Unknown User'}</div>
                                  <div className="text-sm text-slate-500">{user?.email || 'No email'}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">{question?.question || 'Unknown Question'}</td>
                            <td className="px-6 py-4">
                              <div className="max-w-xs">
                                <div className="text-sm text-slate-600 truncate">{answer.answer}</div>
                                <div className="text-xs text-slate-500">Max: {question?.points} points</div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className={`font-medium ${
                                  answer.score >= (question?.points || 10) * 0.8 ? 'text-slate-600' :
                                  answer.score >= (question?.points || 10) * 0.6 ? 'text-amber-600' :
                                  'text-red-600'
                                }`}>
                                  {answer.score}/{question?.points || 10}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                answer.graded 
                                  ? 'bg-slate-100 text-slate-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}>
                                {answer.graded ? 'Graded' : 'Pending'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">{new Date(answer.submitted).toLocaleDateString()}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => {
                                    setEditingAnswer(answer);
                                    setShowAnswerModal(true);
                                  }}
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  <Eye size={16} />
                                </button>
                                <button className="text-slate-600 hover:text-slate-800">
                                  <Edit size={16} />
                                </button>
                                <button className="text-amber-600 hover:text-amber-800">
                                  <Mail size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'courses' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-slate-900">Course Management</h2>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-slate-600">Course management features coming soon...</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-slate-900">Analytics & Reports</h2>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-slate-600">Analytics features coming soon...</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-slate-900">System Settings</h2>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-slate-600">Settings features coming soon...</p>
              </div>
            </motion.div>
          )}
        </main>
      </div>

      {/* Edit User Modal */}
      {showUserModal && editingUser && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Edit User</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowUserModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X size={20} className="text-slate-600" />
              </motion.button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                <select
                  value={editingUser.status}
                  onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value as any })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Role</label>
                <select
                  value={editingUser.role}
                  onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value as any })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                  <option value="instructor">Instructor</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSaveUser}
                disabled={loading}
                className="flex-1 bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={20} />
                    Save Changes
                  </>
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowUserModal(false)}
                className="flex-1 bg-slate-200 text-slate-800 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Question Modal */}
      {showQuestionModal && editingQuestion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl p-6 w-full max-w-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                {editingQuestion.id ? 'Edit Question' : 'Add New Question'}
              </h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowQuestionModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X size={20} className="text-slate-600" />
              </motion.button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Question Text</label>
                <textarea
                  value={editingQuestion.question}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, question: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  rows={3}
                  placeholder="Enter your question here..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Question Type</label>
                  <select
                    value={editingQuestion.type}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, type: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    <option value="essay">Essay</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="coding">Coding</option>
                    <option value="true-false">True/False</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Course</label>
                  <select
                    value={editingQuestion.courseId}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, courseId: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    <option value="java-fundamentals">Java Fundamentals</option>
                    <option value="react-frontend">React Frontend</option>
                    <option value="spring-boot">Spring Boot</option>
                    <option value="python-basics">Python Basics</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty Level</label>
                  <select
                    value={editingQuestion.difficulty}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, difficulty: e.target.value as any })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Points</label>
                  <input
                    type="number"
                    value={editingQuestion.points}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, points: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    min="1"
                    max="100"
                  />
                </div>
              </div>

              {editingQuestion.type === 'multiple-choice' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Options (one per line)</label>
                  <textarea
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    rows={4}
                    placeholder="Option A&#10;Option B&#10;Option C&#10;Option D"
                  />
                </div>
              )}

              {editingQuestion.type === 'coding' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Expected Solution Template</label>
                  <textarea
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 font-mono text-sm"
                    rows={6}
                    placeholder="// Enter expected solution or template here..."
                  />
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (editingQuestion.id) {
                    handleUpdateQuestion(editingQuestion.id, editingQuestion);
                  } else {
                    handleCreateQuestion({
                      question: editingQuestion.question,
                      type: editingQuestion.type,
                      courseId: editingQuestion.courseId,
                      difficulty: editingQuestion.difficulty,
                      points: editingQuestion.points,
                      options: editingQuestion.options,
                      solutionTemplate: editingQuestion.solutionTemplate
                    });
                  }
                }}
                className="flex-1 bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Save size={20} />
                {editingQuestion.id ? 'Update Question' : 'Create Question'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowQuestionModal(false)}
                className="flex-1 bg-slate-200 text-slate-800 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Answer Modal */}
      {showAnswerModal && editingAnswer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl p-6 w-full max-w-3xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Grade Student Answer</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowAnswerModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X size={20} className="text-slate-600" />
              </motion.button>
            </div>

            <div className="space-y-6">
              {/* Student Info */}
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                    <User size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      {users.find(u => u.id === editingAnswer.userId)?.name || 'Unknown User'}
                    </div>
                    <div className="text-sm text-slate-500">
                      {users.find(u => u.id === editingAnswer.userId)?.email || 'No email'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div>
                <h4 className="font-medium text-slate-900 mb-2">Question:</h4>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700">
                    {questions.find(q => q.id === editingAnswer.questionId)?.question || 'Unknown Question'}
                  </p>
                </div>
              </div>

              {/* Student Answer */}
              <div>
                <h4 className="font-medium text-slate-900 mb-2">Student Answer:</h4>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <p className="text-slate-700 whitespace-pre-wrap">{editingAnswer.answer}</p>
                </div>
              </div>

              {/* Grading */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Score</label>
                  <input
                    type="number"
                    value={editingAnswer.score}
                    onChange={(e) => setEditingAnswer({ ...editingAnswer, score: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    min="0"
                    max={questions.find(q => q.id === editingAnswer.questionId)?.points || 10}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Max Points</label>
                  <input
                    type="text"
                    value={questions.find(q => q.id === editingAnswer.questionId)?.points || 10}
                    disabled
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-100 text-slate-600"
                    readOnly
                  />
                </div>
              </div>

              {/* Feedback */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Feedback (Optional)</label>
                <textarea
                  value={editingAnswer.feedback || ''}
                  onChange={(e) => setEditingAnswer({ ...editingAnswer, feedback: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  rows={3}
                  placeholder="Provide feedback to the student..."
                />
              </div>

              {/* Grading Status */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Grading Status</label>
                <select
                  value={editingAnswer.graded ? 'graded' : 'pending'}
                  onChange={(e) => setEditingAnswer({ ...editingAnswer, graded: e.target.value === 'graded' })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                >
                  <option value="graded">Graded</option>
                  <option value="pending">Pending Review</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  handleGradeAnswer(editingAnswer.id, editingAnswer.score, editingAnswer.feedback);
                }}
                className="flex-1 bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Save size={20} />
                Save Grade & Feedback
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowAnswerModal(false)}
                className="flex-1 bg-slate-200 text-slate-800 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
