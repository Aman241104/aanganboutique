import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Scissors, MapPin, Award, ArrowRight, CalendarDays } from 'lucide-react';
import BookingModal from './BookingModal';

const highlights = [
    { title: "One-on-One", desc: "Dedicated stylist guidance", icon: <Users size={18} /> },
    { title: "Bespoke Fit", desc: "Precision measurements", icon: <Scissors size={18} /> },
    { title: "Fabric Library", desc: "Exclusive textile access", icon: <MapPin size={18} /> },
    { title: "Heirloom Quality", desc: "Bridal wear focus", icon: <Award size={18} /> }
];

const BookingSection = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section className="py-24 md:py-40 bg-[#FCFAFB] relative overflow-hidden" id="booking">
            {/* Artistic Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-50/20 skew-x-12 translate-x-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-maroon-900/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="flex items-center justify-center gap-3 text-gold-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-8">
                        <span className="w-8 h-px bg-gold-600"></span>
                        <span>Bespoke Consultation</span>
                        <span className="w-8 h-px bg-gold-600"></span>
                    </div>

                    <h2 className="text-5xl lg:text-7xl font-serif text-maroon-950 mb-10 leading-[0.9] tracking-tighter">
                        Book Your <br />
                        <span className="italic font-light text-gold-500">Styling Session</span>
                    </h2>

                    <p className="text-gray-500 text-xl font-light leading-relaxed mb-16 max-w-lg mx-auto">
                        Step into the world of Aangan. Whether you're visiting us in Ahmedabad or joining from abroad, it begins with a conversation.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-left">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-start gap-3"
                            >
                                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-maroon-900 font-bold text-sm tracking-wide mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-xs font-light">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsBookingOpen(true)}
                        className="inline-flex items-center gap-4 bg-gold-600 text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.3em] text-xs hover:shadow-[0_20px_60px_rgba(204,160,82,0.4)] transition-all"
                    >
                        <CalendarDays size={18} />
                        Book a Consultation
                        <ArrowRight size={18} />
                    </motion.button>
                </motion.div>
            </div>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </section>
    );
};

export default BookingSection;
