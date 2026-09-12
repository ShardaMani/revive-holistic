import { businessInfo } from '@/config/constants';

interface LocalBusinessSchemaProps {
  telephone?: string;
  address?: string;
  openingHoursSpecification?: Array<{
    dayOfWeek: string;
    opens: string;
    closes: string;
  }>;
}

export function LocalBusinessSchema({ telephone, address, openingHoursSpecification }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': businessInfo.name,
    'image': `${businessInfo.domain}/og-image.jpg`,
    'description': businessInfo.description,
    'telephone': telephone || businessInfo.phone,
    'email': businessInfo.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': address || businessInfo.address,
      'addressLocality': 'Delhi',
      'addressRegion': 'DL',
      'postalCode': '110043',
      'addressCountry': 'IN'
    },
    'url': businessInfo.domain,
    'sameAs': [],
    ...(openingHoursSpecification && { openingHoursSpecification })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${businessInfo.domain}${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface OrganizationSchemaProps {
  logo?: string;
}

export function OrganizationSchema({ logo }: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': businessInfo.name,
    'url': businessInfo.domain,
    'logo': logo || `${businessInfo.domain}/logo.png`,
    'description': businessInfo.description,
    'telephone': businessInfo.phone,
    'email': businessInfo.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': businessInfo.address,
      'addressLocality': 'Delhi',
      'addressRegion': 'DL',
      'postalCode': '110043',
      'addressCountry': 'IN'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
