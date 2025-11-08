# Cloudflare Pages Deployment Guide

## ✅ GitHub Repository Ready

**Repository:** https://github.com/MC8212/Pricing-Excellence
**Branch:** main
**Status:** Code pushed successfully ✅

---

## 🚀 Deploy to Cloudflare Pages

### Step 1: Create New Cloudflare Pages Project

1. Go to your Cloudflare dashboard: https://dash.cloudflare.com/976c506ff31c526b166770943d0eaa34/pages

2. Click **"Create application"** or **"Create a project"**

3. Select **"Connect to Git"**

4. Choose **GitHub** as your Git provider

5. Authorize Cloudflare to access your GitHub account (if not already done)

6. Select repository: **MC8212/Pricing-Excellence**

7. Select branch: **main**

---

### Step 2: Configure Build Settings

**Framework preset:** Next.js

**Build configurations:**
```
Build command: npm run build
Build output directory: .next
Root directory: (leave empty)
Environment variables: (none required for now)
```

**Build settings for Next.js:**
```
NODE_VERSION: 18
```

---

### Step 3: Deploy

Click **"Save and Deploy"**

Cloudflare will:
1. Clone your repository
2. Install dependencies (`npm install`)
3. Run build command (`npm run build`)
4. Deploy to global CDN

**Deployment time:** 2-3 minutes

---

### Step 4: Get Your URL

After deployment completes, you'll get a URL like:
```
https://pricing-excellence.pages.dev
```

or your custom domain if configured.

---

## 📋 Deployment Configuration File

For automatic deployments, here's the recommended configuration:

**Create file:** `wrangler.toml` (optional, for advanced config)

```toml
name = "pricing-excellence"
compatibility_date = "2025-01-07"

[site]
bucket = ".next"

[build]
command = "npm run build"

[build.upload]
format = "service-worker"
```

---

## 🔧 Build Settings Summary

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Build Command | `npm run build` |
| Build Output | `.next` |
| Install Command | `npm install` |
| Node Version | 18 or 20 |
| Branch | main |

---

## ⚙️ Environment Variables (If Needed)

For future AI agent integration, you'll need:

```
ANTHROPIC_API_KEY=your_claude_api_key_here
```

Add in: **Settings → Environment Variables** in Cloudflare Pages

---

## 🌐 Custom Domain (Optional)

After deployment, you can add custom domain:

1. Go to project settings
2. Click **"Custom domains"**
3. Add your domain (e.g., `pricing.northhighland.com`)
4. Update DNS records as instructed
5. SSL certificate auto-provisioned

---

## 🔄 Continuous Deployment

Every push to GitHub `main` branch will automatically:
1. Trigger new Cloudflare Pages build
2. Run `npm run build`
3. Deploy to production
4. Update live site (2-3 minutes)

**To deploy updates:**
```bash
git add .
git commit -m "Your update message"
git push origin main
```

Cloudflare automatically deploys within minutes!

---

## 🐛 Troubleshooting

### Build Fails

**Check:**
1. Build succeeds locally: `npm run build`
2. All dependencies in package.json
3. Node version compatible (18+)
4. No hardcoded localhost URLs

### Page Not Found

**Check:**
1. Build output directory correct (`.next`)
2. Framework preset is Next.js
3. App router pages in `src/app/` directory

### Slow Performance

**Solutions:**
1. Enable Cloudflare caching
2. Use image optimization
3. Enable compression
4. Use Cloudflare CDN features

---

## 📊 Expected Build Output

Successful build shows:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (8/8)

Route (app)
├ ○ /
├ ○ /models
├ ○ /models/outcome-based
├ ○ /tools/roi-calculator
└ ○ /tools/model-selector
```

---

## 🎯 Post-Deployment Checklist

After successful deployment:

- [ ] Visit deployed URL and verify homepage loads
- [ ] Test ROI Calculator functionality
- [ ] Test Model Selection Wizard
- [ ] Navigate to Models Gallery
- [ ] Check Outcome-Based model page
- [ ] Verify responsive design on mobile
- [ ] Test all navigation links
- [ ] Share URL with stakeholders

---

## 📈 Analytics (Optional)

Enable Cloudflare Web Analytics:

1. Go to **Analytics & Logs → Web Analytics**
2. Add your domain
3. Get visitor stats, page views, performance metrics
4. No cookies required (privacy-friendly)

---

## 🔗 Useful Links

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **Next.js on Cloudflare:** https://developers.cloudflare.com/pages/framework-guides/nextjs/
- **Your GitHub Repo:** https://github.com/MC8212/Pricing-Excellence
- **Your Cloudflare Dashboard:** https://dash.cloudflare.com/976c506ff31c526b166770943d0eaa34/pages

---

## ✅ READY TO DEPLOY

**Status:** Code pushed to GitHub ✅
**Build Status:** Compiles successfully ✅
**Configuration:** Ready for Cloudflare Pages ✅

**Next Step:** Follow Step 1-3 above in Cloudflare Dashboard to deploy

**Estimated Time:** 5 minutes to configure + 3 minutes for first deployment

---

*Your Pricing Excellence website will be live and accessible globally via Cloudflare's edge network!*
