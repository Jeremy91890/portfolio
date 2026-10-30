import type { ReactNode } from 'react';
import { findGuide, guidePath } from '../data/guides';
import pricing from '../data/pricing';
import { nbsp } from '../typography';

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

/**
 * Questions auxquelles répond un guide, dans l'ordre de la page : chaque section s'ouvre sur sa question (<Question>),
 * et le sommaire en tête d'article (<Summary>) les reprend toutes avec un lien vers la réponse.
 */
export function questions<K extends string>(items: Record<K, string>) {
  const list = Object.entries(items) as [K, string][];
  // Préfixe : pas de collision avec les ancres du reste du site (#tarifs, #pourquoi…)
  const anchor = (id: K) => `q-${id}`;

  function Summary() {
    return (
      <nav className="prose__questions" aria-labelledby="questions-title">
        <p id="questions-title" className="prose__questions-title">
          Les questions que vous vous posez
        </p>
        <ol>
          {list.map(([id, q]) => (
            <li key={id}>
              <a href={`#${anchor(id)}`}>{nbsp(q)}</a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  function Question({ id }: { id: K }) {
    return <h2 id={anchor(id)}>{nbsp(items[id])}</h2>;
  }

  return { Summary, Question };
}

/** « Une page claire » → « une page claire », sans toucher aux noms propres */
export const lcFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
