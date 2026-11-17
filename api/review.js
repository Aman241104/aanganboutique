// Vercel serverless function: turns a customer's questionnaire answers into a
// Google review draft. The keys stay server-side (GEMINI_API_KEY, GROQ_API_KEY
// in the Vercel project env) and never reach the client bundle.
// Gemini first; Groq if Gemini errors, times out or hits its free-tier limit.
// Nothing is posted anywhere: the customer edits the draft and submits it on
// Google themselves.

import { buildPrompt, cleanAnswers } from './_reviewPrompt.js';

const GEMINI_MODEL = 'gemini-3.5-flash-lite';
const GROQ_MODEL = 'openai/gpt-oss-120b';
const TIMEOUT_MS = 12000;

async function post(url, headers, body) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...headers },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`${url.split('/')[2]} ${res.status}`);
    return res.json();
}

async function gemini(prompt, key) {
    const data = await post(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
        { 'X-goog-api-key': key },
        {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.9, maxOutputTokens: 400 },
        },
    );
    return data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') ?? '';
}

async function groq(prompt, key) {
    const data = await post(
        'https://api.groq.com/openai/v1/chat/completions',
        { Authorization: `Bearer ${key}` },
        {
            model: GROQ_MODEL,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.9,
            max_tokens: 1200,
        },
    );
    return data.choices?.[0]?.message?.content ?? '';
}

// Strip wrapping quotes / "Here's your review:" preambles models sometimes add.
const tidy = (text) =>
    text.trim().replace(/^(here('|’)s|here is)[^:\n]*:\s*/i, '').replace(/^["“]|["”]$/g, '').trim();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const answers = cleanAnswers(req.body);
    if (!answers) {
        res.status(400).json({ error: 'Please choose at least one option.' });
        return;
    }
    const prompt = buildPrompt(answers);

    const providers = [
        ['gemini', gemini, process.env.GEMINI_API_KEY],
        ['groq', groq, process.env.GROQ_API_KEY],
    ].filter(([, , key]) => key);

    for (const [name, call, key] of providers) {
        try {
            const review = tidy(await call(prompt, key));
            if (review.length > 40) {
                res.status(200).json({ review, provider: name });
                return;
            }
            console.error(`[review] ${name} returned an empty/short draft`);
        } catch (err) {
            console.error(`[review] ${name} failed:`, err.message);
        }
    }

    res.status(503).json({ error: 'Our writing assistant is busy right now.' });
}
