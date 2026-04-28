import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Clients = () => {
    return (
        <section id="clients" className="py-24 md:py-40 bg-[#FDFBF7] overflow-hidden border-b border-gray-100 relative">
            {/* Animated Background Elements */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.03, 0.05, 0.03],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
                    
                    {/* Left: Artistic Visual & Branding */}
                    <div className="lg:col-span-5 relative group">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(44,4,11,0.15)] border border-white"
                        >
                            <img 
                                src="/drive_images/optimized/copy_of_0d2a7947_1.webp" 
                                alt="Artisanal Detail" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-maroon-900/5 mix-blend-multiply"></div>
                            
                            {/* Inner Glass Label */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl text-center">
                                <span className="text-white uppercase tracking-[0.4em] text-[10px] font-bold block mb-2">The Aangan Standard</span>
                                <h4 className="text-white font-serif text-xl italic font-light">Uncompromising Quality</h4>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Editorial Stats */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-12"
                        >
                            <div>
                                <span className="text-gold-600 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Global Recognition</span>
                                <h2 className="font-serif text-5xl lg:text-7xl text-maroon-900 leading-[1] tracking-tighter mb-8">
                                    Trusted by <br/>
                                    <span className="italic font-light text-gold-500">Global Connoisseurs</span>
                                </h2>
                                
                                <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-xl border border-gold-100/50 w-fit group hover:border-gold-300 transition-colors">
                                    <div className="w-16 h-16 bg-gold-50/50 rounded-2xl flex items-center justify-center border border-gold-100">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <div className="flex text-gold-500 gap-1 mb-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-serif text-maroon-900">4.9/5</span>
                                            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold border-l border-gray-200 pl-2">Google Excellence</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-8 border-t border-gray-100">
                                {/* Stat 1 */}
                                <div className="group space-y-4">
                                    <div className="text-[10px] font-bold text-gold-500 tracking-[0.3em] uppercase">Metric 01</div>
                                    <h3 className="text-2xl font-serif text-maroon-900 leading-tight">12,000+ Success Stories</h3>
                                    <p className="text-gray-500 font-light text-sm leading-relaxed">Join a global community of brides from New York to London who trust our artisanal vision.</p>
                                </div>

                                {/* Stat 2 */}
                                <div className="group space-y-4">
                                    <div className="text-[10px] font-bold text-gold-500 tracking-[0.3em] uppercase">Metric 02</div>
                                    <h3 className="text-2xl font-serif text-maroon-900 leading-tight">Bespoke Fit Guaranteed</h3>
                                    <p className="text-gray-500 font-light text-sm leading-relaxed">Our master tailors ensure every garment conforms perfectly to your unique silhouette and style.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Clients;
