'use client';
import { useState, useEffect, useRef } from 'react';
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Smooth scroll function
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Handle navigation - scroll on home page, navigate on other pages
    const handleNavigation = (e, item) => {
        if (pathname === '/') {
            handleSmoothScroll(e, item.targetId);
        } else {
            // Navigate to home page with hash
            window.location.href = `/#${item.targetId}`;
        }
    };

    // Navigation items mapping
    const navigationItems = [
        { label: 'Services', targetId: 'services', href: '/#services' },
        { label: 'About', targetId: 'about', href: '/about' },
        { label: 'Support', targetId: 'contact', href: '/#contact' }
    ];

    return (
        <footer id="contact" ref={footerRef} className="relative bg-black overflow-hidden pb-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #e50914 1px, transparent 0)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            {/* Gradient Text Background */}
            <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
                <h1 className='text-[16vw] md:text-[16.5vw] font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary/30 via-primary/10 to-transparent'>
                    Nivro Tech
                </h1>
            </div>

            <div className="relative z-10">
                <div className={`border border-muted/30 rounded-3xl md:rounded-[40px] container mx-auto max-w-7xl p-6 md:p-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-8">
                        {/* Left Side - Brand Description */}
                        <div className="space-y-4 md:space-y-6">
                            {/* Brand Logo */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center">
                                    <Zap className="w-5 h-5 md:w-7 md:h-7 text-white" />
                                </div>
                                <span className="text-2xl md:text-3xl font-bold text-white">Nivro</span>
                            </div>

                            {/* Brand Description */}
                            <p className="text-zinc-400 leading-relaxed text-sm md:text-lg mb-4 md:mb-6 max-w-md">
                                Nivro empowers teams to transform complex challenges into elegant digital solutions —
                                making technology work for you, not against you.
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center gap-3 md:gap-4">
                                {[
                                    { icon: Github, href: 'https://github.com', label: 'GitHub' },
                                    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                                    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                                    { icon: Mail, href: 'mailto:contact@nivro.com', label: 'Email' }
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 md:w-10 md:h-10 bg-white/5 border border-white/10 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                                    >
                                        <social.icon className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Navigation Links in Row */}
                        <div className="flex justify-start lg:justify-end">
                            <div className="space-y-4 md:space-y-6">
                                <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Navigation</h3>
                                <div className="flex flex-row gap-4 md:gap-6">
                                    {navigationItems.map((item) => (
                                        item.label === 'About' ? (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="text-zinc-400 hover:text-primary transition-colors duration-300 text-base md:text-lg font-medium hover:scale-110 transition-transform duration-300 whitespace-nowrap cursor-pointer"
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                onClick={(e) => handleNavigation(e, item)}
                                                className="text-zinc-400 hover:text-primary transition-colors duration-300 text-base md:text-lg font-medium hover:scale-110 transition-transform duration-300 whitespace-nowrap cursor-pointer"
                                            >
                                                {item.label}
                                            </a>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 md:pt-8 border-t border-zinc-800">
                        {/* Left: Copyright with Gradient Brand Name */}
                        <div className="flex items-center gap-2 text-zinc-400 text-sm md:text-lg">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 font-bold text-lg md:text-xl">
                                Nivro
                            </span>
                            <span>© 2025. All rights reserved.</span>
                        </div>

                        {/* Right: Legal Links */}
                        <div className="flex items-center gap-4 md:gap-6">
                            <Link
                                href="/privacy-policy"
                                className="text-zinc-400 hover:text-primary transition-colors duration-300 text-xs md:text-sm font-medium"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-zinc-400 hover:text-primary transition-colors duration-300 text-xs md:text-sm font-medium"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}