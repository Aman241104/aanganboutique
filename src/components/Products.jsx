import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

const categories = [
    {
        id: 1,
        title: 'Wedding collection',
        image: '/gallery/optimized/784A4393.webp',
        description: 'Exquisitely crafted outfits for weddings, receptions, and once-in-a-lifetime celebrations.'
    },
    {
        id: 2,
        title: 'Festive wear',
        image: '/gallery/optimized/prod1.webp',
        description: 'Elegant ethnic wear for Diwali, Rakshabandhan, poojas, and joyful family gatherings.'
    },
    {
        id: 3,
        title: 'Indo western collection',
        image: '/gallery/optimized/prod2.webp',
        description: 'Modern silhouettes blending Indian aesthetics with contemporary global style.'
    },
    {
        id: 4,
        title: 'Dress materials',
        image: '/gallery/optimized/prod3.webp',
        description: 'Premium dress materials for custom-made ethnic, formal, and occasion wear.'
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
        image: '/gallery/optimized/prod6.webp',
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
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-md bg-white">
                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <button className="bg-white/90 text-maroon-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                            Click for Details
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                        <h4 className="text-lg font-serif">{product.title}</h4>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden shadow-xl bg-white p-6 flex flex-col items-center justify-center text-center border-2 border-gold-200">
                    <h4 className="text-xl font-serif text-maroon-900 mb-2">{product.title}</h4>
                    <p className="text-gold-600 font-bold text-lg mb-4">{product.price}</p>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex flex-col gap-3 w-full">
                        <button
                            onClick={(e) => { e.stopPropagation(); onAddToBag(product); }}
                            className="bg-gold-600 text-white px-8 py-3 rounded-full uppercase tracking-wider text-[10px] font-bold hover:bg-gold-700 transition-colors shadow-lg"
                        >
                            Add to Inquiry Bag
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); handleBuyNow(); }}
                            className="bg-maroon-900 text-white px-8 py-3 rounded-full uppercase tracking-wider text-[10px] font-bold hover:bg-maroon-800 transition-colors shadow-lg"
                        >
                            Inquire via WhatsApp
                        </button>
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                        className="mt-6 text-gray-400 text-[10px] uppercase hover:text-maroon-900 transition-colors tracking-widest"
                    >
                        Back to Image
                    </button>
                </div>
            </motion.div>
        </div>
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
            <section id="products" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
                {/* Background Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                <div className="container mx-auto px-4 lg:px-12 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Curated Selection</span>
                        <h2 className="font-serif text-4xl lg:text-6xl text-maroon-900 mb-6 drop-shadow-sm">Our Collections</h2>
                        <div className="w-24 h-px bg-gold-400 mx-auto"></div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {categories.map((cat, index) => (
                            <motion.div
                                key={cat.id}
                                className="group cursor-pointer relative"
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            >
                                {/* Elegant Image Container */}
                                <div className="relative overflow-hidden aspect-[3/4] mb-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500 bg-white p-2">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                                        <img
                                            src={cat.image}
                                            alt={cat.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                                        />
                                        {/* Glass Overlay on Hover */}
                                        <div className="absolute inset-0 bg-maroon-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Floating Glass Button */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] w-max">
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); setShowOverlay(true); }}
                                            className="glass px-6 py-3 rounded-full text-white uppercase tracking-widest text-[10px] font-semibold hover:bg-white hover:text-maroon-900 transition-colors backdrop-blur-md"
                                        >
                                            View Collection
                                        </button>
                                    </div>
                                </div>

                                <div className="text-center px-4">
                                    <h3 className="font-serif text-2xl text-dark-900 mb-2 group-hover:text-gold-600 transition-colors duration-300">{cat.title}</h3>
                                    <p className="text-gray-500 text-sm font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                        {cat.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="text-center mt-20">
                        <button
                            onClick={() => setShowOverlay(true)}
                            className="inline-block border border-maroon-900/20 text-maroon-900 px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-semibold hover:bg-maroon-900 hover:text-white transition-all duration-300 hover:shadow-lg cursor-pointer"
                        >
                            View All Products
                        </button>
                    </div>
                </div>




                {/* The Aangan Lifestyle Section - Refined Bento Grid */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 mt-32">
                    <div className="mb-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-gold-600 font-serif italic text-xl mb-3 block">Curated Excellence</span>
                            <h2 className="font-serif text-4xl lg:text-6xl text-dark-900 tracking-tight">The Aangan Lifestyle</h2>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                        {/* Featured Bridal - Large */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 lg:col-span-3 row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-white border border-gold-100/50 shadow-xl"
                        >
                            <motion.img
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                src="/drive_images/optimized/784a4393.webp"
                                alt="Bridal Couture"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
                                <motion.span 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-4"
                                >
                                    Signature Edition
                                </motion.span>
                                <motion.h3 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-white font-serif text-3xl md:text-5xl mb-6"
                                >
                                    Bridal Couture
                                </motion.h3>
                                <button 
                                    onClick={() => setShowOverlay(true)}
                                    className="bg-white/10 backdrop-blur-md self-start px-8 py-3 rounded-full text-white text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:bg-gold-500 hover:text-white transition-all border border-white/20"
                                >
                                    View Collection <ArrowUpRight size={14} />
                                </button>
                            </div>
                        </motion.div>

                        {/* Accessories - Tall */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-gold-50 border border-gold-100/50 shadow-lg"
                        >
                            <motion.img
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                src="/drive_images/optimized/copy_of_0d2a8387_1.webp"
                                alt="Accessories"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/10 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white font-serif text-3xl mb-2">Artisan Details</h3>
                                <p className="text-gold-200/70 text-xs uppercase tracking-widest">Handcrafted Perfection</p>
                            </div>
                        </motion.div>

                        {/* Fabrics - Small Square */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-1 lg:col-span-1 relative group overflow-hidden rounded-[2.5rem] shadow-md border border-gold-100/50"
                        >
                            <img
                                src="/drive_images/optimized/784a4401_1.webp"
                                alt="Fabric"
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <span className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">Textiles</span>
                            </div>
                        </motion.div>

                        {/* Personal Styling - Wide */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-2 lg:col-span-3 relative group overflow-hidden rounded-[2.5rem] bg-maroon-900 flex items-center p-8 md:p-12 shadow-xl border border-gold-500/20"
                        >
                            <div className="max-w-md z-10">
                                <motion.h3 
                                    className="text-gold-100 font-serif text-2xl md:text-3xl mb-4"
                                >
                                    Personal Styling
                                </motion.h3>
                                <motion.p 
                                    className="text-gold-100/60 text-xs md:text-sm mb-6 leading-relaxed"
                                >
                                    Bespoke fashion consultation to help you discover the perfect silhouette for your special day.
                                </motion.p>
                                <a href="#booking">
                                    <button className="text-white border-b border-gold-400 pb-1 hover:text-gold-400 transition-all uppercase tracking-[0.2em] text-[10px] font-bold">Book a Session</button>
                                </a>
                            </div>
                            {/* Decorative background for the card */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #CCA052 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                        </motion.div>

                        {/* Indo-Western - Wide */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="md:col-span-2 lg:col-span-3 relative group overflow-hidden rounded-[2.5rem] shadow-lg"
                        >
                            <img
                                src="/drive_images/optimized/copy_of_0d2a7946_1.webp"
                                alt="Indo-Western"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-center">
                                <h3 className="text-white font-serif text-3xl mb-2">Indo-Western</h3>
                                <p className="text-white/60 text-xs tracking-widest uppercase">Global Aesthetics</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </section >

            {/* Full Screen Product Overlay Moved to Root Level */}
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
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                            onClick={() => setShowOverlay(false)}
                        ></div>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative bg-cream w-full max-w-6xl max-h-full rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden"
                        >
                            {/* Header - Fixed at top */}
                            <div className="flex justify-between items-center px-6 py-5 md:px-10 md:py-6 bg-cream border-b border-maroon-900/10 shrink-0 sticky top-0 z-[100]" >
                                <h2 className="text-2xl md:text-3xl font-serif text-maroon-900">All Collections</h2>
                                <button
                                    onClick={() => setShowOverlay(false)}
                                    className="w-10 h-10 rounded-full bg-maroon-100 flex items-center justify-center text-maroon-900 hover:bg-maroon-900 hover:text-white transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-0L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto p-6 md:p-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8">
                                    {allProducts.map((product) => (
                                        <ProductFlipCard key={product.id} product={product} onAddToBag={onAddToBag} />
                                    ))}
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
