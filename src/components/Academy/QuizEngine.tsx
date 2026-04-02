import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ChevronRight, ChevronLeft, RotateCcw, Trophy, AlertTriangle } from 'lucide-react';
import type { QuizQuestion } from '../../lib/academyCourseData';
import { useAcademyProgress } from '../../stores/academyProgress';

interface QuizEngineProps {
  questions: QuizQuestion[];
  quizId: string;
  title?: string;
  onPass: () => void;
  onDismiss?: () => void;
}

type Phase = 'quiz' | 'results';

const QuizEngine: React.FC<QuizEngineProps> = ({ questions, quizId, title, onPass, onDismiss }) => {
  const { saveQuizResult, getQuizResult, addXp } = useAcademyProgress();
  const prev = getQuizResult(quizId);

  const [phase, setPhase] = useState<Phase>(prev?.passed ? 'results' : 'quiz');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | number[]>>({});
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(prev?.score ?? 0);
  const [correct, setCorrect] = useState(0);

  const q = questions[currentIdx];
  const isMulti = q?.type === 'multi-select';
  const isTF = q?.type === 'true-false';

  const getSelected = (): number | number[] | undefined => answers[q?.id];

  const toggleAnswer = (idx: number) => {
    if (revealed) return;
    if (isMulti) {
      setAnswers((a) => {
        const cur = (a[q.id] as number[]) ?? [];
        return {
          ...a,
          [q.id]: cur.includes(idx) ? cur.filter((i) => i !== idx) : [...cur, idx],
        };
      });
    } else {
      setAnswers((a) => ({ ...a, [q.id]: idx }));
    }
  };

  const isSelected = (idx: number): boolean => {
    const sel = getSelected();
    if (isMulti) return Array.isArray(sel) && sel.includes(idx);
    return sel === idx;
  };

  const isCorrect = (idx: number): boolean => {
    if (Array.isArray(q.correctAnswer)) return q.correctAnswer.includes(idx);
    return q.correctAnswer === idx;
  };

  const checkAnswer = useCallback((): boolean => {
    const sel = getSelected();
    if (Array.isArray(q.correctAnswer)) {
      if (!Array.isArray(sel)) return false;
      return (
        sel.length === q.correctAnswer.length &&
        q.correctAnswer.every((v) => sel.includes(v))
      );
    }
    return sel === q.correctAnswer;
  }, [q, answers]);

  const handleReveal = () => {
    if (!revealed) {
      setRevealed(true);
      if (checkAnswer()) setCorrect((c) => c + 1);
    }
  };

  const hasAnswered = (): boolean => {
    const sel = getSelected();
    if (isMulti) return Array.isArray(sel) && sel.length > 0;
    return sel !== undefined;
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((i) => i + 1);
      setRevealed(false);
    } else {
      // Submit
      const finalCorrect = correct + (checkAnswer() && !revealed ? 1 : revealed ? correct : correct);
      const totalCorrect = revealed ? correct : correct + (checkAnswer() ? 1 : 0);
      const pct = Math.round((totalCorrect / questions.length) * 100);
      const passed = pct >= 70;
      setScore(pct);
      setCorrect(totalCorrect);
      saveQuizResult(quizId, {
        score: pct,
        totalQuestions: questions.length,
        passed,
        attempts: (prev?.attempts ?? 0) + 1,
        lastAttemptAt: new Date().toISOString(),
        answers,
      });
      if (passed) {
        addXp(25);
        onPass();
      }
      setPhase('results');
    }
  };

  const handleRetry = () => {
    setPhase('quiz');
    setCurrentIdx(0);
    setAnswers({});
    setRevealed(false);
    setScore(0);
    setCorrect(0);
  };

  // ── Results phase ──────────────────────────────────────────────────────────
  if (phase === 'results') {
    const passed = score >= 70;
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto"
      >
        <div className={`rounded-3xl p-8 text-center mb-6 ${passed ? 'bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200' : 'bg-gradient-to-br from-red-50 to-orange-50 border border-red-100'}`}>
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${passed ? 'bg-green-100' : 'bg-red-100'}`}>
            {passed ? (
              <Trophy size={40} className="text-green-600" />
            ) : (
              <AlertTriangle size={40} className="text-red-500" />
            )}
          </div>
          <h3 className={`text-2xl font-display font-bold mb-1 ${passed ? 'text-green-800' : 'text-red-700'}`}>
            {passed ? 'Quiz Passed!' : 'Not quite...'}
          </h3>
          <p className={`text-sm mb-4 ${passed ? 'text-green-700' : 'text-red-600'}`}>
            {passed
              ? 'Excellent work! You can move on to the next lesson.'
              : 'You need 70% to pass. Review the material and try again.'}
          </p>
          <div className={`text-5xl font-display font-bold mb-1 ${passed ? 'text-green-700' : 'text-red-600'}`}>
            {score}%
          </div>
          <p className="text-xs text-gray-500">
            {correct} of {questions.length} correct
          </p>
        </div>

        {/* Score breakdown */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-5">
          <h4 className="text-sm font-bold text-text-dark mb-4">Question Review</h4>
          <div className="space-y-3">
            {questions.map((ques, i) => {
              const ans = answers[ques.id];
              let wasCorrect = false;
              if (Array.isArray(ques.correctAnswer)) {
                wasCorrect =
                  Array.isArray(ans) &&
                  ans.length === ques.correctAnswer.length &&
                  ques.correctAnswer.every((v) => ans.includes(v));
              } else {
                wasCorrect = ans === ques.correctAnswer;
              }
              return (
                <div key={ques.id} className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${wasCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                    {wasCorrect ? (
                      <CheckCircle size={14} className="text-green-600" />
                    ) : (
                      <XCircle size={14} className="text-red-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-dark">{i + 1}. {ques.question}</p>
                    {!wasCorrect && ques.explanation && (
                      <p className="text-xs text-text-muted mt-1 italic">{ques.explanation}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3">
          {!passed && (
            <button
              onClick={handleRetry}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors"
            >
              <RotateCcw size={16} /> Retry Quiz
            </button>
          )}
          {passed && onDismiss && (
            <button
              onClick={onDismiss}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors"
            >
              Continue <ChevronRight size={16} />
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  // ── Quiz phase ─────────────────────────────────────────────────────────────
  return (
    <div className="max-w-xl mx-auto">
      {title && (
        <h3 className="font-display font-bold text-lg text-text-dark mb-4">{title}</h3>
      )}

      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={false}
            animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>
        <span className="text-xs font-bold text-text-muted flex-shrink-0">
          {currentIdx + 1} / {questions.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {/* Question */}
          <div className="mb-5">
            {isMulti && (
              <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-2">
                Select all that apply
              </span>
            )}
            <p className="text-base font-bold text-text-dark leading-snug">{q.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-2.5 mb-6">
            {q.options.map((opt, oi) => {
              const selected = isSelected(oi);
              const correct = revealed && isCorrect(oi);
              const wrong = revealed && selected && !isCorrect(oi);

              let cls = 'border-gray-200 bg-white text-text-dark hover:border-gray-300';
              if (correct) cls = 'border-green-500 bg-green-50 text-green-800';
              else if (wrong) cls = 'border-red-400 bg-red-50 text-red-700';
              else if (selected && !revealed) cls = 'border-primary bg-primary/5 text-primary font-bold';

              return (
                <button
                  key={oi}
                  onClick={() => toggleAnswer(oi)}
                  disabled={revealed}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-sm border-2 transition-all flex items-center gap-3 ${cls} disabled:cursor-default`}
                >
                  {/* Checkbox / radio indicator */}
                  <span className={`flex-shrink-0 w-5 h-5 rounded-${isMulti ? 'md' : 'full'} border-2 flex items-center justify-center transition-colors ${
                    correct ? 'border-green-500 bg-green-500 text-white' :
                    wrong ? 'border-red-400 bg-red-400 text-white' :
                    selected ? 'border-primary bg-primary text-white' :
                    'border-gray-300'
                  }`}>
                    {(selected || (revealed && isCorrect(oi))) && (
                      <CheckCircle size={12} className="text-white" fill="white" />
                    )}
                    {wrong && <XCircle size={12} className="text-white" fill="white" />}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {correct && <CheckCircle size={16} className="text-green-500 flex-shrink-0" />}
                  {wrong && <XCircle size={16} className="text-red-400 flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation (after reveal) */}
          <AnimatePresence>
            {revealed && q.explanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-5"
              >
                <div className={`rounded-xl p-4 text-sm ${checkAnswer() ? 'bg-green-50 border border-green-100 text-green-800' : 'bg-amber-50 border border-amber-100 text-amber-800'}`}>
                  <span className="font-bold">{checkAnswer() ? 'Correct! ' : 'Explanation: '}</span>
                  {q.explanation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {currentIdx > 0 && !revealed && (
              <button
                onClick={() => { setCurrentIdx((i) => i - 1); setRevealed(false); }}
                className="p-2.5 rounded-xl border border-gray-200 text-gray-500 hover:text-text-dark transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
            )}
            {!revealed ? (
              <button
                onClick={handleReveal}
                disabled={!hasAnswered()}
                className="flex-1 px-5 py-3 bg-text-dark text-white rounded-xl font-bold text-sm hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors"
              >
                {currentIdx < questions.length - 1 ? (
                  <>Next Question <ChevronRight size={16} /></>
                ) : (
                  <>Finish Quiz <Trophy size={16} /></>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizEngine;
