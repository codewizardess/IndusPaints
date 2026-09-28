import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const handleNav = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo" onClick={() => handleNav('home')}>
              <div className="logo-badge">IP</div>
              <div className="logo-text">
                <span className="logo-name">INDUS <span>PAINTS</span></span>
                <span className="logo-tagline">Automotive Refinish</span>
              </div>
            </div>
            <p>
              Premier distributor of world-class automotive refinish paints, OEM color matching systems, and professional workshop spray equipment since 2007.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/share/16fUwXoJbW/" target="_blank" rel="noreferrer" className="social-icon" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/indus_paints_vellore?igsh=YnhrN3Jlbzc2Z3Rj" target="_blank" rel="noreferrer" className="social-icon" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:induspaintsvellore@gmail.com" className="social-icon" title="Email Us">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNav('home')}>Home</button></li>
              <li><button onClick={() => handleNav('products')}>Product Catalog</button></li>
              <li><button onClick={() => handleNav('brands')}>Authorized Brands</button></li>
              <li><button onClick={() => handleNav('about')}>About Indus Paints</button></li>
              <li><button onClick={() => handleNav('contact')}>Contact & Branches</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Brands</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNav('brands')}>Glasurit (BASF)</button></li>
              <li><button onClick={() => handleNav('brands')}>Valspar Refinish</button></li>
              <li><button onClick={() => handleNav('brands')}>Kansai Nerolac</button></li>
              <li><button onClick={() => handleNav('brands')}>Prospray Finishes</button></li>
              <li><button onClick={() => handleNav('products')}>Aeropro Spray Tools</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Branch Hubs</h4>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <strong style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={16} color="#0284c7" /> Chennai:
                </strong>
                31/A Tansi Nagar, Velachery, Chennai-600042
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={16} color="#0284c7" /> Vellore:
                </strong>
                246A Viruthampattu, Vellore-632602
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={16} color="#0284c7" /> Helpline:
                </strong>
                <a href="tel:+919159911569" style={{ color: '#38bdf8' }}>+91 91599 11569</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Indus Paints. All Rights Reserved. Built for Automotive Refinishing Excellence.</p>
          <p>
            <button onClick={() => handleNav('terms')} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', marginRight: '0.5rem' }}>Terms of Use</button> | 
            <button onClick={() => handleNav('policy')} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', marginLeft: '0.5rem' }}>Privacy Policy</button>
          </p>
        </div>
      </div>
    </footer>
  );
}
