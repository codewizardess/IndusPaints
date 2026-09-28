import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function Terms({ setActiveTab }) {
  return (
    <section className="container" style={{ maxWidth: '900px', paddingTop: '4rem' }}>
      <div className="contact-card-glass" style={{ padding: '3rem' }}>
        <div className="badge-tag" style={{ marginBottom: '1rem' }}><ShieldCheck size={14} /> Legal & Terms</div>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1.5rem' }}>Terms of Use</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.98rem', color: '#475569', lineHeight: '1.8' }}>
          <p>
            Welcome to the official digital portal of <strong>Indus Paints</strong>. By accessing our website, browsing our product catalogs, or requesting quotes, you agree to comply with the following commercial terms and conditions.
          </p>

          <h3 style={{ color: '#0f172a', fontSize: '1.3rem' }}>1. Product Specifications & Pricing</h3>
          <p>
            All product specifications, spray gun technical data, and paint formulation references displayed on this website are provided for commercial information. Quotations and bulk contract pricing are confirmed via direct invoice and may vary according to batch volumes and OEM distributor policies.
          </p>

          <h3 style={{ color: '#0f172a', fontSize: '1.3rem' }}>2. Authorized Brand Trademarks</h3>
          <p>
            Brand names, logos, and trademarks including <strong>Glasurit, Valspar, Kansai Nerolac, Prospray, and Aeropro</strong> belong to their respective parent manufacturing corporations. Indus Paints acts as an authorized dealer and distributor.
          </p>

          <h3 style={{ color: '#0f172a', fontSize: '1.3rem' }}>3. Workshop Safety & Application Guidelines</h3>
          <p>
            Automotive paints, isocyanate clearcoats, and chemical reducers must only be handled by trained technicians using certified personal protective equipment (PPE), including carbon respiratory masks and compliant spray booth ventilation.
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
