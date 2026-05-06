import SectionTitle from './SectionTitle';
import { partners } from '../data/partners';

export default function Partners({ t }) {
  return (
    <section id="partners" className="section partners-section">
      <div className="container">
        <SectionTitle
          eyebrow="Partners"
          title={t.sections.partners}
          subtitle={t.sections.partnersSub}
        />

        <div className="partner-marquee-wrapper">
          <div className="partner-marquee">
            <div className="partner-track">
              {[...partners, ...partners].map((p, i) => (
                <div
                  className="partner-logo-card"
                  key={i}
                  title={p.name}
                  style={{ '--card-bg': p.bg }}
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="partner-logo-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="partner-grid-static">
          {partners.map((p, i) => (
            <div
              className="partner-logo-card static"
              key={p.name}
              title={p.name}
              style={{ '--card-bg': p.bg }}
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="partner-logo-img"
                loading="lazy"
              />
              <span className="partner-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
