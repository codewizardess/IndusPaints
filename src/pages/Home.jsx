import React, { useState } from 'react';
import { 
  Shield, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Pipette, 
  Wrench, 
  Truck, 
  Handshake, 
  Download, 
  Search,
  Sparkles,
  Star
} from 'lucide-react';

export default function Home({ setActiveTab, openQuoteModal }) {
  const [shadeCarMake, setShadeCarMake] = useState('');
  const [shadeCarColor, setShadeCarColor] = useState('');
  const [shadeResult, setShadeResult] = useState(null);

  const handleShadeSearch = (e) => {
    e.preventDefault();
    if (!shadeCarMake || !shadeCarColor) return;
    setShadeResult({
      make: shadeCarMake,
      color: shadeCarColor,
      system: 'Glasurit 90 Line & Valspar Universal Intermix available for instant computer matching.'
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge-tag">
              <Shield size={13} /> Authorized Automotive Paint Distributor Since 2007
            </div>
            <h1 className="hero-title">
              Precision Color Matching. <br />
              <span className="highlight">Championship Finish.</span>
            </h1>
            <p className="hero-desc">
              Supplying South India's premier body shops, dealerships, and paint specialists with OEM-certified coatings from <strong>Glasurit, Valspar, Kansai Nerolac, Prospray</strong> and professional <strong>Aeropro spray equipment</strong>.
            </p>
            
            <div className="hero-buttons">
              <button onClick={() => setActiveTab('products')} className="btn-primary">
                <i className="fas fa-spray-can"></i> Explore Catalog
              </button>
              <a 
                href="https://wa.me/919159911569?text=Hi%20Indus%20Paints,%20I%20would%20like%20to%20inquire%20about%20automotive%20paints%20and%20tools." 
                target="_blank" 
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp Quote
              </a>
              <a href="/rm-brochure.pdf" download className="btn-secondary">
                <Download size={16} /> Download Brochure
              </a>
            </div>

            {/* Micro Trust Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                <CheckCircle size={15} /> 100% Genuine Paint Systems
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--primary-cyan)', fontWeight: 600 }}>
                <CheckCircle size={15} /> Same-Day Hub Dispatch
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: '#a855f7', fontWeight: 600 }}>
                <CheckCircle size={15} /> Computerized Shade Match
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-showcase">
              <img src="/a608-spray-gun.jpg" alt="Aeropro Premium Spray Gun" className="hero-img" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff' }}>Aeropro A608 HVLP 1.3mm</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--primary-cyan)', fontWeight: 600 }}>Ultra-Fine Atomization & High Transfer Rate</p>
                </div>
                <button 
                  onClick={() => openQuoteModal('Aeropro A608 HVLP 1.3mm')} 
                  className="btn-primary" 
                  style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
                >
                  Get Quote
                </button>
              </div>
            </div>

            <div className="hero-stat-floating">
              <div className="hero-stat-icon">
                <Award size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.98rem' }}>100% Genuine</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Global OEM Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Trust Strip */}
      <section className="container" style={{ margin: '1rem auto' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glass)', borderRadius: '14px', padding: '1.25rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem', backdropFilter: 'blur(16px)' }}>
          <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.95rem', letterSpacing: '0.5px' }}>OFFICIAL DISTRIBUTOR:</div>
          <div style={{ fontWeight: 800, color: '#00e5ff', fontSize: '1.1rem' }}>GLASURIT (BASF)</div>
          <div style={{ fontWeight: 800, color: '#f43f5e', fontSize: '1.1rem' }}>VALSPAR REFINISH</div>
          <div style={{ fontWeight: 800, color: '#fbbf24', fontSize: '1.1rem' }}>KANSAI NEROLAC</div>
          <div style={{ fontWeight: 800, color: '#10b981', fontSize: '1.1rem' }}>PROSPRAY</div>
          <div style={{ fontWeight: 800, color: '#94a3b8', fontSize: '1.1rem' }}>AEROPRO TOOLS</div>
        </div>
      </section>

      {/* Metric Counter Strip */}
      <section className="container">
        <div className="stats-strip">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Years Experience (Est. 2007)</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Color Matching Formulations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2 Hubs</div>
              <div className="stat-label">Chennai & Vellore Warehouses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1,000+</div>
              <div className="stat-label">Body Shops & Clients Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Color Matcher Box */}
      <section className="container" style={{ margin: '2rem auto' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glow)', borderRadius: '16px', padding: '2rem', backdropFilter: 'blur(16px)', boxShadow: 'var(--shadow-glow)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Sparkles size={20} color="var(--primary-cyan)" />
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>Instant Vehicle Shade Formulation Check</h3>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
            Looking for an exact factory shade code for Maruti, Hyundai, Toyota, Honda, Tata, Mahindra, BMW, or Mercedes?
          </p>

          <form onSubmit={handleShadeSearch} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Vehicle Make / Model (e.g. Hyundai Creta, BMW 3 Series)"
              value={shadeCarMake}
              onChange={(e) => setShadeCarMake(e.target.value)}
              style={{ flex: 1, minWidth: '240px', padding: '0.75rem 1.1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', fontSize: '0.92rem', outline: 'none' }}
              required
            />
            <input 
              type="text" 
              placeholder="Color Shade / Tone (e.g. Polar White, Phantom Black, Nardo Grey)"
              value={shadeCarColor}
              onChange={(e) => setShadeCarColor(e.target.value)}
              style={{ flex: 1, minWidth: '240px', padding: '0.75rem 1.1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', fontSize: '0.92rem', outline: 'none' }}
              required
            />
            <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.6rem' }}>
              <Search size={16} /> Check Formulation
            </button>
          </form>

          {shadeResult && (
            <div style={{ marginTop: '1.5rem', background: 'rgba(0, 229, 255, 0.08)', border: '1px solid var(--primary-cyan)', borderRadius: '10px', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <strong style={{ color: 'var(--primary-cyan)' }}>✓ Shade Available:</strong> <span style={{ color: '#ffffff' }}>{shadeResult.make} — {shadeResult.color}</span>
                <div style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '0.25rem' }}>{shadeResult.system}</div>
              </div>
              <button 
                className="btn-whatsapp" 
                style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
                onClick={() => openQuoteModal(`Shade Match Request: ${shadeResult.make} ${shadeResult.color}`)}
              >
                Order This Shade
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Indus Paints */}
      <section className="section container">
        <div className="section-header">
          <div className="badge-tag"><Award size={13} /> The Indus Standard</div>
          <h2 className="section-title">Why Top Body Shops Partner With Us</h2>
          <p className="section-subtitle">More than just paint suppliers — we provide the end-to-end technical backbone for flawless refinishing.</p>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon-wrap">
              <Pipette size={24} />
            </div>
            <h3>Exact Color Replication</h3>
            <p>Advanced spectral database and computerized formulation support to ensure 100% factory match on Indian and imported vehicle makes.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrap">
              <Wrench size={24} />
            </div>
            <h3>Full Workshop Ecosystem</h3>
            <p>From HVLP/LVLP spray guns and dual-action orbital sanders to masking films and booth filters — everything under one roof.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrap">
              <Truck size={24} />
            </div>
            <h3>Fast Dispatch & Stock</h3>
            <p>Two well-stocked warehouses in Chennai and Vellore ensure zero downtime for your workshop's daily painting schedule.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrap">
              <Handshake size={24} />
            </div>
            <h3>Direct Wholesale Pricing</h3>
            <p>Transparent wholesale tier pricing for commercial garages, fleet operators, and authorized dealership service stations.</p>
          </div>
        </div>
      </section>

      {/* Client Endorsement */}
      <section className="container" style={{ margin: '1rem auto' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glass)', borderRadius: '16px', padding: '2rem', backdropFilter: 'blur(16px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', justifyContent: 'center' }}>
            <div style={{ display: 'flex', color: '#fbbf24' }}><Star size={16} fill="#fbbf24" /><Star size={16} fill="#fbbf24" /><Star size={16} fill="#fbbf24" /><Star size={16} fill="#fbbf24" /><Star size={16} fill="#fbbf24" /></div>
            <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.98rem' }}>Trusted by 1,000+ Auto Body Shops in South India</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-glass)' }}>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.75rem', color: '#94a3b8' }}>
                "Indus Paints' Glasurit color matching has saved us countless hours of rework. Their prompt delivery in Chennai keeps our booth running non-stop."
              </p>
              <strong style={{ fontSize: '0.85rem', color: 'var(--primary-cyan)' }}>— Premium Auto Body Center, Chennai</strong>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-glass)' }}>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.75rem', color: '#94a3b8' }}>
                "Their Aeropro spray guns and multi-grit sanding discs offer phenomenal finish quality at unbeatable wholesale pricing."
              </p>
              <strong style={{ fontSize: '0.85rem', color: 'var(--primary-cyan)' }}>— Master Custom Restorations, Vellore</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container" style={{ marginTop: '2rem' }}>
        <div className="cta-banner">
          <div className="cta-content">
            <div className="badge-tag" style={{ marginBottom: '0.6rem' }}><i className="fas fa-bolt"></i> Elevate Your Workshop</div>
            <h2>Need Custom Paint Formulations or Workshop Supplies?</h2>
            <p>Contact our technical specialists today for shade matching, equipment guidance, and wholesale dealership pricing.</p>
          </div>
          <div className="cta-actions">
            <button className="btn-primary" onClick={() => openQuoteModal()}>
              <i className="fas fa-paper-plane"></i> Request Custom Quote
            </button>
            <a href="tel:+919159911569" className="btn-secondary">
              <i className="fas fa-phone-alt"></i> Call +91 91599 11569
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
