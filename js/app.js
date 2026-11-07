/**
 * Prakrutik Tattva - Application Logic & State Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    activePage: 'home',
    activeCategory: 'all',
    activeSort: 'popular',
    searchQuery: '',
    selectedVolumes: {}, // { productId: '500ml' }
    cart: JSON.parse(localStorage.getItem('pt_cart')) || [],
    appliedCoupon: null,
    discountAmount: 0
  };

  // Initialize Product Default Volumes
  APP_DATA.products.forEach(p => {
    state.selectedVolumes[p.id] = p.defaultVolume;
  });

  /* ==========================================================================
     DOM Element References
     ========================================================================== */
  const elements = {
    navLinks: document.querySelectorAll('.nav-link'),
    mobileNavToggle: document.getElementById('mobileNavToggle'),
    mobileMenu: document.getElementById('mobileMenu'),
    cartBtn: document.getElementById('cartBtn'),
    cartBadge: document.getElementById('cartBadge'),
    cartDrawerOverlay: document.getElementById('cartDrawerOverlay'),
    closeCartBtn: document.getElementById('closeCartBtn'),
    cartItemsBody: document.getElementById('cartItemsBody'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartDiscount: document.getElementById('cartDiscount'),
    cartFinalTotal: document.getElementById('cartFinalTotal'),
    shippingMsg: document.getElementById('shippingMsg'),
    shippingProgressFill: document.getElementById('shippingProgressFill'),
    couponInput: document.getElementById('couponInput'),
    applyCouponBtn: document.getElementById('applyCouponBtn'),
    couponMessage: document.getElementById('couponMessage'),
    checkoutBtn: document.getElementById('checkoutBtn'),

    // Products
    productsGrid: document.getElementById('productsGrid'),
    categoryTabs: document.getElementById('categoryTabs'),
    searchInput: document.getElementById('searchInput'),
    sortSelect: document.getElementById('sortSelect'),

    // Modals
    quickViewModal: document.getElementById('quickViewModal'),
    quickViewContent: document.getElementById('quickViewContent'),
    closeQuickViewBtn: document.getElementById('closeQuickViewBtn'),
    checkoutModal: document.getElementById('checkoutModal'),
    checkoutForm: document.getElementById('checkoutForm'),
    closeCheckoutBtn: document.getElementById('closeCheckoutBtn'),
    orderReceiptModal: document.getElementById('orderReceiptModal'),
    receiptContent: document.getElementById('receiptContent'),
    closeReceiptBtn: document.getElementById('closeReceiptBtn'),

    // Reviews & Contact
    reviewsGrid: document.getElementById('reviewsGrid'),
    addReviewBtn: document.getElementById('addReviewBtn'),
    reviewModal: document.getElementById('reviewModal'),
    reviewForm: document.getElementById('reviewForm'),
    contactForm: document.getElementById('contactForm'),
    faqAccordion: document.getElementById('faqAccordion'),

    // Quiz
    quizBox: document.getElementById('quizBox'),

    // Sections
    pages: document.querySelectorAll('.page-section')
  };

  /* ==========================================================================
     Navigation Router
     ========================================================================== */
  function navigateTo(pageId) {
    state.activePage = pageId;
    elements.pages.forEach(sec => {
      if (sec.id === pageId + '-page') {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });

    elements.navLinks.forEach(link => {
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = link.dataset.page;
      navigateTo(targetPage);
      if (elements.mobileMenu) elements.mobileMenu.style.display = 'none';
    });
  });

  if (elements.mobileNavToggle) {
    elements.mobileNavToggle.addEventListener('click', () => {
      if (elements.mobileMenu.style.display === 'flex') {
        elements.mobileMenu.style.display = 'none';
      } else {
        elements.mobileMenu.style.display = 'flex';
      }
    });
  }

  /* ==========================================================================
     Products Renderer & Filters
     ========================================================================== */
  function getFilteredProducts() {
    return APP_DATA.products.filter(p => {
      const matchCat = state.activeCategory === 'all' || p.category === state.activeCategory;
      const matchSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          p.tagline.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          p.shortDesc.toLowerCase().includes(state.searchQuery.toLowerCase());
      return matchCat && matchSearch;
    }).sort((a, b) => {
      const volA = state.selectedVolumes[a.id] || a.defaultVolume;
      const volB = state.selectedVolumes[b.id] || b.defaultVolume;
      const priceA = a.priceMap[volA];
      const priceB = b.priceMap[volB];

      if (state.activeSort === 'price-low') return priceA - priceB;
      if (state.activeSort === 'price-high') return priceB - priceA;
      if (state.activeSort === 'rating') return b.rating - a.rating;
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }

  function renderCategoryTabs() {
    if (!elements.categoryTabs) return;
    elements.categoryTabs.innerHTML = APP_DATA.categories.map(cat => `
      <button class="cat-tab ${state.activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.icon} ${cat.name}
      </button>
    `).join('');

    elements.categoryTabs.querySelectorAll('.cat-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeCategory = btn.dataset.cat;
        renderCategoryTabs();
        renderProducts();
      });
    });
  }

  function renderProducts() {
    if (!elements.productsGrid) return;
    const products = getFilteredProducts();

    if (products.length === 0) {
      elements.productsGrid.innerHTML = `
        <div class="text-center" style="grid-column: 1/-1; padding: 3rem 0;">
          <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🍃 No oils matched your search.</p>
          <p style="color: var(--text-muted);">Try clearing your search filters or select a different category.</p>
        </div>
      `;
      return;
    }

    elements.productsGrid.innerHTML = products.map(product => {
      const currentVol = state.selectedVolumes[product.id] || product.defaultVolume;
      const currentPrice = product.priceMap[currentVol];
      const mrpPrice = Math.round(currentPrice * 1.2);

      return `
        <div class="product-card" data-id="${product.id}">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
          <div class="product-image-box">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <div class="quick-view-overlay">
              <button class="quick-view-btn" onclick="openQuickView('${product.id}')">🔍 Quick View</button>
            </div>
          </div>
          <div class="product-info">
            <div class="product-meta">
              <div class="rating-box">
                ★ <span>${product.rating}</span> (${product.reviewsCount})
              </div>
              <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary);">100% Wood Pressed</span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-tagline">${product.shortDesc}</p>
            
            <!-- Volume Selector -->
            <div class="volume-selector">
              ${product.volumes.map(vol => `
                <button class="vol-btn ${vol === currentVol ? 'active' : ''}" onclick="selectVolume('${product.id}', '${vol}')">${vol}</button>
              `).join('')}
            </div>

            <div class="product-card-footer">
              <div class="price-box">
                <span class="price-current">₹${currentPrice}</span>
                <span class="price-mrp">₹${mrpPrice}</span>
              </div>
              <button class="add-cart-btn" onclick="addToCart('${product.id}')">
                <span>🛒</span> Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Global functions exposed for inline onclick handlers
  window.selectVolume = function(productId, volume) {
    state.selectedVolumes[productId] = volume;
    renderProducts();
  };

  window.addToCart = function(productId, customVol = null) {
    const product = APP_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const volume = customVol || state.selectedVolumes[productId] || product.defaultVolume;
    const price = product.priceMap[volume];

    const existingIndex = state.cart.findIndex(item => item.id === productId && item.volume === volume);

    if (existingIndex > -1) {
      state.cart[existingIndex].qty += 1;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        volume: volume,
        price: price,
        qty: 1
      });
    }

    saveCart();
    updateCartDrawer();
    openCartDrawer();
    showToast(`Added ${product.name} (${volume}) to your cart! 🌿`);
  };

  /* ==========================================================================
     Cart & Checkout Logic
     ========================================================================== */
  function saveCart() {
    localStorage.setItem('pt_cart', JSON.stringify(state.cart));
    updateCartBadge();
  }

  function updateCartBadge() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    if (elements.cartBadge) {
      elements.cartBadge.textContent = totalCount;
    }
  }

  function updateCartDrawer() {
    if (!elements.cartItemsBody) return;

    if (state.cart.length === 0) {
      elements.cartItemsBody.innerHTML = `
        <div class="text-center" style="padding: 3rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🛍️</div>
          <h4 style="margin-bottom: 0.5rem;">Your Cart is Empty</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Add some 100% natural cold-pressed oils to get started!</p>
          <button class="btn btn-primary" onclick="closeCartDrawer(); navigateTo('products');">Explore Products</button>
        </div>
      `;
      elements.cartSubtotal.textContent = '₹0';
      elements.cartDiscount.textContent = '₹0';
      elements.cartFinalTotal.textContent = '₹0';
      elements.shippingProgressFill.style.width = '0%';
      elements.shippingMsg.textContent = 'Add items worth ₹499 for FREE Shipping!';
      return;
    }

    elements.cartItemsBody.innerHTML = state.cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-vol">Size: ${item.volume}</div>
          <div class="cart-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
        </div>
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
        </div>
        <button onclick="removeFromCart(${index})" style="color: var(--error); font-size: 1.1rem; margin-left: 0.5rem;">🗑️</button>
      </div>
    `).join('');

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Shipping progress logic
    const freeShippingLimit = 499;
    if (subtotal >= freeShippingLimit) {
      elements.shippingProgressFill.style.width = '100%';
      elements.shippingMsg.textContent = '🎉 You unlocked FREE Express Shipping!';
    } else {
      const remaining = freeShippingLimit - subtotal;
      const progressPercent = (subtotal / freeShippingLimit) * 100;
      elements.shippingProgressFill.style.width = `${progressPercent}%`;
      elements.shippingMsg.textContent = `Add ₹${remaining} more for FREE Express Shipping!`;
    }

    // Coupon discount calculation
    let discount = 0;
    if (state.appliedCoupon) {
      const couponObj = APP_DATA.coupons[state.appliedCoupon];
      if (couponObj) {
        if (couponObj.type === 'percent') {
          discount = Math.round((subtotal * couponObj.discount) / 100);
        } else if (couponObj.type === 'flat') {
          discount = couponObj.discount;
        }
      }
    }

    const finalTotal = Math.max(0, subtotal - discount);

    elements.cartSubtotal.textContent = `₹${subtotal}`;
    elements.cartDiscount.textContent = discount > 0 ? `-₹${discount}` : '₹0';
    elements.cartFinalTotal.textContent = `₹${finalTotal}`;
  }

  window.updateQty = function(index, change) {
    state.cart[index].qty += change;
    if (state.cart[index].qty <= 0) {
      state.cart.splice(index, 1);
    }
    saveCart();
    updateCartDrawer();
  };

  window.removeFromCart = function(index) {
    state.cart.splice(index, 1);
    saveCart();
    updateCartDrawer();
  };

  function openCartDrawer() {
    elements.cartDrawerOverlay.classList.add('open');
  }

  window.closeCartDrawer = function() {
    elements.cartDrawerOverlay.classList.remove('open');
  };

  if (elements.cartBtn) elements.cartBtn.addEventListener('click', openCartDrawer);
  if (elements.closeCartBtn) elements.closeCartBtn.addEventListener('click', closeCartDrawer);
  if (elements.cartDrawerOverlay) {
    elements.cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === elements.cartDrawerOverlay) closeCartDrawer();
    });
  }

  // Coupon Application
  if (elements.applyCouponBtn) {
    elements.applyCouponBtn.addEventListener('click', () => {
      const code = elements.couponInput.value.trim().toUpperCase();
      if (!code) return;

      if (APP_DATA.coupons[code]) {
        state.appliedCoupon = code;
        elements.couponMessage.style.color = 'var(--success)';
        elements.couponMessage.textContent = `✅ Coupon '${code}' applied successfully! (${APP_DATA.coupons[code].label})`;
        updateCartDrawer();
      } else {
        elements.couponMessage.style.color = 'var(--error)';
        elements.couponMessage.textContent = '❌ Invalid Coupon Code. Try PURE10';
      }
    });
  }

  /* ==========================================================================
     Quick View Modal
     ========================================================================== */
  window.openQuickView = function(productId) {
    const product = APP_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const currentVol = state.selectedVolumes[product.id] || product.defaultVolume;
    const currentPrice = product.priceMap[currentVol];

    elements.quickViewContent.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: flex-start;">
        <div>
          <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md);" />
        </div>
        <div>
          <span style="background: var(--primary-subtle); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.8rem;">
            100% Wood-Pressed
          </span>
          <h2 style="margin: 0.75rem 0 0.5rem 0; font-size: 1.6rem;">${product.name}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">${product.fullDesc}</p>
          
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary-dark); margin-bottom: 1.25rem;">
            ₹${currentPrice} <span style="font-size: 0.9rem; color: var(--text-light); text-decoration: line-through;">₹${Math.round(currentPrice * 1.2)}</span>
          </div>

          <!-- Key Benefits -->
          <h4 style="margin-bottom: 0.5rem;">Key Benefits:</h4>
          <ul style="margin-bottom: 1.5rem; padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-muted);">
            ${product.benefits.map(b => `<li style="margin-bottom: 0.3rem;">${b}</li>`).join('')}
          </ul>

          <button class="btn btn-accent" style="width: 100%;" onclick="addToCart('${product.id}'); closeQuickView();">
            🛒 Add to Cart Now
          </button>
        </div>
      </div>
    `;

    elements.quickViewModal.classList.add('open');
  };

  window.closeQuickView = function() {
    elements.quickViewModal.classList.remove('open');
  };

  if (elements.closeQuickViewBtn) elements.closeQuickViewBtn.addEventListener('click', closeQuickView);

  /* ==========================================================================
     Checkout Process
     ========================================================================== */
  if (elements.checkoutBtn) {
    elements.checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your cart is empty!', 'warning');
        return;
      }
      closeCartDrawer();
      elements.checkoutModal.classList.add('open');
    });
  }

  if (elements.closeCheckoutBtn) {
    elements.closeCheckoutBtn.addEventListener('click', () => {
      elements.checkoutModal.classList.remove('open');
    });
  }

  if (elements.checkoutForm) {
    elements.checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(elements.checkoutForm);
      const orderId = 'PT-' + Math.floor(100000 + Math.random() * 900000);

      const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      let discount = 0;
      if (state.appliedCoupon) {
        const couponObj = APP_DATA.coupons[state.appliedCoupon];
        if (couponObj) {
          discount = couponObj.type === 'percent' ? Math.round((subtotal * couponObj.discount) / 100) : couponObj.discount;
        }
      }
      const totalAmount = Math.max(0, subtotal - discount);

      elements.checkoutModal.classList.remove('open');

      // Generate Receipt
      elements.receiptContent.innerHTML = `
        <div class="text-center" style="margin-bottom: 1.5rem;">
          <div style="font-size: 3rem;">🎉</div>
          <h3 style="color: var(--primary-dark); font-size: 1.75rem;">Order Confirmed!</h3>
          <p style="color: var(--text-muted);">Thank you for choosing Prakrutik Tattva purity.</p>
          <div style="display: inline-block; background: var(--primary-subtle); color: var(--primary-dark); font-weight: 800; padding: 0.4rem 1rem; border-radius: var(--radius-full); margin-top: 0.5rem;">
            Order ID: #${orderId}
          </div>
        </div>

        <div style="background: var(--surface-alt); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.9rem;">
          <p><strong>Customer Name:</strong> ${formData.get('fullName')}</p>
          <p><strong>Phone:</strong> ${formData.get('phone')}</p>
          <p><strong>Delivery Address:</strong> ${formData.get('address')}, ${formData.get('city')}</p>
          <p><strong>Payment Mode:</strong> ${formData.get('paymentMode')}</p>
        </div>

        <h4>Order Summary:</h4>
        <div style="margin-bottom: 1.5rem;">
          ${state.cart.map(item => `
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; padding: 0.4rem 0; border-bottom: 1px dashed var(--border-light);">
              <span>${item.name} (${item.volume}) × ${item.qty}</span>
              <strong>₹${item.price * item.qty}</strong>
            </div>
          `).join('')}
          <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; margin-top: 0.75rem; color: var(--primary-dark);">
            <span>Total Paid:</span>
            <span>₹${totalAmount}</span>
          </div>
        </div>

        <button class="btn btn-primary" style="width: 100%;" onclick="window.print()">🖨️ Print Order Receipt</button>
      `;

      elements.orderReceiptModal.classList.add('open');

      // Reset Cart
      state.cart = [];
      state.appliedCoupon = null;
      saveCart();
      updateCartDrawer();
    });
  }

  if (elements.closeReceiptBtn) {
    elements.closeReceiptBtn.addEventListener('click', () => {
      elements.orderReceiptModal.classList.remove('open');
      navigateTo('home');
    });
  }

  /* ==========================================================================
     Reviews & FAQ Renderers
     ========================================================================== */
  function renderReviews() {
    if (!elements.reviewsGrid) return;
    elements.reviewsGrid.innerHTML = APP_DATA.reviews.map(rev => `
      <div class="review-card">
        <div class="review-header">
          <div class="review-author">
            <h4>${rev.author}</h4>
            <span>📍 ${rev.city} • Verified Buyer</span>
          </div>
          <div style="color: #f59e0b; font-size: 1rem;">★★★★★</div>
        </div>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary);">Product: ${rev.product}</span>
        <p class="review-comment">"${rev.comment}"</p>
      </div>
    `).join('');
  }

  if (elements.addReviewBtn) {
    elements.addReviewBtn.addEventListener('click', () => {
      elements.reviewModal.classList.add('open');
    });
  }

  if (elements.reviewForm) {
    elements.reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(elements.reviewForm);
      APP_DATA.reviews.unshift({
        id: 'rev-' + Date.now(),
        author: formData.get('reviewerName'),
        city: formData.get('reviewerCity') || 'India',
        rating: parseInt(formData.get('reviewerRating')),
        date: new Date().toISOString().split('T')[0],
        verified: true,
        product: formData.get('reviewerProduct'),
        comment: formData.get('reviewerComment')
      });
      renderReviews();
      elements.reviewModal.classList.remove('open');
      showToast('Thank you! Your review has been published. 🌟');
    });
  }

  function renderFAQs() {
    if (!elements.faqAccordion) return;
    elements.faqAccordion.innerHTML = APP_DATA.faqs.map((faq, i) => `
      <div style="background: var(--surface); border: 1px solid var(--border-light); border-radius: var(--radius-md); margin-bottom: 0.75rem; overflow: hidden;">
        <button style="width: 100%; text-align: left; padding: 1.25rem; font-weight: 700; font-size: 1.05rem; color: var(--primary-dark); display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(${i})">
          <span>${faq.q}</span>
          <span id="faq-icon-${i}">➕</span>
        </button>
        <div id="faq-ans-${i}" style="display: none; padding: 0 1.25rem 1.25rem 1.25rem; color: var(--text-muted); font-size: 0.95rem; border-top: 1px solid var(--border-light);">
          ${faq.a}
        </div>
      </div>
    `).join('');
  }

  window.toggleFAQ = function(index) {
    const ans = document.getElementById(`faq-ans-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    if (ans.style.display === 'block') {
      ans.style.display = 'none';
      icon.textContent = '➕';
    } else {
      ans.style.display = 'block';
      icon.textContent = '➖';
    }
  };

  /* ==========================================================================
     Oil Quiz Handler
     ========================================================================== */
  window.startOilQuiz = function(goal) {
    let rec = APP_DATA.products[0];
    if (goal === 'cooking') rec = APP_DATA.products.find(p => p.id === 'mustard-oil');
    if (goal === 'skin') rec = APP_DATA.products.find(p => p.id === 'almond-oil');
    if (goal === 'hair') rec = APP_DATA.products.find(p => p.id === 'coconut-oil');
    if (goal === 'ayurveda') rec = APP_DATA.products.find(p => p.id === 'sesame-oil');

    if (elements.quizBox) {
      elements.quizBox.innerHTML = `
        <div style="max-width: 500px; margin: 0 auto; background: var(--surface); color: var(--text-main); padding: 2rem; border-radius: var(--radius-lg);">
          <span style="background: var(--primary-subtle); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-weight: 800; font-size: 0.8rem;">
            Recommended Oil Match
          </span>
          <h3 style="margin: 0.75rem 0; color: var(--primary-dark); font-size: 1.5rem;">${rec.name}</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">${rec.shortDesc}</p>
          <button class="btn btn-accent" style="width: 100%;" onclick="addToCart('${rec.id}')">🛒 Add Recommended Oil to Cart</button>
        </div>
      `;
    }
  };

  /* ==========================================================================
     Toast Notifications
     ========================================================================== */
  function showToast(msg) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = msg;
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3500);
  }
  window.showToast = showToast;
  window.navigateTo = navigateTo;

  // Search & Sort Event Listeners
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  if (elements.sortSelect) {
    elements.sortSelect.addEventListener('change', (e) => {
      state.activeSort = e.target.value;
      renderProducts();
    });
  }

  // Initial Boot
  renderCategoryTabs();
  renderProducts();
  renderReviews();
  renderFAQs();
  updateCartBadge();
  updateCartDrawer();
});
