import { Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
  label?: string;
}

export default function LoadingSpinner({ size = 24, className = '', label }: LoadingSpinnerProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="text-slate-600"
      >
        <Loader2 size={size} />
      </motion.div>
      {label && (
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest animate-pulse">
          {label}
        </p>
      )}
    </div>
  );
}
