import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
    return (
        <section className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative grayscale-[30%] hover:grayscale-0 transition-all duration-700">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5466577770826!2d72.50476189999999!3d23.040411899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b87f736f243%3A0x7358857d286d18b4!2sAangan%20Boutique!5e0!3m2!1sen!2sin!4v1769489338146!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aangan Boutique Location"
                className="w-full h-full"
            ></iframe>


        </section>
    );
};

export default MapSection;
