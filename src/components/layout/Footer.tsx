import Link from "next/link";
import { Button } from "../ui/Button";

export const Footer = () => {
    return (
        <footer className="bg-hugo-black text-white pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-bold tracking-tight text-white">
                            gigmote<span className="text-hugo-gold">.</span>
                        </Link>
                        <p className="text-white/60 leading-relaxed">
                            Traditional outsourcing focuses on cost. We focus on performance, reliability, and scalability.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-hugo-gold hover:text-hugo-black transition-colors flex items-center justify-center cursor-pointer">IG</div>
                            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-hugo-gold hover:text-hugo-black transition-colors flex items-center justify-center cursor-pointer">LN</div>
                            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-hugo-gold hover:text-hugo-black transition-colors flex items-center justify-center cursor-pointer">TW</div>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/services/customer-support" className="hover:text-white transition-colors">Customer Support</Link></li>
                            <li><Link href="/services/trust-safety" className="hover:text-white transition-colors">Trust & Safety</Link></li>
                            <li><Link href="/services/data-ai" className="hover:text-white transition-colors">Data & AI</Link></li>
                            <li><Link href="/services/digital-operations" className="hover:text-white transition-colors">Digital Operations</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA — clone-style */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold">Stay in the loop</h4>
                        <p className="text-white/60 text-base">Join our newsletter for the latest insights on scaling global teams.</p>
                        <div className="flex gap-3">
                            <input
                                placeholder="Enter your email"
                                className="bg-white/10 border-2 border-white/10 rounded-full px-5 py-3 text-base text-white placeholder:text-white/50 focus:outline-none focus:border-hugo-gold w-full"
                            />
                            <Button size="sm" variant="secondary" className="shrink-0 font-bold">Go</Button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© 2024 Gigmote Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
