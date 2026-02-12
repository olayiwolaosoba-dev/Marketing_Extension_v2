import React from 'react';
import { ArrowRight } from 'lucide-react';

const RegTechMarketingOS: React.FC = () => {
    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <div className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4">The Engine</h2>
                    <h3 className="text-3xl font-display font-bold text-text-dark">How we build authority.</h3>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-0 max-w-5xl mx-auto">

                    {/* Stage 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-1 w-full lg:w-auto relative z-10">
                        <h4 className="font-bold text-lg mb-2 text-text-muted">Inputs</h4>
                        <p className="font-medium text-text-dark">Technical specs + regulatory landscape + competitor FUD</p>
                    </div>

                    <ArrowRight className="hidden lg:block text-gray-300 -ml-2 -mr-2 z-0" size={32} />
                    <div className="lg:hidden rotate-90 text-gray-300 my-2">
                        <ArrowRight size={32} />
                    </div>

                    {/* Stage 2 */}
                    <div className="bg-primary p-8 rounded-2xl shadow-lg shadow-primary/20 flex-1 w-full lg:w-auto scale-110 relative z-20">
                        <h4 className="font-bold text-lg mb-2 text-white/90">Engine</h4>
                        <p className="font-bold text-xl text-white">Validation + Translation + Distribution</p>
                    </div>

                    <ArrowRight className="hidden lg:block text-gray-300 -ml-2 -mr-2 z-0" size={32} />
                    <div className="lg:hidden rotate-90 text-gray-300 my-2">
                        <ArrowRight size={32} />
                    </div>

                    {/* Stage 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-1 w-full lg:w-auto relative z-10">
                        <h4 className="font-bold text-lg mb-2 text-text-muted">Outputs</h4>
                        <p className="font-medium text-text-dark">Trust centers + analyst briefs + sales decks</p>
                    </div>

                    <ArrowRight className="hidden lg:block text-gray-300 -ml-2 -mr-2 z-0" size={32} />
                    <div className="lg:hidden rotate-90 text-gray-300 my-2">
                        <ArrowRight size={32} />
                    </div>

                    {/* Stage 4 */}
                    <div className="bg-bg-dark p-8 rounded-2xl shadow-sm border border-gray-100 flex-1 w-full lg:w-auto relative z-10">
                        <h4 className="font-bold text-lg mb-2 text-white/60">Outcomes</h4>
                        <p className="font-bold text-white">Shortened sales cycles + RFP wins</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RegTechMarketingOS;
