import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Clients = () => {
    return (
        <section id="clients" className="py-10 md:py-12 bg-[#FDFBF7] border-b border-gray-100">
            <div className="container mx-auto px-4 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-3 text-center"
                >
                    <div className="flex text-gold-500 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" stroke="none" />
                        ))}
                    </div>
                    <p className="text-sm md:text-base text-maroon-900/80 font-light tracking-wide">
                        <span className="font-serif italic text-gold-600">4.9/5 on Google</span> — trusted by clients across Ahmedabad &amp; the USA, with a bespoke fit guaranteed.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
