'use client';
import { useState, useEffect } from 'react';
import { Users, Target, Award, Clock, Heart, Zap, Code, Smartphone, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DarkVeil from '@/components/DarkVeil';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animations immediately on page load
        setIsVisible(true);

        // Add structured data for SEO
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nivro Technologies",
            "url": "https://nivrotechnologies.com",
            "logo": "https://nivrotechnologies.com/images/logo.png",
            "description": "Nivro Technologies transforms ideas into powerful digital solutions. We specialize in website development, mobile app creation, custom software, CRM systems, and e-commerce solutions.",
            "foundingDate": "2020",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "contact@nivrotechnologies.com"
            },
            "sameAs": [
                "https://github.com",
                "https://twitter.com",
                "https://linkedin.com"
            ],
            "knowsAbout": [
                "Web Development",
                "Mobile App Development",
                "Custom Software Development",
                "CRM Development",
                "E-commerce Development",
                "Cloud Software",
                "Digital Transformation"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Development Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Website Development",
                            "description": "Custom website development and design services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Mobile App Development",
                            "description": "iOS and Android mobile application development"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Custom Software Development",
                            "description": "Enterprise-grade custom software solutions"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "CRM Development",
                            "description": "Custom CRM systems and business software solutions"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "E-commerce Development",
                            "description": "Complete e-commerce platform development"
                        }
                    }
                ]
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    const features = [
        {
            icon: Users,
            title: 'Experienced Team',
            description: 'Skilled professionals with expertise across modern technologies'
        },
        {
            icon: Code,
            title: 'End-to-End Development',
            description: 'From idea to deployment, we manage everything'
        },
        {
            icon: Heart,
            title: 'Client-Centric Approach',
            description: 'Every project starts with understanding your business goals'
        },
        {
            icon: Award,
            title: 'Quality & Timely Delivery',
            description: 'We focus on precision, scalability, and meeting deadlines'
        },
        {
            icon: Clock,
            title: '24/7 Support',
            description: 'Always available to assist you with maintenance and technical support'
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Nivro Technologies" />
            <meta itemProp="description" content="Transforming ideas into powerful digital solutions. Specializing in website development, mobile apps, custom software, CRM systems, and e-commerce solutions." />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12" aria-label="About Nivro Technologies">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
                                <Zap className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-primary">About Nivro Technologies</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Transforming Ideas Into
                                <br />
                                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                    Powerful Digital Solutions
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-xl">
                                We are passionate about creating innovative digital experiences that help businesses grow and succeed in the digital world.
                            </p>
                        </div>

                        {/* Right Side - Video */}
                        <div className={`block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="relative">
                                <div className="w-full h-[500px] rounded-3xl border border-primary/20 overflow-hidden relative">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                        aria-label="Nivro Technologies team collaboration video"
                                        title="Nivro Technologies - Digital Solutions Team"
                                    >
                                        <source
                                            src="https://videos.openai.com/az/vg-assets/assets%2Ftask_01jp9g242fe4nvhebv9tm1wt1w%2Ftask_01jp9g242fe4nvhebv9tm1wt1w_genid_89cc16f4-704a-496f-8a97-ced50091da23_25_03_14_04_55_630270%2Fvideos%2F00000_631167510%2Fsource.mp4?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=5e5fc900-07cf-43e7-ab5b-314c0d877bb0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-08T01%3A08%3A20Z&ske=2025-11-15T01%3A13%3A20Z&sks=b&skv=2024-08-04&sig=v2fiYhDB1IV0EYgXGV4fSMOR2NqnT8ExScNowUdFxdk%3D&ac=oaivgprodscus"
                                            type="video/mp4"
                                        />
                                    </video>
                                    {/* Overlay gradient for better text readability if needed */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                </div>
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <article className="relative py-20 px-6" itemScope itemType="https://schema.org/AboutPage">
                <div className="container mx-auto max-w-6xl">
                    <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <header className="text-center max-w-3xl mx-auto space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                About <span className="text-primary">Us</span>
                            </h2>
                            <div className="flex items-center justify-center  w-full">
                                <div className="w-3/5 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                            </div>
                        </header>

                        <div className="prose prose-invert max-w-none space-y-6 text-zinc-300 leading-relaxed text-lg" itemProp="articleBody">
                            <p itemProp="description">
                                At <strong className="text-primary font-semibold" itemProp="name">Nivro Technologies</strong>, we are passionate about transforming ideas into powerful digital solutions.
                            </p>

                            <p>
                                Our team of experienced developers, designers, and project managers specialize in website development, mobile app creation, custom software, CRM systems, and e-commerce solutions that help businesses grow and succeed in the digital world.
                            </p>

                            <p>
                                Founded with a vision to make technology accessible to everyone, we work closely with our clients to understand their goals and deliver reliable, scalable, and innovative solutions — on time and within budget.
                            </p>

                            <p>
                                Whether you are a startup looking to build your first online presence or an established business aiming to scale, <strong className="text-primary font-semibold">Nivro Technologies</strong> is your trusted partner for end-to-end digital development and maintenance support.
                            </p>

                            <blockquote className="p-6 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg mt-8" itemProp="slogan">
                                <p className="text-xl font-semibold text-white">
                                    Our mission is simple — to empower businesses with technology that works.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </article>

            {/* Why Choose Us Section */}
            <section className="relative pb-20 px-6" aria-label="Why Choose Nivro Technologies">
                <div className="container mx-auto max-w-7xl">
                    <div className="space-y-12">
                        <header className="text-center max-w-3xl mx-auto space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                Why Choose <span className="text-primary">Us</span>
                            </h2>
                            <p className="text-lg text-zinc-400">
                                We believe in long-term partnerships built on trust, transparency, and performance.
                            </p>
                            <p className="text-base text-zinc-500 italic">
                                Here's what makes us stand out:
                            </p>
                        </header>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <article
                                        key={index}
                                        role="listitem"
                                        className={`group relative bg-black/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                            }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                        itemScope
                                        itemType="https://schema.org/Service"
                                    >
                                        {/* Background Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                                        {/* Icon */}
                                        <div className="relative z-10 mb-4" aria-hidden="true">
                                            <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                                <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-500" itemProp="name">
                                                {feature.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed" itemProp="description">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {/* Bottom Message */}
                        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-2xl md:text-3xl font-bold text-white">
                                We don't just build software — we build{' '}
                                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                    relationships
                                </span>{' '}
                                that help businesses grow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative pb-20 px-6" aria-label="Get Started with Nivro Technologies">
                <div className="container mx-auto max-w-4xl">
                    <div className={`bg-gradient-to-br from-black/80 to-zinc-900/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-12 text-center space-y-6 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Let's work together to create digital solutions that drive growth and innovation.
                        </p>
                        <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4" aria-label="Call to action navigation">
                            <Link
                                href="/#contact"
                                className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
                                aria-label="Get started with Nivro Technologies"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/#services"
                                className="inline-flex items-center gap-3 bg-black border border-zinc-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-primary hover:bg-primary/5"
                                aria-label="View our services"
                            >
                                <span>View Services</span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </section>
        </main>
    );
}

