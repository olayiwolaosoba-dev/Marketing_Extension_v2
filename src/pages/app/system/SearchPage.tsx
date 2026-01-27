import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStore } from '../../../lib/store';
import { Link } from 'react-router-dom';
import { FileText, Folder, Zap, ArrowRight } from 'lucide-react';

const SearchPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { projects, requests, assets } = useStore();

    // Naive search implementation
    const matchedProjects = projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
    const matchedRequests = requests.filter(r => r.title.toLowerCase().includes(query.toLowerCase()));
    const matchedAssets = assets.filter(a => a.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-display font-bold text-text-dark mb-6">
                Search Results for "{query}"
            </h1>

            {!query && <div className="text-text-muted">Type something to search...</div>}

            {query && (
                <div className="space-y-8">
                    {/* Projects */}
                    <section>
                        <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                            <Folder size={18} /> Projects ({matchedProjects.length})
                        </h2>
                        {matchedProjects.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {matchedProjects.map(p => (
                                    <Link key={p.id} to={`/app/projects/${p.id}`} className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-primary transition-colors">
                                        <div className="font-bold text-text-dark">{p.title}</div>
                                        <div className="text-xs text-text-muted">{p.type} • {p.status}</div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-text-muted">No projects found.</p>
                        )}
                    </section>

                    {/* Requests */}
                    <section>
                        <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                            <FileText size={18} /> Requests ({matchedRequests.length})
                        </h2>
                        {matchedRequests.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {matchedRequests.map(r => (
                                    <Link key={r.id} to={`/app/requests/${r.id}`} className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-primary transition-colors">
                                        <div className="font-bold text-text-dark">{r.title}</div>
                                        <div className="text-xs text-text-muted">{r.type} • {r.status}</div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-text-muted">No requests found.</p>
                        )}
                    </section>

                    {/* Assets */}
                    <section>
                        <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                            <Zap size={18} /> Assets ({matchedAssets.length})
                        </h2>
                        {matchedAssets.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {matchedAssets.map(a => (
                                    <Link key={a.id} to={`/app/assets/${a.id}`} className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-primary transition-colors">
                                        <div className="font-bold text-text-dark">{a.name}</div>
                                        <div className="text-xs text-text-muted">{a.type} • v{a.version}</div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-text-muted">No assets found.</p>
                        )}
                    </section>
                </div>
            )}
        </div>
    );
};

export default SearchPage;
