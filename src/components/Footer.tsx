import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          <span className="footer__bracket">&lt;</span>JD<span className="footer__bracket">/&gt;</span>
        </span>
        <p className="footer__copy">
          © {new Date().getFullYear()} Jérémy Debelleix — Développeur Full Stack
        </p>
      </div>
    </footer>
  );
}
