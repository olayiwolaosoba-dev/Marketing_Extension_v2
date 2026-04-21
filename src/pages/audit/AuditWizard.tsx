import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';
import {
    AuditQuestion,
    QualificationQuestion,
    QualificationData,
    calculateAuditScore,
    selectAuditQuestions,
    QUALIFICATION_QUESTIONS,
} from '../../data/audit';
import SEO from '../../components/SEO';

/* ──────────────────────────────────────────────
   The quiz flow interleaves 3 qualification Qs
   at positions 2, 6, 10 (0-indexed: 1, 6, 10)
   within the 12 scoring questions, giving 15
   total steps.
   ────────────────────────────────────────────── */

type Step =
    | { type: 'scoring'; question: AuditQuestion; scoringIndex: number }
    | { type: 'qualification'; question: QualificationQuestion };

function buildSteps(scoringQuestions: AuditQuestion[]): Step[] {
    const steps: Step[] = [];
    let scoringIdx = 0;

    // Interleave: positions 2, 6, 10 (1-indexed) are qualification
    // That means after scoring Q1 insert QC_STAGE, after scoring Q5 insert QC_INDUSTRY, after scoring Q9 insert QC_TEAM
    const qualInsertAfterScoring = [1, 5, 9]; // 0-indexed scoring positions after which to insert
    let qualIdx = 0;

    for (let i = 0; i < scoringQuestions.length; i++) {
        steps.push({ type: 'scoring', question: scoringQuestions[i], scoringIndex: scoringIdx });
        scoringIdx++;

        if (qualIdx < QUALIFICATION_QUESTIONS.length && qualInsertAfterScoring.includes(i)) {
            steps.push({ type: 'qualification', question: QUALIFICATION_QUESTIONS[qualIdx] });
            qualIdx++;
        }
    }

    return steps;
}

const AuditWizard: React.FC = () => {
    const navigate = useNavigate();

    // State
    const [steps, setSteps] = useState<Step[]>([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [qualData, setQualData] = useState<QualificationData>({});

    // Initialize with random questions on mount
    useEffect(() => {
        const scoringQs = selectAuditQuestions();
        setSteps(buildSteps(scoringQs));
    }, []);

    if (steps.length === 0)
        return (
            <div className="min-h-screen bg-bg-dark flex items-center justify-center text-white">
                Loading Assessment...
            </div>
        );

    const step = steps[currentStep];
    const totalSteps = steps.length; // 15
    const progress = ((currentStep + 1) / totalSteps) * 100;

    // Count scoring questions answered so far for the counter
    const scoringQuestionNumber = step.type === 'scoring' ? step.scoringIndex + 1 : null;

    const handleScoringSelect = (score: number) => {
        if (step.type !== 'scoring') return;
        const q = step.question;
        const newAnswers = { ...answers, [q.id]: score };
        setAnswers(newAnswers);

        setTimeout(() => {
            if (currentStep < totalSteps - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                finishAudit(newAnswers);
            }
        }, 250);
    };

    const handleQualSelect = (option: string) => {
        if (step.type !== 'qualification') return;
        const q = step.question;
        setQualData({ ...qualData, [q.dataKey]: option });

        setTimeout(() => {
            if (currentStep < totalSteps - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                finishAudit(answers);
            }
        }, 250);
    };

    const finishAudit = (finalAnswers: Record<string, number>) => {
        const finalQual = { ...qualData };
        // Capture last qual if it was the final step
        if (step.type === 'qualification') {
            const q = step.question as QualificationQuestion;
            // already set above
        }
        const result = calculateAuditScore(finalAnswers, finalQual);
        localStorage.setItem('lastAuditResult', JSON.stringify(result));
        navigate('/audit/results');
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="min-h-screen bg-bg-dark flex flex-col relative overflow-hidden">
            <SEO
                title="Free Marketing Stack & AI Readiness Audit | Marketing Extension"
                description="Take our free 12-question audit to assess your marketing stack, AI readiness, and growth gaps. Get a personalised scorecard and recommendations."
                canonical="https://themarketingextension.com/audit"
            />

            {/* Close Button */}
            <button
                onClick={() => navigate('/')}
                aria-label="Close audit and return to homepage"
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-50 p-2"
            >
                <X size={24} />
            </button>

            <div className="flex-1 container mx-auto px-6 max-w-3xl flex flex-col justify-center py-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step.type === 'scoring' ? step.question.id : (step.question as QualificationQuestion).id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Question Counter */}
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
                            {step.type === 'scoring'
                                ? `Scoring Question ${scoringQuestionNumber} of 12`
                                : 'Quick Context'}
                        </span>

                        {/* Progress bar (Improvement 2) */}
                        <div className="mb-8">
                            <div className="flex justify-end mb-1">
                                <span className="text-white/50 text-xs">{Math.round(progress)}% complete</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-10 leading-tight">
                            {step.type === 'scoring' ? step.question.text : (step.question as QualificationQuestion).text}
                        </h2>

                        {/* Options */}
                        <div className="flex flex-col gap-3">
                            {step.type === 'scoring'
                                ? step.question.options.map((opt, idx) => {
                                      const isSelected = answers[step.question.id] === opt.score;
                                      return (
                                          <button
                                              key={idx}
                                              onClick={() => handleScoringSelect(opt.score)}
                                              className={`text-left p-5 md:p-6 rounded-2xl border transition-all duration-200 group ${
                                                  isSelected
                                                      ? 'bg-primary border-primary text-white'
                                                      : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/30'
                                              }`}
                                          >
                                              <div className="flex items-center justify-between gap-4">
                                                  <span className="text-base md:text-lg font-medium">{opt.label}</span>
                                                  {isSelected && <ArrowRight size={20} />}
                                              </div>
                                          </button>
                                      );
                                  })
                                : (step.question as QualificationQuestion).options.map((opt, idx) => {
                                      const isSelected = qualData[(step.question as QualificationQuestion).dataKey] === opt;
                                      return (
                                          <button
                                              key={idx}
                                              onClick={() => handleQualSelect(opt)}
                                              className={`text-left p-5 md:p-6 rounded-2xl border transition-all duration-200 group ${
                                                  isSelected
                                                      ? 'bg-primary border-primary text-white'
                                                      : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/30'
                                              }`}
                                          >
                                              <div className="flex items-center justify-between gap-4">
                                                  <span className="text-base md:text-lg font-medium">{opt}</span>
                                                  {isSelected && <ArrowRight size={20} />}
                                              </div>
                                          </button>
                                      );
                                  })}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation (Back) */}
            <div className="p-8 border-t border-white/10 flex justify-between container mx-auto max-w-3xl">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-2 text-white/40 hover:text-white transition-colors ${
                        currentStep === 0 ? 'opacity-0 pointer-events-none' : ''
                    }`}
                >
                    <ArrowLeft size={20} /> Previous
                </button>
            </div>
        </div>
    );
};

export default AuditWizard;
