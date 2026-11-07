# GoDaddy & Production Deployment Guide: Prakrutik Tattva

This guide explains how to maintain, update, test, and deploy the **Prakrutik Tattva** website on standard hosting services like GoDaddy, Hostinger, cPanel, or any static web host.

---

## 1. How to Run the Website Locally

You can run the website on your computer in two ways:

### Option A: Using Vite (Development Mode with Live Reload)
1. Open PowerShell or Command Prompt.
2. Navigate to the project directory:
   ```powershell
   cd C:\Users\chava\.gemini\antigravity\scratch\prakrutik-tattva
   ```
3. Run the development server:
   ```powershell
   npm run dev
   ```
4. Open the provided local URL (typically `http://localhost:5173`) in your web browser.

### Option B: Using Python (Instant Zero-Build Preview)
Because Python is installed on your machine, you can test the production build (`dist/`) directly:
```powershell
cd C:\Users\chava\.gemini\antigravity\scratch\prakrutik-tattva\dist
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

---

## 2. How to Edit Product Information

All product information is stored in a single, well-commented file:
`src/data/products.js`

To change or add a product:
1. Open `src/data/products.js` in your code editor.
2. Find the product entry you want to modify (e.g. `groundnut-oil`, `almonds`, `turmeric-powder`).
3. You can edit:
   - `name`: Display name of the product
   - `tagline`: Short highlight subtitle
   - `description`: Informative product summary
   - `details`: Ingredients, packaging, storage recommendations, shelf life.

---

## 3. How to Change Prices and Pack Sizes

Inside `src/data/products.js`, each product has a `packSizes` array:

```javascript
packSizes: [
  { size: "500ml", price: 195 },
  { size: "1 Litre", price: 360 },
  { size: "5 Litre", price: 1720 }
]
```

- **To update an active price**: Simply change the number (e.g. `price: 380`).
- **To display "Price on request"**: Set `price: null`. The system will automatically label it with a *"Price on request"* badge, exclude it from automated subtotal calculations, and instruct the customer on WhatsApp that final pricing will be confirmed directly.
- **To add new pack sizes**: Add a new `{ size: "250ml", price: 110 }` object into the array.
- **To temporarily disable a product**: Set `isAvailable: false`. It will display as *"Coming Soon / Contact to pre-order"* and disable the Add to Basket button.

---

## 4. How to Replace Sample Images

1. Place your own real product photograph inside:
   `public/assets/images/`
2. Recommended image specifications:
   - Format: `.jpg` or `.webp`
   - Aspect ratio: 4:3 or square (approx. 800×600 or 800×800 pixels)
   - Consistent, clean background with natural lighting.
3. Keep the file name matching the product ID:
   - `groundnut-oil.jpg`
   - `sunflower-oil.jpg`
   - `safflower-oil.jpg`
   - `mustard-oil.jpg`
   - `sesame-oil.jpg`
   - `coconut-oil.jpg`
   - `almonds.jpg`
   - `cashews.jpg`
   - `pistachios.jpg`
   - `walnuts.jpg`
   - `raisins.jpg`
   - `dates.jpg`
   - `pumpkin-seeds.jpg`
   - `sunflower-seeds.jpg`
   - `chia-seeds.jpg`
   - `flax-seeds.jpg`
   - `sesame-seeds.jpg`
   - `turmeric-powder.jpg`
   - `red-chilli-powder.jpg`
   - `coriander-powder.jpg`
   - `cumin-seeds.jpg`
   - `black-pepper.jpg`
   - `dry-fruits-laddoo.jpg`
   - `hero-banner.jpg`
4. If you have an existing Prakrutik Tattva logo file, drop it as `public/assets/logo.svg` or `public/assets/logo.png`.

---

## 5. How to Add Your Real WhatsApp Number & Contact Details

All business contact information is managed in one central file:
`src/config/siteConfig.js`

1. Open `src/config/siteConfig.js`.
2. Locate:
   ```javascript
   whatsappNumber: "YOUR_WHATSAPP_NUMBER",
   ```
3. Replace `"YOUR_WHATSAPP_NUMBER"` with your international WhatsApp phone number without any `+`, spaces, or hyphens.
   - Example for India: `"919876543210"` (91 is country code followed by 10-digit mobile).
4. Update your phone number, email address, physical store/dispatch address, and Instagram URL in the same file.

---

## 6. How to Generate the Production Build

Whenever you make any changes to products, prices, or contact details, compile the website:
```powershell
npm run build
```
This generates the optimized, production-ready static assets in the `dist` directory:
- `dist/index.html`
- `dist/assets/` (combined CSS and JavaScript bundles)
- `dist/assets/images/` (all product photos)
- `dist/favicon.svg`

---

## 7. How to Upload Build Files to GoDaddy Hosting

### Via GoDaddy cPanel File Manager:
1. Log in to your **GoDaddy Account** and open **My Products**.
2. Click **Manage** next to your Web Hosting (cPanel).
3. Open **cPanel Admin** and launch **File Manager**.
4. In File Manager, double-click the `public_html` directory.
5. If there are default placeholder files (such as `default.html` or `hostingstart.html`), remove them or move them to a backup folder.
6. Open your local `prakrutik-tattva\dist` folder, select all files and subfolders inside `dist` (`index.html`, `favicon.svg`, `assets/`, etc.), and compress them into a `.zip` file (e.g. `website-build.zip`).
7. In cPanel File Manager, click **Upload**, select `website-build.zip`, and wait for the upload to complete.
8. Right-click `website-build.zip` inside `public_html` and click **Extract**.
9. Ensure that `index.html` is located directly in `public_html` (not inside a subfolder).

### Via FTP (FileZilla):
- Host: `ftp.yourdomain.com` (or your GoDaddy server IP)
- Username & Password: your cPanel FTP credentials
- Drag everything from local `dist` directly into the remote `/public_html/` folder.

---

## 8. How to Connect Your Domain Name

If your domain name is registered with GoDaddy:
1. Go to **GoDaddy DNS Management** for your domain.
2. Ensure the **A Record** points to your hosting server IP address:
   - Type: `A`
   - Name: `@`
   - Value: `[Your GoDaddy Hosting IP Address]`
   - TTL: `1 Hour` (or Default)
3. Ensure the **CNAME Record** points `www` to your root domain:
   - Type: `CNAME`
   - Name: `www`
   - Value: `@`
4. Enable **Free SSL** in cPanel (**AutoSSL** or **SSL/TLS Status**) so that your visitors see the secure padlock icon (`https://`).

---

## 9. Live Website Testing Checklist

Once published live, run through this verification checklist:
- [ ] Visit your live domain in a desktop browser and mobile browser.
- [ ] Confirm all navigation links work (Home, Shop All, Category filters, About Us, Contact).
- [ ] Test the 4 category cards on the homepage (Cold-Pressed Oils, Seeds & Dry Fruits, Turmeric & Spices, Dry Fruits Laddoo).
- [ ] Search for products (e.g. "Groundnut", "Mustard", "Turmeric", "Almonds", "Laddoo").
- [ ] Test pack size selector on a product card and verify dynamic price updates.
- [ ] Add items to the basket, open the cart drawer, increase/decrease quantities, and test item removal.
- [ ] Test the **Enquire on WhatsApp** button on an individual product card.
- [ ] Test the **Proceed to WhatsApp Checkout** button in the shopping cart and verify that your selected products, quantities, prices, and customer details are cleanly pre-filled into the WhatsApp message.
- [ ] Confirm the floating WhatsApp button opens WhatsApp chat smoothly on both mobile and desktop.
