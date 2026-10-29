import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import './styles.css';
import App from './App';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    {/* "user" : les transformations sont désactivées si prefers-reduced-motion est actif */}
    <MotionConfig reducedMotion="user">
      <App path={window.location.pathname} />
    </MotionConfig>
  </StrictMode>
);

// En production, le HTML est pré-rendu au build : on l'hydrate au lieu de le recréer
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
