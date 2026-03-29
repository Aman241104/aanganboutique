import React from 'react';
import { motion } from 'framer-motion';

const OurCraft = () => {
    const features = [
        {
            title: "Traditional Weaves",
            description: "Preserving ancient weaving techniques to create fabrics that tell a story of heritage.",
            image: "/gallery/craft1.JPG"
        },
        {
            title: "Artisanal Embroidery",
            description: "Intricate hand-embroidery by master craftsmen, ensuring every detail is a masterpiece.",
            image: "/gallery/craft2.JPG"
        }
    ];

    return (
        <section id="craft" className="py-24 bg-dark-900 text-white overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #C5A059 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block"
                        >
                            The Art of Perfection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-serif text-4xl lg:text-6xl mb-8 leading-tight"
                        >
                            Behind the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Aangan Craft</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-xl"
                        >
                            Every garment at Aangan Boutique is a labor of love. From selecting the finest silks to the final hand-finished stitch, we honor the legacy of Indian craftsmanship while embracing contemporary silhouettes.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="border-l border-gold-500/30 pl-6"
                                >
                                    <h3 className="font-serif text-xl text-gold-200 mb-2">{f.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="rounded-t-full overflow-hidden aspect-[2/3] shadow-2xl border border-white/10"
                            >
                                <img src="/gallery/craft1.JPG" alt="Crafting" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="rounded-b-full overflow-hidden aspect-[2/3] mt-12 shadow-2xl border border-white/10"
                            >
                                <img src="/gallery/craft2.JPG" alt="Detail" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>

                        {/* Floating Gold Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-gold-500/20 rounded-full animate-spin-slow pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCraft;
