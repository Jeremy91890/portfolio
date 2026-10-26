import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';

// Espace insécable classique : l'espace fine (U+202F) de toLocaleString n'existe pas dans Poppins
const format = (n: number) => Math.round(n).toLocaleString('fr-FR').replace(/\u202f/g, '\u00a0');

// useLayoutEffect côté navigateur uniquement (évite l'avertissement du rendu serveur)
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/**
 * Nombre qui s'incrémente à l'apparition.
 * Le HTML pré-rendu et « réduire les animations » affichent directement la valeur finale ;
 * l'animation ne joue que pour un compteur encore hors de l'écran au chargement.
 */
export default function Counter({
  to,
  prefix = '',
  suffix = '',
  duration = 1.6,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const [value, setValue] = useState(to);
  const [armed, setArmed] = useState(false);

  // Avant le premier affichage hydraté : on remet à 0 seulement ce qui n'est pas encore visible
  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top > window.innerHeight) {
      setValue(0);
      setArmed(true);
    }
  }, []);

  useEffect(() => {
    if (!armed || !inView) return;
    const controls = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: setValue });
    return () => controls.stop();
  }, [armed, inView, to, duration]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {prefix}
        {format(value)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {format(to)}
        {suffix}
      </span>
    </span>
  );
}
