import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Namita Sheth',
        location: 'Ahmedabad',
        rating: 5,
        review: 'It was really a great experience. I was looking for my reception ball gowns and trust me I went to all areas at Ahmedabad. Be it stadium , be it gurukul, asopalav , sindhubhavan but did not get what I wanted. All were having same old surti work designs(not that it\'s bad). I was looking to something different which is more western and elegant. They had exactly what I wanted. Never tried to sell me which was at higher price. They told me whatever I like would make alteration as per my requirements.',
        date: '10 weeks ago',
        avatarColor: 'bg-gold-600'
    },
    {
        id: 2,
        name: 'Sheetal Thadani',
        location: 'Ahmedabad',
        rating: 5,
        review: 'I’ve been getting a lot of my outfits made from Aangan for several years now, and I’ve always been in love with their work. They are extremely helpful and often accommodate even tight timelines. The perfect fit and the exquisite quality of their embroidery are truly their USP, matched only by their warm hospitality. Their pricing is also very reasonable, making the whole experience even more delightful.',
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
        review: 'I’ve been getting my saree blouses designed by Aangan Boutique for the last four years, and I genuinely haven’t found anyone who matches their level of understanding and intricacy to detail. They just get it from the exact fit I want to how the blouse should enhance the entire look. If you’re in Ahmedabad and looking for ethnic wear that stands out, this is the place. From statement saree blouses to elegant ethnic dresses, Aangan is your one-stop shop. And the best part? Even if you’re not in Ahmedabad, they take custom orders over video calls!!!',
        date: '24 weeks ago',
        avatarColor: 'bg-gold-500'
    },
    {
        id: 5,
        name: 'Harshi Mehta',
        location: 'Dubai',
        rating: 5,
        review: 'Every time I visit Aangan Boutique, I’m genuinely amazed by their collection. It never fails to surprise me with its uniqueness and elegance. Juhi Aunty has an incredible eye for fashion—she always handpicks the perfect garments for me, making the selection process not just easy, but truly enjoyable. The quality of the material, the finesse in design, and the overall collection are consistently top-notch.',
        date: '34 weeks ago',
        avatarColor: 'bg-maroon-700'
    },
    {
        id: 6,
        name: 'Aastha Andani',
        location: 'Mumbai',
        rating: 5,
        review: 'Absolutely loved my experience, the tailoring is spot on and everything fits perfectly and is made with excellent attention to detail and quality. Highly recommend this boutique for anyone looking for beautifully crafted pieces! 💖',
        date: '8 weeks ago',
        avatarColor: 'bg-gold-700'
    },
    {
        id: 7,
        name: 'Dhaivat Kothary',
        location: 'Ahmedabad',
        rating: 5,
        review: 'We chose Aangan Boutique on SBR Road for our entire Wedding Trousseau, and it was the best decision! The personalized styling consultation was so helpful, making the whole process seamless. The team is incredibly courteous and knowledgeable. Highly recommend them for their beautiful collection and excellent service in Ahmedabad',
        date: '5 weeks ago',
        avatarColor: 'bg-dark-700'
    },
    {
        id: 8,
        name: 'Twisha Khubchandani',
        location: 'London, UK',
        rating: 5,
        review: 'I had an amazing time shopping at Aangan. We shopped for ethnic dresses and I gifted my mother a piece from an extraordinary collection from the boutique and she loved it. Go and check out this boutique now!',
        date: '23 weeks ago',
        avatarColor: 'bg-maroon-400'
    },
    {
        id: 9,
        name: 'Anuja Kohli',
        location: 'New Delhi',
        rating: 5,
        review: 'I had the most wonderful experience shopping for my wedding outfits at Aangan Boutique in Ahmedabad. I picked 4 of my wedding looks from here, and each one turned out to be absolutely perfect! Juhi & Pradeep Motwani and their team was incredibly sweet and helpful throughout. They didn’t just show me pieces — they really took the time to understand my taste, preferences, and the kind of look I wanted for each function.',
        date: '37 weeks ago',
        avatarColor: 'bg-gold-400'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextReview = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prevReview = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="relative py-16 md:py-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Unified Blurred Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105 blur-2xl opacity-60"
                style={{ backgroundImage: 'url(/banner.jpg)' }}
            >
                <div className="absolute inset-0 bg-maroon-900/40 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="glass p-6 md:p-12 rounded-blob-2 bg-white/10 backdrop-blur-xl border border-white/20 relative flex flex-col items-center"
                    >
                        <div className="absolute -top-6 -left-6 text-gold-400 bg-maroon-900 rounded-full p-4 shadow-xl">
                            <Quote size={32} fill="currentColor" />
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">Our Clients Love Us</h2>
                            <div className="flex items-center justify-center gap-2 mb-4 bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm border border-white/5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                                <span className="text-white text-sm font-medium">4.9 Stars on Google</span>
                            </div>
                        </div>

                        <div className="relative w-full max-w-2xl min-h-[280px] md:min-h-[220px] flex items-center justify-center">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full bg-white rounded-xl shadow-2xl p-6 md:p-8"
                                >
                                    {/* Google Review Card Header */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-full ${testimonials[currentIndex].avatarColor} text-white flex items-center justify-center font-bold text-xl`}>
                                            {testimonials[currentIndex].name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-base">{testimonials[currentIndex].name}</h4>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <span>{testimonials[currentIndex].location} • {testimonials[currentIndex].date}</span>
                                            </div>
                                        </div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6 ml-auto opacity-50" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex text-gold-500 mb-3">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" stroke="none" />)}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-gray-700 text-base leading-relaxed font-light">
                                        {testimonials[currentIndex].review}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prevReview}
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextReview}
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
