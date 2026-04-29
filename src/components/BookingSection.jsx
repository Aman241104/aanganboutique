import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, ArrowRight, Scissors, Ruler, Sparkles, Heart, Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

const slots = [
    { id: 'slot1', label: '2:00 PM - 3:00 PM', startHour: 14, endHour: 15 },
    { id: 'slot2', label: '4:00 PM - 5:00 PM', startHour: 16, endHour: 17 },
    { id: 'slot3', label: '6:00 PM - 7:00 PM', startHour: 18, endHour: 19 },
    { id: 'slot4', label: '7:00 PM - 8:00 PM', startHour: 19, endHour: 20 },
];

const serviceTypes = [
    { id: 'bridal', label: 'Bridal Consultation', icon: <Heart size={18} />, color: 'bg-rose-50' },
    { id: 'custom', label: 'Custom Tailoring', icon: <Scissors size={18} />, color: 'bg-blue-50' },
    { id: 'styling', label: 'Personal Styling', icon: <Sparkles size={18} />, color: 'bg-amber-50' },
    { id: 'measurement', label: 'Measurement & Fitting', icon: <Ruler size={18} />, color: 'bg-emerald-50' },
];

const BookingSection = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedService, setSelectedService] = useState(serviceTypes[0]);
    const [dates, setDates] = useState([]);
    const [step, setStep] = useState('selection');

    useEffect(() => {
        const next7Days = [];
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            next7Days.push(date);
        }
        setDates(next7Days);
        setSelectedDate(next7Days[0]);
    }, []);

    const handleConfirm = () => {
        if (!selectedDate || !selectedSlot) return;
        
        const dateStr = selectedDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long' 
        });
        
        const message = `*Appointment Booking - Aangan Boutique*\n\nHello! I would like to book a *${selectedService.label}*.\n\n*Preferred Schedule:*\n📅 Date: ${dateStr}\n⏰ Slot: ${selectedSlot.label}\n\nPlease let me know if this is available.`;
        
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
        setStep('success');
    };

    return (
        <section className="py-24 md:py-48 bg-[#FCFAFB] relative overflow-hidden" id="booking">
            {/* Artistic Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-50/20 skew-x-12 translate-x-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-maroon-900/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>
            
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

                    {/* Left Narrative: The Invitation */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex items-center gap-3 text-gold-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-8">
                                <span className="w-8 h-px bg-gold-600"></span>
                                <span>Bespoke Consultation</span>
                            </div>
                            
                            <h2 className="text-5xl lg:text-8xl font-serif text-maroon-950 mb-10 leading-[0.9] tracking-tighter">
                                Book Your <br />
                                <span className="italic font-light text-gold-500">Styling Session</span>
                            </h2>
                            
                            <p className="text-gray-500 text-xl font-light leading-relaxed mb-12 max-w-lg">
                                Step into the world of Aangan. Our private consultations are designed to translate your vision into an artisanal masterpiece.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { title: "One-on-One", desc: "Dedicated stylist guidance", icon: <Users size={18}/> },
                                    { title: "Bespoke Fit", desc: "Precision measurements", icon: <Scissors size={18}/> },
                                    { title: "Fabric Library", desc: "Exclusive textile access", icon: <MapPin size={18}/> },
                                    { title: "Heirloom Quality", desc: "Bridal wear focus", icon: <Award size={18}/> }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold-100"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0">
                                            {item.icon || <Check size={16} />}
                                        </div>
                                        <div>
                                            <h4 className="text-maroon-900 font-bold text-sm tracking-wide mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-xs font-light">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: The Concierge Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 w-full max-w-2xl"
                    >
                        <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-[0_60px_100px_-20px_rgba(44,4,11,0.12)] border border-gold-100/50 relative overflow-hidden group">
                            {/* Signature Atelier Stripe */}
                            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-maroon-950 via-gold-500 to-maroon-950"></div>
                            
                            <AnimatePresence mode="wait">
                                {step === 'selection' ? (
                                    <motion.div
                                        key="selection"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="space-y-12"
                                    >
                                        <div>
                                            <h3 className="text-3xl font-serif text-maroon-950 mb-3 tracking-tight">Plan Your Visit</h3>
                                            <p className="text-gray-400 text-sm font-light uppercase tracking-widest">Select your preferred session details</p>
                                        </div>

                                        {/* Services */}
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] flex items-center gap-2">
                                                <Star size={12} className="text-gold-500" /> Choose Service
                                            </label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {serviceTypes.map((service) => (
                                                    <button
                                                        key={service.id}
                                                        onClick={() => setSelectedService(service)}
                                                        className={`flex items-center gap-4 p-5 rounded-[2rem] border-2 transition-all duration-500 group/btn ${selectedService.id === service.id
                                                            ? 'border-maroon-900 bg-maroon-900 text-white shadow-xl'
                                                            : 'border-gray-50 bg-gray-50/50 hover:border-gold-200 hover:bg-white text-gray-600'
                                                            }`}
                                                    >
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${selectedService.id === service.id ? 'bg-gold-500 text-maroon-950' : 'bg-white text-gold-600 shadow-sm'}`}>
                                                            {service.icon}
                                                        </div>
                                                        <span className="font-bold text-xs uppercase tracking-widest">{service.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Dates */}
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] flex items-center gap-2">
                                                <Calendar size={12} className="text-gold-500" /> Select Date
                                            </label>
                                            <div className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide -mx-2 px-2">
                                                {dates.map((date, index) => {
                                                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                                                    return (
                                                        <button
                                                            key={index}
                                                            onClick={() => setSelectedDate(date)}
                                                            className={`flex-shrink-0 w-24 p-6 rounded-[2.5rem] border-2 text-center transition-all duration-500 ${isSelected
                                                                ? 'border-maroon-900 bg-maroon-900 text-white shadow-2xl scale-110'
                                                                : 'border-gray-50 bg-white hover:border-gold-300 shadow-sm'
                                                                }`}
                                                        >
                                                            <div className={`text-[9px] uppercase font-bold mb-3 ${isSelected ? 'text-gold-400' : 'text-gray-400'}`}>
                                                                {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                                            </div>
                                                            <div className={`text-2xl font-serif ${isSelected ? 'text-white' : 'text-maroon-950'}`}>
                                                                {date.getDate()}
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Slots */}
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] flex items-center gap-2">
                                                <Clock size={12} className="text-gold-500" /> Available Time
                                            </label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {slots.map((slot) => {
                                                    const isSelected = selectedSlot?.id === slot.id;
                                                    return (
                                                        <button
                                                            key={slot.id}
                                                            onClick={() => setSelectedSlot(slot)}
                                                            className={`flex items-center justify-center p-6 rounded-[2rem] border-2 transition-all duration-500 ${isSelected
                                                                ? 'border-maroon-900 bg-maroon-900 text-white shadow-xl'
                                                                : 'border-gray-50 bg-gray-50/50 hover:border-gold-300 hover:bg-white text-maroon-950'
                                                                }`}
                                                        >
                                                            <span className="font-bold text-[11px] uppercase tracking-[0.2em]">{slot.label}</span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02, backgroundColor: '#B08A3E' }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleConfirm}
                                            disabled={!selectedDate || !selectedSlot}
                                            className="w-full bg-gold-600 text-white py-6 rounded-[2.5rem] font-bold uppercase tracking-[0.4em] text-[10px] hover:shadow-[0_20px_60px_rgba(204,160,82,0.4)] transition-all disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed flex items-center justify-center gap-6 relative overflow-hidden group/confirm"
                                        >
                                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/confirm:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                                            Confirm Appointment <ArrowRight size={18} />
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-20"
                                    >
                                        <div className="w-32 h-32 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-600 mx-auto mb-10 relative">
                                            <motion.div 
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute inset-0 bg-gold-500/5 rounded-full"
                                            />
                                            <CheckCircle2 size={64} strokeWidth={1} />
                                        </div>
                                        <h3 className="text-4xl font-serif text-maroon-950 mb-6">Request Acknowledged</h3>
                                        <p className="text-gray-500 mb-12 leading-relaxed max-w-sm mx-auto font-light">
                                            We've synchronized with your WhatsApp to coordinate your <strong>{selectedService.label}</strong>. We look forward to seeing you.
                                        </p>
                                        <button
                                            onClick={() => setStep('selection')}
                                            className="text-gold-600 font-bold uppercase tracking-[0.4em] text-[10px] border-b border-gold-400 pb-2 hover:text-maroon-900 hover:border-maroon-900 transition-all"
                                        >
                                            Book Another Session
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Users = ({size}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Award = ({size}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>;

export default BookingSection;
