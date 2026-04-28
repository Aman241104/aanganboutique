import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="relative bg-[#0A0A0A] text-white overflow-hidden py-24 md:py-48">
            {/* Cinematic Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-maroon-900/10 rounded-full blur-[100px] -ml-64 -mb-64 pointer-events-none opacity-30"></div>
            
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
                    
                    {/* Visual: Editorial Portrait Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="w-full lg:w-5/12 relative group"
                    >
                        <div className="relative aspect-[4/5] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10">
                            <img 
                                src="/drive_images/optimized/copy_of_0d2a7949_1.webp" 
                                alt="Aangan Boutique Interior" 
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 via-transparent to-transparent"></div>
                            
                            {/* Glass Visit Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.a
                                    href="#map"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="glass px-12 py-10 rounded-blob-1 border border-white/20 backdrop-blur-2xl shadow-2xl flex flex-col items-center gap-4 group/btn cursor-pointer no-underline"
                                >
                                    <h2 className="font-serif text-5xl text-white tracking-tighter">Visit Us</h2>
                                    <div className="flex items-center gap-2 text-gold-400 text-[10px] font-bold uppercase tracking-[0.4em] translate-y-2 opacity-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100 transition-all duration-500">
                                        Open Map <ArrowUpRight size={14} />
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                        
                        {/* Decorative Floating Frame */}
                        <div className="absolute -inset-4 border border-gold-500/10 rounded-[4rem] md:rounded-[6rem] -z-10 group-hover:scale-105 transition-transform duration-1000"></div>
                    </motion.div>

                    {/* Content: Narrative Information Side */}
                    <div className="w-full lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-20"
                        >
                            <span className="text-gold-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">Get In Touch</span>
                            <h2 className="font-serif text-5xl md:text-8xl mb-10 tracking-tighter leading-none">
                                We'd Love to <br />
                                <span className="italic font-light text-gold-400">Hear From You</span>
                            </h2>
                            <p className="text-gray-400 font-light leading-relaxed max-w-xl text-xl">
                                Deeply rooted in tradition, yet open to the world. Step into our studio for a journey through the finest Indian couture.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Address & Hours Column */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-12"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gold-500/40 font-bold tracking-widest uppercase text-[9px]">
                                        <MapPin size={14} /> The Studio Location
                                    </div>
                                    <p className="text-white text-lg font-serif leading-relaxed">
                                        Aangan Boutique, 1st floor, K-158,<br />
                                        Sindhu Bhavan Marg, Bodakdev,<br />
                                        Ahmedabad, Gujarat 380054
                                    </p>
                                </div>
                                
                                <div className="space-y-4 pt-8 border-t border-white/5">
                                    <div className="flex items-center gap-3 text-gold-500/40 font-bold tracking-widest uppercase text-[9px]">
                                        <Clock size={14} /> Visiting Hours
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-white text-lg font-serif">Mon - Sat: 11:00 AM - 08:00 PM</p>
                                        <p className="text-gold-500/80 text-lg font-serif italic">Sun: 04:00 PM - 08:00 PM</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Direct Contact & Social Column */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="space-y-12"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gold-500/40 font-bold tracking-widest uppercase text-[9px]">
                                        <Phone size={14} /> Direct Concierge
                                    </div>
                                    <a href="tel:+917948923535" className="text-white text-3xl md:text-4xl font-serif hover:text-gold-500 transition-colors block tracking-tighter">
                                        +91 79 4892 3535
                                    </a>
                                </div>

                                <div className="space-y-4 pt-8 border-t border-white/5">
                                    <div className="flex items-center gap-3 text-gold-500/40 font-bold tracking-widest uppercase text-[9px]">
                                        <Mail size={14} /> Digital Inquiry
                                    </div>
                                    <a href="mailto:hello@aanganboutique.com" className="text-white text-xl font-serif hover:text-gold-500 transition-colors block pb-2 border-b border-white/10 w-fit">
                                        hello@aanganboutique.com
                                    </a>
                                </div>

                                {/* Social Ecosystem */}
                                <div className="pt-8">
                                    <div className="text-gold-500/40 font-bold tracking-widest uppercase text-[9px] mb-6">Social Ecosystem</div>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-maroon-950 transition-all duration-500 shadow-xl group">
                                            <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                                        </a>
                                        <a href="#" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-maroon-950 transition-all duration-500 shadow-xl group">
                                            <Facebook size={24} className="group-hover:scale-110 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
