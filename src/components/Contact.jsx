import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="relative bg-maroon-900 text-white overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
                {/* Visual Side with Curve */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-full lg:w-1/2 min-h-[300px] md:min-h-[500px] lg:h-auto"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop)' }}
                    >
                        <div className="absolute inset-0 bg-maroon-900/40 mix-blend-multiply"></div>
                    </div>
                    {/* Organic Wave Divider */}
                    <div className="absolute top-0 bottom-0 right-0 w-24 bg-dark-900 hidden lg:block" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 80% 50%, 0 0)' }}></div>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-dark-900 lg:hidden" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 50% 80%, 0 0)' }}></div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                            className="glass p-8 rounded-blob-1 border border-white/20 backdrop-blur-md"
                        >
                            <h2 className="font-serif text-4xl text-white drop-shadow-lg">Visit Us</h2>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-center relative"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

                    <div className="mb-12">
                        <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold mb-2 block">Reach Out</span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Contact Us</h2>
                        <p className="text-gray-400 font-light leading-relaxed max-w-md">
                            We'd love to hear from you. deeply rooted in tradition, yet open to the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-0">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 rounded-full border border-gray-700 text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg mb-1">Our Studio</h4>
                                    <p className="text-gray-400 text-sm font-light">Aangan Boutique, 1st floor, K-158,<br />Sindhu Bhavan Marg, opp. Bajrang Super Market,<br />PRL Colony, Bodakdev, Ahmedabad, Gujarat 380054</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 rounded-full border border-gray-700 text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg mb-1">Opening Hours</h4>
                                    <p className="text-gray-400 text-sm font-light">Mon - Sat: 11 AM - 8 PM<br />Sun: 4 PM - 8 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 rounded-full border border-gray-700 text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg mb-1">Call Us</h4>
                                    <p className="text-gray-400 text-sm font-light">+91 79 4892 3535</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 rounded-full border border-gray-700 text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg mb-1">Email</h4>
                                    <p className="text-gray-400 text-sm font-light">aanganboutique2018@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
