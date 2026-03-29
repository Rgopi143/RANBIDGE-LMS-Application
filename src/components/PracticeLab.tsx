import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Play, 
  RotateCcw, 
  Copy, 
  Download,
  Share2,
  Settings,
  X,
  Maximize2,
  ChevronRight,
  HelpCircle,
  FileCode,
  Layout,
  Table as TableIcon,
  Search,
  CheckCircle2,
  AlertCircle,
  Eye,
  Gamepad2
} from 'lucide-react';
import SnakeLadderVisual from './SnakeLadderVisual';

type LabType = 'java' | 'web' | 'sql' | 'visual';

export default function PracticeLab() {
  const [activeLab, setActiveLab] = useState<LabType>('java');
  const [isCompiling, setIsCompiling] = useState(false);
  const [output, setOutput] = useState('');
  
  // Java State
  const [javaCode, setJavaCode] = useState(`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java Playground!");
        
        int a = 10;
        int b = 20;
        System.out.println("Sum of " + a + " and " + b + " is: " + (a + b));
        
        for(int i = 1; i <= 5; i++) {
            System.out.println("Iteration: " + i);
        }
    }
}`);

  // Web State
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f0f2f5; }
        .card { background: white; padding: 2rem; border-radius: 1rem; shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
        h1 { color: #1e293b; margin-bottom: 0.5rem; }
        button { background: #2563eb; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; transition: background 0.2s; }
        button:hover { background: #1d4ed8; }
    </style>
</head>
<body>
    <div class="card">
        <h1>HTML/CSS Preview</h1>
        <p>Edit the code to see real-time changes!</p>
        <button onclick="alert('Hello from Javascript!')">Click Me</button>
    </div>
</body>
</html>`);

  // SQL State
  const [sqlQuery, setSqlQuery] = useState(`-- Example SQL Query
SELECT 
    id, 
    first_name, 
    last_name, 
    email, 
    department 
FROM employees 
WHERE department = 'Engineering' 
ORDER BY last_name ASC;`);

  const runJava = () => {
    setIsCompiling(true);
    setOutput('');
    
    setTimeout(() => {
      setIsCompiling(false);
      const outputBuffer: string[] = ["Compiling Main.java...", "Execution started:", "----------------"];
      
      try {
        // Transpiler: Convert Java snippets to executable JS for simulation
        // Remove imports as they aren't needed for this simulated environment
        let code = javaCode.replace(/import\s+[\w.*]+;\s*/g, '');
        
        // 1. Remove Class & Main Method boilerplate to focus on body
        // This regex looks for code inside the main method { ... } supporting varied bracket positioning
        const mainMethodRegex = /public\s+static\s+void\s+main\s*\(\s*String(?:\[\s*\]\s+[a-zA-Z0-9_]+|[a-zA-Z0-9_]+\s*\[\s*\])\s*\)\s*\{([\s\S]*)\}/;
        const match = code.match(mainMethodRegex);
        let executableBody = '';
        
        if (match) {
          executableBody = match[1];
        } else {
          // If the regex fails, manually strip common boilerplate lines
          executableBody = code
            .replace(/class\s+[a-zA-Z0-9_]+\s*\{/g, '')
            .replace(/public\s+static\s+void\s+main\s*\(.*\)\s*\{/g, '')
            .replace(/\}\s*\}\s*$/g, '')
            .replace(/\}\s*$/g, '');
        }

        // 2. Transpile Java Syntax to JS
        // System.out.println -> __log()
        executableBody = executableBody.replace(/System\.out\.println\s*\((.*)\)\s*;/g, "__log($1);");
        
        // Variable declarations: int a = 10; -> let a = 10;
        executableBody = executableBody.replace(/(int|String|double|float|long|boolean|char|var)\s+([a-zA-Z0-9_]+)\s*=/g, "let $2 =");
        
        // Loop headers: for(int i = 0... -> for(let i = 0...
        executableBody = executableBody.replace(/for\s*\(\s*(int|long|var)\s+/g, "for(let ");

        // 3. Setup safe execution context
        const runContext = {
          __log: (val: any) => outputBuffer.push(val?.toString())
        };

        // Create a function that executes the transpiled code
        const executor = new Function('__log', executableBody);
        executor(runContext.__log);

        if (outputBuffer.length === 3) {
          outputBuffer.push("No console output produced.");
        }
      } catch (err: any) {
        outputBuffer.push("Compilation Error: " + err.message);
      }

      outputBuffer.push("----------------");
      outputBuffer.push("Process finished with exit code 0");
      setOutput(outputBuffer.join('\n'));
    }, 1200);
  };

  const [sqlData, setSqlData] = useState<any[]>([]);

  const runSql = () => {
    setIsCompiling(true);
    setOutput('');
    
    setTimeout(() => {
      setIsCompiling(false);
      const query = sqlQuery.toLowerCase();
      
      if (query.includes('users')) {
        setSqlData([
          { id: 1, name: 'Admin', role: 'Superuser', status: 'Active' },
          { id: 2, name: 'John Doe', role: 'Editor', status: 'Pending' },
          { id: 3, name: 'Sarah Jane', role: 'Viewer', status: 'Active' }
        ]);
        setOutput('Query executed successfully. 3 rows from users table.');
      } else if (query.includes('products')) {
        setSqlData([
          { id: 'P01', item: 'Laptop', price: '$1200', stock: 15 },
          { id: 'P02', item: 'Mouse', price: '$25', stock: 42 },
          { id: 'P03', item: 'Keyboard', price: '$75', stock: 20 }
        ]);
        setOutput('Query executed successfully. 3 rows from products table.');
      } else {
        // Default to employees
        setSqlData([
          { id: 101, name: 'John Doe', dept: 'Eng', role: 'Senior Dev' },
          { id: 105, name: 'Alice Smith', dept: 'Eng', role: 'Lead Arch' },
          { id: 112, name: 'Bob Wilson', dept: 'Eng', role: 'QA Lead' },
          { id: 121, name: 'Sara Lee', dept: 'Eng', role: 'Fullstack' }
        ]);
        setOutput('Query executed successfully. 4 rows from employees table.');
      }
    }, 800);
  };

  return (
    <div className="h-[calc(100vh-200px)] min-h-[600px] flex flex-col bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
      {/* Header */}
      <div className="bg-slate-900 border-b border-white/5 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <Code2 className="text-emerald-500" size={20} />
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">Interactive Labs</h2>
          </div>
          
          <div className="h-6 w-px bg-white/10 mx-2" />
          
          <div className="flex items-center gap-1 bg-slate-800/50 p-1 rounded-xl border border-white/5">
            {[
              { id: 'java', label: 'Java Compiler', icon: Code2 },
              { id: 'web', label: 'Web Editor', icon: Layout },
              { id: 'sql', label: 'SQL Lab', icon: Database },
              { id: 'visual', label: 'Visual Game', icon: Gamepad2 }
            ].map((lab) => (
              <button
                key={lab.id}
                onClick={() => {
                  setActiveLab(lab.id as LabType);
                  setOutput('');
                }}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  activeLab === lab.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <lab.icon size={16} />
                {lab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-white/5 mr-2">
            <button 
              onClick={() => {
                setJavaCode(`import java.util.*;

/**
 * Snake and Ladder Game Implementation
 */
public class SnakeLadderGame {
    private static final int WINNING_POSITION = 100;
    private static final Map<Integer, Integer> snakes = new HashMap<>();
    private static final Map<Integer, Integer> ladders = new HashMap<>();

    static {
        ladders.put(1, 38); ladders.put(4, 14); ladders.put(9, 31);
        ladders.put(21, 42); ladders.put(28, 84); ladders.put(36, 44);
        ladders.put(51, 67); ladders.put(71, 91); ladders.put(80, 100);

        snakes.put(16, 6); snakes.put(47, 26); snakes.put(49, 11);
        snakes.put(56, 53); snakes.put(62, 19); snakes.put(64, 60);
        snakes.put(87, 24); snakes.put(93, 73); snakes.put(95, 75);
        snakes.put(98, 78);
    }

    public static void main(String[] args) {
        System.out.println("WELCOME TO SNAKE AND LADDER!");
        // Game Logic...
    }
}`);
                setActiveLab('java');
                setOutput('Loaded SnakeLadderGame.java template.');
              }}
              className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-emerald-400 hover:text-white hover:bg-emerald-600/20 transition-all border border-emerald-500/20"
            >
              Load Snake & Ladder
            </button>
            <button 
              onClick={() => {
                setIsCompiling(true);
                setOutput('');
                setTimeout(() => {
                  setIsCompiling(false);
                  const log = [
                    "> javac \"src\\labs\\SnakeLadderGame.java\"",
                    "Compiling...",
                    "Successfully compiled SnakeLadderGame.class",
                    "",
                    "> java -cp src\\labs SnakeLadderGame",
                    "========================================",
                    "   WELCOME TO SNAKE AND LADDER GAME   ",
                    "========================================",
                    "",
                    "Enter number of players: 2",
                    "Enter name for Player 1: John",
                    "Enter name for Player 2: Doe",
                    "",
                    "Game Started! Good Luck!",
                    "----------------------------------------",
                    "John's turn (Position: 0)",
                    "Dice Rolled: [5]",
                    "John is now at position: 5",
                    "----------------------------------------",
                    "Doe's turn (Position: 0)",
                    "Dice Rolled: [4]",
                    "WOW! A LADDER! Climbing from 4 up to 14",
                    "Doe is now at position: 14",
                    "----------------------------------------",
                    "...",
                    "Process finished with exit code 0"
                  ];
                  setOutput(log.join('\n'));
                  setActiveLab('java');
                }, 1500);
              }}
              className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-white hover:bg-blue-600/20 transition-all border border-blue-500/20"
            >
              Run Game Command
            </button>
          </div>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <Share2 size={18} />
          </button>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <Settings size={18} />
          </button>
          <div className="h-6 w-px bg-white/10 mx-1" />
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/40 transition-all active:scale-95"
                  onClick={activeLab === 'java' ? runJava : activeLab === 'sql' ? runSql : undefined}>
            {isCompiling ? (
              <RotateCcw size={16} className="animate-spin" />
            ) : (
              <Play size={16} fill="white" />
            )}
            {activeLab === 'web' ? 'Refresh Preview' : 'Run Code'}
          </button>
        </div>
      </div>

      {/* Main Lab Content */}
      <div className="flex-1 flex overflow-hidden">
        {activeLab !== 'visual' && (
          <>
            {/* Editor Side */}
            <div className="flex-1 flex flex-col border-r border-white/5 min-w-[50%]">
          <div className="bg-slate-900/50 px-4 py-2 border-b border-white/5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                <FileCode size={14} />
                {activeLab === 'java' ? 'Main.java' : activeLab === 'web' ? 'index.html' : 'query.sql'}
              </div>
            </div>
            <button className="p-1 px-2 text-[10px] font-bold text-slate-500 hover:text-white hover:bg-white/5 rounded transition-colors uppercase tracking-wider">
              Autosaved
            </button>
          </div>
          
          <div className="flex-1 overflow-hidden relative group">
            <textarea
              value={activeLab === 'java' ? javaCode : activeLab === 'web' ? htmlCode : sqlQuery}
              onChange={(e) => {
                if(activeLab === 'java') setJavaCode(e.target.value);
                if(activeLab === 'web') setHtmlCode(e.target.value);
                if(activeLab === 'sql') setSqlQuery(e.target.value);
              }}
              className="w-full h-full bg-slate-950 text-slate-300 p-8 font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-emerald-500/30 leading-relaxed selection:bg-emerald-500/20"
              spellCheck={false}
            />
            {/* Syntax highlight simulation overlay or just clean textarea */}
            <div className="absolute top-0 right-0 w-1 h-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Output/Preview Side */}
        <div className="w-[40%] flex flex-col bg-slate-900/30">
          <div className="bg-slate-900/50 px-4 py-2 border-b border-white/5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-widest font-bold">
              {activeLab === 'web' ? <Eye size={14} /> : <Terminal size={14} />}
              {activeLab === 'web' ? 'Live Preview' : 'Output'}
            </div>
            {activeLab === 'sql' && (
              <div className="flex items-center gap-2 px-2 py-0.5 bg-slate-800 rounded text-[10px] font-bold text-slate-400">
                <TableIcon size={12} />
                LOCAL DATABASE
              </div>
            )}
          </div>

          <div className="flex-1 overflow-auto p-6 font-mono text-sm relative">
            {activeLab === 'web' ? (
              <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <iframe 
                  title="Web Preview"
                  srcDoc={htmlCode}
                  className="w-full h-full border-none bg-white"
                />
              </div>
            ) : activeLab === 'java' ? (
              <div className="space-y-2">
                {output ? (
                  <AnimatePresence>
                    <motion.pre 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-slate-300 whitespace-pre-wrap leading-relaxed selection:bg-emerald-500/30"
                    >
                      {output}
                    </motion.pre>
                  </AnimatePresence>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-600 mt-20 text-center">
                    <Terminal size={48} strokeWidth={1} className="mb-4 opacity-20" />
                    <p className="text-xs uppercase tracking-widest font-bold opacity-50">Console Output System</p>
                    <p className="text-[11px] mt-2 opacity-30">Press Run to see execution results</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {output ? (
                  <>
                    <div className="flex items-center gap-2 text-emerald-400 text-xs mb-4">
                      <CheckCircle2 size={14} />
                      {output}
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/5 bg-slate-900 shadow-xl">
                      <table className="w-full text-[11px] text-left border-collapse">
                        <thead className="bg-white/5 text-slate-400 uppercase tracking-wider font-bold">
                          <tr>
                            {sqlData.length > 0 && Object.keys(sqlData[0]).map(key => (
                              <th key={key} className="px-3 py-2 border-b border-white/5">{key.replace('_', ' ')}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="text-slate-300">
                          {sqlData.map((row: any, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                              {Object.values(row).map((val: any, idx) => (
                                <td key={idx} className={`px-3 py-2 ${idx === 0 ? 'font-bold text-emerald-400' : ''}`}>{val.toString()}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-600 mt-20 text-center">
                    <Database size={48} strokeWidth={1} className="mb-4 opacity-20" />
                    <p className="text-xs uppercase tracking-widest font-bold opacity-50">SQL Result Engine</p>
                    <p className="text-[11px] mt-2 opacity-30">Execute queries to view table data</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Info */}
          <div className="bg-slate-950/50 px-4 py-2 border-t border-white/5 flex items-center justify-between shrink-0 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><Activity size={10} className="text-emerald-500" /> System Active</span>
              <span className="flex items-center gap-1.5"><Zap size={10} className="text-blue-400" /> Latency: 12ms</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hover:text-white cursor-pointer transition-colors">Documentation</span>
              <HelpCircle size={10} className="text-slate-600" />
            </div>
          </div>
        </div>
          </>
        )}

        {/* Visual Game Full View */}
        {activeLab === 'visual' && (
          <div className="flex-1 overflow-auto bg-slate-950 p-8 custom-scrollbar">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-6xl mx-auto"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Visual Snake & Ladder</h3>
                  <p className="text-slate-400 text-sm font-medium">Interactive board game with real-time animations</p>
                </div>
                <div className="flex items-center gap-3">
                   <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Physics Active</span>
                   </div>
                </div>
              </div>
              <SnakeLadderVisual />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

// Re-using styles or icons if needed
const Activity = ({ className, size }: { className?: string, size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
);

const Zap = ({ className, size }: { className?: string, size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
);
