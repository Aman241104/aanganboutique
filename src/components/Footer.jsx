import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-900 text-white pt-20 pb-10 border-t border-gold-900/20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <div className="rounded-md overflow-hidden bg-white mb-[10px]" >
                            <img
                                src="/Logo2.JPG"
                                alt="Aangan Boutique Interior"
                                className="relative z-10 w-full p-4  object-contain shadow-lg"
                            />
                        </div>

                        <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                            Redefining ethnic luxury with a modern touch. Handcrafted for the woman of today.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/_aanganboutique_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/aanganboutique.abad" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.google.com/search?q=Aangan+Boutique&stick=H4sIAAAAAAAA_-NgU1I1qDC2NE21TLIwTzM3NkszMjG2MqgwNza1sDA1TzGyMEsxtEgyWcTK75iYl56Yp-CUX1qSWViaCgAFcIToOwAAAA&hl=en&mat=CT7aEDiap0nDElcBmzl_pb5KQb5ELWcz5QfJ8PaCVv4gIBSaDwtPnfAAV4NTU-D2uHfAVpHbRuIfT2jaEL1zGECUS2qu9kS_oA_YMnyzgzxfkIxWCCPLDaIEU3nMtpUYpjgaCAcGLJY4_iRt&authuser=0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg text-gold-500 mb-6">Explore</h3>
                        <ul className="space-y-4 text-sm text-gray-400 font-light">
                            {['New Arrivals', 'Bridal Collection', 'Accessories', 'Sale'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h3 className="font-serif text-lg text-gold-500 mb-6">Customer Care</h3>
                        <ul className="space-y-4 text-sm text-gray-400 font-light">
                            {['Contact Us', 'Shipping & Returns', 'Size Guide', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-serif text-lg text-gold-500 mb-6">Newsletter</h3>
                        <p className="text-gray-400 text-sm font-light mb-4">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-gray-700 text-white px-4 py-3 text-sm focus:border-gold-500 focus:outline-none transition-colors"
                            />
                            <button className="bg-gold-600 text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-gold-700 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
                    <p>© {new Date().getFullYear()} Aangan Boutique. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
