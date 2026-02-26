import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactLinks = [
    { icon: '✉️', color: '#6c63ff', label: 'Email', value: 'riyalsubash@gmail.com', href: 'mailto:riyalsubash@gmail.com' },
    { icon: '💼', color: '#0077b5', label: 'LinkedIn', value: 'linkedin.com/in/alexchen', href: 'https://linkedin.com' },
    { icon: '🐙', color: '#e8e8e8', label: 'GitHub', value: 'github.com/alexchen', href: 'https://github.com' },
    { icon: '🐦', color: '#1da1f2', label: 'Twitter', value: '@alexchen_dev', href: 'https://twitter.com' },
  ];

  const btnLabel = {
    idle:    'Send Message',
    sending: 'Sending…',
    sent:    '✅ Message Sent!',
    error:   '❌ Failed — Try Again',
  }[status];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="section-label">// get in touch</p>
        <h2 className="section-title">Let's Work Together</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>
              Whether you have a project idea, an internship opportunity, or just want to chat about
              tech — my inbox is always open. I'll get back to you within 24 hours!
            </p>
            <div className="contact-links">
              {contactLinks.map(l => (
                <a href={l.href} target="_blank" rel="noreferrer" key={l.label} className="contact-link-item">
                  <div
                    className="contact-link-icon"
                    style={{ background: `${l.color}15`, border: `1px solid ${l.color}25` }}
                  >
                    {l.icon}
                  </div>
                  <div className="contact-link-text">
                    <strong>{l.label}</strong>
                    <span>{l.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                id="name" name="name" type="text"
                placeholder="John Doe"
                value={form.name} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                id="email" name="email" type="email"
                placeholder="john@example.com"
                value={form.email} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message" name="message"
                placeholder="Hi Alex, I'd love to talk about..."
                value={form.message} onChange={handleChange} required
              />
            </div>
            <button
              type="submit"
              className={`btn btn-primary form-submit${status === 'error' ? ' btn-error' : ''}`}
              disabled={status === 'sending'}
            >
              {btnLabel}
              {status === 'idle' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              )}
              {status === 'sending' && <span className="spinner" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
