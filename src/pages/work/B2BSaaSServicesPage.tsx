import React, { useEffect } from 'react';
import SaaSHero from '../../components/work/saas/SaaSHero';
import SaaSPOV from '../../components/work/saas/SaaSPOV';
import SaaSChallenges from '../../components/work/saas/SaaSChallenges';
import SaaSSolutions from '../../components/work/saas/SaaSSolutions';
import SaaSProof from '../../components/work/saas/SaaSProof';
import SaaSDeliverables from '../../components/work/saas/SaaSDeliverables';
import SaaSMarketingOS from '../../components/work/saas/SaaSMarketingOS';
import SaaSFAQ from '../../components/work/saas/SaaSFAQ';
import AuditCTA from '../../components/cta/AuditCTA';

const B2BSaaSServicesPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <SaaSHero />
            <SaaSPOV />
            <SaaSChallenges />
            <SaaSSolutions />
            <SaaSProof />
            <SaaSDeliverables />
            <SaaSMarketingOS />
            <SaaSFAQ />

            {/* Final CTA Section */}
            <section className="py-24 bg-bg-light">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-8">Build an engine that scales.</h2>
                    <AuditCTA />
                </div>
            </section>

        </div>
    );
};

export default B2BSaaSServicesPage;
