import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Suman Khanchandani',
        meta: '12 reviews',
        rating: 5,
        review: 'The boutique has wide collection of indian and indowestern clothes for people of all sizes. Their personal attention to our outfit requirement made the selection process quick and easy for us. They also made sure the fit and final look was as per our choice. Thanks for your beautiful work!',
        date: '2 months ago',
        avatarColor: 'bg-gold-600'
    },
    {
        id: 2,
        name: 'Nidhi Bajaj',
        meta: '7 reviews',
        rating: 5,
        review: 'Always my first choice! Juhi di & Pradeep bhaiya make every size feel beautiful. No body shaming, only amazing designs for every occasion - from marriage to kitty parties. Love Aagan Boutique!',
        date: '2 months ago',
        avatarColor: 'bg-maroon-600'
    },
    {
        id: 3,
        name: 'Swati Babel',
        meta: 'Local Guide · 7 reviews',
        rating: 5,
        review: 'Aangan Boutique truly exceeded my expectations. They helped me with the perfect Indo-Western dress at the very last minute and even opened the store early just for me so I could get the ideal fit before flying back to another city.',
        date: '6 months ago',
        avatarColor: 'bg-maroon-900'
    },
    {
        id: 4,
        name: 'Ritika Parmar',
        meta: '3 reviews',
        rating: 5,
        review: 'Aangan boutique is a go-to place for all dressing solutions.. the owners Pradeep and Juhi ji have been a constant support throughout my wedding preparations - my blouses and specially my wedding veil.. and the work quality is exceptional without a single room for complaint. I highly recommend this boutique to all :)',
        date: '5 months ago',
        avatarColor: 'bg-gold-500'
    },
    {
        id: 5,
        name: 'Neelam Mukhija',
        meta: '1 review',
        rating: 4,
        review: "Honestly didn't expect the collection to be this good, ethnic wear and indo western both were really nice. Ended up buying more than planned",
        date: '2 months ago',
        avatarColor: 'bg-maroon-700'
    },
    {
        id: 6,
        name: 'Pankaj Patil',
        meta: '4 reviews',
        rating: 5,
        review: "I am a regular customer of Aangan Boutique and I always love their collection. The best part is the warm and friendly behaviour of the entire staff. I really appreciate Juhi Ma'am and Pradeep bhai for always helping with outfit selection and making sure every shopping experience is smooth. Highly recommend Aangan Boutique for wedding and festive shopping in Ahmedabad.",
        date: 'a month ago',
        avatarColor: 'bg-maroon-500'
    },
    {
        id: 7,
        name: 'Jaimika Tahelani',
        meta: '4 reviews',
        rating: 5,
        review: 'I had an absolutely delightful experience at Aangan Boutique. The collection is elegant, with a perfect blend of contemporary trends and timeless classics. The fabric quality exceeded my expectations - rich, comfortable, and clearly premium. The fitting session was handled with such expertise that my outfit looked tailor-made.',
        date: '4 months ago',
        avatarColor: 'bg-gold-700'
    }
];

// Split into columns for the auto-scrolling wall, duplicating each column's
// contents once so the loop is seamless (translateY(-50%) lands exactly
// back where the original set began).
const columns = [[], [], []];
testimonials.forEach((item, idx) => columns[idx % 3].push(item));
const loopedColumns = columns.map((col) => [...col, ...col]);
const columnConfig = [
    { direction: 'up', duration: 34 },
    { direction: 'down', duration: 42 },
    { direction: 'up', duration: 38 },
];

const ReviewCard = ({ item }) => (
    <div className="group relative flex flex-col h-full bg-white rounded-[1.75rem] border border-gold-900/10 shadow-md hover:shadow-xl transition-shadow duration-500 p-8 md:p-9">
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
                    <p className="text-gray-400 text-[11px] uppercase tracking-widest font-medium">{item.meta}</p>
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
    </div>
);

const MarqueeColumn = ({ items, direction, duration }) => (
    <div className="marquee-column relative h-[560px] md:h-[680px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
        <div
            className={`flex flex-col gap-6 md:gap-8 ${direction === 'down' ? 'animate-scroll-down' : 'animate-scroll-up'}`}
            style={{ animationDuration: `${duration}s` }}
        >
            {items.map((item, idx) => (
                <ReviewCard key={`${item.id}-${idx}`} item={item} />
            ))}
        </div>
    </div>
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
                                <span className="text-maroon-900 text-[10px] font-bold uppercase tracking-widest">4.9 · 148 Google Reviews</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Auto-scrolling Review Wall */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {columnConfig.map((cfg, idx) => (
                            <div key={idx} className={idx === 2 ? 'hidden lg:block' : idx === 1 ? 'hidden sm:block' : ''}>
                                <MarqueeColumn items={loopedColumns[idx]} direction={cfg.direction} duration={cfg.duration} />
                            </div>
                        ))}
                    </motion.div>
                    <p className="text-center text-[10px] uppercase tracking-widest text-gray-400 mt-8">Hover a review to pause</p>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
