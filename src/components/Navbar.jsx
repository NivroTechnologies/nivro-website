'use client';

import { Menu, X, Home, User, Settings, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Smooth scroll function
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        setMenuOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="fixed left-0 right-0 z-[100] top-4 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Navbar with logo + hamburger */}
                <div className="flex items-center justify-between relative z-[120]">
                    {/* Logo Circle */}
                    <Link href="/" className="w-12 h-12 bg-black/80 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center shadow-lg shadow-black/30">
                        <Image
                            src="/images/logo.png"
                            alt="Nivro Technologies"
                            width={28}
                            height={28}
                            className="rounded-full"
                        />
                    </Link>

                    {/* Hamburger Menu Button */}
                    <div
                        className="w-12 h-12 bg-transparent backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 hover:border-white/40 relative cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                        // aria-expanded={menuOpen}
                        aria-label="Toggle navigation"
                    >
                        {menuOpen ? (
                            <X size={24} className="text-white" />
                        ) : (
                            <Menu size={24} className="text-white" />
                        )}
                    </div>

                    {/* Creative Dropdown Menu */}
                    <div
                        className={`absolute right-0 top-full mt-3 transition-all duration-500 ease-out z-[120] ${menuOpen
                            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                            }`}
                    >
                        {/* Animated Background Container */}
                        <div className="relative">

                            {/* Main Menu Container */}
                            <div className="relative bg-gradient-to-br from-black/95 to-zinc-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl shadow-primary/10 px-6 py-6 space-y-3 w-64 sm:w-72">
                                {/* Menu Items with Creative Animations */}
                                <a
                                    href="#home"
                                    className="group relative flex items-center space-x-4 p-3 rounded-xl text-lg font-semibold text-white hover:text-white transition-all duration-500 overflow-hidden"
                                    onClick={(e) => handleSmoothScroll(e, 'home')}
                                >
                                    {/* Animated Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 transform group-hover:scale-105"></div>

                                    {/* Icon with Creative Effect */}
                                    <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                        <Home size={20} className="text-primary group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    {/* Text with Slide Effect */}
                                    <span className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500">
                                        Home
                                    </span>

                                    {/* Arrow Indicator */}
                                    <ArrowRight size={16} className="relative z-10 text-primary/50 group-hover:text-primary transform translate-x-0 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-500 ml-auto" />
                                </a>

                                <a
                                    href="#services"
                                    className="group relative flex items-center space-x-4 p-3 rounded-xl text-lg font-semibold text-white hover:text-white transition-all duration-500 overflow-hidden"
                                    onClick={(e) => handleSmoothScroll(e, 'services')}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 transform group-hover:scale-105"></div>

                                    <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                        <Settings size={20} className="text-primary group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    <span className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500">
                                        Services
                                    </span>

                                    <ArrowRight size={16} className="relative z-10 text-primary/50 group-hover:text-primary transform translate-x-0 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-500 ml-auto" />
                                </a>

                                <Link
                                    href="/about"
                                    className="group relative flex items-center space-x-4 p-3 rounded-xl text-lg font-semibold text-white hover:text-white transition-all duration-500 overflow-hidden"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 transform group-hover:scale-105"></div>

                                    <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                        <User size={20} className="text-primary group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    <span className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500">
                                        About
                                    </span>

                                    <ArrowRight size={16} className="relative z-10 text-primary/50 group-hover:text-primary transform translate-x-0 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-500 ml-auto" />
                                </Link>

                                <a
                                    href="#contact"
                                    className="group relative flex items-center space-x-4 p-3 rounded-xl text-lg font-semibold text-white hover:text-white transition-all duration-500 overflow-hidden"
                                    onClick={(e) => handleSmoothScroll(e, 'contact')}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 transform group-hover:scale-105"></div>

                                    <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                        <Mail size={20} className="text-primary group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    <span className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500">
                                        Contact
                                    </span>

                                    <ArrowRight size={16} className="relative z-10 text-primary/50 group-hover:text-primary transform translate-x-0 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-500 ml-auto" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Backdrop - Only for mobile */}
                <div
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden z-[110] ${menuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={() => setMenuOpen(false)}
                />
            </div>
        </nav>
    );
};

export default Navbar;