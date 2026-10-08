import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

const format = (n: number) => Math.round(n).toLocaleString('fr-FR');

/** Nombre qui s'incrémente à l'apparition. Les lecteurs d'écran lisent directement la valeur finale. */
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
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: setValue });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

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
