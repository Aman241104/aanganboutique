import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Clients from '../components/Clients';
import Atelier from '../components/Atelier';
import InstagramFeed from '../components/InstagramFeed';
import Testimonials from '../components/Testimonials';
import BookingPaths from '../components/BookingPaths';
import BookingSection from '../components/BookingSection';
import Visit from '../components/Visit';
import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const Home = () => {
  return (
    <>
      <Hero />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
        <Clients />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
        <About />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
        <InstagramFeed />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
        <BookingPaths />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
        <BookingSection />
      </motion.div>

      <Atelier />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
        <Testimonials />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}>
        <Visit />
      </motion.div>
    </>
  );
};

export default Home;
