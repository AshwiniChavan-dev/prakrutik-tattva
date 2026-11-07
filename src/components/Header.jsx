import React, { useState, useEffect } from "react";
import { 
  ShoppingBag, 
  Menu, 
  X, 
  MessageCircle, 
  ChevronRight,
  Leaf
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { siteConfig } from "../config/siteConfig";
import { buildGeneralWhatsAppUrl } from "../utils/whatsapp";

export default function Header({ activeCategory, onSelectCategory, onNavigateSection }) {
  const { totalItemsCount, openCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (category, sectionId) => {
    setIsMobileMenuOpen(false);
    if (category !== undefined) {
      onSelectCategory(category);
    }
    if (sectionId) {
      onNavigateSection(sectionId);
    }
  };

  return (
    <header className={`site-header ${isScrolled ? "header-scrolled" : ""}`}>
      {/* Top Notification / Trust Bar */}
      <div className="top-banner">
        <div className="container top-banner-content">
          <span className="banner-text">
            🌿 Traditional Inspiration • Cold-Pressed Oils • Seeds & Dry Fruits • Natural Spices • Dry Fruits Laddoo
          </span>
          <span className="banner-contact">
            Direct WhatsApp Assistance: <strong>{siteConfig.contact.phone}</strong>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav-bar">
        <div className="container header-grid">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("all", "home");
            }}
          >
            <div className="logo-emblem">
              <img 
                src="/assets/logo.png" 
                alt="Prakrutik Tattva Logo" 
                style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%", padding: "2px" }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.parentElement.querySelector('.logo-leaf');
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <Leaf size={22} className="logo-leaf" style={{ display: 'none' }} />
            </div>
            <div className="brand-titles">
              <span className="brand-name">PRAKRUTIK TATTVA</span>
              <span className="brand-subtitle">प्राकृतिक तत्त्व • Natural Food</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <button 
              className={`nav-link ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => handleNavClick("all", "home")}
            >
              Home
            </button>
            <button 
              className="nav-link"
              onClick={() => handleNavClick("all", "shop")}
            >
              Shop All
            </button>
            <button 
              className={`nav-link ${activeCategory === "oils" ? "active" : ""}`}
              onClick={() => handleNavClick("oils", "shop")}
            >
              Cold-Pressed Oils
            </button>
            <button 
              className={`nav-link ${activeCategory === "seeds-dryfruits" ? "active" : ""}`}
              onClick={() => handleNavClick("seeds-dryfruits", "shop")}
            >
              Seeds & Dry Fruits
            </button>
            <button 
              className={`nav-link ${activeCategory === "spices" ? "active" : ""}`}
              onClick={() => handleNavClick("spices", "shop")}
            >
              Spices & Turmeric
            </button>
            <button 
              className={`nav-link ${activeCategory === "laddoo" ? "active" : ""}`}
              onClick={() => handleNavClick("laddoo", "shop")}
            >
              Dry Fruits Laddoo
            </button>
            <button 
              className="nav-link"
              onClick={() => handleNavClick(undefined, "about")}
            >
              About Us
            </button>
            <button 
              className="nav-link"
              onClick={() => handleNavClick(undefined, "contact")}
            >
              Contact Us
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            {/* WhatsApp Order Button */}
            <a 
              href={buildGeneralWhatsAppUrl()}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm header-whatsapp-btn"
              title="Order on WhatsApp"
            >
              <MessageCircle size={17} />
              <span className="whatsapp-btn-text">WhatsApp Order</span>
            </a>

            {/* Shopping Cart Trigger */}
            <button 
              className="cart-toggle-btn"
              onClick={openCart}
              aria-label={`Shopping Cart with ${totalItemsCount} items`}
            >
              <ShoppingBag size={21} />
              {totalItemsCount > 0 && (
                <span className="cart-badge-count">{totalItemsCount}</span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-logo">
                <div className="logo-emblem">
                  <img 
                    src="/assets/logo.png" 
                    alt="Prakrutik Tattva Logo" 
                    style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%", padding: "2px" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.parentElement.querySelector('.logo-leaf');
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <Leaf size={18} className="logo-leaf" style={{ display: 'none' }} />
                </div>
                <div className="brand-titles">
                  <span className="brand-name">PRAKRUTIK TATTVA</span>
                  <span className="brand-subtitle">Natural Food</span>
                </div>
              </div>
              <button 
                className="close-drawer-btn" 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              <button 
                className={`mobile-nav-item ${activeCategory === "all" ? "active" : ""}`}
                onClick={() => handleNavClick("all", "home")}
              >
                <span>Home</span>
                <ChevronRight size={18} />
              </button>
              <button 
                className="mobile-nav-item"
                onClick={() => handleNavClick("all", "shop")}
              >
                <span>Shop All Products</span>
                <ChevronRight size={18} />
              </button>
              <button 
                className={`mobile-nav-item ${activeCategory === "oils" ? "active" : ""}`}
                onClick={() => handleNavClick("oils", "shop")}
              >
                <span>Cold-Pressed Oils</span>
                <ChevronRight size={18} />
              </button>
              <button 
                className={`mobile-nav-item ${activeCategory === "seeds-dryfruits" ? "active" : ""}`}
                onClick={() => handleNavClick("seeds-dryfruits", "shop")}
              >
                <span>Seeds & Dry Fruits</span>
                <ChevronRight size={18} />
              </button>
              <button 
                className={`mobile-nav-item ${activeCategory === "spices" ? "active" : ""}`}
                onClick={() => handleNavClick("spices", "shop")}
              >
                <span>Spices & Turmeric</span>
                <ChevronRight size={18} />
              </button>
              <button 
                className={`mobile-nav-item ${activeCategory === "laddoo" ? "active" : ""}`}
                onClick={() => handleNavClick("laddoo", "shop")}
              >
                <span>Dry Fruits Laddoo</span>
                <ChevronRight size={18} />
              </button>
              <button 
                className="mobile-nav-item"
                onClick={() => handleNavClick(undefined, "about")}
              >
                <span>About Us</span>
                <ChevronRight size={18} />
              </button>
              <button 
                className="mobile-nav-item"
                onClick={() => handleNavClick(undefined, "contact")}
              >
                <span>Contact Us</span>
                <ChevronRight size={18} />
              </button>
            </nav>

            <div className="mobile-drawer-footer">
              <a 
                href={buildGeneralWhatsAppUrl()}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ width: "100%" }}
              >
                <MessageCircle size={19} />
                Order on WhatsApp
              </a>
              <p className="mobile-contact-line">
                Call / WhatsApp: {siteConfig.contact.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
