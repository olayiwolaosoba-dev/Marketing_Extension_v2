import React, { useEffect, useState } from 'react';
import ConsultingHero from '../components/consulting/ConsultingHero';
import ProblemSection from '../components/consulting/ProblemSection';
import ModuleGrid from '../components/consulting/ModuleGrid';
import OperatingSystemSteps from '../components/consulting/OperatingSystemSteps';
import GrowthPlaybooks from '../components/consulting/GrowthPlaybooks';
import CaseStudyDrawer from '../components/consulting/CaseStudyDrawer';
import ProofBanner from '../components/consulting/ProofBanner';
import TrustStrip from '../components/common/TrustStrip';
import FAQ from '../components/common/FAQ';
import AuditCTA from '../components/cta/AuditCTA';
import ConsultingWork from '../components/consulting/ConsultingWork';
import ConsultingTestimonials from '../components/consulting/ConsultingTestimonials';


const MarketingConsultingPage: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-bg-light min-h-screen">
            <ConsultingHero />
            <TrustStrip />
            <ProblemSection />
            <OperatingSystemSteps />
            <ModuleGrid />
            <ConsultingWork />
            <ProofBanner onOpen={() => setIsDrawerOpen(true)} />
            <GrowthPlaybooks />
            <ConsultingTestimonials />
            <AuditCTA />
            <FAQ />


            <CaseStudyDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </div>
    );
};

export default MarketingConsultingPage;
