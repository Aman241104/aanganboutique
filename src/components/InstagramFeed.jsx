import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Heart, MessageCircle, Star, Users } from 'lucide-react';

const InstagramFeed = () => {
    const posts = [
        {
            id: 1,
            url: 'https://www.instagram.com/p/DV5Jnn4DAAC/',
            image: 'https://instagram.fstv8-2.fna.fbcdn.net/v/t39.30808-6/651244921_1570952628365642_1790068551354317179_n.jpg?stp=c0.0.920.1149a_dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzg1MzE1MzI0NDM5OTA2NzIxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjkyMHgxMTUwLnNkci5DMyJ9&_nc_ohc=a9ljmnDhFuwQ7kNvwHhL4bZ&_nc_oc=Adp0kIjQi5lRPr4E03hd151Lc8gaWCb5o30FBGdQ_780rGpPy7-D-oCeDOIxYqfsHsIi3x5JUk8f2RIDkOTculoL&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fstv8-2.fna&_nc_gid=bQONi4fJtGpfnpbTlbvsNA&_nc_ss=7a22e&oh=00_Af38_ogjzgiQOhC-J2lduZZDHvo_oTJg9UaFdStEvwv_Zg&oe=69F6530C',
            likes: '1.2k',
            comments: '45',
            caption: 'Bridal grace in every thread.'
        },
        {
            id: 2,
            url: 'https://www.instagram.com/p/DXoww_ajHMZ/',
            image: 'https://instagram.fstv8-2.fna.fbcdn.net/v/t51.82787-15/680987842_18325535296270186_6718636576117104381_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzg4NDU2Nzc5MzM4MzUyMzM4NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=sUzkTmvMRf8Q7kNvwF4SgkA&_nc_oc=AdqH44mJuJ65q-kq9vEyLAP0TWCwRZ70ewCuE7cpPCq41dxFN9IYbGCDMQXobUQQQKbX9fYeTLSdTS4iREJE9Y86&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fstv8-2.fna&_nc_gid=ezbLpeazCNG27rQHd7SBVA&_nc_ss=7a22e&oh=00_Af36PO1E1dY24LxyIg8dxWid5GANSbx97cGIfDNebaDmSQ&oe=69F65CD4',
            likes: '850',
            comments: '32',
            caption: 'Timeless silhouettes.'
        },
        {
            id: 3,
            url: 'https://www.instagram.com/p/DVLB1p7kWt4/',
            image: 'https://instagram.fstv8-2.fna.fbcdn.net/v/t51.82787-15/642529964_18316383265270186_4584714643640739305_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzg0MDE3MDYwMDQ1NTgzNTMwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMjR4MTM2NS5zZHIuQzMifQ%3D%3D&_nc_ohc=4Dl38yVvY1EQ7kNvwFSnUBr&_nc_oc=Adr1X-G-vKv07aYsjWQUgYToBXcCzEaRWn1RswnUhrtCozCtlTPkdFUaMy7nGXAOJouLy7VgcWL1IuP0GTnPPrIW&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fstv8-2.fna&_nc_gid=18fg7Y99C2hBPXE79i2cbA&_nc_ss=7a22e&oh=00_Af35KpkpNCYFD-i1OoafoKsBAZjdbLwvZjp1ycn7ZT894g&oe=69F6464A',
            likes: '920',
            comments: '28',
            caption: 'Artisan details.'
        },
        {
            id: 4,
            url: 'https://www.instagram.com/p/DUiPGOLkctT/',
            image: 'https://instagram.fstv8-2.fna.fbcdn.net/v/t51.82787-15/675434849_18325535284270186_5634958660750374474_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzg8NDU2Nzc5MTE5NDA4NTEwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMjR4MTI4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=hd28Z564ZPwQ7kNvwF0TOn0&_nc_oc=Adq439sT9X61k1EyCjswo7EAbSOwcfJXwu3eP36lfa-4XI3edCpalVir2FReE_3dAsQdrkBCiEplNGJyh0E_xTw_&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fstv8-2.fna&_nc_gid=6p6dRaA9v3KhQMFa7L7--A&_nc_ss=7a22e&oh=00_Af3DEL54Yq-EqymZJNnr0r2BPIfTEonJuFONKd2my268hw&oe=69F66409',
            likes: '1.1k',
            comments: '56',
            caption: 'Modern ethnic vibes.'
        },
        {
            id: 5,
            url: 'https://www.instagram.com/p/DTAUuOckgJZ/',
            image: 'https://instagram.fstv8-2.fna.fbcdn.net/v/t39.30808-6/610767777_1505949824865923_6147605138651382582_n.jpg?stp=c102.0.819.1024a_dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzgwMTEyOTIwMzA0ODUyMDI2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMjR4MTAyNC5zZHIuQzMifQ%3D%3D&_nc_ohc=Okd-e6sl8x8Q7kNvwFcduS2&_nc_oc=AdrPrxWd0t1y_r2mahV_prj4OyozE9GHjkgkIvLBpSGpe1NV1YuMeEsKsOFiDF8K9OGQziml6p3h79My6abBA49H&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fstv8-2.fna&_nc_gid=4v86pH2lc1EJTSCjxHGCiw&_nc_ss=7a22e&oh=00_Af3LFXsj5tl7z9CiehhUGAifyD5y4dEiQY6hDDqorWBqFw&oe=69F64E98',
            likes: '1.5k',
            comments: '64',
            caption: 'The Aangan Signature.'
        },
        {
            id: 6,
            url: 'https://www.instagram.com/p/DSsJRtZDLd-/',
            image: 'https://instagram.fstv8-1.fna.fbcdn.net/v/t51.82787-15/605531172_18308827207270186_1594466320264664456_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzc5NTQ0OTM3Njc3MzI1Mjk4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMjR4MTM2NS5zZHIuQzMifQ%3D%3D&_nc_ohc=yAX1BqcRM3QQ7kNvwEtfT7t&_nc_oc=AdroRIvEpQZsVjkV7oPWkaFE6BZVoM5AohN_cRvgoLsh6GK4q6hv52CUGJKZKPHBPxNuj83nGasuiRzjU3qd9lNJ&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fstv8-1.fna&_nc_gid=j0E-fWCRGt2bDOmuhkfgmA&_nc_ss=7a22e&oh=00_Af3HFy4BjYuiacuS9gMq6lkNZ_EVYRnCUnGAKhkBHStWcA&oe=69F64522',
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative group overflow-hidden rounded-[2.5rem] bg-white border border-gold-100/50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-gold-300 ${
                                post.featured 
                                    ? 'col-span-2 row-span-2' 
                                    : 'col-span-1 row-span-1'
                            }`}
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
                                    <div className="flex gap-8 text-white/90 text-sm font-bold uppercase tracking-widest">
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

                            {/* Corner Accent for Featured */}
                            {post.featured && (
                                <div className="absolute top-6 left-6 z-10">
                                    <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-gold-100">
                                        <Instagram size={16} className="text-maroon-900" />
                                    </div>
                                </div>
                            )}
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
