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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-cream/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Mobile Menu Button */}
                    <button className={`${isScrolled ? 'text-dark-900' : 'text-white'} lg:hidden transition-colors`} onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu size={24} strokeWidth={1.5} />
                    </button>

                    {/* Logo */}
                    <div className="text-center lg:text-left flex-grow lg:flex-grow-0 transition-all duration-500 origin-left">
                        <div className={`transition-all duration-500 ${isScrolled ? 'w-24 md:w-28' : 'w-36 md:w-44'}`}>
                            <img src="/Logo.webp" alt="Aangan Boutique" className="w-full h-auto object-contain drop-shadow-md" />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`group relative text-xs font-medium tracking-[0.15em] transition-colors uppercase py-2 ${isScrolled ? 'text-dark-800' : 'text-white'} hover:text-gold-600`}
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className={`flex items-center space-x-6 ${isScrolled ? 'text-dark-800' : 'text-white'} transition-colors`}>
                        <button
                            className="hover:text-gold-600 transition-colors hidden sm:block tooltip-trigger relative group"
                            onClick={() => setIsBookingOpen(true)}
                            title="Book Appointment"
                        >
                            <CalendarDays size={20} strokeWidth={1.5} />
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-maroon-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Book Slot</span>
                        </button>
                        <button 
                            className="hover:text-gold-600 transition-colors relative"
                            onClick={onOpenBag}
                        >
                            <ShoppingBag size={20} strokeWidth={1.5} />
                            {bagCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-gold-500 text-[10px] items-center justify-center text-white font-bold">
                                        {bagCount}
                                    </span>
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
