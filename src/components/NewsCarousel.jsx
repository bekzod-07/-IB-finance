import { useEffect, useState } from 'react';
import { FiCalendar, FiTrendingUp, FiArrowRight, FiBarChart2, FiClock, FiAward } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const icons = [FiBarChart2, FiClock, FiAward];
const accents = ['#6c63ff', '#00b894', '#fd79a8'];
const lightBg = ['rgba(108,99,255,0.08)', 'rgba(0,184,148,0.08)', 'rgba(253,121,168,0.08)'];

export default function NewsCarousel({ t }) {
  const items = t.news.items;
  const [active, setActive] = useState(null);

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <SectionTitle
          eyebrow={t.sections.newsEyebrow}
          title={t.sections.news}
          subtitle={t.sections.newsSub}
        />

        <div className="news-cards-grid" data-aos="fade-up">
          {items.map((item, i) => {
            const Icon = icons[i];
            const accent = accents[i];
            const bg = lightBg[i];
            return (
              <article
                key={i}
                className={`news-card-new${active === i ? ' is-active' : ''}`}
                style={{ '--accent': accent, '--accent-bg': bg }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Top accent bar */}
                <div className="nc-bar" />

                {/* Icon badge */}
                <div className="nc-icon-wrap">
                  <Icon />
                </div>

                {/* Meta */}
                <div className="nc-meta">
                  <span className="nc-cat">{item.category}</span>
                  <span className="nc-date"><FiCalendar size={12} /> {item.date}</span>
                </div>

                {/* Content */}
                <h3 className="nc-title">{item.title}</h3>
                <p className="nc-text">{item.text}</p>

                {/* Stat pill */}
                <div className="nc-stat">
                  <FiTrendingUp size={13} />
                  {item.stat}
                </div>

                {/* CTA */}
                <a href="#contact" className="nc-cta">
                  {t.news.cta} <FiArrowRight size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
