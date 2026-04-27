import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Clients = () => {
    return (
        <section id="clients" className="py-24 md:py-32 bg-[#FDFBF7] overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-4 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Left: Artistic Visual & Branding */}
                    <div className="lg:col-span-5 relative group">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <img 
                                src="/drive_images/optimized/copy_of_0d2a8387_1.webp" 
                                alt="Artisanal Detail" 
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-maroon-900/10 mix-blend-multiply"></div>
                        </motion.div>
                        
                        {/* Floating Signature Tag */}
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -right-8 top-1/4 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-gold-100"
                        >
                            <span className="text-maroon-900 font-serif italic text-2xl block mb-2">Excellence</span>
                            <span className="text-gold-600 uppercase tracking-widest text-[10px] font-bold">Standard of Aangan</span>
                        </motion.div>
                    </div>

                    {/* Right: Editorial Stats */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Our Global Reputation</span>
                            <h2 className="font-serif text-4xl lg:text-6xl text-maroon-900 leading-tight mb-12">
                                Trusted by those who <br/>
                                <span className="italic font-light text-gold-600">Value Artistry</span>
                            </h2>

                            <div className="space-y-12">
                                {/* Stat 1 */}
                                <div className="flex items-start gap-8 group">
                                    <div className="text-5xl lg:text-6xl font-serif text-maroon-900/10 group-hover:text-gold-500/20 transition-colors duration-500">01</div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-serif text-maroon-900">Near Perfect Satisfaction</h3>
                                            <div className="flex text-gold-500">
                                                <Star size={14} fill="currentColor" stroke="none" />
                                                <span className="ml-1 text-sm font-bold text-gray-800">4.9/5</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 font-light max-w-md">Verified excellence across Google and global fashion directories, reflecting our commitment to quality.</p>
                                    </div>
                                </div>

                                {/* Stat 2 */}
                                <div className="flex items-start gap-8 group">
                                    <div className="text-5xl lg:text-6xl font-serif text-maroon-900/10 group-hover:text-gold-500/20 transition-colors duration-500">02</div>
                                    <div>
                                        <h3 className="text-2xl font-serif text-maroon-900 mb-2">10,000+ Clients Served</h3>
                                        <p className="text-gray-500 font-light max-w-md">A growing community of brides and families across India, UAE, USA, and the UK who trust the Aangan label.</p>
                                    </div>
                                </div>

                                {/* Stat 3 */}
                                <div className="flex items-start gap-8 group">
                                    <div className="text-5xl lg:text-6xl font-serif text-maroon-900/10 group-hover:text-gold-500/20 transition-colors duration-500">03</div>
                                    <div>
                                        <h3 className="text-2xl font-serif text-maroon-900 mb-2">Bespoke Styling Philosophy</h3>
                                        <p className="text-gray-500 font-light max-w-md">Every garment is a collaborative masterpiece, tailored precisely to individual aesthetics and silhouettes.</p>
                                    </div>
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
