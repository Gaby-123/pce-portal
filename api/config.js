export default function handler(req, res) {

  const origin  = req.headers.origin || '';
  const allowed = [
    'https://pce-portal-ahwa.vercel.app',
    'http://localhost:3000'
  ];

  if (!allowed.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Cache-Control', 'no-store, no-cache');

  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  });
}
