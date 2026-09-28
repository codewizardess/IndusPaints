import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, openQuoteModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (tab) => {
    setActiveTab(tab);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="brand-logo" onClick={() => handleNav('home')}>
          <div className="logo-badge">IP</div>
          <div className="logo-text">
            <span className="logo-name">INDUS <span>PAINTS</span></span>
            <span className="logo-tagline">Automotive Refinish</span>
          </div>
        </div>

        <nav>
          <ul className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
            <li>
              <button 
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => handleNav('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'products' ? 'active' : ''}`}
                onClick={() => handleNav('products')}
              >
                Products & Tools
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'brands' ? 'active' : ''}`}
                onClick={() => handleNav('brands')}
              >
                Authorized Brands
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => handleNav('about')}
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => handleNav('contact')}
              >
                Contact & Locations
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button className="nav-btn-quote" onClick={() => openQuoteModal()}>
            <FileText size={16} /> Get a Quote
          </button>
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
