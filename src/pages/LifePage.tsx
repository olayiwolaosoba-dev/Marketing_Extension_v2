import React from 'react';
import LifeHero from '../components/life/LifeHero';
import LifeManifesto from '../components/life/LifeManifesto';
import EnvironmentSplit from '../components/life/EnvironmentSplit';
import HowWeWork from '../components/life/HowWeWork';
import RemoteGallery from '../components/life/RemoteGallery';
import DeiSection from '../components/life/DeiSection';
import CultureSignals from '../components/life/CultureSignals';
import WorkPortfolio from '../components/life/WorkPortfolio';
import PeopleQuotes from '../components/life/PeopleQuotes';
import OpenPositions from '../components/life/OpenPositions';
import TalentNetwork from '../components/life/TalentNetwork';

const LifePage: React.FC = () => {
    return (
        <div className="bg-bg-light min-h-screen">
            <LifeHero />
            <LifeManifesto />
            <EnvironmentSplit />
            <HowWeWork />
            <RemoteGallery />
            <DeiSection />
            <CultureSignals />
            <WorkPortfolio />
            <PeopleQuotes />
            <OpenPositions />
            <TalentNetwork />
        </div>
    );
};

export default LifePage;
