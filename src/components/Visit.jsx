import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { whatsappUrl } from '../lib/whatsapp';

const Visit = () => {
    const mapUrl = "https://www.google.com/maps/dir//Aangan+Boutique,+1st+floor,+K-158,+Sindhu+Bhavan+Marg,+Bodakdev,+Ahmedabad,+Gujarat+380054/@23.0404119,72.5047619,17z/";

    return (
        <section id="visit" className="relative bg-[#0A0A0A] text-white overflow-hidden py-24 md:py-40">
            {/* Cinematic Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-maroon-900/10 rounded-full blur-[100px] -ml-64 -mb-64 pointer-events-none opacity-30"></div>
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 max-w-2xl"
                >
                    <span className="text-gold-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Visit The Atelier</span>
                    <h2 className="font-serif text-5xl md:text-7xl mb-8 tracking-tighter leading-none">
                        We'd Love to <br />
                        <span className="italic font-light text-gold-400">Hear From You</span>
                    </h2>
                    <p className="text-gray-400 font-light leading-relaxed text-lg">
                        Visiting soon, or planning from abroad — either way, it begins with a conversation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 relative h-[400px] md:h-[480px] rounded-[3rem] overflow-hidden border border-white/10 group"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5466577770826!2d72.50476189999999!3d23.040411899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b87f736f243%3A0x7358857d286d18b4!2sAangan%20Boutique!5e0!3m2!1sen!2sin!4v1769489338146!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: 'invert(90%) hue-rotate(160deg) brightness(85%) contrast(110%) saturate(20%) sepia(20%)'
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Aangan Boutique Location"
                            className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
                        ></iframe>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Live Location</span>
                        </div>
                        <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-3 bg-white text-maroon-950 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold-500 hover:text-white transition-all duration-500"
                        >
                            <Navigation size={16} /> Get Directions
                        </a>
                    </motion.div>

                    {/* Info */}
                    <div className="lg:col-span-5 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3 text-gold-500/40 font-bold tracking-widest uppercase text-[9px]">
                                <MapPin size={14} /> The Studio Location
                            </div>
                            <p className="text-white text-lg font-serif leading-relaxed">
                                Aangan Boutique, 1st floor, K-158,<br />
                                Sindhu Bhavan Marg, Bodakdev,<br />
                                Ahmedabad, Gujarat 380054
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-4 pt-8 border-t border-white/5"
                        >
                            <div className="flex items-center gap-3 text-gold-500/40 font-bold tracking-widest uppercase text-[9px]">
                                <Clock size={14} /> Visiting Hours
                            </div>
                            <p className="text-white text-lg font-serif">Mon – Sat: 11:00 AM – 8:00 PM</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 pt-8 border-t border-white/5"
                        >
                            <div className="flex items-center gap-3 text-gold-500/40 font-bold tracking-widest uppercase text-[9px]">
                                <Phone size={14} /> Direct Concierge
                            </div>
                            <a href="tel:+917948923535" className="text-white text-3xl font-serif hover:text-gold-500 transition-colors block tracking-tighter">
                                +91 79489 23535
                            </a>
                            <a
                                href={whatsappUrl("Hi! I came across Aangan Boutique and would like to explore your collection.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gold-400 hover:text-white transition-all text-xs font-bold uppercase tracking-[0.2em] group w-fit"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.623 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                </div>
                                Chat on WhatsApp
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-between pt-8 border-t border-white/5"
                        >
                            <a href="mailto:hello@aanganboutique.com" className="text-white text-sm font-serif hover:text-gold-500 transition-colors flex items-center gap-3">
                                <Mail size={14} className="text-gold-500/40" /> hello@aanganboutique.com
                            </a>
                            <div className="flex gap-3">
                                <a href="https://www.instagram.com/_aanganboutique_/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-maroon-950 transition-all duration-500">
                                    <Instagram size={18} />
                                </a>
                                <a href="https://www.facebook.com/aanganboutique.abad" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-maroon-950 transition-all duration-500">
                                    <Facebook size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Visit;
