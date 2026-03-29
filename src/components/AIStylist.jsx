import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, User, Bot, RefreshCw } from 'lucide-react';

const AIStylist = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: "Namaste! I am your Aangan Style Concierge. I can help you find the perfect outfit for your next special occasion. What's the event you're preparing for?" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', text: input };
        setMessages([...messages, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            const botResponse = getBotResponse(input);
            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (text) => {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('wedding') || lowerText.includes('shaadi')) {
            return "For weddings, I highly recommend our Royal Maroon Lehenga collection. It features master-crafted traditional motifs that exude elegance. Would you like to see our Bridal collection?";
        } else if (lowerText.includes('party') || lowerText.includes('cocktail')) {
            return "For a cocktail evening, our Indo-western silhouettes are a perfect choice. They blend modern cuts with ethnic embroidery. Check out our 'Indo western' category!";
        } else if (lowerText.includes('festive') || lowerText.includes('diwali') || lowerText.includes('pooja')) {
            return "For festive occasions, our Silk Sarees and Anarkalis are timeless. The Emerald Silk Saree is a client favorite this season.";
        } else {
            return "That sounds wonderful! Aangan Boutique has curated pieces for every story. Could you tell me a bit more about the style you prefer? (e.g., Traditional, Modern, Minimalist)";
        }
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-maroon-900/40 backdrop-blur-xl"
            />

            <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                className="relative bg-white w-full max-w-lg rounded-[3em] shadow-2xl overflow-hidden flex flex-col h-[600px] border border-gold-500/20"
            >
                {/* Header */}
                <div className="bg-maroon-900 p-6 flex justify-between items-center border-b border-gold-500/20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-maroon-900 shadow-lg">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <h3 className="text-white font-serif text-lg leading-tight">Style Concierge</h3>
                            <p className="text-gold-400 text-[10px] uppercase tracking-widest font-bold">Powered by Aangan AI</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-white/60 hover:text-white transition-colors p-2">
                        <X size={24} />
                    </button>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-cream/50 custom-scrollbar">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${msg.type === 'user' ? 'bg-maroon-900 text-white' : 'bg-gold-100 text-gold-700'}`}>
                                    {msg.type === 'user' ? <User size={14} /> : <Bot size={14} />}
                                </div>
                                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.type === 'user'
                                        ? 'bg-maroon-800 text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 rounded-tl-none border border-gold-100'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center">
                                    <RefreshCw size={14} className="animate-spin" />
                                </div>
                                <div className="bg-white p-4 rounded-2xl border border-gold-100 rounded-tl-none">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-6 bg-white border-t border-gold-100">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Describe your event or style..."
                            className="w-full bg-gray-50 border border-gold-100 rounded-full py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            className="absolute right-2 w-10 h-10 bg-maroon-900 text-gold-400 rounded-full flex items-center justify-center hover:bg-maroon-800 transition-colors disabled:opacity-50"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                    <p className="text-center text-[9px] text-gray-400 mt-3 uppercase tracking-widest">
                        Your data is secured with Aangan Private Cloud
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AIStylist;
