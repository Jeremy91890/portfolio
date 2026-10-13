import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { MotionConfig } from 'motion/react';
import App from './App';

// Rendu HTML au build (scripts/prerender.mjs) : le contenu est lisible par Google sans exécuter le JavaScript
export function render() {
  return renderToString(
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </StrictMode>,
  );
}
