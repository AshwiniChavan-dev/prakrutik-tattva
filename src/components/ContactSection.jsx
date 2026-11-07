import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  MessageCircle, 
  Clock, 
  Send 
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { buildGeneralWhatsAppUrl } from "../utils/whatsapp";

export default function ContactSection() {
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryProduct, setInquiryProduct] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");

  const handleSendInquiry = (e) => {
    e.preventDefault();
    const customText = 
`Hello Prakrutik Tattva!

My name is ${inquiryName.trim() || "[Customer]"}.
Product enquiry: ${inquiryProduct.trim() || "General Enquiry"}

Message: ${inquiryMessage.trim() || "Please share availability and pricing details."}`;

    const url = buildGeneralWhatsAppUrl(customText);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">Get in Touch</span>
          <h2 className="section-title">Customer Support & Inquiries</h2>
          <p className="section-subtitle">
            We are always happy to answer your questions regarding products, pack sizes, bulk family orders, or custom hampers.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Contact Information Cards */}
          <div className="contact-info-column">
            
            <div className="contact-card primary-contact-card">
              <div className="contact-card-icon-box whatsapp-box">
                <MessageCircle size={24} />
              </div>
              <div className="contact-card-text">
                <h3>Direct WhatsApp Assistance</h3>
                <p>Chat directly with our team for quick order support, custom queries, and dispatch updates.</p>
                <a 
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm mt-2"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="contact-details-list">
              
              <div className="contact-detail-item">
                <div className="detail-icon-circle">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="detail-label">Phone Support</span>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} className="detail-value">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-circle">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="detail-label">Email Inquiries</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="detail-value">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-circle">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="detail-label">Business Address</span>
                  <p className="detail-value text-wrap">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-circle">
                  <Instagram size={18} />
                </div>
                <div>
                  <span className="detail-label">Social Media</span>
                  <a 
                    href={siteConfig.contact.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="detail-value instagram-link"
                  >
                    @prakrutiktattva on Instagram
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-circle">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="detail-label">Working Hours</span>
                  <p className="detail-value">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Direct WhatsApp Message Composer Form */}
          <div className="contact-form-column">
            <div className="contact-form-box">
              <h3 className="form-box-title">Send a Quick Enquiry</h3>
              <p className="form-box-desc">
                Fill in the details below and tap Send to open a pre-filled enquiry directly in WhatsApp.
              </p>

              <form onSubmit={handleSendInquiry} className="inquiry-form">
                <div className="form-group">
                  <label htmlFor="inqName" className="form-label">Your Name</label>
                  <input 
                    id="inqName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="form-input"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inqProduct" className="form-label">Product / Category of Interest</label>
                  <input 
                    id="inqProduct"
                    type="text"
                    placeholder="e.g. Mustard Oil, Almonds, Turmeric Powder"
                    className="form-input"
                    value={inquiryProduct}
                    onChange={(e) => setInquiryProduct(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inqMessage" className="form-label">Message or Question</label>
                  <textarea 
                    id="inqMessage"
                    rows="4"
                    placeholder="Ask about availability, delivery timeline, or request a customized order..."
                    className="form-textarea"
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-whatsapp btn-lg form-submit-btn">
                  <Send size={18} />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
