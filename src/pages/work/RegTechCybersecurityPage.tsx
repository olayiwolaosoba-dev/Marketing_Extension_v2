import React, { useEffect } from 'react';
import RegTechHero from '../../components/work/regtech/RegTechHero';
import RegTechPOV from '../../components/work/regtech/RegTechPOV';
import RegTechChallenges from '../../components/work/regtech/RegTechChallenges';
import RegTechSolutions from '../../components/work/regtech/RegTechSolutions';
import RegTechProof from '../../components/work/regtech/RegTechProof';
import RegTechDeliverables from '../../components/work/regtech/RegTechDeliverables';
import RegTechMarketingOS from '../../components/work/regtech/RegTechMarketingOS';
import RegTechFAQ from '../../components/work/regtech/RegTechFAQ';
import AuditCTA from '../../components/cta/AuditCTA';

const RegTechCybersecurityPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <RegTechHero />
            <RegTechPOV />
            <RegTechChallenges />
            <RegTechSolutions />
            <RegTechProof />
            <RegTechDeliverables />
            <RegTechMarketingOS />
            <RegTechFAQ />

            {/* Final CTA Section */}
            <section className="py-24 bg-bg-light">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-8">Build authority that scales.</h2>
                    <AuditCTA />
                </div>
            </section>

        </div>
    );
};

export default RegTechCybersecurityPage;
