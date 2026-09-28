import React, { useState } from 'react';
import { Search, Check, Boxes } from 'lucide-react';
import { products } from '../data/products';

export default function Products({ openQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="container" style={{ paddingTop: '3.5rem' }}>
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="badge-tag"><Boxes size={14} /> Professional Equipment & Supplies</div>
          <h1 className="section-title">Automotive Workshop Catalog</h1>
          <p className="section-subtitle">
            Precision spray guns, high-durability abrasives, masking films, and safety gear designed for championship body shop results.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="catalog-header">
          <div className="filter-bar">
            <div className="filter-tabs">
              <button 
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Products
              </button>
              <button 
                className={`filter-btn ${selectedCategory === 'guns' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('guns')}
              >
                Spray Guns
              </button>
              <button 
                className={`filter-btn ${selectedCategory === 'sanding' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('sanding')}
              >
                Abrasives & Sanding
              </button>
              <button 
                className={`filter-btn ${selectedCategory === 'masking' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('masking')}
              >
                Masking & Prep
              </button>
              <button 
                className={`filter-btn ${selectedCategory === 'safety' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('safety')}
              >
                Air & Safety
              </button>
            </div>

            <div className="search-wrap">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search spray guns, discs, filters..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((p) => (
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

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#64748b' }}>
            <h3>No products found matching "{searchQuery}"</h3>
            <p>Try searching for spray guns, sanding discs, masking tape, or filters.</p>
          </div>
        )}

        {/* Bulk Supply Banner */}
        <div className="cta-banner" style={{ marginTop: '4rem' }}>
          <div className="cta-content">
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}><i className="fas fa-truck-loading"></i> Wholesale Supply</div>
            <h2>Looking for Regular Workshop Consumables & Supplies?</h2>
            <p>We provide monthly wholesale supplies of sanding discs, masking rolls, booth filters, and clearcoats with priority delivery to service centers across Tamil Nadu.</p>
          </div>
          <div className="cta-actions">
            <button className="btn-primary" onClick={() => openQuoteModal()}>
              <i className="fas fa-handshake"></i> Request Wholesale Pricing
            </button>
            <a 
              href="https://wa.me/919159911569?text=Hi%20Indus%20Paints,%20we%20would%20like%20to%20discuss%20a%20regular%20workshop%20supply%20contract." 
              target="_blank" 
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <i className="fab fa-whatsapp"></i> Discuss on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
