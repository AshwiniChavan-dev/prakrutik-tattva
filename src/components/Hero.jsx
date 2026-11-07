import React from "react";
import { ArrowRight, MessageCircle, Sparkles, Shield, Heart } from "lucide-react";
import { buildGeneralWhatsAppUrl } from "../utils/whatsapp";

export default function Hero({ onShopClick }) {
  const whatsappUrl = buildGeneralWhatsAppUrl(
    "Hello Prakrutik Tattva! I would like to enquire about your cold-pressed oils, seeds, dry fruits, spices, and dry fruits laddoo."
  );

  return (
    <section className="hero-section" id="home">
      <div className="hero-background-overlay"></div>
      <div className="container hero-container">
        <div className="hero-grid">
          
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-badge-tag">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Thoughtful Natural Choices For Your Family</span>
            </div>

            <h1 className="hero-title">
              Bring Home the <span className="highlight-text">Goodness of Nature</span>
            </h1>

            <p className="hero-subtitle">
              Discover thoughtfully selected cold-pressed oils, wholesome seeds, delicious dry fruits, aromatic spices, and dry fruits laddoo from Prakrutik Tattva.
            </p>

            <div className="hero-cta-group">
              <button 
                onClick={onShopClick}
                className="btn btn-primary btn-lg hero-btn-shop"
              >
                <span>SHOP OUR PRODUCTS</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg hero-btn-whatsapp"
              >
                <MessageCircle size={20} />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="hero-trust-row">
              <div className="trust-pill">
                <Shield size={16} />
                <span>Carefully Curated</span>
              </div>
              <div className="trust-pill">
                <Heart size={16} />
                <span>Traditional Inspiration</span>
              </div>
              <div className="trust-pill">
                <Sparkles size={16} />
                <span>Direct Personal Service</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Showcase */}
          <div className="hero-visual">
            <div className="hero-visual-card">
              <img 
                src="/assets/images/hero-banner.jpg" 
                alt="Prakrutik Tattva Natural Food Collection - Cold-pressed oils, dry fruits, seeds, spices" 
                className="hero-image"
                onError={(e) => {
                  // Fallback if image not yet loaded
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero-visual-fallback" style={{ display: 'none' }}>
                <span className="fallback-tag">🌿 Prakrutik Tattva</span>
                <h3>Natural & Traditional Essentials</h3>
                <p>Cold-Pressed Oils • Seeds & Dry Fruits • Spices • Laddoo</p>
              </div>

              {/* Floating feature pill */}
              <div className="hero-floating-card">
                <div className="floating-badge">Pure & Authentic</div>
                <div className="floating-text">
                  <strong>Prakrutik Tattva</strong>
                  <span>Wholesome Kitchen Staples</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
