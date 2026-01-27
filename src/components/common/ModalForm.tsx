
import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalFormProps {
    isOpen: boolean;
    onClose: () => void;
    context?: string;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose, context = "General" }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 m-auto w-full max-w-lg h-fit bg-bg-dark border border-white/10 rounded-2xl shadow-2xl z-[101] overflow-hidden"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-white/5">
                            <h3 className="text-xl font-bold text-white">Book a Call</h3>
                            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="space-y-1">
                                <label className="text-sm text-white/60">Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm text-white/60">Work Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="jane@company.com" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm text-white/60">What are you trying to improve?</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors">
                                    <option>Talent / Hiring</option>
                                    <option>AI Adoption</option>
                                    <option>MarTech Stack</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <button className="w-full bg-primary hover:bg-white hover:text-bg-dark text-white font-bold py-4 rounded-full transition-all flex items-center justify-center gap-2 mt-4 group">
                                Book a call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-center text-xs text-white/30">
                                We'll respect your inbox. No spam.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ModalForm;
