// Vercel serverless function — forwards conversion events to Meta's
// Conversions API. Kept server-side because META_CAPI_ACCESS_TOKEN is a
// secret and must never ship in the client bundle (unlike the Pixel ID,
// which is public and lives in VITE_META_PIXEL_ID).
//
// Silently no-ops (200, skipped) until META_PIXEL_ID and
// META_CAPI_ACCESS_TOKEN are set in the Vercel project's environment
// variables — see .env.example.

const GRAPH_API_VERSION = 'v21.0';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
        res.status(200).json({ skipped: true });
        return;
    }

    const { event_name, event_id, event_source_url, custom_data, fbp, fbc } = req.body || {};

    if (!event_name || !event_id) {
        res.status(400).json({ error: 'Missing event_name or event_id' });
        return;
    }

    const forwardedFor = req.headers['x-forwarded-for'];
    const clientIp = Array.isArray(forwardedFor)
        ? forwardedFor[0]
        : forwardedFor?.split(',')[0]?.trim();

    const payload = {
        data: [
            {
                event_name,
                event_id,
                event_time: Math.floor(Date.now() / 1000),
                event_source_url,
                action_source: 'website',
                user_data: {
                    client_ip_address: clientIp,
                    client_user_agent: req.headers['user-agent'],
                    ...(fbp ? { fbp } : {}),
                    ...(fbc ? { fbc } : {}),
                },
                custom_data: custom_data || {},
            },
        ],
        // Set META_TEST_EVENT_CODE while validating in Events Manager's
        // "Test Events" tab; remove it (or leave unset) to go live.
        ...(process.env.META_TEST_EVENT_CODE
            ? { test_event_code: process.env.META_TEST_EVENT_CODE }
            : {}),
    };

    try {
        const metaRes = await fetch(
            `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events?access_token=${accessToken}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            }
        );
        const data = await metaRes.json();
        res.status(metaRes.ok ? 200 : 502).json(data);
    } catch (err) {
        console.error('Meta CAPI request failed:', err);
        res.status(502).json({ error: 'Failed to reach Meta' });
    }
}
