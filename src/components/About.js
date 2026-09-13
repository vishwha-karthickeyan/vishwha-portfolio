import { AcademicCapIcon, BriefcaseIcon, CommandLineIcon, CpuChipIcon, ShieldCheckIcon, SignalIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function About() {
    const config = {
        summary: 'IoT + Full Stack Developer with 2+ years of experience building high-performance web and mobile applications using React.js, Next.js, React Native, FastAPI, and MySQL. Specialized in real-time systems (MQTT, WebSocket, BLE) and production-grade AI integrations from embedded devices to scalable cloud architectures.',
        education: {
            degree: 'B.E. Electrical and Electronics Engineering',
            college: 'K.L.N College of Engineering',
            period: '2020 – 2024',
            cgpa: 'CGPA: 8.26'
        },
        experience: {
            role: 'IoT + Full Stack Developer',
            company: 'Intelixent IT Solutions',
            period: '09/2024 — PRESENT',
            location: 'Madurai, India',
            points: [
                'Engineered a React Native mobile application featuring WebSocket integrations, driving real-time data synchronization and UI responsiveness.',
                'Architected a robust MQTT and WebSocket infrastructure using EMQX to facilitate low-latency communication between Raspberry Pi edge devices and VPS backend.',
                'Integrated Bluetooth Low Energy (BLE) using react-native-ble-plx for seamless, secure hardware-to-mobile device pairing.',
                'Developed high-throughput REST APIs using FastAPI and Node.js to optimize backend data serialization and database read/write speeds.'
            ]
        }
    };

    const techCategories = [
        {
            title: 'IoT & Protocols',
            icon: SignalIcon,
            color: 'text-cyan-400',
            skills: ['MQTT', 'WebSocket', 'EMQX', 'Bluetooth (BLE)', 'Raspberry Pi', 'ESP8266', 'C / C++']
        },
        {
            title: 'Frontend & Mobile',
            icon: CommandLineIcon,
            color: 'text-emerald-400',
            skills: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS']
        },
        {
            title: 'Backend & Cloud',
            icon: CpuChipIcon,
            color: 'text-violet-400',
            skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB']
        },
        {
            title: 'AI & Data Tools',
            icon: WrenchScrewdriverIcon,
            color: 'text-amber-400',
            skills: ['Google Gemini API', 'FAISS', 'Vector Search', 'Scikit-Learn', 'Directus', 'Linux (RHCSA)']
        }
    ];

    return (
        <section id="about" className="relative py-28 px-6 bg-[#090a0f] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-emerald-400 tracking-widest uppercase mb-4">
                        <BriefcaseIcon className="w-4 h-4" />
                        About & Technical Background
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Bridging embedded <span className="text-gradient-emerald">IoT hardware</span> with <br className="hidden sm:block"/>
                        <span className="text-gradient-cyan">cloud & AI intelligence</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Bio, Work Experience, Education & Certifications */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Summary Card */}
                        <div className="glass-panel p-8 rounded-3xl text-accent-muted text-base sm:text-lg leading-relaxed">
                            <p className="text-white font-medium text-lg sm:text-xl leading-relaxed">
                                {config.summary}
                            </p>
                        </div>

                        {/* Experience Timeline Card */}
                        <div className="glass-panel p-8 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                                    CURRENT ROLE
                                </span>
                                <span className="text-xs font-mono text-accent-muted">{config.experience.period}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-1">{config.experience.company}</h3>
                            <p className="text-emerald-400 font-mono text-sm font-semibold mb-6">{config.experience.role} • {config.experience.location}</p>

                            <ul className="space-y-3 text-accent-muted text-sm sm:text-base leading-relaxed">
                                {config.experience.points.map((pt, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Education & Certification Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Education Card */}
                            <div className="glass-panel p-6 rounded-2xl border border-white/10">
                                <div className="flex items-center gap-3 mb-3">
                                    <AcademicCapIcon className="w-6 h-6 text-cyan-400" />
                                    <div>
                                        <h4 className="text-white font-bold text-base">Education</h4>
                                        <p className="text-xs font-mono text-cyan-400">{config.education.period}</p>
                                    </div>
                                </div>
                                <p className="text-white text-sm font-semibold mb-1">{config.education.degree}</p>
                                <p className="text-accent-muted text-xs mb-2">{config.education.college}</p>
                                <span className="inline-block px-2.5 py-0.5 text-xs font-mono rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                    {config.education.cgpa}
                                </span>
                            </div>

                            {/* Certifications Card */}
                            <div className="glass-panel p-6 rounded-2xl border border-white/10">
                                <div className="flex items-center gap-3 mb-3">
                                    <ShieldCheckIcon className="w-6 h-6 text-emerald-400" />
                                    <div>
                                        <h4 className="text-white font-bold text-base">Certifications</h4>
                                        <p className="text-xs font-mono text-emerald-400">Verified Credentials</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs text-accent-muted font-mono">
                                    <li className="flex items-center gap-2 text-white">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                        Red Hat Certified System Administrator (RHCSA)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                        Full Stack Development Workshop
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 4-Block Skill Matrix */}
                    <div className="lg:col-span-5 space-y-4">
                        <h3 className="text-xs font-mono text-accent-muted tracking-widest uppercase mb-2">Technical Capabilities</h3>
                        
                        {techCategories.map((cat, idx) => {
                            const IconComp = cat.icon;
                            return (
                                <div key={idx} className="glass-panel p-5 rounded-2xl glass-panel-hover">
                                    <div className="flex items-center gap-3 mb-3">
                                        <IconComp className={`w-5 h-5 ${cat.color}`} />
                                        <h4 className="text-base font-bold text-white">{cat.title}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cat.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}