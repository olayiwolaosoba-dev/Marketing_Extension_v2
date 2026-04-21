import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
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
            <SEO
                title="Growth Marketing Consulting — Strategy & GTM Execution | Marketing Extension"
                description="Embedded marketing consulting for fintech and B2B SaaS. ICP research, positioning, messaging, channel strategy, GTM planning, and weekly decision support."
                canonical="https://themarketingextension.com/services/marketing-consulting"
                structuredData={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Growth Marketing Consulting",
                        "provider": { "@type": "Organization", "name": "Marketing Extension" },
                        "description": "Strategy, ICP research, positioning, messaging, channel strategy, GTM planning, and weekly decision support.",
                        "areaServed": "Africa, United Kingdom",
                        "serviceType": "Marketing Consulting"
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://themarketingextension.com" },
                            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://themarketingextension.com/services/marketing-consulting" },
                            { "@type": "ListItem", "position": 3, "name": "Marketing Consulting", "item": "https://themarketingextension.com/services/marketing-consulting" }
                        ]
                    }
                ]}
            />
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
