import React from 'react';
import { motion } from 'framer-motion';
import { X, Trash2, MessageCircle, Send } from 'lucide-react';

const InquiryBag = ({ items, onClose, onRemove }) => {
    const totalItems = items.length;

    const handleInquiry = () => {
        const itemNames = items.map(item => `- ${item.title} (${item.price})`).join('\n');
        const message = `Hello Aangan Boutique, I am interested in inquiring about the following items:\n\n${itemNames}\n\nPlease provide more details regarding availability and sizing.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative w-full max-w-md bg-cream h-full shadow-2xl flex flex-col"
            >
                <div className="p-6 bg-maroon-900 text-white flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-serif">Inquiry Bag</h3>
                        <p className="text-maroon-100 text-xs uppercase tracking-widest">{totalItems} Items Selected</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto p-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                            <Trash2 size={48} className="mb-4" />
                            <p className="font-serif text-xl">Your bag is empty</p>
                            <button onClick={onClose} className="mt-4 text-gold-600 underline">Start Exploring</button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gold-100 group"
                            >
                                <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-serif text-lg text-maroon-900">{item.title}</h4>
                                    <p className="text-gold-600 font-bold text-sm mb-2">{item.price}</p>
                                    <button
                                        onClick={() => onRemove(item.id)}
                                        className="text-gray-400 hover:text-red-500 flex items-center gap-1 text-[10px] uppercase font-bold transition-colors"
                                    >
                                        <Trash2 size={12} /> Remove
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-6 bg-white border-t border-gold-100">
                        <button
                            onClick={handleInquiry}
                            className="w-full bg-gold-600 text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-700 transition-all shadow-xl flex items-center justify-center gap-3"
                        >
                            <Send size={18} /> Send Inquiry via WhatsApp
                        </button>
                        <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest">
                            Our stylists typically respond within 2-4 hours
                        </p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default InquiryBag;
