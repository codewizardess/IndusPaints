import React from 'react';
import { History, UserCheck, Microscope, Warehouse, Award, GraduationCap, Phone, Mail } from 'lucide-react';

export default function About({ setActiveTab }) {
  return (
    <div>
      <section className="container" style={{ paddingTop: '3.5rem' }}>
        <div className="section-header">
          <div className="badge-tag"><History size={14} /> Established 2007</div>
          <h1 className="section-title">Powering Flawless Finishes for 18+ Years</h1>
          <p className="section-subtitle">
            From master body shops to automotive dealership service centers, Indus Paints is the trusted name behind South India's most pristine automotive coatings.
          </p>
        </div>

        {/* Founder Spotlight */}
        <div className="founder-card" style={{ marginBottom: '4rem' }}>
          <div className="founder-img-wrap">
            <img src="/Suresh babu.jpg" alt="Suresh Babu - Founder of Indus Paints" className="founder-img" />
          </div>
          <div className="founder-info">
            <div className="badge-tag"><UserCheck size={14} /> Founder & Visionary</div>
            <h2 className="founder-name">Suresh Babu</h2>
            <div className="founder-role">Founder & Managing Director, Indus Paints</div>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#334155' }}>
              "A vehicle's paint is not merely a cosmetic layer; it is the ultimate expression of craft, pride, and engineering protection. When we started Indus Paints in 2007, our goal was simple: bring world-class paint chemistry and authentic application tools directly to technicians who refuse to compromise on quality."
            </p>
            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
              Over nearly two decades, Mr. Suresh Babu has steered Indus Paints from a dedicated local mixing station in Vellore into one of Tamil Nadu's most respected authorized distributors for world-renowned paint titans — including Glasurit (BASF), Valspar, Kansai Nerolac, and Prospray.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <button onClick={() => setActiveTab('contact')} className="btn-primary">
                <Mail size={16} /> Contact Management
              </button>
              <a href="tel:+919159911569" className="btn-secondary">
                <Phone size={16} /> +91 91599 11569
              </a>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="section-header">
          <div className="badge-tag"><Award size={14} /> The Indus Standard</div>
          <h2 className="section-title">Built on Trust, Backed by Chemistry</h2>
          <p className="section-subtitle">What sets Indus Paints apart from ordinary automotive paint suppliers.</p>
        </div>

        <div className="features-grid" style={{ marginBottom: '4rem' }}>
          <div className="feature-box">
            <div className="feature-icon-wrap">
              <Microscope size={24} />
            </div>
            <h3>Computerized Color Labs</h3>
            <p>Equipped with high-precision spectrophotometers and digital formulation software to achieve 100% factory shade matching on every car.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrap">
              <Warehouse size={24} />
            </div>
            <h3>Strategic Dual Warehouses</h3>
            <p>Extensive inventory hubs in <strong>Chennai (Velachery)</strong> and <strong>Vellore (Viruthampattu)</strong> ensuring instant availability of hard-to-find toners, clears, and equipment.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrap">
              <Award size={24} />
            </div>
            <h3>100% Genuine Guarantee</h3>
            <p>Every can of primer, basecoat, clearcoat, and reducer is sourced directly through authorized OEM channels, protecting your body shop reputation.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrap">
              <GraduationCap size={24} />
            </div>
            <h3>Painter Technical Training</h3>
            <p>We provide hands-on technical guidance on gun pressure settings, spray booth humidity management, and modern waterborne blending techniques.</p>
          </div>
        </div>

        {/* Milestones */}
        <div className="contact-card-glass" style={{ marginBottom: '4rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div className="badge-tag"><History size={14} /> Our Growth</div>
            <h2 className="section-title">The Journey of Indus Paints</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#0284c7', marginBottom: '0.5rem' }}>2007</div>
              <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Foundation in Vellore</h4>
              <p style={{ fontSize: '0.85rem' }}>Started by Suresh Babu to provide reliable automotive color mixing to local garages and body shops.</p>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#0284c7', marginBottom: '0.5rem' }}>2012</div>
              <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Authorized Distributorship</h4>
              <p style={{ fontSize: '0.85rem' }}>Secured official distribution rights for premier automotive brands including Glasurit, Valspar, and Kansai Nerolac.</p>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#0284c7', marginBottom: '0.5rem' }}>2018</div>
              <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Chennai Flagship Hub</h4>
              <p style={{ fontSize: '0.85rem' }}>Opened the Velachery branch in Chennai to meet high-volume demand from leading auto dealership service centers.</p>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#0284c7', marginBottom: '0.5rem' }}>Present</div>
              <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Complete Supply Ecosystem</h4>
              <p style={{ fontSize: '0.85rem' }}>Serving over 1,000+ body shops and master customizers with full paint, spray gun, and consumable logistics.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-banner">
          <div className="cta-content">
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}><i className="fas fa-spray-can"></i> Partner with Excellence</div>
            <h2>Ready to Elevate Your Automotive Refinishing?</h2>
            <p>Visit our branches in Velachery, Chennai or Viruthampattu, Vellore, or request an instant quote online.</p>
          </div>
          <div className="cta-actions">
            <button onClick={() => setActiveTab('products')} className="btn-primary"><i className="fas fa-th-large"></i> Explore Products</button>
            <button onClick={() => setActiveTab('contact')} className="btn-secondary"><i className="fas fa-map-marked-alt"></i> Visit Branches</button>
          </div>
        </div>
      </section>
    </div>
  );
}
