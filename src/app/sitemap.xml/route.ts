import { businessInfo } from '@/config/constants';

export async function GET() {
  const baseUrl = businessInfo.domain;

  const pages = [
    '',
    '/about',
    '/services',
    '/services/physiotherapy',
    '/services/sports-rehabilitation',
    '/services/acupressure-therapy',
    '/services/cupping-therapy',
    '/services/chiropractic-care',
    '/services/alternative-medicine',
    '/services/manual-therapy',
    '/services/orthopedic-rehabilitation',
    '/services/neuromuscular-reeducation',
    '/services/dry-needling',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
         <loc>${baseUrl}${page}</loc>
         <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
         <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
         <priority>${page === '' ? '1.0' : '0.8'}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  });
}
