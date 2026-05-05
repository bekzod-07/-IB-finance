import React, { useState } from 'react';
import { FiPhone, FiSend, FiMail, FiMapPin } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '../config/telegram';

export default function Contact({ t }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const phoneOk = (v) => /^\+?\d[\d\s()-]{8,18}$/.test(v.trim());

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', text: '' });

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      return setStatus({ type: 'error', text: t.contact.required });
    }

    if (!phoneOk(form.phone)) {
      return setStatus({ type: 'error', text: t.contact.phoneError });
    }

    if (
      !TELEGRAM_BOT_TOKEN ||
      !TELEGRAM_CHAT_ID ||
      TELEGRAM_BOT_TOKEN.includes('BOT_TOKENNI') ||
      TELEGRAM_CHAT_ID.includes('CHAT_IDNI')
    ) {
      return setStatus({ type: 'error', text: t.contact.noConfig });
    }

    setLoading(true);

    try {
      const text = `Yangi ariza:\nF.I.O: ${form.name}\nTelefon: ${form.phone}\nXabar: ${form.message}`;

      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
        }
      );

      if (!res.ok) throw new Error('send failed');

      setStatus({ type: 'success', text: t.contact.success });
      setForm({ name: '', phone: '', message: '' });
    } catch {
      setStatus({ type: 'error', text: t.contact.error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title={t.sections.contact}
          subtitle={t.sections.contactSub}
        />

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
            {[
              { icon: <FiPhone />, label: t.contact.phone, content: (
                <>
                  <a href="tel:+998931112021">+998 93 111 20 21</a>
                  <a href="tel:+998937002021">+998 93 700 20 21</a>
                </>
              )},
              { icon: <FiSend />, label: t.contact.telegram, content: (
                <a href="https://t.me/idealbalance" target="_blank" rel="noopener noreferrer">@idealbalance</a>
              )},
              { icon: <FiMail />, label: t.contact.email, content: (
                <a href="mailto:idealbalance1@gmail.com">idealbalance1@gmail.com</a>
              )},
              { icon: <FiMapPin />, label: 'Office', content: (
                <strong>Toshkent shahar Chilonzor tumani Bunyodkor shoh ko'chasi 44A uy</strong>
              )},
            ].map((item, i) => (
              <div className="contact-card" key={i} data-aos="fade-up" data-aos-delay={150 + i * 100}>
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-content">
                  <span>{item.label}</span>
                  {item.content}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" data-aos="fade-left" data-aos-delay="200" onSubmit={submit}>
            <label>
              {t.contact.name}
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.contact.namePh}
              />
            </label>

            <label>
              {t.contact.phone}
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={t.contact.phonePh}
              />
            </label>

            <label>
              {t.contact.message}
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.contact.messagePh}
                rows="5"
              />
            </label>

            {status.text && (
              <div className={`form-status ${status.type}`}>{status.text}</div>
            )}

            <button className="btn primary" disabled={loading}>
              {loading ? t.contact.sending : t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
