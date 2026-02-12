import React from 'react';
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
