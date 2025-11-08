'use client';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="border-b border-zinc-800">
                <div className="container mx-auto max-w-4xl px-6 py-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors duration-300 mb-6"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center">
                            <Shield size={24} className="text-primary" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
                            <p className="text-zinc-400">Last updated: January 2025</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-4xl px-6 py-12">
                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Welcome to Nivro Technologies ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">2.1 Personal Information</h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    We may collect personal information that you voluntarily provide to us when you:
                                </p>
                                <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4 mt-2">
                                    <li>Register for an account or use our services</li>
                                    <li>Contact us through forms, email, or other communication methods</li>
                                    <li>Subscribe to our newsletter or marketing communications</li>
                                    <li>Participate in surveys, contests, or promotions</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">2.2 Automatically Collected Information</h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    When you visit our website, we automatically collect certain information about your device, including:
                                </p>
                                <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4 mt-2">
                                    <li>IP address and location data</li>
                                    <li>Browser type and version</li>
                                    <li>Operating system</li>
                                    <li>Pages visited and time spent on pages</li>
                                    <li>Referring website addresses</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send you technical notices, updates, and support messages</li>
                            <li>Respond to your comments, questions, and requests</li>
                            <li>Send you marketing communications (with your consent)</li>
                            <li>Monitor and analyze trends, usage, and activities</li>
                            <li>Detect, prevent, and address technical issues and security threats</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
                            <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                            <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities</li>
                            <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition</li>
                            <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Depending on your location, you may have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
                            <li>Access and receive a copy of your personal data</li>
                            <li>Rectify inaccurate or incomplete data</li>
                            <li>Request deletion of your personal data</li>
                            <li>Object to processing of your personal data</li>
                            <li>Request restriction of processing</li>
                            <li>Data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For more information, please see our <Link href="/cookies" className="text-primary hover:underline">Cookies Policy</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                            <p className="text-white font-semibold">Nivro Technologies</p>
                            <p className="text-zinc-300">Email: privacy@nivrotechnologies.com</p>
                            <p className="text-zinc-300">Website: <Link href="/" className="text-primary hover:underline">nivrotechnologies.com</Link></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

