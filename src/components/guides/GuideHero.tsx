
import React from 'react';
import { Guide } from '../../data/guides';
import { Clock, Calendar } from 'lucide-react';

interface GuideHeroProps {
    guide: Guide;
}

const GuideHero: React.FC<GuideHeroProps> = ({ guide }) => {
    return (
        <section className={`pt-32 pb-20 px-6 ${guide.heroTheme === 'dark' ? 'bg-bg-dark text-white' : 'bg-gray-50 text-gray-900 border-b border-gray-200'}`}>
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">Guide</span>
                            <span className={`h-4 w-px ${guide.heroTheme === 'dark' ? 'bg-white/20' : 'bg-gray-300'}`} />
                            <span className={`text-xs font-bold uppercase tracking-wider ${guide.heroTheme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                                {guide.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                            {guide.title}
                        </h1>

                        <p className={`text-xl mb-8 leading-relaxed ${guide.heroTheme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                            {guide.shortDescription}
                        </p>

                        <div className={`flex items-center gap-6 text-sm mb-10 ${guide.heroTheme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                            <div className="flex items-center gap-2">
                                <Clock size={16} /> {guide.estimatedReadTime}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} /> {guide.publishDate}
                            </div>
                        </div>

                        <button
                            onClick={() => document.getElementById('content-gate')?.scrollIntoView({ behavior: 'smooth' })}
                            className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${guide.heroTheme === 'dark'
                                    ? 'bg-primary text-white hover:bg-white hover:text-bg-dark'
                                    : 'bg-bg-dark text-white hover:bg-black'
                                }`}
                        >
                            {guide.gated ? 'Get the Guide' : 'Read Guide'}
                        </button>
                    </div>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <img src={guide.coverImage} alt={guide.title} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuideHero;
