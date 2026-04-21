import React from 'react';
import SEO from '../components/SEO';
import CareersHero from '../components/careers/CareersHero';
import CareersManifesto from '../components/careers/CareersManifesto';
import ProofCards from '../components/careers/ProofCards';
import CareerGrowth from '../components/careers/CareerGrowth';
import InnovationChapter from '../components/careers/InnovationChapter';
import FlexibilityChapter from '../components/careers/FlexibilityChapter';
import PurposeTiles from '../components/careers/PurposeTiles';
import CareersValues from '../components/careers/CareersValues';
import CultureGallery from '../components/careers/CultureGallery';
import OpenRoles from '../components/careers/OpenRoles';

const CareersPage: React.FC = () => {
    return (
        <div className="bg-bg-light min-h-screen">
            <SEO
                title="Careers — Join the Embedded Growth Team | Marketing Extension"
                description="Work with a distributed team of growth operators across 7 countries. We're hiring marketers, strategists, and content creators who want to own outcomes, not just tasks."
                canonical="https://themarketingextension.com/careers"
                structuredData={[{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://themarketingextension.com" },
                        { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://themarketingextension.com/careers" }
                    ]
                }]}
            />
            <CareersHero />
            <CareersManifesto />
            <ProofCards />
            <CareerGrowth />
            <InnovationChapter />
            <FlexibilityChapter />
            <PurposeTiles />
            <CareersValues />
            <CultureGallery />
            <OpenRoles />
        </div>
    );
};

export default CareersPage;
