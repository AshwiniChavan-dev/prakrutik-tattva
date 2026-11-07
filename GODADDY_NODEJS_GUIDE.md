# How to Host Prakrutik Tattva on GoDaddy Node.js Hosting

Yes! **It is 100% possible and very easy** to host your Prakrutik Tattva website on GoDaddy's Node.js hosting plan.

We have already configured your project with a production-ready Node.js server (`server.js`) and added the `start` script to `package.json`.

---

## What Files Need to Be Uploaded to GoDaddy?

You do **NOT** need to upload your entire source code (like `node_modules` or `src`). You only need these **4 items**:

1. **`dist/`** folder (contains the compiled website files, CSS, JS, and images)
2. **`server.js`** (the production Node.js server)
3. **`package.json`** (defines dependencies and start script)
4. **`package-lock.json`**

---

## Step-by-Step Guide for GoDaddy cPanel Node.js Hosting

GoDaddy cPanel uses **Phusion Passenger** (via the **"Setup Node.js App"** tool) to run Node.js applications. Follow these steps:

### Step 1: Generate the Latest Build Locally
In your project folder on your computer:
```powershell
npm run build
```
This updates the `dist` folder with the latest product catalog, prices, and sunflower oil bottle image.

### Step 2: Log into GoDaddy cPanel
1. Go to [godaddy.com](https://www.godaddy.com) and log into your account.
2. Go to **My Products** → click **Manage** next to your Web Hosting.
3. Click **cPanel Admin**.

### Step 3: Create the Node.js Application in cPanel
1. In cPanel, scroll down to the **Software** section.
2. Click on **Setup Node.js App**.
3. Click the **Create Application** button (top right).
4. Fill in the fields:
   * **Node.js version**: Choose `20.x` or `18.x` (recommended: latest LTS available).
   * **Application mode**: Select `Production`.
   * **Application root**: Enter a folder name, e.g., `prakrutik-tattva` (or `nodeapp`).
   * **Application URL**: Select your domain name (e.g. `prakrutiktattva.com`).
   * **Application startup file**: Enter `server.js`.
5. Click **Create** (top right).
   * cPanel will initialize the app and show you a command to enter the virtual environment.

### Step 4: Upload the Files to GoDaddy
1. Go back to the main cPanel dashboard and open **File Manager**.
2. Navigate to the folder you specified as **Application root** (e.g., `/home/username/prakrutik-tattva/`).
3. Delete the default dummy `app.js` or `server.js` created by cPanel if one was generated.
4. Upload:
   * `package.json`
   * `package-lock.json`
   * `server.js`
   * The entire `dist` folder (you can zip `dist` on your PC, upload it, and extract it inside the folder so you have a `dist/` subfolder).

### Step 5: Install Dependencies in cPanel
1. Return to **cPanel** → **Setup Node.js App**.
2. Click the edit (pencil) icon next to your application.
3. Scroll down and click the **Run NPM Install** button.
   * cPanel will install `express` automatically.
4. Click **Restart** (top right).

### Step 6: Test Your Live Website
Visit your domain in your browser:
* Your Prakrutik Tattva homepage should load instantly with your products, real sunflower oil bottle, and working WhatsApp order checkout!
* You can also visit `https://yourdomain.com/api/health` to verify that the Node.js server responds with:
  ```json
  {"status":"ok","brand":"Prakrutik Tattva","mode":"production"}
  ```

---

## Alternative: Do You Even Need Node.js Running 24/7 on GoDaddy?

Here is a helpful tip:
Because this website is compiled into pure high-speed HTML, CSS, JavaScript, and images in the `dist` folder:

* **Method A (Node.js Server)**: Follow the steps above using `server.js`. Best if you specifically want to run Node.js or plan to add server-side APIs/databases later.
* **Method B (Direct Static Upload)**: You can also simply upload the contents of the `dist` folder directly into your cPanel `public_html` directory without creating a Node.js app! Apache will serve the site instantly with zero memory overhead.

Both methods work on your GoDaddy plan. Option A gives you the full Node.js runtime you asked for!
