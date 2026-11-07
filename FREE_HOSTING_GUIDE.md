# Free Hosting Guide for Prakrutik Tattva

Your website is a **100% static, fast, pure client-side application**. This means you can host it **completely free of cost with free SSL (https://), custom domain support, and unlimited fast global CDN delivery** without ever paying for a hosting server or database!

---

## Recommended Free Hosting Platforms

Here are the 3 easiest and best free platforms:

| Platform | Deployment Method | Free Custom Domain? | Free SSL? | Deployment Speed |
| :--- | :--- | :---: | :---: | :---: |
| **Netlify** (Easiest) | Drag-and-drop the `dist` folder directly in your browser | Yes | Yes | Under 30 seconds |
| **Vercel** (Popular) | Connect your GitHub repository or use Vercel CLI | Yes | Yes | Under 1 minute |
| **GitHub Pages** | Push code to GitHub repository | Yes | Yes | Free forever |

---

## Method 1: Netlify Drag-and-Drop (Zero Terminal / 30 Seconds)

This is the fastest method to get your website live on the internet right now without running any complex commands:

1. **Build the production files**:
   Open terminal inside the `prakrutik-tattva` folder and run:
   ```bash
   npm run build
   ```
   This generates a folder named `dist`.

2. **Open Netlify Drop**:
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
   - Sign up for a free Netlify account (using your Google or email account).

3. **Deploy**:
   - Open File Explorer to `prakrutik-tattva`.
   - Drag the `dist` folder and drop it into the box on the Netlify web page.
   - Netlify will immediately upload your files and give you a live URL like:
     `https://prakrutik-tattva-xyz.netlify.app`.

4. **Add Custom Domain (Optional)**:
   - In Netlify, go to **Site settings > Domain management**.
   - Click **Add a domain** (e.g. `prakrutiktattva.com`).
   - Follow Netlify's simple DNS instructions to point your domain name there for free.

---

## Method 2: Vercel (Recommended for Continuous Updates)

1. Create a free account at [https://vercel.com](https://vercel.com).
2. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial Prakrutik Tattva website"
   git remote add origin https://github.com/your-username/prakrutik-tattva.git
   git push -u origin main
   ```
3. In Vercel, click **Add New > Project** and select your GitHub repository.
4. Click **Deploy**. Vercel will automatically build and publish your site with a free URL like:
   `https://prakrutik-tattva.vercel.app`.
5. Whenever you edit product details or prices and commit changes to GitHub, Vercel will automatically re-deploy your live website within seconds!

---

## Method 3: GitHub Pages

1. Push your project to GitHub.
2. In your GitHub repository, go to **Settings > Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. GitHub will automatically build and publish your Vite application to `https://your-username.github.io/prakrutik-tattva/`.

---

## Testing Your Live Free Website

Once deployed:
1. Verify all 4 category cards navigate to the respective product sections.
2. Test product search by typing *"Mustard"*, *"Almonds"*, *"Turmeric"*, or *"Laddoo"*.
3. Add items with different pack sizes to the cart and verify that quantities and subtotals compute accurately.
4. Click **Proceed to WhatsApp Checkout** and ensure WhatsApp opens with the pre-filled enquiry message!
