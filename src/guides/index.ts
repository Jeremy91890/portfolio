import type { ComponentType } from 'react';
import Pourquoi from './pourquoi-creer-un-site-pour-son-commerce';
import Prix from './prix-site-web-commercant';
import Referencement from './referencement-local-google-maps';
import Avis from './avis-google-commerce-local';
import Instagram from './site-web-ou-instagram';
import Artisan from './site-internet-artisan-commercant';
import Boulangerie from './site-internet-boulangerie';
import Coiffeur from './site-internet-coiffeur';
import Plombier from './site-internet-plombier';
import Restaurant from './site-internet-restaurant';
import Fleuriste from './site-internet-fleuriste';
import Institut from './site-internet-institut-beaute';
import Electricien from './site-internet-electricien';
import Garage from './site-internet-garage-automobile';
import Cadeaux from './site-internet-boutique-cadeaux';
import Jeux from './site-internet-boutique-jeux';
import Vetements from './site-internet-boutique-vetements';
import Rapidement from './creer-site-boutique-rapidement';
import Freelance from './agence-web-ou-freelance';
import Wordpress from './wordpress-commerce-local';
import Newsletter from './newsletter-commerce-local';

// Contenu de chaque guide, par slug (métadonnées dans src/data/guides.ts)
export const bodies: Record<string, ComponentType> = {
  'pourquoi-creer-un-site-pour-son-commerce': Pourquoi,
  'prix-site-web-commercant': Prix,
  'referencement-local-google-maps': Referencement,
  'avis-google-commerce-local': Avis,
  'site-web-ou-instagram': Instagram,
  'site-internet-artisan-commercant': Artisan,
  'site-internet-boulangerie': Boulangerie,
  'site-internet-coiffeur': Coiffeur,
  'site-internet-plombier': Plombier,
  'site-internet-restaurant': Restaurant,
  'site-internet-fleuriste': Fleuriste,
  'site-internet-institut-beaute': Institut,
  'site-internet-electricien': Electricien,
  'site-internet-garage-automobile': Garage,
  'site-internet-boutique-cadeaux': Cadeaux,
  'site-internet-boutique-jeux': Jeux,
  'site-internet-boutique-vetements': Vetements,
  'creer-site-boutique-rapidement': Rapidement,
  'agence-web-ou-freelance': Freelance,
  'wordpress-commerce-local': Wordpress,
  'newsletter-commerce-local': Newsletter,
};
