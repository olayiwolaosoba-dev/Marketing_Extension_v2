import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';
import { AuditQuestion, calculateAuditScore, selectAuditQuestions } from '../../data/audit';

const AuditWizard: React.FC = () => {
    const navigate = useNavigate();

    // State
    const [questions, setQuestions] = useState<AuditQuestion[]>([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});

    // Initialize with random questions on mount
    useEffect(() => {
        const newSet = selectAuditQuestions();
        setQuestions(newSet);
    }, []);

    if (questions.length === 0) return <div className="min-h-screen bg-bg-dark flex items-center justify-center text-white">Loading Assessment...</div>;

    const question = questions[currentStep];
    const progress = ((currentStep + 1) / questions.length) * 100;

    const handleSelect = (score: number) => {
        setAnswers({ ...answers, [question.id]: score });

        // Auto-advance
        setTimeout(() => {
            if (currentStep < questions.length - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                finishAudit({ ...answers, [question.id]: score });
            }
        }, 250);
    };

    const finishAudit = (finalAnswers: Record<string, number>) => {
        const result = calculateAuditScore(finalAnswers);
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
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-50">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Close Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-50 p-2"
            >
                <X size={24} />
            </button>

            <div className="flex-1 container mx-auto px-6 max-w-3xl flex flex-col justify-center py-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={question.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">
                            Question {currentStep + 1} of {questions.length}
                        </span>

                        <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-10 leading-tight">
                            {question.text}
                        </h2>

                        <div className="flex flex-col gap-3">
                            {question.options.map((opt, idx) => {
                                const isSelected = answers[question.id] === opt.score;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelect(opt.score)}
                                        className={`text-left p-5 md:p-6 rounded-2xl border transition-all duration-200 group ${isSelected
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
                    className={`flex items-center gap-2 text-white/40 hover:text-white transition-colors ${currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                >
                    <ArrowLeft size={20} /> Previous
                </button>
            </div>
        </div>
    );
};

export default AuditWizard;
