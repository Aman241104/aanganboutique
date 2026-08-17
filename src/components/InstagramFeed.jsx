import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Play } from 'lucide-react';

// Real Instagram Reels, self-hosted in /public/reels/. To add another, give
// Claude the reel link — it downloads the video + a poster frame into
// /public/reels/ and adds an entry here.
const posts = [
    { id: 1, video: '/reels/aangan-reel1.mp4', poster: '/reels/aangan-reel1-poster.webp', caption: 'One more won’t hurt.' },
    { id: 2, video: '/reels/aangan-reel2.mp4', poster: '/reels/aangan-reel2-poster.webp', caption: 'The beauty of this yellow anarkali.' },
    { id: 3, video: '/reels/aangan-reel3.mp4', poster: '/reels/aangan-reel3-poster.webp', caption: 'Felt like a desi Barbie in this outfit.' },
    { id: 4, video: '/reels/aangan-reel4.mp4', poster: '/reels/aangan-reel4-poster.webp', caption: 'Straight from the window display.' },
    { id: 5, video: '/reels/aangan-reel5.mp4', poster: '/reels/aangan-reel5-poster.webp', caption: 'Soft hues, statement embroidery.' },
    { id: 6, video: '/reels/aangan-reel6.mp4', poster: '/reels/aangan-reel6-poster.webp', caption: 'White just hits different.' },
    { id: 7, video: '/reels/aangan-reel7.mp4', poster: '/reels/aangan-reel7-poster.webp', caption: 'Can’t walk past without stopping.' },
];

const PROFILE_URL = 'https://www.instagram.com/_aanganboutique_/';

const InstagramFeed = () => {
    const [playingId, setPlayingId] = useState(null);

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

                {/* Reels Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {posts.map((post, index) => {
                        const isPlaying = playingId === post.id;
                        return (
                            <motion.div
                                key={post.id}
                                className="relative group overflow-hidden rounded-[1.5rem] bg-black border border-gold-100/50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-gold-300 aspect-[9/16] cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                onClick={() => setPlayingId(isPlaying ? null : post.id)}
                            >
                                {isPlaying ? (
                                    <video
                                        src={post.video}
                                        poster={post.poster}
                                        autoPlay
                                        controls
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={post.poster}
                                            alt={post.caption}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-maroon-900 shadow-lg group-hover:scale-110 transition-transform">
                                                <Play size={18} fill="currentColor" className="ml-0.5" />
                                            </div>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                                            <p className="text-white font-serif italic text-xs leading-snug">"{post.caption}"</p>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        );
                    })}
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
