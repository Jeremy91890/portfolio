import { StrictMode } from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { MotionConfig } from 'motion/react';
import App from './App';
import { questions } from './components/Faq';
import { GUIDES_PATH, guidePath, guides, guidesIndex } from './data/guides';
import { site } from './data/site';
import { breadcrumb, home, ids, siteGraph } from './data/schema';

// Rendu HTML au build (scripts/prerender.mjs) : le contenu est lisible par Google sans exécuter le JavaScript
export function render(path: string) {
  return renderToString(
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <App path={path} />
      </MotionConfig>
    </StrictMode>,
  );
}

// Réponse de la FAQ en texte brut : balises retirées, entités échappées par React décodées
const toText = (html: string) =>
  html
    .replace(/<\/p><p>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

// Données structurées FAQPage, construites à partir des mêmes questions que la section FAQ
export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: toText(renderToStaticMarkup(<>{a}</>)) },
    })),
  };
}

/** Pages autres que l'accueil, avec ce qui change dans le <head> (l'accueil garde celui de index.html) */
export function pages() {
  const indexUrl = `${site.url}${GUIDES_PATH}`;
  return [
    {
      path: GUIDES_PATH,
      url: indexUrl,
      title: guidesIndex.metaTitle,
      description: guidesIndex.description,
      type: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          ...siteGraph,
          {
            '@type': 'CollectionPage',
            '@id': indexUrl,
            url: indexUrl,
            name: guidesIndex.title,
            description: guidesIndex.description,
            inLanguage: 'fr-FR',
            isPartOf: { '@id': ids.website },
            hasPart: guides.map((g) => ({ '@type': 'Article', headline: g.title, url: `${site.url}${guidePath(g.slug)}` })),
          },
          breadcrumb([
            { name: 'Accueil', url: home },
            { name: 'Guides', url: indexUrl },
          ]),
        ],
      },
    },
    ...guides.map((g) => {
      const url = `${site.url}${guidePath(g.slug)}`;
      return {
        path: guidePath(g.slug),
        url,
        title: g.metaTitle,
        description: g.description,
        type: 'article',
        published: g.published,
        updated: g.updated,
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            ...siteGraph,
            {
              '@type': 'Article',
              '@id': `${url}#article`,
              headline: g.title,
              description: g.description,
              inLanguage: 'fr-FR',
              datePublished: g.published,
              dateModified: g.updated,
              mainEntityOfPage: url,
              isPartOf: { '@id': ids.website },
              articleSection: 'Guides',
              image: `${site.url}${site.photo.jpg}`,
              keywords: g.keywords.join(', '),
              // Entités complètes dans siteGraph, reliées par @id ; le nom est répété pour les lecteurs qui ne suivent pas les @id
              author: { '@type': 'Person', '@id': ids.person, name: site.name, url: home },
              publisher: { '@id': ids.business, name: site.brand },
            },
            breadcrumb([
              { name: 'Accueil', url: home },
              { name: 'Guides', url: indexUrl },
              { name: g.title, url },
            ]),
          ],
        },
      };
    }),
  ];
}
