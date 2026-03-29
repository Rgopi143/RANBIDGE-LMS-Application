import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  RotateCcw, 
  User, 
  ChevronRight, 
  ChevronLeft,
  Play,
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6,
  Zap,
  TrendingUp,
  TrendingDown,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';

// Game Configuration
const GRID_SIZE = 10;
const TOTAL_SQUARES = 100;

const LADDERS: Record<number, number> = {
  1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100
};

const SNAKES: Record<number, number> = {
  16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78
};

const PLAYER_COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'];

export default function SnakeLadderVisual() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', position: 1, color: PLAYER_COLORS[0] },
    { id: 2, name: 'Player 2', position: 1, color: PLAYER_COLORS[1] }
  ]);
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [diceRoll, setDiceRoll] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [gameLog, setGameLog] = useState<string[]>(['Game started! Player 1 goes first.']);
  const [winner, setWinner] = useState<number | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  // Helper to get square position (x, y) for 10x10 zigzag grid
  const getSquarePos = (num: number) => {
    const row = Math.floor((num - 1) / GRID_SIZE);
    let col = (num - 1) % GRID_SIZE;
    
    // Zigzag pattern: reverse col every other row
    if (row % 2 !== 0) {
      col = GRID_SIZE - 1 - col;
    }
    
    return {
      x: col * 10, // Percent
      y: (GRID_SIZE - 1 - row) * 10 // Percent
    };
  };

  const addLog = (msg: string) => {
    setGameLog(prev => [msg, ...prev].slice(0, 10));
  };

  const handleRoll = async () => {
    if (isRolling || winner) return;

    setIsRolling(true);
    
    // Simulate dice animation
    let lastRoll = 1;
    for (let i = 0; i < 10; i++) {
      lastRoll = Math.floor(Math.random() * 6) + 1;
      setDiceRoll(lastRoll);
      await new Promise(r => setTimeout(r, 80));
    }
    
    const roll = lastRoll;
    setIsRolling(false);
    
    const currentPlayer = players[currentPlayerIdx];
    let nextPos = currentPlayer.position + roll;

    if (nextPos > TOTAL_SQUARES) {
      addLog(`${currentPlayer.name} rolled a ${roll}. Need exact number to win!`);
      // Switch player
      setCurrentPlayerIdx((currentPlayerIdx + 1) % players.length);
      return;
    }

    addLog(`${currentPlayer.name} rolled a ${roll} and moved to ${nextPos}.`);
    
    // Update position
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIdx] = { ...currentPlayer, position: nextPos };
    setPlayers(updatedPlayers);

    // Wait for movement animation
    await new Promise(r => setTimeout(r, 600));

    // Check for Ladders or Snakes
    let finalPos = nextPos;
    let message = '';
    
    if (LADDERS[nextPos]) {
      finalPos = LADDERS[nextPos];
      message = `🚀 LADDER! ${currentPlayer.name} climbed to ${finalPos}!`;
    } else if (SNAKES[nextPos]) {
      finalPos = SNAKES[nextPos];
      message = `🐍 SNAKE! ${currentPlayer.name} slid down to ${finalPos}!`;
    }

    if (message) {
      addLog(message);
      updatedPlayers[currentPlayerIdx] = { ...updatedPlayers[currentPlayerIdx], position: finalPos };
      setPlayers(updatedPlayers);
      await new Promise(r => setTimeout(r, 600));
    }

    if (finalPos === TOTAL_SQUARES) {
      setWinner(currentPlayer.id);
      addLog(`🏆 ${currentPlayer.name.toUpperCase()} WINS!`);
    } else {
      // Switch player
      setCurrentPlayerIdx((currentPlayerIdx + 1) % players.length);
    }
  };

  const resetGame = () => {
    setPlayers(prev => prev.map(p => ({ ...p, position: 1 })));
    setCurrentPlayerIdx(0);
    setWinner(null);
    setGameLog(['Game reset. Player 1 starts.']);
    setDiceRoll(1);
  };

  const DiceIcon = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6][diceRoll - 1];

  return (
    <div className={`transition-all duration-500 ease-in-out ${
      isMaximized 
      ? 'fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-2xl p-8 lg:p-12 flex flex-col items-center justify-center' 
      : 'flex flex-col lg:flex-row gap-8 bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-xl max-w-7xl mx-auto relative'
    }`}>
      
      {/* Maximizing Controls */}
      <button 
        onClick={() => setIsMaximized(!isMaximized)}
        className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-slate-400 hover:text-white transition-all z-30 border border-white/5"
        title={isMaximized ? "Exit Fullscreen" : "Fullscreen"}
      >
        {isMaximized ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
      </button>

      {/* Visual Board Section */}
      <div className={`${
        isMaximized ? 'w-full max-w-[80vh] aspect-square' : 'flex-1 aspect-square'
      } relative bg-slate-800 rounded-3xl overflow-hidden border-4 border-slate-700 shadow-inner group transition-all`}>
        {/* Grid Background */}
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
          {Array.from({ length: TOTAL_SQUARES }).map((_, i) => {
            const num = TOTAL_SQUARES - i;
            const pos = getSquarePos(num);
            return (
              <div 
                key={num}
                className={`flex items-center justify-center text-[10px] font-bold border border-white/5 ${
                  (Math.floor((num-1)/10) + ((num-1)%10)) % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-700/50'
                }`}
              >
                <span className="opacity-20">{num}</span>
              </div>
            );
          })}
        </div>

        {/* Ladders & Snakes Overlay (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <linearGradient id="ladderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="snakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Render Ladders */}
          {Object.entries(LADDERS).map(([start, end]) => {
            const p1 = getSquarePos(parseInt(start));
            const p2 = getSquarePos(end);
            return (
              <g key={`ladder-${start}`}>
                <line 
                  x1={`${p1.x + 5}%`} y1={`${p1.y + 5}%`} 
                  x2={`${p2.x + 5}%`} y2={`${p2.y + 5}%`} 
                  stroke="url(#ladderGrad)" strokeWidth="12" strokeLinecap="round"
                />
                <circle cx={`${p1.x + 5}%`} cy={`${p1.y + 5}%`} r="4" fill="#10b981" />
                <circle cx={`${p2.x + 5}%`} cy={`${p2.y + 5}%`} r="4" fill="#10b981" />
              </g>
            );
          })}

          {/* Render Snakes */}
          {Object.entries(SNAKES).map(([start, end]) => {
            const p1 = getSquarePos(parseInt(start));
            const p2 = getSquarePos(end);
            return (
              <g key={`snake-${start}`}>
                <path 
                  d={`M ${p1.x + 5} ${p1.y + 5} Q ${(p1.x + p2.x)/2 + 5} ${(p1.y + p2.y)/2} ${p2.x + 5} ${p2.y + 5}`}
                  transform="scale(5.12)" // Scaling to percent roughly
                  // This path logic is simplified, real zigzag paths would use square-based coords
                  fill="none" stroke="url(#snakeGrad)" strokeWidth="1.5" strokeLinecap="round"
                  className="opacity-60"
                />
                <circle cx={`${p1.x + 5}%`} cy={`${p1.y + 5}%`} r="5" fill="#ef4444" />
              </g>
            );
          })}
        </svg>

        {/* Players */}
        {players.map((p) => {
          const pos = getSquarePos(p.position);
          return (
            <motion.div
              key={p.id}
              initial={false}
              animate={{ 
                left: `${pos.x + 2}%`, 
                top: `${pos.y + 2}%`,
                scale: winner === p.id ? 1.5 : 1
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute w-[6%] h-[6%] rounded-full shadow-lg flex items-center justify-center z-10"
              style={{ backgroundColor: p.color, border: '2px solid rgba(255,255,255,0.3)' }}
            >
              <User size={10} className="text-white fill-white/20" />
              {currentPlayerIdx === p.id - 1 && !winner && (
                <motion.div 
                  animate={{ scale: [1, 1.3, 1] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -inset-1 rounded-full border border-white/40" 
                />
              )}
            </motion.div>
          );
        })}

        {/* Winning Celebrate */}
        <AnimatePresence>
          {winner && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-md"
            >
              <Trophy size={80} className="text-yellow-500 mb-4 animate-bounce" />
              <h2 className="text-4xl font-black text-white mb-2">WINNER!</h2>
              <p className="text-xl font-bold text-slate-300">Player {winner} has finished the race!</p>
              <button 
                onClick={resetGame}
                className="mt-8 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold shadow-xl transition-all"
              >
                Play Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Control Panel Section */}
      <div className={`${
        isMaximized ? 'w-full max-w-[80vh] grid grid-cols-2 gap-6 mt-8' : 'w-full lg:w-80 flex flex-col gap-6'
      }`}>
        <div className="bg-slate-800/80 rounded-3xl p-6 border border-white/5 shadow-2xl">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <Zap size={16} className="text-yellow-500" />
            Game Controls
          </h3>

          <div className={`${isMaximized ? 'flex items-center gap-12 justify-center' : 'flex flex-col items-center gap-6'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/30 transition-all opacity-0 group-hover:opacity-100" />
              <motion.div 
                animate={isRolling ? { rotateY: 360 } : {}} 
                transition={{ duration: 0.4, repeat: isRolling ? Infinity : 0 }}
                className={`${isMaximized ? 'w-32 h-32' : 'w-24 h-24'} bg-slate-700 rounded-3xl flex items-center justify-center shadow-2xl relative border-2 border-white/10`}
              >
                {DiceIcon ? <DiceIcon size={isMaximized ? 64 : 48} className="text-white" /> : <Play size={48} className="text-white" />}
              </motion.div>
            </div>

            <button
              onClick={handleRoll}
              disabled={isRolling || winner !== null}
              className={`py-4 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${
                isRolling || winner 
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
                : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-105 active:scale-95 shadow-emerald-900/20'
              } ${isMaximized ? 'px-12' : 'w-full'}`}
            >
              {isRolling ? 'Rolling...' : 'Roll Dice'}
            </button>
          </div>
        </div>

        <div className={`bg-slate-800/80 rounded-3xl p-6 border border-white/5 flex flex-col ${isMaximized ? 'min-h-[160px]' : 'flex-1 min-h-[300px]'}`}>
          <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Live Game Activity</h3>
          <div className="flex-1 space-y-3 overflow-y-auto max-h-[120px] lg:max-h-none">
            {gameLog.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`p-3 rounded-xl text-xs font-bold ${
                  log.includes('🏆') ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20' :
                  log.includes('🚀') ? 'bg-emerald-500/20 text-emerald-400' :
                  log.includes('🐍') ? 'bg-red-500/20 text-red-400' :
                  'bg-white/5 text-slate-300'
                }`}
              >
                {log}
              </motion.div>
            ))}
          </div>
          {!isMaximized && (
            <button 
              onClick={resetGame}
              className="mt-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all py-2 border border-white/5 rounded-xl hover:bg-white/5"
            >
              <RotateCcw size={12} />
              Reset Board
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
