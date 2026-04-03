import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Ruler, Sparkles } from 'lucide-react';

const OurCraft = () => {
    const services = [
        {
            title: "Custom Tailoring",
            description: "Experience the perfect fit with our bespoke tailoring services. We craft garments tailored precisely to your measurements and preferences.",
            icon: <Scissors className="text-gold-400 mb-2" size={24} />
        },
        {
            title: "Personalized Styling",
            description: "Our expert stylists help you curate a wardrobe that reflects your unique personality for any special occasion.",
            icon: <Sparkles className="text-gold-400 mb-2" size={24} />
        },
        {
            title: "Bridal Consultations",
            description: "From concept to creation, we guide brides through selecting the finest fabrics and intricate hand-embroidery.",
            icon: <Ruler className="text-gold-400 mb-2" size={24} />
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
                            viewport={{ once: true }}
                            className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block"
                        >
                            Our Services
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-4xl lg:text-6xl mb-8 leading-tight drop-shadow-lg"
                        >
                            Craftsmanship <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">& Personal Care</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-lg font-light leading-relaxed mb-10 max-w-xl"
                        >
                            Every garment at Aangan Boutique is a labor of love. We offer dedicated services to ensure your attire is as unique as you are.
                        </motion.p>

                        <div className="flex flex-col gap-8">
                            {services.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="bg-white/5 border border-gold-500/20 p-6 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm"
                                >
                                    {s.icon}
                                    <h3 className="font-serif text-xl text-gold-200 mb-2">{s.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-t-full overflow-hidden aspect-[2/3] shadow-2xl border border-white/10 relative group"
                            >
                                <img src="/drive_images/copy_of_0d2a7946_1.jpg" alt="Crafting" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                                <div className="absolute inset-0 bg-maroon-900/20 mix-blend-multiply"></div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="rounded-b-full overflow-hidden aspect-[2/3] mt-12 shadow-2xl border border-white/10 relative group"
                            >
                                <img src="/drive_images/copy_of_0d2a8385_1.jpg" alt="Detail" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                                <div className="absolute inset-0 bg-maroon-900/20 mix-blend-multiply"></div>
                            </motion.div>
                        </div>

                        {/* Floating Gold Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-dashed border-gold-500/30 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gold-500/40 rounded-full animate-[spin_8s_linear_infinite_reverse] pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCraft;