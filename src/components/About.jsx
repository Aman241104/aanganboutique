import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    // Variants for stagger effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <section id="about" className="py-24 md:py-32 bg-cream relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #800020 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Creative Logo Showcase */}
                    <div className="w-full lg:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                            {/* Animated Background Blob */}
                            <motion.div 
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, -5, 0],
                                    borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                                }}
                                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gold-100/50 mix-blend-multiply"
                            ></motion.div>
                            
                            {/* Decorative Frame Elements */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="absolute top-4 right-4 w-32 h-32 border-t border-r border-maroon-900/40 z-0"
                            ></motion.div>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="absolute bottom-4 left-4 w-32 h-32 border-b border-l border-gold-500/40 z-0"
                            ></motion.div>

                            {/* Floating Glass Container */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 bg-white/80 backdrop-blur-xl p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2rem] border border-white"
                            >
                                <img
                                    src="/Logo.webp"
                                    alt="Aangan Boutique Logo"
                                    className="w-full h-auto object-contain drop-shadow-sm"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div variants={itemVariants} className="flex items-center gap-4 justify-center lg:justify-start mb-4">
                                <div className="w-12 h-px bg-gold-500"></div>
                                <h3 className="text-gold-600 tracking-[0.2em] uppercase text-xs font-bold">Our Heritage</h3>
                                <div className="w-12 h-px bg-gold-500 lg:hidden"></div>
                            </motion.div>
                            
                            <motion.h2 variants={itemVariants} className="font-serif text-4xl lg:text-5xl text-maroon-900 mb-8 leading-tight">
                                Where Tradition Meets <br/>
                                <span className="italic text-gold-600 font-light">Modern Elegance</span>
                            </motion.h2>
                            
                            <motion.div variants={itemVariants}>
                                <p className="text-gray-600 leading-relaxed text-lg font-light mb-6">
                                    Aangan Boutique is a multi-designer store located at Sindhubhavan Road, Ahmedabad, offering thoughtfully curated Indian, ethnic, Indo-western and contemporary designer wear.
                                    Rooted in Indian tradition yet styled for the modern global woman, we design outfits for every story — from weddings to grand family gatherings.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-lg font-light mb-10">
                                    Every piece at Aangan reflects premium craftsmanship, refined fabrics, and elegant detailing, paired with personalised styling to ensure you feel confident, graceful, and effortlessly distinguished.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
                                {[
                                    "Premium Fabrics",
                                    "Artisanal Embroidery",
                                    "Custom Fittings",
                                    "Expert Styling"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm font-medium text-maroon-900 group">
                                        <div className="w-8 h-px bg-gold-300 group-hover:bg-maroon-900 transition-colors duration-300"></div>
                                        <span className="tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <button
                                    onClick={() => window.open('https://www.instagram.com/_aanganboutique_/', '_blank')}
                                    className="group relative overflow-hidden border border-maroon-900 text-maroon-900 px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-colors duration-500 hover:text-white"
                                >
                                    <span className="relative z-10">Discover More</span>
                                    <div className="absolute inset-0 bg-maroon-900 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.22,1,0.36,1] -z-0"></div>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
