import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, ArrowRight } from 'lucide-react';
import BookingModal from './BookingModal';

const Atelier = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section id="atelier" className="relative bg-maroon-950 text-cream overflow-hidden py-24 md:py-40">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 order-2 lg:order-1"
                    >
                        <span className="text-gold-400 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">The Atelier</span>
                        <h2 className="font-serif text-4xl md:text-6xl mb-8 tracking-tighter leading-[0.95]">
                            Every piece is <span className="italic font-light text-gold-400">tailored in-house.</span>
                        </h2>
                        <div className="space-y-5 text-white/70 font-light leading-relaxed text-lg max-w-lg">
                            <p>From the first sketch to the final fitting, our tailoring team works out of our Ahmedabad atelier — which means every alteration, every embroidery detail, and every fitting adjustment stays under one roof.</p>
                            <p>For clients abroad, this also means we can guide fit and construction closely over a video call, long before your outfit ever ships.</p>
                        </div>
                        <button
                            onClick={() => setIsBookingOpen(true)}
                            className="mt-10 inline-flex items-center gap-4 bg-gold-500 text-maroon-950 px-10 py-5 rounded-full font-bold uppercase tracking-[0.25em] text-xs hover:bg-gold-400 transition-all shadow-xl"
                        >
                            <Video size={16} /> Book a Video Consultation <ArrowRight size={16} />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-6 order-1 lg:order-2"
                    >
                        <div className="relative aspect-[4/5] md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="/gallery/optimized/craft2.webp"
                                alt="In-house tailoring atelier — Aangan Boutique, Ahmedabad"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/50 via-transparent to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialType="video" />
        </section>
    );
};

export default Atelier;
