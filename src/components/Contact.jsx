import React, { useState } from 'react';
import { FiPhone, FiSend, FiMail, FiMapPin } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '../config/telegram';
export default function Contact({ t }) {
  const [form,setForm]=useState({name:'',phone:'',message:''});
  const [status,setStatus]=useState({type:'',text:''});
  const [loading,setLoading]=useState(false);
  const phoneOk=(v)=>/^\+?\d[\d\s()-]{8,18}$/.test(v.trim());
  const submit=async(e)=>{e.preventDefault();setStatus({type:'',text:''});
    if(!form.name.trim()||!form.phone.trim()||!form.message.trim()) return setStatus({type:'error',text:t.contact.required});
    if(!phoneOk(form.phone)) return setStatus({type:'error',text:t.contact.phoneError});
    if(!TELEGRAM_BOT_TOKEN||!TELEGRAM_CHAT_ID||TELEGRAM_BOT_TOKEN.includes('BOT_TOKENNI')||TELEGRAM_CHAT_ID.includes('CHAT_IDNI')) return setStatus({type:'error',text:t.contact.noConfig});
    setLoading(true);
    try{const text=`Yangi ariza:\nF.I.O: ${form.name}\nTelefon: ${form.phone}\nXabar: ${form.message}`;const res=await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:TELEGRAM_CHAT_ID,text})});if(!res.ok) throw new Error('send failed');setStatus({type:'success',text:t.contact.success});setForm({name:'',phone:'',message:''});}catch{setStatus({type:'error',text:t.contact.error});}finally{setLoading(false);}
  };
  return <section id="contact" className="section contact-section"><div className="container"><SectionTitle eyebrow="Contact" title={t.sections.contact} subtitle={t.sections.contactSub}/><div className="contact-grid"><div className="contact-info reveal"><div><FiPhone/><span>{t.contact.phone}</span><strong>+998 93 111 20 21</strong></div><div><FiSend/><span>{t.contact.telegram}</span><strong>@idealbalance</strong></div><div><FiMail/><span>{t.contact.email}</span><strong>idealbalance1@gmail.com</strong></div><div><FiMapPin/><span>Office</span><strong>Toshkent shahar Chilonzor tumani Bunyodkor shoh kochasi 44A uy</strong></div></div><form className="contact-form reveal" onSubmit={submit}><label>{t.contact.name}<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder={t.contact.namePh}/></label><label>{t.contact.phone}<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder={t.contact.phonePh}/></label><label>{t.contact.message}<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder={t.contact.messagePh} rows="5"/></label>{status.text&&<div className={`form-status ${status.type}`}>{status.text}</div>}<button className="btn primary" disabled={loading}>{loading?t.contact.sending:t.contact.send}</button></form></div></div></section>;
}
