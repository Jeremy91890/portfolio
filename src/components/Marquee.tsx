import { useState } from 'react';
import { Pause, Play, Sparkle } from '@phosphor-icons/react';

const items = [
  'Site vitrine',
  'Visible sur Google',
  'Parfait sur mobile',
  'Prise de rendez-vous',
  'Avis clients',
  'Click & collect',
  'Application mobile',
  'Hébergement inclus',
  'Nom de domaine inclus',
  'Mises à jour incluses',
];

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li className="marquee__item" key={item}>
          <Sparkle size={18} weight="fill" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="marquee on-dark" data-paused={paused} aria-label="Ce que je fais pour vous">
      <div className="marquee__viewport">
        <div className="marquee__track">
          <Group />
          <Group hidden />
        </div>
      </div>
      <button
        type="button"
        className="marquee__toggle"
        aria-pressed={paused}
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? <Play size={18} weight="fill" aria-hidden="true" /> : <Pause size={18} weight="fill" aria-hidden="true" />}
        <span className="sr-only">Mettre en pause le défilement</span>
      </button>
    </section>
  );
}
