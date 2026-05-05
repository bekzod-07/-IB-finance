import { FiBarChart2, FiPieChart, FiTrendingUp } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

export default function About({ t }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="About"
          title={t.sections.about}
          subtitle={t.sections.aboutSub}
        />

        <div className="about-grid">
          <div className="about-text" data-aos="fade-right" data-aos-delay="100">
            <h3>{t.about.title}</h3>
            <p>{t.about.text}</p>

            <div className="stats">
              {t.about.stats.map((s, i) => (
                <div className="stat" key={s[1]} data-aos="zoom-in" data-aos-delay={200 + i * 100}>
                  <strong>{s[0]}</strong>
                  <span>{s[1]}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="about-visual"
            role="img"
            aria-label="Business accounting dashboard placeholder"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <FiBarChart2 />
            <FiPieChart />
            <FiTrendingUp />

            <div className="visual-card" data-aos="zoom-in" data-aos-delay="400">
              <strong>Auditga Tayyor</strong>
              <span>Hisobotlar va hujjatlar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
