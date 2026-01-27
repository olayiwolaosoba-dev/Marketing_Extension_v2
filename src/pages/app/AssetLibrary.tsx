import React from 'react';
import { useStore } from '../../lib/store';
import { Link } from 'react-router-dom';
import { Image, FileText, Download, Share2, Grid, List } from 'lucide-react';

const AssetLibrary: React.FC = () => {
    const { assets } = useStore();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-text-dark mb-1">Asset Library</h1>
                    <p className="text-text-muted">Central repository for all approved deliverables.</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg text-text-dark"><Grid size={20} /></button>
                    <button className="p-2 text-text-muted hover:text-text-dark"><List size={20} /></button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {assets.length === 0 ? (
                    <div className="col-span-full py-12 text-center text-text-muted border-2 border-dashed border-gray-200 rounded-2xl">
                        No assets in the library yet.
                    </div>
                ) : (
                    assets.map(asset => (
                        <div key={asset.id} className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all">
                            <div className="h-40 bg-gray-100 flex items-center justify-center">
                                {/* Preview Placeholder */}
                                {asset.type === 'image' ? (
                                    <Image size={40} className="text-gray-400" />
                                ) : (
                                    <FileText size={40} className="text-gray-400" />
                                )}
                            </div>

                            <div className="p-4">
                                <h3 className="font-bold text-text-dark text-sm truncate mb-1">{asset.name}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">{asset.type} • V{asset.version}</span>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="text-text-muted hover:text-primary"><Download size={14} /></button>
                                        <button className="text-text-muted hover:text-primary"><Share2 size={14} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AssetLibrary;
