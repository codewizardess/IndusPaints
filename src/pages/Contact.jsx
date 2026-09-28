import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <section className="container" style={{ paddingTop: '3.5rem' }}>
        <div className="section-header">
          <div className="badge-tag"><MessageSquare size={14} /> Connect With Us</div>
          <h1 className="section-title">Get in Touch with Indus Paints</h1>
          <p className="section-subtitle">
            Whether you need custom shade matching, bulk spray gun orders, or dealership inquiry — our specialists in Chennai and Vellore are ready to assist you.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="branches-grid" style={{ marginBottom: '3.5rem' }}>

          {/* Chennai Branch */}
          <div className="branch-card">
            <div className="branch-badge"><MapPin size={14} /> Chennai Branch Hub</div>
            <h3 className="branch-title">Chennai Distribution Center</h3>
            <ul className="branch-detail-list">
              <li className="branch-detail-item">
                <MapPin size={20} color="#0284c7" />
                <div>
                  <strong style={{ color: '#0f172a' }}>Address:</strong><br />
                  31/A Ground Floor, 4th Street, Tansi Nagar, Velachery, Chennai – 600 042, Tamil Nadu.
                </div>
              </li>
              <li className="branch-detail-item">
                <Phone size={20} color="#0284c7" />
                <div>
                  <strong style={{ color: '#0f172a' }}>Direct Phone:</strong><br />
                  <a href="tel:+919159911569" style={{ color: '#0284c7', fontWeight: 600 }}>+91 91599 11569</a>
                </div>
              </li>
              <li className="branch-detail-item">
                <Mail size={20} color="#0284c7" />
                <div>
                  <strong style={{ color: '#0f172a' }}>Email:</strong><br />
                  induspaintsvellore@gmail.com
                </div>
              </li>
              <li className="branch-detail-item">
                <Clock size={20} color="#0284c7" />
                <div>
                  <strong style={{ color: '#0f172a' }}>Working Hours:</strong><br />
                  Mon – Sat: 9:00 AM – 8:30 PM (Sunday Closed)
                </div>
              </li>
            </ul>

            <div className="branch-actions">
              <a href="https://maps.google.com/?q=Tansi+Nagar+Velachery+Chennai+600042" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.88rem' }}>
                <Navigation size={14} /> Get Directions
              </a>
              <a href="https://wa.me/919159911569?text=Hi%20Indus%20Paints%20Chennai,%20I%20would%20like%20to%20inquire%20about%20products." target="_blank" rel="noreferrer" className="btn-whatsapp" style={{ fontSize: '0.88rem', padding: '0.6rem 1.2rem' }}>
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>

          {/* Vellore Branch */}
          <div className="branch-card">
            <div className="branch-badge"><MapPin size={14} /> Vellore Headquarters</div>
            <h3 className="branch-title">Vellore Color Mixing Hub</h3>
            <ul className="branch-detail-list">
              <li className="branch-detail-item">
                <MapPin size={20} color="#0284c7" />
                <div>
                  <strong style={{ color: '#0f172a' }}>Address:</strong><br />
                  246A, 1st Floor, G.K. Moopanar St, Viruthampattu, Vellore – 632 602, Tamil Nadu.
                </div>
              </li>
              <li className="branch-detail-item">
                <Phone size={20} color="#0284c7" />
                <div>
                  <strong style={{ color: '#0f172a' }}>Direct Phone:</strong><br />
                  <a href="tel:+919159911569" style={{ color: '#0284c7', fontWeight: 600 }}>+91 91599 11569</a>
                </div>
              </li>
              <li className="branch-detail-item">
                <Mail size={20} color="#0284c7" />
                <div>
                  <strong style={{ color: '#0f172a' }}>Email:</strong><br />
                  induspaintsvellore@gmail.com
                </div>
              </li>
              <li className="branch-detail-item">
                <Clock size={20} color="#0284c7" />
                <div>
                  <strong style={{ color: '#0f172a' }}>Working Hours:</strong><br />
                  Mon – Sat: 9:00 AM – 8:30 PM (Sunday Closed)
                </div>
              </li>
            </ul>

            <div className="branch-actions">
              <a href="https://maps.google.com/?q=Viruthampattu+Vellore+632602" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.88rem' }}>
                <Navigation size={14} /> Get Directions
              </a>
              <a href="https://wa.me/919159911569?text=Hi%20Indus%20Paints%20Vellore,%20I%20would%20like%20to%20inquire%20about%20products." target="_blank" rel="noreferrer" className="btn-whatsapp" style={{ fontSize: '0.88rem', padding: '0.6rem 1.2rem' }}>
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form Layout */}
        <div className="contact-layout" style={{ marginBottom: '4rem' }}>
          <div className="contact-card-glass">
            <div className="badge-tag" style={{ marginBottom: '1rem' }}><MessageSquare size={14} /> Direct Channels</div>
            <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1rem' }}>How Can We Help Your Workshop?</h2>
            <p style={{ marginBottom: '1.5rem', color: '#475569' }}>
              Whether you are matching an exotic metallic tri-coat or setting up a brand-new body shop with spray booths and compressors, our technical team is at your service.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div className="hero-stat-icon"><Phone size={20} /></div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Immediate Customer Helpline</div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.1rem' }}>
                    <a href="tel:+919159911569">+91 91599 11569</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div className="hero-stat-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Quick WhatsApp Chat</div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.1rem' }}>
                    <a href="https://wa.me/919159911569" target="_blank" rel="noreferrer">+91 91599 11569</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div className="hero-stat-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Official Email Inquiries</div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.1rem' }}>
                    <a href="mailto:induspaintsvellore@gmail.com">induspaintsvellore@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card-glass">
            <div className="badge-tag" style={{ marginBottom: '1rem' }}><Send size={14} /> Send Us a Message</div>
            <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1.25rem' }}>Inquiry Form</h2>

            <form action="https://formsubmit.co/induspaintsvellore@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="📩 New Inquiry from Indus Paints React App" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div className="form-group">
                <label htmlFor="companyName">Company / Workshop Name</label>
                <input type="text" id="companyName" name="company" placeholder="e.g. Apex Auto Body Works" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="fullName">Your Name</label>
                  <input type="text" id="fullName" name="name" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="name@workshop.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="branchPref">Preferred Branch Hub</label>
                  <select id="branchPref" name="branch">
                    <option value="Chennai">Chennai (Velachery)</option>
                    <option value="Vellore">Vellore (Viruthampattu)</option>
                    <option value="Either">Either / Other Region</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="interest">Requirement Category</label>
                <select id="interest" name="category">
                  <option value="Paint_Systems">Paint Systems (Glasurit, Valspar, Nerolac, Prospray)</option>
                  <option value="Spray_Guns">Spray Guns & Pneumatic Tools (Aeropro)</option>
                  <option value="Abrasives_Masking">Abrasives, Sanding Discs & Masking Films</option>
                  <option value="Booth_Filters">Booth Filters, Regulators & Safety Equipment</option>
                  <option value="Dealership">Dealership / Sub-Distributor Partnership</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message / Requirements</label>
                <textarea id="message" name="message" rows={4} placeholder="Let us know what shades, quantities, or equipment you are looking for..." required></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '0.95rem' }}>
                <Send size={16} /> Send Message to Indus Paints
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
