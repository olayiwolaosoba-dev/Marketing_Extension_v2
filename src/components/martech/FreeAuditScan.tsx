import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Check,
    ChevronRight,
    AlertTriangle,
    Zap,
    Download,
    Mail,
    BarChart3,
    Brain,
    Shield
} from 'lucide-react';

// Questions Configuration
const questions = [
    {
        id: 'size',
        label: "Company Size",
        options: ["1-10 (Seed)", "11-50 (Growth)", "51-200 (Scale)", "200+ (Enterprise)"]
    },
    {
        id: 'motion',
        label: "Primary Revenue Motion",
        options: ["Sales-Led (Outbound)", "Product-Led (PLG)", "Inbound / Content", "Hybrid"]
    },
    {
        id: 'crm',
        label: "Core CRM / System of Record",
        options: ["HubSpot", "Salesforce", "Pipedrive / Other", "Spreadsheets / None"]
    },
    {
        id: 'warehouse',
        label: "Do you have a Data Warehouse?",
        options: ["Yes (Snowflake/BigQuery)", "No, living in CRM", "What's a warehouse?", "Planned"]
    },
    {
        id: 'tracking',
        label: "Tracking Confidence",
        options: ["100% Trust", "Some Drift", "Messy / Duplicate", "Broken"]
    },
    {
        id: 'attribution',
        label: "Attribution Approach",
        options: ["Last Touch (GA4)", "Multi-Touch (Software)", "Self-Reported", "None"]
    },
    {
        id: 'automation',
        label: "Automation Maturity",
        options: ["Fully Automated", "Key Workflows Only", "Mostly Manual", "Zapier Chaos"]
    },
    {
        id: 'ai_usage',
        label: "Current AI Usage",
        options: ["Production Agents", "Ad-hoc (ChatGPT)", "Experimental", "Banned / None"]
    },
    {
        id: 'governance',
        label: "Data Governance",
        options: ["Strict / Documented", "Loose", "Wild West", "Unknown"]
    },
    {
        id: 'pain',
        label: "Biggest Current Pain",
        options: ["Leads falling through cracks", "Can't prove ROI", "Manual busywork", "Tool costs too high"]
    }
];

const FreeAuditScan: React.FC = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleOptionSelect = (option: string) => {
        setAnswers({ ...answers, [questions[step].id]: option });

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            // Finish
            setIsAnalyzing(true);
            setTimeout(() => {
                setIsAnalyzing(false);
                setShowResults(true);
            }, 2500); // Fake analysis time
        }
    };

    // Derived Logic (Mock)
    const getScore = () => {
        // Simple mock score based on length of answers or random for demo
        return Math.floor(Math.random() * (85 - 40) + 40);
    };

    const stackScore = getScore();
    const aiScore = Math.floor(stackScore * 0.8);

    const progress = ((step + 1) / questions.length) * 100;

    return (
        <section id="scan" className="bg-bg-dark py-24 relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                {!showResults && !isAnalyzing && (
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                            <Zap size={12} />
                            Interactive Diagnostic
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Free Stack + AI Readiness Scan
                        </h2>
                        <p className="text-xl text-white/60 font-light max-w-lg mx-auto">
                            Answer 10 questions to benchmark your infrastructure against 500+ growth teams.
                        </p>
                    </div>
                )}

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">

                    {/* Abstract Background */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

                    {isAnalyzing ? (
                        <div className="text-center flex flex-col items-center">
                            <div className="w-20 h-20 border-4 border-white/10 border-t-primary rounded-full animate-spin mb-8" />
                            <h3 className="text-2xl font-bold text-white mb-2 animate-pulse">Analyzing Stack Architecture...</h3>
                            <p className="text-white/50">Benchmarking against industry standards</p>
                        </div>
                    ) : showResults ? (
                        /* RESULTS DASHBOARD */
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full"
                        >
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Diagnostic Results</h3>
                                    <p className="text-white/50 text-sm">Based on your provided stack profile</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="p-2 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors" title="Download PDF">
                                        <Download size={20} />
                                    </button>
                                    <button className="p-2 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors" title="Email Report">
                                        <Mail size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <ScoreCard
                                    label="Stack Health"
                                    score={stackScore}
                                    icon={BarChart3}
                                    color="bg-gradient-to-br from-blue-500 to-indigo-600"
                                />
                                <ScoreCard
                                    label="AI Readiness"
                                    score={aiScore}
                                    icon={Brain}
                                    color="bg-gradient-to-br from-purple-500 to-pink-600"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2">
                                        <AlertTriangle size={14} />
                                        Critical Leaks Detected
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-white/70 text-sm bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
                                            Potential attribution gap in mid-funnel events.
                                        </li>
                                        <li className="flex items-start gap-3 text-white/70 text-sm bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
                                            Data silo risk between CRM and ad platforms.
                                        </li>
                                        <li className="flex items-start gap-3 text-white/70 text-sm bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
                                            Manual processes slowing down velocity.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4 flex items-center gap-2">
                                        <Zap size={14} />
                                        Recommended Quick Wins
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-white/70 text-sm bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                                            <Check size={14} className="text-green-500 mt-0.5" />
                                            Implement server-side tracking (CAPI)
                                        </li>
                                        <li className="flex items-start gap-3 text-white/70 text-sm bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                                            <Check size={14} className="text-green-500 mt-0.5" />
                                            Centralize data warehouse schema
                                        </li>
                                        <li className="flex items-start gap-3 text-white/70 text-sm bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                                            <Check size={14} className="text-green-500 mt-0.5" />
                                            Automate lead enrichment workflow
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-white hover:text-bg-dark transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20">
                                Book a Full Audit Call to Fix This
                                <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    ) : (
                        /* WIZARD QUESTIONS */
                        <div className="w-full max-w-2xl mx-auto">
                            {/* Progress Bar */}
                            <div className="w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={questions[step].id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {questions[step].label}
                                    </h3>
                                    <p className="text-white/40 mb-8 text-sm uppercase tracking-widest font-bold">
                                        Question {step + 1} of {questions.length}
                                    </p>

                                    <div className="grid gap-3">
                                        {questions[step].options.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleOptionSelect(option)}
                                                className="group w-full text-left p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-bg-dark transition-all flex items-center justify-between"
                                            >
                                                <span className="font-medium text-lg">{option}</span>
                                                <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const ScoreCard = ({ label, score, icon: Icon, color }: any) => (
    <div className="bg-bg-dark/50 rounded-xl p-6 border border-white/5 relative overflow-hidden flex items-center gap-6">
        <div className="relative z-10 flex-1">
            <div className="flex items-center gap-2 mb-2 text-white/60 text-sm font-bold uppercase tracking-wider">
                <Icon size={16} />
                {label}
            </div>
            <div className="text-5xl font-display font-bold text-white">
                {score}<span className="text-2xl text-white/20">/100</span>
            </div>
        </div>

        {/* Ring Chart Mock */}
        <div className="w-20 h-20 rounded-full border-4 border-white/5 flex items-center justify-center relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                    cx="50" cy="50" r="46"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-white/5"
                />
                <circle
                    cx="50" cy="50" r="46"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray="289" // 2 * pi * 46
                    strokeDashoffset={289 - (289 * score) / 100}
                    className={`text-primary transition-all duration-1000 ease-out`}
                />
            </svg>
        </div>
    </div>
);

export default FreeAuditScan;
