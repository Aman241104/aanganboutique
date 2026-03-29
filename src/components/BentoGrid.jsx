import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BentoGrid = () => {
    return (
        <section id="bento" className="py-24 bg-cream">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-16 text-center z-[0]">
                    <span className="text-gold-600 font-serif italic text-lg mb-2 block">Curated Excellence</span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-dark-900">The Aangan Lifestyle</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Large Item */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-[4em] bg-white"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop"
                            alt="Collection"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 p-8 flex flex-col justify-end">
                            <h3 className="text-white font-serif text-3xl mb-2">Bridal Couture</h3>
                            <button className="bg-white/20 backdrop-blur self-start px-6 py-2 rounded-full text-white text-sm flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                                View Collection <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Tall Item */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="row-span-2 relative group overflow-hidden rounded-[4em] bg-gold-50"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1583391733973-727719681739?q=80&w=2574&auto=format&fit=crop"
                            alt="Accessories"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-white font-serif text-2xl">Handcrafted Jewelry</h3>
                        </div>
                    </motion.div>

                    {/* Wide Item */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-[4em] bg-maroon-900 flex items-center justify-center p-8 text-center"
                    >
                        <div className="max-w-md z-10">
                            <h3 className="text-gold-100 font-serif text-2xl mb-4">Personal Styling Services</h3>
                            <p className="text-gold-100/70 text-sm mb-6">Experience personalized fashion consultation with our expert stylists.</p>
                            <button className="text-white border-b border-gold-400 pb-1 hover:text-gold-400 transition-colors">Book Now</button>
                        </div>
                        <div className="absolute inset-0 opacity-10 pattern-dots" style={{ backgroundImage: 'radial-gradient(circle, #CCA052 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    </motion.div>

                    {/* Small Item */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative group overflow-hidden rounded-[4em] bg-white"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop"
                            alt="Fabric"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold">Fabrics</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
