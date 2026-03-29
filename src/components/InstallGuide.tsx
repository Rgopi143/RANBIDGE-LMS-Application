import React from 'react';
import { motion } from 'motion/react';
import { 
  Download, 
  Terminal, 
  Settings, 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle,
  Coffee,
  Cpu,
  Globe
} from 'lucide-react';

export default function InstallGuide() {
  const steps = [
    {
      title: 'Java JDK 21 Installation',
      icon: <img src="https://www.pngmart.com/files/23/Java-PNG-Photos.png" alt="Java" className="w-10 h-10 object-contain" />,
      content: [
        { label: 'Download', text: 'Download JDK 21 from Oracle or Adoptium (Eclipse Temurin).', link: 'https://adoptium.net/' },
        { label: 'Run Installer', text: 'Run the .exe (Windows) or .pkg (macOS) and follow prompts.' },
        { label: 'Set JAVA_HOME', text: 'Add the JDK path to your Environment Variables (Windows) or .zshrc/.bash_profile (macOS/Linux).' },
        { label: 'Verify', text: 'Open terminal and type: java -version', command: 'java -version' }
      ]
    },
    {
      title: 'Spring Boot Development Environment',
      icon: <Cpu size={24} className="text-slate-600" />,
      content: [
        { label: 'IDE Choice', text: 'Install IntelliJ IDEA (Recommended) or VS Code with Java Extension Pack.' },
        { label: 'Build Tool', text: 'Apache Maven is typically bundled with IDEs, but you can install it separately.' },
        { label: 'Spring Initializr', text: 'Use start.spring.io to generate your project scaffold.', link: 'https://start.spring.io' }
      ]
    },
    {
      title: 'Database Setup (MySQL)',
      icon: <Settings size={24} className="text-slate-600" />,
      content: [
        { label: 'MySQL Server', text: 'Download and install MySQL Community Server.' },
        { label: 'MySQL Workbench', text: 'GUI tool to manage your local databases.' },
        { label: 'Configuration', text: 'Note down your root password for Spring Boot connectivity.' }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-24 px-6 font-sans">
      <header className="flex flex-col items-center text-center gap-4">
        <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 border border-slate-100">
          Step-by-Step Configuration
        </div>
        <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">Setup Guide</h2>
        <p className="text-slate-400 font-medium text-lg max-w-2xl leading-relaxed">
          Prepare your local environment for enterprise Java development with our optimized configuration path.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-16">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.8 }}
            className="group"
          >
            <div className="bg-white rounded-[3.5rem] p-10 lg:p-14 border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-16 items-start hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-700">
              {/* Left Column - Minimal Branding */}
              <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center border border-slate-100/50 group-hover:bg-white group-hover:border-slate-200 transition-all duration-700 mb-8">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{step.title}</h3>
                  <div className="h-1 w-12 bg-slate-200 rounded-full group-hover:w-20 group-hover:bg-slate-900 transition-all duration-700" />
                </div>
              </div>
              
              {/* Right Column - Cleaner Steps */}
              <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {step.content.map((item, i) => (
                  <div key={i} className="flex gap-6 group/item">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-xs font-black text-slate-300 group-hover/item:text-slate-900 group-hover/item:border-slate-300 transition-all">
                        {i + 1}
                      </div>
                    </div>
                    <div className="space-y-2 flex-1 min-w-0">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm text-slate-500 leading-relaxed font-semibold group-hover/item:text-slate-700 transition-colors">{item.text}</p>
                      
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-slate-900 transition-colors pt-2 uppercase tracking-tighter"
                        >
                          Documentation <ExternalLink size={10} />
                        </a>
                      )}
                      
                      {item.command && (
                        <div className="bg-slate-50/50 rounded-2xl p-5 font-mono text-[10px] text-slate-600 relative mt-4 border border-slate-100/50">
                          <Terminal size={12} className="absolute right-5 top-5 text-slate-300" />
                          <code className="block overflow-x-auto whitespace-nowrap">{item.command}</code>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-slate-50 rounded-[3.5rem] p-10 border border-slate-100 flex flex-col lg:flex-row gap-10 items-center lg:items-start"
      >
        <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-slate-400 shrink-0 border border-slate-100 shadow-sm">
          <AlertCircle size={28} />
        </div>
        <div className="text-center lg:text-left space-y-2">
          <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">Need Support?</h4>
          <p className="text-slate-500 leading-relaxed font-medium max-w-3xl">
            If the 'java' command is not recognized after setup, verify your <span className="text-slate-900 font-bold underline decoration-slate-200">PATH environment variables</span> and restart your terminal. A system restart may also be necessary to apply changes.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
