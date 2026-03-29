import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'motion/react';

import {

  BookOpen,

  BarChart3,

  Calendar,

  Clock,

  Users,

  Award,

  Star,

  Star as StarIcon,
  ThumbsUp,

  TrendingUp,

  Target,

  Zap,

  FileText,

  CheckCircle2,

  PlayCircle,

  Code2,

  MessageSquare,

  Search,

  Bell,

  ChevronRight,

  Download,

  Grid,

  List,

  User,

  Settings,

  LogOut,

  Share2,

  Link,

  Mail,

  Copy,

  Eye,

  Lock,

  Unlock,

  Users2,

  Send,

  PieChart,

  Activity,

  TrendingDown,

  Filter,

  Plus,

  Edit,

  Trash2,

  X,

  Maximize,

  CheckCircle,

  Calendar as CalendarIcon,
  Terminal,
  Cpu,
  Coffee,
  Globe,
  Monitor

} from 'lucide-react';

import InstallGuide from './InstallGuide';
import CourseCatalog from './CourseCatalog';
import PracticeLab from './PracticeLab';



interface Course {

  id: string;

  title: string;

  instructor: string;

  description: string;

  category: string;

  level: string;

  duration: string;

  enrolledCount: number;

  rating: number;

  thumbnail: string;

  progress?: number;

  lastAccessed?: string;

  totalLessons: number;

  completedLessons: number;

  tags: string[];

  price: string;
}



interface LMSDashboardProps {

  user: any;

  setCurrentView: (view: 'home' | 'landing' | 'lms' | 'lesson' | 'playground' | 'notes' | 'assignments' | 'references' | 'admin') => void;

  onLogout: () => void;

  completedLessons: string[];

  moduleStats: Record<string, { startTime: string | null, endTime: string | null }>;

  syllabus: any[];

  desiredTab?: string | null;

  onTabSet?: () => void;

}



export default function LMSDashboard({ 
  user, 
  setCurrentView, 
  onLogout, 
  completedLessons = [], 
  moduleStats = {}, 
  syllabus = [],
  desiredTab, 
  onTabSet 
}: LMSDashboardProps) {

  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'catalog' | 'progress' | 'schedule' | 'assignments' | 'playground' | 'notes' | 'rating'>(() => {
    const saved = localStorage.getItem('lmsActiveTab');
    return (saved ? JSON.parse(saved) : 'overview');
  });

  // Save activeTab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lmsActiveTab', JSON.stringify(activeTab));
  }, [activeTab]);

  // Handle desiredTab prop to set active tab
  useEffect(() => {
    if (desiredTab) {
      setActiveTab(desiredTab as any);
      // Clear desiredTab after using it
      if (onTabSet) {
        onTabSet();
      }
    }
  }, [desiredTab, onTabSet]);

  const [viewMode, setViewMode] = useState<'grid' | 'list'>(() => {
    const saved = localStorage.getItem('lmsViewMode');
    return saved ? JSON.parse(saved) : 'grid';
  });

  const [searchQuery, setSearchQuery] = useState(() => {
    const saved = localStorage.getItem('lmsSearchQuery');
    return saved ? JSON.parse(saved) : '';
  });

  // Save viewMode and searchQuery to localStorage
  useEffect(() => {
    localStorage.setItem('lmsViewMode', JSON.stringify(viewMode));
  }, [viewMode]);

  useEffect(() => {
    localStorage.setItem('lmsSearchQuery', JSON.stringify(searchQuery));
  }, [searchQuery]);

  const [showExportMenu, setShowExportMenu] = useState(false);

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const [showNotifications, setShowNotifications] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  const [showSettings, setShowSettings] = useState(false);

  const [showShareModal, setShowShareModal] = useState(false);

  const [shareContent, setShareContent] = useState<any>(null);

  const [shareLink, setShareLink] = useState('');

  const [sharePermissions, setSharePermissions] = useState<'view' | 'edit'>('view');

  const [shareWithUsers, setShareWithUsers] = useState<string[]>([]);

  const [searchUsers, setSearchUsers] = useState('');

  const [copiedLink, setCopiedLink] = useState(false);

  const [showRatingPrompt, setShowRatingPrompt] = useState(false);

  const [selectedRating, setSelectedRating] = useState(0);

  const [hoverRating, setHoverRating] = useState(0);

  const [lastSubmittedRating, setLastSubmittedRating] = useState<number | null>(null);
  const [selectedCourseForRating, setSelectedCourseForRating] = useState('java-fullstack-master');

  const [ratingComment, setRatingComment] = useState('');

  const [selectedNote, setSelectedNote] = useState<typeof notes[0] | null>(null);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const [isModalMaximized, setIsModalMaximized] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [editedContent, setEditedContent] = useState('');

  const [courseRatings, setCourseRatings] = useState<
    { id: string; userName: string; courseId: string; courseTitle: string; rating: number; comment: string; time: string }[]
  >([]);

  const perCourseSummary = Object.values(
    courseRatings.reduce((acc, item) => {
      if (!acc[item.courseId]) {
        acc[item.courseId] = {
          courseId: item.courseId,
          courseTitle: item.courseTitle,
          total: 0,
          sum: 0
        };
      }
      acc[item.courseId].total += 1;
      acc[item.courseId].sum += item.rating;
      return acc;
    }, {} as Record<string, { courseId: string; courseTitle: string; total: number; sum: number }>)
  ) as { courseId: string; courseTitle: string; total: number; sum: number }[];

  const perCourseSummaryWithAverage = perCourseSummary
    .map((item) => ({
      ...item,
      average: Number((item.sum / item.total).toFixed(1))
    }))
    .sort((a, b) => b.average - a.average || b.total - a.total);
  const perCoursePieData = perCourseSummaryWithAverage.map((course) => {
    const ratingsForCourse = courseRatings.filter((item) => item.courseId === course.courseId);
    const total = ratingsForCourse.length;
    const count5 = ratingsForCourse.filter((item) => item.rating === 5).length;
    const count4 = ratingsForCourse.filter((item) => item.rating === 4).length;
    const count3 = ratingsForCourse.filter((item) => item.rating === 3).length;
    const count2 = ratingsForCourse.filter((item) => item.rating === 2).length;
    const count1 = ratingsForCourse.filter((item) => item.rating === 1).length;

    const p5 = total ? Math.round((count5 / total) * 100) : 0;
    const p4 = total ? Math.round((count4 / total) * 100) : 0;
    const p3 = total ? Math.round((count3 / total) * 100) : 0;
    const p2 = total ? Math.round((count2 / total) * 100) : 0;
    const p1 = Math.max(0, 100 - p5 - p4 - p3 - p2);

    const c1 = p5 / 5;
    const c2 = (c1 + p4) / 5;
    const c3 = (c2 + p3) / 5;
    const c4 = (c3 + p2) / 5;
    const courseInitials = course.courseTitle
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join('');

    const chartStyle = {
      background: `conic-gradient(
        #22d3ee 0% ${c1}%,
        #3b82f6 ${c1}% ${c2}%,
        #a855f7 ${c2}% ${c3}%,
        #ec4899 ${c3}% ${c4}%,
        #f59e0b ${c4}% 100%
      )`
    };

    return {
      ...course,
      total,
      p5,
      p4,
      p3,
      p2,
      p1,
      courseInitials,
      centerImage:
        course.courseId === 'java-fullstack-master'
          ? 'https://www.pngmart.com/files/23/Java-PNG-Photos.png'
          : course.courseId === '2'
          ? 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png'
          : '',
      chartStyle
    };
  });



  // Animation variants

  const containerVariants = {

    hidden: { opacity: 0, y: 20 },

    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }

  };



  const cardVariants = {

    hidden: { opacity: 0, scale: 0.9, y: 20 },

    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } },

    hover: { scale: 1.05, y: -5, transition: { type: "spring", stiffness: 400, damping: 10 } }

  };



  const tabVariants = {

    inactive: { scale: 1, backgroundColor: "transparent" },

    active: { scale: 1.05, backgroundColor: "rgb(51 65 85)", transition: { type: "spring", stiffness: 300 } }

  };



  const dropdownVariants = {

    hidden: { opacity: 0, scale: 0.95, y: -10 },

    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },

    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } }

  };



  const modalVariants = {

    hidden: { opacity: 0, scale: 0.9 },

    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },

    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }

  };



  // Mock users for sharing

  const portalUsers = [

    { id: 'user1', name: 'Alice Johnson', email: 'alice@lms.com', avatar: 'A', status: 'online' },

    { id: 'user2', name: 'Bob Smith', email: 'bob@lms.com', avatar: 'B', status: 'online' },

    { id: 'user3', name: 'Carol Davis', email: 'carol@lms.com', avatar: 'C', status: 'offline' },

    { id: 'user4', name: 'David Wilson', email: 'david@lms.com', avatar: 'D', status: 'online' },

    { id: 'user5', name: 'Emma Brown', email: 'emma@lms.com', avatar: 'E', status: 'away' }

  ];



  // Generate share link

  const generateShareLink = () => {

    const baseUrl = window.location.origin;

    const shareId = Math.random().toString(36).substring(7);

    const link = `${baseUrl}/shared/${shareId}`;

    setShareLink(link);

    return link;

  };



  // Copy share link

  const copyShareLink = () => {

    navigator.clipboard.writeText(shareLink);

    setCopiedLink(true);

    setTimeout(() => setCopiedLink(false), 2000);

  };



  // Share with specific users

  const shareWithUser = (userId: string) => {

    if (!shareWithUsers.includes(userId)) {

      setShareWithUsers([...shareWithUsers, userId]);

    }

  };



  // Remove user from sharing

  const removeUserFromSharing = (userId: string) => {

    setShareWithUsers(shareWithUsers.filter(id => id !== userId));

  };



  // Open share modal

  const openShareModal = (content: any, type: string) => {

    setShareContent({ ...content, type });

    generateShareLink();

    setShowShareModal(true);

  };



  // Analytics data

  const analyticsData = {

    learningProgress: [

      { month: 'Jan', progress: 65, hours: 120 },

      { month: 'Feb', progress: 72, hours: 145 },

      { month: 'Mar', progress: 78, hours: 168 },

      { month: 'Apr', progress: 82, hours: 189 },

      { month: 'May', progress: 85, hours: 201 },

      { month: 'Jun', progress: 88, hours: 224 }

    ],

    courseDistribution: [

      { category: 'Programming', value: 45, color: 'bg-blue-500' },

      { category: 'Design', value: 20, color: 'bg-purple-500' },

      { category: 'Business', value: 15, color: 'bg-slate-500' },

      { category: 'Marketing', value: 12, color: 'bg-orange-500' },

      { category: 'Data Science', value: 8, color: 'bg-red-500' }

    ],

    weeklyActivity: [

      { day: 'Mon', hours: 3.5, lessons: 2 },

      { day: 'Tue', hours: 4.2, lessons: 3 },

      { day: 'Wed', hours: 2.8, lessons: 1 },

      { day: 'Thu', hours: 5.1, lessons: 4 },

      { day: 'Fri', hours: 3.9, lessons: 2 },

      { day: 'Sat', hours: 6.2, lessons: 5 },

      { day: 'Sun', hours: 4.8, lessons: 3 }

    ],

    skillProgress: [

      { skill: 'Java', progress: 85, level: 'Advanced' },

      { skill: 'React', progress: 72, level: 'Intermediate' },

      { skill: 'Spring Boot', progress: 68, level: 'Intermediate' },

      { skill: 'MongoDB', progress: 60, level: 'Intermediate' },

      { skill: 'JavaScript', progress: 78, level: 'Advanced' }

    ],

    completionRates: [

      { course: 'Java Full Stack', completed: 78, total: 100 },

      { course: 'React Fundamentals', completed: 92, total: 100 },

      { course: 'Spring Boot', completed: 65, total: 100 },

      { course: 'MongoDB Basics', completed: 88, total: 100 }

    ]

  };



  // Mock notifications data

  const notifications = [

    {

      id: 1,

      type: 'assignment',

      title: 'New Assignment Posted',

      message: 'Java Spring Boot Assignment #3 is now available',

      time: '5 minutes ago',

      read: false,

      icon: FileText,

      color: 'bg-blue-500'

    },

    {

      id: 2,

      type: 'achievement',

      title: 'Achievement Unlocked!',

      message: 'You completed your first week of learning',

      time: '1 hour ago',

      read: false,

      icon: Award,

      color: 'bg-slate-500'

    },

    {

      id: 3,

      type: 'course',

      title: 'Course Update',

      message: 'React Fundamentals has new content',

      time: '3 hours ago',

      read: true,

      icon: BookOpen,

      color: 'bg-purple-500'

    },

    {

      id: 4,

      type: 'reminder',

      title: 'Study Reminder',

      message: 'Don\'t forget to continue your Java course',

      time: '1 day ago',

      read: true,

      icon: Bell,

      color: 'bg-orange-500'

    }

  ];



  // Mock data for demonstration

  const enrolledCourses: Course[] = [

    {

      id: 'java-fullstack-master',

      title: 'Java Full Stack Development Masterclass',

      instructor: 'D. Sirisha',

      description: 'Master Java development from basics to advanced Spring Boot applications with React and MongoDB integration',

      category: 'Programming',

      level: 'Intermediate',

      duration: '16 weeks',

      enrolledCount: 1240,

      rating: 4.8,

      thumbnail: 'https://www.pngmart.com/files/23/Java-PNG-Photos.png',

      progress: 65,

      totalLessons: 45,

      completedLessons: 29,

      tags: ['Java', 'Spring Boot', 'React', 'MongoDB'],

      price: 'Free',

      lastAccessed: '2 hours ago'

    }
  ];



  const availableCourses: Course[] = [

    {

      id: '3',

      title: 'Python for Data Science',

      instructor: 'Dr. Sarah Johnson',

      description: 'Learn Python programming with focus on data science and machine learning',

      category: 'Data Science',

      level: 'Beginner',

      duration: '12 weeks',

      enrolledCount: 2100,

      rating: 4.7,

      thumbnail: 'python-course',

      totalLessons: 40,

      completedLessons: 0,

      tags: ['Python', 'Data Science', 'ML'],

      price: '₹6,639'

    },

    {

      id: '4',

      title: 'Cloud Architecture with AWS',

      instructor: 'Mike Wilson',

      description: 'Design and deploy scalable cloud solutions using AWS services',

      category: 'Cloud Computing',

      level: 'Intermediate',

      duration: '10 weeks',

      enrolledCount: 1560,

      rating: 4.6,

      thumbnail: 'aws-course',

      totalLessons: 35,

      completedLessons: 0,

      tags: ['AWS', 'Cloud', 'DevOps'],

      price: '₹8,299'

    }

  ];



  const notes = [

    {

      id: 1,

      title: 'Java Spring Boot Configuration',

      category: 'Java',

      content: `🌱 What is Spring Boot?

Spring Boot is a framework built on top of Spring that helps you:

Create standalone applications
Avoid complex XML configurations
Run apps quickly with embedded servers (Tomcat)

⚙️ 1. Prerequisites

Before starting, you need:

Java (JDK 8 or above)
Maven or Gradle
IDE (IntelliJ / Eclipse / VS Code)

🚀 2. Creating a Spring Boot Project
Method 1: Using Spring Initializr

Steps:

Go to https://start.spring.io/
Choose:
Project: Maven
Language: Java
Spring Boot Version
Add Dependencies:
Spring Web
Click Generate

📁 3. Project Structure

Important folders:

src/main/java → Java code
src/main/resources → Config files
application.properties → Configuration file

🧠 4. Main Application Class
@SpringBootApplication
public class MyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
Explanation:
@SpringBootApplication = Combination of:
@Configuration
@EnableAutoConfiguration
@ComponentScan

🔧 5. Spring Boot Configuration
📄 application.properties
server.port=8081
spring.application.name=MyApp

📄 application.yml (alternative)
server:
  port: 8081

spring:
  application:
    name: MyApp

🔁 6. Auto Configuration Concept

Spring Boot automatically:

Configures beans
Sets up server
Connects dependencies

👉 Based on:

Classpath
Dependencies
Properties

🌐 7. Creating a Simple REST Controller
@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello Spring Boot!";
    }
}

▶️ 8. Running the Application
Using IDE:
Right-click → Run
Using terminal:
mvn spring-boot:run

🌍 9. Output

Open browser:

http://localhost:8081/hello

Output:

Hello Spring Boot!

🧩 10. Key Annotations Summary
Annotation	Purpose
@SpringBootApplication	Main config
@RestController	REST API
@GetMapping	HTTP GET
@Autowired	Dependency injection

🏁 Final Flow

Flow:
Client → Controller → Service → Repository → Database → Response

Key Points
Configure application.properties for database connections
Set up dependency injection with @Component and @Autowired
Configure server port: server.port=8080
Database URL: spring.datasource.url=jdbc:mysql://localhost:3306/dbname
Enable JPA repositories with @EnableJpaRepositories`,

      date: '2024-03-15',

      time: '2:30 PM'

    },

    {

      id: 2,

      title: 'React Hooks Best Practices',

      category: 'React',

      content: 'Key points about useState, useEffect, and custom hooks. Remember to include dependency arrays in useEffect to prevent infinite re-renders. Use useCallback for memoization.',

      date: '2024-03-14',

      time: '4:15 PM'

    },

    {

      id: 3,

      title: 'MongoDB Query Optimization',

      category: 'MongoDB',

      content: 'Notes on indexing strategies, aggregation pipelines, and query performance. Create compound indexes for frequently queried fields and use explain() to analyze query performance.',

      date: '2024-03-13',

      time: '11:45 AM'

    },

    {

      id: 4,

      title: 'REST API Design Principles',

      category: 'General',

      content: 'Best practices for designing RESTful APIs: use proper HTTP methods, implement status codes correctly, version your APIs, and follow consistent naming conventions.',

      date: '2024-03-12',

      time: '3:20 PM'

    },

    {

      id: 5,

      title: 'Spring Security Authentication',

      category: 'Spring Boot',

      content: 'JWT token implementation, password encryption with BCrypt, and role-based access control. Configure security filters and authentication endpoints properly.',

      date: '2024-03-11',

      time: '1:00 PM'

    }

  ];



  const stats = {

    totalCourses: enrolledCourses.length + availableCourses.length,

    completedCourses: 1,

    totalHours: 156,

    certificates: 2,

    avgProgress: 47.5,

    weeklyHours: 12

  };



  const upcomingEvents = [

    { id: 1, title: 'Java Live Session', date: 'Today', time: '3:00 PM', type: 'live' },

    { id: 2, title: 'React Assignment Due', date: 'Tomorrow', time: '11:59 PM', type: 'assignment' },

    { id: 3, title: 'Python Quiz', date: 'Dec 28', time: '2:00 PM', type: 'quiz' }

  ];



  // Filter notes based on selected category

  const filteredNotes = selectedCategory === 'All' 

    ? notes 

    : notes.filter(note => note.category === selectedCategory);



  const achievements = [

    { id: 1, title: 'Fast Learner', description: 'Complete 5 lessons in one day', icon: Zap, unlocked: true },

    { id: 2, title: 'Dedicated Student', description: '7-day streak', icon: Target, unlocked: true },

    { id: 3, title: 'Course Master', description: 'Complete first course', icon: Award, unlocked: false }

  ];



  const CourseCard: React.FC<{ course: Course; isEnrolled?: boolean }> = ({ course, isEnrolled = false }) => (

    <motion.div

      variants={cardVariants}

      initial="hidden"

      animate="visible"

      whileHover="hover"

      onHoverStart={() => setHoveredCard(course.id)}

      onHoverEnd={() => setHoveredCard(null)}

      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative group"

    >

      {/* Animated gradient overlay */}

      <motion.div

        className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"

        initial={{ opacity: 0 }}

        whileHover={{ opacity: 1 }}

      />

      

      <div className={`relative h-48 flex items-center justify-center overflow-hidden ${course.thumbnail.startsWith('http') ? 'bg-white' : 'bg-gradient-to-br from-slate-400 to-teal-600'}`}>

        {/* Animated background pattern */}

        <motion.div

          className="absolute inset-0"

          initial={{ scale: 1, rotate: 0 }}

          whileHover={{ scale: 1.1, rotate: course.thumbnail.startsWith('http') ? 0 : 5 }}

          transition={{ duration: 0.5, type: "spring" }}

        >

          <div className={`absolute inset-0 ${course.thumbnail.startsWith('http') ? 'bg-transparent' : 'bg-white/10 backdrop-blur-sm'}`}></div>

        </motion.div>

        

        <motion.div

          animate={{ 

            rotate: hoveredCard === course.id && !course.thumbnail.startsWith('http') ? 360 : 0,

            scale: hoveredCard === course.id ? 1.1 : 1

          }}

          transition={{ duration: 0.5, type: "spring" }}

        >

          {course.thumbnail.startsWith('http') ? (
            <img src={course.thumbnail} alt={course.title} className="w-24 h-24 object-contain drop-shadow-md" />
          ) : (
            <BookOpen className="text-white drop-shadow-md" size={48} />
          )}

        </motion.div>

        

        {/* Floating particles */}

        {hoveredCard === course.id && (

          <motion.div

            className="absolute inset-0 pointer-events-none"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

          >

            {[...Array(6)].map((_, i) => (

              <motion.div

                key={i}

                className="absolute w-2 h-2 bg-white/30 rounded-full"

                initial={{ 

                  x: Math.random() * 100 + "%", 

                  y: Math.random() * 100 + "%",

                  scale: 0

                }}

                animate={{ 

                  x: Math.random() * 100 + "%", 

                  y: Math.random() * 100 + "%",

                  scale: [0, 1, 0]

                }}

                transition={{ 

                  duration: 2 + Math.random() * 2,

                  repeat: Infinity,

                  delay: Math.random() * 2

                }}

              />

            ))}

          </motion.div>

        )}

      </div>

      

      <div className="relative p-6">

        <motion.div

          className="flex items-center justify-between mb-2"

          initial={{ opacity: 0, x: -20 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ delay: 0.1 }}

        >

          <motion.span

            className="text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-200"

            whileHover={{ scale: 1.1, backgroundColor: "rgb(51 65 85 / 0.1)" }}

            transition={{ type: "spring" }}

          >

            {course.category}

          </motion.span>

          <motion.div

            className="flex items-center gap-1"

            whileHover={{ scale: 1.1 }}

            transition={{ type: "spring" }}

          >

            <motion.div

              animate={{ rotate: hoveredCard === course.id ? 360 : 0 }}

              transition={{ duration: 0.5 }}

            >

              <Star className="text-yellow-500 fill-yellow-500" size={14} />

            </motion.div>

            <span className="text-sm font-semibold">{course.rating}</span>

          </motion.div>

        </motion.div>

        

        <motion.h3

          className="text-lg font-bold text-slate-900 mb-2"

          initial={{ opacity: 0, y: 10 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.2 }}

        >

          {course.title}

        </motion.h3>

        

        <motion.p

          className="text-sm text-slate-600 mb-4 line-clamp-2"

          initial={{ opacity: 0, y: 10 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.3 }}

        >

          {course.description}

        </motion.p>

        

        <motion.div

          className="flex items-center justify-between mb-4"

          initial={{ opacity: 0, y: 10 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.4 }}

        >

          <div className="flex items-center gap-2 text-sm text-slate-500">

            <Clock size={14} />

            <span>{course.duration}</span>

          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">

            <Users size={14} />

            <span>{course.enrolledCount.toLocaleString()}</span>

          </div>

        </motion.div>

        

        {isEnrolled && course.progress !== undefined && (

          <motion.div

            className="mb-4"

            initial={{ opacity: 0, scaleX: 0 }}

            animate={{ opacity: 1, scaleX: 1 }}

            transition={{ delay: 0.5 }}

          >

            <div className="flex items-center justify-between text-sm mb-2">

              <span className="text-slate-600 font-bold">Progress</span>

              <span className="text-slate-600 font-bold">{course.progress}%</span>

            </div>

            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">

              <motion.div

                className="bg-gradient-to-r from-slate-500 to-teal-600 h-full rounded-full relative"

                initial={{ width: 0 }}

                animate={{ width: `${course.progress}%` }}

                transition={{ duration: 1, type: "spring", stiffness: 50 }}

              >

                <motion.div

                  className="absolute inset-0 bg-white/30 animate-pulse"

                  initial={{ x: "-100%" }}

                  animate={{ x: "100%" }}

                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}

                />

              </motion.div>

            </div>

          </motion.div>

        )}

        

        <motion.div

          className="flex items-center justify-between"

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.6 }}

        >

          <div className="flex items-center gap-2">

            <span className="text-2xl font-bold text-slate-900">{course.price}</span>

            {!isEnrolled && (

              <motion.span
                className="text-xs text-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}

              >

                ₹{parseInt(course.price.replace('₹', '').replace(',', '')) * 1.5}

              </motion.span>

            )}

          </div>

          <div className="flex items-center gap-2">

            <motion.button

              whileHover={{ scale: 1.05 }}

              whileTap={{ scale: 0.95 }}

              onClick={() => openShareModal(course, 'course')}

              className="p-2 text-slate-400 hover:text-slate-600 transition-colors"

              title="Share course"

            >

              <Share2 size={16} />

            </motion.button>

            <motion.button

              whileHover={{ scale: 1.05 }}

              whileTap={{ scale: 0.95 }}

              onClick={() => {
                if (course.id === 'java-fullstack-master') {
                  setCurrentView('lesson');
                }
              }}

              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${

                isEnrolled

                  ? 'bg-slate-600 text-white hover:bg-slate-700 shadow-lg hover:shadow-slate-600/50'

                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-slate-900/50'

              }`}

            >

              {isEnrolled ? 'Continue' : 'Enroll'}

            </motion.button>

          </div>

        </motion.div>



        {isEnrolled && course.lastAccessed && (

          <div className="text-xs text-slate-500 mt-3">

            Last accessed: {course.lastAccessed}

          </div>

        )}

      </div>

    </motion.div>

  );



  return (

    <div className="min-h-screen bg-slate-50">

      {/* Header */}

      <header className="bg-white border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between gap-4">

            <div className="w-48 shrink-0">

              <h1 className="text-2xl font-bold text-slate-900">LMS Portal</h1>

            </div>

            <div className="flex-1 flex justify-center">

              <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 w-full max-w-md">

                <Search size={18} className="text-slate-400" />

                <input

                  type="text"

                  placeholder="Search courses..."

                  value={searchQuery}

                  onChange={(e) => setSearchQuery(e.target.value)}

                  className="bg-transparent outline-none text-sm w-full"

                />

              </div>

            </div>

            <div className="flex items-center gap-4 w-48 shrink-0 justify-end">

              {/* Notifications Button */}

              <div className="relative">

                <motion.button

                  whileHover={{ scale: 1.1 }}

                  whileTap={{ scale: 0.95 }}

                  onClick={() => {

                    setShowNotifications(!showNotifications);

                    setShowProfile(false);

                    setShowSettings(false);

                  }}

                  className="relative p-2 hover:bg-slate-100 rounded-xl transition-colors"

                >

                  <motion.div

                    animate={{ rotate: showNotifications ? 15 : 0 }}

                    transition={{ type: "spring", stiffness: 300 }}

                  >

                    <Bell size={20} className="text-slate-600" />

                  </motion.div>

                  {notifications.filter(n => !n.read).length > 0 && (

                    <motion.div

                      className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"

                      animate={{ scale: [1, 1.2, 1] }}

                      transition={{ duration: 2, repeat: Infinity }}

                    />

                  )}

                </motion.button>



                {/* Notifications Dropdown */}

                {showNotifications && (

                  <motion.div

                    variants={dropdownVariants}

                    initial="hidden"

                    animate="visible"

                    exit="exit"

                    className="absolute right-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden"

                  >

                    <div className="p-4 border-b border-slate-200">

                      <div className="flex items-center justify-between">

                        <h3 className="font-semibold text-slate-900">Notifications</h3>

                        <motion.button

                          whileHover={{ scale: 1.05 }}

                          whileTap={{ scale: 0.95 }}

                          className="text-xs text-slate-600 hover:text-slate-700 font-medium"

                        >

                          Mark all as read

                        </motion.button>

                      </div>

                    </div>

                    

                    <div className="max-h-96 overflow-y-auto">

                      {notifications.map((notification, index) => (

                        <motion.div

                          key={notification.id}

                          initial={{ opacity: 0, x: -20 }}

                          animate={{ opacity: 1, x: 0 }}

                          transition={{ delay: index * 0.1 }}

                          className={`p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors ${

                            !notification.read ? 'bg-blue-50/50' : ''

                          }`}

                        >

                          <div className="flex items-start gap-3">

                            <motion.div

                              className={`w-10 h-10 ${notification.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}

                              whileHover={{ scale: 1.1, rotate: 5 }}

                              transition={{ type: "spring" }}

                            >

                              <notification.icon size={18} />

                            </motion.div>

                            <div className="flex-1 min-w-0">

                              <div className="flex items-center justify-between mb-1">

                                <h4 className="font-medium text-slate-900 text-sm">{notification.title}</h4>

                                {!notification.read && (

                                  <motion.div

                                    className="w-2 h-2 bg-blue-500 rounded-full"

                                    animate={{ scale: [1, 1.5, 1] }}

                                    transition={{ duration: 2, repeat: Infinity }}

                                  />

                                )}

                              </div>

                              <p className="text-xs text-slate-600 mb-1">{notification.message}</p>

                              <p className="text-xs text-slate-400">{notification.time}</p>

                            </div>

                          </div>

                        </motion.div>

                      ))}

                    </div>

                    

                    <div className="p-3 border-t border-slate-200">

                      <motion.button

                        whileHover={{ scale: 1.02 }}

                        whileTap={{ scale: 0.98 }}

                        className="w-full text-center text-sm text-slate-600 hover:text-slate-700 font-medium"

                      >

                        View all notifications

                      </motion.button>

                    </div>

                  </motion.div>

                )}

              </div>



              {/* Profile Section */}

              <div className="relative">

                <motion.button

                  whileHover={{ scale: 1.05 }}

                  whileTap={{ scale: 0.95 }}

                  onClick={() => {

                    setShowProfile(!showProfile);

                    setShowNotifications(false);

                    setShowSettings(false);

                  }}

                  className="flex items-center gap-3 hover:bg-slate-50 rounded-xl p-2 transition-colors"

                >

                  <motion.div

                    className="w-10 h-10 bg-gradient-to-br from-slate-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"

                    whileHover={{ scale: 1.1, rotate: 5 }}

                    transition={{ type: "spring" }}

                  >

                    {user?.email?.[0]?.toUpperCase() || 'U'}

                  </motion.div>

                  <div className="text-left">

                    <div className="text-sm font-semibold text-slate-900">

                      {user?.user_metadata?.display_name || 'Student'}

                    </div>

                    <div className="text-xs text-slate-500">Premium Member</div>

                  </div>

                </motion.button>



                {/* Profile Dropdown */}

                {showProfile && (

                  <motion.div

                    variants={dropdownVariants}

                    initial="hidden"

                    animate="visible"

                    exit="exit"

                    className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden"

                  >

                    <div className="p-6 border-b border-slate-200">

                      <div className="flex items-center gap-4">

                        <motion.div
                          className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"

                          whileHover={{ scale: 1.1, rotate: 10 }}

                          transition={{ type: "spring" }}

                        >

                          {user?.email?.[0]?.toUpperCase() || 'U'}

                        </motion.div>

                        <div>

                          <h3 className="font-semibold text-slate-900">

                            {user?.user_metadata?.display_name || 'Student'}

                          </h3>

                          <p className="text-sm text-slate-500">{user?.email || 'student@example.com'}</p>

                          <div className="flex items-center gap-1 mt-1">

                            <div className="w-2 h-2 bg-slate-500 rounded-full"></div>

                            <span className="text-xs text-slate-600 font-medium">Premium Member</span>

                          </div>

                        </div>

                      </div>

                    </div>

                    

                    <div className="p-2">

                      {[

                        { icon: User, label: 'Edit Profile', value: '' },

                        { icon: BookOpen, label: 'Courses', value: '3 Active' },

                        { icon: Award, label: 'Achievements', value: '12 Earned' },

                        { icon: Clock, label: 'Learning Time', value: '24h Total' },

                        { icon: Settings, label: 'Account Settings', value: '' }

                      ].map((item, index) => (

                        <motion.button

                          key={item.label}

                          initial={{ opacity: 0, x: -20 }}

                          animate={{ opacity: 1, x: 0 }}

                          transition={{ delay: index * 0.1 }}

                          whileHover={{ scale: 1.02, x: 5 }}

                          whileTap={{ scale: 0.98 }}

                          className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors"

                        >

                          <div className="flex items-center gap-3">

                            <motion.div

                              whileHover={{ scale: 1.2, rotate: 10 }}

                              transition={{ type: "spring" }}

                            >

                              <item.icon size={18} className="text-slate-600" />

                            </motion.div>

                            <span className="text-sm text-slate-700">{item.label}</span>

                          </div>

                          {item.value && (

                            <span className="text-xs text-white font-bold">{item.value}</span>

                          )}

                        </motion.button>

                      ))}

                    </div>

                    

                    <div className="p-3 border-t border-slate-200">

                      <motion.button

                        whileHover={{ scale: 1.02 }}

                        whileTap={{ scale: 0.98 }}

                        onClick={onLogout}

                        className="w-full flex items-center justify-center gap-2 p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition-colors"

                      >

                        <LogOut size={18} />

                        <span className="font-medium">Sign Out</span>

                      </motion.button>

                    </div>

                  </motion.div>

                )}

              </div>

            </div>

          </div>

        </div>

      </header>



      {/* Navigation Tabs */}

      <div className="bg-white border-b border-slate-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-8">

            {[

              { id: 'overview', label: 'Overview', icon: Grid },
              { id: 'courses', label: 'Courses', icon: BookOpen },
              { id: 'catalog', label: 'Catalog', icon: BookOpen },
              { id: 'progress', label: 'Progress', icon: BarChart3 },
              { id: 'schedule', label: 'Schedule', icon: Calendar },
              { id: 'assignments', label: 'Assignments', icon: FileText },
              { id: 'playground', label: 'Playground', icon: Code2 },
              { id: 'notes', label: 'Notes', icon: FileText },
              { id: 'rating', label: 'Rating', icon: StarIcon }

            ].map((tab, index) => (

              <motion.div

                key={tab.id}

                initial={{ opacity: 0, y: -20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}

              >

                <motion.button
                  onClick={() => setActiveTab(tab.id as any)}
                  className="relative flex items-center gap-2 py-4 px-2 transition-all duration-300 text-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >

                  <motion.div

                    animate={{

                      rotate: activeTab === tab.id ? 360 : 0,

                      scale: activeTab === tab.id ? 1.2 : 1

                    }}

                    transition={{ duration: 0.3, type: "spring" }}

                  >

                    <tab.icon size={18} />

                  </motion.div>

                  <span className="font-medium">{tab.label}</span>

                  {activeTab === tab.id && (

                    <motion.div
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-slate-900"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />

                  )}

                  {activeTab === tab.id && (

                    <motion.div
                      className="absolute inset-0 bg-slate-50 rounded-lg -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                  )}

                </motion.button>

              </motion.div>

            ))}

          </div>

        </div>

      </div>



      {/* Main Content */}

      <main className="max-w-7xl mx-auto px-6 py-8">


      {/* Notes Modal */}
      {selectedNote && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedNote(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden ${
              isModalMaximized ? 'h-[90vh]' : 'h-auto'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedNote.title}</h2>
                  <div className="flex items-center gap-4 text-sm opacity-90">
                    <span className="bg-white/20 px-3 py-1 rounded-full">{selectedNote.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {selectedNote.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {selectedNote.time}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsModalMaximized(!isModalMaximized)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    title={isModalMaximized ? "Minimize" : "Maximize"}
                  >
                    <Maximize size={20} className={isModalMaximized ? "rotate-180" : ""} />
                  </button>
                  <button
                    onClick={() => setSelectedNote(null)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className={`p-6 overflow-y-auto ${
              isModalMaximized ? 'max-h-[85vh]' : 'max-h-[60vh]'
            }`}>
              <div className="prose prose-slate max-w-none">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Note Content</h3>
                
                <div className="bg-white rounded-xl p-6 mb-6 shadow-2xl border border-slate-200">
                  {isEditing ? (
                    <textarea
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                      className="w-full h-64 p-4 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 leading-relaxed"
                      placeholder="Edit your note content..."
                    />
                  ) : (
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedNote.content}</p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200">
                  {isEditing && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          if (selectedNote) {
                            const noteIndex = notes.findIndex(note => note.id === selectedNote.id);
                            if (noteIndex !== -1) {
                              notes[noteIndex].content = editedContent;
                              setSelectedNote({ ...selectedNote, content: editedContent });
                            }
                            setIsEditing(false);
                          }
                        }}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                      >
                        <CheckCircle size={16} />
                        Save
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setIsEditing(false);
                          setEditedContent(selectedNote?.content || '');
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                      >
                        <X size={16} />
                        Cancel
                      </motion.button>
                    </>
                  )}

                  {!isEditing && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        if (selectedNote) {
                          setIsEditing(true);
                          setEditedContent(selectedNote.content);
                        }
                      }}
                      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
                    >
                      <Edit size={16} />
                      Edit Note
                    </motion.button>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
                  >
                    <Share2 size={16} />
                    Share
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (selectedNote) {
                        const printWindow = window.open('', '_blank');
                        if (printWindow) {
                          const processedContent = selectedNote.content
                            .replace(/^(🌱 What is Spring Boot\?)/gm, '<strong>$1</strong>')
                            .replace(/^(⚙️ 1\. Prerequisites)/gm, '<strong>$1</strong>')
                            .replace(/^(🚀 2\. Creating a Spring Boot Project)/gm, '<strong>$1</strong>')
                            .replace(/^(📁 3\. Project Structure)/gm, '<strong>$1</strong>')
                            .replace(/^(🧠 4\. Main Application Class)/gm, '<div style="page-break-before: always;"></div><strong>$1</strong>')
                            .replace(/^(🔧 5\. Spring Boot Configuration)/gm, '<strong>$1</strong>')
                            .replace(/^(🔁 6\. Auto Configuration Concept)/gm, '<strong>$1</strong>')
                            .replace(/^(🌐 7\. Creating a Simple REST Controller)/gm, '<div style="page-break-before: always;"></div><strong>$1</strong>')
                            .replace(/^(▶️ 8\. Running the Application)/gm, '<strong>$1</strong>')
                            .replace(/^(🌍 9\. Output)/gm, '<strong>$1</strong>')
                            .replace(/^(🧩 10\. Key Annotations Summary)/gm, '<strong>$1</strong>')
                            .replace(/^(🏁 Final Flow)/gm, '<strong>$1</strong>')
                            .replace(/^(Key Points)/gm, '<strong>$1</strong>')
                            .replace(/^(Explanation:)/gm, '<strong>$1</strong>')
                            .replace(/^(Method 1: Using Spring Initializr)/gm, '<strong>$1</strong>')
                            .replace(/^(Steps:)/gm, '<strong>$1</strong>')
                            .replace(/^(Important folders:)/gm, '<strong>$1</strong>')
                            .replace(/^(Spring Boot automatically:)/gm, '<strong>$1</strong>')
                            .replace(/^(👉 Based on:)/gm, '<strong>$1</strong>')
                            .replace(/^(Using IDE:)/gm, '<strong>$1</strong>')
                            .replace(/^(Open browser:)/gm, '<strong>$1</strong>')
                            .replace(/^(Output:)/gm, '<strong>$1</strong>')
                            .replace(/^(Annotation\tPurpose)/gm, '<strong>Annotation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Purpose</strong>')
                            .replace(/^(Annotation\s+Purpose)/gm, '<strong>Annotation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&10;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Purpose</strong>')
                            .replace(/^(@SpringBootApplication\s+Main config)/gm, '@SpringBootApplication&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&10;Main config')
                            .replace(/^(@RestController\s+REST API)/gm, '@RestController&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REST API')
                            .replace(/^(@GetMapping\s+HTTP GET)/gm, '@GetMapping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&10;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP GET')
                            .replace(/^(@Autowired\s+Dependency injection)/gm, '@Autowired&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&10;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dependency injection')
                            .replace(/^(Flow:)/gm, '<strong>$1</strong>')
                            .replace(/\n/g, '<br>');
                        
                        const noteContent = `
                            <html>
                              <head>
                                <title>${selectedNote.title}</title>
                                <style>
                                  body { 
                                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                                    line-height: 1.6; 
                                    margin: 40px; 
                                    color: #333;
                                    text-align: left;
                                  }
                                  h1 { 
                                    color: #000000; 
                                    border-bottom: none; 
                                    padding-bottom: 10px; 
                                    font-weight: bold;
                                    font-size: 24px;
                                    text-align: center;
                                  }
                                  .content { 
                                    white-space: pre-wrap; 
                                    margin-top: 20px;
                                    font-size: 14px;
                                    text-align: left;
                                  }
                                  @media print {
                                    body { margin: 20px; }
                                    .no-print { display: none; }
                                  }
                                </style>
                              </head>
                              <body>
                                <h1>${selectedNote.title}</h1>
                                <div class="content">${processedContent}</div>
                                <script>
                                  window.onload = function() {
                                    setTimeout(() => {
                                      window.print();
                                      window.close();
                                    }, 500);
                                  };
                                </script>
                              </body>
                            </html>
                          `;
                        printWindow.document.write(noteContent);
                        printWindow.document.close();
                      }
                    }
                  }}
                  className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2"
                >
                  <Download size={16} />
                  Export
                </motion.button>
              </div>
            </div>
          </div>
          </motion.div>
        </motion.div>
      )}

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Share Note</h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Shareable Link
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={shareLink}
                    readOnly
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-700 text-sm"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(shareLink);
                    }}
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Copy
                  </button>
                </div>
              </div>
              
              <div className="text-xs text-slate-500">
                Anyone with this link can view this note. The link contains all note data and can be shared via email, messaging apps, or social media.
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>




        {/* Schedule Tab */}

        {activeTab === 'schedule' && (

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            className="space-y-8"

          >

            <h2 className="text-xl font-bold text-slate-900">Learning Schedule</h2>

            

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Left Half - Minimized Calendar */}

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">

                <div className="flex items-center justify-between mb-4">

                  <h3 className="text-base font-semibold text-slate-900">Calendar</h3>

                  <div className="flex items-center gap-2">

                    <motion.button

                      whileHover={{ scale: 1.05 }}

                      whileTap={{ scale: 0.95 }}

                      className="p-1.5 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"

                    >

                      <ChevronRight size={14} className="rotate-180" />

                    </motion.button>

                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">

                      March 2026

                    </span>

                    <motion.button

                      whileHover={{ scale: 1.05 }}

                      whileTap={{ scale: 0.95 }}

                      className="p-1.5 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"

                    >

                      <ChevronRight size={14} />

                    </motion.button>

                  </div>

                </div>

                

                {/* Compact Calendar */}

                <div className="grid grid-cols-7 gap-1 text-xs">

                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (

                    <div key={day} className="text-center text-xs font-medium text-slate-500 py-1">

                      {day}

                    </div>

                  ))}

                  {Array.from({ length: 35 }, (_, i) => {

                    const dayNum = i - 2; // March starts on Wednesday

                    const isCurrentMonth = dayNum >= 1 && dayNum <= 31;

                    const isToday = dayNum === 24;

                    const hasEvent = [5, 8, 12, 15, 19, 22, 24, 26, 29].includes(dayNum);

                    

                    return (

                      <motion.div

                        key={i}

                        whileHover={{ scale: 1.1 }}

                        className={`aspect-square flex flex-col items-center justify-center rounded cursor-pointer text-xs shadow-sm hover:shadow-md transition-shadow ${

                          isToday 

                            ? 'bg-slate-600 text-white font-bold shadow-slate-200' 

                            : isCurrentMonth 

                              ? 'bg-slate-50 hover:bg-slate-100 text-slate-900 shadow-slate-200' 

                              : 'text-slate-300'

                        }`}

                      >

                        {isCurrentMonth ? dayNum : ''}

                        {hasEvent && isCurrentMonth && (

                          <div className={`w-0.5 h-0.5 rounded-full mt-0.5 ${isToday ? 'bg-white' : 'bg-slate-500'}`} />

                        )}

                      </motion.div>

                    );

                  })}

                </div>

              </div>



              <motion.div

                whileHover={{ scale: 1.02 }}

                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6"

              >

                <h3 className="text-lg font-semibold text-slate-900 mb-4">Study Goals</h3>

                <div className="space-y-4">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">

                        <CheckCircle2 size={16} className="text-slate-600" />

                      </div>

                      <span className="text-sm text-slate-700">Complete 5 lessons</span>

                    </div>

                    <span className="text-xs font-medium text-slate-600">3/5</span>

                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-2">

                    <div className="bg-slate-500 h-2 rounded-full" style={{ width: '60%' }}></div>

                  </div>

                  

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">

                        <Clock size={16} className="text-blue-600" />

                      </div>

                      <span className="text-sm text-slate-700">Study 10 hours</span>

                    </div>

                    <span className="text-xs font-medium text-blue-600">7.5/10</span>

                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-2">

                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>

                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>

        )}



        {/* Overview Tab */}

        {activeTab === 'overview' && (

          <motion.div

            variants={containerVariants}

            initial="hidden"

            animate="visible"

            className="space-y-8"

          >

            <motion.h2 

              className="text-xl font-bold text-slate-900"

              initial={{ opacity: 0, x: -20 }}

              animate={{ opacity: 1, x: 0 }}

              transition={{ duration: 0.5 }}

            >

              Dashboard Overview

            </motion.h2>

            

            {/* Stats Cards */}

            <motion.div 

              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

              variants={containerVariants}

            >

              {[

                { id: 'courses', title: 'Enrolled Courses', value: '3', change: '+1 this month', icon: BookOpen, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },

                { id: 'progress', title: 'Completion Rate', value: '78%', change: '+12% vs last month', icon: TrendingUp, color: 'from-slate-500 to-slate-600', bgColor: 'bg-slate-50', textColor: 'text-slate-600' },

                { id: 'time', title: 'Learning Time', value: '24h', change: '+3h this week', icon: Clock, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },

                { id: 'achievements', title: 'Achievements', value: '12', change: '+2 this week', icon: Award, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50', textColor: 'text-orange-600' }

              ].map((stat, index) => (

                <motion.div

                  key={stat.id}

                  variants={cardVariants}

                  whileHover={{ 

                    scale: 1.05, 

                    y: -8,

                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"

                  }}

                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative group"

                >

                  {/* Animated gradient background */}

                  <motion.div

                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}

                  />

                  

                  <div className="relative p-6">

                    <motion.div

                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bgColor} mb-4`}

                      whileHover={{ 

                        scale: 1.1, 

                        rotate: 360,

                        transition: { duration: 0.6 }

                      }}

                    >

                      <stat.icon className={stat.textColor} size={24} />

                    </motion.div>

                    

                    <motion.h3

                      className="text-2xl font-bold text-slate-900 mb-1"

                      initial={{ opacity: 0, y: 10 }}

                      animate={{ opacity: 1, y: 0 }}

                      transition={{ delay: index * 0.1 + 0.2 }}

                    >

                      {stat.value}

                    </motion.h3>

                    

                    <motion.p

                      className="text-sm text-slate-600 mb-2"

                      initial={{ opacity: 0, y: 10 }}

                      animate={{ opacity: 1, y: 0 }}

                      transition={{ delay: index * 0.1 + 0.3 }}

                    >

                      {stat.title}

                    </motion.p>

                    

                    <motion.div

                      className={`text-xs font-medium ${stat.textColor} flex items-center gap-1`}

                      initial={{ opacity: 0, x: -10 }}

                      animate={{ opacity: 1, x: 0 }}

                      transition={{ delay: index * 0.1 + 0.4 }}

                    >

                      <motion.div

                        animate={{ scale: [1, 1.2, 1] }}

                        transition={{ duration: 2, repeat: Infinity }}

                      >

                        {stat.change.startsWith('+') ? '📈' : '📊'}

                      </motion.div>

                      {stat.change}

                    </motion.div>

                    

                    {/* Floating particles */}

                    <motion.div

                      className="absolute inset-0 pointer-events-none"

                      initial={{ opacity: 0 }}

                      whileHover={{ opacity: 1 }}

                    >

                      {[...Array(3)].map((_, i) => (

                        <motion.div

                          key={i}

                          className={`absolute w-1 h-1 ${stat.textColor.replace('text', 'bg').replace('600', '400')} rounded-full opacity-30`}

                          initial={{ 

                            x: Math.random() * 100 + "%", 

                            y: Math.random() * 100 + "%",

                            scale: 0

                          }}

                          animate={{ 

                            x: Math.random() * 100 + "%", 

                            y: Math.random() * 100 + "%",

                            scale: [0, 1, 0]

                          }}

                          transition={{ 

                            duration: 3 + Math.random() * 2,

                            repeat: Infinity,

                            delay: Math.random() * 2

                          }}

                        />

                      ))}

                    </motion.div>

                  </div>

                </motion.div>

              ))}

            </motion.div>

          </motion.div>

        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">My Courses</h2>
                <p className="text-slate-500">Continue where you left off</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -4 }}
                  onClick={() => {
                    if (course.id === 'java-fullstack-master') {
                      setCurrentView('lesson');
                    }
                  }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center p-8">
                    {course.thumbnail.startsWith('http') ? (
                      <img src={course.thumbnail} alt={course.title} className="w-24 h-24 object-contain" />
                    ) : (
                      <BookOpen className="text-slate-400" size={48} />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{course.category}</span>
                      <span className="text-xs text-slate-500">Active</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 truncate">{course.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs text-slate-500 mb-1">
                          <span>Progress</span>
                          <span>{course.progress || 0}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress || 0}%` }}
                            className="h-full bg-blue-500"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="text-[10px] text-slate-400">Last accessed: {course.lastAccessed || 'Never'}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setCurrentView('lesson')}
                          className="text-xs font-bold text-slate-600 hover:text-slate-900"
                        >
                          Continue
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Catalog Tab */}
        {activeTab === 'catalog' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <CourseCatalog 
              setCurrentView={setCurrentView} 
              onEnrollCourse={(id) => console.log(`Enrolling in course: ${id}`)} 
            />
          </motion.div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Your Learning Progress</h2>
                <p className="text-slate-500">Track your journey across the curriculum</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">
                    {(() => {
                      const allLessonIds = syllabus.flatMap(s => s.lessons.map((l: any) => l.id));
                      const totalLessons = allLessonIds.length;
                      const completedCount = completedLessons.filter(id => allLessonIds.includes(id)).length;
                      return totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
                    })()}%
                  </div>
                  <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Overall Completion</div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-blue-100 border-t-blue-500 animate-spin-slow rotate-[78deg]" />
              </div>
            </div>

            {/* Global Progress Bar */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex justify-between text-sm font-bold text-slate-900 mb-4">
                <span>Core Modules Completion</span>
                {(() => {
                  const allLessonIds = syllabus.flatMap(s => s.lessons.map((l: any) => l.id));
                  const totalLessons = allLessonIds.length;
                  const completedCount = completedLessons.filter(id => allLessonIds.includes(id)).length;
                  return <span>{completedCount} / {totalLessons} Lessons</span>;
                })()}
              </div>
              <div className="h-4 bg-slate-100 rounded-full overflow-hidden p-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(() => {
                    const allLessonIds = syllabus.flatMap(s => s.lessons.map((l: any) => l.id));
                    const totalLessons = allLessonIds.length;
                    const completedCount = completedLessons.filter(id => allLessonIds.includes(id)).length;
                    return totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;
                  })()}%` }}
                  className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg shadow-blue-500/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {syllabus.map((module) => {
                const totalInModule = module.lessons.length;
                const completedInModule = module.lessons.filter((l: any) => completedLessons.includes(l.id)).length;
                const percentage = Math.round((completedInModule / totalInModule) * 100);
                const stats = moduleStats[module.id];

                return (
                  <motion.div
                    key={module.id}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-1">{module.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          {stats?.startTime ? (
                            <span className="flex items-center gap-1"><Clock size={12} /> Started: {new Date(stats.startTime).toLocaleDateString()}</span>
                          ) : (
                            <span>Not started</span>
                          )}
                          {stats?.endTime && (
                            <span className="text-green-600 font-bold ml-2">✓ Completed</span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-900">{percentage}%</div>
                        <div className="text-[10px] text-slate-400">{completedInModule}/{totalInModule} Lessons</div>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        className={`h-full ${percentage === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}



        {/* Assignments Tab */}

        {activeTab === 'assignments' && (

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            className="space-y-8"

          >

            <h2 className="text-xl font-bold text-slate-900">Assignments</h2>

            

            {/* Assignment Overview Cards */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              <motion.div

                whileHover={{ scale: 1.02 }}

                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white"

              >

                <div className="flex items-center justify-between mb-4">

                  <FileText size={24} />

                  <span className="text-2xl font-bold">12</span>

                </div>

                <div className="text-sm opacity-90">Total Assignments</div>

                <div className="text-xs opacity-75 mt-2">3 this week</div>

              </motion.div>



              <motion.div

                whileHover={{ scale: 1.02 }}

                className="bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl p-6 text-white"

              >

                <div className="flex items-center justify-between mb-4">

                  <CheckCircle2 size={24} />

                  <span className="text-2xl font-bold">8</span>

                </div>

                <div className="text-sm opacity-90">Completed</div>

                <div className="text-xs opacity-75 mt-2">On track</div>

              </motion.div>



              <motion.div

                whileHover={{ scale: 1.02 }}

                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white"

              >

                <div className="flex items-center justify-between mb-4">

                  <Clock size={24} />

                  <span className="text-2xl font-bold">3</span>

                </div>

                <div className="text-sm opacity-90">Pending</div>

                <div className="text-xs opacity-75 mt-2">2 due soon</div>

              </motion.div>



              <motion.div

                whileHover={{ scale: 1.02 }}

                className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white"

              >

                <div className="flex items-center justify-between mb-4">

                  <Award size={24} />

                  <span className="text-2xl font-bold">85%</span>

                </div>

                <div className="text-sm opacity-90">Avg Score</div>

                <div className="text-xs opacity-75 mt-2">Above average</div>

              </motion.div>

            </div>



            {/* Assignment Filters */}

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-lg font-semibold text-slate-900">Assignment List</h3>

                <div className="flex gap-2">

                  <button className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">

                    All

                  </button>

                  <button className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors">

                    Pending

                  </button>

                  <button className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors">

                    Completed

                  </button>

                  <button className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors">

                    Graded

                  </button>

                </div>

              </div>

              

              <div className="space-y-4">

                {/* Assignment 1 - Pending */}

                <motion.div

                  whileHover={{ x: 4 }}

                  className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-200 transition-all cursor-pointer"

                >

                  <div className="flex items-start justify-between mb-4">

                    <div className="flex-1">

                      <div className="flex items-center gap-3 mb-2">

                        <h4 className="font-semibold text-slate-900">Java Control Flow Implementation</h4>

                        <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">

                          Pending

                        </span>

                        <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">

                          Due Soon

                        </span>

                      </div>

                      <p className="text-sm text-slate-600 mb-3">Implement a Java program that demonstrates all control flow statements including if-else, switch, for loops, while loops, and do-while loops with practical examples.</p>

                      <div className="flex items-center gap-4 text-xs text-slate-500">

                        <span className="flex items-center gap-1">

                          <BookOpen size={12} />

                          Java Fundamentals

                        </span>

                        <span className="flex items-center gap-1">

                          <Target size={12} />

                          Medium

                        </span>

                        <span className="flex items-center gap-1">

                          <Award size={12} />

                          15 points

                        </span>

                        <span className="flex items-center gap-1">

                          <Calendar size={12} />

                          Due: Mar 28, 2024

                        </span>

                      </div>

                    </div>

                    <div className="flex items-center gap-2">

                      <div className="text-right">

                        <div className="text-lg font-bold text-blue-600">4 days</div>

                        <div className="text-xs text-slate-500">Time remaining</div>

                      </div>

                      <ChevronRight size={20} className="text-slate-400" />

                    </div>

                  </div>

                  

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">

                    <div className="flex items-center gap-4">

                      <div className="text-xs text-slate-500">

                        Progress: 0% complete

                      </div>

                      <div className="w-32 bg-slate-200 rounded-full h-2">

                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '0%' }}></div>

                      </div>

                    </div>

                    <motion.button

                      whileHover={{ scale: 1.05 }}

                      whileTap={{ scale: 0.95 }}

                      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"

                    >

                      Start Assignment

                    </motion.button>

                  </div>

                </motion.div>



                {/* Assignment 2 - Completed */}

                <motion.div

                  whileHover={{ x: 4 }}

                  className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-200 transition-all cursor-pointer"

                >

                  <div className="flex items-start justify-between mb-4">

                    <div className="flex-1">

                      <div className="flex items-center gap-3 mb-2">

                        <h4 className="font-semibold text-slate-900">Object-Oriented Programming Project</h4>

                        <span className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full">

                          Completed

                        </span>

                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">

                          Graded

                        </span>

                      </div>

                      <p className="text-sm text-slate-600 mb-3">Design and implement a comprehensive banking system using OOP principles including inheritance, polymorphism, encapsulation, and abstraction with proper UML documentation.</p>

                      <div className="flex items-center gap-4 text-xs text-slate-500">

                        <span className="flex items-center gap-1">

                          <BookOpen size={12} />

                          Java OOP

                        </span>

                        <span className="flex items-center gap-1">

                          <Target size={12} />

                          Hard

                        </span>

                        <span className="flex items-center gap-1">

                          <Award size={12} />

                          25 points

                        </span>

                        <span className="flex items-center gap-1">

                          <Calendar size={12} />

                          Submitted: Mar 20, 2024

                        </span>

                      </div>

                    </div>

                    <div className="flex items-center gap-2">

                      <div className="text-right">

                        <div className="text-lg font-bold text-slate-600">22/25</div>

                        <div className="text-xs text-slate-500">Score</div>

                      </div>

                      <ChevronRight size={20} className="text-slate-400" />

                    </div>

                  </div>

                  

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">

                    <div className="flex items-center gap-4">

                      <div className="text-xs text-slate-500">

                        Grade: A- (Excellent work)

                      </div>

                      <div className="w-32 bg-slate-200 rounded-full h-2">

                        <div className="bg-slate-500 h-2 rounded-full" style={{ width: '88%' }}></div>

                      </div>

                    </div>

                    <motion.button

                      whileHover={{ scale: 1.05 }}

                      whileTap={{ scale: 0.95 }}

                      className="px-4 py-2 bg-slate-600 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors"

                    >

                      View Feedback

                    </motion.button>

                  </div>

                </motion.div>



                {/* Assignment 3 - Submitted */}

                <motion.div

                  whileHover={{ x: 4 }}

                  className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-200 transition-all cursor-pointer"

                >

                  <div className="flex items-start justify-between mb-4">

                    <div className="flex-1">

                      <div className="flex items-center gap-3 mb-2">

                        <h4 className="font-semibold text-slate-900">Database Integration Project</h4>

                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">

                          Submitted

                        </span>

                        <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">

                          Pending Grade

                        </span>

                      </div>

                      <p className="text-sm text-slate-600 mb-3">Create a full-stack application with Spring Boot backend and React frontend, implementing CRUD operations, authentication, and real-time data synchronization.</p>

                      <div className="flex items-center gap-4 text-xs text-slate-500">

                        <span className="flex items-center gap-1">

                          <BookOpen size={12} />

                          Full Stack

                        </span>

                        <span className="flex items-center gap-1">

                          <Target size={12} />

                          Hard

                        </span>

                        <span className="flex items-center gap-1">

                          <Award size={12} />

                          30 points

                        </span>

                        <span className="flex items-center gap-1">

                          <Calendar size={12} />

                          Submitted: Mar 25, 2024

                        </span>

                      </div>

                    </div>

                    <div className="flex items-center gap-2">

                      <div className="text-right">

                        <div className="text-lg font-bold text-blue-600">-</div>

                        <div className="text-xs text-slate-500">Pending</div>

                      </div>

                      <ChevronRight size={20} className="text-slate-400" />

                    </div>

                  </div>

                  

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">

                    <div className="flex items-center gap-4">

                      <div className="text-xs text-slate-500">

                        Status: Awaiting review

                      </div>

                      <div className="w-32 bg-slate-200 rounded-full h-2">

                        <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>

                      </div>

                    </div>

                    <motion.button

                      whileHover={{ scale: 1.05 }}

                      whileTap={{ scale: 0.95 }}

                      className="px-4 py-2 bg-slate-200 text-slate-800 text-sm font-medium rounded-lg hover:bg-slate-300 transition-colors"

                    >

                      View Submission

                    </motion.button>

                  </div>

                </motion.div>

              </div>

            </div>

          </motion.div>

        )}



        {/* Playground Tab */}
        {activeTab === 'playground' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Interactive Playground</h2>
                <p className="text-slate-500 text-sm mt-1">Multi-language coding environments for hands-on practice</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 shadow-sm">
                      {['JS', 'JV', 'SQ'][i-1]}
                    </div>
                  ))}
                </div>
                <div className="h-8 w-px bg-slate-200 mx-1" />
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  Ready to code
                </div>
              </div>
            </div>

            <PracticeLab />
          </motion.div>
        )}

        {/* Notes Tab */}

        {activeTab === 'notes' && (

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            className="space-y-6"

          >

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold text-slate-900">My Notes</h2>

              <motion.button

                whileHover={{ scale: 1.02 }}

                whileTap={{ scale: 0.98 }}

                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"

              >

                <Plus size={16} />

                Add Note

              </motion.button>

            </div>



            {/* Notes Categories */}

            <div className="flex gap-2 flex-wrap">

              {['All', 'Java', 'React', 'Spring Boot', 'MongoDB', 'General'].map((category) => (

                <motion.button

                  key={category}

                  onClick={() => setSelectedCategory(category)}

                  whileHover={{ scale: 1.05 }}

                  whileTap={{ scale: 0.95 }}

                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    category === selectedCategory 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}

                >

                  {category}

                </motion.button>

              ))}

            </div>



            {/* Notes Grid */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Sample Notes */}

              {filteredNotes.map((note) => (

                <motion.div

                  key={note.id}

                  initial={{ opacity: 0, y: 20 }}

                  animate={{ opacity: 1, y: 0 }}

                  whileHover={{ scale: 1.02, y: -2 }}

                  onClick={() => note.title === 'Java Spring Boot Configuration' && setSelectedNote(note)}

                  className="bg-white rounded-xl shadow-lg shadow-slate-300/50 border border-slate-200 p-4 cursor-pointer hover:shadow-xl hover:shadow-slate-400/60 transition-all"

                >

                  <div className="flex items-start justify-between mb-3">

                    <div className="flex items-center gap-2">

                      <div className={`w-2 h-2 rounded-full ${

                        note.category === 'Java' ? 'bg-red-500' :

                        note.category === 'React' ? 'bg-cyan-500' :

                        note.category === 'Spring Boot' ? 'bg-green-500' :

                        note.category === 'MongoDB' ? 'bg-emerald-500' :

                        'bg-slate-500'

                      }`}></div>

                      <span className="text-xs font-medium text-slate-600">{note.category}</span>

                    </div>

                    <div className="flex items-center gap-1">

                      <button className="p-1 text-slate-400 hover:text-slate-600">

                        <Edit size={14} />

                      </button>

                      <button className="p-1 text-slate-400 hover:text-red-600">

                        <Trash2 size={14} />

                      </button>

                    </div>

                  </div>

                  

                  <h3 className="font-semibold text-slate-900 mb-2">{note.title}</h3>

                  

                  <p className="text-sm text-slate-600 mb-3 line-clamp-3">{note.content}</p>

                  

                  <div className="flex items-center justify-between text-xs text-slate-500">

                    <div className="flex items-center gap-1">

                      <Calendar size={12} />

                      <span>{note.date}</span>

                    </div>

                    <div className="flex items-center gap-1">

                      <Clock size={12} />

                      <span>{note.time}</span>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>



            {/* Empty State */}

            {filteredNotes.length === 0 && (

              <div className="text-center py-12">

                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">

                  <FileText size={32} className="text-slate-400" />

                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {selectedCategory === 'All' ? 'No notes yet' : `No ${selectedCategory} notes yet`}
                </h3>

                <p className="text-slate-500 mb-4">
                  {selectedCategory === 'All' 
                    ? 'Start taking notes for your courses' 
                    : `Try creating notes for ${selectedCategory} or select a different category`
                  }
                </p>

                <motion.button

                  whileHover={{ scale: 1.02 }}

                  whileTap={{ scale: 0.98 }}

                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"

                >

                  {selectedCategory === 'All' ? 'Create Your First Note' : 'Create Note'}

                </motion.button>

              </div>

            )}

          </motion.div>

        )}



        {/* Note Detail Modal */}

        {selectedNote && (

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"

            onClick={() => setSelectedNote(null)}

          >

            <motion.div

              initial={{ scale: 0.9, opacity: 0 }}

              animate={{ scale: 1, opacity: 1 }}

              exit={{ scale: 0.9, opacity: 0 }}

              onClick={(e) => e.stopPropagation()}

              className={`bg-white rounded-2xl shadow-2xl shadow-black/20 transition-all duration-300 ${
                isModalMaximized 
                  ? 'w-[95vw] h-[95vh] max-w-none max-h-none' 
                  : 'max-w-2xl w-full max-h-[80vh]'
              } overflow-hidden`}

            >

              {/* Modal Header */}

              <div className="bg-white/20 backdrop-blur-sm p-6 text-black border-b border-slate-200">

                <div className="flex items-start justify-between">

                  <div>

                    <h2 className="text-2xl font-bold mb-2">{selectedNote.title}</h2>

                    <div className="flex items-center gap-3 text-black">

                      <div className="flex items-center gap-2">

                        <div className="w-3 h-3 bg-black rounded-full"></div>

                        <span className="font-medium">{selectedNote.category}</span>

                      </div>

                      <div className="flex items-center gap-1">

                        <Calendar size={14} />

                        <span>{selectedNote.date}</span>

                      </div>

                      <div className="flex items-center gap-1">

                        <Clock size={14} />

                        <span>{selectedNote.time}</span>

                      </div>

                    </div>

                  </div>

                  

                  <div className="flex items-center gap-1">

                    <button

                      onClick={() => setIsModalMaximized(!isModalMaximized)}

                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"

                      title={isModalMaximized ? "Minimize" : "Maximize"}

                    >

                      <Maximize size={20} className={isModalMaximized ? "rotate-180" : ""} />

                    </button>

                    <button

                      onClick={() => setSelectedNote(null)}

                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"

                    >

                      <X size={20} />

                    </button>

                  </div>

                </div>

              </div>



              {/* Modal Content */}

              <div className={`p-6 overflow-y-auto ${
                isModalMaximized ? 'max-h-[85vh]' : 'max-h-[60vh]'
              }`}>

                <div className="prose prose-slate max-w-none">

                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Note Content</h3>

                  

                  <div className="bg-white rounded-xl p-6 mb-6 shadow-2xl border border-slate-200">

                    {isEditing ? (
                      <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="w-full h-64 p-4 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 leading-relaxed"
                        placeholder="Edit your note content..."
                      />
                    ) : (
                      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedNote.content}</p>
                    )}

                  </div>



                  {/* Additional Note Details */}

                  <div className="border-t border-slate-200 pt-4">

                    <h4 className="font-semibold text-slate-900 mb-3">Key Points</h4>

                    <ul className="space-y-2 text-slate-600">

                      {selectedNote.category === 'Java' && selectedNote.title === 'Java Spring Boot Configuration' && (

                        <>

                          <li className="flex items-start gap-2">

                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>

                            <span>Configure application.properties for database connections</span>

                          </li>

                          <li className="flex items-start gap-2">

                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>

                            <span>Set up dependency injection with @Component and @Autowired</span>

                          </li>

                          <li className="flex items-start gap-2">

                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>

                            <span>Configure server port: server.port=8080</span>

                          </li>

                          <li className="flex items-start gap-2">

                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>

                            <span>Database URL: spring.datasource.url=jdbc:mysql://localhost:3306/dbname</span>

                          </li>

                          <li className="flex items-start gap-2">

                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>

                            <span>Enable JPA repositories with @EnableJpaRepositories</span>

                          </li>

                        </>

                      )}

                    </ul>

                  </div>



                  {/* Action Buttons */}

                  <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200">

                    {isEditing && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            if (selectedNote) {
                              // Find and update the note in the notes array
                              const noteIndex = notes.findIndex(note => note.id === selectedNote.id);
                              if (noteIndex !== -1) {
                                notes[noteIndex].content = editedContent;
                                setSelectedNote({ ...selectedNote, content: editedContent });
                              }
                              setIsEditing(false);
                            }
                          }}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                        >
                          <CheckCircle size={16} />
                          Save
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setIsEditing(false);
                            setEditedContent(selectedNote?.content || '');
                          }}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                        >
                          <X size={16} />
                          Cancel
                        </motion.button>
                      </>
                    )}

                    {!isEditing && (
                      <motion.button

                        whileHover={{ scale: 1.02 }}

                        whileTap={{ scale: 0.98 }}

                        onClick={() => {
                          if (selectedNote) {
                            setIsEditing(true);
                            setEditedContent(selectedNote.content);
                          }
                        }}

                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"

                      >

                        <Edit size={16} />

                        Edit Note

                      </motion.button>
                    )}

                    

                    <motion.button

                      whileHover={{ scale: 1.02 }}

                      whileTap={{ scale: 0.98 }}

                      onClick={() => {
                        if (selectedNote) {
                          // Generate a shareable link with note data
                          const noteData = {
                            id: selectedNote.id,
                            title: selectedNote.title,
                            category: selectedNote.category,
                            content: selectedNote.content,
                            date: selectedNote.date,
                            time: selectedNote.time
                          };
                          const encodedData = btoa(JSON.stringify(noteData));
                          const link = `${window.location.origin}${window.location.pathname}?note=${encodedData}`;
                          setShareLink(link);
                          setShowShareModal(true);
                        }
                      }}

                      className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"

                    >

                      <Share2 size={16} />

                      Share

                    </motion.button>

                    

                    <motion.button

                      whileHover={{ scale: 1.02 }}

                      whileTap={{ scale: 0.98 }}

                      onClick={() => {
                        if (selectedNote) {
                          // Create a new window for printing
                          const printWindow = window.open('', '_blank');
                          if (printWindow) {
                            // Process content to make headings bold
                          const processedContent = selectedNote.content
                            .replace(/^(🌱 What is Spring Boot\?)/gm, '<strong>$1</strong>')
                            .replace(/^(⚙️ 1\. Prerequisites)/gm, '<strong>$1</strong>')
                            .replace(/^(🚀 2\. Creating a Spring Boot Project)/gm, '<strong>$1</strong>')
                            .replace(/^(📁 3\. Project Structure)/gm, '<strong>$1</strong>')
                            .replace(/^(🧠 4\. Main Application Class)/gm, '<div style="page-break-before: always;"></div><strong>$1</strong>')
                            .replace(/^(🔧 5\. Spring Boot Configuration)/gm, '<strong>$1</strong>')
                            .replace(/^(🔁 6\. Auto Configuration Concept)/gm, '<strong>$1</strong>')
                            .replace(/^(🌐 7\. Creating a Simple REST Controller)/gm, '<div style="page-break-before: always;"></div><strong>$1</strong>')
                            .replace(/^(▶️ 8\. Running the Application)/gm, '<strong>$1</strong>')
                            .replace(/^(🌍 9\. Output)/gm, '<strong>$1</strong>')
                            .replace(/^(🧩 10\. Key Annotations Summary)/gm, '<strong>$1</strong>')
                            .replace(/^(🏁 Final Flow)/gm, '<strong>$1</strong>')
                            .replace(/^(Key Points)/gm, '<strong>$1</strong>')
                            .replace(/^(Explanation:)/gm, '<strong>$1</strong>')
                            .replace(/^(Method 1: Using Spring Initializr)/gm, '<strong>$1</strong>')
                            .replace(/^(Steps:)/gm, '<strong>$1</strong>')
                            .replace(/^(Important folders:)/gm, '<strong>$1</strong>')
                            .replace(/^(Spring Boot automatically:)/gm, '<strong>$1</strong>')
                            .replace(/^(👉 Based on:)/gm, '<strong>$1</strong>')
                            .replace(/^(Using IDE:)/gm, '<strong>$1</strong>')
                            .replace(/^(Open browser:)/gm, '<strong>$1</strong>')
                            .replace(/^(Output:)/gm, '<strong>$1</strong>')
                            .replace(/^(Annotation\tPurpose)/gm, '<strong>Annotation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Purpose</strong>')
                            .replace(/^(Annotation\s+Purpose)/gm, '<strong>Annotation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&10;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Purpose</strong>')
                            .replace(/^(@SpringBootApplication\s+Main config)/gm, '@SpringBootApplication&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Main config')
                            .replace(/^(@RestController\s+REST API)/gm, '@RestController&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REST API')
                            .replace(/^(@GetMapping\s+HTTP GET)/gm, '@GetMapping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&10;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP GET')
                            .replace(/^(@Autowired\s+Dependency injection)/gm, '@Autowired&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&10;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dependency injection')
                            .replace(/^(Flow:)/gm, '<strong>$1</strong>')
                            .replace(/\n/g, '<br>');
                          
                          const noteContent = `
                              <html>
                                <head>
                                  <title>${selectedNote.title}</title>
                                  <style>
                                    body { 
                                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                                      line-height: 1.6; 
                                      margin: 40px; 
                                      color: #333;
                                      text-align: left;
                                    }
                                    h1 { 
                                      color: #000000; 
                                      border-bottom: none; 
                                      padding-bottom: 10px; 
                                      font-weight: bold;
                                      font-size: 24px;
                                      text-align: center;
                                    }
                                    .metadata { 
                                      background: #f8fafc; 
                                      padding: 15px; 
                                      border-radius: 8px; 
                                      margin: 20px 0; 
                                      border-left: 4px solid #2563eb;
                                    }
                                    .metadata-item { 
                                      margin: 5px 0; 
                                      font-weight: 500;
                                    }
                                    .content { 
                                      white-space: pre-wrap; 
                                      margin-top: 20px;
                                      font-size: 14px;
                                      text-align: left;
                                    }
                                    @media print {
                                      body { margin: 20px; }
                                      .no-print { display: none; }
                                    }
                                  </style>
                                </head>
                                <body>
                                  <h1>${selectedNote.title}</h1>
                                  <div class="content">${processedContent}</div>
                                  <script>
                                    window.onload = function() {
                                      setTimeout(() => {
                                        window.print();
                                        window.close();
                                      }, 500);
                                    };
                                  </script>
                                </body>
                              </html>
                            `;
                            printWindow.document.write(noteContent);
                            printWindow.document.close();
                          }
                        }
                      }}

                      className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2"

                    >

                      <Download size={16} />

                      Export

                    </motion.button>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}



        {/* Share Modal */}
        <AnimatePresence>
          {showShareModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowShareModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Share Note</h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Shareable Link
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={shareLink}
                    readOnly
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-700 text-sm"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(shareLink);
                      // You could add a toast notification here
                    }}
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Copy
                  </button>
                </div>
              </div>
              
              <div className="text-xs text-slate-500">
                Anyone with this link can view this note. The link contains all note data and can be shared via email, messaging apps, or social media.
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>



        {/* Rating Tab */}

        {activeTab === 'rating' && (

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            className="space-y-4"

          >

            <motion.button

              whileHover={{ scale: 1.03 }}

              whileTap={{ scale: 0.97 }}

              onClick={() => setShowRatingPrompt(true)}

              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 text-white text-sm font-semibold rounded-xl hover:bg-slate-700 transition-colors"

            >

              <Star size={16} />

              Give Rating

            </motion.button>

            {lastSubmittedRating && (

              <div className="text-sm text-slate-700 inline-flex items-center gap-2 ml-3">

                <CheckCircle2 size={16} />

                Thanks! You submitted a {lastSubmittedRating}-star rating.

              </div>

            )}

            {perCoursePieData.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-48 my-8">
                {perCoursePieData.map((course) => (
                  <div key={course.courseId} className="relative w-[20rem] h-[20rem] min-w-[20rem] min-h-[20rem] max-w-[20rem] max-h-[20rem] rounded-full flex-shrink-0" style={course.chartStyle}>
                    <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center">
                      {course.centerImage ? (
                        <img
                          src={course.centerImage}
                          alt={course.courseTitle}
                          className="w-24 h-24 object-contain"
                        />
                      ) : (
                        <div className="text-center leading-tight">
                          <div className="text-3xl font-bold text-slate-700">{course.courseInitials}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-3">

              {courseRatings.map((item) => (

                <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4">

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <div className="text-sm font-semibold text-slate-900">{item.courseTitle}</div>

                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">

                        <User size={12} />

                        {item.userName}

                        <span>•</span>

                        <Clock size={12} />

                        {item.time}

                      </div>

                    </div>

                    <div className="flex items-center gap-1">

                      {[...Array(5)].map((_, i) => (

                        <Star

                          key={i}

                          size={14}

                          className={i < item.rating ? 'text-yellow-500 fill-yellow-500' : 'text-slate-300'}

                        />

                      ))}

                    </div>

                  </div>

                  {item.comment && (

                    <p className="text-sm text-slate-600 mt-3">{item.comment}</p>

                  )}

                </div>

              ))}

            </div>

            {showRatingPrompt && (

              <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">

                <motion.div

                  initial={{ opacity: 0, scale: 0.95, y: 10 }}

                  animate={{ opacity: 1, scale: 1, y: 0 }}

                  className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-6"

                >

                  <h4 className="text-lg font-semibold text-slate-900 mb-1">Rate Your Experience</h4>

                  <p className="text-sm text-slate-500 mb-5">Choose a course and submit your rating.</p>

                  <div className="mb-4">

                    <label className="text-sm font-medium text-slate-700 block mb-2">Course</label>

                    <select

                      value={selectedCourseForRating}

                      onChange={(e) => setSelectedCourseForRating(e.target.value)}

                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-slate-500"

                    >

                      {enrolledCourses.map((course) => (

                        <option key={course.id} value={course.id}>

                          {course.title}

                        </option>

                      ))}

                    </select>

                  </div>

                  <div className="flex items-center justify-center gap-2 mb-6">

                    {[1, 2, 3, 4, 5].map((star) => (

                      <button

                        key={star}

                        type="button"

                        onClick={() => setSelectedRating(star)}

                        onMouseEnter={() => setHoverRating(star)}

                        onMouseLeave={() => setHoverRating(0)}

                        className="p-1"

                      >

                        <Star

                          size={30}

                          className={`${(hoverRating || selectedRating) >= star ? 'text-yellow-500 fill-yellow-500' : 'text-slate-300'} transition-colors`}

                        />

                      </button>

                    ))}

                  </div>

                  <div className="mb-5">

                    <label className="text-sm font-medium text-slate-700 block mb-2">Comment (optional)</label>

                    <textarea

                      value={ratingComment}

                      onChange={(e) => setRatingComment(e.target.value)}

                      placeholder="Write a short feedback..."

                      rows={3}

                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-slate-500 resize-none"

                    />

                  </div>

                  <div className="flex items-center justify-end gap-3">

                    <button

                      type="button"

                      onClick={() => setShowRatingPrompt(false)}

                      className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"

                    >

                      Cancel

                    </button>

                    <motion.button

                      whileHover={{ scale: selectedRating ? 1.03 : 1 }}

                      whileTap={{ scale: selectedRating ? 0.97 : 1 }}

                      type="button"

                      disabled={!selectedRating}

                      onClick={() => {

                        const selectedCourse = enrolledCourses.find((course) => course.id === selectedCourseForRating);

                        if (!selectedCourse) return;

                        setCourseRatings((prev) => [
                          {
                            id: `r-${Date.now()}`,
                            userName: user?.user_metadata?.display_name || user?.email || 'Student',
                            courseId: selectedCourse.id,
                            courseTitle: selectedCourse.title,
                            rating: selectedRating,
                            comment: ratingComment.trim(),
                            time: 'Just now'
                          },
                          ...prev
                        ]);

                        setLastSubmittedRating(selectedRating);

                        setShowRatingPrompt(false);

                        setSelectedRating(0);

                        setHoverRating(0);

                        setRatingComment('');

                      }}

                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 text-white text-sm font-semibold rounded-xl hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"

                    >

                      <Send size={14} />

                      Submit Rating

                    </motion.button>

                  </div>

                </motion.div>

              </div>

            )}

          </motion.div>

        )}

      </main>

    </div>

  );

}

