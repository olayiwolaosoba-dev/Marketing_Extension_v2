import React, { useEffect } from 'react';
import CaseStudyHero from '../components/case-studies/CaseStudyHero';
import TrustStrip from '../components/common/TrustStrip';
import IndustryFocus from '../components/case-studies/IndustryFocus';
import CaseStudyGrid from '../components/case-studies/CaseStudyGrid';
import MarketingOSExplainer from '../components/marketing-os/MarketingOSExplainer';
import VideoGallery from '../components/media/VideoGallery';
import ResourceCenter from '../components/resources/ResourceCenter';
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
