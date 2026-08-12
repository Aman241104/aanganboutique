import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Check, Video, Store, ArrowRight, ArrowLeft } from 'lucide-react';
import { whatsappUrl } from '../lib/whatsapp';

const slots = [
    { id: 'slot1', label: '11:00 AM - 12:00 PM', startHour: 11 },
    { id: 'slot2', label: '2:00 PM - 3:00 PM', startHour: 14 },
    { id: 'slot3', label: '4:00 PM - 5:00 PM', startHour: 16 },
    { id: 'slot4', label: '6:00 PM - 7:00 PM', startHour: 18 },
];

const occasions = ['Wedding Trousseau', 'Festive Wear', 'Everyday Ethnic', 'Custom Design', 'Other'];

// Client-supplied opening lines go here — placeholders until the exact copy arrives.
const MESSAGE_TEMPLATES = {
    inStore: () =>
        `Hi! I came across Aangan Boutique and would like to book an in-store visit to explore your collection.`,
    videoCall: (dateStr, slotLabel, details) => {
        let msg = `Hi! I'd like to book a video consultation with Aangan Boutique.\n\nPreferred date: ${dateStr}\nPreferred time: ${slotLabel}`;
        if (details.name) msg += `\nName: ${details.name}`;
        if (details.cityCountry) msg += `\nCity/Country: ${details.cityCountry}`;
        if (details.occasion) msg += `\nOccasion: ${details.occasion}`;
        msg += `\n\nPlease confirm if this slot works.`;
        return msg;
    },
};

const BookingModal = ({ isOpen, onClose, initialType = null }) => {
    const [step, setStep] = useState('choose'); // 'choose' | 'schedule' | 'success'
    const [selectedType, setSelectedType] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [dates, setDates] = useState([]);
    const [name, setName] = useState('');
    const [cityCountry, setCityCountry] = useState('');
    const [occasion, setOccasion] = useState('');

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

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep('choose');
                setSelectedType(null);
                setSelectedSlot(null);
                setName('');
                setCityCountry('');
                setOccasion('');
            }, 300);
        } else if (initialType === 'video') {
            setSelectedType('video');
            setStep('schedule');
        }
    }, [isOpen, initialType]);

    const chooseInStore = () => {
        setSelectedType('in-store');
        window.open(whatsappUrl(MESSAGE_TEMPLATES.inStore()), '_blank');
        setStep('success');
    };

    const chooseVideoCall = () => {
        setSelectedType('video');
        setStep('schedule');
    };

    const confirmVideoCall = () => {
        if (!selectedDate || !selectedSlot) return;
        const dateStr = selectedDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
        window.open(whatsappUrl(MESSAGE_TEMPLATES.videoCall(dateStr, selectedSlot.label, { name, cityCountry, occasion })), '_blank');
        setStep('success');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    ></motion.div>

                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="bg-maroon-900 text-white p-6 md:p-8 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl md:text-2xl font-serif">Book a Consultation</h3>
                                <p className="text-maroon-100 text-xs md:text-sm">Personalized styling for your special day</p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors shrink-0">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {step === 'choose' && (
                                <div className="space-y-4">
                                    <p className="text-gray-500 text-sm mb-6">How would you like to begin?</p>
                                    <button
                                        onClick={chooseInStore}
                                        className="w-full flex items-center gap-5 p-6 rounded-2xl border-2 border-gray-100 hover:border-maroon-900 hover:bg-maroon-50/50 transition-all text-left group"
                                    >
                                        <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0 group-hover:bg-maroon-900 group-hover:text-white transition-colors">
                                            <Store size={24} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-[9px] font-bold uppercase tracking-widest text-gold-600 mb-1">Path One</div>
                                            <div className="font-bold text-gray-900">Visiting Ahmedabad</div>
                                            <div className="text-xs text-gray-500">Book an in-store appointment at our Bodakdev atelier — sends a WhatsApp message straight away</div>
                                        </div>
                                        <ArrowRight size={18} className="text-gray-300 group-hover:text-maroon-900 transition-colors" />
                                    </button>
                                    <button
                                        onClick={chooseVideoCall}
                                        className="w-full flex items-center gap-5 p-6 rounded-2xl border-2 border-gray-100 hover:border-maroon-900 hover:bg-maroon-50/50 transition-all text-left group"
                                    >
                                        <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0 group-hover:bg-maroon-900 group-hover:text-white transition-colors">
                                            <Video size={24} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-[9px] font-bold uppercase tracking-widest text-gold-600 mb-1">Path Two</div>
                                            <div className="font-bold text-gray-900">Abroad or Not Visiting Yet</div>
                                            <div className="text-xs text-gray-500">Book a video consultation — share a few details, pick a date &amp; time, then confirm on WhatsApp</div>
                                        </div>
                                        <ArrowRight size={18} className="text-gray-300 group-hover:text-maroon-900 transition-colors" />
                                    </button>
                                </div>
                            )}

                            {step === 'schedule' && (
                                <>
                                    <button
                                        onClick={() => setStep('choose')}
                                        className="flex items-center gap-2 text-gray-400 hover:text-maroon-900 text-xs font-bold uppercase tracking-widest mb-8 transition-colors"
                                    >
                                        <ArrowLeft size={14} /> Back
                                    </button>

                                    <div className="mb-8 space-y-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-widest">Name</label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Your name"
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-maroon-900 focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-widest">City / Country</label>
                                                <input
                                                    type="text"
                                                    value={cityCountry}
                                                    onChange={(e) => setCityCountry(e.target.value)}
                                                    placeholder="e.g. New Jersey, USA"
                                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-maroon-900 focus:outline-none transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-widest">Occasion</label>
                                                <select
                                                    value={occasion}
                                                    onChange={(e) => setOccasion(e.target.value)}
                                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-maroon-900 focus:outline-none transition-colors bg-white"
                                                >
                                                    <option value="">Select</option>
                                                    {occasions.map((o) => (
                                                        <option key={o} value={o}>{o}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-widest">Select Date</label>
                                        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                                            {dates.map((date, index) => {
                                                const isSelected = selectedDate?.toDateString() === date.toDateString();
                                                return (
                                                    <button
                                                        key={index}
                                                        onClick={() => setSelectedDate(date)}
                                                        className={`flex-shrink-0 min-w-[80px] p-4 rounded-2xl border text-center transition-all ${isSelected
                                                            ? 'border-maroon-900 bg-maroon-900 text-white shadow-lg'
                                                            : 'border-gray-200 hover:border-gold-400'
                                                            }`}
                                                    >
                                                        <div className={`text-[10px] uppercase font-bold mb-1 ${isSelected ? 'text-gold-200' : 'text-gray-400'}`}>
                                                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                                        </div>
                                                        <div className="text-xl font-bold">
                                                            {date.getDate()}
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-widest">Available Slots</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {slots.map((slot) => {
                                                const isSelected = selectedSlot?.id === slot.id;
                                                return (
                                                    <button
                                                        key={slot.id}
                                                        onClick={() => setSelectedSlot(slot)}
                                                        className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${isSelected
                                                            ? 'border-maroon-900 bg-maroon-900 text-white shadow-md'
                                                            : 'border-gray-200 hover:border-gold-400 hover:bg-gold-50/50 text-gray-700 font-medium'
                                                            }`}
                                                    >
                                                        <span>{slot.label}</span>
                                                        {isSelected && <Check size={18} />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <button
                                        onClick={confirmVideoCall}
                                        disabled={!selectedDate || !selectedSlot}
                                        className="w-full bg-gold-600 text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                                    >
                                        Confirm on WhatsApp
                                    </button>
                                </>
                            )}

                            {step === 'success' && (
                                <div className="text-center py-10">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check size={40} />
                                    </div>
                                    <h4 className="text-3xl font-serif text-maroon-900 mb-4">Request Sent!</h4>
                                    <p className="text-gray-600 mb-10 max-w-xs mx-auto text-sm leading-relaxed">
                                        We've opened WhatsApp with your {selectedType === 'in-store' ? 'in-store visit' : 'video call'} request — just hit send.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="w-full text-gray-400 font-bold uppercase tracking-widest text-[10px] py-4 hover:text-maroon-900 transition-colors"
                                    >
                                        Return to Website
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
