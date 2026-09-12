import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import Hero from '@/components/Hero';
import { services } from '@/config/constants';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Services | Revive Holistic Wellness Centre',
  description: 'Explore our comprehensive range of wellness and therapeutic services in Najafgarh, Delhi.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />
      <Navbar />

      <Hero
        title="Our Services"
        subtitle="Comprehensive Wellness Solutions"
        description="Explore our range of therapeutic services designed to improve your health, mobility, and overall well-being."
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80"
        fullHeight={false}
      />

      <Section
        title="What We Offer"
        subtitle="A comprehensive range of personalized therapeutic and wellness services"
        backgroundColor="white"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.name}
              description={service.shortDescription}
              slug={service.slug}
              price={service.price}
              duration={service.duration}
            />
          ))}
        </div>
      </Section>
      
      <Footer />
    </>
  );
}
