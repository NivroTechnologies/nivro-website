'use client';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="border-b border-zinc-800">
                <div className="container mx-auto max-w-4xl px-6 py-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors duration-300 mb-6 z-20"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center">
                            <FileText size={24} className="text-primary" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Terms of Service</h1>
                            <p className="text-zinc-400">Last updated: January 2025</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-4xl px-6 py-12">
                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            By accessing or using the services provided by Nivro Technologies ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Nivro Technologies provides web and mobile application development, custom software solutions, and related technology services. Our services include but are not limited to:
                        </p>
                        <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
                            <li>Website development and design</li>
                            <li>Mobile application development (iOS and Android)</li>
                            <li>Custom software development</li>
                            <li>CRM and business software solutions</li>
                            <li>E-commerce platform development</li>
                            <li>Cloud infrastructure and deployment</li>
                            <li>Technical support and maintenance</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
                        <div className="space-y-4">
                            <p className="text-zinc-300 leading-relaxed">
                                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:
                            </p>
                            <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
                                <li>Maintaining the security of your account and password</li>
                                <li>All activities that occur under your account</li>
                                <li>Notifying us immediately of any unauthorized use</li>
                                <li>Ensuring that your account information is kept up to date</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">4.1 Pricing</h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    All prices for our services are as quoted on our website or in written proposals. Prices are subject to change without notice, but changes will not affect projects already in progress.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">4.2 Payment</h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    Payment terms will be specified in individual project agreements. Generally, we require a deposit before beginning work, with remaining payments due according to project milestones or upon completion.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">4.3 Refunds</h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    Refund policies will be outlined in individual service agreements. Custom development projects are generally non-refundable once work has commenced, except as specified in the project agreement.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">5.1 Our Intellectual Property</h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by Nivro Technologies and are protected by international copyright, trademark, and other intellectual property laws.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">5.2 Client Intellectual Property</h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    Upon full payment, ownership of custom-developed software and deliverables will transfer to the client as specified in the project agreement. We retain the right to use general knowledge, skills, and experience gained during project execution.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Prohibited Uses</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You agree not to use our services:
                        </p>
                        <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
                            <li>In any way that violates any applicable law or regulation</li>
                            <li>To transmit any malicious code, viruses, or harmful materials</li>
                            <li>To impersonate or attempt to impersonate us or our employees</li>
                            <li>To engage in any automated use of the system</li>
                            <li>To interfere with or disrupt the services or servers</li>
                            <li>To collect or harvest any information from the services</li>
                            <li>For any purpose that is illegal or prohibited by these Terms</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Service Availability</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We strive to provide reliable services but do not guarantee that our services will be available at all times. We may experience downtime due to maintenance, updates, or unforeseen circumstances. We are not liable for any loss or damage resulting from service unavailability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            To the maximum extent permitted by law, Nivro Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                        </p>
                        <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
                            <li>Your use or inability to use our services</li>
                            <li>Any unauthorized access to or use of our servers</li>
                            <li>Any interruption or cessation of transmission to or from our services</li>
                            <li>Any bugs, viruses, or other harmful code</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            You agree to defend, indemnify, and hold harmless Nivro Technologies and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our services or violation of these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the services will immediately cease.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the appropriate courts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. Your continued use of our services after any changes constitutes acceptance of the new Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <div className="mt-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                            <p className="text-white font-semibold">Nivro Technologies</p>
                            <p className="text-zinc-300">Email: legal@nivrotechnologies.com</p>
                            <p className="text-zinc-300">Website: <Link href="/" className="text-primary hover:underline">nivrotechnologies.com</Link></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

