import { FiCheckCircle, FiTrendingUp, FiShield } from 'react-icons/fi';

export default function Hero({ t }) {
  const icons = [FiTrendingUp, FiShield, FiCheckCircle];

  return (
    <section id="home" className="hero">
      <div className="hero-bg" />

      <div className="container hero-grid">
        <div className="hero-content" data-aos="fade-right" data-aos-delay="100">
          <span className="eyebrow" data-aos="fade-down" data-aos-delay="150">{t.hero.eyebrow}</span>
          <h1 data-aos="fade-up" data-aos-delay="200">{t.hero.title}</h1>
          <p data-aos="fade-up" data-aos-delay="250">{t.hero.text}</p>

          <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
            <a href="#contact" className="btn primary">{t.hero.primary}</a>
            <a href="#services" className="btn secondary">{t.hero.secondary}</a>
          </div>

          <div className="badges">
            {t.hero.badges.map((b, i) => {
              const Icon = icons[i];
              return (
                <div className="badge" key={b} data-aos="zoom-in" data-aos-delay={350 + i * 80}>
                  <Icon />
                  <span>{b}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hero-card" data-aos="fade-left" data-aos-delay="300">
          <div className="glass-card">
            <div className="chart-lines">
              <span />
              <span />
              <span />
            </div>
            <h3>{t.hero.panelTitle}</h3>
            <p>{t.hero.panelText}</p>
            <div className="metric-row">
              <strong>98%</strong>
              <span>Accuracy</span>
            </div>
            <div className="metric-row">
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
