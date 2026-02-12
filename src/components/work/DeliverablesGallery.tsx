import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Maximize2 } from 'lucide-react';

interface Deliverable {
    title: string;
    type: string;
    image: string;
    desc: string;
    colSpan?: number; // 1 or 2
    rowSpan?: number; // 1 or 2
}

interface GalleryProps {
    items: Deliverable[];
}

const DeliverablesGallery: React.FC<GalleryProps> = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState<Deliverable | null>(null);

    return (
        <div id="gallery" className="py-12">
            <h3 className="text-xl font-display font-bold mb-8">Deliverables & Artifacts</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-gray-100 ${item.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'
                            } ${item.rowSpan === 2 ? 'md:row-span-2' : ''
                            }`}
                        onClick={() => setSelectedItem(item)}
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{item.type}</span>
                            <h4 className="text-white font-bold text-lg flex items-center gap-2">
                                {item.title} <Maximize2 size={16} />
                            </h4>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
                        onClick={() => setSelectedItem(null)}
                    >
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-5xl w-full bg-bg-dark rounded-3xl overflow-hidden grid lg:grid-cols-[1fr_350px]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-black aspect-video lg:aspect-auto relative flex items-center justify-center">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="max-w-full max-h-[80vh] object-contain"
                                />
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col justify-center border-l border-white/10">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4">{selectedItem.type}</span>
                                <h3 className="text-3xl font-display font-medium text-white mb-6">{selectedItem.title}</h3>
                                <p className="text-white/70 leading-relaxed mb-8">{selectedItem.desc}</p>
                                <div className="mt-auto pt-8 border-t border-white/10">
                                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Role</div>
                                    <div className="text-white">Strategy, Design, Production</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DeliverablesGallery;
