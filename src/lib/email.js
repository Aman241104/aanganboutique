import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Fires an instant email notification to the boutique inbox alongside the
// WhatsApp message — used by both bookings and newsletter sign-ups — via
// EmailJS (no backend required). Silently no-ops until the three
// VITE_EMAILJS_* keys are set in .env — see .env.example.
export const sendNotificationEmail = (params) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS not configured — skipping instant email log. See .env.example.');
        return Promise.resolve();
    }
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });
};
