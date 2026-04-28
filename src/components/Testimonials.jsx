import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Namita Sheth',
        location: 'Ahmedabad',
        rating: 5,
        review: 'It was really a great experience. I was looking for my reception ball gowns and trust me I went to all areas at Ahmedabad. Be it stadium, be it gurukul, asopalav, sindhubhavan but did not get what I wanted. They had exactly what I wanted. Never tried to sell me which was at higher price. They told me whatever I like would make alteration as per my requirements.',
        date: '10 weeks ago',
        avatarColor: 'bg-gold-600'
    },
    {
        id: 2,
        name: 'Sheetal Thadani',
        location: 'Ahmedabad',
        rating: 5,
        review: 'I’ve been getting a lot of my outfits made from Aangan for several years now, and I’ve always been in love with their work. They are extremely helpful and often accommodate even tight timelines. The perfect fit and the exquisite quality of their embroidery are truly their USP, matched only by their warm hospitality.',
        date: '22 weeks ago',
        avatarColor: 'bg-maroon-500'
    },
    {
        id: 3,
        name: 'Manya Shah',
        location: 'Ahmedabad',
        rating: 5,
        review: 'Amazing experience... Juhi ma’am and Pradeep sir helped a lot and took my preferences into note and gave me the exact outfit which made me feel wonderful and pretty They were very kind and prompt to help me out... I would surely visit again...🥰',
        date: '11 weeks ago',
        avatarColor: 'bg-dark-800'
    },
    {
        id: 4,
        name: 'Reshma Thomas',
        location: 'USA',
        rating: 5,
        review: 'I’ve been getting my saree blouses designed by Aangan Boutique for the last four years, and I genuinely haven’t found anyone who matches their level of understanding and intricacy to detail. They just get it from the exact fit I want to how the blouse should enhance the entire look. If you’re in Ahmedabad and looking for ethnic wear that stands out, this is the place.',
        date: '24 weeks ago',
        avatarColor: 'bg-gold-500'
    },
    {
        id: 5,
        name: 'Harshi Mehta',
        location: 'Dubai',
        rating: 5,
        review: 'Every time I visit Aangan Boutique, I’m genuinely amazed by their collection. It never fails to surprise me with its uniqueness and elegance. Juhi Aunty has an incredible eye for fashion—she always handpicks the perfect garments for me, making the selection process not just easy, but truly enjoyable.',
        date: '34 weeks ago',
        avatarColor: 'bg-maroon-700'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextReview = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevReview = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextReview, 8000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextReview]);

    const handleManualNav = (direction) => {
        setIsAutoPlaying(false);
        if (direction === 'next') nextReview();
        else prevReview();
        
        const timeout = setTimeout(() => setIsAutoPlaying(true), 20000);
        return () => clearTimeout(timeout);
    };

    return (
        <section id="testimonials" className="relative py-24 md:py-48 overflow-hidden flex items-center justify-center min-h-screen bg-[#0A0A0A]">
            {/* Cinematic Immersive Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: 'url(/banner.webp)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-maroon-950/80 to-[#0A0A0A] mix-blend-multiply" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    
                    {/* Editorial Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-gold-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">The Voice of Aangan</span>
                            <h2 className="font-serif text-5xl md:text-8xl text-white mb-8 tracking-tighter">
                                Our Clients <span className="italic font-light text-gold-400">Love Us</span>
                            </h2>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 shadow-2xl"
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
                                <div className="flex flex-col items-start">
                                    <div className="flex text-gold-500 gap-0.5">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" stroke="none" />)}
                                    </div>
                                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">4.9 Stars on Google</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* The Hero Testimonial Stage */}
                    <div className="relative w-full">
                        {/* Organic Animated Blob Container */}
                        <motion.div 
                            animate={{ 
                                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-white/5 backdrop-blur-3xl border border-white/10 scale-110 opacity-50 z-0"
                        />

                        <div className="relative z-10 py-12 px-6 md:px-20">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.1, y: -20 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                                >
                                    {/* Testimonial Content (Left) */}
                                    <div className="lg:col-span-8">
                                        <div className="relative">
                                            <Quote size={80} className="text-gold-500/10 absolute -top-12 -left-8 md:-left-16" fill="currentColor" />
                                            <p className="text-white font-serif text-2xl md:text-4xl leading-relaxed italic relative z-10">
                                                "{testimonials[currentIndex].review}"
                                            </p>
                                        </div>
                                    </div>

                                    {/* Profile & Trust Info (Right) */}
                                    <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right">
                                        <div className="flex flex-col items-start lg:items-end gap-6">
                                            <div className={`w-24 h-24 rounded-full ${testimonials[currentIndex].avatarColor} border-4 border-white/10 shadow-2xl flex items-center justify-center text-white font-serif text-4xl`}>
                                                {testimonials[currentIndex].name.charAt(0)}
                                            </div>
                                            
                                            <div>
                                                <h4 className="text-white text-2xl font-bold mb-1">{testimonials[currentIndex].name}</h4>
                                                <p className="text-gold-400 text-sm uppercase tracking-widest font-bold mb-4">
                                                    {testimonials[currentIndex].location}
                                                </p>
                                                
                                                <div className="flex flex-col items-start lg:items-end gap-3">
                                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                                        <ShieldCheck size={16} className="text-gold-500" />
                                                        <span className="text-white/60 text-[10px] font-bold uppercase tracking-tighter">Verified Review</span>
                                                    </div>
                                                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                                                        Posted {testimonials[currentIndex].date}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* High-End Navigation Controls */}
                    <div className="flex flex-col items-center gap-12 mt-20">
                        {/* Progress Indicator */}
                        <div className="flex gap-3">
                            {testimonials.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-gold-500' : 'w-4 bg-white/10'}`} 
                                />
                            ))}
                        </div>

                        {/* Magnetic Buttons */}
                        <div className="flex gap-8">
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,1)', color: '#000' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleManualNav('prev')}
                                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all group"
                            >
                                <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,1)', color: '#000' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleManualNav('next')}
                                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all group"
                            >
                                <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Social Trust Footer */}
                    <div className="mt-32 pt-16 border-t border-white/5 w-full flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-gold-500" />
                            <span className="text-white text-xs uppercase tracking-widest font-bold">5000+ Happy Brides</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-gold-500" />
                            <span className="text-white text-xs uppercase tracking-widest font-bold">15+ Years of Trust</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-gold-500" />
                            <span className="text-white text-xs uppercase tracking-widest font-bold">Global Presence</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
