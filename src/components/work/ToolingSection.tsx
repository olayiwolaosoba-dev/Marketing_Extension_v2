import React from 'react';
import { Settings, Zap, BarChart3, Database } from 'lucide-react';

interface ToolingProps {
    tools: string[];
}

const ToolingSection: React.FC<ToolingProps> = ({ tools }) => {
    return (
        <div id="tooling" className="py-24 border-t border-gray-100">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h3 className="text-2xl font-display font-medium mb-4">The Stack</h3>
                    <p className="text-text-muted">
                        We don't just deliver files. We leave behind a fully operational marketing OS.
                    </p>
                </div>
                <div className="md:col-span-8">
                    <div className="flex flex-wrap gap-3">
                        {tools.map((tool, i) => (
                            <div key={i} className="flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-lg border border-gray-100 text-sm font-bold text-bg-dark">
                                <Zap size={14} className="text-primary" />
                                {tool}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-bg-charcoal rounded-2xl border border-gray-100 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h4 className="text-lg font-bold text-white mb-2">Automated Reporting Layer</h4>
                            <p className="text-white/60 text-sm max-w-md">
                                Every campaign is connected to a live looker studio dashboard, ensuring transparency from day one.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
                        <BarChart3 className="absolute bottom-6 right-6 text-white/10" size={64} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolingSection;
