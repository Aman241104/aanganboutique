import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Check, Star, ArrowRight } from 'lucide-react';

const slots = [
    { id: 'slot1', label: '2:00 PM - 3:00 PM', startHour: 14, endHour: 15 },
    { id: 'slot2', label: '4:00 PM - 5:00 PM', startHour: 16, endHour: 17 },
    { id: 'slot3', label: '6:00 PM - 7:00 PM', startHour: 18, endHour: 19 },
];

const BookingSection = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
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

    const addToCalendar = () => {
        if (!selectedDate || !selectedSlot) return;

        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');

        const startTime = `${year}${month}${day}T${String(selectedSlot.startHour).padStart(2, '0')}0000`;
        const endTime = `${year}${month}${day}T${String(selectedSlot.endHour).padStart(2, '0')}0000`;

        const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Aangan+Boutique&dates=${startTime}/${endTime}&details=Fashion+consultation+meeting.&location=Aangan+Boutique&add=datawizard1631@gmail.com`;
        window.open(gCalUrl, '_blank');
    };

    const sendWhatsApp = () => {
        if (!selectedDate || !selectedSlot) return;
        const dateStr = selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
        const message = `Hello, I would like to book a meeting on ${dateStr} at ${selectedSlot.label}.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleConfirm = () => {
        if (!selectedDate || !selectedSlot) return;
        setStep('success');
        addToCalendar();
    };

    const resetBooking = () => {
        setStep('selection');
        setSelectedSlot(null);
    };

    return (
        <section className="py-12 md:py-20 bg-cream relative overflow-hidden" id="booking">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-50/50 -skew-x-12 hidden lg:block pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-2 text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4">
                            <Star size={16} fill="currentColor" />
                            <span>Private Consultation</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif text-maroon-900 mb-6 leading-tight">
                            Book Your Exclusive <br />
                            <span className="italic">Styling Session</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Lorem ipsum dolor sit",
                                "Consectetur adipiscing elit",
                                "Sed do eiusmod tempor",
                                "Incididunt ut labore"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                                        <Check size={14} />
                                    </div>
                                    <span className="text-dark-800 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Booking Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gold-100 relative overflow-hidden">
                            {/* Decorative stripe */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-maroon-900 to-gold-500"></div>

                            {step === 'selection' ? (
                                <>
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-serif text-maroon-900 mb-2">Select a Date & Time</h3>
                                        <p className="text-gray-500 text-sm">All times are in local timezone</p>
                                    </div>

                                    {/* Dates */}
                                    <div className="mb-6">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">Available Dates</label>
                                        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                                            {dates.map((date, index) => {
                                                const isSelected = selectedDate?.toDateString() === date.toDateString();
                                                return (
                                                    <button
                                                        key={index}
                                                        onClick={() => setSelectedDate(date)}
                                                        className={`flex-shrink-0 min-w-[80px] p-4 rounded-xl border text-center transition-all ${isSelected
                                                            ? 'border-maroon-900 bg-maroon-50 text-maroon-900 ring-1 ring-maroon-900'
                                                            : 'border-gray-100 bg-gray-50 hover:border-gold-400'
                                                            }`}
                                                    >
                                                        <div className="text-xs text-gray-500 uppercase font-bold mb-1">
                                                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                                        </div>
                                                        <div className={`text-xl font-bold ${isSelected ? 'text-maroon-900' : 'text-gray-900'}`}>
                                                            {date.getDate()}
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Slots */}
                                    <div className="mb-8">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">Available Slots</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {slots.map((slot) => {
                                                const isSelected = selectedSlot?.id === slot.id;
                                                return (
                                                    <button
                                                        key={slot.id}
                                                        onClick={() => setSelectedSlot(slot)}
                                                        className={`flex items-center justify-between p-4 rounded-xl border transition-all ${isSelected
                                                            ? 'border-maroon-900 bg-maroon-900 text-white shadow-md transform scale-[1.02]'
                                                            : 'border-gray-100 bg-white hover:border-gold-400 hover:shadow-sm text-gray-700'
                                                            }`}
                                                    >
                                                        <span className="font-medium text-sm">{slot.label}</span>
                                                        {isSelected && <Check size={16} />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleConfirm}
                                        disabled={!selectedDate || !selectedSlot}
                                        className="w-full bg-gold-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gold-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                                    >
                                        Confirm Booking <ArrowRight size={18} />
                                    </button>
                                </>
                            ) : (
                                <div className="text-center py-10">
                                    <h3 className="text-3xl font-serif text-maroon-900 mb-2">Almost Done!</h3>
                                    <p className="text-gray-500 mb-8 max-w-xs mx-auto">
                                        Please complete your booking using one of the options below.
                                    </p>

                                    <div className="space-y-4">
                                        <button
                                            onClick={addToCalendar}
                                            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-md hover:-translate-y-1"
                                        >
                                            <Calendar size={20} /> Add to Google Calendar
                                        </button>
                                        <button
                                            onClick={sendWhatsApp}
                                            className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3 shadow-md hover:-translate-y-1"
                                        >
                                            <Check size={20} /> Confirm via WhatsApp
                                        </button>
                                        <button
                                            onClick={resetBooking}
                                            className="mt-6 text-maroon-900 font-medium hover:underline text-sm"
                                        >
                                            Book Another Slot
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
