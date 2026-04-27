import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    // Using the unified image with different crops/filters to create variety
    // Using uniform elegant shapes for a professional look
    const images = [
        { id: 1, src: '/drive_images/optimized/copy_of_0d2a8350_1.webp' },
        { id: 2, src: '/drive_images/optimized/copy_of_0d2a8369_1.webp' },
        { id: 3, src: '/drive_images/optimized/784a4374.webp' },
        { id: 4, src: '/drive_images/optimized/copy_of_0d2a8385_1.webp' },
        { id: 5, src: '/drive_images/optimized/copy_of_0d2a8394_1.webp' },
        { id: 6, src: '/drive_images/optimized/copy_of_0d2a7942_1.webp' },
    ];

    return (
        <section id="gallery" className="py-12 md:py-24 bg-white overflow-hidden relative">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-100/30 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <a href="https://www.instagram.com/_aanganboutique_/" target="_blank" rel="noopener noreferrer" className="text-gold-600 font-serif italic text-lg mb-2 block hover:underline">@_aanganboutique_</a>
                        <h2 className="font-serif text-4xl lg:text-5xl text-dark-900 drop-shadow-sm">Our Lookbook</h2>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block glass px-8 py-3 rounded-full text-gold-600 uppercase tracking-widest text-xs font-semibold hover:bg-gold-600 hover:text-white transition-all shadow-sm"
                        onClick={() => window.open('https://www.instagram.com/_aanganboutique_/', '_blank')}
                    >
                        Follow us on Instagram
                    </motion.button>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {images.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative group overflow-hidden break-inside-avoid shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-gray-100 ${item.class}`}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 50, damping: 15 }} // Responsive spring
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        >
                            <img
                                src={item.src}
                                alt={`Gallery ${idx}`}
                                className={`w-full h-auto object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 ${idx % 2 === 0 ? 'grayscale group-hover:grayscale-0' : ''}`}
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
