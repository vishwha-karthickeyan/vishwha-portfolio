export default function Contact () {
    const config = {
        email : 'vishwhakarthi@gmail.com',
        phone: '+91 9043464752'
    }
    return <section id='contact' className='flex flex-col bg-primary px-5 py-24 border-t border-primary'>
        <div className='flex flex-col items-center max-w-4xl mx-auto w-full text-center'>
            <h2 className='text-xs font-mono text-accent-muted tracking-widest uppercase mb-4'>Get in Touch</h2>
            <h3 className='text-3xl md:text-5xl font-bold tracking-tight text-accent mb-6'>
                Let's build something together.
            </h3>
            <p className='pb-12 text-accent-muted text-lg max-w-xl'>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-6'>
                <a href={`mailto:${config.email}`} className='btn'>Say Hello</a>
                <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className='text-accent-muted hover:text-accent font-mono text-sm transition'>
                    {config.phone}
                </a>
            </div>
        </div>
    </section>
}