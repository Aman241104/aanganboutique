import React from 'react';
import { Star, Users, Shirt } from 'lucide-react';

const Clients = () => {
    return (
        <section className="py-12 md:py-20 bg-gold-50/50 border-y border-gold-200/50">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-12">
                    <p className="text-gold-600 uppercase tracking-[0.3em] text-xs font-semibold mb-4 relative inline-block">
                        <span className="relative z-10 px-4 bg-transparent">Our Excellence</span>
                    </p>
                    <h2 className="font-serif text-4xl lg:text-5xl text-dark-900 mb-4">Trusted by Our Clients</h2>
                    <p className="text-gray-500 font-light text-lg">Loved by brides, families, and festive shoppers across the world.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: Google Rated */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gold-100 flex items-center justify-center gap-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="drop-shadow-sm">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-3xl font-serif text-gray-800 font-medium">4.9</span>
                                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Google Rated</span>
                            </div>
                            <div className="flex text-gold-500">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Happy Clients */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gold-100 flex items-center justify-center gap-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                            <Users size={32} strokeWidth={1.5} />
                        </div>
                        <div className="text-left">
                            <h3 className="text-3xl font-serif text-gray-800 font-medium mb-1">10000+</h3>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Happy Clients</p>
                        </div>
                    </div>

                    {/* Card 3: Personalized Styling */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gold-100 flex items-center justify-center gap-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                            <Shirt size={32} strokeWidth={1.5} />
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-serif text-gray-800 font-medium mb-1 leading-tight">Personalised Styling</h3>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
