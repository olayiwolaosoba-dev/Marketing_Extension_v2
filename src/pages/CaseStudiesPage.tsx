import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import CaseStudyHero from '../components/case-studies/CaseStudyHero';
import TrustStrip from '../components/common/TrustStrip';
import IndustryFocus from '../components/case-studies/IndustryFocus';
import CaseStudyGrid from '../components/case-studies/CaseStudyGrid';
import MarketingOSExplainer from '../components/marketing-os/MarketingOSExplainer';
import VideoGallery from '../components/media/VideoGallery';
import ResourceCenter from '../components/Resources/ResourceCenter';
import AuditCTA from '../components/cta/AuditCTA';
import EngagementModels from '../components/engagement/EngagementModels';
import Testimonials from '../components/common/Testimonials';
import FAQ from '../components/common/FAQ';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-bg-light min-h-screen">
            <SEO
                title="Growth Marketing Case Studies — Real Results | Marketing Extension"
                description="See how Marketing Extension drove $100M+ in pipeline influence across fintech, regtech, B2B SaaS, and payments infrastructure. Real case studies, real outcomes."
                canonical="https://themarketingextension.com/case-studies"
                structuredData={[{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://themarketingextension.com" },
                        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://themarketingextension.com/case-studies" }
                    ]
                }]}
            />
            <CaseStudyHero />
            <TrustStrip />
            <IndustryFocus />
            <CaseStudyGrid />
            <MarketingOSExplainer />
            <VideoGallery />
            <ResourceCenter />
            <AuditCTA />
            <EngagementModels />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    );
};

export default CaseStudiesPage;
