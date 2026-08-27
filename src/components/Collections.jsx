import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Maximize2, X, MessageCircle, ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '../lib/whatsapp';
import { trackEvent } from '../lib/metaPixel';

const categories = [
    {
        id: 1,
        title: 'Wedding Collection',
        image: '/drive_images/optimized/copy_of_0d2a7949_1.webp',
        description: 'Exquisitely crafted outfits for weddings and grand celebrations.',
        gridClass: 'lg:col-span-2 lg:row-span-2 aspect-[4/5] lg:aspect-auto'
    },
    {
        id: 2,
        title: 'Festive Wear',
        image: '/drive_images/optimized/784a4401_1.webp',
        description: 'Elegant ethnic wear for joyful family gatherings.',
        gridClass: 'lg:col-span-2 lg:row-span-1 aspect-square lg:aspect-auto'
    },
    {
        id: 3,
        title: 'Indo Western',
        image: '/drive_images/optimized/copy_of_0d2a7945_1.webp',
        description: 'Modern silhouettes blending Indian and global aesthetics.',
        gridClass: 'lg:col-span-1 lg:row-span-1 aspect-square'
    },
    {
        id: 4,
        title: 'Dress Materials',
        image: '/drive_images/optimized/784a4398.webp',
        description: 'Premium fabrics for custom-made formal wear.',
        gridClass: 'lg:col-span-1 lg:row-span-1 aspect-square'
    }
];

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

const CategoryTile = ({ cat, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className={`group relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl border border-gray-100 ${cat.gridClass}`}
    >
        <motion.img
            src={cat.image}
            alt={cat.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-maroon-900/10 group-hover:bg-maroon-900/40 transition-colors duration-700"></div>

        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start">
            <span className="text-gold-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-4">
                Collection {cat.id < 10 ? `0${cat.id}` : cat.id}
            </span>
            <h3 className={`font-serif text-white leading-none mb-6 group-hover:text-gold-200 transition-colors ${cat.id === 1 ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl'}`}>
                {cat.title}
            </h3>
            <p className={`text-white/70 font-light leading-relaxed max-w-xs mb-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${cat.id === 1 ? 'text-lg' : 'text-sm'}`}>
                {cat.description}
            </p>
            <a
                href="#collection-pieces"
                className="flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.3em] font-bold group/btn"
            >
                <span className="relative">
                    Explore
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gold-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left"></span>
                </span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-maroon-900 transition-all">
                    <ArrowUpRight size={14} />
                </div>
            </a>
        </div>
    </motion.div>
);

const Collections = () => {
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleInquiry = (e, piece) => {
        e.stopPropagation();
        const imageUrl = `${window.location.origin}${piece.src}`;
        const message = `Hi! I'm interested in this piece from Aangan Boutique's collection:\n\n*${piece.title}*\n${imageUrl}\n\nCould you share more details about it?`;
        window.open(whatsappUrl(message), '_blank');
        trackEvent('Lead', { content_name: 'Collection Piece Inquiry', content_category: piece.title });
    };

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedAsset(assets[index]);
    };

    const nextAsset = () => {
        const nextIdx = (currentIndex + 1) % assets.length;
        setCurrentIndex(nextIdx);
        setSelectedAsset(assets[nextIdx]);
    };

    const prevAsset = () => {
        const prevIdx = (currentIndex - 1 + assets.length) % assets.length;
        setCurrentIndex(prevIdx);
        setSelectedAsset(assets[prevIdx]);
    };

    return (
        <section id="collections" className="py-24 md:py-40 bg-[#FDFBF7] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">

                {/* Editorial Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
                    <div className="lg:col-span-8">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-gold-600 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block"
                        >
                            Seasonal Selection
                        </motion.span>
                        <h2 className="font-serif text-[10vw] lg:text-[7vw] leading-[0.85] text-maroon-900 tracking-tighter">
                            OUR <br />
                            <span className="italic font-light text-gold-500">Collections</span>
                        </h2>
                    </div>
                    <div className="lg:col-span-4 lg:text-right pb-4">
                        <p className="text-gray-400 font-light text-sm max-w-xs ml-auto">
                            A curated edit of our most coveted pieces, from timeless heritage bridal wear to modern indo-western silhouettes.
                        </p>
                    </div>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
                    {categories.map((cat, index) => (
                        <CategoryTile key={cat.id} cat={cat} index={index} />
                    ))}
                </div>

                {/* Signature Pieces Masonry */}
                <div id="collection-pieces" className="flex flex-col items-center mb-16 scroll-mt-28">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block"
                    >
                        Our Signature Pieces
                    </motion.span>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl lg:text-6xl text-maroon-900 mb-8 text-center"
                    >
                        Collection Spotlight
                    </motion.h3>
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
                            className={`${asset.span} relative group overflow-hidden rounded-[2.5rem] bg-white shadow-lg cursor-zoom-in`}
                            onClick={() => openLightbox(index)}
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
                                        <button
                                            onClick={(e) => handleInquiry(e, asset)}
                                            className="glass px-6 py-2 rounded-full text-white text-[10px] uppercase tracking-[0.3em] font-bold border border-white/30 hover:bg-white hover:text-maroon-900 transition-all"
                                        >
                                            Inquiry
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <div className="w-px h-24 bg-gradient-to-b from-gold-400/50 to-transparent mx-auto mb-12"></div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-serif text-3xl md:text-5xl text-maroon-900 mb-10"
                    >
                        Curated Excellence in <br />
                        <span className="italic text-gold-600 font-light">Every Stitch</span>
                    </motion.h3>
                    <a
                        href={whatsappUrl("Hi! I'd like to know more about Aangan Boutique's collections.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('Contact', { content_name: 'Collections Section WhatsApp' })}
                        className="inline-flex items-center gap-3 text-maroon-900 font-bold uppercase tracking-widest text-[10px] group"
                    >
                        Inquire About a Piece
                        <div className="w-10 h-10 rounded-full border border-maroon-900/10 flex items-center justify-center group-hover:bg-maroon-900 group-hover:text-white transition-all">
                            <ArrowRight size={14} />
                        </div>
                    </a>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedAsset && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
                    >
                        <button
                            onClick={() => setSelectedAsset(null)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prevAsset(); }}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110]"
                        >
                            <ArrowLeft size={48} strokeWidth={1} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextAsset(); }}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110]"
                        >
                            <ArrowRight size={48} strokeWidth={1} />
                        </button>

                        <div className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <motion.div
                                key={selectedAsset.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative w-full h-[70vh] rounded-3xl overflow-hidden shadow-2xl"
                            >
                                {selectedAsset.type === 'video' ? (
                                    <video
                                        src={selectedAsset.src}
                                        autoPlay
                                        loop
                                        controls
                                        className="w-full h-full object-contain bg-black"
                                    />
                                ) : (
                                    <img
                                        src={selectedAsset.src}
                                        alt={selectedAsset.title}
                                        className="w-full h-full object-contain bg-black"
                                    />
                                )}
                            </motion.div>

                            <div className="mt-8 text-center space-y-4">
                                <h4 className="text-white font-serif text-3xl">{selectedAsset.title}</h4>
                                <button
                                    onClick={(e) => handleInquiry(e, selectedAsset)}
                                    className="flex items-center gap-3 bg-gold-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold-700 transition-all shadow-xl"
                                >
                                    <MessageCircle size={18} /> Inquire about this piece
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Collections;
