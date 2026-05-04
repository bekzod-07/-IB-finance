import { FiStar } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { testimonials } from '../data/testimonials';

export default function Testimonials({ lang, t }) {
  return (
    <section id="testimonials" className="section soft">
      <div className="container">
        <SectionTitle
          eyebrow="Testimonials"
          title={t.sections.testimonials}
          subtitle={t.sections.testimonialsSub}
        />

        <div className="grid cards-2">
          {testimonials.map(x => (
            <article className="card testimonial reveal" key={x.name}>
              <div className="stars">
                {[1, 2, 3, 4, 5].map(n => (
                  <FiStar key={n} />
                ))}
              </div>
              <p>"{x.text[lang]}"</p>
              <h3>{x.name}</h3>
              <span>{x.role[lang]}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}