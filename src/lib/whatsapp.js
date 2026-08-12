export const WHATSAPP_NUMBER = '917948923535';

export const whatsappUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
