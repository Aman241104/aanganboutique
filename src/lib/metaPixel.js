// Meta Pixel (browser) + Conversions API (server) tracking, fired together
// for every conversion event so Meta de-dupes them into one signal instead
// of losing the browser-side one to ad blockers / iOS tracking prevention.
//
// Silently no-ops until VITE_META_PIXEL_ID is set — see .env.example —
// same pattern as ../lib/email.js.

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

let pixelLoaded = false;

function loadPixelScript() {
    if (pixelLoaded || typeof window === 'undefined' || window.fbq) return;
    pixelLoaded = true;

    (function (f, b, e, v) {
        let n, t, s;
        if (f.fbq) return;
        n = f.fbq = function (...args) {
            n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
        t = b.createElement(e); t.async = true; t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
}

// Call once, on app mount.
export function initPixel() {
    if (!PIXEL_ID || typeof window === 'undefined') return;
    loadPixelScript();
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
}

// Call on every client-side route change (this is a single-page app, so the
// initial 'PageView' above only covers the first load).
export function trackPageView() {
    if (!PIXEL_ID || typeof window === 'undefined' || !window.fbq) return;
    window.fbq('track', 'PageView');
}

function getCookie(name) {
    if (typeof document === 'undefined') return undefined;
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : undefined;
}

function makeEventId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

// Fires a named event (standard Meta events: 'Lead', 'Contact', 'Subscribe',
// 'ViewContent', or any custom name) through both the Pixel and the
// Conversions API, sharing one event_id between them for de-duplication.
export function trackEvent(eventName, customData = {}) {
    if (!PIXEL_ID || typeof window === 'undefined') return;

    const eventId = makeEventId();

    if (window.fbq) {
        window.fbq('track', eventName, customData, { eventID: eventId });
    }

    // Best-effort — never block the actual user action (WhatsApp/booking/etc.)
    // on this, and never surface a failure to the visitor.
    fetch('/api/capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            event_name: eventName,
            event_id: eventId,
            event_source_url: window.location.href,
            custom_data: customData,
            fbp: getCookie('_fbp'),
            fbc: getCookie('_fbc'),
        }),
    }).catch(() => {});
}
