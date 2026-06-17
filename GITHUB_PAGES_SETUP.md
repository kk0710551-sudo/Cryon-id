# Cryon ID - GitHub Pages Live Deployment

This guide will help you deploy your Cryon ID website directly from GitHub to make it live on the internet.

## What is GitHub Pages?

GitHub Pages is a free hosting service that automatically deploys your website from your GitHub repository. Every time you push code to GitHub, your website updates automatically.

## Your Live Website URL

After setup, your website will be live at:

**https://kk0710551-sudo.github.io/Cryon-id**

## Setup Instructions

### Step 1: Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/kk0710551-sudo/Cryon-id
2. Click **"Settings"** (top right)
3. Click **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**

### Step 2: Wait for Deployment

1. GitHub will automatically start building your website
2. Go back to the repository main page
3. Look for a yellow/blue dot next to the commit (it's the build status)
4. Wait for it to turn green (✓)
5. This takes 2-5 minutes

### Step 3: View Your Live Website

1. After build completes, go to: **https://kk0710551-sudo.github.io/Cryon-id**
2. Your Cryon ID website is now live!
3. Share this URL with anyone to show them your website

## How It Works

1. **You push code to GitHub** → `git push origin main`
2. **GitHub Actions automatically builds** → Runs `npm run build`
3. **Website is deployed** → Published to GitHub Pages
4. **Website goes live** → Accessible at your GitHub Pages URL

## Automatic Updates

Every time you make changes:

1. Edit your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
3. GitHub automatically redeploys
4. Your live website updates within 2-5 minutes

## Troubleshooting

### Build Failed

**Error: "Build failed" with red X**

Solution:
1. Click on the red X
2. Check the error message
3. Common issues:
   - Missing dependencies
   - Syntax errors in code
   - API route issues (GitHub Pages doesn't support server-side code)

### Website Shows Blank Page

**Error: "Blank page or 404"**

Solution:
1. Make sure you're visiting: `https://kk0710551-sudo.github.io/Cryon-id`
2. Check browser console (F12 → Console)
3. Look for error messages
4. Refresh the page

### Wallet Not Connecting

**Error: "Wallet connection fails"**

Solution:
1. Install Phantom wallet extension
2. Switch to Devnet in Phantom
3. Refresh the page
4. Try connecting again

### IPFS Pinning Not Working

**Error: "Failed to pin to IPFS"**

Note: GitHub Pages doesn't support server-side API routes. The `/api/upload` route won't work on GitHub Pages.

Solution:
- For full functionality (IPFS + blockchain), use Vercel instead
- For static content only, GitHub Pages works perfectly

## Limitations of GitHub Pages

GitHub Pages has some limitations:

| Feature | GitHub Pages | Vercel |
|---------|--------------|--------|
| Static Content | ✅ Yes | ✅ Yes |
| API Routes | ❌ No | ✅ Yes |
| IPFS Pinning | ❌ No | ✅ Yes |
| Blockchain Interaction | ⚠️ Limited | ✅ Yes |
| Custom Domain | ✅ Yes | ✅ Yes |
| Cost | Free | Free |

## For Full Functionality

If you want IPFS pinning and blockchain integration to work:

1. Use **Vercel** instead of GitHub Pages
2. Follow the Vercel deployment guide
3. Vercel supports server-side API routes

## Custom Domain (Optional)

To use your own domain instead of github.io:

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Update your domain's DNS records (follow GitHub's instructions)
4. Your website will be at your custom domain

## View Deployment Status

1. Go to your repository
2. Click **"Actions"** tab
3. See all deployment builds
4. Click any build to see logs

## Push Updates

To update your live website:

```bash
cd /home/ubuntu/cryon-id

# Make changes to your code

# Commit and push
git add .
git commit -m "Update: description"
git push origin main

# Wait 2-5 minutes for automatic deployment
# Your live website updates automatically!
```

## Your Live Website

**URL:** https://kk0710551-sudo.github.io/Cryon-id

Share this link with anyone to show them your Cryon ID website!

---

**Your website is now live on GitHub Pages!**
