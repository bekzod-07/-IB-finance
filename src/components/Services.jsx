import SectionTitle from './SectionTitle';
import { services } from '../data/services';

export default function Services({ lang, t }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title={t.sections.services}
          subtitle={t.sections.servicesSub}
        />

        <div className="grid cards-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article className="card service-card reveal" key={s[lang].title}>
                <div className="icon-box">
                  <Icon />
                </div>
                <h3>{s[lang].title}</h3>
                <p>{s[lang].text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}