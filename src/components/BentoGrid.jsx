import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Scissors, Sparkles, MoveRight } from 'lucide-react';

const BentoGrid = () => {
    const items = [
        {
            id: 1,
            title: 'Bridal Couture',
            subtitle: 'SIGNATURE EDITION',
            image: '/gallery/optimized/784A4374.webp',
            size: 'md:col-span-2 row-span-2',
            category: 'Couture',
            cta: 'View Collection'
        },
        {
            id: 2,
            title: 'Artisan Details',
            subtitle: 'HANDCRAFTED PERFECTION',
            image: '/gallery/optimized/784A4393.webp',
            size: 'md:col-span-1 row-span-2',
            category: 'Craftsmanship'
        },
        {
            id: 3,
            title: 'Personal Styling',
            subtitle: 'Bespoke fashion consultation to help you discover the perfect silhouette for your special day.',
            type: 'content',
            size: 'md:col-span-1 row-span-1',
            bg: 'bg-maroon-950',
            cta: 'Book a Session'
        },
        {
            id: 4,
            title: 'Indo-Western',
            subtitle: 'GLOBAL AESTHETICS',
            image: '/gallery/optimized/784A4396.webp',
            size: 'md:col-span-2 row-span-1',
            category: 'Collection'
        },
        {
            id: 5,
            title: 'Textiles',
            image: '/gallery/optimized/784A4398.webp',
            size: 'md:col-span-1 row-span-1',
            category: 'Fabric'
        }
    ];

    return (
        <section id="bento" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
            {/* Subtle Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="mb-20 text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-600 font-serif italic text-lg mb-4 block"
                    >
                        Curated Excellence
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl md:text-6xl text-dark-900 tracking-tight"
                    >
                        The Aangan Lifestyle
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`${item.size} relative group overflow-hidden rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 ${item.bg || 'bg-white'}`}
                        >
                            {item.type === 'content' ? (
                                <div className="h-full w-full p-10 flex flex-col justify-center relative overflow-hidden">
                                    {/* Abstract Pattern Background */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-maroon-500/20 rounded-full blur-2xl -ml-12 -mb-12"></div>
                                    
                                    <div className="relative z-10">
                                        <h3 className="text-gold-200 font-serif text-3xl mb-4">{item.title}</h3>
                                        <p className="text-gold-100/70 text-sm leading-relaxed mb-8 font-light max-w-[280px]">
                                            {item.subtitle}
                                        </p>
                                        <motion.button 
                                            whileHover={{ x: 10 }}
                                            className="text-white text-xs uppercase tracking-[0.3em] font-bold border-b border-gold-500/50 pb-2 flex items-center gap-3"
                                        >
                                            {item.cta} <MoveRight size={14} className="text-gold-400" />
                                        </motion.button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            {item.subtitle && (
                                                <span className="text-gold-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block opacity-80">
                                                    {item.subtitle}
                                                </span>
                                            )}
                                            <h3 className="text-white font-serif text-3xl md:text-4xl mb-4">{item.title}</h3>
                                            
                                            {item.cta && (
                                                <motion.button 
                                                    className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-white hover:text-maroon-900 transition-all duration-300"
                                                >
                                                    {item.cta} <ArrowUpRight size={14} />
                                                </motion.button>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Overlay for Textiles */}
                                    {item.title === 'Textiles' && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="bg-white/90 backdrop-blur px-8 py-3 rounded-full shadow-xl">
                                                <span className="text-maroon-900 text-xs font-bold uppercase tracking-[0.3em]">Explore Fabrics</span>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
