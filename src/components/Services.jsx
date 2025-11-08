'use client';
import { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Globe, Users, ShoppingCart, Headphones, CheckCircle } from 'lucide-react';

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
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Reduced delay for faster appearance
                    setTimeout(() => setIsVisible(true), index * 100);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' // Trigger when 50px from bottom
            }
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
            className={`group relative bg-black/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-6 md:p-8 transition-all duration-500 ease-out overflow-hidden ${isVisible
                    ? 'opacity-100 translate-y-0 border-primary shadow-2xl shadow-primary/20 -translate-y-2'
                    : 'opacity-0 translate-y-8'
                }`}
        >
            {/* Animated Background Effect - Always show when visible */}
            <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}></div>

            {/* Tag Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full backdrop-blur-sm">
                <span className="text-xs font-semibold text-primary">{service.tag}</span>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-6 flex items-start justify-between">
                    <div className="relative">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-black border flex items-center justify-center transition-all duration-500 ${isVisible
                                ? 'bg-primary border-primary scale-110 rotate-3'
                                : 'bg-black border-zinc-800'
                            }`}>
                            <Icon className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-500 ${isVisible ? 'text-white scale-110' : 'text-primary'
                                }`} />
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h3 className={`text-lg md:text-xl font-bold mb-4 transition-colors duration-500 leading-tight ${isVisible ? 'text-primary' : 'text-white'
                    }`}>
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-xs text-zinc-500 transition-colors duration-500">
                            <CheckCircle className="w-3 h-3 text-primary" />
                            <span className={isVisible ? 'text-zinc-300' : 'text-zinc-500'}>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Glow Effect */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}></div>
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
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px' // Trigger earlier
            }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="relative py-16 md:py-20 px-4 md:px-6 bg-black overflow-hidden">
            {/* Simplified Background - Better Performance */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <header
                    ref={titleRef}
                    className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {/* Title */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                        Enterprise-Grade
                        <br />
                        <span className="text-primary">Digital Solutions</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed px-4">
                        Transform your business with cutting-edge technology solutions designed for
                        <span className="text-primary font-semibold"> scalability, performance, and growth</span>
                    </p>
                </header>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}