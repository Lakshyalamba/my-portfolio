import React, { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-container" ref={containerRef}>
      <div className="bg-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-bg"></div>
      </div>

      <div className={`contact-content ${visible ? 'visible' : ''}`}>
        <header className="contact-header">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">Get in touch</span>
          </div>
          <h1 className="contact-title">
            <span className="title-line">Let's</span>
            <span className="title-gradient">Connect</span>
          </h1>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </header>

        <div className="contact-form-wrapper">
          {submitted && (
            <div className="success-message">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <div className={`input-wrapper ${focusedField === 'name' ? 'focused' : ''}`}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
                <span className="input-glow"></span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className={`input-wrapper ${focusedField === 'email' ? 'focused' : ''}`}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
                <span className="input-glow"></span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <div className={`input-wrapper textarea-wrapper ${focusedField === 'message' ? 'focused' : ''}`}>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
                <span className="input-glow"></span>
              </div>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              <span className="btn-text">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              {!isSubmitting && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              )}
              <span className="btn-glow-effect"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
