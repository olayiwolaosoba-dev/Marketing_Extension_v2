import React from 'react';

const TalentNetwork: React.FC = () => {
    return (
        <section className="bg-bg-light py-24 md:py-32" id="talent-network">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white rounded-[40px] p-10 md:p-16 text-center shadow-xl shadow-gray-200/50">
                    <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                        Stay Connected
                    </p>
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-bg-dark mb-6">
                        Join the Marketing Extension <br /> Talent Network
                    </h2>
                    <p className="text-lg text-text-muted mb-10 max-w-lg mx-auto">
                        Get roles first. Get invited to studio sessions. Get access to playbooks. No spam, just signal.
                    </p>

                    <form className="max-w-md mx-auto space-y-4">
                        <input type="email" placeholder="Your email address" className="w-full px-6 py-4 rounded-xl bg-bg-gray border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors" />
                        <div className="grid grid-cols-2 gap-4">
                            <select className="px-6 py-4 rounded-xl bg-bg-gray border-transparent focus:bg-white focus:border-primary focus:ring-0">
                                <option>Discipline</option>
                                <option>Strategy</option>
                                <option>Design</option>
                                <option>Growth</option>
                            </select>
                            <select className="px-6 py-4 rounded-xl bg-bg-gray border-transparent focus:bg-white focus:border-primary focus:ring-0">
                                <option>Region</option>
                                <option>Africa</option>
                                <option>Europe</option>
                                <option>Americas</option>
                            </select>
                        </div>
                        <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-colors">
                            Join Network
                        </button>
                        <p className="text-xs text-gray-400 mt-4">
                            By joining, you agree to our privacy policy. We respect your inbox.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default TalentNetwork;
