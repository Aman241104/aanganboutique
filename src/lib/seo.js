import { useEffect } from 'react';

const SITE_URL = 'https://www.aanganboutique.in';

function setMetaTag(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setCanonical(href) {
    let el = document.head.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

// Updates document title, meta description, canonical and OG/Twitter tags
// for client-side routed pages. Restores the defaults on unmount so
// navigating back to "/" always shows the homepage tags again.
export function useDocumentMeta({ title, description, path = '/', image }) {
    useEffect(() => {
        const defaultTitle = document.title;
        const canonicalUrl = `${SITE_URL}${path}`;

        if (title) document.title = title;
        if (description) setMetaTag('name', 'description', description);
        setCanonical(canonicalUrl);
        if (title) {
            setMetaTag('property', 'og:title', title);
            setMetaTag('property', 'twitter:title', title);
        }
        if (description) {
            setMetaTag('property', 'og:description', description);
            setMetaTag('property', 'twitter:description', description);
        }
        setMetaTag('property', 'og:url', canonicalUrl);
        if (image) {
            setMetaTag('property', 'og:image', image);
            setMetaTag('property', 'twitter:image', image);
        }

        return () => {
            document.title = defaultTitle;
        };
    }, [title, description, path, image]);
}

// Injects a JSON-LD <script> block, replacing any prior one with the same id.
export function useJsonLd(id, data) {
    useEffect(() => {
        if (!data) return undefined;
        let script = document.getElementById(id);
        if (!script) {
            script = document.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(data);

        return () => {
            script?.remove();
        };
    }, [id, data]);
}

export { SITE_URL };
