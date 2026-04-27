import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Ruler, Sparkles } from 'lucide-react';

const OurCraft = () => {
    const services = [
        {
            title: "Custom Tailoring",
            description: "Experience the perfect fit with our bespoke tailoring services. We craft garments tailored precisely to your measurements.",
            icon: <Scissors className="text-gold-400 mb-2" size={20} />
        },
        {
            title: "Personalized Styling",
            description: "Our expert stylists help you curate a wardrobe that reflects your unique personality.",
            icon: <Sparkles className="text-gold-400 mb-2" size={20} />
        },
        {
            title: "Bridal Consultations",
            description: "From concept to creation, we guide brides through selecting the finest fabrics and intricate embroidery.",
            icon: <Ruler className="text-gold-400 mb-2" size={20} />
        }
    ];

    const journeySteps = [
        { step: "01", title: "Curation", desc: "Selecting premium fabrics & motifs" },
        { step: "02", title: "Artistry", desc: "Handcrafted embroidery & detailing" },
        { step: "03", title: "Fitting", desc: "Precision tailoring for perfect drape" },
        { step: "04", title: "Finale", desc: "Your unique Aangan masterpiece" }
    ];

    return (
        <section id="craft" className="py-24 bg-dark-900 text-white overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #C5A059 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-16 mb-24">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-gold-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block"
                        >
                            The Aangan Philosophy
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-4xl lg:text-7xl mb-8 leading-[1.1]"
                        >
                            The Art of <br />
                            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-500">Exquisite Tailoring</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-xl"
                        >
                            Every garment at Aangan is more than just attire—it's a story of meticulous craftsmanship, patience, and a relentless pursuit of elegance.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {services.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4"
                                >
                                    {s.icon}
                                    <h3 className="font-serif text-lg text-gold-200 mb-2">{s.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{s.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-[4rem] overflow-hidden aspect-[3/4] shadow-2xl relative group"
                            >
                                <img src="/gallery/optimized/craft1.webp" alt="Crafting" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1s]" />
                                <div className="absolute inset-0 bg-maroon-900/10 mix-blend-multiply"></div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="rounded-[4rem] overflow-hidden aspect-[3/4] mt-12 shadow-2xl relative group"
                            >
                                <img src="/gallery/optimized/craft2.webp" alt="Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1s]" />
                                <div className="absolute inset-0 bg-maroon-900/10 mix-blend-multiply"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* The Journey Steps */}
                <div className="relative pt-12 border-t border-white/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                        {journeySteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative group"
                            >
                                <span className="text-5xl md:text-7xl font-serif text-white/5 absolute -top-8 left-0 group-hover:text-gold-500/10 transition-colors">{step.step}</span>
                                <h4 className="font-serif text-xl text-gold-400 mb-2 relative z-10">{step.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCraft;