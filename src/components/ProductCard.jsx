import React, { useState } from "react";
import { 
  ShoppingBag, 
  MessageCircle, 
  Plus, 
  Minus, 
  Check, 
  Info, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatCurrency, buildSingleProductWhatsAppUrl } from "../utils/whatsapp";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  // Selected pack size state
  const [selectedPackSize, setSelectedPackSize] = useState(() => {
    return product.defaultPackSize || product.packSizes[0]?.size || "";
  });

  // Selected quantity state
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Find active pack size config
  const currentPack = product.packSizes.find(p => p.size === selectedPackSize) || product.packSizes[0];
  const currentPrice = currentPack ? currentPack.price : null;

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (!product.isAvailable) return;
    addToCart(product, selectedPackSize, currentPrice, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const whatsappUrl = buildSingleProductWhatsAppUrl({
    product,
    packSize: selectedPackSize,
    price: currentPrice,
    quantity
  });

  return (
    <div className={`product-card ${!product.isAvailable ? "product-unavailable" : ""}`}>
      {/* Product Image Media */}
      <div className="product-media">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-img"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="product-img-fallback" style={{ display: 'none' }}>
          <span className="fallback-category">{product.subcategory || product.category}</span>
          <span className="fallback-name">{product.name}</span>
        </div>

        {product.featured && (
          <span className="product-featured-badge">Featured</span>
        )}

        {!product.isAvailable && (
          <div className="product-status-overlay">
            <span>Coming Soon</span>
          </div>
        )}
      </div>

      {/* Product Content Body */}
      <div className="product-body">
        
        <div className="product-header-row">
          <span className="product-subcat-tag">{product.subcategory || product.category}</span>
        </div>

        <h3 className="product-title">{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-desc">{product.description}</p>

        {/* Pack Size Selector */}
        <div className="pack-size-container">
          <label className="pack-size-label">Select Pack Size:</label>
          <div className="pack-size-options">
            {product.packSizes.map((pack) => (
              <button
                key={pack.size}
                type="button"
                className={`pack-size-btn ${selectedPackSize === pack.size ? "active" : ""}`}
                onClick={() => setSelectedPackSize(pack.size)}
              >
                <span>{pack.size}</span>
                {pack.price !== null && (
                  <span className="pack-price-hint">{formatCurrency(pack.price)}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Quantity Section */}
        <div className="price-and-qty-row">
          <div className="price-display">
            {currentPrice !== null ? (
              <>
                <span className="price-label">Price</span>
                <span className="price-amount">{formatCurrency(currentPrice)}</span>
              </>
            ) : (
              <div className="price-on-request-badge">
                <Info size={14} />
                <span>Price on request</span>
              </div>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="qty-selector" aria-label="Select Quantity">
            <button 
              type="button"
              className="qty-btn"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="qty-value">{quantity}</span>
            <button 
              type="button"
              className="qty-btn"
              onClick={() => handleQuantityChange(1)}
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>

        {/* Action Buttons: Add to Cart & Buy on WhatsApp */}
        <div className="product-actions-grid">
          <button 
            type="button"
            className={`btn ${isAdded ? "btn-added" : "btn-primary"} product-cart-btn`}
            onClick={handleAddToCart}
            disabled={!product.isAvailable}
          >
            {isAdded ? (
              <>
                <Check size={17} />
                <span>Added to Basket</span>
              </>
            ) : (
              <>
                <ShoppingBag size={17} />
                <span>{product.isAvailable ? "Add to Cart" : "Unavailable"}</span>
              </>
            )}
          </button>

          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-whatsapp-outline product-whatsapp-btn"
            title="Enquire directly on WhatsApp"
          >
            <MessageCircle size={16} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

        {/* Expandable Product Details (Storage, Packaging, Shelf Life) */}
        {product.details && (
          <div className="product-details-toggle-container">
            <button 
              type="button"
              className="details-toggle-btn"
              onClick={() => setShowDetails(!showDetails)}
            >
              <span>Product & Storage Information</span>
              {showDetails ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>

            {showDetails && (
              <div className="product-details-content">
                {product.details.ingredients && (
                  <p><strong>Ingredients:</strong> {product.details.ingredients}</p>
                )}
                {product.details.packaging && (
                  <p><strong>Packaging:</strong> {product.details.packaging}</p>
                )}
                {product.details.storage && (
                  <p><strong>Storage:</strong> {product.details.storage}</p>
                )}
                {product.details.shelfLife && (
                  <p><strong>Shelf Life:</strong> {product.details.shelfLife}</p>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
