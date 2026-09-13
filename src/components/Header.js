import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl' 
                : 'bg-transparent py-6'
        }`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                {/* Brand Logo */}
                <a href="#hero" className="flex items-center gap-2 group">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-mono font-bold text-slate-950 text-sm shadow-md shadow-emerald-500/20 group-hover:scale-105 transition">
                        VK
                    </span>
                    <span className="font-bold text-lg tracking-tight text-white group-hover:text-emerald-400 transition">
                        vishwha<span className="text-emerald-400">.dev</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
                    <ul>
                        <li className="inline-block"><a href="#hero">Home</a></li>
                        <li className="inline-block"><a href="#about">About</a></li>
                        <li className="inline-block"><a href="#projects">Work</a></li>
                        <li className="inline-block"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                {/* Header CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#contact" className="btn-primary py-2 px-5 text-xs font-semibold rounded-lg">
                        Let's Connect
                    </a>
                </div>

                {/* Mobile Toggle Button */}
                <button 
                    onClick={() => setToggleMenu(!toggleMenu)} 
                    className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
                    aria-label="Toggle Navigation Menu"
                >
                    {toggleMenu ? (
                        <XMarkIcon className="h-6 w-6 text-emerald-400"/>
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-white"/>
                    )}
                </button>
            </div>

            {/* Mobile Drawer Navigation */}
            {toggleMenu && (
                <nav className="md:hidden">
                    <ul onClick={() => setToggleMenu(false)} className="mobile-nav animate-in fade-in slide-in-from-top-4 duration-300">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li className="w-full px-6 pt-2">
                            <a href="#contact" className="btn-primary w-full text-center py-3 rounded-xl block text-sm">
                                Let's Connect
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}