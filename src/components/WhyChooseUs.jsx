import React from "react";
import { Sparkles, Flame, ShieldCheck, HeartHandshake } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles size={28} className="feature-icon" />;
      case "Flame":
        return <Flame size={28} className="feature-icon" />;
      case "ShieldCheck":
        return <ShieldCheck size={28} className="feature-icon" />;
      case "HeartHandshake":
        return <HeartHandshake size={28} className="feature-icon" />;
      default:
        return <Sparkles size={28} className="feature-icon" />;
    }
  };

  return (
    <section className="why-choose-section section-padding" id="why-us">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">The Prakrutik Tattva Promise</span>
          <h2 className="section-title">Why Choose Prakrutik Tattva</h2>
          <p className="section-subtitle">
            Dedicated to bringing traditional food inspiration and reliable quality into everyday kitchens.
          </p>
        </div>

        <div className="why-choose-grid">
          {siteConfig.whyChooseUs.map((item) => (
            <div key={item.id} className="why-choose-card">
              <div className="why-icon-wrap">
                {getIcon(item.icon)}
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
