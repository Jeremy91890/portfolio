import type { ReactNode } from 'react';
import { findGuide, guidePath } from '../data/guides';
import pricing from '../data/pricing';

export { pricing };
export const plan = (id: string) => pricing.plans.find((p) => p.id === id)!;

/** Lien vers un autre guide : un slug inconnu fait échouer le pré-rendu */
export function GuideLink({ slug, children }: { slug: string; children: ReactNode }) {
  if (!findGuide(slug)) throw new Error(`Guide inconnu : ${slug}`);
  return <a href={guidePath(slug)}>{children}</a>;
}

/** Source citée, ouverte dans un nouvel onglet */
export function Source({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  );
}

/** « Une page claire » → « une page claire », sans toucher aux noms propres */
export const lcFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
