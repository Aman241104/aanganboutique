import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
    // Placeholder data for Instagram posts
    // In a real scenario, these would be fetched from Instagram Basic Display API
    const posts = [
        {
            id: 1,
            url: 'https://www.instagram.com/p/DF9-2-vM-u0/',
            image: 'https://images.unsplash.com/photo-1583391733973-727719681739?q=80&w=2574&auto=format&fit=crop',
            caption: 'Elegant bridal collection at Aangan Boutique.'
        },
        {
            id: 2,
            url: 'https://www.instagram.com/p/DF9-2-vM-u0/',
            image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop',
            caption: 'Customized designer wear for every occasion.'
        },
        {
            id: 3,
            url: 'https://www.instagram.com/p/DF9-2-vM-u0/',
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop',
            caption: 'Exquisite craftsmanship and premium fabrics.'
        },
        {
            id: 4,
            url: 'https://www.instagram.com/p/DF9-2-vM-u0/',
            image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2670&auto=format&fit=crop',
            caption: 'Discover the latest trends in ethnic wear.'
        },
        {
            id: 5,
            url: 'https://www.instagram.com/p/DF9-2-vM-u0/',
            image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=2574&auto=format&fit=crop',
            caption: 'Traditional meets modern at Aangan.'
        }
    ];

    return (
        <section id="instagram" className="py-12 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <Instagram className="text-gold-600 mb-4" size={40} />
                        <span className="text-gold-600 uppercase tracking-widest text-xs font-semibold mb-2">Follow Us on Instagram</span>
                        <h2 className="font-serif text-4xl lg:text-5xl text-dark-900 mb-4">@_aanganboutique_</h2>
                        <div className="w-24 h-1 bg-gold-500 rounded-full mb-8"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group aspect-square overflow-hidden rounded-xl shadow-md"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-maroon-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="p-4 text-center">
                                    <Instagram className="text-white mx-auto mb-2" size={24} />
                                    <span className="text-white text-[10px] uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
                                        View Post <ExternalLink size={10} />
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://www.instagram.com/_aanganboutique_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-maroon-900 text-white px-10 py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-maroon-800 transition-colors shadow-lg"
                    >
                        Visit Our Profile
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
