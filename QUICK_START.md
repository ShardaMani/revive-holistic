# Quick Start Guide

## For Developers

### Installation
```bash
cd revive-physio
npm install
```

### Development
```bash
npm run dev
```
Visit http://localhost:3000

### Build & Test
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## For Business Owners

### Updating Information

**Business Details** (`src/config/constants.ts`):
- Company name, phone, email
- Address and location
- Business hours
- Services and pricing
- Team member info

**Website Content**:
- Homepage content in `src/app/page.tsx`
- Service pages in `src/app/services/[service]/page.tsx`
- Update images in `public/images/`

### Adding Content

**New Service**:
1. Add to `src/config/constants.ts` services array
2. Create page: `src/app/services/[service-slug]/page.tsx`
3. Add image to `public/images/services/`
4. Test links and functionality

**Team Member**:
1. Add to `src/config/constants.ts` team array
2. Upload photo to `public/images/team/`
3. Update component display if needed

**Business Hours/Info**:
1. Update `src/config/constants.ts`
2. Changes auto-reflect everywhere

## Pre-Launch Testing Checklist

### Functionality
- [ ] Homepage loads properly
- [ ] All links work
- [ ] Forms submit (or show error appropriately)
- [ ] Mobile menu works
- [ ] Images load correctly

### Mobile
- [ ] Responsive on iPhone SE
- [ ] Responsive on iPhone 14 Pro Max
- [ ] Responsive on Android (Samsung Galaxy)
- [ ] Buttons are clickable
- [ ] Text is readable

### Desktop
- [ ] Looks good on 1920x1080
- [ ] Looks good on 2560x1440
- [ ] All animations smooth
- [ ] Hover effects work

### SEO
- [ ] Sitemap accessible (`/sitemap.xml`)
- [ ] Robots.txt accessible (`/robots.txt`)
- [ ] Mobile-friendly test passes
- [ ] Structured data valid (schema.org)
- [ ] All pages have unique titles and descriptions

### Performance
- [ ] Lighthouse score 90+
- [ ] Page loads in < 3 seconds
- [ ] Images load quickly
- [ ] No console errors

### Accessibility
- [ ] Tab navigation works
- [ ] All buttons keyboard accessible
- [ ] Forms have proper labels
- [ ] Color contrast is sufficient
- [ ] Alt text on all images

### Security
- [ ] HTTPS enabled
- [ ] No sensitive data in code
- [ ] Form validation works
- [ ] No console errors

### Content
- [ ] No spelling errors
- [ ] All contact info correct
- [ ] All phone numbers clickable
- [ ] WhatsApp links work
- [ ] No fake testimonials

## Testing Steps

### Local Testing
```bash
# Run development server
npm run dev

# Open browser
open http://localhost:3000

# Test on mobile (Chrome DevTools)
# Press F12 → Toggle device toolbar
```

### Production Build Testing
```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Open browser
open http://localhost:3000
```

### Mobile Testing
1. Test on actual devices when possible
2. Use Chrome DevTools mobile emulator
3. Test on slow 3G network
4. Test on offline mode

### Search Console Testing
```bash
# Verify domain ownership
# Submit sitemap
# Request URL indexing
# Check mobile usability
```

## Common Tasks

### Update Price
In `src/config/constants.ts`:
```typescript
{
  id: 'physiotherapy',
  name: 'Physiotherapy & Rehabilitation',
  price: '₹400',  // Update this
  // ...
}
```

### Add Team Member
In `src/config/constants.ts`:
```typescript
{
  id: 'new-member',
  name: 'Dr. New Member',
  title: 'Specialist Role',
  qualifications: 'Relevant qualifications',
  description: 'Brief bio...',
  image: '/images/team/new-member.webp',
}
```

### Update Business Hours
In `src/config/constants.ts`:
```typescript
hours: {
  open: '09:30 AM',    // Update
  close: '08:30 PM',   // Update
  lunchStart: '12:30 PM',
  lunchEnd: '04:30 PM',
  holidays: 'Closed on...',
}
```

### Add New Service
1. Add to `services` array in `src/config/constants.ts`
2. Create file: `src/app/services/[slug]/page.tsx`
3. Copy from `physiotherapy` page template
4. Update content
5. Add image

## Troubleshooting

### Issue: Site not building
```bash
# Clear cache
rm -rf .next
npm run build
```

### Issue: Styling looks wrong
```bash
# Rebuild Tailwind
npm run build
```

### Issue: Changes not showing
```bash
# Hard refresh browser
Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

# Clear Next.js cache
rm -rf .next/
npm run dev
```

### Issue: Images not loading
1. Check image path is correct
2. Verify image exists in `public/` folder
3. Check file format (WEBP recommended)
4. Use correct path format: `/images/...`

## Deployment

### Vercel
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically
4. Configure custom domain

### Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Configure build settings
4. Deploy automatically
5. Configure custom domain

See `DEPLOYMENT.md` for detailed steps.

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Google Search Console**: https://search.google.com/search-console
- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev

## Emergency Support

**Questions?** Contact:
- Email: reviveholisticwellnesscentre@gmail.com
- Phone: +91 9818515259
- WhatsApp: https://wa.me/919818515259

---

**Ready to Go!** Your website is production-ready and waiting to be deployed.
