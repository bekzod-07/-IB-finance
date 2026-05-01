import SectionTitle from './SectionTitle';
import { partners } from '../data/partners';
export default function Partners({ t }) { return <section id="partners" className="section"><div className="container"><SectionTitle eyebrow="Partners" title={t.sections.partners} subtitle={t.sections.partnersSub}/><div className="partner-grid">{partners.map(p=><div className="partner-card reveal" key={p} aria-label={p}><span>{p}</span></div>)}</div></div></section>; }
