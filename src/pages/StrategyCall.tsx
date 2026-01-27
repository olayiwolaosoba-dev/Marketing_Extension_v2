import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';

const StrategyCall: React.FC = () => {
    return (
        <div className="bg-bg-dark min-h-screen">

            {/* HERO SECTION WITH VIDEO BACKGROUND */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        {/* Placeholder video - marketing/office vibe */}
                        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-bg-dark/60" />
                </div>

                <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                            Scale your revenue engine.<br />
                            <span className="text-primary">Predictably.</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
                            Book a strategy call to see how our growth systems can add $1M+ to your pipeline in 90 days.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* LOGO MARQUEE */}
            <div className="bg-white/5 py-8 border-y border-white/10 overflow-hidden relative">
                <p className="text-center text-white/30 text-xs font-bold uppercase tracking-widest mb-6">TRUSTED BY INNOVATIVE TEAMS</p>
                <div className="flex overflow-hidden group">
                    {/* Inner container for animation */}
                    <div className="flex space-x-16 animate-infinite-scroll whitespace-nowrap group-hover:paused">
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                {['Techstars', 'Y Combinator', 'Swiss Association', 'Google', 'Meta', 'Amazon', 'Spotify', 'Uber'].map((logo, index) => (
                                    <span key={index} className="text-white/50 font-display text-2xl font-bold mx-4">{logo}</span>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="flex space-x-16 animate-infinite-scroll whitespace-nowrap group-hover:paused ml-16" aria-hidden="true">
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                {['Techstars', 'Y Combinator', 'Swiss Association', 'Google', 'Meta', 'Amazon', 'Spotify', 'Uber'].map((logo, index) => (
                                    <span key={index} className="text-white/50 font-display text-2xl font-bold mx-4">{logo}</span>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* SPLIT SECTION: COPY & FORM */}
            <section className="py-24 bg-bg-light">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-24">

                        {/* LEFT COLUMN: COPY */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-8">
                                Stop guessing.<br />
                                Start growing.
                            </h2>
                            <p className="text-lg text-text-muted mb-8 leading-relaxed">
                                Experience the future of growth marketing with a personalized strategy session.
                                Our data-driven approach streamlines everything from audience discovery to conversion optimization,
                                helping you build high-performing, scalable revenue engines with ease.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-text-dark mb-2">150+</h3>
                                    <p className="text-sm text-text-muted">Campaigns Launched</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-text-dark mb-2">33%</h3>
                                    <p className="text-sm text-text-muted">Avg. Conversion Uplift</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-text-dark mb-2">3x</h3>
                                    <p className="text-sm text-text-muted">ROI in 6 Months</p>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex gap-4">
                                {['Leader', 'Top Performer', 'High Growth'].map((badge, i) => (
                                    <div key={i} className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm w-24 text-center">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full mx-auto mb-2 flex items-center justify-center text-primary">
                                            <CheckCircle size={16} />
                                        </div>
                                        <p className="text-[10px] font-bold text-text-dark uppercase">{badge}</p>
                                        <p className="text-[8px] text-text-muted">2024</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: FORM */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
                            <h3 className="text-2xl font-display font-bold text-text-dark mb-6">Request Your Strategy Call</h3>
                            <form className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Work Email *</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="name@company.com" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">First Name *</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Last Name *</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Company Name *</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Job Title *</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Country *</label>
                                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-text-dark">
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>Canada</option>
                                        <option>Nigeria</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-dark transition-colors shadow-lg mt-4">
                                    Book Strategy Call
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* CASE STUDIES CAROUSEL */}
            <section className="py-24 bg-bg-dark border-t border-white/10 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Results that speak for themselves.
                    </h2>
                    <p className="text-white/60">See how we've helped leading brands scale.</p>
                </div>

                {/* Carousel Container */}
                <div className="pl-6 md:pl-[max(24px,calc((100vw-1280px)/2))] overflow-x-auto pb-12 hide-scrollbar flex gap-6 snap-x">
                    {[
                        { title: "FinTech Scale", metric: "+240% User Growth", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
                        { title: "SaaS Enterprise", metric: "$4M ARR Added", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
                        { title: "E-commerce Giant", metric: "35% Cart Recovery", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" },
                        { title: "HealthTech App", metric: "1M+ Downloads", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
                    ].map((caseStudy, i) => (
                        <div key={i} className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative rounded-2xl overflow-hidden group cursor-pointer snap-start border border-white/10 hover:border-primary/50 transition-all">
                            <img src={caseStudy.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent">
                                <p className="text-primary font-bold text-sm mb-2">{caseStudy.metric}</p>
                                <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                                    {caseStudy.title}
                                    <ArrowRight size={20} className="-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default StrategyCall;
