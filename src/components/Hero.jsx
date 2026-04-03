import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Variants for text stagger
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 20, stiffness: 100 }
        },
    };

    const titleText = "AANGAN";

    return (
        <section id="hero" ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-maroon-900">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/drive_images/013.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
            </div>

            {/* Creative Curve Mask at Bottom */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 16, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 right-0 h-32 bg-cream z-20 rounded-t-[50%] scale-110"
            ></motion.div>

            {/* Parallax Container */}
            <motion.div 
                style={{ y, opacity }}
                className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[90%] md:w-auto glass px-4 py-8 md:p-16 rounded-blob-1 max-w-5xl mx-auto backdrop-blur-xl border-white/10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                    >
                        <span className="inline-block border border-gold-400/50 bg-black/20 backdrop-blur-sm py-2 px-4 md:px-6 rounded-full text-gold-300 tracking-[0.2em] md:tracking-[0.3em] font-light uppercase text-[10px] md:text-sm mb-6 md:mb-8 shadow-lg">
                            Premium Ethnic & Designer Wear
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight mb-4 drop-shadow-2xl leading-tight md:leading-[0.9] flex flex-wrap justify-center overflow-hidden"
                    >
                        {titleText.split("").map((char, index) => (
                            <motion.span key={char + "-" + index} variants={letter} className="inline-block">
                                {char}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic font-light ml-4"
                        >
                            Boutique
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="text-white/90 text-base md:text-xl font-light max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed tracking-wide text-shadow-gold"
                    >
                        Curated ethnic, Indo-western and wedding wear crafted for timeless elegance.
                    </motion.p>

                    <a href="#products">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.8, type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative overflow-hidden bg-gold-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-full uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-sm font-semibold shadow-[0_0_30px_rgba(197,160,89,0.5)] hover:shadow-[0_0_50px_rgba(197,160,89,0.8)] transition-all duration-300 whitespace-nowrap"
                        >
                            <span className="relative z-10">Explore Our Collection</span>
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-[0.16,1,0.3,1] -z-0"></div>
                        </motion.button>
                    </a>
                </motion.div>
            </motion.div>

            {/* Floating Organic Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="absolute top-1/4 left-10 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl animate-pulse"
            ></motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
                className="absolute bottom-1/3 right-10 w-64 h-64 bg-maroon-500/20 rounded-full blur-3xl animate-pulse delay-700"
            ></motion.div>
        </section>
    );
};

export default Hero;