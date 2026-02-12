import React from 'react';

const AiNewsletter: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white/5 border border-white/5 rounded-[40px] p-12 md:p-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">
                        The Marketing Extension Brief
                    </h2>
                    <p className="text-white/60 mb-10 text-lg">AI, strategy, systems—straight to your inbox. No spam. Just signal.</p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Your work email" className="flex-1 px-6 py-4 rounded-full bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:outline-none" />
                        <button className="px-8 py-4 rounded-full bg-primary font-bold text-white hover:bg-primary-dark transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiNewsletter;
