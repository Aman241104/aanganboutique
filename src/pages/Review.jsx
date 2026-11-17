import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy, PenLine, Sparkles, ArrowLeft, RotateCcw, Star } from 'lucide-react';
import { QUESTIONS } from '../../api/_reviewPrompt.js';
import { useDocumentMeta } from '../lib/seo';

// Landing page for the in-store QR code (aanganboutique.in/review).
// Rendered without the site header/footer (see App.jsx) so it reads as a
// focused, two-tap flow on a phone.

// Aangan Boutique's Google Business place (same place as the Visit section's map embed).
export const GOOGLE_REVIEW_URL =
    'https://search.google.com/local/writereview?placeid=ChIJQ_I294ebXjkRtBhtKH2FWHM';

const EDGE_FADE =
    'linear-gradient(to right, transparent, #000 9%, #000 91%, transparent), linear-gradient(transparent, #000 9%, #000 91%, transparent)';

const EDGE_FADE_STYLE = {
    WebkitMaskImage: EDGE_FADE,
    maskImage: EDGE_FADE,
    WebkitMaskComposite: 'source-in',
    maskComposite: 'intersect',
};

// Aangan's QR tree. The looping video shows straight away; the live 3D tree
// (public/media/qr-tree.html, the B23 engine in Aangan colours) loads behind
// it and takes over once it has drawn, so tapping the tree or the note toggles
// between the tree and this page's QR code, and dragging spins it. Without
// WebGL the iframe never reports ready and the video simply keeps playing.
const QrTree = () => {
    const frame = useRef(null);
    const [ready, setReady] = useState(false);
    const [qr, setQr] = useState(false);

    useEffect(() => {
        const onMessage = (m) => {
            if (m.origin !== window.location.origin || m.source !== frame.current?.contentWindow || !m.data?.qrTree) return;
            if (m.data.ready) setReady(true);
            if ('qr' in m.data) setQr(m.data.qr);
        };
        window.addEventListener('message', onMessage);
        return () => window.removeEventListener('message', onMessage);
    }, []);

    const toggle = () => frame.current?.contentWindow?.postMessage('qrTree:toggle', window.location.origin);

    return (
        <div className="-mt-4 mb-4 flex flex-col items-center">
            <div className="relative w-64 h-64">
                {!ready && (
                    <video
                        className="absolute inset-0 w-full h-full mix-blend-multiply pointer-events-none"
                        src="/media/review-qr-tree.mp4"
                        poster="/media/review-qr-tree-poster.webp"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                        // Soft edge so a browser's slight off-white video tint never shows as a box.
                        style={EDGE_FADE_STYLE}
                    />
                )}
                <iframe
                    ref={frame}
                    src="/media/qr-tree.html"
                    title="Aangan QR tree: tap to switch between the tree and the QR code"
                    className={`absolute inset-0 w-full h-full border-0 bg-transparent transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
                    style={{ colorScheme: 'normal' }}
                />
            </div>
            {ready && (
                <button
                    type="button"
                    onClick={toggle}
                    className="mt-1 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-white/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold-700 hover:border-gold-500 hover:text-maroon-900 transition-colors"
                >
                    <Sparkles size={12} className={qr ? '' : 'animate-pulse'} />
                    {qr ? 'Tap to see the tree' : 'Tap me'}
                </button>
            )}
        </div>
    );
};

const emptyAnswers = () =>
    Object.fromEntries(QUESTIONS.map((q) => [q.id, { selected: [], other: '', otherOn: false }]));

const Chip = ({ active, onClick, children }) => (
    <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`flex items-center gap-2 text-left text-sm rounded-full border px-4 py-2.5 transition-colors ${
            active
                ? 'bg-maroon-900 border-maroon-900 text-cream'
                : 'bg-white/70 border-maroon-900/15 text-maroon-900 hover:border-gold-500'
        }`}
    >
        {active && <Check size={14} className="flex-shrink-0" />}
        {children}
    </button>
);

const Review = () => {
    useDocumentMeta({
        title: 'Share Your Experience | Aangan Boutique',
        description: 'Tell us about your visit to Aangan Boutique, Ahmedabad, and leave a Google review.',
        path: '/review',
    });

    const [step, setStep] = useState('choose'); // choose | questions | loading | draft
    const [answers, setAnswers] = useState(emptyAnswers);
    const [note, setNote] = useState('');
    const [draft, setDraft] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);
    const draftRef = useRef(null);

    const toggle = (qid, option) =>
        setAnswers((a) => {
            const sel = a[qid].selected;
            return {
                ...a,
                [qid]: { ...a[qid], selected: sel.includes(option) ? sel.filter((s) => s !== option) : [...sel, option] },
            };
        });
    const setQ = (qid, patch) => setAnswers((a) => ({ ...a, [qid]: { ...a[qid], ...patch } }));

    const hasAnswer =
        note.trim() ||
        QUESTIONS.some((q) => answers[q.id].selected.length || (answers[q.id].otherOn && answers[q.id].other.trim()));

    const generate = async () => {
        setError('');
        setStep('loading');
        const body = { note };
        for (const q of QUESTIONS) {
            const a = answers[q.id];
            body[q.id] = { selected: a.selected, other: a.otherOn ? a.other : '' };
        }
        try {
            const res = await fetch('/api/review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.review) throw new Error(data.error);
            setDraft(data.review);
            setCopied(false);
            setStep('draft');
        } catch (e) {
            setError(
                (e.message || 'Something went wrong.') +
                    ' Please try again, or write your own review on Google.'
            );
            setStep('questions');
        }
    };

    // Runs inside the link's click, so the copy happens within the user
    // gesture before the browser follows the link to Google (works on iOS too).
    const copyDraft = () => {
        const el = draftRef.current;
        if (el) {
            el.select();
            try { document.execCommand('copy'); } catch { /* clipboard API below */ }
            el.setSelectionRange(0, 0);
            el.blur();
        }
        navigator.clipboard?.writeText(draft).catch(() => {});
        setCopied(true);
    };

    return (
        <div className="min-h-screen bg-cream relative overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-100/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-lg mx-auto px-5 pt-10 pb-16">
                <header className="text-center mb-10">
                    <a href="/" aria-label="Aangan Boutique home">
                        <img src="/Logo.webp" alt="Aangan Boutique" className="h-11 w-auto mx-auto object-contain" />
                    </a>
                    <p className="mt-3 text-gold-600 uppercase tracking-[0.4em] text-[9px] font-semibold">
                        Ahmedabad
                    </p>
                </header>

                {step === 'choose' && (
                    <section className="text-center">
                        <QrTree />
                        <h1 className="font-serif text-4xl text-maroon-900 leading-tight">
                            Share Your <span className="italic text-gold-600">Experience</span>
                        </h1>
                        <p className="mt-4 text-gray-600 font-light leading-relaxed">
                            Thank you for visiting us. A review on Google helps others find Aangan, and it means a great deal to our team.
                        </p>

                        <div className="mt-10 grid gap-4">
                            <button
                                type="button"
                                onClick={() => setStep('questions')}
                                className="group text-left rounded-2xl border border-maroon-900/10 bg-white/80 p-6 hover:border-gold-500 transition-colors"
                            >
                                <Sparkles size={20} className="text-gold-600" />
                                <span className="block mt-3 font-serif text-xl text-maroon-900">Write my review with AI assistance</span>
                                <span className="block mt-1.5 text-sm text-gray-500 font-light">
                                    Answer a few quick questions and we'll draft it for you to edit.
                                </span>
                            </button>
                            <a
                                href={GOOGLE_REVIEW_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-left rounded-2xl border border-maroon-900/10 bg-white/80 p-6 hover:border-gold-500 transition-colors"
                            >
                                <PenLine size={20} className="text-gold-600" />
                                <span className="block mt-3 font-serif text-xl text-maroon-900">I'll write my own review</span>
                                <span className="block mt-1.5 text-sm text-gray-500 font-light">
                                    Go straight to our Google review page.
                                </span>
                            </a>
                        </div>
                    </section>
                )}

                {(step === 'questions' || step === 'loading') && (
                    <section aria-busy={step === 'loading'}>
                        <button
                            type="button"
                            onClick={() => setStep('choose')}
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-500 hover:text-maroon-900"
                        >
                            <ArrowLeft size={14} /> Back
                        </button>
                        <h1 className="mt-6 font-serif text-3xl text-maroon-900">A few quick questions</h1>
                        <p className="mt-2 text-sm text-gray-500 font-light">Choose all that apply. Everything is optional.</p>

                        <div className="mt-8 space-y-9">
                            {QUESTIONS.map((q, i) => (
                                <fieldset key={q.id}>
                                    <legend className="font-serif text-lg text-maroon-900 mb-4">
                                        <span className="text-gold-600 mr-2">{i + 1}.</span>
                                        {q.title}
                                    </legend>
                                    <div className="flex flex-wrap gap-2">
                                        {q.options.map((opt) => (
                                            <Chip key={opt} active={answers[q.id].selected.includes(opt)} onClick={() => toggle(q.id, opt)}>
                                                {opt}
                                            </Chip>
                                        ))}
                                        <Chip active={answers[q.id].otherOn} onClick={() => setQ(q.id, { otherOn: !answers[q.id].otherOn })}>
                                            Other
                                        </Chip>
                                    </div>
                                    {answers[q.id].otherOn && (
                                        <input
                                            type="text"
                                            maxLength={80}
                                            value={answers[q.id].other}
                                            onChange={(e) => setQ(q.id, { other: e.target.value })}
                                            placeholder="Please specify"
                                            aria-label={`${q.title} (other)`}
                                            className="mt-3 w-full rounded-xl border border-maroon-900/15 bg-white px-4 py-3 text-base focus:outline-none focus:border-gold-500"
                                        />
                                    )}
                                </fieldset>
                            ))}

                            <div>
                                <label htmlFor="review-note" className="font-serif text-lg text-maroon-900 block mb-1">
                                    <span className="text-gold-600 mr-2">4.</span>
                                    Anything else about your visit?
                                </label>
                                <p className="text-xs text-gray-400 mb-3">Optional</p>
                                <textarea
                                    id="review-note"
                                    rows={3}
                                    maxLength={500}
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    placeholder="Type anything you'd like to add"
                                    className="w-full rounded-xl border border-maroon-900/15 bg-white px-4 py-3 text-base focus:outline-none focus:border-gold-500 resize-none"
                                />
                            </div>
                        </div>

                        {error && (
                            <p role="alert" className="mt-6 text-sm text-maroon-600">
                                {error}{' '}
                                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="underline">
                                    Open Google reviews
                                </a>
                            </p>
                        )}

                        <button
                            type="button"
                            onClick={generate}
                            disabled={!hasAnswer || step === 'loading'}
                            className="mt-8 w-full rounded-full bg-maroon-900 text-cream py-4 text-sm uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-3 disabled:opacity-40 transition-opacity"
                        >
                            {step === 'loading' ? (
                                <>
                                    <Sparkles size={16} className="animate-pulse" /> Writing your review…
                                </>
                            ) : (
                                <>
                                    <Sparkles size={16} /> Generate my review
                                </>
                            )}
                        </button>
                        {!hasAnswer && <p className="mt-3 text-center text-xs text-gray-400">Choose at least one option to continue.</p>}
                    </section>
                )}

                {step === 'draft' && (
                    <section>
                        <h1 className="font-serif text-3xl text-maroon-900 text-center">Your review is ready</h1>
                        <p className="mt-2 text-sm text-gray-500 font-light text-center">
                            Read it through and change anything you like. It should sound like you.
                        </p>

                        <label htmlFor="review-draft" className="sr-only">Your review</label>
                        <textarea
                            id="review-draft"
                            ref={draftRef}
                            rows={11}
                            value={draft}
                            onChange={(e) => { setDraft(e.target.value); setCopied(false); }}
                            className="mt-6 w-full rounded-2xl border border-maroon-900/15 bg-white px-5 py-4 text-base leading-relaxed text-gray-800 focus:outline-none focus:border-gold-500"
                        />

                        <a
                            href={GOOGLE_REVIEW_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={copyDraft}
                            className="mt-6 w-full rounded-full bg-maroon-900 text-cream py-4 text-sm uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-3"
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />} Copy review &amp; open Google
                        </a>

                        <p className="mt-4 text-center text-sm text-gray-500 font-light flex items-center justify-center gap-1.5 flex-wrap" aria-live="polite">
                            {copied ? (
                                <>Copied. On Google, tap the stars <Star size={13} className="text-gold-500 fill-gold-500" />, paste your review and post it.</>
                            ) : (
                                'Your review is copied, and Google opens for you to paste and post it.'
                            )}
                        </p>

                        <div className="mt-8 flex justify-center gap-8 text-xs uppercase tracking-[0.25em] text-gray-500">
                            <button type="button" onClick={generate} className="inline-flex items-center gap-2 hover:text-maroon-900">
                                <RotateCcw size={13} /> Try another
                            </button>
                            <button type="button" onClick={() => setStep('questions')} className="inline-flex items-center gap-2 hover:text-maroon-900">
                                <ArrowLeft size={13} /> Edit answers
                            </button>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default Review;
