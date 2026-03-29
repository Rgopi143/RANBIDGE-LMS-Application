import React, { useState } from 'react';
import { Quiz as QuizType, QuizQuestion } from '../data/quizzes';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizProps {
  quiz: QuizType;
  onComplete?: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onComplete }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const currentQuestion = quiz.questions[currentQuestionIdx];

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    setUserAnswers(prev => [...prev, selectedOption]);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIdx < quiz.questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
      if (onComplete) onComplete(score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0));
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };

  if (showResults) {
    const finalScore = score;
    const percentage = Math.round((finalScore / quiz.questions.length) * 100);

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 text-center space-y-6"
      >
        <div className="w-20 h-20 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={40} />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">Quiz Completed!</h2>
          <p className="text-slate-500">Great job on finishing the {quiz.title}.</p>
        </div>
        
        <div className="py-8">
          <div className="text-5xl font-black text-slate-600">{percentage}%</div>
          <div className="text-slate-400 font-medium">Your Score: {finalScore} / {quiz.questions.length}</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleRestart}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all"
          >
            <RotateCcw size={18} />
            Try Again
          </button>
        </div>

        <div className="mt-12 text-left space-y-8">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <HelpCircle size={20} className="text-slate-500" />
            <h3 className="text-xl font-bold text-slate-900">Review Answers</h3>
          </div>
          
          <div className="space-y-6">
            {quiz.questions.map((q, idx) => {
              const isCorrect = userAnswers[idx] === q.correctAnswer;
              return (
                <div key={q.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-semibold text-slate-800 leading-relaxed">
                      <span className="text-slate-400 mr-2">Q{idx + 1}.</span>
                      {q.question}
                    </h4>
                    {isCorrect ? (
                      <CheckCircle2 size={20} className="text-slate-500 shrink-0 mt-1" />
                    ) : (
                      <XCircle size={20} className="text-red-500 shrink-0 mt-1" />
                    )}
                  </div>

                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium w-24">Your Answer:</span>
                      <span className={isCorrect ? "text-slate-600 font-semibold" : "text-red-600 font-semibold"}>
                        {q.options[userAnswers[idx]]}
                      </span>
                    </div>
                    {!isCorrect && (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 font-medium w-24">Correct:</span>
                        <span className="text-slate-600 font-semibold">{q.options[q.correctAnswer]}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-100 text-sm text-slate-600 italic">
                    <span className="font-bold text-slate-900 not-italic mr-1">Explanation:</span>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-6 flex justify-center">
            <button 
              onClick={handleRestart}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-600 text-white rounded-xl font-bold shadow-lg shadow-slate-200 hover:bg-slate-700 transition-all"
            >
              <RotateCcw size={18} />
              Retake Quiz
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">{quiz.title}</h2>
          <p className="text-sm text-slate-500">Question {currentQuestionIdx + 1} of {quiz.questions.length}</p>
        </div>
        <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-slate-500 transition-all duration-500" 
            style={{ width: `${((currentQuestionIdx + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-slate-800 leading-relaxed">
            {currentQuestion.question}
          </h3>

          <div className="grid gap-3">
            {currentQuestion.options.map((option, idx) => {
              let variant = "default";
              if (isSubmitted) {
                if (idx === currentQuestion.correctAnswer) variant = "correct";
                else if (idx === selectedOption) variant = "incorrect";
                else variant = "dimmed";
              } else if (idx === selectedOption) {
                variant = "selected";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={isSubmitted}
                  className={`
                    w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group
                    ${variant === "default" ? "border-slate-100 hover:border-slate-200 hover:bg-slate-50/30" : ""}
                    ${variant === "selected" ? "border-slate-500 bg-slate-50 text-slate-700" : ""}
                    ${variant === "correct" ? "border-slate-500 bg-slate-50 text-slate-700" : ""}
                    ${variant === "incorrect" ? "border-red-500 bg-red-50 text-red-700" : ""}
                    ${variant === "dimmed" ? "border-slate-50 opacity-50" : ""}
                  `}
                >
                  <span className="font-medium">{option}</span>
                  {variant === "correct" && <CheckCircle2 size={20} className="text-slate-600" />}
                  {variant === "incorrect" && <XCircle size={20} className="text-red-600" />}
                </button>
              );
            })}
          </div>

          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl border ${selectedOption === currentQuestion.correctAnswer ? "bg-slate-50 border-slate-100 text-slate-800" : "bg-slate-50 border-slate-100 text-slate-800"}`}
            >
              <div className="font-bold mb-1">
                {selectedOption === currentQuestion.correctAnswer ? "Correct!" : "Incorrect"}
              </div>
              <p className="text-sm opacity-90">{currentQuestion.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-end pt-4">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="px-8 py-3 bg-slate-600 text-white rounded-xl font-bold shadow-lg shadow-slate-200 hover:bg-slate-700 transition-all disabled:opacity-50 disabled:shadow-none"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            {currentQuestionIdx < quiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
