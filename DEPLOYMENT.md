# Deployment Guide for Revive Holistic Wellness Centre

## Pre-Deployment Checklist

- [ ] All business information updated in `src/config/constants.ts`
- [ ] Team member images added to `public/images/team/`
- [ ] Service images optimized and placed
- [ ] Content reviewed for accuracy
- [ ] Links tested locally
- [ ] Mobile responsiveness verified
- [ ] Contact form configured (if using email service)
- [ ] Google Analytics ID added (if available)
- [ ] Domain name registered and ready

## Deployment Steps

### 1. Vercel Deployment (Recommended)

#### Setup
```bash
npm install -g vercel
vercel login
```

#### Deploy
```bash
vercel
```

#### Post-Deployment
- Configure custom domain in Vercel Dashboard
- Set environment variables in Settings
- Enable automatic deployments from Git

### 2. Netlify Deployment

#### Build Configuration
- Build command: `npm run build`
- Publish directory: `.next/out` (or `.next` with Next.js plugin)

#### Deploy via Git
1. Connect GitHub repository to Netlify
2. Configure build settings
3. Deploy

#### Domain Configuration
- Add custom domain in Netlify settings
- Configure DNS or use Netlify DNS

### 3. Manual Deployment (Self-Hosted)

```bash
npm run build
npm run start
```

Use a process manager like PM2:
```bash
pm2 start "npm run start" --name "revive-wellness"
pm2 save
pm2 startup
```

## Post-Deployment Tasks

### 1. Search Engine Registration (Critical)

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property: `https://reviveholistic.in`
3. Verify ownership (via DNS, HTML file, or Google Analytics)
4. Submit sitemap: `https://reviveholistic.in/sitemap.xml`
5. Request indexing for homepage
6. Monitor for crawl errors

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmaster
2. Add site
3. Verify ownership
4. Submit sitemap

### 2. Google Business Profile (Local SEO)

1. Go to https://business.google.com
2. Create business profile for:
   - **Name**: Revive Holistic Wellness Centre
   - **Address**: 292, A1, First Floor, Khasra no 52 Thana Road, Delhi, DL 110043
   - **Phone**: +91 9818515259
   - **Website**: https://reviveholistic.in
3. Add business categories
4. Add photos and services
5. Verify business

### 3. Analytics Setup

**Google Analytics 4:**
1. Create GA4 property
2. Add measurement ID to `.env.local`
3. Verify tracking is working
4. Set up conversion events:
   - appointment_click
   - whatsapp_click
   - phone_click
   - contact_form_submit

### 4. SSL Certificate

- Vercel & Netlify provide free SSL automatically
- For self-hosted: Use Let's Encrypt (free)
  ```bash
  certbot certonly --standalone -d reviveholistic.in -d www.reviveholistic.in
  ```

### 5. Domain Configuration

**DNS Settings** (if not using Netlify DNS):

For Vercel:
```
Name: (root) or www
Type: CNAME
Value: cname.vercel-dns.com
```

For Netlify:
```
Update nameservers to Netlify's nameservers
```

### 6. Email Configuration (Optional)

Choose one method for contact form:

**Formspree** (Easiest):
1. Go to https://formspree.io/
2. Create form
3. Add form ID to `.env.local`

**EmailJS**:
1. Create account at https://www.emailjs.com/
2. Create email service and template
3. Add credentials to `.env.local`

**Backend API** (Self-Hosted):
1. Set up Node.js/Python backend
2. Configure email sending
3. Add API URL to environment

## Testing & Validation

### Performance Testing

```bash
# Lighthouse audit
npx lighthouse https://reviveholistic.in --view

# PageSpeed Insights
https://pagespeed.web.dev/
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### SEO Validation

1. **Google Search Console**:
   - Check mobile usability
   - Check crawl stats
   - Review search performance
   - Fix any errors

2. **Structured Data Testing**:
   - https://schema.org/validator/
   - Check JSON-LD is valid
   - Verify LocalBusiness schema

3. **Mobile Testing**:
   - https://search.google.com/test/mobile-friendly
   - Test on actual devices
   - Check touch targets and spacing

4. **Core Web Vitals**:
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

### Link Testing

```bash
# Check for broken links
npx broken-link-checker https://reviveholistic.in --recursive
```

### Security Testing

```bash
# Check HTTPS
curl -I https://reviveholistic.in

# Check security headers
https://securityheaders.com/
```

## Monitoring

### Ongoing Tasks

- **Weekly**: Monitor Google Search Console for errors
- **Weekly**: Check Google Analytics for traffic
- **Monthly**: Review Core Web Vitals
- **Monthly**: Check for broken links
- **Quarterly**: Update blog/content
- **Quarterly**: Review and respond to reviews

### Alert Setup

1. **Google Search Console**:
   - Enable email alerts for critical issues
   - Monitor coverage
   - Monitor enhancements

2. **Google Analytics**:
   - Set up custom alerts
   - Monitor bounce rate
   - Monitor conversion rate

3. **Uptime Monitoring**:
   - Use UptimeRobot or similar
   - Monitor every 5 minutes
   - Get email alerts on downtime

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit
npm audit fix
```

### Content Updates

Update `src/config/constants.ts` for:
- Service offerings
- Pricing
- Team members
- Business hours
- Contact information

### Blog Posts

Add blog posts to `src/app/blog/` (requires additional setup)

## Troubleshooting

### Low Search Rankings

1. Check Google Search Console for errors
2. Verify structured data
3. Check keyword usage
4. Review competitors
5. Build more backlinks
6. Improve content quality

### Poor Performance

1. Check Core Web Vitals in PageSpeed
2. Optimize images
3. Minimize JavaScript
4. Enable caching
5. Use CDN

### Not Indexing

1. Check robots.txt
2. Check meta robots tag
3. Check sitemap
4. Submit in Search Console
5. Check for noindex tags

## Support

For deployment assistance:
- Contact: reviveholisticwellnesscentre@gmail.com
- Phone: +91 9818515259
- WhatsApp: https://wa.me/919818515259

---

**Last Updated**: 2026
