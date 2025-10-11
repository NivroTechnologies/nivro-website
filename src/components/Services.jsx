'use client';
import { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Globe, Users, ShoppingCart, Headphones, Sparkles, Zap, Target, TrendingUp, ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';

const services = [
    {
        icon: Code,
        title: "Custom Software Development",
        description: "Enterprise-grade custom software solutions built for scalability and performance. Our expert developers create tailored applications that seamlessly integrate with your existing systems.",
        features: ["Scalable Architecture", "API Integration", "Cloud Deployment", "24/7 Monitoring"],
        tag: "Core Service"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native iOS and Android mobile applications with exceptional user experience. We specialize in React Native and Flutter for cross-platform mobile app development.",
        features: ["Native Performance", "Cross-Platform", "App Store Deployment", "Push Notifications"],
        tag: "Popular"
    },
    {
        icon: Globe,
        title: "Web Application Development",
        description: "Lightning-fast, SEO-optimized web applications using React, Next.js, and modern frameworks. Responsive web design that converts visitors into customers.",
        features: ["SEO Optimized", "PWA Ready", "Fast Loading", "Responsive Design"],
        tag: "Featured"
    },
    {
        icon: Users,
        title: "CRM Development Solutions",
        description: "Custom CRM systems that streamline your business workflows and boost productivity. Intelligent customer relationship management tailored to your needs.",
        features: ["Custom Workflows", "Analytics Dashboard", "Team Collaboration", "Data Security"],
        tag: "Business"
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Development",
        description: "High-converting online stores with secure payment integration, inventory management, and advanced analytics. Complete e-commerce solutions from concept to launch.",
        features: ["Payment Gateway", "Inventory System", "Analytics", "Security"],
        tag: "Growth"
    },
    {
        icon: Headphones,
        title: "Maintenance & Support",
        description: "24/7 technical support, regular updates, and proactive system monitoring. Dedicated development team ensuring your digital products run flawlessly.",
        features: ["24/7 Support", "Regular Updates", "Security Patches", "Performance Monitoring"],
        tag: "Essential"
    }
];

function ServiceCard({ service, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 200);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [index]);

    const Icon = service.icon;

    return (
        <article
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative bg-black/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 transition-all duration-700 overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            {/* Animated Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Tag Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full backdrop-blur-sm">
                <span className="text-xs font-semibold text-primary">{service.tag}</span>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-6 flex items-start justify-between">
                    <div className="relative">
                        <div className={`w-14 h-14 rounded-xl bg-black border border-zinc-800 flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-primary border-primary scale-110 rotate-3' : 'bg-black border-zinc-800'
                            }`}>
                            <Icon className={`w-6 h-6 transition-all duration-500 ${isHovered ? 'text-white scale-110' : 'text-primary'}`} />
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">
                            <CheckCircle className="w-3 h-3 text-primary" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </article>
    );
}

export default function Services() {
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="relative py-20 px-6 bg-black overflow-hidden">
            <div className="flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 w-full">
                <div className="w-3/5 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>

            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(#e50914 1px, transparent 1px),
                                    linear-gradient(90deg, #e50914 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}></div>

                {/* Animated Orbs */}
                <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <header ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Enterprise-Grade
                        <br />
                        <span className="text-primary">Digital Solutions</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        Transform your business with cutting-edge technology solutions designed for
                        <span className="text-primary font-semibold"> scalability, performance, and growth</span>
                    </p>

                </header>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}