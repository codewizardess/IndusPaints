import React, { useState, useEffect } from 'react';
import { X, FileText, Send } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, defaultProduct = '' }) {
  const [product, setProduct] = useState(defaultProduct);

  useEffect(() => {
    setProduct(defaultProduct);
  }, [defaultProduct]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
          <FileText size={14} /> Quick Inquiry
        </div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#0f172a' }}>
          Request a Price Quote
        </h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: '#64748b' }}>
          Fill in your requirements and our team will get back to you with pricing within hours.
        </p>

        <form action="https://formsubmit.co/induspaintsvellore@gmail.com" method="POST">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="🚀 New Quote Request - Indus Paints React App" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{ display: 'none' }} />

          <div className="form-group">
            <label htmlFor="modalName">Your Name / Workshop Name</label>
            <input type="text" id="modalName" name="name" placeholder="e.g. Apex Auto Body Shop" required />
          </div>

          <div className="form-group">
            <label htmlFor="modalPhone">Phone / WhatsApp Number</label>
            <input type="tel" id="modalPhone" name="phone" placeholder="e.g. +91 98765 43210" required />
          </div>

          <div className="form-group">
            <label htmlFor="modalProduct">Product / Paint System Needed</label>
            <input 
              type="text" 
              id="modalProduct" 
              name="product" 
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="e.g. Glasurit Clearcoat, Aeropro A608, Sanding Discs" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="modalMessage">Quantity / Notes (Optional)</label>
            <textarea id="modalMessage" name="message" rows={3} placeholder="Tell us your approximate requirements..."></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
            <Send size={16} /> Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
