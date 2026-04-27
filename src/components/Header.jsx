import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from './BookingModal';

const Header = ({ bagCount, onOpenBag }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#craft' },
        { name: 'Products', href: '#products' },
        { name: 'Gallery', href: '#collection-gallery' },
        { name: 'Instagram', href: '#instagram' },
        { name: 'Reviews', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-4 lg:px-12">
                <div className="flex items-center justify-between">

                    {/* Mobile Menu Button */}
                    <button className="text-maroon-900 lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu size={24} strokeWidth={1} />
                    </button>

                    {/* Logo - Centered for high-end feel */}
                    <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:translate-x-0 transition-all duration-700">
                        <div className={`transition-all duration-700 ${isScrolled ? 'w-24' : 'w-32'}`}>
                            <img src="/Logo1.png" alt="Aangan Boutique" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-12">
                        {navLinks.slice(0, 4).map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="group relative text-[10px] font-bold tracking-[0.3em] transition-colors uppercase text-maroon-900 hover:text-gold-600"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-600 transition-all duration-500 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <nav className="hidden lg:flex items-center space-x-12">
                        {navLinks.slice(4).map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="group relative text-[10px] font-bold tracking-[0.3em] transition-colors uppercase text-maroon-900 hover:text-gold-600"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-600 transition-all duration-500 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center space-x-8 text-maroon-900">
                        <button
                            className="hover:text-gold-600 transition-colors hidden sm:block relative group"
                            onClick={() => setIsBookingOpen(true)}
                        >
                            <CalendarDays size={18} strokeWidth={1.5} />
                        </button>
                        <button 
                            className="hover:text-gold-600 transition-colors relative"
                            onClick={onOpenBag}
                        >
                            <ShoppingBag size={18} strokeWidth={1.5} />
                            {bagCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 bg-gold-500 text-[8px] items-center justify-center text-white font-bold rounded-full">
                                    {bagCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
                        className="fixed inset-0 bg-[#FDFBF7] z-50 flex flex-col p-8 lg:hidden"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="font-serif text-2xl tracking-widest text-maroon-900">MENU</h2>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-dark-900 hover:rotate-90 transition-transform duration-300">
                                <X size={28} strokeWidth={1.5} />
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-8">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                    className="text-2xl font-serif tracking-wide text-dark-900 hover:text-gold-600 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>
                        <div className="mt-auto">
                            <p className="text-center text-sm font-light text-gray-400 uppercase tracking-widest">Est. 2024</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </header >
    );
};

export default Header;
