import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('uz');
  const t = translations[lang];
  return <>
    <Navbar lang={lang} setLang={setLang} t={t} />
    <main>
      <Hero t={t} />
      <Services lang={lang} t={t} />
      <WhyChooseUs t={t} />
      <Partners t={t} />
      <Testimonials lang={lang} t={t} />
      <About t={t} />
      <Contact t={t} />
    </main>
    <Footer lang={lang} t={t} />
  </>;
}
