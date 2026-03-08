export default function Hero() {
    const config  = {
        subtitle: 'Full-stack Engineer',
        social: {
            linkedin: 'https://www.linkedin.com/in/vishwha-karthickeyan',
            github: 'https://github.com/vishwha-karthickeyan'
        }
    }
    return <section className='flex flex-col px-5 py-32 bg-primary justify-center items-center min-h-[90vh]'>
       <div className='flex flex-col justify-center items-center text-center max-w-4xl'>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary bg-secondary mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono text-accent-muted tracking-wider">AVAILABLE FOR WORK</span>
            </div>
            
            <h1 className='text-accent text-6xl md:text-8xl font-black tracking-tighter leading-tight'>
                Building digital <br/> experiences.
            </h1>
            <p className='text-xl md:text-2xl mt-8 font-sans text-accent-muted font-light tracking-wide max-w-2xl'>
                Hi, I'm <span className="text-accent font-medium">M Vishwha Karthickeyan</span>, a {config.subtitle} crafting robust web architectures.
            </p>
            
            <div className='flex py-12 gap-5 justify-center'>
                <a href={config.social.linkedin} className='btn' target='_blank' rel="noreferrer">
                    Connect on LinkedIn
                </a>
                <a href={config.social.github} className='btn-outline' target='_blank' rel="noreferrer">
                    View GitHub
                </a>
            </div>
       </div>
    </section>
}