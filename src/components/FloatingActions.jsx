import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <a 
        href="https://wa.me/919159911569?text=Hi%20Indus%20Paints,%20I%20would%20like%20to%20inquire%20about%20your%20products." 
        target="_blank" 
        rel="noreferrer"
        className="float-btn float-btn-whatsapp" 
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a 
        href="tel:+919159911569" 
        className="float-btn float-btn-phone" 
        title="Call Indus Paints"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
