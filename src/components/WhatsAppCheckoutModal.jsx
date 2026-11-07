import React, { useState } from "react";
import { 
  X, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  Truck,
  User,
  MapPin,
  FileText
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { buildCartWhatsAppUrl, formatCurrency } from "../utils/whatsapp";

export default function WhatsAppCheckoutModal() {
  const { 
    cart, 
    isCheckoutOpen, 
    closeCheckout, 
    pricedSubtotal, 
    hasUnpricedItems 
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleProceedWhatsApp = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const whatsappUrl = buildCartWhatsAppUrl({
      items: cart,
      customerName,
      deliveryAddress,
      notes
    });

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="modal-backdrop" onClick={closeCheckout}>
      <div 
        className="modal-container checkout-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="WhatsApp Order Enquiry"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-box">
            <MessageCircle size={24} className="whatsapp-modal-icon" />
            <div>
              <h3 className="modal-title">Enquire & Order on WhatsApp</h3>
              <p className="modal-subtitle">No online payment required. Pay upon confirmation.</p>
            </div>
          </div>
          <button 
            type="button"
            className="modal-close-btn"
            onClick={closeCheckout}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleProceedWhatsApp} className="checkout-form">
          <div className="checkout-modal-body">
            
            {/* Order Summary Overview Box */}
            <div className="checkout-summary-box">
              <div className="summary-box-header">
                <span>Selected Items ({cart.length} types)</span>
                <span className="summary-subtotal-val">
                  {pricedSubtotal > 0 ? formatCurrency(pricedSubtotal) : "Quote on chat"}
                </span>
              </div>
              <ul className="checkout-mini-list">
                {cart.map((item, idx) => (
                  <li key={item.id} className="checkout-mini-item">
                    <span>
                      {idx + 1}. {item.name} ({item.packSize}) × {item.quantity}
                    </span>
                    <span className="mini-item-price">
                      {item.price !== null 
                        ? formatCurrency(item.price * item.quantity) 
                        : "Price on request"}
                    </span>
                  </li>
                ))}
              </ul>
              {hasUnpricedItems && (
                <div className="mini-unpriced-warning">
                  <AlertCircle size={14} />
                  <span>Some items will be priced when confirming on WhatsApp.</span>
                </div>
              )}
            </div>

            {/* Customer Details Inputs */}
            <div className="form-group">
              <label htmlFor="customerName" className="form-label">
                <User size={15} />
                <span>Your Name (Optional)</span>
              </label>
              <input 
                id="customerName"
                type="text" 
                className="form-input"
                placeholder="e.g. Ramesh Patel"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="deliveryAddress" className="form-label">
                <MapPin size={15} />
                <span>Delivery Address & Pincode (Optional)</span>
              </label>
              <textarea 
                id="deliveryAddress"
                rows="2"
                className="form-textarea"
                placeholder="e.g. Flat 402, Green Acre Apts, FC Road, Pune - 411005"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="notes" className="form-label">
                <FileText size={15} />
                <span>Special Notes or Instructions (Optional)</span>
              </label>
              <input 
                id="notes"
                type="text" 
                className="form-input"
                placeholder="e.g. Please check availability for next-day dispatch"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Trust and Process Steps */}
            <div className="whatsapp-process-steps">
              <div className="process-step">
                <div className="step-num">1</div>
                <span>Pre-fills enquiry message with your selected items</span>
              </div>
              <div className="process-step">
                <div className="step-num">2</div>
                <span>Our team confirms stock availability & delivery charges</span>
              </div>
              <div className="process-step">
                <div className="step-num">3</div>
                <span>Dispatch arranged upon your final confirmation</span>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button 
              type="submit" 
              className="btn btn-whatsapp btn-lg submit-whatsapp-btn"
            >
              <MessageCircle size={20} />
              <span>Send Order Enquiry on WhatsApp</span>
            </button>
            <p className="footer-disclaimer">
              <ShieldCheck size={14} className="shield-icon" />
              <span>Your message will open directly in your WhatsApp app or WhatsApp Web. No automated charges will be made.</span>
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}
