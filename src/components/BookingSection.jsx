import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { whatsappUrl } from '../lib/whatsapp';
import { sendNotificationEmail } from '../lib/email';
import { trackEvent } from '../lib/metaPixel';

const occasions = ['Wedding Trousseau', 'Festive Wear', 'Everyday Ethnic', 'Custom Design', 'Other'];

const callPoints = [
    'Live walkthrough of relevant collections on video',
    'Fabric, color and design discussion for your occasion',
    'Guidance through the measurement process',
    'Timeline and shipping discussed for your location',
];

const BookingSection = () => {
    const [name, setName] = useState('');
    const [cityCountry, setCityCountry] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [occasion, setOccasion] = useState('Wedding Trousseau');

    const handleSubmit = () => {
        let message = `Hi! I'd like to book a video consultation with Aangan Boutique.`;
        if (name) message += `\nName: ${name}`;
        if (cityCountry) message += `\nCity/Country: ${cityCountry}`;
        if (whatsappNumber) message += `\nWhatsApp Number: ${whatsappNumber}`;
        if (occasion) message += `\nOccasion: ${occasion}`;
        message += `\n\nPlease share your availability for the call.`;

        window.open(whatsappUrl(message), '_blank');
        trackEvent('Lead', { content_name: 'Video Consultation Booking', occasion });
        sendNotificationEmail({
            type: 'Video Consultation',
            name: name || '—',
            email: '—',
            phone: whatsappNumber || '—',
            city_country: cityCountry || '—',
            occasion: occasion || '—',
            date: '—',
            time_slot: '—',
            message,
        });
    };

    return (
        <section className="py-24 md:py-32 bg-cream relative overflow-hidden" id="video-consultation">
            <div className="container mx-auto px-4 lg:px-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-maroon-950 rounded-2xl md:rounded-3xl px-8 py-14 md:px-16 md:py-20 relative overflow-hidden"
                >
                    {/* Artistic Background Elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/[0.04] skew-x-12 translate-x-32 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/[0.06] rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>

                    <div className="grid md:grid-cols-2 gap-14 md:gap-20 relative z-10">
                        <div>
                            <span className="text-gold-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-5 block">
                                What the Call Covers
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                                What to expect from a video consultation.
                            </h2>
                            <p className="text-cream/60 text-base leading-relaxed mb-10 max-w-md">
                                A 30&ndash;45 minute call where we bring the collection to you, wherever you are.
                            </p>
                            <ul className="space-y-4">
                                {callPoints.map((point) => (
                                    <li key={point} className="flex gap-3 text-cream/80 text-sm leading-relaxed">
                                        <span className="text-gold-400 shrink-0">&mdash;</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="space-y-5 mb-8">
                                <div>
                                    <label className="block text-[10px] font-bold text-gold-400/80 mb-2 uppercase tracking-widest">Full Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name"
                                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/30 py-3 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gold-400/80 mb-2 uppercase tracking-widest">City / Country</label>
                                    <input
                                        type="text"
                                        value={cityCountry}
                                        onChange={(e) => setCityCountry(e.target.value)}
                                        placeholder="e.g. New Jersey, USA"
                                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/30 py-3 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gold-400/80 mb-2 uppercase tracking-widest">WhatsApp Number</label>
                                    <input
                                        type="tel"
                                        value={whatsappNumber}
                                        onChange={(e) => setWhatsappNumber(e.target.value)}
                                        placeholder="+1 ..."
                                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/30 py-3 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gold-400/80 mb-2 uppercase tracking-widest">Occasion</label>
                                    <select
                                        value={occasion}
                                        onChange={(e) => setOccasion(e.target.value)}
                                        className="w-full bg-maroon-950 border-b border-white/20 text-white py-3 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                                    >
                                        {occasions.map((o) => (
                                            <option key={o} value={o} className="text-maroon-950">{o}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleSubmit}
                                className="w-full bg-gold-600 text-white py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-700 transition-all"
                            >
                                Continue on WhatsApp
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingSection;
