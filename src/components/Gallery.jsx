import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    // Using the unified image with different crops/filters to create variety
    // Using uniform elegant shapes for a professional look
    const images = [
        { id: 1, src: '/drive_images/optimized/copy_of_0d2a8350_1.webp', gridClass: 'md:col-span-2 md:row-span-2' },
        { id: 2, src: '/drive_images/optimized/copy_of_0d2a8369_1.webp', gridClass: 'md:col-span-1 md:row-span-1' },
        { id: 3, src: '/drive_images/optimized/784a4374.webp', gridClass: 'md:col-span-1 md:row-span-1' },
        { id: 4, src: '/drive_images/optimized/copy_of_0d2a8385_1.webp', gridClass: 'md:col-span-1 md:row-span-1' },
        { id: 5, src: '/drive_images/optimized/copy_of_0d2a8394_1.webp', gridClass: 'md:col-span-1 md:row-span-1' },
        { id: 6, src: '/drive_images/optimized/copy_of_0d2a7942_1.webp', gridClass: 'md:col-span-2 md:row-span-1' },
    ];

    return (
        <section id="gallery" className="py-24 md:py-32 bg-white overflow-hidden relative">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-100/30 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 px-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <a href="https://www.instagram.com/_aanganboutique_/" target="_blank" rel="noopener noreferrer" className="text-gold-600 font-serif italic text-xl mb-4 block hover:underline tracking-wide">@_aanganboutique_</a>
                        <h2 className="font-serif text-5xl lg:text-7xl text-maroon-950 tracking-tight">Our Lookbook</h2>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block bg-maroon-950 text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-maroon-900 transition-all shadow-xl"
                        onClick={() => window.open('https://www.instagram.com/_aanganboutique_/', '_blank')}
                    >
                        Follow on Instagram
                    </motion.button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[280px]">
                    {images.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative group overflow-hidden rounded-[2.5rem] shadow-md hover:shadow-2xl transition-all duration-700 bg-gray-50 border border-gold-100/20 ${item.gridClass}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={item.src}
                                alt={`Lookbook piece ${idx + 1}`}
                                className={`w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 ${idx % 3 === 0 ? 'grayscale group-hover:grayscale-0' : ''}`}
                            />

                            {/* Fluid Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-maroon-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-8">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }} // Only animates when visible
                                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                >
                                    <span className="text-gold-200 font-serif italic text-2xl mb-1 block text-center">Aangan</span>
                                    <button className="glass px-6 py-2 rounded-full text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-maroon-900 transition-colors">
                                        View Post
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button
                        className="glass px-8 py-3 rounded-full text-gold-600 uppercase tracking-widest text-xs font-semibold"
                        onClick={() => window.open('https://www.instagram.com/_aanganboutique_/', '_blank')}
                    >
                        Follow us on Instagram
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
