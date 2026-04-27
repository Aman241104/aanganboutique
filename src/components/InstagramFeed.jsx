import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
    const posts = [
        {
            id: 1,
            url: 'https://www.instagram.com/p/DV5Jnn4DAAC/',
            image: '/drive_images/optimized/784a4393.webp',
            caption: 'Elegant bridal collection at Aangan Boutique.',
            featured: true
        },
        {
            id: 2,
            url: 'https://www.instagram.com/p/DUiPGOLkctT/',
            image: '/drive_images/optimized/copy_of_0d2a7942_1.webp',
            caption: 'Customized designer wear for every occasion.'
        },
        {
            id: 3,
            url: 'https://www.instagram.com/p/DVLB1p7kWt4/',
            image: '/drive_images/optimized/copy_of_0d2a8385_1.webp',
            caption: 'Exquisite craftsmanship and premium fabrics.'
        },
        {
            id: 4,
            url: 'https://www.instagram.com/p/DTdfLamk55d/',
            image: '/drive_images/optimized/copy_of_0d2a7944_1.webp',
            caption: 'Discover the latest trends in ethnic wear.'
        },
        {
            id: 5,
            url: 'https://www.instagram.com/p/DTAUuOckgJZ/',
            image: '/drive_images/optimized/copy_of_0d2a7946_1.webp',
            caption: 'Traditional meets modern at Aangan.',
            featured: true
        },
        {
            id: 6,
            url: 'https://www.instagram.com/_aanganboutique_/',
            image: '/drive_images/optimized/copy_of_0d2a8350_1.webp',
            caption: 'Stunning festive collection for every celebration.'
        },
        {
            id: 7,
            url: 'https://www.instagram.com/_aanganboutique_/',
            image: '/drive_images/optimized/copy_of_0d2a8369_1.webp',
            caption: 'Handcrafted elegance for the modern woman.'
        },
        {
            id: 8,
            url: 'https://www.instagram.com/_aanganboutique_/',
            image: '/drive_images/optimized/copy_of_0d2a7948_1.webp',
            caption: 'Premium fabrics and timeless designs.'
        },
        {
            id: 9,
            url: 'https://www.instagram.com/_aanganboutique_/',
            image: '/drive_images/optimized/784a4401_1.webp',
            caption: 'Elegant details for the modern bride.',
            featured: false
        },
        {
            id: 10,
            url: 'https://www.instagram.com/_aanganboutique_/',
            image: '/drive_images/optimized/copy_of_0d2a7943_1.webp',
            caption: 'Sophisticated ethnic wear collections.',
            featured: true
        },
        {
            id: 11,
            url: 'https://www.instagram.com/_aanganboutique_/',
            image: '/drive_images/optimized/784a4403.webp',
            caption: 'Grace and style in every thread.',
            featured: false
        },
        {
            id: 12,
            url: 'https://www.instagram.com/_aanganboutique_/',
            image: '/drive_images/optimized/copy_of_0d2a7949_1.webp',
            caption: 'Timeless fashion for every celebration.',
            featured: false
        }
    ];

    return (
        <section id="instagram" className="py-24 md:py-32 bg-[#FDFBF7] overflow-hidden relative border-t border-gray-100">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <Instagram className="text-gold-600 mb-6" size={32} strokeWidth={1.5} />
                        <span className="text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Social Presence</span>
                        <h2 className="font-serif text-4xl lg:text-6xl text-maroon-900 mb-6">@_aanganboutique_</h2>
                        <div className="w-24 h-px bg-gold-400 mb-8"></div>
                    </motion.div>
                </div>

                {/* Masonry-style grid with featured (larger) posts */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative group overflow-hidden rounded-xl shadow-md ${
                                post.featured 
                                    ? 'col-span-2 row-span-2 aspect-square' 
                                    : 'aspect-square'
                            }`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-maroon-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <div className="p-4 text-center">
                                    <Instagram className="text-white mx-auto mb-2" size={24} />
                                    <p className="text-white/90 text-xs mb-2 max-w-[200px] font-light leading-relaxed hidden md:block">{post.caption}</p>
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
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-10 py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    >
                        <Instagram size={18} />
                        Follow @_aanganboutique_
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
