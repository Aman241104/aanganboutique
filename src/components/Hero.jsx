import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section id="hero" ref={containerRef} className="relative min-h-screen w-full bg-[#FDFBF7] overflow-hidden pt-32 pb-20">
            {/* Grainy Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Column: Typography & Story */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <motion.div style={{ opacity }}>
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="inline-block text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold mb-6"
                            >
                                Multi-Designer Boutique
                            </motion.span>
                            
                            <h1 className="font-serif text-[15vw] lg:text-[7vw] leading-[0.9] text-maroon-900 tracking-tighter mb-8">
                                <span className="block overflow-hidden">
                                    <motion.span 
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                        className="inline-block"
                                    >
                                        AANGAN
                                    </motion.span>
                                </span>
                                <span className="block overflow-hidden italic font-light text-gold-600 mt-2">
                                    <motion.span 
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                        className="inline-block"
                                    >
                                        Boutique
                                    </motion.span>
                                </span>
                            </h1>

                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-md"
                            >
                                Curated ethnic, Indo-western and wedding wear crafted for timeless elegance. Redefining luxury in the heart of Ahmedabad.
                            </motion.p>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                className="flex flex-wrap gap-8 items-center"
                            >
                                <a href="#products" className="group relative flex items-center gap-4 text-maroon-900 font-bold uppercase tracking-widest text-xs">
                                    <span className="relative">
                                        Explore Collection
                                        <span className="absolute -bottom-2 left-0 w-full h-px bg-maroon-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                    </span>
                                    <div className="w-10 h-10 rounded-full border border-maroon-900/20 flex items-center justify-center group-hover:bg-maroon-900 group-hover:text-white transition-all duration-500">
                                        <ArrowRight size={16} />
                                    </div>
                                </a>
                                
                                <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
                                
                                <a href="#booking" className="text-gray-400 hover:text-maroon-900 transition-colors uppercase tracking-widest text-[10px] font-bold">
                                    Book Appointment
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual Composition */}
                    <div className="lg:col-span-7 order-1 lg:order-2 relative">
                        <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3] w-full">
                            
                            {/* Main High-End Image */}
                            <motion.div 
                                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute top-0 right-0 w-4/5 h-full rounded-[2rem] overflow-hidden shadow-2xl z-20"
                            >
                                <motion.img 
                                    style={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 2 }}
                                    src="/drive_images/optimized/784a4393.webp" 
                                    alt="Luxury Collection" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-maroon-900/10 mix-blend-multiply"></div>
                            </motion.div>

                            {/* Overlapping Video Window */}
                            <motion.div 
                                style={{ y: y1 }}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute bottom-[10%] left-0 w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-30 border-[12px] border-white"
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/hero-video-opt.mp4" type="video/mp4" />
                                </video>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div 
                                style={{ y: y2 }}
                                className="absolute -top-16 -right-16 w-64 h-64 border border-gold-400/20 rounded-full z-10 pointer-events-none"
                            ></motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}
                                className="absolute -bottom-8 -right-8 z-40 flex flex-col items-center justify-center bg-[#FDFBF7] p-10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gold-100 group hover:border-gold-300 transition-colors"
                            >
                                <span className="text-maroon-900 font-serif text-3xl italic leading-none group-hover:text-gold-600 transition-colors">Est.</span>
                                <div className="w-12 h-px bg-gold-200 my-3"></div>
                                <span className="text-gold-600 font-bold tracking-[0.3em] text-sm uppercase">2024</span>
                                
                                {/* Orbital Ring */}
                                <div className="absolute inset-0 border border-gold-400/10 rounded-full animate-spin-slow m-2"></div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Vertical Socials/Nav */}
            <div className="absolute left-8 bottom-12 hidden lg:flex flex-col gap-6 items-center z-20">
                <div className="w-px h-20 bg-gray-200"></div>
                <a href="https://instagram.com/_aanganboutique_" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-gold-600 transition-colors -rotate-90 origin-center whitespace-nowrap">Instagram</a>
            </div>
            
            <div className="absolute right-12 bottom-12 hidden lg:block z-20">
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-4"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
