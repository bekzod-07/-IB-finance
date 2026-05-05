import { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiCalendar, FiTrendingUp } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

export default function NewsCarousel({ t }) {
  const items = t.news.items;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % items.length), 4200);
    return () => clearInterval(timer);
  }, [items.length]);

  const goTo = (index) => setActive((index + items.length) % items.length);
  const item = items[active];

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <SectionTitle eyebrow={t.sections.newsEyebrow} title={t.sections.news} subtitle={t.sections.newsSub} />
        <div className="news-carousel" data-aos="fade-up">
          <button className="news-arrow left" onClick={() => goTo(active - 1)} aria-label="Previous news"><FiArrowLeft /></button>
          <article className="news-slide" key={active} data-aos="zoom-in" data-aos-duration="600">
            <div className="news-content">
              <div className="news-meta">
                <span><FiCalendar /> {item.date}</span>
                <span><FiTrendingUp /> {item.category}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#contact" className="btn primary news-btn">{t.news.cta}</a>
            </div>
            <div className="news-visual" aria-hidden="true">
              <div className="news-ring" />
              <div className="news-card-mini top">{item.stat}</div>
              <div className="news-card-mini bottom">IDEAL BALANCE</div>
            </div>
          </article>
          <button className="news-arrow right" onClick={() => goTo(active + 1)} aria-label="Next news"><FiArrowRight /></button>
        </div>
        <div className="news-dots" data-aos="fade-up" data-aos-delay="120">
          {items.map((_, i) => <button key={i} className={i === active ? 'active' : ''} onClick={() => goTo(i)} aria-label={`Open news ${i + 1}`} />)}
        </div>
      </div>
    </section>
  );
}
