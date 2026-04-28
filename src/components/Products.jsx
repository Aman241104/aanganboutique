import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const categories = [
    {
        id: 1,
        title: 'Wedding Collection',
        image: '/drive_images/optimized/copy_of_0d2a7949_1.webp',
        description: 'Exquisitely crafted outfits for weddings and grand celebrations.',
        size: 'large'
    },
    {
        id: 2,
        title: 'Festive Wear',
        image: '/drive_images/optimized/784a4401_1.webp',
        description: 'Elegant ethnic wear for joyful family gatherings.',
        size: 'small'
    },
    {
        id: 3,
        title: 'Indo Western',
        image: '/drive_images/optimized/copy_of_0d2a7945_1.webp',
        description: 'Modern silhouettes blending Indian and global aesthetics.',
        size: 'small'
    },
    {
        id: 4,
        title: 'Dress Materials',
        image: '/drive_images/optimized/784a4398.webp',
        description: 'Premium fabrics for custom-made formal wear.',
        size: 'small'
    }
];

const allProducts = [
    {
        id: 101,
        title: 'Royal Maroon Lehenga',
        price: '₹45,000',
        description: 'Exquisitely hand-embroidered maroon lehenga, perfect for a grand bridal look.',
        image: '/gallery/optimized/prod1.webp'
    },
    {
        id: 102,
        title: 'Emerald Silk Saree',
        price: '₹18,500',
        description: 'Luxurious emerald silk saree with intricate gold border detailing.',
        image: '/gallery/optimized/prod2.webp',
    },
    {
        id: 103,
        title: 'Ivory Anarkali',
        price: '₹22,000',
        description: 'Elegant ivory anarkali with delicate embroidery for a timeless festive look.',
        image: '/gallery/optimized/prod3.webp'
    },
    {
        id: 104,
        title: 'Gold Tissue Saree',
        price: '₹15,000',
        description: 'Shimmering gold tissue saree, a lightweight yet regal choice for celebrations.',
        image: '/gallery/optimized/prod4.webp'
    },
    {
        id: 105,
        title: 'Bridal Red Set',
        price: '₹85,000',
        description: 'The quintessential red bridal set, featuring master-crafted traditional motifs.',
        image: '/gallery/optimized/prod5.webp'
    },
    {
        id: 106,
        title: 'Pastel Sharara',
        price: '₹28,000',
        description: 'Chic pastel sharara set, blending modern colors with classic silhouettes.',
        image: '/gallery/optimized/prod6.webp'
    }
];

const ProductFlipCard = ({ product, onAddToBag }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleBuyNow = () => {
        const message = `Hello, I'm interested in the ${product.title} priced at ${product.price}. Please provide more details.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="h-[450px] w-full perspective-[1000px] cursor-pointer" onClick={() => !isFlipped && setIsFlipped(true)}>
            <motion.div
                className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d]"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[2rem] overflow-hidden shadow-md bg-white border border-gray-100">
                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <button className="bg-white/90 text-maroon-900 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                            Detail View
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                        <h4 className="text-xl font-serif">{product.title}</h4>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2rem] overflow-hidden shadow-xl bg-[#FDFBF7] p-8 flex flex-col items-center justify-center text-center border border-gold-200">
                    <h4 className="text-2xl font-serif text-maroon-900 mb-2">{product.title}</h4>
                    <p className="text-gold-600 font-bold text-lg mb-6">{product.price}</p>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light">
                        {product.description}
                    </p>

                    <div className="flex flex-col gap-4 w-full">
                        <button
                            onClick={(e) => { e.stopPropagation(); onAddToBag(product); }}
                            className="bg-gold-600 text-white px-8 py-4 rounded-full uppercase tracking-widest text-[10px] font-bold hover:bg-gold-700 transition-all shadow-lg"
                        >
                            Inquiry Bag
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); handleBuyNow(); }}
                            className="bg-maroon-900 text-white px-8 py-4 rounded-full uppercase tracking-widest text-[10px] font-bold hover:bg-maroon-800 transition-all shadow-lg"
                        >
                            WhatsApp
                        </button>
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                        className="mt-8 text-gray-300 text-[10px] uppercase hover:text-maroon-900 transition-colors tracking-[0.3em]"
                    >
                        Return to Image
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const CategoryTile = ({ cat, index, onExplore }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl border border-gray-100 ${
                cat.size === 'large' ? 'lg:col-span-2 lg:row-span-2 aspect-[4/5] lg:aspect-auto' : 'aspect-square'
            }`}
        >
            <motion.img
                src={cat.image}
                alt={cat.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
            />
            
            {/* Liquid Glass Overlay */}
            <div className="absolute inset-0 bg-maroon-900/10 group-hover:bg-maroon-900/40 transition-colors duration-700"></div>
            
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start">
                <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-gold-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-4"
                >
                    Collection {cat.id < 10 ? `0${cat.id}` : cat.id}
                </motion.span>
                
                <h3 className={`font-serif text-white leading-none mb-6 group-hover:text-gold-200 transition-colors ${
                    cat.size === 'large' ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl'
                }`}>
                    {cat.title}
                </h3>
                
                <p className={`text-white/70 font-light leading-relaxed max-w-xs mb-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                    cat.size === 'large' ? 'text-lg' : 'text-sm'
                }`}>
                    {cat.description}
                </p>

                <button 
                    onClick={onExplore}
                    className="flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.3em] font-bold group/btn"
                >
                    <span className="relative">
                        Explore
                        <span className="absolute -bottom-1 left-0 w-full h-px bg-gold-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left"></span>
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-maroon-900 transition-all">
                        <ArrowUpRight size={14} />
                    </div>
                </button>
            </div>
        </motion.div>
    );
};

const Products = ({ onAddToBag }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        if (showOverlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showOverlay]);

    return (
        <>
            <section id="products" className="py-24 md:py-40 bg-[#FDFBF7] relative overflow-hidden">
                {/* Grainy Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                <div className="container mx-auto px-4 lg:px-12 relative z-10">
                    
                    {/* Editorial Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-end">
                        <div className="lg:col-span-8">
                            <motion.span 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-gold-600 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block"
                            >
                                Seasonal Selection
                            </motion.span>
                            <h2 className="font-serif text-[10vw] lg:text-[7vw] leading-[0.85] text-maroon-900 tracking-tighter">
                                OUR <br/>
                                <span className="italic font-light text-gold-500">Collections</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-4 lg:text-right pb-4">
                            <p className="text-gray-400 font-light text-sm max-w-xs ml-auto mb-8">
                                A curated edit of our most coveted pieces, from timeless heritage bridal wear to modern indo-western silhouettes.
                            </p>
                            <button 
                                onClick={() => setShowOverlay(true)}
                                className="inline-flex items-center gap-3 text-maroon-900 font-bold uppercase tracking-widest text-[10px] group"
                            >
                                View All Products
                                <div className="w-10 h-10 rounded-full border border-maroon-900/10 flex items-center justify-center group-hover:bg-maroon-900 group-hover:text-white transition-all">
                                    <ArrowRight size={14} />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Asymmetrical Bento-Editorial Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {categories.map((cat, index) => (
                            <CategoryTile 
                                key={cat.id} 
                                cat={cat} 
                                index={index} 
                                onExplore={() => setShowOverlay(true)} 
                            />
                        ))}
                    </div>

                    {/* The Aangan Lifestyle Link */}
                    <div className="mt-32 text-center">
                        <div className="w-px h-24 bg-gradient-to-b from-gold-400/50 to-transparent mx-auto mb-12"></div>
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-serif text-3xl md:text-5xl text-maroon-900 mb-8"
                        >
                            Curated Excellence in <br/>
                            <span className="italic text-gold-600 font-light">Every Stitch</span>
                        </motion.h3>
                    </div>
                </div>

            </section >

            {/* Product Overlay Modal */}
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-start justify-center px-4 pb-4 pt-24 md:px-8 md:pb-8 md:pt-32"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-maroon-900/60 backdrop-blur-xl"
                            onClick={() => setShowOverlay(false)}
                        ></div>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, y: 40, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 40, opacity: 0 }}
                            className="relative bg-[#FDFBF7] w-full max-w-7xl max-h-full rounded-[3rem] shadow-2xl z-10 flex flex-col overflow-hidden border border-white/20"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center px-8 py-8 md:px-12 md:py-10 bg-[#FDFBF7] border-b border-maroon-900/5 sticky top-0 z-[100]" >
                                <h2 className="text-3xl md:text-5xl font-serif text-maroon-900 tracking-tight">Full Catalogue</h2>
                                <button
                                    onClick={() => setShowOverlay(false)}
                                    className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-maroon-900 hover:bg-maroon-900 hover:text-white transition-all border border-gray-100"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M18 6L6 18M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                            {/* Grid */}
                            <div className="overflow-y-auto p-8 md:p-12 scrollbar-hide">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pb-12">
                                    {allProducts.map((product) => (
                                        <ProductFlipCard key={product.id} product={product} onAddToBag={onAddToBag} />
                                    ))}
                                </div>
                                
                                <div className="text-center pb-12">
                                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-bold">Standard of Excellence</p>
                                    <img src="/Logo1.png" alt="Aangan" className="w-24 h-auto mx-auto opacity-20 grayscale" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};


export default Products;
