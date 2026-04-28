import React from 'react';
import { motion } from 'framer-motion';
import { Play, Maximize2 } from 'lucide-react';

const CollectionGallery = () => {
    const assets = [
        { id: 1, src: '/drive_images/optimized/copy_of_0d2a7942_1.webp', type: 'image', title: 'Royal Maroon Lehenga', span: 'row-span-2' },
        { id: 2, src: '/gallery/optimized/lookbook1-opt.mp4', type: 'video', title: 'The Wedding Edit', span: 'row-span-3' },
        { id: 3, src: '/drive_images/optimized/copy_of_0d2a8350_1.webp', type: 'image', title: 'Designer Ethnic Wear', span: 'row-span-2' },
        { id: 4, src: '/gallery/optimized/lookbook2-opt.mp4', type: 'video', title: 'Festive Vibes', span: 'row-span-2' },
        { id: 5, src: '/drive_images/optimized/copy_of_0d2a8387_1.webp', type: 'image', title: 'Bridal Grace', span: 'row-span-3' },
        { id: 6, src: '/drive_images/optimized/copy_of_0d2a8369_1.webp', type: 'image', title: 'Modern Elegance', span: 'row-span-2' },
        { id: 7, src: '/drive_images/optimized/784a4403.webp', type: 'image', title: 'Festive Collection', span: 'row-span-2' },
        { id: 8, src: '/drive_images/optimized/copy_of_0d2a8394_1.webp', type: 'image', title: 'Couture Detail', span: 'row-span-2' },
    ];

    return (
        <section id="collection-gallery" className="py-24 md:py-32 bg-[#FDFBF7] overflow-hidden relative">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            
            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="flex flex-col items-center mb-24">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block"
                    >
                        Our Signature Pieces
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl lg:text-7xl text-maroon-900 mb-8 text-center"
                    >
                        Collection Spotlight
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-px bg-gold-400"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
                    {assets.map((asset, index) => (
                        <motion.div
                            key={asset.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${asset.span} relative group overflow-hidden rounded-[2.5rem] bg-white shadow-lg`}
                        >
                            {asset.type === 'video' ? (
                                <div className="w-full h-full relative">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    >
                                        <source src={asset.src} type="video/mp4" />
                                    </video>
                                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                                        <Play size={16} fill="currentColor" />
                                    </div>
                                </div>
                            ) : (
                                <img
                                    src={asset.src}
                                    alt={asset.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                            )}
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-maroon-950/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center">
                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    className="flex flex-col items-center p-8 text-center"
                                >
                                    <span className="text-gold-200 font-serif italic text-2xl mb-2 block">Aangan</span>
                                    <h3 className="text-white font-serif text-xl mb-6 tracking-wide">{asset.title}</h3>
                                    <div className="flex gap-4">
                                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-maroon-900 hover:bg-gold-500 hover:text-white transition-colors">
                                            <Maximize2 size={18} />
                                        </button>
                                        <button className="glass px-6 py-2 rounded-full text-white text-[10px] uppercase tracking-[0.3em] font-bold border border-white/30 hover:bg-white hover:text-maroon-900 transition-all">
                                            View Piece
                                        </button>
                                    </div>
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
