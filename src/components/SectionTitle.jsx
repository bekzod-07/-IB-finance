export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      <span data-aos="fade-down" data-aos-delay="50">{eyebrow}</span>
      <h2 data-aos="fade-up" data-aos-delay="100">{title}</h2>
      <p data-aos="fade-up" data-aos-delay="150">{subtitle}</p>
    </div>
  );
}
