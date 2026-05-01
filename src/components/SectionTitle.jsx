export default function SectionTitle({ eyebrow, title, subtitle }) {
  return <div className="section-title reveal">
    <span>{eyebrow}</span>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>;
}
