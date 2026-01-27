import React from 'react';
import { motion } from 'framer-motion';

interface FilterChipProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    count?: number;
}

const FilterChip: React.FC<FilterChipProps> = ({ label, isActive, onClick, count }) => {
    return (
        <button
            onClick={onClick}
            className={`relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${isActive
                    ? 'bg-text-dark text-white shadow-lg shadow-text-dark/10 ring-2 ring-text-dark/50'
                    : 'bg-white text-text-muted hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
        >
            {isActive && (
                <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-text-dark rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
            <span className="relative z-10">{label}</span>
            {count !== undefined && (count > 0 &&
                <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-text-muted'
                    }`}>
                    {count}
                </span>
            )}
        </button>
    );
};

export default FilterChip;
