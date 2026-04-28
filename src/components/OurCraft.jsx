import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Ruler, Sparkles, CheckCircle2, Award, Zap } from 'lucide-react';

const OurCraft = () => {
    const services = [
        {
            title: "Haute Couture Fitting",
            description: "Experience the legendary 'Aangan Fit'—where every curve is considered and every stitch is a testament to precision tailoring.",
            icon: <Scissors className="text-gold-500" size={24} />
        },
        {
            title: "Artisanal Embroidery",
            description: "Our master karigars spend hundreds of hours on single pieces, reviving ancient Zardosi and Resham techniques.",
            icon: <Sparkles className="text-gold-500" size={24} />
        },
        {
            title: "Private Curation",
            description: "Exclusive access to premium textile libraries and personalized motif design sessions with our creative directors.",
            icon: <Ruler className="text-gold-500" size={24} />
        }
    ];

    const stats = [
        { value: "500+", label: "Master Karigars" },
        { value: "12k+", label: "Heirloom Pieces" },
        { value: "15+", label: "Years of Legacy" }
    ];

    return (
        <section id="craft" className="py-24 md:py-40 bg-[#080808] text-white overflow-hidden relative">
            {/* Background Textures & Gradients */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
            
            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    
                    {/* Left: Imagery & Visual Storytelling */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative aspect-[4/5] md:aspect-square">
                            {/* Main Large Image */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full h-full rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 relative z-10"
                            >
                                <img 
                                    src="/drive_images/optimized/784a4396.webp" 
                                    alt="Artisan Craftsmanship" 
                                    className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                
                                {/* Overlay Content on Image */}
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-500/30 flex items-center justify-center text-gold-500">
                                            <Award size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gold-400 text-[10px] font-bold uppercase tracking-widest">Quality Benchmark</p>
                                            <p className="text-white font-serif text-lg">ISO 9001 Certified Artistry</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Secondary Image */}
                            <motion.div 
                                initial={{ x: 50, opacity: 0, rotate: 5 }}
                                whileInView={{ x: 0, opacity: 1, rotate: -2 }}
                                transition={{ delay: 0.4, duration: 1 }}
                                className="absolute -right-8 -bottom-12 w-1/2 aspect-square rounded-[2rem] overflow-hidden border-8 border-[#080808] shadow-2xl z-20 hidden md:block"
                            >
                                <img 
                                    src="/drive_images/optimized/784a4403.webp" 
                                    alt="Detail Shot" 
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold-600/10 rounded-full blur-[80px] z-0"></div>
                            <div className="absolute top-1/2 -right-24 w-64 h-64 bg-maroon-900/10 rounded-full blur-[100px] z-0"></div>
                        </div>
                    </div>

                    {/* Right: Narrative Content */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">The Atelier Standards</span>
                            <h2 className="font-serif text-4xl lg:text-7xl mb-10 leading-[1.1] tracking-tight">
                                Crafting <br />
                                <span className="italic font-light text-gold-400">Masterpieces</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-xl">
                                At Aangan, we don't just stitch fabric; we preserve heritage. Every needle-stroke is a conscious act of creation, blending centuries-old Indian artistry with contemporary precision.
                            </p>

                            {/* Service Pillars */}
                            <div className="space-y-10 mb-16">
                                {services.map((s, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6 group"
                                    >
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold-500/10 group-hover:border-gold-500/50 transition-all duration-500">
                                            {s.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold-400 transition-colors">{s.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed max-w-md">{s.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Atelier Stats */}
                            <div className="grid grid-cols-3 gap-8 py-8 border-t border-white/10">
                                {stats.map((stat, i) => (
                                    <div key={i}>
                                        <p className="text-3xl font-serif text-white mb-1">{stat.value}</p>
                                        <p className="text-gold-500/60 uppercase tracking-widest text-[9px] font-bold">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Bottom Signature Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-32 p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Zap size={200} className="text-gold-500" />
                    </div>
                    
                    <div className="max-w-3xl relative z-10">
                        <h4 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
                            "Aangan is where tradition meets the <span className="italic text-gold-500">uncompromising eye</span> of modern luxury."
                        </h4>
                        <div className="flex flex-wrap gap-8 items-center">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-gold-500" size={20} />
                                <span className="text-gray-400 text-sm tracking-wide uppercase font-medium">Bespoke Design</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-gold-500" size={20} />
                                <span className="text-gray-400 text-sm tracking-wide uppercase font-medium">Premium Fabric</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-gold-500" size={20} />
                                <span className="text-gray-400 text-sm tracking-wide uppercase font-medium">Global Shipping</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurCraft;
