import React from "react";
import { Leaf, Award, Heart, Shield } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function AboutUs() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        
        <div className="about-grid">
          
          {/* Left Text Content */}
          <div className="about-content">
            <span className="section-badge">Brand Philosophy</span>
            <h2 className="section-title">{siteConfig.ourStory.heading}</h2>

            <div className="about-prose">
              <p className="about-lead">
                {siteConfig.ourStory.paragraph1}
              </p>

              <p>
                {siteConfig.ourStory.paragraph2}
              </p>

              <p>
                {siteConfig.ourStory.paragraph3}
              </p>
            </div>

            {/* Values Grid */}
            <div className="about-values-grid">
              <div className="about-value-item">
                <div className="value-icon-box">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4>Natural Selection</h4>
                  <p>Pure ingredients sourced with utmost care for your family's daily dining.</p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="value-icon-box">
                  <Heart size={20} />
                </div>
                <div>
                  <h4>Authentic Heritage</h4>
                  <p>Rooted in traditional Indian food preparations that celebrate honest flavors.</p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="value-icon-box">
                  <Shield size={20} />
                </div>
                <div>
                  <h4>Transparency First</h4>
                  <p>Honest descriptions, open communication, and no exaggerated claims.</p>
                </div>
              </div>
            </div>

            {/* Space reserved for real business story & founder message */}
            <div className="custom-story-placeholder">
              <span className="placeholder-tag">💡 Business Note</span>
              <p>
                <em>This section is easily customizable. You can add your business background, origin story, production glimpses, and founder notes in <code>src/config/siteConfig.js</code>.</em>
              </p>
            </div>
          </div>

          {/* Right Visual Story Card */}
          <div className="about-visual">
            <div className="about-image-card">
              <img 
                src="/assets/images/hero-banner.jpg" 
                alt="Prakrutik Tattva Natural Food Origins" 
                className="about-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="about-img-fallback" style={{ display: 'none' }}>
                <Leaf size={48} />
                <h3>Prakrutik Tattva</h3>
                <p>Pure & Wholesome Kitchen Essentials</p>
              </div>

              <div className="about-experience-badge">
                <span className="exp-number">100%</span>
                <span className="exp-label">Commitment to Quality & Taste</span>
              </div>
            </div>

            {/* Gallery placeholder row for real production/facility photos */}
            <div className="about-subgallery">
              <div className="subgallery-item">
                <div className="subgallery-placeholder">
                  <span>Traditional Ghani</span>
                </div>
              </div>
              <div className="subgallery-item">
                <div className="subgallery-placeholder">
                  <span>Selected Dry Fruits</span>
                </div>
              </div>
              <div className="subgallery-item">
                <div className="subgallery-placeholder">
                  <span>Handcrafted Laddoos</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
