import QrImage from '../assets/qr_generator.png';

export default function Projects() {
    const config = {
        projects : [
            {
                title: 'Task Manager',
                image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop', // Productivity dashboard placeholder
                description: 'A robust, highly concurrent Task Manager application built using Next.js and MySQL.',
                link: 'https://github.com/vishwha-karthickeyan/task-manager' 
            },
            {
                title: 'QR Code Generator',
                image: QrImage, 
                description: 'A high-performance QR code generator built using pure HTML, CSS, and JavaScript.',
                link: 'https://github.com/vishwha-karthickeyan/QR-code-generator'
            }
        ]
    }

    return <section id='projects' className="flex flex-col py-32 px-5 justify-center bg-secondary min-h-[90vh] border-t border-primary">
        <div className="w-full flex justify-center mb-16">
            <div className="flex flex-col px-5 md:px-10 max-w-6xl w-full">
                <h2 className='text-xs font-mono text-accent-muted tracking-widest uppercase mb-4'>Selected Work</h2>
                <h3 className='text-4xl md:text-5xl font-bold tracking-tight leading-tight'>
                    Projects I've shipped.
                </h3>
            </div>
        </div>
        <div className="w-full flex justify-center">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-5 md:px-10 max-w-6xl w-full'>
                {config.projects.map((project, index) => (
                     <div key={index} className='group flex flex-col rounded-3xl overflow-hidden bg-primary border border-primary transition duration-500 hover:border-secondary shadow-2xl'>
                        <div className="h-[300px] w-full relative overflow-hidden">
                            <img className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700 ease-out' src={project.image} alt={project.title}/>
                        </div>
                        <div className='flex flex-col p-8 md:p-10'>
                            <h4 className="text-2xl font-bold text-accent mb-3">{project.title}</h4>
                            <p className='text-accent-muted text-lg leading-relaxed mb-8 flex-grow'>{project.description}</p>
                            <div className='flex'>
                                {project.link !== '#' ? (
                                    <a className='btn-outline' target='_blank' href={project.link} rel="noreferrer">View Repository &rarr;</a>
                                ) : (
                                    <a className='btn-outline cursor-not-allowed opacity-50' onClick={(e) => e.preventDefault()} href={project.link}>Private Repository &rarr;</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}