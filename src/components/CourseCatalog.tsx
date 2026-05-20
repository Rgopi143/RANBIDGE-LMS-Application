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
  setCurrentCourseId?: (id: string) => void;
}

export default function CourseCatalog({ setCurrentView, onEnrollCourse, setCurrentCourseId }: CourseCatalogProps) {
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
      id: 'mern-fullstack-master',
      title: 'MERN Full Stack Development Masterclass',
      instructor: 'D. Sirisha',
      description: 'Master MERN stack development from basics to advanced React applications with Node.js, Express, and MongoDB integration.',
      category: 'programming',
      level: 'intermediate',
      duration: '16 weeks',
      enrolledCount: 950,
      rating: 4.9,
      thumbnail: 'data:image/jpeg;base64,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',
      price: 'Free',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'MERN', 'Full Stack'],
      language: 'English',
      subtitles: ['English', 'Spanish', 'Hindi'],
      certificate: true,
      lastUpdated: '2024-12-15',
      requirements: ['Basic programming knowledge', 'Computer with internet access', 'Dedication to learn'],
      whatYouLearn: [
        'Frontend development with React',
        'Backend development with Node.js',
        'Database design with MongoDB',
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
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
    >
      <div className={`relative h-48 flex items-center justify-center overflow-hidden ${course.thumbnail.startsWith('http') || course.thumbnail.startsWith('data:') ? 'bg-white' : 'bg-gradient-to-br from-slate-400 to-teal-600'}`}>
        {course.thumbnail.startsWith('data:') ? (
          <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
        ) : course.thumbnail.startsWith('http') ? (
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
      
      <div className="p-6 flex flex-col flex-1">
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

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
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
              if (course.id === 'java-fullstack-master' || course.id === 'mern-fullstack-master') {
                if (setCurrentCourseId) setCurrentCourseId(course.id);
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
                if (course.id === 'java-fullstack-master' || course.id === 'mern-fullstack-master') {
                  if (setCurrentCourseId) setCurrentCourseId(course.id);
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
