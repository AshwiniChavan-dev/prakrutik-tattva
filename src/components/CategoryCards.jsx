import React from "react";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "../data/categories";

export default function CategoryCards({ onSelectCategory }) {
  return (
    <section className="category-section section-padding" id="categories">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">Product Collections</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Thoughtfully curated staples from Indian traditions to enrich your everyday dining.
          </p>
        </div>

        <div className="category-grid">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="category-card"
              onClick={() => onSelectCategory(cat.id)}
            >
              <div className="category-card-media">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="category-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="category-img-fallback" style={{ display: 'none' }}>
                  <span>{cat.name}</span>
                </div>
                <div className="category-overlay-tint"></div>
                <span className="category-pill-badge">{cat.badge}</span>
              </div>

              <div className="category-card-body">
                <h3 className="category-card-title">{cat.name}</h3>
                <p className="category-card-desc">{cat.description}</p>
                <button 
                  className="btn btn-secondary category-card-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCategory(cat.id);
                  }}
                >
                  <span>{cat.buttonText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
