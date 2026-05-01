export default function LanguageSwitcher({ lang, setLang }) {
  return <div className="language-switcher" aria-label="Language switcher">
    <button className={lang === 'uz' ? 'active' : ''} onClick={() => setLang('uz')}>UZ</button>
    <button className={lang === 'ru' ? 'active' : ''} onClick={() => setLang('ru')}>RU</button>
  </div>;
}
