import React, { useState } from 'react';
import { Facebook, Instagram, Mail, ArrowRight, ShieldCheck, Globe, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { whatsappUrl } from '../lib/whatsapp';
import { sendNotificationEmail } from '../lib/email';

const Footer = () => {
    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [subscribePhone, setSubscribePhone] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        const message = `Hi! I'd like to join the Aangan Boutique inner circle for exclusives.\n\nEmail: ${subscribeEmail}\nPhone: ${subscribePhone}`;
        window.open(whatsappUrl(message), '_blank');
        sendNotificationEmail({
            type: 'Newsletter Subscription',
            name: '—',
            email: subscribeEmail,
            phone: subscribePhone,
            city_country: '—',
            occasion: '—',
            date: '—',
            time_slot: '—',
            message,
        });
    };

    return (
        <footer className="bg-[#FDFBF7] text-maroon-900 relative overflow-hidden border-t border-gray-100">
            {/* Cinematic Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold-100/40 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-20 relative z-10 pt-20 md:pt-32 pb-12">

                {/* Grand Newsletter Section */}
                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32 space-y-10 md:space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="text-gold-600 uppercase tracking-[0.5em] text-[10px] font-bold block">The Inner Circle</span>
                        <h2 className="text-maroon-900 font-serif text-3xl md:text-6xl leading-tight">
                            Subscribe for <span className="italic font-light text-gold-600">Exclusives</span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
                            Be the first to experience our latest couture collections and private atelier updates.
                        </p>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubscribe}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-2xl mx-auto group"
                    >
                        <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
                            <input
                                type="email"
                                required
                                value={subscribeEmail}
                                onChange={(e) => setSubscribeEmail(e.target.value)}
                                placeholder="YOUR EMAIL ADDRESS"
                                className="w-full bg-transparent border-b-2 border-maroon-900/10 text-maroon-900 py-5 md:py-6 px-4 text-sm tracking-[0.2em] uppercase focus:border-gold-500 focus:outline-none transition-all placeholder:text-gray-400 text-center"
                            />
                            <input
                                type="tel"
                                required
                                value={subscribePhone}
                                onChange={(e) => setSubscribePhone(e.target.value)}
                                placeholder="YOUR MOBILE NUMBER"
                                className="w-full bg-transparent border-b-2 border-maroon-900/10 text-maroon-900 py-5 md:py-6 px-4 text-sm tracking-[0.2em] uppercase focus:border-gold-500 focus:outline-none transition-all placeholder:text-gray-400 text-center"
                            />
                        </div>
                        <button type="submit" className="mt-8 flex items-center justify-center gap-3 mx-auto text-maroon-900 hover:text-gold-600 transition-all uppercase tracking-[0.4em] text-[10px] font-bold group-hover:gap-5">
                            Join Now <ArrowRight size={18} />
                        </button>
                    </motion.form>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 md:mb-32 border-t border-gray-100 pt-16 md:pt-20">

                    {/* Brand Identity Column */}
                    <div className="lg:col-span-4 space-y-8 md:space-y-10">
                        <div className="space-y-6">
                            <img
                                src="/Logo.webp"
                                alt="Aangan Boutique"
                                className="h-12 w-auto object-contain"
                            />
                            <p className="text-gray-600 text-sm font-light leading-relaxed max-w-xs">
                                "Courtyard of Style and Elegance" — where centuries-old Indian artistry meets the vision of modern luxury.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={20} />, url: 'https://www.instagram.com/_aanganboutique_/', label: 'Instagram' },
                                { icon: <Facebook size={20} />, url: 'https://www.facebook.com/aanganboutique.abad', label: 'Facebook' },
                                { icon: <Mail size={20} />, url: 'mailto:Aanganboutique2018@gmail.com', label: 'Email' }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    whileHover={{ y: -3, color: '#B08A3E' }}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gold-500/60 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:pl-12">
                        <div className="space-y-8">
                            <h3 className="text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold">Collections</h3>
                            <ul className="space-y-4">
                                {[
                                    { name: 'New Arrivals', href: '#collections' },
                                    { name: 'Bridal Couture', href: '#collections' },
                                    { name: 'Indo-Western', href: '#collections' },
                                    { name: 'Our Heritage', href: '#about' },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-gray-500 hover:text-maroon-900 transition-all text-xs font-light tracking-wide inline-block">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold">Concierge</h3>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Private Styling', href: '#visit' },
                                    { name: 'Virtual Visit', href: '#visit' },
                                    { name: 'Book a Slot', href: '#visit' },
                                    { name: 'Reviews', href: '#testimonials' },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-gray-500 hover:text-maroon-900 transition-all text-xs font-light tracking-wide inline-block">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1 space-y-8">
                            <h3 className="text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold">Contact</h3>
                            <div className="space-y-4 text-xs text-gray-500 font-light leading-relaxed">
                                <p className="flex items-start gap-3">
                                    <MapPin size={14} className="text-gold-600 mt-0.5 flex-shrink-0" />
                                    <span>Sindhu Bhavan Marg, Ahmedabad</span>
                                </p>
                                <a href="tel:+917948923535" className="flex items-center gap-3 hover:text-maroon-900 transition-colors">
                                    <Phone size={14} className="text-gold-600 flex-shrink-0" />
                                    <span>+91 79489 23535</span>
                                </a>
                                <a
                                    href={whatsappUrl("Hi! I came across Aangan Boutique and would like to explore your collection.")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-maroon-900 transition-colors text-[#25D366]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.623 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                    <span>WhatsApp Inquiry</span>
                                </a>
                                <div className="pt-4 flex items-center gap-6">
                                    <ShieldCheck size={18} className="text-gold-500/50" />
                                    <Globe size={18} className="text-gold-500/50" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Refined Bottom Bar */}
                <div className="pt-10 md:pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[9px] uppercase tracking-[0.4em] text-gray-500 font-medium text-center">
                    <p>© {new Date().getFullYear()} AANGAN BOUTIQUE. All Rights Reserved.</p>
                    <div className="flex gap-8 md:gap-12">
                        <a href="#" className="hover:text-gold-600 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gold-600 transition-colors">Privacy</a>
                        <a href="#hero" className="hover:text-gold-600 transition-colors">Home</a>
                    </div>
                </div>
            </div>

            {/* Accent Elements */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-maroon-900/5 rounded-full blur-[100px] pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
