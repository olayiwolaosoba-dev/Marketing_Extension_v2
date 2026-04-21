import React from 'react';

const CookiePage: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="pt-32 pb-24 bg-bg-light min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Legal</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-4">Cookie Policy</h1>
                    <p className="text-text-muted">Last updated: February 20, {currentYear}</p>
                </div>

                <div className="space-y-8 text-text-dark">
                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">What Are Cookies?</h2>
                        <p className="text-text-muted leading-relaxed">
                            Cookies are small text files stored on your device when you visit a website. They allow websites to remember your preferences and help us understand how you use our site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">Types of Cookies We Use</h2>

                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl border border-gray-200 bg-bg-gray">
                                <h3 className="font-semibold text-text-dark mb-2">Essential Cookies</h3>
                                <p className="text-text-muted text-sm leading-relaxed">Required for the website to function. They cannot be disabled. Examples: session management, security tokens, PWA functionality.</p>
                            </div>

                            <div className="p-6 rounded-2xl border border-gray-200 bg-bg-gray">
                                <h3 className="font-semibold text-text-dark mb-2">Analytics Cookies</h3>
                                <p className="text-text-muted text-sm leading-relaxed">Help us understand how visitors interact with our website (e.g. Google Analytics 4). Data is aggregated and anonymised. You can opt out via your browser settings or Google's opt-out tool.</p>
                            </div>

                            <div className="p-6 rounded-2xl border border-gray-200 bg-bg-gray">
                                <h3 className="font-semibold text-text-dark mb-2">Functional Cookies</h3>
                                <p className="text-text-muted text-sm leading-relaxed">Remember your preferences, such as audit tool progress saved in localStorage, and your ME-OS Portal session state.</p>
                            </div>

                            <div className="p-6 rounded-2xl border border-gray-200 bg-bg-gray">
                                <h3 className="font-semibold text-text-dark mb-2">Marketing Cookies</h3>
                                <p className="text-text-muted text-sm leading-relaxed">Used to show you relevant content. Currently, we use minimal marketing cookies. This will be updated as our tracking infrastructure evolves.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">Managing Cookies</h2>
                        <p className="text-text-muted leading-relaxed mb-4">
                            You can control cookies through your browser settings. Most browsers allow you to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-text-muted">
                            <li>View cookies stored on your device</li>
                            <li>Delete all or specific cookies</li>
                            <li>Block cookies from specific sites</li>
                            <li>Block third-party cookies</li>
                        </ul>
                        <p className="text-text-muted mt-4 leading-relaxed">
                            Note: disabling essential cookies may prevent parts of the website from functioning correctly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">Contact</h2>
                        <p className="text-text-muted leading-relaxed">
                            For cookie-related questions, email <a href="mailto:privacy@themarketingextension.com" className="text-primary hover:underline">privacy@themarketingextension.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePage;
