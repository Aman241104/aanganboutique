import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Clock, CalendarDays } from 'lucide-react';
import { blogPosts, getPostBySlug } from '../data/blogPosts';
import { useDocumentMeta, useJsonLd, SITE_URL } from '../lib/seo';
import { whatsappUrl } from '../lib/whatsapp';
import { trackEvent } from '../lib/metaPixel';

const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

const BlogPost = () => {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    const related = post
        ? blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
        : [];

    useDocumentMeta(
        post
            ? {
                  title: `${post.title} | Aangan Boutique Journal`,
                  description: post.metaDescription,
                  path: `/blog/${post.slug}`,
                  image: `${SITE_URL}${post.coverImage}`,
              }
            : { title: 'Aangan Boutique Journal', path: '/blog' }
    );

    useJsonLd(
        'blogpost-jsonld',
        post
            ? {
                  '@context': 'https://schema.org',
                  '@type': 'BlogPosting',
                  headline: post.title,
                  description: post.metaDescription,
                  image: `${SITE_URL}${post.coverImage}`,
                  datePublished: post.date,
                  dateModified: post.date,
                  author: { '@type': 'Organization', name: 'Aangan Boutique' },
                  publisher: {
                      '@type': 'Organization',
                      name: 'Aangan Boutique',
                      logo: { '@type': 'ImageObject', url: `${SITE_URL}/Logo.webp` },
                  },
                  mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
              }
            : null
    );

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <article className="bg-[#FDFBF7] min-h-screen">
            <header className="pt-40 md:pt-52 pb-12 md:pb-16 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gold-100/40 rounded-full blur-[120px] pointer-events-none" />
                <div className="container mx-auto px-4 lg:px-12 relative z-10">
                    <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-8">
                        <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/blog" className="hover:text-gold-600 transition-colors">Journal</Link>
                        <span>/</span>
                        <span className="text-maroon-900 normal-case tracking-normal">{post.category}</span>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <span className="text-gold-600 uppercase tracking-[0.5em] text-[10px] font-bold block mb-6">{post.category}</span>
                        <h1 className="font-serif text-3xl md:text-5xl text-maroon-900 leading-[1.05] mb-6">
                            {post.title}
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-6">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-gray-400 font-medium">
                            <span className="inline-flex items-center gap-2"><CalendarDays size={13} /> {formatDate(post.date)}</span>
                            <span className="inline-flex items-center gap-2"><Clock size={13} /> {post.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            <div className="container mx-auto px-4 lg:px-12">
                <div className="max-w-3xl mx-auto -mt-2 mb-12 md:mb-16 rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.2)]">
                    <img
                        src={post.coverImage}
                        alt={post.coverAlt}
                        className="w-full h-auto object-cover aspect-[16/9]"
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-12 pb-24 md:pb-32">
                <div className="max-w-3xl mx-auto">
                    {post.sections.map((section, idx) => (
                        <motion.section
                            key={section.heading}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className={idx > 0 ? 'mt-10 md:mt-12' : ''}
                        >
                            <h2 className="font-serif text-2xl md:text-3xl text-maroon-900 mb-5">{section.heading}</h2>
                            <div className="space-y-5">
                                {section.paragraphs.map((p, pIdx) => (
                                    <p key={pIdx} className="text-maroon-950/80 font-light leading-relaxed text-[16px] md:text-[17px]">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </motion.section>
                    ))}

                    {/* CTA */}
                    <div className="mt-16 md:mt-20 bg-maroon-950 text-cream rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl md:text-4xl mb-4">Planning your own outfit?</h3>
                            <p className="text-white/70 font-light mb-8 max-w-xl mx-auto">
                                Book an in-store visit or a video consultation with our design team at our Sindhu Bhavan Road atelier in Ahmedabad.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href={whatsappUrl(`Hi! I read "${post.title}" on your journal and would like to book a consultation.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackEvent('Lead', { content_name: 'Blog CTA', content_category: post.category })}
                                    className="inline-flex items-center gap-3 bg-gold-500 text-maroon-950 px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-400 transition-all"
                                >
                                    Book a Consultation <ArrowRight size={16} />
                                </a>
                                <Link
                                    to="/#visit"
                                    className="inline-flex items-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:border-gold-400 hover:text-gold-400 transition-all"
                                >
                                    Visit Our Atelier
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-3 mt-14 text-maroon-900 hover:text-gold-600 transition-colors text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        <ArrowLeft size={15} /> Back to the Journal
                    </Link>
                </div>
            </div>

            {related.length > 0 && (
                <section className="pb-24 md:pb-32 border-t border-gold-900/10 pt-16 md:pt-20">
                    <div className="container mx-auto px-4 lg:px-12">
                        <h3 className="font-serif text-2xl md:text-3xl text-maroon-900 mb-10 text-center">
                            More from the <span className="italic font-light text-gold-600">Journal</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {related.map((p) => (
                                <Link
                                    key={p.slug}
                                    to={`/blog/${p.slug}`}
                                    className="group block bg-white rounded-[1.5rem] border border-gold-900/10 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden"
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={p.coverImage}
                                            alt={p.coverAlt}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gold-600">{p.category}</span>
                                        <h4 className="font-serif text-lg text-maroon-900 mt-2 leading-tight group-hover:text-gold-600 transition-colors">
                                            {p.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </article>
    );
};

export default BlogPost;
