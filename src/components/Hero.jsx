'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Mail, TrendingUp, ArrowRight, Headset } from 'lucide-react';
import DarkVeil from './DarkVeil';
import Image from 'next/image';

export default function Hero() {

    return (
        <div className="relative w-full h-screen bg-background overflow-hidden">
            {/* Animated Background */}
            <DarkVeil
                hueShift={240}
                noiseIntensity={0}
                scanlineIntensity={0.03}
                speed={0.8}
                scanlineFrequency={15}
                warpAmount={0.02}
                resolutionScale={1}
            />

            {/* Hero Content - Optimized Version */}
            <section id="home" className="absolute inset-0 w-full h-screen flex items-center px-6 pt-20">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Optimized Content */}
                        <div className="text-left space-y-6 lg:pl-8 mt-8 lg:mt-0">
                            {/* Main Headline */}
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                                    We Craft
                                    <br />
                                    <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                                        Digital
                                    </span>
                                    <br />
                                    Excellence
                                </h1>

                                {/* Optimized Subheadline */}
                                <p className="text-lg md:text-xl text-foreground font-light leading-relaxed max-w-xl">
                                    Transforming ideas into <span className="text-primary font-semibold">exceptional digital experiences</span> that drive growth and innovation
                                </p>
                            </div>

                            {/* Optimized Description */}
                            <p className="text-base text-foreground/70 leading-7 max-w-lg">
                                We craft <span className="text-primary font-semibold">premium brands</span>,{" "}
                                <span className="text-primary font-semibold">cutting-edge websites</span>, and{" "}
                                <span className="text-primary font-semibold">innovative digital products</span> that elevate your business.
                            </p>

                            {/* CTA Section */}
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6">
                                <button className="group relative flex items-center gap-4 bg-foreground text-black px-8 py-2.5 rounded-2xl font-medium text-base transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden">
                                    <div className="relative z-10 flex items-center gap-3">
                                        <div className='flex justify-center items-center bg-black text-foreground h-9 w-9 rounded-full group-hover:scale-110 transition-transform duration-300'>
                                            <TrendingUp size={18} />
                                        </div>
                                        <span>Start Your Project</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-foreground to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </button>

                                {/* Secondary CTA */}
                                <div className="flex items-center text-foreground/80 gap-4 px-8 py-2.5 rounded-2xl font-medium text-base transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-foreground/20">
                                    <div className="w-10 h-10 bg-foreground/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-foreground/20">
                                        <span className="text-sm font-bold">∞</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Book Strategy Call</p>
                                        <p className="text-xs text-foreground/60">30 min consultation</p>
                                    </div>
                                    <Headset size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - 3D Element */}
                        <div className="hidden lg:block w-full flex items-center justify-center h-full">
                            <div className="flex items-center justify-center h-[400px] lg:h-[500px] w-full">
                                <div className="relative">
                                    <Image
                                        src="/images/3d-element.svg"
                                        width={800}
                                        height={800}
                                        alt="Hero 3D Element"
                                        className="w-[350px] md:w-[550px] lg:w-[650px] drop-shadow-2xl animate-float-slow hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse-slow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}