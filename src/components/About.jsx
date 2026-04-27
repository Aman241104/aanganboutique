import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    // Variants for staggered entry
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <section id="about" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Editorial Image Grid (Asymmetrical) */}
                    <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px]">
                        {/* Main Vertical Image */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="absolute top-0 left-0 w-3/4 h-[90%] rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
                        >
                            <img 
                                src="/drive_images/optimized/784a4374.webp" 
                                alt="Heritage Craft" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-maroon-900/5 mix-blend-multiply"></div>
                        </motion.div>

                        {/* Overlapping Secondary Image */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute bottom-4 right-0 w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-20 border-[8px] border-white"
                        >
                            <img 
                                src="/drive_images/optimized/copy_of_0d2a8385_1.webp" 
                                alt="Modern Elegance" 
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Vertical Year Tag */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            className="absolute -left-8 top-1/2 -translate-y-1/2 vertical-text flex flex-col items-center gap-6"
                        >
                            <span className="text-gold-500 text-[10px] uppercase tracking-[0.5em] font-bold rotate-90">ESTABLISHED</span>
                            <div className="w-px h-24 bg-gold-400/30"></div>
                            <span className="text-maroon-900 font-serif text-2xl rotate-90">2024</span>
                        </motion.div>

                        {/* Subtle Logo Watermark */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.15 }}
                            className="absolute -bottom-10 -left-10 w-64 h-64 pointer-events-none"
                        >
                            <img src="/Logo1.png" alt="" className="w-full h-full object-contain grayscale" />
                        </motion.div>
                    </div>

                    {/* Narrative Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative"
                        >
                            {/* Vertical Section Label */}
                            <div className="absolute -left-12 top-0 hidden xl:block">
                                <span className="text-gold-400 text-[10px] uppercase tracking-[0.8em] font-bold rotate-90 origin-left inline-block">OUR STORY</span>
                            </div>

                            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-px bg-gold-500"></div>
                                <h3 className="text-gold-600 tracking-[0.3em] uppercase text-[10px] font-bold">The Heritage</h3>
                            </motion.div>
                            
                            <motion.h2 variants={itemVariants} className="font-serif text-4xl lg:text-7xl text-maroon-900 mb-10 leading-[1.1] tracking-tight">
                                Where Tradition <br/>
                                <span className="italic font-light text-gold-600">Meets Modernity</span>
                            </motion.h2>
                            
                            <motion.div variants={itemVariants} className="space-y-8">
                                <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light max-w-2xl">
                                    Aangan Boutique is a multi-designer sanctuary located at Sindhubhavan Road, Ahmedabad, offering thoughtfully curated ethnic and contemporary designer wear.
                                </p>
                                <p className="text-gray-500 leading-relaxed text-base font-light max-w-xl">
                                    Rooted in Indian tradition yet styled for the modern global woman, we design outfits for every story — from grand weddings to intimate celebrations. Every piece reflects premium craftsmanship, refined fabrics, and elegant detailing.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-y-8 gap-x-4 mt-16 text-left max-w-md">
                                {[
                                    { label: "Premium Fabrics", desc: "Hand-selected silks & weaves" },
                                    { label: "Artisanal Detail", desc: "Meticulous hand-embroidery" },
                                    { label: "Bespoke Fit", desc: "Precision custom tailoring" },
                                    { label: "Curated Style", desc: "Expert fashion consultation" }
                                ].map((item, idx) => (
                                    <div key={idx} className="group cursor-default">
                                        <div className="flex items-center gap-3 text-maroon-900 mb-2">
                                            <div className="w-6 h-px bg-gold-400 group-hover:w-10 transition-all duration-300"></div>
                                            <span className="text-sm font-bold tracking-wide uppercase">{item.label}</span>
                                        </div>
                                        <p className="text-gray-400 text-xs font-light pl-9">{item.desc}</p>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div variants={itemVariants} className="mt-16">
                                <a
                                    href="https://www.instagram.com/_aanganboutique_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-6"
                                >
                                    <div className="w-16 h-16 rounded-full border border-gold-300 flex items-center justify-center group-hover:bg-maroon-900 group-hover:border-maroon-900 transition-all duration-500">
                                        <motion.div 
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-maroon-900 group-hover:text-white transition-colors">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </motion.div>
                                    </div>
                                    <span className="text-maroon-900 uppercase tracking-[0.3em] text-[10px] font-bold">Discover our Lookbook</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
