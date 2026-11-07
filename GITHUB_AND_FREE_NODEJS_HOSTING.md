# Guide: Push to GitHub & Deploy on Free Node.js Hosting

This guide explains how to push your **Prakrutik Tattva** codebase to GitHub and test it on a **100% free Node.js hosting platform (Render.com)** before deploying to GoDaddy.

---

## Part 1: Push Your Code to GitHub (3 Simple Steps)

Your local repository is already initialized and committed. Now follow these steps:

### Step 1: Create a New Empty Repository on GitHub
1. Go to [github.com](https://github.com) and log in.
2. Click the **"+"** icon in the top right corner → click **New repository**.
3. Name your repository: `prakrutik-tattva` (or any name you prefer).
4. Leave it as **Public** (or **Private**).
5. **IMPORTANT**: Do NOT check "Add a README", ".gitignore", or "license" (we already created them locally).
6. Click **Create repository**.

### Step 2: Push Your Code from PowerShell
Copy and run these two commands in PowerShell (replace `YOUR_GITHUB_USERNAME` with your actual GitHub username):

```powershell
cd C:\Users\chava\.gemini\antigravity\scratch\prakrutik-tattva

git remote add origin https://github.com/YOUR_GITHUB_USERNAME/prakrutik-tattva.git
git push -u origin main
```

*(If prompted, sign in via browser or personal access token to authorize GitHub).*

---

## Part 2: Deploy to a Free Node.js Hosting Service (Render.com)

**Render.com** is the leading free cloud platform for hosting real Node.js web services. It runs your exact `server.js` file just like GoDaddy will!

### Step 1: Sign up on Render
1. Go to [render.com](https://render.com).
2. Click **Get Started for Free** and choose **Sign up with GitHub**.

### Step 2: Create a New Web Service
1. On the Render Dashboard, click **New +** (top right) → select **Web Service**.
2. Under "Connect a repository", find **`prakrutik-tattva`** and click **Connect**.

### Step 3: Configure Settings
Fill in these simple fields:
* **Name**: `prakrutik-tattva`
* **Region**: Choose the closest one (e.g. Singapore or Frankfurt)
* **Branch**: `main`
* **Runtime**: `Node`
* **Build Command**:
  ```bash
  npm run build
  ```
* **Start Command**:
  ```bash
  node server.js
  ```
* **Instance Type**: Select **Free** ($0 / month).

### Step 4: Click Deploy!
1. Click the **Deploy Web Service** button at the bottom.
2. Render will automatically:
   - Pull your code from GitHub.
   - Run `npm run build` to build your website.
   - Start `server.js` via Node.js.
3. In about 1 to 2 minutes, Render will give you a live HTTPS link, such as:
   `https://prakrutik-tattva.onrender.com`

---

## How This Prepares You for GoDaddy

Testing on Render gives you the exact blueprint for GoDaddy:
1. **Identical Server Code**: Both Render and GoDaddy run the exact same `server.js` file.
2. **Instant Verification**: You can verify that all 11+ products, sunflower oil bottle image, cart drawer, and WhatsApp checkout work in a live cloud environment.
3. **Zero Risk**: You test everything on a free trial first without risking any disruption to your live domain!
