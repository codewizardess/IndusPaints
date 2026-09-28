import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import QuoteModal from './components/QuoteModal';

import Home from './pages/Home';
import Products from './pages/Products';
import Brands from './pages/Brands';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Policy from './pages/Policy';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('');

  const openQuoteModal = (productName = '') => {
    setSelectedProductForQuote(productName);
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedProductForQuote('');
  };

  return (
    <div className="app-layout">
      {/* Background Gradients */}
      <div className="bg-ambient"></div>
      <div className="bg-grid-pattern"></div>

      {/* Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openQuoteModal={openQuoteModal} 
      />

      {/* Main Pages Router */}
      <main>
        {activeTab === 'home' && (
          <Home 
            setActiveTab={setActiveTab} 
            openQuoteModal={openQuoteModal} 
          />
        )}
        {activeTab === 'products' && (
          <Products 
            openQuoteModal={openQuoteModal} 
          />
        )}
        {activeTab === 'brands' && (
          <Brands 
            openQuoteModal={openQuoteModal} 
          />
        )}
        {activeTab === 'about' && (
          <About 
            setActiveTab={setActiveTab} 
          />
        )}
        {activeTab === 'contact' && (
          <Contact />
        )}
        {activeTab === 'terms' && (
          <Terms 
            setActiveTab={setActiveTab} 
          />
        )}
        {activeTab === 'policy' && (
          <Policy 
            setActiveTab={setActiveTab} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Persistent Floating Quick Actions */}
      <FloatingActions />

      {/* Quick Quote Interactive Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={closeQuoteModal} 
        defaultProduct={selectedProductForQuote} 
      />
    </div>
  );
}
