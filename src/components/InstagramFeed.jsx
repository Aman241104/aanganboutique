import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Heart, MessageCircle, Star, Users } from 'lucide-react';

const InstagramFeed = () => {
    const posts = [
        {
            id: 1,
            url: 'https://www.instagram.com/p/DV5Jnn4DAAC/',
            image: `https://images.weserv.nl/?url=${encodeURIComponent('https://www.instagram.com/p/DV5Jnn4DAAC/media/?size=l')}`,
            likes: '1.2k',
            comments: '45',
            caption: 'Bridal grace in every thread.'
        },
        {
            id: 2,
            url: 'https://www.instagram.com/p/DXoww_ajHMZ/',
            image: `https://images.weserv.nl/?url=${encodeURIComponent('https://www.instagram.com/p/DXoww_ajHMZ/media/?size=l')}`,
            likes: '850',
            comments: '32',
            caption: 'Timeless silhouettes.'
        },
        {
            id: 3,
            url: 'https://www.instagram.com/p/DVLB1p7kWt4/',
            image: `https://images.weserv.nl/?url=${encodeURIComponent('https://www.instagram.com/p/DVLB1p7kWt4/media/?size=l')}`,
            likes: '920',
            comments: '28',
            caption: 'Artisan details.'
        },
        {
            id: 4,
            url: 'https://www.instagram.com/p/DUiPGOLkctT/',
            image: `https://images.weserv.nl/?url=${encodeURIComponent('https://www.instagram.com/p/DUiPGOLkctT/media/?size=l')}`,
            likes: '1.1k',
            comments: '56',
            caption: 'Modern ethnic vibes.'
        },
        {
            id: 5,
            url: 'https://www.instagram.com/p/DTAUuOckgJZ/',
            image: `https://images.weserv.nl/?url=${encodeURIComponent('https://www.instagram.com/p/DTAUuOckgJZ/media/?size=l')}`,
            likes: '1.5k',
            comments: '64',
            caption: 'The Aangan Signature.'
        },
        {
            id: 6,
            url: 'https://www.instagram.com/p/DSsJRtZDLd-/',
            image: `https://images.weserv.nl/?url=${encodeURIComponent('https://www.instagram.com/p/DSsJRtZDLd-/media/?size=l')}`,
            likes: '740',
            comments: '19',
            caption: 'Exquisite patterns.'
        }
    ];

    return (
        <section id="instagram" className="py-24 md:py-40 bg-[#FDFBF7] overflow-hidden relative border-t border-gray-100">
            {/* Background Texture & Decor */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-200/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <motion.div 
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-10 border border-gold-100 relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity"></div>
                            <Instagram className="text-gold-600 group-hover:text-maroon-900 transition-colors" size={36} strokeWidth={1} />
                        </motion.div>
                        
                        <span className="text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold mb-4">The Atelier on Instagram</span>
                        <h2 className="font-serif text-5xl lg:text-8xl text-maroon-950 mb-8 tracking-tighter">
                            @_aanganboutique_
                        </h2>
                        
                        {/* Social Stats Bar */}
                        <div className="flex gap-12 py-4 px-10 bg-white/50 backdrop-blur-md rounded-full border border-gold-100 shadow-sm mb-12">
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-gold-600" />
                                <span className="text-sm font-medium text-maroon-900">50k+ Community</span>
                            </div>
                            <div className="w-px h-4 bg-gold-200 self-center"></div>
                            <div className="flex items-center gap-2">
                                <Star size={16} className="text-gold-600" />
                                <span className="text-sm font-medium text-maroon-900">Daily Updates</span>
                            </div>
                        </div>

                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
                    </motion.div>
                </div>

                {/* Magazine-Style Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group overflow-hidden rounded-[2.5rem] bg-white border border-gold-100/50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-gold-300 aspect-square"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />
                            
                            {/* Sophisticated Overlay */}
                            <div className="absolute inset-0 bg-maroon-950/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8">
                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    className="text-center"
                                >
                                    <p className="text-gold-100 font-serif italic text-lg mb-6 leading-relaxed">
                                        "{post.caption}"
                                    </p>
                                    <div className="flex gap-8 text-white/90 text-sm font-bold uppercase tracking-widest justify-center">
                                        <div className="flex items-center gap-2 group/stat">
                                            <Heart size={18} className="group-hover/stat:text-red-400 transition-colors" />
                                            <span>{post.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MessageCircle size={18} />
                                            <span>{post.comments}</span>
                                        </div>
                                    </div>
                                </motion.div>
                                <div className="absolute bottom-8 right-8 text-gold-400/50">
                                    <ExternalLink size={20} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Interactive CTA */}
                <div className="text-center mt-32 relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gold-200 z-0"></div>
                    <motion.a
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.instagram.com/_aanganboutique_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex items-center gap-6 bg-maroon-950 text-white px-16 py-6 rounded-full uppercase tracking-[0.4em] text-[11px] font-bold hover:shadow-[0_20px_50px_rgba(44,4,11,0.3)] transition-all duration-500 border border-maroon-800"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Instagram size={16} />
                        </div>
                        Join The Journey
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
