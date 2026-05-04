import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);

  const links = [
    ['home',         t.nav.home],
    ['services',     t.nav.services],
    ['advantages',   t.nav.advantages],
    ['partners',     t.nav.partners],
    ['testimonials', t.nav.testimonials],
    ['about',        t.nav.about],
    ['contact',      t.nav.contact],
  ];

  return (
    <header className="navbar">
      <a href="#home" className="brand" onClick={() => setOpen(false)}>
        <img src="/logo.png" alt="Company logo" />
        <span>Ideal Balance</span>
      </a>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <FiX /> : <FiMenu />}
      </button>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <LanguageSwitcher lang={lang} setLang={setLang} />
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          {t.nav.cta}
        </a>
      </nav>
    </header>
  );
}