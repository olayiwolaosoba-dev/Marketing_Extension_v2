import React from 'react';
import { Play } from 'lucide-react';

const CultureGallery: React.FC = () => {
    return (
        <section className="bg-bg-light py-24 md:py-32" id="culture">
            <div className="container mx-auto px-6 max-w-[1400px]">
                {/* Masonry-ish Layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">

                    {/* Feature Video */}
                    <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 bg-black">
                            {/* Video Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-gray-900 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center pl-2 group-hover:scale-110 transition-transform">
                                    <Play fill="white" className="text-white" size={32} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="font-bold text-2xl">A week at Marketing Extension</h3>
                        </div>
                    </div>

                    {/* Image Tiles */}
                    {[
                        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
                        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=800",
                        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                    ].map((url, i) => (
                        <div key={i} className="rounded-3xl overflow-hidden relative group">
                            <img src={url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    ))}

                    {/* Testimonial Tile */}
                    <div className="col-span-1 bg-white p-8 rounded-3xl flex flex-col justify-between">
                        <p className="font-medium text-lg text-bg-dark leading-snug">"The level of strategic clarity here is unmatched. You actually get to do the work you were hired to do."</p>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-8 h-8 rounded-full bg-gray-200" />
                            <span className="text-xs font-bold uppercase tracking-wider text-text-muted">Senior Strategist</span>
                        </div>
                    </div>

                    <div className="col-span-2 row-span-1 relative rounded-3xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CultureGallery;
