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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-[0_10px_40px_rgba(0,0,0,0.05)]' : 'bg-transparent py-10'}`}>
            <div className="container mx-auto px-4 lg:px-12">
                <div className="flex items-center justify-between">

                    {/* Left: Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-10">
                        {navLinks.slice(0, 4).map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`group relative text-[10px] font-bold tracking-[0.4em] transition-all uppercase ${isScrolled ? 'text-maroon-900' : 'text-maroon-950'} hover:text-gold-600`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-600 transition-all duration-500 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Center: Logo */}
                    <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-1000">
                        <a href="#hero" className={`block transition-all duration-1000 ${isScrolled ? 'w-24' : 'w-36'}`}>
                            <img 
                                src="/Logo1.webp" 
                                alt="Aangan Boutique" 
                                className={`w-full h-auto object-contain transition-all duration-1000 ${isScrolled ? 'brightness-100' : 'brightness-90'}`} 
                            />
                        </a>
                    </div>

                    {/* Right: Actions & Secondary Nav */}
                    <div className="flex items-center gap-10">
                        <nav className="hidden xl:flex items-center space-x-10">
                            {navLinks.slice(4, 7).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`group relative text-[10px] font-bold tracking-[0.4em] transition-all uppercase ${isScrolled ? 'text-maroon-900' : 'text-maroon-950'} hover:text-gold-600`}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-600 transition-all duration-500 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>

                        <div className={`flex items-center gap-6 ${isScrolled ? 'text-maroon-900' : 'text-maroon-950'}`}>
                            <button
                                className="hover:text-gold-600 transition-all hidden sm:block group relative"
                                onClick={() => setIsBookingOpen(true)}
                            >
                                <CalendarDays size={20} strokeWidth={1.2} />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Book</span>
                            </button>
                            <button 
                                className="hover:text-gold-600 transition-all relative group"
                                onClick={onOpenBag}
                            >
                                <ShoppingBag size={20} strokeWidth={1.2} />
                                {bagCount > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 bg-gold-500 text-[8px] items-center justify-center text-white font-bold rounded-full shadow-lg">
                                        {bagCount}
                                    </span>
                                )}
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Bag</span>
                            </button>
                            
                            {/* Mobile Toggle */}
                            <button className="lg:hidden ml-4" onClick={() => setIsMobileMenuOpen(true)}>
                                <Menu size={24} strokeWidth={1.2} />
                            </button>
                        </div>
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
