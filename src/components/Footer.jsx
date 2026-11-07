import React from "react";
import { Leaf, MessageCircle, Phone, Mail, MapPin, Instagram, Heart } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { buildGeneralWhatsAppUrl } from "../utils/whatsapp";

export default function Footer({ onSelectCategory, onNavigateSection }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Main Footer Grid */}
        <div className="footer-grid">
          
          {/* Brand Col */}
          <div className="footer-col footer-brand-col">
            <div className="footer-brand-logo">
              <div className="footer-emblem">
                <img 
                  src="/assets/logo.png" 
                  alt="Prakrutik Tattva Logo" 
                  style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%", padding: "2px" }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.parentElement.querySelector('.footer-leaf');
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <Leaf size={20} className="footer-leaf" style={{ display: 'none' }} />
              </div>
              <div>
                <span className="footer-brand-name">PRAKRUTIK TATTVA</span>
                <span className="footer-brand-tagline">प्राकृतिक तत्त्व • Natural Food</span>
              </div>
            </div>
            <p className="footer-about-text">
              Thoughtfully selected cold-pressed oils, wholesome seeds, dry fruits, aromatic spices, and traditional dry fruits laddoo for your everyday family kitchen.
            </p>
            <div className="footer-whatsapp-action">
              <a 
                href={buildGeneralWhatsAppUrl()}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Categories Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Collections</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => { onSelectCategory("oils"); onNavigateSection("shop"); }}>
                  Cold-Pressed Oils
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory("seeds-dryfruits"); onNavigateSection("shop"); }}>
                  Seeds & Dry Fruits
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory("spices"); onNavigateSection("shop"); }}>
                  Turmeric & Spices
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory("laddoo"); onNavigateSection("shop"); }}>
                  Dry Fruits Laddoo
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory("all"); onNavigateSection("shop"); }}>
                  View All Products
                </button>
              </li>
            </ul>
          </div>

          {/* Useful Navigation Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">About & Service</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => onNavigateSection("home")}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("about")}>
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("why-us")}>
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("contact")}>
                  Customer Support
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Connect with Us</h4>
            <ul className="footer-contact-info">
              <li>
                <Phone size={16} className="contact-icon" />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}>
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li>
                <Instagram size={16} className="contact-icon" />
                <a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Informational Disclaimer Banner */}
        <div className="footer-disclaimer-box">
          <p>
            <strong>Note:</strong> All product descriptions, ingredients, and storage guidance are intended for everyday culinary information. Natural agricultural products may vary slightly in natural color, aroma, and seed size depending on seasonal harvests. Product prices and availability are subject to direct confirmation by Prakrutik Tattva via WhatsApp.
          </p>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} Prakrutik Tattva. All rights reserved.</p>
          <p className="footer-craft">
            Prepared with <Heart size={14} className="heart-icon" /> for wholesome everyday living.
          </p>
        </div>

      </div>
    </footer>
  );
}
