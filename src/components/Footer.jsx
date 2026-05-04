import { FiFacebook, FiInstagram, FiSend } from 'react-icons/fi';
import { services } from '../data/services';

export default function Footer({ lang, t }) {
  const links = [
    ['home', t.nav.home],
    ['services', t.nav.services],
    ['advantages', t.nav.advantages],
    ['partners', t.nav.partners],
    ['about', t.nav.about],
    ['contact', t.nav.contact],
  ];

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="#home">
            <img src="/logo.png" alt="Company logo" />
            <span>IDEAL BALANCE</span>
          </a>
          <p>{t.footer.text}</p>
        </div>

        <div>
          <h3>{t.footer.quick}</h3>
          {links.map((l) => (
            <a key={l[0]} href={`#${l[0]}`}>
              {l[1]}
            </a>
          ))}
        </div>

        <div>
          <h3>{t.footer.services}</h3>
          {services.slice(0, 4).map((s) => (
            <a href="#services" key={s[lang].title}>
              {s[lang].title}
            </a>
          ))}
        </div>

        <div>
          <h3>{t.footer.social}</h3>
          <div className="socials">
            <a
              href="https://t.me/idealbalance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FiSend />
            </a>
            <a
              href="https://instagram.com/ideal__balance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
            <a
              href="https://facebook.com/Ideal-Balance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} IDEAL BALANCE. {t.footer.rights}
      </div>
    </footer>
  );
}