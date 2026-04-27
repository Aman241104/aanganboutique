import React from 'react';
import { motion } from 'framer-motion';

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
        <section id="about" className="py-24 md:py-40 bg-[#FDFBF7] relative overflow-hidden">
            {/* Architectural Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.01] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800020' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
            
            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Side: The Editorial Composition */}
                    <div className="lg:col-span-6 relative order-2 lg:order-1">
                        <div className="relative w-full aspect-[3/4] md:aspect-[4/5] flex items-center justify-center">
                            
                            {/* Background "Ghost" Typography */}
                            <div className="absolute -left-12 -top-12 opacity-5 select-none hidden md:block">
                                <span className="font-serif text-[20vw] leading-none text-maroon-900 font-bold uppercase tracking-tighter">HERITAGE</span>
                            </div>

                            {/* Main Frame: High-Fashion Portrait */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2 }}
                                className="relative w-[85%] h-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] z-10"
                            >
                                <img 
                                    src="/drive_images/optimized/784a4374.webp" 
                                    alt="Luxury Craftsmanship" 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-maroon-900/5 mix-blend-multiply"></div>
                            </motion.div>

                            {/* Overlapping Glass Detail Card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute -bottom-10 -right-4 md:-right-12 w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-20 border-[12px] border-white group"
                            >
                                <img 
                                    src="/drive_images/optimized/copy_of_0d2a8385_1.webp" 
                                    alt="Detail Work" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </motion.div>

                            {/* Subtle Logo Signature */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.4 }}
                                transition={{ delay: 1.5 }}
                                className="absolute -top-10 -left-10 w-48 h-48 pointer-events-none z-0 rotate-[-15deg]"
                            >
                                <img src="/Logo.webp" alt="" className="w-full h-full object-contain grayscale" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: The Narrative */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-px bg-gold-500"></div>
                                <h3 className="text-gold-600 tracking-[0.4em] uppercase text-[10px] font-bold">The Aangan Philosophy</h3>
                            </motion.div>
                            
                            <motion.h2 variants={itemVariants} className="font-serif text-5xl lg:text-[5.5vw] text-maroon-900 mb-10 leading-[0.9] tracking-tighter">
                                Where Tradition <br/>
                                <span className="italic font-light text-gold-600">Meets Modernity</span>
                            </motion.h2>
                            
                            <motion.div variants={itemVariants} className="space-y-8">
                                <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light max-w-xl">
                                    Aangan Boutique is a multi-designer sanctuary located at Sindhubhavan Road, Ahmedabad, offering thoughtfully curated ethnic and contemporary designer wear.
                                </p>
                                <p className="text-gray-500 leading-relaxed text-base font-light max-w-lg italic border-l-2 border-gold-400/30 pl-6">
                                    "Rooted in Indian tradition yet styled for the modern global woman, we design outfits for every story — from grand weddings to intimate celebrations."
                                </p>
                            </motion.div>

                            {/* Service Highlights: Blueprint Style */}
                            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-x-8 gap-y-12 mt-16 pt-12 border-t border-gray-100">
                                {[
                                    { label: "01", title: "Premium Fabrics", desc: "Hand-selected silks & weaves" },
                                    { label: "02", title: "Artisanal Detail", desc: "Meticulous hand-embroidery" },
                                    { label: "03", title: "Bespoke Fit", desc: "Precision custom tailoring" },
                                    { label: "04", title: "Expert Styling", desc: "Personal fashion consultation" }
                                ].map((item, idx) => (
                                    <div key={idx} className="group">
                                        <span className="block text-[10px] text-gold-500 font-bold mb-2 tracking-widest">{item.label}</span>
                                        <h4 className="text-sm font-bold text-maroon-900 uppercase tracking-widest mb-1 group-hover:text-gold-600 transition-colors">{item.title}</h4>
                                        <p className="text-gray-400 text-xs font-light">{item.desc}</p>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Call to Action */}
                            <motion.div variants={itemVariants} className="mt-20">
                                <a
                                    href="#collection-gallery"
                                    className="group relative inline-flex items-center gap-6 overflow-hidden"
                                >
                                    <div className="w-14 h-14 rounded-full border border-maroon-900/20 flex items-center justify-center group-hover:bg-maroon-900 transition-all duration-500">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-maroon-900 group-hover:text-white transition-colors">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-maroon-900 uppercase tracking-[0.4em] text-[10px] font-bold">Discover our Craft</span>
                                        <span className="text-gray-300 text-[8px] uppercase tracking-[0.2em] font-light">Explore Lookbook 2026</span>
                                    </div>
                                    
                                    {/* Hover Underline Animation */}
                                    <div className="absolute bottom-0 right-0 w-0 h-px bg-gold-400 transition-all duration-500 group-hover:w-1/2"></div>
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
