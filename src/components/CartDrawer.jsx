import React from "react";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  AlertCircle, 
  MessageCircle 
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/whatsapp";

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    totalItemsCount,
    pricedSubtotal,
    hasUnpricedItems,
    openCheckout
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-drawer-overlay" onClick={closeCart}>
      <div 
        className="cart-drawer" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Shopping Cart"
      >
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-header-title-box">
            <ShoppingBag size={22} className="cart-header-icon" />
            <h2 className="cart-header-title">Your Basket</h2>
            <span className="cart-item-count-badge">({totalItemsCount} items)</span>
          </div>
          <button 
            type="button" 
            className="cart-close-btn"
            onClick={closeCart}
            aria-label="Close Basket"
          >
            <X size={22} />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="cart-items-scroll">
          {cart.length > 0 ? (
            <div className="cart-items-list">
              {cart.map((item) => {
                const itemTotalPrice = item.price !== null && item.price !== undefined
                  ? item.price * item.quantity
                  : null;

                return (
                  <div key={item.id} className="cart-item-card">
                    <div className="cart-item-image-box">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="cart-item-img"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>

                    <div className="cart-item-info">
                      <div className="cart-item-top-row">
                        <h4 className="cart-item-name">{item.name}</h4>
                        <button 
                          type="button"
                          className="cart-item-remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="cart-item-pack-size">
                        <span>Pack: <strong>{item.packSize}</strong></span>
                        {item.price !== null ? (
                          <span className="cart-item-unit-price">({formatCurrency(item.price)} each)</span>
                        ) : (
                          <span className="cart-item-unpriced-tag">Price on confirmation</span>
                        )}
                      </div>

                      <div className="cart-item-bottom-row">
                        {/* Quantity Counter */}
                        <div className="cart-qty-counter">
                          <button 
                            type="button"
                            className="cart-qty-btn"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="cart-qty-num">{item.quantity}</span>
                          <button 
                            type="button"
                            className="cart-qty-btn"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        {/* Price Calculation */}
                        <div className="cart-item-total-price">
                          {itemTotalPrice !== null ? (
                            formatCurrency(itemTotalPrice)
                          ) : (
                            <span className="unpriced-note">Price on request</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="cart-empty-state">
              <ShoppingBag size={56} className="empty-cart-icon" />
              <h3>Your basket is empty</h3>
              <p>Explore our cold-pressed oils, seeds, dry fruits, spices, and dry fruits laddoo.</p>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={closeCart}
              >
                Start Browsing
              </button>
            </div>
          )}
        </div>

        {/* Cart Footer & WhatsApp Checkout */}
        {cart.length > 0 && (
          <div className="cart-footer">
            
            {/* Unpriced Items Advisory Banner */}
            {hasUnpricedItems && (
              <div className="cart-unpriced-alert">
                <AlertCircle size={17} className="alert-icon" />
                <p>
                  Some items in your basket have <strong>"Price on request"</strong>. Their exact pricing and availability will be confirmed directly on WhatsApp before your order is finalized.
                </p>
              </div>
            )}

            {/* Subtotal summary */}
            <div className="cart-subtotal-row">
              <div className="subtotal-label-box">
                <span className="subtotal-title">Subtotal</span>
                {hasUnpricedItems && (
                  <span className="subtotal-annotation">(Configured items only)</span>
                )}
              </div>
              <div className="subtotal-value">
                {pricedSubtotal > 0 ? (
                  formatCurrency(pricedSubtotal)
                ) : (
                  <span className="to-be-confirmed-text">To be confirmed</span>
                )}
              </div>
            </div>

            <p className="cart-delivery-note">
              Delivery charges and delivery schedule will be verified with you on WhatsApp.
            </p>

            {/* Action Buttons */}
            <div className="cart-footer-actions">
              <button 
                type="button" 
                className="btn btn-whatsapp btn-lg cart-checkout-btn"
                onClick={openCheckout}
              >
                <MessageCircle size={19} />
                <span>Proceed to WhatsApp Checkout</span>
                <ArrowRight size={17} />
              </button>

              <div className="cart-secondary-actions">
                <button 
                  type="button" 
                  className="continue-shopping-link"
                  onClick={closeCart}
                >
                  Continue Shopping
                </button>
                <button 
                  type="button" 
                  className="clear-basket-link"
                  onClick={clearCart}
                >
                  Clear Basket
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
