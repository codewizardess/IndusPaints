import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

export default function Policy({ setActiveTab }) {
  return (
    <section className="container" style={{ maxWidth: '900px', paddingTop: '4rem' }}>
      <div className="contact-card-glass" style={{ padding: '3rem' }}>
        <div className="badge-tag" style={{ marginBottom: '1rem' }}><Shield size={14} /> Legal & Privacy</div>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1.5rem' }}>Privacy Policy</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.98rem', color: '#475569', lineHeight: '1.8' }}>
          <p>
            At <strong>Indus Paints</strong>, we value the trust you place in us when sharing your business and contact information. This Privacy Policy outlines how we collect, handle, and safeguard customer details obtained through our website, inquiries, and commercial interactions.
          </p>

          <h3 style={{ color: '#0f172a', fontSize: '1.3rem' }}>1. Information We Collect</h3>
          <p>
            We collect contact details (such as workshop name, representative name, telephone/WhatsApp number, email address, and product inquiries) solely to provide quotation estimates, technical assistance, order fulfillment, and delivery updates.
          </p>

          <h3 style={{ color: '#0f172a', fontSize: '1.3rem' }}>2. Use of Information</h3>
          <p>
            Your information is used strictly for commercial communication with Indus Paints. We do not sell, rent, or trade your contact information to third-party marketing companies.
          </p>

          <h3 style={{ color: '#0f172a', fontSize: '1.3rem' }}>3. Data Security</h3>
          <p>
            We take reasonable administrative and technical precautions to safeguard your business details against unauthorized access or disclosure.
          </p>

          <h3 style={{ color: '#0f172a', fontSize: '1.3rem' }}>4. Contact Us Regarding Your Data</h3>
          <p>
            If you have any questions or wish to update your contact details on our customer registry, please contact us at <a href="mailto:induspaintsvellore@gmail.com" style={{ color: '#0284c7' }}>induspaintsvellore@gmail.com</a> or call <a href="tel:+919159911569" style={{ color: '#0284c7' }}>+91 91599 11569</a>.
          </p>
        </div>

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <button onClick={() => setActiveTab('home')} className="btn-primary">
            <ArrowLeft size={16} /> Back to Homepage
          </button>
        </div>
      </div>
    </section>
  );
}
