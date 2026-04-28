import React from 'react';
import { Facebook, Instagram, Mail, ArrowRight, ShieldCheck, Globe, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-[#080808] text-white relative overflow-hidden">
            {/* Cinematic Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold-900/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-20 relative z-10 pt-32 pb-12">
                
                {/* Grand Newsletter Section */}
                <div className="max-w-4xl mx-auto text-center mb-32 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="text-gold-500 uppercase tracking-[0.5em] text-[10px] font-bold block">The Inner Circle</span>
                        <h2 className="text-white font-serif text-4xl md:text-6xl leading-tight">
                            Subscribe for <span className="italic font-light text-gold-400">Exclusives</span>
                        </h2>
                        <p className="text-gray-500 text-lg font-light max-w-xl mx-auto leading-relaxed">
                            Be the first to experience our latest couture collections and private atelier updates.
                        </p>
                    </motion.div>

                    <motion.form 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-2xl mx-auto group"
                    >
                        <input
                            type="email"
                            placeholder="YOUR DIGITAL ADDRESS"
                            className="w-full bg-transparent border-b-2 border-white/10 text-white py-6 px-4 text-sm tracking-[0.2em] uppercase focus:border-gold-500 focus:outline-none transition-all placeholder:text-gray-700 text-center"
                        />
                        <button className="mt-8 flex items-center justify-center gap-3 mx-auto text-gold-500 hover:text-white transition-all uppercase tracking-[0.4em] text-[10px] font-bold group-hover:gap-5">
                            Join Now <ArrowRight size={18} />
                        </button>
                    </motion.form>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 border-t border-white/5 pt-20">

                    {/* Brand Identity Column */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="space-y-6">
                            <img
                                src="/Logo.webp"
                                alt="Aangan Boutique"
                                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
                            />
                            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
                                "Courtyard of Style and Elegance" — where centuries-old Indian artistry meets the vision of modern luxury.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={20} />, url: 'https://www.instagram.com/_aanganboutique_/', label: 'Instagram' },
                                { icon: <Facebook size={20} />, url: 'https://www.facebook.com/aanganboutique.abad', label: 'Facebook' },
                                { icon: <Mail size={20} />, url: 'mailto:hello@aanganboutique.com', label: 'Email' }
                            ].map((social, idx) => (
                                <motion.a 
                                    key={idx}
                                    whileHover={{ y: -3, color: '#C5A059' }}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-gold-500/50 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-12">
                        <div className="space-y-8">
                            <h3 className="text-gold-500 uppercase tracking-[0.4em] text-[10px] font-bold">Collections</h3>
                            <ul className="space-y-4">
                                {['New Arrivals', 'Bridal Couture', 'Indo-Western', 'Our Heritage'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-500 hover:text-white transition-all text-xs font-light tracking-wide inline-block">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-gold-500 uppercase tracking-[0.4em] text-[10px] font-bold">Concierge</h3>
                            <ul className="space-y-4">
                                {['Private Styling', 'Virtual Visit', 'Shipping info', 'Privacy Policy'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-500 hover:text-white transition-all text-xs font-light tracking-wide inline-block">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1 space-y-8">
                            <h3 className="text-gold-500 uppercase tracking-[0.4em] text-[10px] font-bold">Contact</h3>
                            <div className="space-y-4 text-xs text-gray-500 font-light leading-relaxed">
                                <p className="flex items-start gap-3">
                                    <MapPin size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                                    <span>Sindhu Bhavan Marg, Ahmedabad</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Phone size={14} className="text-gold-500 flex-shrink-0" />
                                    <span>+91 98765 43210</span>
                                </p>
                                <div className="pt-4 flex items-center gap-6">
                                    <ShieldCheck size={18} className="text-gold-500/30" />
                                    <Globe size={18} className="text-gold-500/30" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Refined Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-gray-600 font-medium">
                    <p>© {new Date().getFullYear()} AANGAN BOUTIQUE. All Rights Reserved.</p>
                    <div className="flex gap-12">
                        <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gold-500 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>

            {/* Accent Elements */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-maroon-900/5 rounded-full blur-[100px] pointer-events-none"></div>
        </footer>
    );
};

export default Footer;

