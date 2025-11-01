# Deployment Guide - Vercel

This portfolio is configured for deployment on Vercel. Here's what you need to know:

## Pre-Deployment Checklist

✅ Build passes locally (`npm run build`)
✅ All TypeScript errors resolved
✅ All dependencies are in package.json
✅ No environment variables required (currently)
✅ Static assets are in `public/` folder

## Vercel Deployment Steps

### Option 1: Import from GitHub (Recommended)

1. Push your code to GitHub (if not already done)
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Configuration

The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- SPA routing rewrites (for React Router compatibility)

## Custom Domain Setup

1. In Vercel project settings, go to "Domains"
2. Add your domain: `mitchellkeo.dev`
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

## Environment Variables

Currently no environment variables are needed. If you add them later:
1. Go to Project Settings → Environment Variables
2. Add variables for production/preview/development
3. Redeploy

## Post-Deployment

- Verify all pages load correctly
- Test navigation and smooth scrolling
- Check that all links work
- Test responsive design on mobile
- Verify social media link previews (OG tags)

## Build Settings

Vercel will use:
- **Node Version**: Auto-detected (recommend Node.js 20.19+ or 22.12+)
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Output Directory**: `dist`

## Troubleshooting

### Build Fails
- Check Node.js version (should be 20.19+ or 22.12+)
- Ensure all dependencies are in package.json
- Check for TypeScript errors locally first

### Routing Issues
- `vercel.json` includes SPA rewrites
- All routes should redirect to `index.html`

### Images Not Loading
- Ensure images are in `public/` folder
- Use relative paths starting with `/`

## Notes

- The site is a Single Page Application (SPA)
- All routing is handled client-side
- No server-side rendering required
- Vercel will handle static asset optimization

