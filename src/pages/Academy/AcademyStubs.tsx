import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { academyData } from '../../lib/academyData';
import {
    Zap, Shield, Layout, Target, Sparkles, Bot, MessageSquare, Brain,
    CheckCircle, ArrowRight, Users, Building2, GraduationCap, Award,
    Quote, MapPin, ChevronDown, Star, BookOpen, Send
} from 'lucide-react';

// ─── Shared Hero (matches AcademySubpages AcademyHero) ────────────────────
const AcademyHero = ({ title, subtitle, pill }: { title: string; subtitle: string; pill?: string }) => (
    <div className="bg-text-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-text-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {pill && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider mb-4"
                >
                    {pill}
                </motion.div>
            )}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold mb-6 max-w-4xl"
            >
                {title}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/70 max-w-2xl leading-relaxed"
            >
                {subtitle}
            </motion.p>
        </div>
    </div>
);

// ─── ACADEMY AI PAGE ───────────────────────────────────────────────────────
export const AcademyAi: React.FC = () => {
    const iconMap: Record<string, React.ElementType> = {
        'MExt Tutor': Bot,
        'Smart Search': Sparkles,
        'Study Plans': Layout,
        'Portfolio Review': Target,
        'Safe Space': Shield,
    };

    const chatMessages = [
        { role: 'user', text: 'How do I calculate customer acquisition cost for a multi-channel campaign?' },
        { role: 'ai', text: 'Great question! CAC = Total Marketing Spend / Number of New Customers Acquired. For multi-channel, you\'ll want to attribute spend per channel. In Module 3, we covered the weighted attribution model — would you like me to pull up those notes?' },
        { role: 'user', text: 'Yes, and can you quiz me on it?' },
        { role: 'ai', text: 'Sure! Here\'s a quick scenario: You spent ₦500K on Google Ads (30 customers), ₦300K on LinkedIn (12 customers), and ₦200K on organic content (18 customers). What\'s the blended CAC and which channel is most efficient?' },
    ];

    const steps = [
        { num: '01', title: 'Ask anything', desc: 'Type a question inside any lesson. The tutor knows your course context and progress.' },
        { num: '02', title: 'Get cited answers', desc: 'Every response references specific lessons, frameworks, or resources you can revisit.' },
        { num: '03', title: 'Practice & test', desc: 'Request quizzes, case studies, or scenario drills. Get instant rubric-based feedback.' },
    ];

    return (
        <div className="bg-white overflow-hidden">
            <AcademyHero
                title="Meet your AI learning partner"
                subtitle="Cortex is MExt's built-in AI tutor — context-aware, pedagogically grounded, and available inside every lesson."
                pill="AI Tutor"
            />

            {/* Feature Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark mb-4">Five capabilities, one tutor</h2>
                        <p className="text-lg text-text-muted max-w-2xl mx-auto">Cortex adapts to your learning style, knows your curriculum, and never gives you the answer without making you think first.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {academyData.aiFeatures.map((feat, i) => {
                            const Icon = iconMap[feat.title] || Zap;
                            return (
                                <motion.div
                                    key={feat.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-text-dark mb-2">{feat.title}</h3>
                                    <p className="text-text-muted leading-relaxed">{feat.desc}</p>
                                </motion.div>
                            );
                        })}
                        {/* Bonus: Coming Soon card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-gray-50 rounded-3xl border border-dashed border-gray-300 p-8 flex flex-col items-center justify-center text-center"
                        >
                            <Brain size={32} className="text-text-muted mb-4" />
                            <h3 className="text-xl font-bold text-text-dark mb-2">More coming</h3>
                            <p className="text-text-muted text-sm">Voice tutoring, real-time collaboration, and career coaching — all in development.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AI Chat Demo Mockup */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark mb-4">See it in action</h2>
                        <p className="text-lg text-text-muted max-w-xl mx-auto">A real conversation from inside the Growth & Performance track.</p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto bg-text-dark rounded-[32px] p-6 md:p-8 shadow-2xl border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                        {/* Chat header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 relative z-10">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                <Sparkles size={16} className="text-white" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Cortex AI Tutor</p>
                                <p className="text-white/40 text-xs">Growth & Performance Track — Module 3</p>
                            </div>
                        </div>
                        {/* Messages */}
                        <div className="space-y-4 relative z-10">
                            {chatMessages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.15 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-primary text-white rounded-br-md'
                                        : 'bg-white/10 text-white/90 rounded-bl-md border border-white/5'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {/* Input mock */}
                        <div className="mt-6 flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 relative z-10">
                            <MessageSquare size={16} className="text-white/30" />
                            <span className="text-white/30 text-sm">Ask Cortex anything about this lesson...</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark mb-4">How it works</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px border-t-2 border-dashed border-gray-200" />
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="text-center relative"
                            >
                                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10">
                                    <span className="text-2xl font-display font-bold text-primary">{step.num}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-dark mb-3">{step.title}</h3>
                                <p className="text-text-muted leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-text-dark text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to learn smarter?</h2>
                    <p className="text-xl text-white/60 mb-10">Every Academy course includes Cortex. Start learning and your AI tutor activates automatically.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/academy/sign-up" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                            Start Learning Free
                        </Link>
                        <Link to="/academy/courses" className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors">
                            Browse Courses
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// ─── ACADEMY PARTNERS PAGE ────────────────────────────────────────────────
export const AcademyPartners: React.FC = () => {
    const tiers = [
        {
            name: 'Hiring Partner',
            icon: Building2,
            desc: 'Access our talent pool of trained, certified marketers.',
            benefits: ['Post jobs to our board', 'Access verified credentials', 'Priority talent matching', 'Attend hiring mixers'],
            featured: false,
        },
        {
            name: 'Curriculum Partner',
            icon: GraduationCap,
            desc: 'Co-create courses and shape the next generation of marketers.',
            benefits: ['Co-develop course modules', 'Guest lecture slots', 'Brand visibility in courses', 'Research collaboration'],
            featured: true,
        },
        {
            name: 'Scholarship Sponsor',
            icon: Award,
            desc: 'Fund learners and build brand equity with the community.',
            benefits: ['Sponsor cohort seats', 'Named scholarship programs', 'Impact reporting', 'Community brand presence'],
            featured: false,
        },
    ];

    const stats = [
        { value: '2,000+', label: 'Active Learners' },
        { value: '6', label: 'Countries' },
        { value: '50+', label: 'Partner Companies' },
        { value: '95%', label: 'Completion Rate' },
    ];

    return (
        <div className="bg-white overflow-hidden">
            <AcademyHero
                title="Partners who invest in talent"
                subtitle="We work with employers, accelerators, and institutions to bridge Africa's marketing skills gap."
                pill="Partners"
            />

            {/* Logo Marquee */}
            <section className="py-16 bg-gray-50 overflow-hidden">
                <div className="relative">
                    <div className="mask-gradient-horizontal">
                        <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap">
                            {[...academyData.partners, ...academyData.partners].map((partner, i) => (
                                <span key={i} className="text-xl font-display font-bold text-text-dark/30 flex-shrink-0">{partner}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Tiers */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark mb-4">Three ways to partner</h2>
                        <p className="text-lg text-text-muted max-w-2xl mx-auto">Choose the partnership tier that aligns with your goals.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {tiers.map((tier, i) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-3xl p-8 transition-all hover:shadow-xl ${tier.featured
                                    ? 'bg-text-dark text-white border-2 border-primary relative'
                                    : 'bg-white border border-gray-200 hover:border-primary/30'
                                    }`}
                            >
                                {tier.featured && (
                                    <span className="absolute -top-3 left-8 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">Most Popular</span>
                                )}
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${tier.featured ? 'bg-primary' : 'bg-primary/10'}`}>
                                    <tier.icon size={24} className={tier.featured ? 'text-white' : 'text-primary'} />
                                </div>
                                <h3 className={`text-2xl font-display font-bold mb-3 ${tier.featured ? 'text-white' : 'text-text-dark'}`}>{tier.name}</h3>
                                <p className={`mb-6 leading-relaxed ${tier.featured ? 'text-white/70' : 'text-text-muted'}`}>{tier.desc}</p>
                                <ul className="space-y-3 mb-8">
                                    {tier.benefits.map((b) => (
                                        <li key={b} className="flex items-start gap-3">
                                            <CheckCircle size={18} className={`mt-0.5 flex-shrink-0 ${tier.featured ? 'text-primary' : 'text-green-500'}`} />
                                            <span className={`text-sm ${tier.featured ? 'text-white/90' : 'text-text-dark'}`}>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-xl font-bold transition-colors ${tier.featured
                                    ? 'bg-primary text-white hover:bg-primary-dark'
                                    : 'bg-text-dark text-white hover:bg-black'
                                    }`}>
                                    Learn More
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-16 bg-text-dark text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</p>
                                <p className="text-white/60 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Partner CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[40px] border border-gray-200 p-8 md:p-16 text-center shadow-sm"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">Become a partner</h2>
                        <p className="text-text-muted mb-10 max-w-lg mx-auto">Join our network of forward-thinking organizations investing in Africa's marketing talent.</p>
                        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Company name"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Work email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                            />
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors text-text-muted">
                                <option value="">Partnership interest</option>
                                <option value="hiring">Hiring Partner</option>
                                <option value="curriculum">Curriculum Partner</option>
                                <option value="scholarship">Scholarship Sponsor</option>
                            </select>
                            <button className="w-full py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                                Get in Touch
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

// ─── ACADEMY STORIES PAGE ─────────────────────────────────────────────────
export const AcademyStories: React.FC = () => {
    const featured = academyData.testimonials[0];
    const stats = [
        { value: '2,000+', label: 'Active Learners' },
        { value: '15', label: 'Countries' },
        { value: '92%', label: 'Would Recommend' },
        { value: '3x', label: 'Career Growth' },
    ];

    return (
        <div className="bg-white overflow-hidden">
            <AcademyHero
                title="Real stories, real impact"
                subtitle="Hear from marketers who transformed their careers through MExt Academy."
                pill="Stories"
            />

            {/* Featured Story */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-[40px] overflow-hidden"
                    >
                        <div className="grid md:grid-cols-[2fr_3fr]">
                            <div className="relative h-64 md:h-auto">
                                <img
                                    src={featured.avatar}
                                    alt={featured.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-50 hidden md:block" />
                            </div>
                            <div className="p-8 md:p-16 flex flex-col justify-center">
                                <Quote size={40} className="text-primary/30 mb-6" />
                                <blockquote className="text-2xl md:text-3xl font-display font-bold text-text-dark leading-snug mb-8">
                                    "{featured.quote}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <img src={featured.avatar} alt={featured.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-bold text-text-dark">{featured.name}</p>
                                        <p className="text-text-muted text-sm flex items-center gap-1">
                                            {featured.role} <span className="mx-1">·</span> <MapPin size={12} /> {featured.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-1">{stat.value}</p>
                                <p className="text-text-muted text-sm font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stories Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark mb-4">From the community</h2>
                        <p className="text-lg text-text-muted max-w-xl mx-auto">Every learner has a unique story. Here are some of our favorites.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {academyData.testimonials.map((t, i) => (
                            <motion.div
                                key={t.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={14} className="text-orange-400 fill-orange-400" />
                                    ))}
                                </div>
                                <blockquote className="text-text-dark font-medium leading-relaxed mb-6">
                                    "{t.quote}"
                                </blockquote>
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="font-bold text-text-dark text-sm">{t.name}</p>
                                        <p className="text-text-muted text-xs flex items-center gap-1">
                                            {t.role} · <MapPin size={10} /> {t.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-text-dark text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Your story could be next.</h2>
                    <p className="text-xl text-white/60 mb-10">Join thousands of marketers across Africa building real skills and real careers.</p>
                    <Link to="/academy/sign-up" className="inline-flex px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                        Start Learning Free <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

// ─── ACADEMY WAITLIST PAGE ────────────────────────────────────────────────
export const AcademyWaitlist: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const faqs = academyData.faqs.slice(0, 5);

    const valueProps = [
        'Priority access to all courses',
        'Founding member pricing',
        'Shape the curriculum',
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* Full-screen dark hero with form */}
            <section className="min-h-screen bg-text-dark text-white flex items-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]" />
                </div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10 py-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Copy */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider mb-8"
                            >
                                Early Access
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6"
                            >
                                Join the waitlist for <span className="text-primary">MExt Academy</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl text-white/60 mb-10 leading-relaxed max-w-lg"
                            >
                                Be first to access tracks, certifications, cohorts, and the most serious marketing community in Africa.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="space-y-3"
                            >
                                {valueProps.map((vp) => (
                                    <div key={vp} className="flex items-center gap-3">
                                        <CheckCircle size={18} className="text-primary flex-shrink-0" />
                                        <span className="text-white/80">{vp}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10"
                        >
                            <h2 className="text-2xl font-display font-bold mb-6">Reserve your spot</h2>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-bold text-white/70 mb-1.5">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Ada Nnaji"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder:text-white/30 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-white/70 mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="ada@company.com"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder:text-white/30 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-white/70 mb-1.5">I am a...</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white/70 transition-colors">
                                        <option value="">Select your role</option>
                                        <option value="marketer">Marketer</option>
                                        <option value="manager">Marketing Manager</option>
                                        <option value="student">Student</option>
                                        <option value="founder">Founder / CEO</option>
                                        <option value="employer">Employer / HR</option>
                                    </select>
                                </div>
                                <button className="w-full py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                                    Join the Waitlist <Send size={18} />
                                </button>
                            </form>
                            {/* Social Proof */}
                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {academyData.testimonials.slice(0, 4).map((t, i) => (
                                        <img key={i} src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full border-2 border-text-dark object-cover" />
                                    ))}
                                </div>
                                <p className="text-white/40 text-sm">
                                    <span className="text-white font-bold">1,247</span> marketers already on the list
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">Frequently asked questions</h2>
                    </div>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-200 rounded-2xl bg-white overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`font-bold ${openFaq === i ? 'text-primary' : 'text-text-dark'} transition-colors`}>{faq.q}</span>
                                    <ChevronDown size={20} className={`text-text-muted transition-transform flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-text-muted leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
