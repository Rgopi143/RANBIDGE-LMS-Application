import React from 'react';
import { motion } from 'motion/react';
import { 
  Coffee, 
  Code2, 
  Database, 
  Layout, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  Calendar,
  Star,
  Award,
  Zap,
  Target,
  BookOpen,
  PlayCircle,
  TrendingUp,
  Shield,
  Clock,
  MessageSquare,
  BarChart3
} from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
  onRegister: () => void;
  hideNav?: boolean;
  ctaText?: string;
}

export default function LandingPage({ 
  onLogin, 
  onRegister, 
  hideNav = false,
  ctaText = "Get Started Now"
}: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      {/* Navigation */}
      {!hideNav && (
        <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md z-50 flex items-center justify-between px-6 lg:px-12 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-slate-200">
              <Coffee size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight">JavaFullStack</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onLogin}
              className="text-slate-600 font-bold hover:text-slate-600 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={onRegister}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
            >
              Get Started
            </button>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-sm font-bold tracking-wide uppercase">
              <GraduationCap size={16} />
              <span>Masterclass 2026</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
              Become a <span className="text-slate-600">Java Full Stack</span> Developer.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              A comprehensive program designed for AIML, IT, and ECE students at NEC. Master everything from Java Core to Spring Boot Microservices.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onRegister}
                className="bg-slate-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-700 transition-all shadow-xl shadow-slate-100 flex items-center gap-2 group"
              >
                {ctaText}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={onLogin}
                className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2 group"
              >
                {ctaText === "Get Started Now" ? "Sign In" : "Continue Course"}
                <Coffee className="text-slate-600" size={20} />
              </button>
              <button 
                onClick={onRegister}
                className="w-full sm:w-auto bg-slate-50 text-slate-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group border border-slate-200"
              >
                Preparation Notes
                <ArrowRight className="text-slate-400 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-slate-100/50 rounded-[2.5rem] blur-2xl -z-10 animate-pulse"></div>
            <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden aspect-square flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-slate-500 rounded-xl flex items-center justify-center text-white">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Backend Mastery</p>
                    <p className="text-slate-400 text-sm">Spring Boot & Microservices</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10 translate-x-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                    <Layout size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Frontend Excellence</p>
                    <p className="text-slate-400 text-sm">React, HTML5 & CSS3</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10 translate-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white">
                    <Database size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Database Design</p>
                    <p className="text-slate-400 text-sm">SQL & NoSQL Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Info Bar */}
      <div className="bg-slate-50 border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-600">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Timeline</p>
              <p className="text-slate-900 font-bold">Dec 4 - Mar 28, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-600">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Target Groups</p>
              <p className="text-slate-900 font-bold">AIML, IT, ECE-D</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-600">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Educator</p>
              <p className="text-slate-900 font-bold">D. Sirisha</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Comprehensive Curriculum</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Everything you need to build production-ready full stack applications from scratch.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Core Java', desc: 'OOPs, Collections, Multithreading, Java 8' },
            { title: 'Spring Boot', desc: 'Enterprise-grade backend with REST, Security, and JPA' },
            { title: 'Coding Space', desc: 'VS Code-like IDE with Spring Boot project support' },
            { title: 'Databases', desc: 'MySQL, MongoDB, Query Optimization' }
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-50/50 transition-all group">
              <CheckCircle2 className="text-slate-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Transform Your Career</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Join thousands of students who have accelerated their careers with our program</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Students Trained', icon: Users },
              { number: '95%', label: 'Placement Rate', icon: TrendingUp },
              { number: '50+', label: 'Companies Hired', icon: Award },
              { number: '4.8/5', label: 'Average Rating', icon: Star }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-slate-600 mx-auto mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Choose Your Learning Path</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Specialized tracks designed for different career goals</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Full Stack Developer',
              duration: '3 Months',
              level: 'Beginner to Advanced',
              features: ['Core Java', 'Spring Boot', 'React', 'Database Design'],
              color: 'from-slate-500 to-slate-600',
              icon: Code2
            },
            {
              title: 'Backend Specialist',
              duration: '2 Months',
              level: 'Intermediate',
              features: ['Advanced Java', 'Microservices', 'Cloud Deployment', 'API Design'],
              color: 'from-blue-500 to-blue-600',
              icon: Database
            },
            {
              title: 'Frontend Expert',
              duration: '2 Months',
              level: 'Beginner to Intermediate',
              features: ['HTML5/CSS3', 'JavaScript', 'React', 'UI/UX Design'],
              color: 'from-purple-500 to-purple-600',
              icon: Layout
            }
          ].map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${path.color} rounded-t-3xl`}></div>
              <div className="p-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${path.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  <path.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{path.title}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {path.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Target size={14} />
                    {path.level}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {path.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-slate-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={onRegister}
                  className={`w-full bg-gradient-to-r ${path.color} text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                >
                  Choose Path
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Student Success Stories</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Hear from our alumni who are now working at top companies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Full Stack Developer',
                company: 'Infosys',
                image: 'PS',
                quote: 'The comprehensive curriculum and hands-on projects helped me land my dream job. The mentorship was exceptional!',
                rating: 5
              },
              {
                name: 'Rahul Kumar',
                role: 'Backend Engineer',
                company: 'TCS',
                image: 'RK',
                quote: 'From zero to hero! This program transformed my career. The Spring Boot and microservices training was invaluable.',
                rating: 5
              },
              {
                name: 'Anjali Reddy',
                role: 'Frontend Developer',
                company: 'Wipro',
                image: 'AR',
                quote: 'The practical approach and real-world projects gave me the confidence to excel in interviews. Highly recommended!',
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-slate-100">
              Join the Java Full Stack Masterclass and become job-ready in just 3 months
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onRegister}
                className="bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <PlayCircle size={20} />
                Start Learning Now
              </button>
              <button 
                onClick={onLogin}
                className="bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Talk to Mentor
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-slate-600 rounded-xl flex items-center justify-center text-white">
                <Coffee size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight">JavaFullStack</span>
            </div>
            <p className="text-slate-400 max-w-md">
              Empowering the next generation of full stack developers at Narasaraopeta Engineering College.
            </p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
            <button 
              onClick={onRegister}
              className="bg-slate-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-700 transition-all inline-flex items-center gap-2"
            >
              {ctaText === "Get Started Now" ? "Access Dashboard" : "Continue Course"}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/10 text-center text-slate-500 text-sm">
          © 2026 JavaFullStack Masterclass @ NEC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
