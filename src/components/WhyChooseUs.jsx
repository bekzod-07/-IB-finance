import { FiAward, FiLock, FiClock, FiUserCheck, FiBookOpen, FiCheckSquare } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
export default function WhyChooseUs({ t }) {
  const icons=[FiAward,FiCheckSquare,FiLock,FiClock,FiUserCheck,FiBookOpen];
  return <section id="advantages" className="section soft"><div className="container"><SectionTitle eyebrow="Advantages" title={t.sections.why} subtitle={t.sections.whySub}/><div className="grid cards-3">{t.whyItems.map((item,i)=>{const Icon=icons[i];return <article className="card why-card reveal" key={item}><Icon/><h3>{item}</h3></article>})}</div></div></section>;
}
