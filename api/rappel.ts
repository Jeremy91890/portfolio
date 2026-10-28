// Fonction serveur Vercel : POST /api/rappel → e-mail à contact@nappage.fr via Brevo. Aucune base de données.
// Variables d'environnement (Vercel → Settings → Environment Variables) :
//   BREVO_API_KEY  clé API Brevo (obligatoire)
//   MAIL_FROM      expéditeur validé dans Brevo, ex. site@nappage.fr (obligatoire)
//   MAIL_TO        destinataire, contact@nappage.fr par défaut
import { FR_PHONE, HONEYPOT, LIMITS, REQUIRED, type CallbackField } from '../src/data/callback.js';

// Fourni par Node.js sur Vercel (évite d'ajouter @types/node pour une seule variable)
declare const process: { env: Record<string, string | undefined> };

const PHONE = new RegExp(`^${FR_PHONE}$`);
const LABELS: Record<CallbackField, string> = {
  prenom: 'Prénom',
  commerce: 'Commerce',
  telephone: 'Téléphone',
  ville: 'Ville',
  formule: 'Formule',
  moment: 'Meilleur moment',
  message: 'Message',
};

// Limite d'envois par adresse IP, en mémoire : propre à chaque instance de la fonction,
// suffisant contre un robot insistant, sans cookie ni stockage de l'adresse IP.
const MAX_PER_WINDOW = 5;
const WINDOW_MS = 60 * 60 * 1000;
const hits = new Map<string, number[]>();

export function rateLimited(ip: string, now = Date.now()) {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export async function handle(request: Request, env: Record<string, string | undefined>) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json(400, { error: 'invalid' });
  }
  if (!data || typeof data !== 'object') return json(400, { error: 'invalid' });

  // Robot : on fait comme si tout s'était bien passé, sans rien envoyer
  if (typeof data[HONEYPOT] === 'string' && data[HONEYPOT].trim() !== '') return json(200, { ok: true });

  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || request.headers.get('x-real-ip') || 'inconnue';
  if (rateLimited(ip)) return json(429, { error: 'rate_limited' });

  const fields = {} as Record<CallbackField, string>;
  for (const key of Object.keys(LIMITS) as CallbackField[]) {
    const value = typeof data[key] === 'string' ? (data[key] as string).trim() : '';
    if (value.length > LIMITS[key]) return json(400, { error: 'invalid', field: key });
    fields[key] = value;
  }
  const missing = REQUIRED.find((k) => !fields[k]);
  if (missing) return json(400, { error: 'invalid', field: missing });
  if (!PHONE.test(fields.telephone)) return json(400, { error: 'invalid', field: 'telephone' });

  // Seuls les noms des variables manquantes sont renvoyés, jamais leurs valeurs
  const apiKey = env.BREVO_API_KEY?.trim();
  const from = env.MAIL_FROM?.trim();
  if (!apiKey || !from) {
    const missing = [!apiKey && 'BREVO_API_KEY', !from && 'MAIL_FROM'].filter(Boolean);
    return json(500, { error: 'not_configured', missing });
  }

  const text = (Object.keys(LABELS) as CallbackField[])
    .filter((k) => fields[k])
    .map((k) => `${LABELS[k]} : ${fields[k]}`)
    .join('\n');

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      sender: { email: from, name: 'nappage.fr' },
      to: [{ email: env.MAIL_TO || 'contact@nappage.fr' }],
      subject: `Rappel demandé : ${fields.prenom}, ${fields.commerce}`,
      textContent: `${text}\n\nDemande envoyée depuis le formulaire « Être rappelé » de nappage.fr.`,
    }),
  });
  if (!res.ok) return json(502, { error: 'send_failed' });
  return json(200, { ok: true });
}

export const POST = (request: Request) => handle(request, process.env);
