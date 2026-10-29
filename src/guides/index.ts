import type { ComponentType } from 'react';
import Pourquoi from './pourquoi-creer-un-site-pour-son-commerce';
import Prix from './prix-site-web-commercant';
import Referencement from './referencement-local-google-maps';
import Avis from './avis-google-commerce-local';
import Instagram from './site-web-ou-instagram';
import Artisan from './site-internet-artisan-commercant';
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
  'creer-site-boutique-rapidement': Rapidement,
  'agence-web-ou-freelance': Freelance,
  'wordpress-commerce-local': Wordpress,
  'newsletter-commerce-local': Newsletter,
};
