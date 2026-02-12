import React from 'react';
import AiHero from '../components/ai/AiHero';
import AiManifesto from '../components/ai/AiManifesto';
import ToolstackMarquee from '../components/ai/ToolstackMarquee';
import NextGenSplit from '../components/ai/NextGenSplit';
import CompetitiveAdvantage from '../components/ai/CompetitiveAdvantage';
import CreativeProduction from '../components/ai/CreativeProduction';
import AiPrinciples from '../components/ai/AiPrinciples';
import UpskillingSection from '../components/ai/UpskillingSection';
import AiNewsletter from '../components/ai/AiNewsletter';
import AiOpenPositions from '../components/ai/AiOpenPositions';

const AiPage: React.FC = () => {
    return (
        <div className="bg-bg-light min-h-screen">
            <AiHero />
            <AiManifesto />
            <ToolstackMarquee />
            <NextGenSplit />
            <CompetitiveAdvantage />
            <CreativeProduction />
            <AiPrinciples />
            <UpskillingSection />
            <AiNewsletter />
            <AiOpenPositions />
        </div>
    );
};

export default AiPage;
