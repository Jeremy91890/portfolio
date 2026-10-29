import type { ReactNode } from 'react';

type Crumb = { href?: string; label: string };

/** En-tête sombre des pages secondaires : fil d'Ariane, titre h1, chapeau */
export default function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero on-dark">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__blob hero__blob--orange" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav aria-label="Fil d’Ariane">
          <ol className="breadcrumb">
            {crumbs.map((c) => (
              <li key={c.label}>
                {c.href ? <a href={c.href}>{c.label}</a> : <span aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title" className="page-hero__title">{title}</h1>
        <p className="page-hero__lead">{lead}</p>
        {children}
      </div>
    </header>
  );
}
