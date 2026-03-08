export default function About () {
    const config  = {
        line1: 'Hi, I am M. Vishwha Karthickeyan. I am a Full-stack developer passionate about building scalable, beautiful web and mobile applications with a focus on deep UX and clean architecture.',
        line2: 'My frontend stack includes React.js, Next.js, and React Native. For backend systems, I leverage Python, FastAPI, MySQL, PostgreSQL, Directus, and PowerSync. I thrive on solving complex backend logic and rendering it elegantly on any device.',
        line3: 'I have been working as a Full-stack Developer at Intelixent IT Solutions since Sep 2024, where I actively build and maintain robust production applications.',
    }
    return <section className='flex flex-col md:flex-row bg-primary px-5 py-32 items-center justify-center min-h-[70vh] border-t border-primary' id='about'>
        <div className='flex justify-center max-w-4xl mx-auto'>
            <div className='flex flex-col text-accent px-5 md:px-10 text-center md:text-left'>
                <h2 className='text-xs font-mono text-accent-muted tracking-widest uppercase mb-4'>About Me</h2>
                <h3 className='text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight'>
                    Bridging the gap between <br className="hidden md:block"/> design and engineering.
                </h3>
                <p className='pb-4 text-accent-muted text-lg md:text-xl leading-relaxed max-w-3xl'>{config.line1}</p>
                <p className='pb-8 text-accent-muted text-lg md:text-xl leading-relaxed max-w-3xl'>{config.line2}</p>
                
                <div className="mt-4 p-6 border border-primary bg-secondary/30 rounded-2xl flex flex-col md:flex-row gap-6 items-center md:items-start text-left">
                    <div className="flex-shrink-0 pt-1">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-xl mb-1">Intelixent IT Solutions</h4>
                        <p className="font-mono text-xs text-accent-muted mb-3 tracking-wider">SEP 2024 — PRESENT</p>
                        <p className='text-accent-muted text-lg leading-relaxed'>{config.line3}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}