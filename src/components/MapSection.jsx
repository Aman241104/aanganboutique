import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Calendar } from 'lucide-react';

const MapSection = () => {
    const mapUrl = "https://www.google.com/maps/dir//Aangan+Boutique,+1st+floor,+K-158,+Sindhu+Bhavan+Marg,+Bodakdev,+Ahmedabad,+Gujarat+380054/@23.0404119,72.5047619,17z/";

    return (
        <section id="map" className="w-full py-24 bg-[#080808] relative overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Artistic Map Container */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-3/5 h-[500px] md:h-[600px] relative rounded-[10rem] md:rounded-[20rem] overflow-hidden border border-white/10 group"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5466577770826!2d72.50476189999999!3d23.040411899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b87f736f243%3A0x7358857d286d18b4!2sAangan%20Boutique!5e0!3m2!1sen!2sin!4v1769489338146!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ 
                                border: 0, 
                                filter: 'invert(90%) hue-rotate(160deg) brightness(85%) contrast(110%) saturate(20%) sepia(20%)' 
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Aangan Boutique Location"
                            className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
                        ></iframe>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none"></div>
                        
                        {/* Floating Location Badge */}
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Live Location</span>
                        </div>
                    </motion.div>

                    {/* Information Content */}
                    <div className="w-full lg:w-2/5 space-y-10 lg:pl-4">
                        <div className="space-y-4">
                            <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-gold-500 uppercase tracking-[0.5em] text-[10px] font-bold block"
                            >
                                Visit Our Atelier
                            </motion.span>
                            <motion.h3 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-white font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
                            >
                                Where <span className="italic font-light text-gold-400">Art</span> <br /> 
                                Meets <span className="text-gold-200">Address</span>
                            </motion.h3>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-400 text-lg font-light leading-relaxed max-w-sm pt-4"
                            >
                                Experience the pinnacle of ethnic luxury in the heart of Ahmedabad.
                            </motion.p>
                        </div>

                        <div className="space-y-8 pt-4">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold-500 border border-white/10 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Location</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        1st floor, K-158, Sindhu Bhavan Marg, <br />
                                        Bodakdev, Ahmedabad, Gujarat 380054
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold-500 border border-white/10 flex-shrink-0">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Private Styling</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Monday — Sunday: 11:00 AM - 8:00 PM <br />
                                        Appointments recommended for couture visits.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row gap-4">
                            <motion.a 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-3 bg-white text-maroon-950 py-5 px-8 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold-500 hover:text-white transition-all duration-500"
                            >
                                <Navigation size={16} /> Get Directions
                            </motion.a>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 flex items-center justify-center gap-3 bg-white/5 text-gold-500 border border-white/10 py-5 px-8 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 hover:text-white transition-all duration-500"
                            >
                                <ExternalLink size={16} /> Full View
                            </motion.button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Cinematic Decor Elements */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-maroon-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent"></div>
        </section>
    );
};

export default MapSection;

