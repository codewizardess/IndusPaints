import React from 'react';
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
  Paperclip,
  Check
} from 'lucide-react';
import { products } from '../data/products';

export default function Home({ setActiveTab, openQuoteModal }) {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge-tag">
              <Shield size={14} /> Authorized Refinish Distributor Since 2007
            </div>
            <h1 className="hero-title">
              Precision Color Matching. <br />
              <span className="highlight">Championship Finish.</span>
            </h1>
            <p className="hero-desc">
              Empowering top body shops, customizers, and automotive paint masters across Tamil Nadu with OEM-certified coatings from <strong>Glasurit, Valspar, Kansai Nerolac, Prospray</strong> and professional <strong>Aeropro spray equipment</strong>.
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
              <a href="/rm-brochure.pdf.pdf" download className="btn-secondary">
                <Download size={18} /> Download Brochure
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-showcase">
              <img src="/A608 Aeropro Premium 1.3 HVLP Spray Gun .jpg" alt="Aeropro Premium Spray Gun" className="hero-img" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#0f172a' }}>Aeropro A608 HVLP 1.3mm</h4>
                  <p style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: 600 }}>Ultra-Fine Atomization & High Transfer Rate</p>
                </div>
                <button 
                  onClick={() => setActiveTab('products')} 
                  className="btn-secondary" 
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  View Specs
                </button>
              </div>
            </div>

            <div className="hero-stat-floating">
              <div className="hero-stat-icon">
                <Award size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.05rem' }}>100% Genuine</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Global Refinish Standards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Counter Strip */}
      <section className="container">
        <div className="stats-strip">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Years of Industry Trust</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Color Matching Formulas</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2 Hubs</div>
              <div className="stat-label">Chennai & Vellore Branches</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1,000+</div>
              <div className="stat-label">Body Shops & Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Brands Section */}
      <section className="section container">
        <div className="section-header">
          <div className="badge-tag"><CheckCircle size={14} /> Authorized Distributorship</div>
          <h2 className="section-title">World-Class Paint Technologies</h2>
          <p className="section-subtitle">We bring the pinnacle of European and Asian automotive coating chemistry straight to your workshop floor.</p>
        </div>

        <div className="brands-grid">
          <div className="brand-card">
            <span className="brand-badge">German Engineering</span>
            <h3>Glasurit (BASF)</h3>
            <p>World-renowned premium automotive refinish system delivering unmatched gloss retention, eco-friendly waterborne technology, and rapid curing.</p>
            <button onClick={() => setActiveTab('brands')} className="brand-link">
              Learn about Glasurit <ArrowRight size={16} />
            </button>
          </div>

          <div className="brand-card">
            <span className="brand-badge">Global Performance</span>
            <h3>Valspar Refinish</h3>
            <p>High-efficiency solvent and basecoat systems engineered for extreme color accuracy, high hiding power, and fast turnaround productivity.</p>
            <button onClick={() => setActiveTab('brands')} className="brand-link">
              Learn about Valspar <ArrowRight size={16} />
            </button>
          </div>

          <div className="brand-card">
            <span className="brand-badge">Durability & Shield</span>
            <h3>Kansai Nerolac</h3>
            <p>Heavy-duty automotive refinish coatings formulated specifically to withstand tropical heat, UV exposure, and road wear without fading.</p>
            <button onClick={() => setActiveTab('brands')} className="brand-link">
              Learn about Nerolac <ArrowRight size={16} />
            </button>
          </div>

          <div className="brand-card">
            <span className="brand-badge">Precision Finish</span>
            <h3>Prospray Finishes</h3>
            <p>Comprehensive European formulation palette offering effortless blending, high-solids clearcoats, and universal tinting versatility.</p>
            <button onClick={() => setActiveTab('brands')} className="brand-link">
              Learn about Prospray <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Indus Paints */}
      <section className="section container">
        <div className="section-header">
          <div className="badge-tag"><Award size={14} /> The Indus Advantage</div>
          <h2 className="section-title">Why Top Body Shops Partner With Us</h2>
          <p className="section-subtitle">More than just paint suppliers — we provide the end-to-end technical backbone for flawless refinishing.</p>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon-wrap">
              <Pipette size={24} />
            </div>
            <h3>Exact Color Replication</h3>
            <p>Advanced spectral database and formulation support to ensure 100% factory match on Indian and imported vehicle makes.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrap">
              <Wrench size={24} />
            </div>
            <h3>Full Tool Ecosystem</h3>
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
            <h3>Direct B2B Pricing</h3>
            <p>Transparent wholesale tier pricing for commercial garages, fleet operators, and authorized dealership service stations.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section container">
        <div className="section-header">
          <div className="badge-tag"><Paperclip size={14} /> Workshop Arsenal</div>
          <h2 className="section-title">Featured Tools & Equipment</h2>
          <p className="section-subtitle">High-precision application tools designed to deliver mirror-like gloss and minimize overspray.</p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((p) => (
            <div key={p.id} className="product-item">
              <div className="product-thumb-wrap">
                <span className="product-category-tag">{p.categoryLabel}</span>
                <img src={p.image} alt={p.title} className="product-thumb" />
              </div>
              <div className="product-info">
                <h3 className="product-title">{p.title}</h3>
                <div className="product-specs">
                  {p.specs.map((spec, i) => (
                    <span key={i}><Check size={14} /> {spec}</span>
                  ))}
                </div>
                <div className="product-actions">
                  <button className="btn-inquire" onClick={() => openQuoteModal(p.title)}>
                    <i className="fas fa-file-alt"></i> Quote
                  </button>
                  <a 
                    href={`https://wa.me/919159911569?text=Hi%20Indus%20Paints,%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(p.title)}.`}
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-whatsapp-sm" 
                    title="WhatsApp Inquiry"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button onClick={() => setActiveTab('products')} className="btn-primary" style={{ padding: '0.9rem 2.5rem' }}>
            <i className="fas fa-th-large"></i> View All Products & Consumables
          </button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container" style={{ marginTop: '2rem' }}>
        <div className="cta-banner">
          <div className="cta-content">
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}><i className="fas fa-bolt"></i> Elevate Your Workshop</div>
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
