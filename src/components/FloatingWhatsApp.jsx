import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildGeneralWhatsAppUrl } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = buildGeneralWhatsAppUrl(
    "Hello Prakrutik Tattva! I am visiting your website and would like to enquire about your products."
  );

  return (
    <div className="floating-whatsapp-container" role="complementary" aria-label="WhatsApp quick chat">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="floating-whatsapp-tooltip">
          <span>Need help? Chat with us on WhatsApp</span>
          <button 
            type="button" 
            className="tooltip-close-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Dismiss tooltip"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Contact Prakrutik Tattva on WhatsApp"
      >
        <MessageCircle size={28} className="whatsapp-pulse-icon" />
      </a>
    </div>
  );
}
