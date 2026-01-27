import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Layout, PenTool, Video, FileText, Upload } from 'lucide-react';
import { useStore } from '../../lib/store';

const NewRequestPage: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [pillar, setPillar] = useState('');
    const [template, setTemplate] = useState('');

    // Step 3 Data
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');
    const [brief, setBrief] = useState('');

    const { addRequest } = useStore();

    const pillars = [
        { id: 'content', title: 'Content+ Studio', icon: PenTool, desc: 'Social posts, videos, blogs' },
        { id: 'martech', title: 'MarTech Lab', icon: Layout, desc: 'Landing pages, emails, automation' },
        { id: 'consulting', title: 'Consulting Hub', icon: FileText, desc: 'Strategy, research, audits' },
    ];

    const templates = [
        { id: 'social', title: 'Social Carousel', icon: Layout, pillar: 'content' },
        { id: 'video', title: 'Short-form Video', icon: Video, pillar: 'content' },
        { id: 'blog', title: 'SEO Blog Post', icon: FileText, pillar: 'content' },
        { id: 'landing', title: 'Landing Page', icon: Layout, pillar: 'martech' },
        { id: 'email', title: 'Email Sequence', icon: FileText, pillar: 'martech' },
        { id: 'strategy', title: 'Strategy Deck', icon: FileText, pillar: 'consulting' },
    ].filter(t => t.pillar === pillar);

    const handleNext = () => {
        if (step === 1 && pillar) setStep(2);
        if (step === 2 && template) setStep(3);
        if (step === 3) {
            // Submit
            const newDetail = {
                id: Date.now().toString(),
                title: title || 'New Request',
                type: pillars.find(p => p.id === pillar)?.title.split(' ')[0] || 'General',
                status: 'Triaged', // Initial status
                priority: priority,
                dueDate: dueDate ? new Date(dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'TBD',
                projectId: 'p1', // Defaulting to first project for MVP
                brief: brief,
                requestedBy: 'Client User',
                assignee: 'Unassigned'
            };

            addRequest(newDetail);
            navigate('/app/requests');
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
        else navigate('/app/dashboard');
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-display font-bold text-text-dark">New Request</h1>
                    <span className="text-sm font-bold text-text-muted">Step {step} of 3</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                        className="bg-primary h-full rounded-full transition-all duration-300"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>
            </div>

            {/* Step 1: Choose Pillar */}
            {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                    {pillars.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setPillar(p.id)}
                            className={`p-6 rounded-2xl border-2 text-left transition-all ${pillar === p.id
                                    ? 'border-primary bg-primary/5 ring-4 ring-primary/10'
                                    : 'border-gray-200 hover:border-primary/50 hover:shadow-lg bg-white'
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${pillar === p.id ? 'bg-primary text-white' : 'bg-gray-100 text-text-muted'
                                }`}>
                                <p.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-text-dark mb-1">{p.title}</h3>
                            <p className="text-sm text-text-muted">{p.desc}</p>
                        </button>
                    ))}
                </div>
            )}

            {/* Step 2: Choose Template */}
            {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                    <h2 className="text-xl font-bold text-text-dark">Select a Template</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {templates.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTemplate(t.id)}
                                className={`p-6 rounded-2xl border-2 text-left transition-all ${template === t.id
                                        ? 'border-primary bg-primary/5 ring-4 ring-primary/10'
                                        : 'border-gray-200 hover:border-primary/50 hover:shadow-lg bg-white'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${template === t.id ? 'bg-primary text-white' : 'bg-blue-50 text-blue-600'
                                    }`}>
                                    <t.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-text-dark">{t.title}</h3>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
                <div className="space-y-6 animate-fadeIn">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200">
                        <h3 className="font-bold text-lg mb-4">Request Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-text-dark mb-2">Request Title</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="e.g. Q1 Campaign Assets"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-text-dark mb-2">Priority</label>
                                    <select
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary bg-white"
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                    >
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Urgent</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-text-dark mb-2">Due Date</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
                                        value={dueDate}
                                        onChange={(e) => setDueDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-dark mb-2">Creative Brief</label>
                                <textarea
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary h-32 resize-none"
                                    placeholder="Describe what you need..."
                                    value={brief}
                                    onChange={(e) => setBrief(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-dark mb-2">Attachments (Optional)</label>
                                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-text-muted hover:bg-gray-50 transition-colors cursor-pointer">
                                    <Upload size={24} className="mb-2" />
                                    <span className="text-sm">Click to upload files</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-8 border-t border-gray-100">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 font-bold text-text-muted hover:text-text-dark transition-colors"
                >
                    <ArrowLeft size={20} /> Back
                </button>
                <button
                    onClick={handleNext}
                    disabled={
                        (step === 1 && !pillar) ||
                        (step === 2 && !template) ||
                        (step === 3 && !title)
                    }
                    className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                >
                    {step === 3 ? 'Submit Request' : 'Next Step'} <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default NewRequestPage;
