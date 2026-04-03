import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import OurCraft from './components/OurCraft';
import Clients from './components/Clients';
import Products from './components/Products';
import CollectionGallery from './components/CollectionGallery';
import InstagramFeed from './components/InstagramFeed';
import Testimonials from './components/Testimonials';
import InquiryBag from './components/InquiryBag';
import AIStylist from './components/AIStylist';

import BookingSection from './components/BookingSection';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import { MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

function App() {
  const [inquiryBag, setInquiryBag] = useState([]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isAIStylistOpen, setIsAIStylistOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('button') || 
        e.target.closest('a') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const addToBag = (product) => {
    if (!inquiryBag.find(item => item.id === product.id)) {
      setInquiryBag([...inquiryBag, product]);
      setIsBagOpen(true);
    }
  };

  const removeFromBag = (id) => {
    setInquiryBag(inquiryBag.filter(item => item.id !== id));
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-gold-200 relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Custom Cursor */}
      <div
        className={`custom-cursor hidden lg:block ${isHovering ? 'cursor-hover' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <div
        className={`custom-cursor-follower hidden lg:block ${isHovering ? 'cursor-hover-follower' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      <Header bagCount={inquiryBag.length} onOpenBag={() => setIsBagOpen(true)} />

      <main className="flex-grow">
        <Hero />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
          <Clients />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
          <About />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
          <OurCraft />
        </motion.div>
        
        <Products onAddToBag={addToBag} />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
          <CollectionGallery />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
          <InstagramFeed />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
          <Testimonials />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
          <BookingSection />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
          <Contact />
        </motion.div>
        
        <MapSection />
      </main>

      <Footer />

      {/* Interactive Tools */}
      <AnimatePresence>
        {isBagOpen && (
          <InquiryBag
            items={inquiryBag}
            onClose={() => setIsBagOpen(false)}
            onRemove={removeFromBag}
          />
        )}
        {isAIStylistOpen && (
          <AIStylist onClose={() => setIsAIStylistOpen(false)} />
        )}
      </AnimatePresence>

      {/* Floating Actions */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsAIStylistOpen(true)}
          className="bg-maroon-900 text-gold-400 p-4 rounded-full shadow-2xl border border-gold-500/30 flex items-center justify-center"
          aria-label="AI Stylist"
        >
          <Sparkles size={28} />
        </motion.button>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      </div>

      {/* Bag Trigger (only if items exist) */}
      {inquiryBag.length > 0 && !isBagOpen && (
        <motion.button
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="fixed top-1/2 right-0 -translate-y-1/2 z-50 bg-gold-600 text-white p-4 rounded-l-2xl shadow-2xl flex flex-col items-center gap-2"
          onClick={() => setIsBagOpen(true)}
        >
          <ShoppingBag size={24} />
          <span className="text-[10px] font-bold">{inquiryBag.length}</span>
        </motion.button>
      )}
    </div>
  );
}

export default App;
