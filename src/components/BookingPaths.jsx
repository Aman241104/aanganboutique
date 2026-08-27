import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whatsappUrl } from '../lib/whatsapp';
import { sendNotificationEmail } from '../lib/email';
import { trackEvent } from '../lib/metaPixel';

const paths = [
    {
        label: 'Path One',
        title: 'Visiting Ahmedabad',
        desc: "Book an in-store appointment at our Bodakdev atelier. We'll set aside time to go through collections and take you through fittings in person.",
        cta: 'Book In-Store Visit',
    },
    {
        label: 'Path Two',
        title: 'Abroad or Not Visiting Yet',
        desc: "Book a video consultation. We'll walk you through the collection live, discuss fabric and fit, and guide you through measurements remotely.",
        cta: 'Book a Video Call',
    },
];

const BookingPaths = () => {
    const handleInStore = () => {
        const message = `Hi! I came across Aangan Boutique and would like to book an in-store visit to explore your collection.`;
        window.open(whatsappUrl(message), '_blank');
        trackEvent('Lead', { content_name: 'In-Store Visit Booking' });
        sendNotificationEmail({
            type: 'In-Store Visit',
            name: '—',
            email: '—',
            phone: '—',
            city_country: '—',
            occasion: '—',
            date: '—',
            time_slot: '—',
            message,
        });
    };

    const handleVideoCall = () => {
        document.getElementById('video-consultation')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className="py-24 md:py-32 bg-cream" id="book-appointment">
            <div className="container mx-auto px-4 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <div className="flex items-center justify-center gap-3 text-maroon-700 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">
                        <span className="w-8 h-px bg-maroon-700"></span>
                        <span>Book an Appointment</span>
                        <span className="w-8 h-px bg-maroon-700"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-maroon-950 tracking-tight">
                        Two ways to begin.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {paths.map((path, idx) => (
                        <motion.div
                            key={path.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="bg-white border border-gold-100 p-8 md:p-10"
                        >
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-gold-600 mb-4">
                                {path.label}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-serif text-maroon-950 mb-4">
                                {path.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                {path.desc}
                            </p>
                            <button
                                onClick={idx === 0 ? handleInStore : handleVideoCall}
                                className="inline-flex items-center gap-3 bg-maroon-700 text-white px-6 py-4 font-bold uppercase tracking-widest text-[11px] hover:bg-maroon-800 transition-colors"
                            >
                                {path.cta}
                                <ArrowRight size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookingPaths;
