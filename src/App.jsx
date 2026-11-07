import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryCards from "./components/CategoryCards";
import ProductFilters from "./components/ProductFilters";
import ProductGrid from "./components/ProductGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import WhatsAppCheckoutModal from "./components/WhatsAppCheckoutModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { useCart } from "./context/CartContext";
import { PRODUCTS } from "./data/products";
import { CheckCircle2 } from "lucide-react";
import "./styles/App.css";

export default function App() {
  const { cartNotification } = useCart();

  // Catalog Filtering State
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Shop Section Ref for Smooth Scrolling
  const shopSectionRef = useRef(null);
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const whyUsSectionRef = useRef(null);

  const scrollToShop = () => {
    if (shopSectionRef.current) {
      shopSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSubcategory("All");
    scrollToShop();
  };

  const handleNavigateSection = (sectionId) => {
    switch (sectionId) {
      case "home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "shop":
        scrollToShop();
        break;
      case "about":
        aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "why-us":
        whyUsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setActiveSubcategory("All");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {cartNotification && (
        <div className="toast-notification" role="status" aria-live="polite">
          <CheckCircle2 size={18} color="#D5A642" />
          <span>{cartNotification}</span>
        </div>
      )}

      {/* Header */}
      <Header 
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onNavigateSection={handleNavigateSection}
      />

      <main>
        {/* 1. Hero Section */}
        <div ref={homeSectionRef}>
          <Hero onShopClick={scrollToShop} />
        </div>

        {/* 2. Shop By Category (4 Cards) */}
        <CategoryCards onSelectCategory={handleSelectCategory} />

        {/* 3. Products Catalog Section */}
        <section className="shop-section section-padding" id="shop" ref={shopSectionRef}>
          <div className="container">
            
            <div className="section-header">
              <span className="section-badge">Our Kitchen Essentials</span>
              <h2 className="section-title">Explore Our Full Range</h2>
              <p className="section-subtitle">
                Select your preferred pack sizes, configure quantities, and place orders directly with us on WhatsApp.
              </p>
            </div>

            {/* Filter Controls & Search */}
            <ProductFilters 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              activeSubcategory={activeSubcategory}
              onSubcategoryChange={setActiveSubcategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalResults={PRODUCTS.length}
            />

            {/* Product Cards Grid */}
            <ProductGrid 
              products={PRODUCTS}
              activeCategory={activeCategory}
              activeSubcategory={activeSubcategory}
              searchQuery={searchQuery}
              sortBy={sortBy}
              onResetFilters={handleResetFilters}
            />

          </div>
        </section>

        {/* 4. Why Choose Prakrutik Tattva */}
        <div ref={whyUsSectionRef}>
          <WhyChooseUs />
        </div>

        {/* 5. About Us ("Our Story") */}
        <div ref={aboutSectionRef}>
          <AboutUs />
        </div>

        {/* 6. Customer Support & Contact */}
        <div ref={contactSectionRef}>
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer 
        onSelectCategory={handleSelectCategory}
        onNavigateSection={handleNavigateSection}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer />

      {/* WhatsApp Checkout Modal */}
      <WhatsAppCheckoutModal />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
