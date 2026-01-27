
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Guide } from '../../data/guides';

interface GuideCardProps {
    guide: Guide;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide }) => {
    return (
        <Link
            to={`/resources/guides/${guide.slug}`}
            className="group block h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={guide.coverImage}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold rounded-full uppercase tracking-wider">
                        {guide.category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {guide.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-6">
                    {guide.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                    Open Guide <ArrowUpRight size={16} />
                </div>
            </div>
        </Link>
    );
};

export default GuideCard;
