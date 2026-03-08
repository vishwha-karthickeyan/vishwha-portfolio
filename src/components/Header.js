import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

    return <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 bg-primary/80 backdrop-blur-xl border-b border-primary text-accent">
        <a className="font-bold text-accent text-xl tracking-tighter hover:text-white transition duration-300" href="/">vishwha.dev</a>
        <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="mobile-nav">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-accent-muted h-6 w-6 hover:text-white transition'/></button>
    </header>
}