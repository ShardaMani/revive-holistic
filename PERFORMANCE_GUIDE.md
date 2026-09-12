# Performance & Image Optimization Guide

## Next.js Image Optimization

The website is configured to automatically optimize images using Next.js Image component. This includes:

- Automatic format conversion (WebP, AVIF)
- Responsive image generation
- Lazy loading by default
- Automatic sizing
- Built-in caching

## Recommended Image Sizes & Formats

### Hero Images
- **Dimensions**: 1200x600px (minimum), 1920x1080px (recommended)
- **Format**: WEBP or AVIF
- **File Size**: < 200KB
- **Quality**: 80-85%

### Service Card Images
- **Dimensions**: 400x300px
- **Format**: WEBP
- **File Size**: < 100KB
- **Quality**: 80%

### Team Member Photos
- **Dimensions**: 500x600px (portrait)
- **Format**: WEBP
- **File Size**: < 120KB
- **Quality**: 85%

### Thumbnail Images
- **Dimensions**: 300x300px
- **Format**: WEBP
- **File Size**: < 50KB
- **Quality**: 75%

## Image Optimization Tools

### Online Tools
- **TinyPNG**: https://tinypng.com/ (PNG/JPG compression)
- **Squoosh**: https://squoosh.app/ (Google's web image optimizer)
- **ImageOptim**: https://imageoptim.com/ (Mac)
- **OptiPNG**: http://optipng.sourceforge.net/ (PNG optimization)

### Command Line Tools
```bash
# Using ImageMagick
convert input.jpg -resize 1200x600 -quality 85 output.webp

# Using ffmpeg
ffmpeg -i input.jpg -vf scale=1200:600 output.webp

# Batch convert using ImageMagick
for file in *.jpg; do convert "$file" -resize 1200x600 -quality 85 "${file%.jpg}.webp"; done
```

## Recommended Images to Add

### Hero Section
- Professional clinic photo or therapist at work
- Source: Unsplash, Pexels (high-quality wellness/healthcare)
- Current placeholder: `https://images.unsplash.com/photo-1576091160550-2173dba999ef`

### Service Cards
Each service needs an icon or image:
1. Physiotherapy: Exercise/stretching image
2. Acupressure: Traditional therapy image
3. Cupping: Cupping therapy image
4. Chiropractic: Spine/adjustment image
5. Sports: Athletic rehabilitation image
6. Alternative: Holistic wellness image

### Team Section
- Professional headshots for each team member
- Recommended: 500x600px, professional attire
- Format: WEBP for web

### About Section
- Clinic interior or team photo
- Should convey professionalism and warmth

## Image Placement Instructions

1. Create images in recommended dimensions
2. Convert to WEBP format
3. Save with descriptive names (e.g., `physiotherapy-session-najafgarh.webp`)
4. Place in `public/images/` directory
5. Update image paths in components or constants

## CSS Optimization

Current optimizations:
- ✓ Minified Tailwind CSS (production build)
- ✓ Unused CSS removed (via Tailwind)
- ✓ Critical CSS inline (automatic with Next.js)
- ✓ Font optimization (system fonts used)

## JavaScript Optimization

Current optimizations:
- ✓ Code splitting (automatic with Next.js)
- ✓ Dynamic imports for heavy components
- ✓ Minified bundle (production build)
- ✓ No unnecessary third-party scripts
- ✓ React fast refresh in development

## Font Optimization

Currently using system fonts (no external fonts) for performance:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
```

Benefits:
- Instant rendering (no font download)
- Native appearance on all devices
- Zero layout shift from fonts
- Smaller CSS file

## Caching Strategy

### Browser Caching
- Images: 30 days
- CSS/JS: 1 year (versioned)
- HTML: No cache (always fresh)

### Edge Caching (Vercel/Netlify)
- HTML: 60 seconds
- Images: 30 days
- API routes: 1 hour

Configured in `vercel.json` and Next.js headers.

## Performance Targets

### Core Web Vitals
- **LCP**: < 2.5 seconds (Largest Contentful Paint)
- **INP**: < 200 milliseconds (Interaction to Next Paint)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### PageSpeed Insights
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Page Load Time
- First Contentful Paint (FCP): < 1.8s
- Time to Interactive (TTI): < 3.8s
- Total Blocking Time (TBT): < 200ms

## Monitoring Performance

### Tools
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse: Built into Chrome DevTools
- WebPageTest: https://www.webpagetest.org/
- GTmetrix: https://gtmetrix.com/

### Weekly Monitoring
1. Check Core Web Vitals in Google Analytics
2. Run Lighthouse audit monthly
3. Monitor page speed trends
4. Check Search Console for performance issues

## Performance Optimization Checklist

- [x] Images optimized and responsive
- [x] No render-blocking resources
- [x] Minified CSS and JavaScript
- [x] Lazy loading implemented
- [x] Proper caching headers
- [x] Gzip compression enabled
- [x] Minimal third-party scripts
- [x] Fonts optimized
- [x] CSS animations optimized
- [x] No layout shifts
- [x] Proper viewport meta tag
- [x] AMP not needed (Next.js performance sufficient)

## Next Steps After Deployment

1. Run Lighthouse audit on live site
2. Test on 3G network (Chrome DevTools)
3. Monitor Core Web Vitals in Search Console
4. Implement real user monitoring (optional)
5. Set up performance alerts

## Image File Structure

Recommended organization:
```
public/
├── images/
│   ├── hero/
│   │   ├── hero-home.webp
│   │   └── hero-services.webp
│   ├── services/
│   │   ├── physiotherapy.webp
│   │   ├── acupressure.webp
│   │   └── ...
│   ├── team/
│   │   ├── abhimanyu.webp
│   │   ├── kapil.webp
│   │   └── tanya.webp
│   └── og-image.jpg
```

---

**Performance-First Design**: This website is optimized for speed from the ground up, with automatic image optimization, code splitting, and minimal third-party dependencies.
