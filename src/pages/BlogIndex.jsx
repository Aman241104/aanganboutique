import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useDocumentMeta } from '../lib/seo';

const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

const BlogIndex = () => {
    useDocumentMeta({
        title: 'The Aangan Journal — Bridal & Festive Wear Guides, Ahmedabad | Aangan Boutique',
        description: 'Guides on bridal lehenga shopping, wedding trousseau planning, festive wear and Indo-western outfits from Aangan Boutique, a designer boutique in Ahmedabad.',
        path: '/blog',
    });

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <section className="pt-40 md:pt-52 pb-16 md:pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gold-100/40 rounded-full blur-[120px] pointer-events-none" />
                <div className="container mx-auto px-4 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <span className="text-gold-600 uppercase tracking-[0.5em] text-[10px] font-bold block mb-6">The Aangan Journal</span>
                        <h1 className="font-serif text-4xl md:text-6xl text-maroon-900 leading-[0.95] mb-6">
                            Guides on bridal, trousseau <span className="italic font-light text-gold-600">& festive wear</span>
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                            Notes from our design and tailoring team on shopping for bridal lehengas, planning a wedding trousseau,
                            and choosing festive and Indo-western outfits — written for brides and families shopping in Ahmedabad
                            and beyond.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-24 md:pb-40">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {blogPosts.map((post, idx) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: (idx % 3) * 0.08 }}
                                className="group flex flex-col bg-white rounded-[1.75rem] border border-gold-900/10 shadow-md hover:shadow-xl transition-shadow duration-500 overflow-hidden"
                            >
                                <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-[4/3]">
                                    <img
                                        src={post.coverImage}
                                        alt={post.coverAlt}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </Link>
                                <div className="flex flex-col flex-1 p-7 md:p-8">
                                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-gold-600 mb-4">
                                        <span>{post.category}</span>
                                        <span className="w-1 h-1 rounded-full bg-gold-400" />
                                        <span className="inline-flex items-center gap-1 text-gray-400 normal-case tracking-normal font-medium">
                                            <Clock size={11} /> {post.readTime}
                                        </span>
                                    </div>
                                    <h2 className="font-serif text-xl md:text-2xl text-maroon-900 leading-tight mb-3">
                                        <Link to={`/blog/${post.slug}`} className="hover:text-gold-600 transition-colors">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-500 text-sm font-light leading-relaxed flex-1 mb-6">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-5 border-t border-gold-900/10">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400">{formatDate(post.date)}</span>
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-maroon-900 hover:text-gold-600 transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
                                        >
                                            Read <ArrowRight size={13} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogIndex;
