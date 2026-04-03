import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
    // Placeholder data for Instagram posts
    // In a real scenario, these would be fetched from Instagram Basic Display API
    const posts = [
        {
            id: 1,
            url: 'https://www.instagram.com/p/DV5Jnn4DAAC/',
            image: 'https://scontent.cdninstagram.com/v/t39.30808-6/651030899_1570952678365637_7602495783837362708_n.jpg?stp=c216.0.648.648a_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=HViNlOL3Dc0Q7kNvwEWVZZq&_nc_oc=Adpi9uCfqLzJIm7Edes-pvZSILQK3pXNyMz0rdIV47hmFY2MqGcv-VoY6b4wspN_Sjsk_4URmWKVudKWv5jlS_yQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=mC57EneDKEnFCyfHQgEfZQ&_nc_ss=7a389&oh=00_Af3O6jOXFJ4cYPJaFVD_HGRvTWUWPGJDduW8iuSLL5UFgw&oe=69D54967',
            caption: 'Elegant bridal collection at Aangan Boutique.'
        },
        {
            id: 2,
            url: 'https://www.instagram.com/p/DUiPGOLkctT/',
            image: 'https://scontent.cdninstagram.com/v/t51.82787-15/629230865_18314663359270186_1939503507000077177_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=AQhYVFUKE0QQ7kNvwFfjm2z&_nc_oc=AdrbSsTionUNJCj3VHNc-LICPzPNkTuK-Xw1zqbrQH03IzjDr5OeMzkSUJpFkNRAuUZckU3u5gjqV-qQQqvlfOIg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=OI0lM9FVdYhIBhH4l8xLgQ&_nc_ss=7a389&oh=00_Af3b5XLkTYzi-1OEFFTf_SOL5gPYAv5cgYyVgZF3C4xXcw&oe=69D559EC',
            caption: 'Customized designer wear for every occasion.'
        },
        {
            id: 3,
            url: 'https://www.instagram.com/p/DVLB1p7kWt4/',
            image: 'https://scontent.cdninstagram.com/v/t51.82787-15/641272938_18316383256270186_2916805910755747343_n.jpg?stp=c204.0.615.614a_dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=wWTdNkArebYQ7kNvwHNx_w2&_nc_oc=AdpqG80sPQwJWhTC1B5m18gwCvRjqEkRxGhZGW7anypOzoTn111Yq3Nk8U60aUym4PLqVGgMA8SevHIopFm2h9JN&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=S2JoXXIvxpstBZHVoFFyIA&_nc_ss=7a389&oh=00_Af2jsE_lOE_fkl7kgqfGw5rNbUP5vUocJligRIoM3oWSsA&oe=69D54C9B',
            caption: 'Exquisite craftsmanship and premium fabrics.'
        },
        {
            id: 4,
            url: 'https://www.instagram.com/p/DTdfLamk55d/',
            image: 'https://scontent.cdninstagram.com/v/t51.82787-15/616237272_18310888507270186_6763786387999041088_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=NiekMIOZNjIQ7kNvwHAWVhY&_nc_oc=Adp3QaXs6_HcUZf-DNtPwIfVefSdRQJkZBe5KsU6-XDa5VpZHyBZxTt37ONufWRERdj9yxxoNI-YtvJ8lrbaYd5R&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=a6Tmj8UnUK2Vgg-cWcjWbQ&_nc_ss=7a389&oh=00_Af1_fa2P-oi5FF9xUUiyKtH-u86G7myx5Ycz9iTPuzQ_vA&oe=69D54250',
            caption: 'Discover the latest trends in ethnic wear.'
        },
        {
            id: 5,
            url: 'https://www.instagram.com/p/DTAUuOckgJZ/',
            image: 'https://scontent.cdninstagram.com/v/t39.30808-6/610609931_1505949808199258_904484883679875557_n.jpg?stp=c204.0.615.614a_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=BhitdNlcdQsQ7kNvwFgt1LA&_nc_oc=AdqyThnbfNozz0mVj5E8LESABSWfp5syndm5hXUvG0zUl20Hjsrium1nCbHp_k3KvawhRpbuEeYGYWw8lhcK8MAX&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EKx9lst1AuXZdXmpUfI-_g&_nc_ss=7a389&oh=00_Af3x6dxSi6M44ktp1Sh43JeqVzDUdLcqTPm_L230Bsm1Hg&oe=69D54954',
            caption: 'Traditional meets modern at Aangan.'
        }
    ];

    return (
        <section id="instagram" className="py-12 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <Instagram className="text-gold-600 mb-4" size={40} />
                        <span className="text-gold-600 uppercase tracking-widest text-xs font-semibold mb-2">Follow Us on Instagram</span>
                        <h2 className="font-serif text-4xl lg:text-5xl text-dark-900 mb-4">@_aanganboutique_</h2>
                        <div className="w-24 h-1 bg-gold-500 rounded-full mb-8"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group aspect-square overflow-hidden rounded-xl shadow-md"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-maroon-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="p-4 text-center">
                                    <Instagram className="text-white mx-auto mb-2" size={24} />
                                    <span className="text-white text-[10px] uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
                                        View Post <ExternalLink size={10} />
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://www.instagram.com/_aanganboutique_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-maroon-900 text-white px-10 py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-maroon-800 transition-colors shadow-lg"
                    >
                        Visit Our Profile
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
