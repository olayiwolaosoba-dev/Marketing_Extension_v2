
import React from 'react';
import {
    Edit2,
    Link as LinkIcon,
    MapPin,
    Briefcase,
    Plus,
    Building,
    GraduationCap,
    School,
    ExternalLink
} from 'lucide-react';

const StudentProfile: React.FC = () => {
    return (
        <div className="animate-in fade-in duration-500 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">

                {/* Left Sidebar - Personal Details */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-text-dark">Personal details</h3>
                            <button className="text-primary hover:text-primary-dark"><Edit2 size={16} /></button>
                        </div>

                        <div className="relative w-32 h-32 mx-auto mb-4">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
                                    className="w-full h-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl font-display font-bold text-text-dark mb-1">
                            Olayiwola Osoba
                        </h2>
                        <p className="text-text-muted font-medium mb-6">(Hugh Gidi)</p>

                        <button className="w-full border border-gray-200 rounded-xl py-2.5 font-bold text-primary flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors mb-4">
                            <LinkIcon size={16} /> Share profile link
                        </button>

                        <button className="text-sm font-bold text-primary hover:underline">
                            Update profile visibility
                        </button>
                    </div>

                    {/* Work Preferences */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-text-dark">Work preferences</h3>
                            <button className="text-primary hover:text-primary-dark"><Edit2 size={16} /></button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Desired Roles</p>
                                <div className="flex items-center gap-2 text-text-dark font-medium">
                                    <Briefcase size={16} className="text-text-muted" /> Chief Marketing Officer
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-text-dark">Additional info</h3>
                        </div>
                        <p className="text-sm text-text-muted mb-4">
                            Help recruiters get to know you better by describing what makes you a great candidate and sharing other links.
                        </p>
                        <button className="w-full border border-gray-200 rounded-xl py-2.5 font-bold text-primary flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                            <Plus size={16} /> Add additional info
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-8">

                    {/* Experience Header */}
                    <h2 className="text-2xl font-display font-bold text-text-dark">Experience</h2>

                    {/* Projects */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-lg text-text-dark">Projects</h3>
                            </div>
                            <button className="text-sm font-bold text-primary hover:underline">Browse Projects</button>
                        </div>
                        <div className="p-8 text-center bg-gray-50/30">
                            <p className="font-bold text-text-dark mb-1">Showcase your skills to recruiters with job-relevant projects</p>
                            <p className="text-sm text-text-muted">Add projects here to demonstrate your technical expertise and ability to solve real-world problems.</p>
                        </div>
                    </div>

                    {/* Work History */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <h3 className="font-bold text-lg text-text-dark">Work history</h3>
                        </div>
                        <div className="p-8 bg-gray-50/30">
                            <p className="text-sm text-text-muted mb-6">
                                Add your past work experience here. If you're just starting out, you can add internships or volunteer experience instead.
                            </p>
                            <button className="border border-gray-200 bg-white rounded-xl py-2.5 px-6 font-bold text-primary flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                                <Plus size={16} /> Add work experience
                            </button>
                        </div>
                    </div>

                    {/* Education Header */}
                    <h2 className="text-2xl font-display font-bold text-text-dark pt-4">Education</h2>

                    {/* Credentials */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <h3 className="font-bold text-lg text-text-dark">Credentials</h3>
                            <button className="border border-gray-200 rounded-lg py-1.5 px-4 font-bold text-sm text-primary flex items-center gap-1 hover:bg-gray-50 transition-colors">
                                <Plus size={14} /> Add
                            </button>
                        </div>
                        <div className="p-6 bg-blue-50/30 border-b border-gray-100">
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-sm text-text-dark">
                                    Get job-ready with role-based training from industry-leading companies like Google, Meta, and IBM.
                                </p>
                                <button className="text-sm font-bold text-primary whitespace-nowrap hover:underline">Browse Professional Certificates</button>
                            </div>
                        </div>

                        {/* Education Item */}
                        <div className="p-6 flex items-start gap-4 group hover:bg-gray-50 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                                <GraduationCap size={24} className="text-text-dark" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-text-dark text-lg">Quantic School of Business and Technology</h4>
                                        <p className="text-text-muted">Master's degree</p>
                                    </div>
                                    <button className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"><Edit2 size={16} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Courses */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <h3 className="font-bold text-lg text-text-dark">Courses</h3>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {/* Course 1 */}
                            <div className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="w-6 h-6" alt="Google" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-text-muted mb-1">Google • Course</p>
                                    <h4 className="font-bold text-text-dark text-lg mb-2">Foundations of Business Intelligence</h4>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {['Data Analysis', 'Strategy', 'Business Intelligence'].map(tag => (
                                            <span key={tag} className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-text-muted">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm">
                                        <button className="text-primary font-bold hover:underline">View certificate</button>
                                        <span className="text-text-muted">Completed January 2026</span>
                                    </div>
                                </div>
                            </div>

                            {/* Course 2 */}
                            <div className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="w-6 h-6" alt="Google" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-text-muted mb-1">Google • Course</p>
                                    <h4 className="font-bold text-text-dark text-lg mb-2">Introduction to AI</h4>
                                    <div className="flex items-center gap-4 text-sm">
                                        <button className="text-primary font-bold hover:underline">View certificate</button>
                                        <span className="text-text-muted">Completed January 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
