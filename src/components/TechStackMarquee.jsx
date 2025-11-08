'use client';
import { useRef, useEffect, useState } from 'react';
import {
    Database,
    Code,
    Zap,
    Cpu,
    Smartphone,
    Brain,
    Server,
    Sparkles,
    ArrowRight
} from 'lucide-react';

const techStack = [
    { name: "MongoDB", icon: 'https://img.icons8.com/color/48/mongodb.png', category: "Database" },
    { name: "Express.js", icon: 'https://img.icons8.com/color/48/express-js.png', category: "Backend" },
    { name: "React", icon: 'https://img.icons8.com/color/48/react-native.png', category: "Frontend" },
    { name: "Node.js", icon: 'https://img.icons8.com/color/48/nodejs.png', category: "Runtime" },
    { name: "React Native", icon: 'https://img.icons8.com/color/48/react-native.png', category: "Mobile" },
    { name: "Firebase", icon: 'https://img.icons8.com/color/48/firebase.png', category: "Backend" },
    { name: "Supabase", icon: 'https://img.icons8.com/color/48/supabase.png', category: "Database" },
    { name: "PostgreSQL", icon: 'https://img.icons8.com/color/48/postgreesql.png', category: "Database" },
    { name: "Next.js", icon: 'https://img.icons8.com/color/48/nextjs.png', category: "Fullstack" },
    { name: "Python", icon: 'https://img.icons8.com/color/48/python--v1.png', category: "Language" },
    { name: "Expo", icon: 'https://img.icons8.com/color/48/expo.png', category: "Mobile" }
];

export default function PremiumTechMarquee() {
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-16 bg-black overflow-hidden"
        >
            <div className="flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 w-full">
                <div className="w-3/5 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Section Header */}
            <div className="text-center mb-12 relative z-10">
                <h3 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Powered by <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">Modern Technology</span>
                </h3>
                <p className={`text-zinc-400 text-lg px-4 md:px-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Cutting-edge tools and frameworks for exceptional digital experiences
                </p>
            </div>

            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-52 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-52 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

                {/* Marquee Container */}
                <div className="overflow-hidden">
                    <div
                        className="flex items-center py-6"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        style={{
                            animation: 'marquee 60s linear infinite',
                            animationPlayState: isPaused ? 'paused' : 'running',
                            width: 'fit-content'
                        }}
                    >
                        {[...techStack, ...techStack, ...techStack].map((tech, index) => {
                            return (
                                <div
                                    key={index}
                                    className="group relative flex items-center gap-4 mx-4 px-6 py-3 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl hover:border-red-500 transition-all duration-500 flex-shrink-0 hover:shadow-lg hover:shadow-red-500/20"
                                >
                                    {/* Icon Container */}
                                    <div className="relative z-10 w-10 h-10 rounded-xl bg-black/80 border border-zinc-700 flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        {/* Use regular img tag instead of Next.js Image */}
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={24}
                                            height={24}
                                            className="filter group-hover:invert group-hover:brightness-0 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex items-center gap-4">
                                        {/* Tech Name */}
                                        <span className="text-base font-bold text-white group-hover:text-red-500 transition-colors duration-300 whitespace-nowrap">
                                            {tech.name}
                                        </span>

                                        {/* Category Badge */}
                                        <span className="px-3 py-1 bg-black/90 border border-zinc-800 rounded-full text-xs font-medium text-zinc-400 group-hover:text-white group-hover:bg-red-500/20 group-hover:border-red-500/50 transition-all duration-300">
                                            {tech.category}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Stats */}
            <div className={`flex justify-center items-center gap-8 mt-12 relative z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">14</div>
                    <div className="text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">Technologies</div>
                </div>
                <div className="w-px h-10 bg-zinc-800"></div>
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">6</div>
                    <div className="text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">Categories</div>
                </div>
                <div className="w-px h-10 bg-zinc-800"></div>
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100%</div>
                    <div className="text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">Modern Stack</div>
                </div>
            </div>

            {/* Premium CTA */}
            <div className={`text-center transition-all duration-1000 delay-500 max-w-7xl mx-auto mt-14`}>
                <div className="relative bg-black/80 border border-zinc-800 rounded-2xl p-12 backdrop-blur-sm overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Build Something Extraordinary?
                        </h3>
                        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto text-lg">
                            Let's create a custom solution that drives real business growth and sets you apart from the competition.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button className="group relative inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                                <span>Start Your Project</span>
                                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            </button>
                            <button className="group relative inline-flex items-center gap-3 bg-black border border-zinc-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-primary hover:bg-primary/5">
                                <span>View Case Studies</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }
            `}</style>
        </section>
    );
}