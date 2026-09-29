import React from 'react';
import { Award, ExternalLink, CheckCircle, Car, Palette, Layers, Gauge, CheckCheck } from 'lucide-react';

export default function Brands({ openQuoteModal }) {
  return (
    <div>
      <section className="container" style={{ paddingTop: '3.5rem' }}>
        <div className="section-header">
          <div className="badge-tag"><Award size={14} /> Certified Distributorship</div>
          <h1 className="section-title">Authorized Paint Technology Partners</h1>
          <p className="section-subtitle">
            Indus Paints proudly distributes world-leading automotive coating systems, bringing German precision, American performance, and Japanese durability to Indian roads.
          </p>
        </div>

        {/* Brands List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Glasurit */}
          <div className="founder-card" id="glasurit">
            <div>
              <div className="badge-tag" style={{ marginBottom: '1rem' }}><i className="fas fa-globe-europe"></i> BASF Germany</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>Glasurit Automotive Refinish</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--primary-cyan)', fontWeight: 700, marginBottom: '1rem' }}>
                The Global Benchmark for Luxury Vehicle Refinishing
              </p>
              <p style={{ marginBottom: '1.25rem', color: 'var(--text-body)' }}>
                Glasurit is approved by virtually every major luxury automaker in the world (Mercedes-Benz, BMW, Porsche, Audi, Rolls-Royce). Formulated by BASF Germany, Glasurit delivers unmatched depth of gloss, rapid drying kinetics, and industry-leading waterborne environmental compliance (90 Line).
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                <li><CheckCircle size={16} color="var(--primary-cyan)" style={{ display: 'inline', marginRight: '0.5rem' }} /> <strong>OEM Approvals:</strong> Factory-approved paint chemistry for high-end luxury imports</li>
                <li><CheckCircle size={16} color="var(--primary-cyan)" style={{ display: 'inline', marginRight: '0.5rem' }} /> <strong>Eco-Waterborne:</strong> Low VOC formulations with ultra-fast flash-off times</li>
                <li><CheckCircle size={16} color="var(--primary-cyan)" style={{ display: 'inline', marginRight: '0.5rem' }} /> <strong>Clearcoat Brilliance:</strong> High solid scratch-resistant clearcoats</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://www.glasurit.com/en-int" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.9rem' }}>
                  <ExternalLink size={16} /> Official Glasurit Portal
                </a>
                <button className="btn-primary" onClick={() => openQuoteModal('Glasurit Automotive Paint System')}>
                  <i className="fas fa-spray-can"></i> Inquire Glasurit
                </button>
              </div>
            </div>
            <div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '16px', padding: '2rem', borderLeft: '4px solid var(--primary-cyan)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-white)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={20} color="var(--primary-cyan)" /> Key Glasurit Systems We Supply:
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                  <li><strong style={{ color: 'var(--text-white)' }}>Glasurit 90 Line:</strong> Waterborne basecoat with exceptional hiding power</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>Glasurit 285 Series:</strong> High-build primer surfacers for rapid leveling</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>Glasurit 923-255:</strong> Multi-purpose MS clearcoat for showroom mirror gloss</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>Glasurit RATIO Scan:</strong> Spectrophotometer digital color matching</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Valspar */}
          <div className="founder-card" id="valspar">
            <div>
              <div className="badge-tag" style={{ marginBottom: '1rem' }}><i className="fas fa-globe-americas"></i> USA / Global</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>Valspar Refinish</h2>
              <p style={{ fontSize: '1.05rem', color: '#f43f5e', fontWeight: 700, marginBottom: '1rem' }}>
                High-Speed Turnaround & High Opacity Performance
              </p>
              <p style={{ marginBottom: '1.25rem', color: 'var(--text-body)' }}>
                Valspar Refinish is engineered for body shops that demand maximum throughput without sacrificing finish quality. With advanced universal toners, exceptional metallic flake orientation, and rapid air-dry clearcoats, Valspar cuts vehicle refinish cycle times significantly.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                <li><CheckCircle size={16} color="#f43f5e" style={{ display: 'inline', marginRight: '0.5rem' }} /> <strong>Universal Tinting:</strong> Intermix system suitable for solvent & specialized applications</li>
                <li><CheckCircle size={16} color="#f43f5e" style={{ display: 'inline', marginRight: '0.5rem' }} /> <strong>Fast Flash:</strong> Reduces bake booth cycle times and energy costs</li>
                <li><CheckCircle size={16} color="#f43f5e" style={{ display: 'inline', marginRight: '0.5rem' }} /> <strong>Color Tool Support:</strong> Comprehensive swatch libraries for Indian passenger cars</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://www.valspar.com/en" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.9rem' }}>
                  <ExternalLink size={16} /> Official Valspar Portal
                </a>
                <button className="btn-primary" onClick={() => openQuoteModal('Valspar Refinish Coatings')}>
                  <i className="fas fa-spray-can"></i> Inquire Valspar
                </button>
              </div>
            </div>
            <div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '16px', padding: '2rem', borderLeft: '4px solid #f43f5e' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-white)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Gauge size={20} color="#f43f5e" /> The Valspar Advantage:
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                  <li><strong style={{ color: 'var(--text-white)' }}>High Coverage Basecoats:</strong> Fewer coats needed per panel</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>Air-Dry Clears:</strong> Polishable within 25 minutes of application</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>Direct Metal Primers:</strong> Exceptional corrosion inhibition</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>Color Formulation Portal:</strong> Fast online formulation lookup</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kansai Nerolac */}
          <div className="founder-card" id="nerolac">
            <div>
              <div className="badge-tag" style={{ marginBottom: '1rem' }}><i className="fas fa-shield-virus"></i> Kansai Japan & India</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>Kansai Nerolac Automotive</h2>
              <p style={{ fontSize: '1.05rem', color: '#fbbf24', fontWeight: 700, marginBottom: '1rem' }}>
                Armor-Grade Weather & Stone Chip Protection
              </p>
              <p style={{ marginBottom: '1.25rem', color: 'var(--text-body)' }}>
                As the original OEM paint supplier to India's largest automotive manufacturers (Maruti Suzuki, Toyota, Honda, Tata Motors), Kansai Nerolac paints provide factory-exact color tones with formulations built specifically to endure tropical humidity, intense sunlight, and harsh road debris.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                <li><CheckCircle size={16} color="#fbbf24" style={{ display: 'inline', marginRight: '0.5rem' }} /> <strong>OEM Exact Tones:</strong> Direct factory shade codes for Indian road vehicles</li>
                <li><CheckCircle size={16} color="#fbbf24" style={{ display: 'inline', marginRight: '0.5rem' }} /> <strong>UV & Tropical Resistance:</strong> Zero chalking or yellowing under harsh sun</li>
                <li><CheckCircle size={16} color="#fbbf24" style={{ display: 'inline', marginRight: '0.5rem' }} /> <strong>2K Polyurethane Systems:</strong> Rock-hard impact resistance and long-term gloss</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://www.kansai.com/products/automotive/color_matching/" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.9rem' }}>
                  <ExternalLink size={16} /> Kansai Color Matching
                </a>
                <button className="btn-primary" onClick={() => openQuoteModal('Kansai Nerolac Refinish')}>
                  <i className="fas fa-spray-can"></i> Inquire Nerolac
                </button>
              </div>
            </div>
            <div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '16px', padding: '2rem', borderLeft: '4px solid #fbbf24' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-white)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Car size={20} color="#fbbf24" /> Ideal Applications:
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                  <li><strong style={{ color: 'var(--text-white)' }}>OEM Repair Panels:</strong> Factory bumper and fender resprays</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>Commercial Fleets:</strong> High-durability PU topcoats for buses & trucks</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>2K Epoxy Primers:</strong> Extreme adhesion on bare metal & alloy substrates</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>Anti-Scratch Clear:</strong> Superior wash-marring resistance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prospray */}
          <div className="founder-card" id="prospray">
            <div>
              <div className="badge-tag" style={{ marginBottom: '1rem' }}><Palette size={14} /> European Heritage</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>Prospray Finishes</h2>
              <p style={{ fontSize: '1.05rem', color: '#10b981', fontWeight: 700, marginBottom: '1rem' }}>
                Seamless Blending & Consistent Color Precision
              </p>
              <p style={{ marginBottom: '1.25rem', color: 'var(--text-body)' }}>
                Prospray delivers high-performance refinish coatings tailored for refinish craftsmen. Known for its effortless edge blending, high pigment density, and cost-effective premium clearcoats, Prospray ensures that every repair is indistinguishable from original factory paint.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://www.prosprayfinishes.com/" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.9rem' }}>
                  <ExternalLink size={16} /> Official Prospray Portal
                </a>
                <button className="btn-primary" onClick={() => openQuoteModal('Prospray Finishes System')}>
                  <i className="fas fa-spray-can"></i> Inquire Prospray
                </button>
              </div>
            </div>
            <div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '16px', padding: '2rem', borderLeft: '4px solid #10b981' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-white)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCheck size={20} color="#10b981" /> Prospray Features:
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                  <li><strong style={{ color: 'var(--text-white)' }}>True-to-Life Spectral Matching:</strong> Exact shade tinting</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>Fine Metallics:</strong> Clean flake alignment without clouding</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>High Solids 2:1 Clears:</strong> Superb DOI (Distinction of Image)</li>
                  <li><strong style={{ color: 'var(--text-white)' }}>Versatile Thinners:</strong> Fast, Medium, and Slow reducer options</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Partnership Form */}
        <div className="contact-card-glass" style={{ marginBottom: '2rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div className="badge-tag"><i className="fas fa-handshake"></i> Business Partnership</div>
            <h2 className="section-title">Apply for Dealership or Workshop Supply</h2>
            <p className="section-subtitle">
              Are you a paint retailer, auto body shop owner, or fleet operator in Tamil Nadu? Partner with Indus Paints for wholesale supply and direct factory technical support.
            </p>
          </div>

          <form action="https://formsubmit.co/induspaintsvellore@gmail.com" method="POST" style={{ maxWidth: '750px', margin: '0 auto' }}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="🤝 Dealership Application - Indus Paints React App" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="bizName">Business / Workshop Name</label>
                <input type="text" id="bizName" name="business_name" placeholder="e.g. Royal Auto Crafts" required />
              </div>
              <div className="form-group">
                <label htmlFor="contactPerson">Contact Person</label>
                <input type="text" id="contactPerson" name="contact_person" placeholder="Full name" required />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="phoneNum">Phone / WhatsApp Number</label>
                <input type="tel" id="phoneNum" name="phone" placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label htmlFor="cityLocation">City / Town Location</label>
                <input type="text" id="cityLocation" name="city" placeholder="e.g. Chennai, Vellore, Salem, Tirupati" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="partnerType">Type of Partnership</label>
              <select id="partnerType" name="partner_type">
                <option value="body_shop">Automotive Body Shop / Service Center</option>
                <option value="retail_dealer">Retail Paint Dealer / Sub-Distributor</option>
                <option value="fleet_operator">Commercial Fleet Operator</option>
                <option value="custom_painter">Custom Vehicle Restoration / Painter</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="brandInterest">Primary Paint / Tool Brands of Interest</label>
              <input type="text" id="brandInterest" name="brands_interested" placeholder="e.g. Glasurit, Valspar, Aeropro guns, 3M abrasives" />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.05rem' }}>
              <i className="fas fa-paper-plane"></i> Submit Dealership Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
