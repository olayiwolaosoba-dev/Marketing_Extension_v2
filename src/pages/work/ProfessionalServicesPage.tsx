import React, { useEffect } from 'react';
import ProfessionalHero from '../../components/work/professional/ProfessionalHero';
import ProfessionalPOV from '../../components/work/professional/ProfessionalPOV';
import ProfessionalChallenges from '../../components/work/professional/ProfessionalChallenges';
import ProfessionalSolutions from '../../components/work/professional/ProfessionalSolutions';
import ProfessionalProof from '../../components/work/professional/ProfessionalProof';
import ProfessionalDeliverables from '../../components/work/professional/ProfessionalDeliverables';
import ProfessionalMarketingOS from '../../components/work/professional/ProfessionalMarketingOS';
import ProfessionalFAQ from '../../components/work/professional/ProfessionalFAQ';
import AuditCTA from '../../components/cta/AuditCTA';

const ProfessionalServicesPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <ProfessionalHero />
            <ProfessionalPOV />
            <ProfessionalChallenges />
            <ProfessionalSolutions />
            <ProfessionalProof />
            <ProfessionalDeliverables />
            <ProfessionalMarketingOS />
            <ProfessionalFAQ />

            {/* Final CTA Section */}
            <section className="py-24 bg-bg-light">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-8">Productize your expertise.</h2>
                    <AuditCTA />
                </div>
            </section>

        </div>
    );
};

export default ProfessionalServicesPage;
