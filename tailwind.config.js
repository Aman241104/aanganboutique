/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    50: '#F9F5EA',
                    100: '#F2E8D3',
                    200: '#E6D0A8',
                    300: '#D9B87D',
                    400: '#CCA052',
                    500: '#C5A059', // Primary Gold
                    600: '#B08A3E',
                    700: '#8E6E32',
                    800: '#6C5326',
                    900: '#4A391A',
                },
                maroon: {
                    500: '#800020',
                    900: '#2C040B',
                    950: '#1A0207',
                },
                dark: {
                    900: '#121212',
                    800: '#1A1A1A',
                },
                cream: '#FDFBF7',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            borderRadius: {
                'blob-1': '30% 70% 70% 30% / 30% 30% 70% 70%',
                'blob-2': '60% 40% 30% 70% / 60% 30% 70% 40%',
                'arch': '150px 150px 20px 20px',
                'organic-1': '55% 45% 33% 67% / 55% 44% 56% 45%',
            },
            backgroundImage: {
                'luxury-gradient': 'linear-gradient(to right, #121212, #2C040B)',
                'gold-shimmer': 'linear-gradient(45deg, rgba(197,160,89,0.1) 0%, rgba(255,255,255,0.4) 50%, rgba(197,160,89,0.1) 100%)',
            },
            letterSpacing: {
                'widest': '.25em',
                'tightest': '-.05em',
            },
            dropShadow: {
                'glow': '0 0 10px rgba(197, 160, 89, 0.3)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
