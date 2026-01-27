import React, { useEffect } from 'react';
import { ArrowRight, BarChart3, ScanLine } from 'lucide-react';
import MartechHero from '../components/martech/MartechHero';
import TrustStrip from '../components/common/TrustStrip';
import MartechSilentFailure from '../components/martech/MartechSilentFailure';
import AuditProduct from '../components/martech/AuditProduct';
import MartechBuildLab from '../components/martech/MartechBuildLab';
import MartechModules from '../components/martech/MartechModules';
import AiInfrastructure from '../components/martech/AiInfrastructure';
import ProcessTimeline from '../components/martech/ProcessTimeline';
import FreeAuditScan from '../components/martech/FreeAuditScan';
import MartechCaseStudies from '../components/martech/MartechCaseStudies';
import MartechWorkshops from '../components/martech/MartechWorkshops';
import MartechInsights from '../components/martech/MartechInsights';
import Footer from '../components/Footer';

const MartechStudioPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-bg-dark min-h-screen selection:bg-primary selection:text-white">
            <MartechHero />
            <TrustStrip />
            <MartechSilentFailure />
            <AuditProduct />
            <MartechBuildLab />
            <MartechModules />
            <AiInfrastructure />
            <ProcessTimeline />
            <FreeAuditScan />
            <MartechCaseStudies />
            <MartechWorkshops />
            <MartechInsights />

            {/* Final CTA Strip - Flagship Architecture */}
            <div id="contact" className="bg-bg-dark py-32 relative overflow-hidden border-t border-white/5">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
                        Ready to fix the stack <br /> and ship faster?
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto bg-primary text-white px-8 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-text-dark transition-all shadow-[0_0_40px_rgba(255,107,61,0.4)] hover:shadow-[0_0_60px_rgba(255,107,61,0.6)] hover:-translate-y-1">
                            Request an Audit
                            <ArrowRight size={20} />
                        </button>

                        <a href="#scan" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-bg-dark transition-all flex items-center justify-center gap-2">
                            <ScanLine size={20} />
                            Take the Free Scan
                        </a>

                        <button className="w-full sm:w-auto text-white/60 px-8 py-5 font-bold hover:text-white transition-colors flex items-center justify-center gap-2">
                            See Case Studies
                        </button>
                    </div>

                    <p className="text-white/30 mt-8 text-sm max-w-md mx-auto">
                        Typical timeline: Audits delivered in 1-2 weeks. Builds in 4-6 weeks.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MartechStudioPage;
