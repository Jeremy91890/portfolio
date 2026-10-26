// Formulaire « Être rappelé » : règles communes au navigateur (Contact.tsx) et à la fonction serveur (api/rappel.ts)

// Numéro de téléphone français : 06 12 34 56 78, 0612345678, +33 6 12 34 56 78…
export const FR_PHONE = "(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.\\-]*\\d{2}){4}";
export const UNDECIDED = "Je ne sais pas encore";
export const MOMENTS = ["Matin", "Midi", "Soir", "Samedi"];
// Champ piège : un visiteur ne le voit pas, un robot le remplit
export const HONEYPOT = "site_web";

export const LIMITS = { prenom: 80, commerce: 120, telephone: 30, ville: 80, formule: 40, moment: 20, message: 2000 } as const;
export type CallbackField = keyof typeof LIMITS;
export const REQUIRED: CallbackField[] = ["prenom", "commerce", "telephone"];
