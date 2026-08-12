import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const posts = [
    { id: 1, image: '/drive_images/optimized/copy_of_0d2a7944_1.webp', caption: 'Bridal grace in every thread.' },
    { id: 2, image: '/drive_images/optimized/copy_of_0d2a7946_1.webp', caption: 'Timeless silhouettes.' },
    { id: 3, image: '/drive_images/optimized/copy_of_0d2a7948_1.webp', caption: 'Artisan details.' },
    { id: 4, image: '/drive_images/optimized/copy_of_0d2a8385_1.webp', caption: 'Modern ethnic vibes.' },
    { id: 5, image: '/drive_images/optimized/copy_of_0d2a8406_-_copy_1.webp', caption: 'The Aangan signature.' },
    { id: 6, image: '/gallery/optimized/craft1.webp', caption: 'Exquisite patterns.' },
];

const PROFILE_URL = 'https://www.instagram.com/_aanganboutique_/';

const InstagramFeed = () => {
    return (
        <section id="instagram" className="py-20 md:py-28 bg-[#FDFBF7] overflow-hidden relative border-t border-gray-100">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-200/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                {/* Compact Profile Card */}
                <motion.a
                    href={PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-5 max-w-md mx-auto mb-16 p-5 bg-white rounded-3xl border border-gold-100 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all group"
                >
                    <div className="w-16 h-16 rounded-full p-[2.5px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shrink-0">
                        <div className="w-full h-full rounded-full bg-white p-1.5">
                            <img src="/Logo1.webp" alt="Aangan Boutique" className="w-full h-full rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-1.5 text-maroon-950 font-bold text-sm">
                            <Instagram size={14} className="text-gold-600 shrink-0" />
                            <span className="truncate">_aanganboutique_</span>
                        </div>
                        <p className="text-gray-400 text-xs font-light">The atelier on Instagram</p>
                    </div>
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-white bg-maroon-950 px-4 py-2 rounded-full group-hover:bg-gold-600 transition-colors">
                        Follow
                    </span>
                </motion.a>

                {/* Post Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={PROFILE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group overflow-hidden rounded-[1.5rem] bg-white border border-gold-100/50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-gold-300 aspect-square"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-maroon-950/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4">
                                <p className="text-gold-100 font-serif italic text-sm text-center">"{post.caption}"</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="text-center mt-14">
                    <a
                        href={PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-maroon-900 font-bold uppercase tracking-widest text-[10px] hover:text-gold-600 transition-colors"
                    >
                        View Full Profile <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
