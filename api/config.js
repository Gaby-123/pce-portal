export default function handler(req, res) {

  const origin  = req.headers.origin || '';
  const host    = req.headers.host   || '';

  // Allow requests from your Vercel domain
  // Also allow same-origin requests (no origin header)
  // and localhost for development
  const isAllowed =
    origin === 'https://pce-portal-ahwa.vercel.app' ||
    origin === 'http://localhost:3000'               ||
    origin === 'http://127.0.0.1:5500'               ||
    origin === ''                                     ||
    host.includes('pce-portal-ahwa.vercel.app')      ||
    host.includes('localhost');

  if (!isAllowed) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // Set CORS headers
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Cache-Control', 'no-store, no-cache');

  // Return the keys from environment variables
  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  });
}
