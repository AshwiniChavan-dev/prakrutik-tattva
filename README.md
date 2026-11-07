# Prakrutik Tattva - Natural Food Brand E-Commerce Website

A premium, functional, and responsive e-commerce web application designed for **Prakrutik Tattva** — an authentic Indian natural food brand offering cold-pressed edible oils, wholesome seeds, delicious dry fruits, aromatic spices, and traditional dry fruits laddoo.

---

## 🌟 Key Features

* **Brand Aesthetics & Color Palette**:
  - Forest Green (`#234D35`) & Olive Green (`#71865B`)
  - Cream (`#FFF9ED`) & Warm Beige (`#E9DCC5`)
  - Golden Yellow (`#D5A642`) & Dark Text (`#292B25`)
  - Premium editorial typography (*Playfair Display* & *Plus Jakarta Sans*)
* **Strict Authenticity & Claim Compliance**:
  - Zero medical claims or unsupported health assertions.
  - Zero unverified organic or chemical-free certificates.
  - Configurable pricing with automatic *"Price on request"* badges and WhatsApp quotation workflows.
* **4 Core Visual Collections**:
  - **Cold-Pressed Oils**: Groundnut, Sunflower, Safflower, Mustard, Sesame, and Coconut oils.
  - **Seeds & Dry Fruits**: Almonds, Cashews, Pistachios, Walnuts, Raisins, Dates, Pumpkin Seeds, Sunflower Seeds, Chia Seeds, Flax Seeds, Sesame Seeds.
  - **Turmeric Powder & Spices**: Bright golden-yellow turmeric powder, red chilli powder, coriander powder, cumin seeds, black pepper.
  - **Dry Fruits Laddoo**: Handcrafted traditional dry fruits laddoo with editable pack sizes and storage instructions.
* **Full-Featured E-Commerce Shopping Cart**:
  - Pack size selector with dynamic unit pricing.
  - Quantity counter (`-` `qty` `+`).
  - Slide-in Cart Drawer with LocalStorage persistence.
  - Subtotal calculator with explicit warning for unpriced items.
* **Direct WhatsApp Ordering Engine**:
  - Configurable business number: `src/config/siteConfig.js`.
  - Auto-formatted multi-product order enquiry template with URL encoding.
  - Individual product card direct WhatsApp enquiry button.
  - Floating WhatsApp action button (positioned safe from mobile navigation bars).
* **Search & Filter Suite**:
  - Instant real-time keyword search.
  - Category selector tabs and subcategory pills.
  - Price and name sorting with friendly empty states.
* **100% Static & Free Hosting Compatible**:
  - Zero backend or database required.
  - Deployable for free on Netlify, Vercel, or GitHub Pages.
  - Ready for GoDaddy cPanel static hosting.

---

## 🚀 Quick Start Guide

### 1. Install & Run Locally
```bash
# Navigate to project folder
cd prakrutik-tattva

# Run development server
npm run dev
```

### 2. Build for Production
```bash
npm run build
```
The optimized website will be generated in the `dist` folder.

---

## 📂 Configuration & Editing

* **Update WhatsApp Number & Contact Details**:
  Edit `src/config/siteConfig.js`
* **Update Products, Prices & Pack Sizes**:
  Edit `src/data/products.js`
* **Replace Product Images**:
  Add photos to `public/assets/images/`
* **Free Hosting Instructions**:
  Refer to [`FREE_HOSTING_GUIDE.md`](./FREE_HOSTING_GUIDE.md)
* **GoDaddy Deployment Instructions**:
  Refer to [`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md)
