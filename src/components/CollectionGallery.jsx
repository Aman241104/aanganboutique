import React from 'react';
import { motion } from 'framer-motion';

const CollectionGallery = () => {
    const assets = [
        { id: 1, src: '/drive_images/copy_of_0d2a8350_1.jpg', type: 'image', title: 'Royal Maroon Lehenga' },
        { id: 2, src: '/drive_images/copy_of_0d2a8369_1.jpg', type: 'image', title: 'Emerald Silk Saree' },
        { id: 3, src: '/drive_images/784a4374.jpg', type: 'image', title: 'Mint Green Lehenga' },
        { id: 4, src: '/drive_images/copy_of_0d2a8385_1.jpg', type: 'image', title: 'Ivory Anarkali Set' },
        { id: 5, src: '/drive_images/copy_of_0d2a8394_1.jpg', type: 'image', title: 'Bridal Red Collection' },
        { id: 6, src: '/drive_images/copy_of_0d2a7942_1.jpg', type: 'image', title: 'Pastel Sharara Suit' },
    ];

    return (
        <section id="collection-gallery" className="py-12 md:py-24 bg-cream overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col items-center mb-16">
                    <span className="text-gold-600 uppercase tracking-widest text-xs font-semibold mb-2">Our Signature Pieces</span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-maroon-900 mb-4 text-center">Collection Spotlight</h2>
                    <div className="w-24 h-1 bg-gold-500 rounded-full"></div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {assets.map((asset, index) => (
                        <motion.div
                            key={asset.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-[2em] shadow-lg bg-white break-inside-avoid"
                        >
                            <img
                                src={asset.src}
                                alt={asset.title}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-maroon-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-8">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center"
                                >
                                    <span className="text-gold-200 font-serif italic text-2xl mb-1 block text-center">Aangan</span>
                                    <h3 className="text-white font-serif text-xl mb-4 text-center px-4">{asset.title}</h3>
                                    <button className="glass px-6 py-2 rounded-full text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-maroon-900 transition-colors">
                                        View Details
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionGallery;
