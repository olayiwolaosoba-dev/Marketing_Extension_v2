
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureTileProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    index?: number;
}

const FeatureTile: React.FC<FeatureTileProps> = ({ title, description, icon: Icon, index = 0 }) => {
    return (
        <div
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group"
        >
            <div className="flex items-start gap-4">
                {Icon && (
                    <div className="mt-1 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                    </div>
                )}
                {!Icon && (
                    <div className="mt-1 text-primary/40 font-mono text-xs">0{index + 1}</div>
                )}
                <div>
                    <h4 className="font-bold text-lg text-white mb-2">{title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureTile;
