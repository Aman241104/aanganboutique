import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: '4.9★', label: 'Google Rating' },
    { value: 'In-House', label: 'Tailoring & Fitting' },
    { value: 'Ahmedabad + USA', label: 'Clientele' },
    { value: '100%', label: 'Personalized Styling' },
];

const Clients = () => {
    return (
        <section id="clients" className="bg-[#FDFBF7] border-y border-gold-900/10">
            <div className="container mx-auto px-4 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:flex md:flex-nowrap md:justify-center gap-y-6 md:gap-y-0 md:divide-x divide-gold-900/10 py-8 md:py-10"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="px-6 md:px-10 text-center">
                            <div className="text-maroon-900 font-serif text-base md:text-lg">{stat.value}</div>
                            <div className="text-gold-600 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
