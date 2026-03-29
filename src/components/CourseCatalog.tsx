import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Users, 
  Star, 
  Clock, 
  DollarSign,
  PlayCircle,
  Calendar,
  Award,
  ChevronRight,
  Grid,
  List,
  Heart,
  Share2
} from 'lucide-react';

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
  price: string;
  tags: string[];
  language: string;
  subtitles: string[];
  certificate: boolean;
  lastUpdated: string;
  requirements: string[];
  whatYouLearn: string[];
}

interface CourseCatalogProps {
  setCurrentView: (view: string) => void;
  onEnrollCourse: (courseId: string) => void;
}

export default function CourseCatalog({ setCurrentView, onEnrollCourse }: CourseCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', label: 'All Courses', count: 24 },
    { id: 'programming', label: 'Programming', count: 12 },
    { id: 'frontend', label: 'Frontend', count: 6 },
    { id: 'backend', label: 'Backend', count: 8 },
    { id: 'database', label: 'Database', count: 4 },
    { id: 'cloud', label: 'Cloud Computing', count: 6 }
  ];

  const levels = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ];

  const sortOptions = [
    { id: 'popular', label: 'Most Popular' },
    { id: 'rating', label: 'Highest Rated' },
    { id: 'newest', label: 'Newest' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' }
  ];

  const courses: Course[] = [
    {
      id: 'java-fullstack-master',
      title: 'Java Full Stack Development Masterclass',
      instructor: 'D. Sirisha',
      description: 'Complete Java development course covering Core Java, Spring Boot, React, MongoDB, and more. Build real-world applications from scratch with industry-standard practices.',
      category: 'programming',
      level: 'intermediate',
      duration: '16 weeks',
      enrolledCount: 1240,
      rating: 4.8,
      thumbnail: 'https://www.pngmart.com/files/23/Java-PNG-Photos.png',
      price: 'Free',
      tags: ['Java', 'Spring Boot', 'React', 'MongoDB', 'REST API', 'Full Stack'],
      language: 'English',
      subtitles: ['English', 'Spanish', 'Hindi'],
      certificate: true,
      lastUpdated: '2024-12-15',
      requirements: ['Basic programming knowledge', 'Computer with internet access', 'Dedication to learn'],
      whatYouLearn: [
        'Core Java fundamentals & OOP concepts',
        'Spring Boot framework & microservices',
        'React frontend development',
        'MongoDB database design',
        'REST API development & integration',
        'Real-world project building',
        'Industry best practices & patterns'
      ]
    },
    {
      id: '2',
      title: 'Advanced React & Redux Masterclass',
      instructor: 'John Smith',
      description: 'Master React development with Redux, hooks, and modern patterns. Build scalable applications with best practices.',
      category: 'frontend',
      level: 'advanced',
      duration: '8 weeks',
      enrolledCount: 890,
      rating: 4.9,
      thumbnail: 'react-advanced',
      price: '₹4,149',
      tags: ['React', 'Redux', 'JavaScript', 'TypeScript'],
      language: 'English',
      subtitles: ['English', 'French'],
      certificate: true,
      lastUpdated: '2024-12-10',
      requirements: ['JavaScript knowledge', 'Basic React experience'],
      whatYouLearn: [
        'Advanced React patterns',
        'Redux state management',
        'Performance optimization',
        'Testing strategies',
        'Deployment techniques'
      ]
    },
    {
      id: '3',
      title: 'Python for Data Science & ML',
      instructor: 'Dr. Sarah Johnson',
      description: 'Learn Python programming with focus on data science, machine learning, and artificial intelligence applications.',
      category: 'programming',
      level: 'beginner',
      duration: '12 weeks',
      enrolledCount: 2100,
      rating: 4.7,
      thumbnail: 'python-ds',
      price: '₹6,639',
      tags: ['Python', 'Data Science', 'Machine Learning', 'AI'],
      language: 'English',
      subtitles: ['English', 'Chinese', 'Spanish'],
      certificate: true,
      lastUpdated: '2024-12-08',
      requirements: ['Basic math skills', 'No programming experience needed'],
      whatYouLearn: [
        'Python fundamentals',
        'Data analysis with Pandas',
        'Machine learning algorithms',
        'Data visualization',
        'Neural networks'
      ]
    },
    {
      id: '4',
      title: 'Cloud Architecture with AWS',
      instructor: 'Mike Wilson',
      description: 'Design and deploy scalable cloud solutions using AWS services. Prepare for AWS certification exams.',
      category: 'cloud',
      level: 'intermediate',
      duration: '10 weeks',
      enrolledCount: 1560,
      rating: 4.6,
      thumbnail: 'aws-cloud',
      price: '₹8,299',
      tags: ['AWS', 'Cloud Computing', 'DevOps', 'Architecture'],
      language: 'English',
      subtitles: ['English', 'Japanese'],
      certificate: true,
      lastUpdated: '2024-12-05',
      requirements: ['Basic networking knowledge', 'Linux familiarity'],
      whatYouLearn: [
        'AWS core services',
        'Cloud architecture patterns',
        'Security best practices',
        'Cost optimization',
        'DevOps pipelines'
      ]
    },
    {
      id: '5',
      title: 'MongoDB Database Mastery',
      instructor: 'Alex Chen',
      description: 'Complete MongoDB course from basics to advanced. Learn NoSQL database design and optimization.',
      category: 'database',
      level: 'intermediate',
      duration: '6 weeks',
      enrolledCount: 780,
      rating: 4.5,
      thumbnail: 'mongodb',
      price: '₹3,319',
      tags: ['MongoDB', 'NoSQL', 'Database', 'Node.js'],
      language: 'English',
      subtitles: ['English'],
      certificate: true,
      lastUpdated: '2024-12-01',
      requirements: ['Basic database concepts', 'JavaScript knowledge'],
      whatYouLearn: [
        'MongoDB fundamentals',
        'Schema design',
        'Aggregation framework',
        'Performance tuning',
        'Replication and sharding'
      ]
    },
    {
      id: '6',
      title: 'Node.js Backend Development',
      instructor: 'Maria Garcia',
      description: 'Build scalable backend applications with Node.js, Express, and microservices architecture.',
      category: 'backend',
      level: 'intermediate',
      duration: '8 weeks',
      enrolledCount: 920,
      rating: 4.7,
      thumbnail: 'nodejs',
      price: '₹4,979',
      tags: ['Node.js', 'Express', 'JavaScript', 'Microservices'],
      language: 'English',
      subtitles: ['English', 'Portuguese'],
      certificate: true,
      lastUpdated: '2024-11-28',
      requirements: ['JavaScript proficiency', 'Basic web concepts'],
      whatYouLearn: [
        'Node.js runtime',
        'Express framework',
        'REST API design',
        'Authentication',
        'Microservices patterns'
      ]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.enrolledCount - a.enrolledCount;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      default:
        return 0;
    }
  });

  const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className={`relative h-48 flex items-center justify-center overflow-hidden ${course.thumbnail.startsWith('http') ? 'bg-white' : 'bg-gradient-to-br from-slate-400 to-teal-600'}`}>
        {course.thumbnail.startsWith('http') ? (
          <img src={course.thumbnail} alt={course.title} className="w-24 h-24 object-contain drop-shadow-md" />
        ) : (
          <BookOpen className="text-white" size={48} />
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
            {course.level}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Heart size={16} />
          </button>
          <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Share2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded-full">
            {course.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500 fill-yellow-500" size={14} />
            <span className="text-sm font-semibold">{course.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-slate-600 mb-3 line-clamp-3">{course.description}</p>
        
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.enrolledCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award size={14} />
            <span>Certificate</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {course.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
          {course.tags.length > 3 && (
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
              +{course.tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <div className="text-2xl font-bold text-slate-900">{course.price}</div>
            {course.certificate && (
              <div className="text-xs text-slate-600 font-medium">Certificate included</div>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (course.id === 'java-fullstack-master') {
                setCurrentView('lesson');
              } else {
                onEnrollCourse(course.id);
              }
            }}
            className="bg-slate-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            Enroll Now
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const CourseListItem: React.FC<{ course: Course }> = ({ course }) => (
    <motion.div
      whileHover={{ x: 5 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex gap-6"
    >
      <div className="w-32 h-32 bg-gradient-to-br from-slate-400 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
        <BookOpen className="text-white" size={32} />
      </div>
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">{course.title}</h3>
            <p className="text-sm text-slate-600 line-clamp-2 mb-2">{course.description}</p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-full">
                {course.level}
              </span>
              <div className="flex items-center gap-1">
                <Users size={14} />
                <span>{course.enrolledCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="text-yellow-500 fill-yellow-500" size={14} />
                <span>{course.rating}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-slate-900 mb-1">{course.price}</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (course.id === 'java-fullstack-master') {
                  setCurrentView('lesson');
                } else {
                  onEnrollCourse(course.id);
                }
              }}
              className="bg-slate-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-slate-700 transition-colors"
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {course.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Course Catalog</h1>
              <p className="text-slate-500">Discover and enroll in courses that match your interests</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2">
                <Search size={18} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-sm w-64"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>
              <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-slate-100 text-slate-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-slate-100 text-slate-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filters Bar */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-white border-b border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-slate-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-slate-500"
                >
                  {levels.map(level => (
                    <option key={level.id} value={level.id}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-slate-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              {sortedCourses.length} Courses Found
            </h2>
            <p className="text-sm text-slate-500">
              Showing results for "{searchQuery || 'all courses'}"
            </p>
          </div>
        </div>

        {/* Course Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedCourses.map((course) => (
              <CourseListItem key={course.id} course={course} />
            ))}
          </div>
        )}

        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto text-slate-300 mb-4" size={48} />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No courses found</h3>
            <p className="text-slate-500">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}
