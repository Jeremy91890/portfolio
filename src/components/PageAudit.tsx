import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./PageAudit.css";

type Check = {
  name: string;
  result: string;
  pass: boolean;
};

/** Luminance relative d'une couleur `rgb(r, g, b)`, selon WCAG. */
function luminance(color: string): number | null {
  const m = color.match(/\d+(\.\d+)?/g);
  if (!m || m.length < 3) return null;
  const [r, g, b] = m.slice(0, 3).map((v) => {
    const c = Number(v) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(fg: string, bg: string): number | null {
  const a = luminance(fg);
  const b = luminance(bg);
  if (a === null || b === null) return null;
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

/** Chaque vérification lit le DOM réel de cette page. Rien n'est écrit en dur. */
function runAudit(): Check[] {
  const doc = document;

  // 1 — Repères de navigation
  const landmarks = ["header", "nav", "main", "footer"].filter((tag) =>
    doc.querySelector(tag),
  );

  // 2 — Hiérarchie des titres
  const levels = Array.from(doc.querySelectorAll("h1, h2, h3, h4, h5, h6")).map(
    (h) => Number(h.tagName[1]),
  );
  const h1Count = levels.filter((l) => l === 1).length;
  const jumps = levels.some((l, i) => i > 0 && l - levels[i - 1] > 1);
  const headingsOk = h1Count === 1 && !jumps;

  // 3 — Contraste du texte courant
  const styles = getComputedStyle(doc.body);
  const ratio = contrastRatio(styles.color, styles.backgroundColor);
  const ratioOk = ratio !== null && ratio >= 4.5;   // AA, seuil de la charte
  const level = ratio === null ? "" : ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : "insuffisant";

  // 4 — Langue déclarée
  const lang = doc.documentElement.lang;

  // 5 — Zoom autorisé
  const viewport = doc
    .querySelector('meta[name="viewport"]')
    ?.getAttribute("content")
    ?.toLowerCase();
  const zoomOk = !viewport?.includes("user-scalable=no") &&
    !viewport?.includes("maximum-scale=1");

  // 6 — Préférence de mouvement
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return [
    {
      name: "Repères",
      result: `${landmarks.length} régions : ${landmarks.join(", ")}`,
      pass: landmarks.length >= 3,
    },
    {
      name: "Titres",
      result: headingsOk
        ? `${levels.length} titres, un seul h1, aucun niveau sauté`
        : `${levels.length} titres, hiérarchie à revoir`,
      pass: headingsOk,
    },
    {
      name: "Contraste",
      result: ratio
        ? `${ratio.toFixed(1).replace(".", ",")}:1 sur le texte courant · ${level}`
        : "non mesurable",
      pass: ratioOk,
    },
    {
      name: "Langue",
      result: lang ? `déclarée « ${lang} »` : "non déclarée",
      pass: Boolean(lang),
    },
    {
      name: "Zoom",
      result: zoomOk ? "non bridé, pincer pour agrandir" : "bridé par le viewport",
      pass: zoomOk,
    },
    {
      name: "Mouvement",
      result: reduced
        ? "réduit — animations désactivées"
        : "standard — animations actives",
      pass: true,
    },
  ];
}

export default function PageAudit() {
  const reduced = useReducedMotion();
  const [checks, setChecks] = useState<Check[]>([]);

  useEffect(() => {
    // La mesure a lieu après la peinture : toute la page existe alors.
    const measure = () => setChecks(runAudit());
    const firstPass = window.setTimeout(measure, 0);

    // Si la préférence de mouvement change, la ligne correspondante suit.
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    motion.addEventListener("change", measure);

    return () => {
      window.clearTimeout(firstPass);
      motion.removeEventListener("change", measure);
    };
  }, []);

  const passed = checks.filter((c) => c.pass).length;

  return (
    <section className="audit" aria-labelledby="audit-title">
      <header className="audit__head">
        <h2 className="audit__title" id="audit-title">
          Audit de cette page
        </h2>
        <p className="audit__sub">
          Exécuté dans votre navigateur, à l'ouverture.
        </p>
      </header>

      <dl className="audit__list">
        {checks.map((check, i) => (
          <motion.div
            key={check.name}
            className="audit__row"
            initial={reduced ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.5 + i * 0.13, ease: [0.2, 0.7, 0.3, 1] }}
          >
            <dt className="audit__name">
              <motion.span
                className="audit__flag"
                aria-hidden="true"
                initial={reduced ? false : { scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 520,
                  damping: 22,
                  delay: 0.62 + i * 0.13,
                }}
              >
                {check.pass ? "✓" : "!"}
              </motion.span>
              {check.name}
            </dt>
            <dd className="audit__result">{check.result}</dd>
          </motion.div>
        ))}
      </dl>

      <p className="audit__score">
        <motion.span
          className="audit__score-value"
          initial={reduced ? false : { scale: 0.7, opacity: 0 }}
          animate={checks.length ? { scale: 1, opacity: 1 } : undefined}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 20,
            delay: 0.62 + checks.length * 0.13,
          }}
        >
          {passed}/{checks.length || 6}
        </motion.span>
        <span className="audit__score-label">
          vérifications passées. Vous souhaitez le même audit sur votre
          produit ?{" "}
          <a href="#services" className="audit__link">
            Voir l'audit RGAA
          </a>
          .
        </span>
      </p>
    </section>
  );
}
