import { useEffect, useState, type ReactNode } from 'react';
import { Lightbulb, Scales, WarningCircle, type Icon } from '@phosphor-icons/react';
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
 * Sections d'un guide, dans l'ordre de la page (des questions pour les guides métier, des titres pour les conseils) :
 * chaque section s'ouvre sur son titre numéroté
 * (<Question>), et le sommaire (<Summary>) les reprend toutes avec un lien vers la réponse. Sur grand écran, le sommaire
 * reste à côté du texte et signale la question en cours de lecture (styles.css, « Guides métier »).
 */
export function questions<K extends string>(
  items: Record<K, string>,
  { title = 'Les questions que vous vous posez' }: { title?: string } = {},
) {
  const list = Object.entries(items) as [K, string][];
  // Préfixe : pas de collision avec les ancres du reste du site (#tarifs, #pourquoi…)
  const anchor = (id: K) => `q-${id}`;
  const number = (id: K) => String(list.findIndex(([k]) => k === id) + 1).padStart(2, '0');

  function Summary() {
    // Question en cours : la dernière dont le titre est passé sous l'en-tête fixe. Rien au pré-rendu.
    const [current, setCurrent] = useState<K | null>(null);

    useEffect(() => {
      const headings = list.map(([id]) => document.getElementById(anchor(id)));
      let frame = 0;
      const update = () => {
        frame = 0;
        const limit = window.innerHeight * 0.3;
        let active: K | null = null;
        headings.forEach((h, i) => {
          if (h && h.getBoundingClientRect().top < limit) active = list[i][0];
        });
        setCurrent(active);
      };
      const onScroll = () => {
        if (!frame) frame = requestAnimationFrame(update);
      };
      update();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onScroll);
        cancelAnimationFrame(frame);
      };
    }, []);

    return (
      <nav className="prose__questions" aria-labelledby="questions-title">
        <p id="questions-title" className="prose__questions-title">
          {title}
        </p>
        <ol>
          {list.map(([id, q]) => (
            <li key={id}>
              <a href={`#${anchor(id)}`} aria-current={current === id ? 'location' : undefined}>
                <span className="prose__questions-num" aria-hidden="true">
                  {number(id)}
                </span>
                {nbsp(q)}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  function Question({ id }: { id: K }) {
    return (
      <h2 id={anchor(id)} className="prose__q">
        <span className="prose__q-num" aria-hidden="true">
          {number(id)}
        </span>
        <span>{nbsp(items[id])}</span>
      </h2>
    );
  }

  return { Summary, Question };
}

const calloutIcons: Record<CalloutTone, Icon> = { law: Scales, warning: WarningCircle, tip: Lightbulb };
type CalloutTone = 'law' | 'warning' | 'tip';

/** Encadré dans un guide : obligation légale, erreur à éviter ou conseil, repérable d'un coup d'œil */
export function Callout({ tone, title, children }: { tone: CalloutTone; title: string; children: ReactNode }) {
  const CalloutIcon = calloutIcons[tone];
  return (
    <div className={`callout callout--${tone}`} role="note">
      <span className="callout__icon" aria-hidden="true">
        <CalloutIcon size={22} weight="duotone" />
      </span>
      <div className="callout__body">
        <p className="callout__title">{title}</p>
        {children}
      </div>
    </div>
  );
}

/** « Une page claire » → « une page claire », sans toucher aux noms propres */
export const lcFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
