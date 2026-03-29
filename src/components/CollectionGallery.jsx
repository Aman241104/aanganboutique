import React from 'react';
import { motion } from 'framer-motion';

const CollectionGallery = () => {
    const assets = [
        { id: 1, src: '/gallery/optimized/784A4374.webp', type: 'image', title: 'Elegant Couture' },
        { id: 2, src: '/gallery/optimized/lookbook1-opt.mp4', type: 'video', title: 'The Wedding Edit' },
        { id: 3, src: '/gallery/optimized/784A4393.webp', type: 'image', title: 'Bridal Grace' },
        { id: 4, src: '/gallery/optimized/lookbook2-opt.mp4', type: 'video', title: 'Festive Vibes' },
        { id: 5, src: '/gallery/optimized/784A4396.webp', type: 'image', title: 'Royal Heritage' },
        { id: 6, src: '/gallery/optimized/784A4398.webp', type: 'image', title: 'Modern Ethnic' },
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
                            {asset.type === 'video' ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-110"
                                >
                                    <source src={asset.src} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={asset.src}
                                    alt={asset.title}
                                    loading="lazy"
                                    className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <h3 className="text-white font-serif text-2xl mb-2">{asset.title}</h3>
                                <div className="w-12 h-0.5 bg-gold-400"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionGallery;
