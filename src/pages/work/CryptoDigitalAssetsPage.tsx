import React, { useEffect } from 'react';
import CryptoHero from '../../components/work/crypto/CryptoHero';
import CryptoPOV from '../../components/work/crypto/CryptoPOV';
import CryptoChallenges from '../../components/work/crypto/CryptoChallenges';
import CryptoSolutions from '../../components/work/crypto/CryptoSolutions';
import CryptoProof from '../../components/work/crypto/CryptoProof';
import CryptoDeliverables from '../../components/work/crypto/CryptoDeliverables';
import CryptoMarketingOS from '../../components/work/crypto/CryptoMarketingOS';
import CryptoFAQ from '../../components/work/crypto/CryptoFAQ';
import AuditCTA from '../../components/cta/AuditCTA';

const CryptoDigitalAssetsPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <CryptoHero />
            <CryptoPOV />
            <CryptoChallenges />
            <CryptoSolutions />
            <CryptoProof />
            <CryptoDeliverables />
            <CryptoMarketingOS />
            <CryptoFAQ />

            {/* Final CTA Section */}
            <section className="py-24 bg-bg-light">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-8">Build trust that converts.</h2>
                    <AuditCTA />
                </div>
            </section>

        </div>
    );
};

export default CryptoDigitalAssetsPage;
