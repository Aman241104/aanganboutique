import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Check, Video, Store } from 'lucide-react';

const slots = [
    { id: 'slot1', label: '11:00 AM - 12:00 PM', startHour: 11, endHour: 12 },
    { id: 'slot2', label: '2:00 PM - 3:00 PM', startHour: 14, endHour: 15 },
    { id: 'slot3', label: '4:00 PM - 5:00 PM', startHour: 16, endHour: 17 },
    { id: 'slot4', label: '6:00 PM - 7:00 PM', startHour: 18, endHour: 19 },
];

const services = [
    { id: 'in-store', label: 'In-Store Visit', icon: Store, description: 'Visit our boutique in Ahmedabad' },
    { id: 'virtual', label: 'Virtual Styling', icon: Video, description: 'Video call consultation (Global)' },
];

const BookingModal = ({ isOpen, onClose }) => {
    const [selectedService, setSelectedService] = useState(services[0]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [dates, setDates] = useState([]);
    const [step, setStep] = useState('selection'); // 'selection' | 'success'

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
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep('selection');
                setSelectedSlot(null);
            }, 300);
        }
    }, [isOpen]);

    const addToCalendar = () => {
        if (!selectedDate || !selectedSlot) return;
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const startTime = `${year}${month}${day}T${String(selectedSlot.startHour).padStart(2, '0')}0000`;
        const endTime = `${year}${month}${day}T${String(selectedSlot.endHour).padStart(2, '0')}0000`;
        const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(selectedService.label)}+with+Aangan+Boutique&dates=${startTime}/${endTime}&details=${encodeURIComponent(selectedService.description)}&location=Aangan+Boutique`;
        window.open(gCalUrl, '_blank');
    };

    const sendWhatsApp = () => {
        if (!selectedDate || !selectedSlot) return;
        const dateStr = selectedDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
        const message = `*Consultation Request - Aangan Boutique*\n\nHello, I would like to book a *${selectedService.label}*.\n\n*Details:*\n📅 Date: ${dateStr}\n⏰ Time: ${selectedSlot.label}\n\nPlease confirm if this slot is available. Thank you!`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleConfirm = () => {
        if (!selectedDate || !selectedSlot) return;
        setStep('success');
        sendWhatsApp();
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
                        <div className="bg-maroon-900 text-white p-8 flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-serif">Book a Consultation</h3>
                                <p className="text-maroon-100 text-sm">Personalized styling for your special day</p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {step === 'selection' ? (
                                <>
                                    <div className="mb-8">
                                        <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-widest">Select Service</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {services.map((service) => (
                                                <button
                                                    key={service.id}
                                                    onClick={() => setSelectedService(service)}
                                                    className={`p-4 rounded-2xl border text-left transition-all ${selectedService.id === service.id
                                                        ? 'border-maroon-900 bg-maroon-50 ring-1 ring-maroon-900'
                                                        : 'border-gray-200 hover:border-gold-400'
                                                        }`}
                                                >
                                                    <service.icon className={`mb-2 ${selectedService.id === service.id ? 'text-maroon-900' : 'text-gold-600'}`} size={24} />
                                                    <div className="font-bold text-gray-900">{service.label}</div>
                                                    <div className="text-[10px] text-gray-500">{service.description}</div>
                                                </button>
                                            ))}
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
                                        onClick={handleConfirm}
                                        disabled={!selectedDate || !selectedSlot}
                                        className="w-full bg-gold-600 text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                                    >
                                        Confirm Booking
                                    </button>
                                </>
                            ) : (
                                <div className="text-center py-10">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check size={40} />
                                    </div>
                                    <h4 className="text-3xl font-serif text-maroon-900 mb-4">Request Sent!</h4>
                                    <p className="text-gray-600 mb-10 max-w-xs mx-auto text-sm leading-relaxed">
                                        We have initiated a WhatsApp message to confirm your {selectedService.label}. Please click below to add this to your calendar.
                                    </p>

                                    <div className="space-y-4">
                                        <button
                                            onClick={addToCalendar}
                                            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                                        >
                                            <Calendar size={18} /> Add to Calendar
                                        </button>
                                        <button
                                            onClick={onClose}
                                            className="w-full text-gray-400 font-bold uppercase tracking-widest text-[10px] py-4 hover:text-maroon-900 transition-colors"
                                        >
                                            Return to Website
                                        </button>
                                    </div>
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
