
import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

interface CaseStudyCardProps {
    title: string;
    description: string;
    outcome: string;
    category: string;
    image: string;
    video?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, outcome, category, image, video }) => {
    return (
        <div className="group relative rounded-2xl overflow-hidden bg-bg-card border border-white/5 hover:border-white/20 transition-all hover:translate-y-[-4px] cursor-pointer aspect-[4/5] md:aspect-square">

            {/* Background Image / Video */}
            <div className="absolute inset-0 z-0">
                <img src={image} alt={title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <div className="mb-auto flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white/80 border border-white/10 uppercase tracking-wide">
                        {category}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-bg-dark transition-all">
                        <ArrowUpRight size={18} />
                    </button>
                </div>

                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight">{title}</h3>

                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all opacity-0 group-hover:opacity-100 duration-300">
                        <p className="text-white/60 text-sm mb-4 line-clamp-2">{description}</p>
                        <div className="inline-block border-l-2 border-primary pl-3">
                            <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Outcome</div>
                            <div className="text-white font-bold">{outcome}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyCard;
