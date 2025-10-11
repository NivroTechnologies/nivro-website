'use client';

import { Mail, Menu } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 top-4 mx-auto`}>
            <div className={`w-[95vw] max-w-7xl backdrop-blur-md ${menuOpen ? 'rounded-2xl' : 'rounded-full'} shadow-2xl border border-muted/30 mx-auto`}>
                <div className="flex items-center justify-between px-4 md:px-4 py-2">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-black rounded-full overflow-hidden flex items-center justify-center">
                            <Image
                                src="/images/logo.png"
                                alt="Nivro Technologies"
                                width={30} height={30} />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-12">
                        <a href="#work" className="text-foreground text-base hover:text-primary transition-colors duration-300">
                            Work
                        </a>
                        <a href="#about" className="text-foreground text-base hover:text-primary transition-colors duration-300">
                            About
                        </a>
                        <a href="#playground" className="text-foreground text-base hover:text-primary transition-colors duration-300">
                            Playground
                        </a>
                        <a href="#resource" className="text-foreground text-base hover:text-primary transition-colors duration-300">
                            Resource
                        </a>
                    </div>

                    {/* Email Button */}
                    <a
                        href="mailto:ihyaet@gmail.com"
                        className="hidden md:flex items-center space-x-2 bg-foreground text-zinc-900 px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
                    >
                        <span>nivotech@gmail.com</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground p-2 rounded-full hover:bg-foreground/10 transition-colors duration-300"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'h-full border-t border-zinc-800' : 'max-h-0'
                        }`}
                >
                    <div className="px-6 py-4 space-y-4">
                        <a
                            href="#work"
                            className="block text-foreground hover:text-purple-400 transition-colors duration-300 py-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            Work
                        </a>
                        <a
                            href="#about"
                            className="block text-foreground hover:text-purple-400 transition-colors duration-300 py-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#playground"
                            className="block text-foreground hover:text-purple-400 transition-colors duration-300 py-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            Playground
                        </a>
                        <a
                            href="#resource"
                            className="block text-foreground hover:text-purple-400 transition-colors duration-300 py-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            Resource
                        </a>
                        <a
                            href="mailto:ihyaet@gmail.com"
                            className="flex items-center space-x-2 bg-foreground text-zinc-900 px-6 py-2.5 rounded-full font-medium justify-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            <Mail size={18} />
                            <span>ihyaet@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar