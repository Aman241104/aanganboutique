import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-12 md:py-20 bg-cream">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image */}
                    {/* Creative Logo Showcase */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Decorative Frame Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-maroon-900 z-0"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold-500 z-0"></div>

                            {/* Floating Glass Container */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 bg-white/50 backdrop-blur-sm p-12 m-8 border border-white/40 shadow-xl rounded-2xl"
                            >
                                <img
                                    src="/Logo.webp"
                                    alt="Aangan Boutique Logo"
                                    className="w-full h-auto object-contain drop-shadow-lg"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-gold-600 tracking-widest uppercase text-sm font-semibold mb-2">Our Story</h3>
                            <h2 className="font-serif text-4xl lg:text-5xl text-maroon-900 mb-6">Why Aangan Boutique?</h2>
                            <p className="text-dark-800 leading-relaxed text-lg font-light mb-6">
                                Aangan Boutique is a multi-designer store located at Sindhubhavan Road, Ahmedabad, offering thoughtfully curated Indian, ethnic, Indo-western and contemporary designer wear.
                                Rooted in Indian tradition yet styled for the modern global woman, we design outfits for every story — from weddings and opening ceremonies to festive poojas, cocktail evenings, birthday celebrations and grand family gatherings.

                            </p>
                            <p className="text-dark-800 leading-relaxed text-lg font-light mb-8">
                                Every piece at Aangan reflects premium craftsmanship, refined fabrics, and elegant detailing, paired with personalised styling to ensure you feel confident, graceful, and effortlessly distinguished — no matter where in the world you belong.

                            </p>

                            <button
                                onClick={() => window.open('https://www.instagram.com/_aanganboutique_/', '_blank')}
                                className="border border-maroon-900 text-maroon-900 px-8 py-3 uppercase tracking-widest text-sm hover:bg-maroon-900 hover:text-white transition-colors duration-300"
                            >
                                Know More
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
