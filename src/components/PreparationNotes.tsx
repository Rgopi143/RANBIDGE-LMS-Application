import React from 'react';
import { motion } from 'motion/react';
import { FileText, Sparkles, BookOpen, CheckCircle2, ArrowRight, Lightbulb } from 'lucide-react';

const notes = [
  {
    title: "Core Java Fundamentals",
    category: "Core Java",
    content: "Deep dive into JVM Architecture (Class Loader, Runtime Data Areas like Heap/Stack, and Execution Engine). Understand Garbage Collection mechanisms (Generational GC, Mark-and-Sweep). Master the 8 Primitive Types (int, double, boolean, etc.) and their Wrapper Classes (Integer, Double, Boolean) which enable primitives to be used as objects.",
    tips: [
      "Java is strictly pass-by-value (even for objects, the reference is passed by value)",
      "Common String methods: length(), substring(), charAt(), indexOf(), equals(), split(), trim(), replace()"
    ]
  },
  {
    title: "Object-Oriented Programming",
    category: "Java Intermediate",
    content: "Deep dive into the 4 pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction. Practice writing interfaces vs abstract classes. Understand 'Composition over Inheritance'.",
    tips: ["Learn SOLID principles early", "Practice method overloading vs overriding"]
  },
  {
    title: "Spring Boot & Microservices",
    category: "Backend",
    content: "Master Dependency Injection and Inversion of Control. Understand the Spring Bean lifecycle. Learn RESTful API best practices and how to use Spring Data JPA for database interactions.",
    tips: ["Understand @Component vs @Service vs @Repository", "Learn how to handle exceptions globally"]
  },
  {
    title: "SQL & Database Design",
    category: "Database",
    content: "Focus on Normalization (1NF, 2NF, 3NF). Master JOIN operations (INNER, LEFT, RIGHT, FULL). Understand indexing and how it improves query performance.",
    tips: ["Practice writing complex subqueries", "Learn how to read execution plans"]
  }
];

export default function PreparationNotes() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Preparation Notes</h1>
            <p className="text-slate-500 font-medium">Curated study guides and key takeaways for your interview prep</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-200">
            <div className="w-16 h-16 bg-slate-500 rounded-2xl flex items-center justify-center">
              <FileText size={32} />
            </div>
            <div>
              <div className="text-3xl font-black">{notes.length}</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Guides</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white border-2 border-slate-100 rounded-3xl p-8 hover:border-slate-500 transition-all shadow-sm hover:shadow-xl hover:shadow-slate-50/50"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-slate-50 text-slate-400 group-hover:bg-slate-50 group-hover:text-slate-600 rounded-2xl flex items-center justify-center transition-colors">
                  <BookOpen size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full group-hover:text-slate-600 group-hover:bg-slate-50 transition-colors">
                  {note.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-600 transition-colors">
                {note.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {note.content}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
                  <Lightbulb size={14} className="text-amber-500" />
                  Quick Tips
                </div>
                <div className="flex flex-wrap gap-2">
                  {note.tips.map((tip, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl">
                      <CheckCircle2 size={12} className="text-slate-500" />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-8 py-3 bg-slate-50 text-slate-600 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-slate-600 group-hover:text-white transition-all">
                Read Full Guide
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-600 rounded-[2.5rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-slate-200">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-6 backdrop-blur-md">
                <Sparkles size={16} className="text-slate-300" />
                Personalized Learning
              </div>
              <h2 className="text-4xl font-black leading-tight mb-6">
                Need specific notes for an upcoming interview?
              </h2>
              <p className="text-slate-50 text-lg font-medium opacity-90 mb-8">
                Our AI can generate custom preparation notes based on the job description or specific company requirements.
              </p>
              <button className="px-8 py-4 bg-white text-slate-600 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl shadow-slate-900/20">
                Generate Custom Notes
              </button>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-white/10 rounded-[3rem] backdrop-blur-xl border border-white/20 flex items-center justify-center">
              <FileText size={120} className="text-white/40" />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
      </motion.div>
    </div>
  );
}
