import { ArrowRightIcon, CpuChipIcon, SparklesIcon, SignalIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    const config = {
        social: {
            linkedin: 'https://www.linkedin.com/in/vishwha-karthickeyan',
            github: 'https://github.com/vishwha-karthickeyan'
        },
        skills: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'Python', 'FastAPI', 'MQTT', 'WebSocket', 'BLE', 'Raspberry Pi', 'ESP8266', 'Gemini AI', 'FAISS', 'MySQL']
    };

    return (
        <section id="hero" className="relative pt-36 pb-20 px-6 min-h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="ambient-glow-emerald top-10 -left-20 animate-pulse-slow"></div>
            <div className="ambient-glow-violet bottom-10 -right-20"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
                {/* Status Badges */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-inner">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-mono text-emerald-300 font-medium tracking-wider uppercase">AVAILABLE FOR WORK</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
                        <SignalIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-xs font-mono text-cyan-300 tracking-wider">IOT + FULL STACK DEVELOPER</span>
                    </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                    Connecting <span className="text-gradient-emerald">IoT Hardware</span>, <br className="hidden sm:block"/>
                    Web Apps & <span className="text-gradient-cyan">AI Intelligence</span>.
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-accent-muted font-normal max-w-3xl leading-relaxed mb-10">
                    Hi, I'm <span className="text-white font-semibold">M Vishwha Karthickeyan</span>. An <span className="text-emerald-400 font-semibold">IoT + Full Stack Developer with 2+ years of experience</span> crafting real-time hardware systems (MQTT, BLE), scalable web/mobile apps (React, Next.js, React Native), and production AI integrations.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
                    <a href="#projects" className="btn-primary w-full sm:w-auto">
                        View Featured Projects <ArrowRightIcon className="w-4 h-4" />
                    </a>
                    <a href={config.social.linkedin} target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto">
                        LinkedIn Profile
                    </a>
                    <a href={config.social.github} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto">
                        GitHub Profile
                    </a>
                </div>

                {/* Metrics Highlight Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mb-16">
                    <div className="glass-panel p-5 rounded-2xl text-left border border-white/10">
                        <div className="flex items-center gap-3 mb-2">
                            <CpuChipIcon className="w-5 h-5 text-emerald-400" />
                            <span className="text-2xl font-bold text-white font-mono">2+ Years</span>
                        </div>
                        <p className="text-xs font-mono text-accent-muted uppercase tracking-wider">IoT & Full Stack Development</p>
                    </div>

                    <div className="glass-panel p-5 rounded-2xl text-left border border-white/10">
                        <div className="flex items-center gap-3 mb-2">
                            <SignalIcon className="w-5 h-5 text-cyan-400" />
                            <span className="text-2xl font-bold text-white font-mono">Real-Time</span>
                        </div>
                        <p className="text-xs font-mono text-accent-muted uppercase tracking-wider">MQTT, EMQX, WebSockets & BLE</p>
                    </div>

                    <div className="glass-panel p-5 rounded-2xl text-left border border-white/10">
                        <div className="flex items-center gap-3 mb-2">
                            <SparklesIcon className="w-5 h-5 text-violet-400" />
                            <span className="text-2xl font-bold text-white font-mono">GenAI / RAG</span>
                        </div>
                        <p className="text-xs font-mono text-accent-muted uppercase tracking-wider">Gemini AI, FAISS & Vector Search</p>
                    </div>
                </div>

                {/* Skill Badges Bar */}
                <div className="w-full max-w-4xl">
                    <p className="text-xs font-mono text-accent-muted uppercase tracking-widest mb-4">Core Technical Stack</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {config.skills.map((skill, index) => (
                            <span key={index} className="px-3.5 py-1.5 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 transition duration-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}