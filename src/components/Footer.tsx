import "./Footer.css";
import { version } from "../../package.json";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span className="footer__mark" aria-hidden="true">
          JD
        </span>
        <p className="footer__copy">
          © {new Date().getFullYear()} Jérémy Debelleix — Développeur Full Stack
        </p>
        <p className="footer__version">v{version}</p>
      </div>
    </footer>
  );
}
