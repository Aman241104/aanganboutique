import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';

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
        avatarColor: 'bg-maroon-600'
    },
    {
        id: 3,
        name: 'Manya Shah',
        location: 'Ahmedabad',
        rating: 5,
        review: 'Amazing experience... Juhi ma’am and Pradeep sir helped a lot and took my preferences into note and gave me the exact outfit which made me feel wonderful and pretty They were very kind and prompt to help me out... I would surely visit again...🥰',
        date: '11 weeks ago',
        avatarColor: 'bg-maroon-900'
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

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const ReviewCard = ({ item }) => (
    <motion.div
        variants={cardVariants}
        className="group relative flex flex-col h-full bg-white rounded-[1.75rem] border border-gold-900/10 shadow-md hover:shadow-xl transition-shadow duration-500 p-8 md:p-9"
    >
        <Quote size={36} className="text-gold-500/20 mb-4" fill="currentColor" />

        <div className="flex items-center gap-1 mb-4">
            {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={14} className="text-gold-500" fill="currentColor" stroke="none" />
            ))}
        </div>

        <p className="text-maroon-950/80 font-light leading-relaxed text-[15px] flex-1 mb-8">
            "{item.review}"
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-gold-900/10">
            <div className="flex items-center gap-3">
                <div className={`w-11 h-11 shrink-0 rounded-full ${item.avatarColor} flex items-center justify-center text-white font-serif text-lg`}>
                    {item.name.charAt(0)}
                </div>
                <div>
                    <h4 className="text-maroon-900 font-serif text-base font-bold leading-tight">{item.name}</h4>
                    <p className="text-gray-400 text-[11px] uppercase tracking-widest font-medium">{item.location}</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-1.5 shrink-0">
                <div className="flex items-center gap-1 text-gold-600">
                    <ShieldCheck size={13} />
                    <span className="text-[9px] font-bold uppercase tracking-wider">Verified</span>
                </div>
                <span className="text-gray-300 text-[9px] uppercase tracking-wider">{item.date}</span>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 md:py-40 bg-[#FDFBF7] relative overflow-hidden">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center text-center mb-14 md:mb-20"
                    >
                        <div className="w-16 h-px bg-gold-500 mb-6" />
                        <h3 className="text-gold-600 tracking-[0.4em] uppercase text-[10px] font-bold mb-4">The Voice of Aangan</h3>
                        <h2 className="font-serif text-4xl md:text-6xl text-maroon-900 mb-8 tracking-tight leading-[0.95]">
                            Our Clients <span className="italic font-light text-gold-600">Love Us</span>
                        </h2>

                        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gold-900/10 shadow-sm">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                            <div className="flex flex-col items-start">
                                <div className="flex text-gold-500 gap-0.5">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" stroke="none" />)}
                                </div>
                                <span className="text-maroon-900 text-[10px] font-bold uppercase tracking-widest">4.9 Stars on Google</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Review Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {testimonials.map((item) => (
                            <ReviewCard key={item.id} item={item} />
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
