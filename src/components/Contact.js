import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, CheckIcon, DocumentDuplicateIcon, ArrowUpIcon, ChatBubbleBottomCenterTextIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const config = {
        email: 'vishwhakarthi@gmail.com',
        phone: '+91 9043464752',
        location: 'Madurai, India',
        social: {
            linkedin: 'https://www.linkedin.com/in/vishwha-karthickeyan',
            github: 'https://github.com/vishwha-karthickeyan'
        }
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(config.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="contact" className="relative pt-28 pb-12 px-6 bg-[#090a0f] border-t border-white/5 overflow-hidden">
            {/* Ambient Lighting */}
            <div className="ambient-glow-emerald bottom-0 left-1/2 -translate-x-1/2 opacity-60"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-emerald-400 tracking-widest uppercase mb-6">
                    <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
                    Get in Touch
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                    Let's build something <br className="hidden sm:block"/>
                    <span className="text-gradient-emerald">extraordinary together</span>.
                </h2>

                <p className="text-accent-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                    Open for IoT engineering roles, full-stack development, AI/ML integrations, and technical consulting.
                </p>

                {/* Main Contact Card */}
                <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 max-w-2xl mx-auto mb-16 shadow-2xl relative">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        {/* Copy Email Button */}
                        <button
                            onClick={handleCopyEmail}
                            className="btn-primary w-full sm:w-auto text-sm px-6 py-3.5"
                        >
                            {copied ? (
                                <>
                                    <CheckIcon className="w-5 h-5 text-slate-950" />
                                    <span>Email Copied to Clipboard!</span>
                                </>
                            ) : (
                                <>
                                    <DocumentDuplicateIcon className="w-5 h-5" />
                                    <span>Copy Email Address</span>
                                </>
                            )}
                        </button>

                        <a 
                            href={`mailto:${config.email}`}
                            className="btn-secondary w-full sm:w-auto text-sm px-6 py-3.5"
                        >
                            <EnvelopeIcon className="w-5 h-5 text-emerald-400" />
                            <span>Open Mail App</span>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/10 text-accent-muted text-sm font-mono">
                        <span className="flex items-center gap-1.5 text-slate-300">
                            <MapPinIcon className="w-4 h-4 text-emerald-400" />
                            {config.location}
                        </span>

                        <span className="hidden sm:inline text-white/20">•</span>

                        <a 
                            href={`tel:${config.phone.replace(/\s+/g, '')}`}
                            className="flex items-center gap-2 hover:text-emerald-400 transition"
                        >
                            <PhoneIcon className="w-4 h-4 text-cyan-400" />
                            <span>{config.phone}</span>
                        </a>

                        <span className="hidden sm:inline text-white/20">•</span>

                        <a 
                            href={config.social.linkedin} 
                            target="_blank" 
                            rel="noreferrer"
                            className="hover:text-white transition"
                        >
                            LinkedIn
                        </a>

                        <span className="hidden sm:inline text-white/20">•</span>

                        <a 
                            href={config.social.github} 
                            target="_blank" 
                            rel="noreferrer"
                            className="hover:text-white transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-accent-muted gap-4">
                    <p className="font-mono">
                        © {new Date().getFullYear()} M Vishwha Karthickeyan • IoT + Full Stack Developer.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-400 transition text-xs font-mono"
                    >
                        <span>Back to top</span>
                        <ArrowUpIcon className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </section>
    );
}