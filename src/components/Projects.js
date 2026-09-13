import { useState } from 'react';
import { projectsData, projectCategories } from '../data/projects';
import { ArrowUpRightIcon, FolderIcon, LockClosedIcon, PlusCircleIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

export default function Projects() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredProjects = activeTab === 'All' 
        ? projectsData 
        : projectsData.filter(p => p.category === activeTab);

    return (
        <section id="projects" className="relative py-28 px-6 bg-[#0c0e17] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                {/* Header & Category Tabs */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4">
                            <FolderIcon className="w-4 h-4" />
                            Selected Work
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Projects & <span className="text-gradient-cyan">Featured Work</span>.
                        </h2>
                    </div>

                    {/* Filter Category Buttons */}
                    <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
                        {projectCategories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(cat)}
                                className={`px-4 py-2 text-xs font-mono rounded-xl transition duration-200 cursor-pointer ${
                                    activeTab === cat 
                                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20' 
                                        : 'text-accent-muted hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className="group glass-panel rounded-3xl overflow-hidden glass-panel-hover flex flex-col justify-between border border-white/10"
                        >
                            {/* Image Header */}
                            <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#11131e] via-transparent to-transparent"></div>
                                
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Body Content */}
                            <div className="p-8 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition">
                                        {project.title}
                                    </h3>
                                    <p className="text-accent-muted text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 text-xs font-mono rounded-md bg-white/5 text-slate-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Link Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    {!project.isPrivate ? (
                                        <>
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="btn-outline flex-1 justify-between group/link text-xs py-2.5"
                                            >
                                                <span>{project.mobileLink ? 'IoT / Backend Repo' : 'View Repository'}</span>
                                                <ArrowUpRightIcon className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition" />
                                            </a>
                                            {project.mobileLink && (
                                                <a 
                                                    href={project.mobileLink} 
                                                    target="_blank" 
                                                    rel="noreferrer" 
                                                    className="btn-secondary flex-1 justify-between group/link text-xs py-2.5 bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20"
                                                >
                                                    <span className="flex items-center gap-1.5">
                                                        <DevicePhoneMobileIcon className="w-4 h-4 text-emerald-400" />
                                                        Mobile App Repo
                                                    </span>
                                                    <ArrowUpRightIcon className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition" />
                                                </a>
                                            )}
                                        </>
                                    ) : (
                                        <span className="inline-flex items-center justify-between w-full px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-accent-muted text-sm font-medium cursor-not-allowed">
                                            <span className="flex items-center gap-2">
                                                <LockClosedIcon className="w-4 h-4 text-amber-400" />
                                                Enterprise / Private Repository
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Placeholder Card for User's Future Projects */}
                    <div className="glass-panel rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-dashed border-white/15 bg-white/[0.01] hover:bg-white/[0.03] transition duration-300 min-h-[380px]">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 shadow-lg shadow-emerald-500/10">
                            <PlusCircleIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">More Projects Coming Soon</h3>
                        <p className="text-accent-muted text-sm max-w-sm leading-relaxed mb-6">
                            Ready to showcase more work? Simply update the <code className="text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded font-mono text-xs">src/data/projects.js</code> file anytime!
                        </p>
                        <span className="px-4 py-1.5 text-xs font-mono rounded-full bg-white/5 text-slate-400 border border-white/10">
                            Extensible Project System Ready
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}