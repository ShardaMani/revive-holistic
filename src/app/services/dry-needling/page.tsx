import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { businessInfo } from '@/config/constants';
import { FiPhone } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'Dry Needling in Najafgarh | Revive Holistic Wellness Centre',
  description: 'Dry needling therapy at Revive Holistic Wellness Centre for pain relief and improved movement.',
  alternates: {
    canonical: '/services/dry-needling',
  },
};

export default function DryNeedlingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Dry Needling', url: '/services/dry-needling' },
        ]}
      />
      <Navbar />

      <Hero
        title="Dry Needling in Najafgarh"
        subtitle="Trigger Point Therapy"
        description="Therapeutic dry needling technique to address muscle pain and improve movement quality."
        image="/images/Dry-Needling.jpeg.webp"
        primaryCTA={{
          text: 'Book a Session',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      <Section
        title="About Dry Needling"
        backgroundColor="white"
        centered
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">
            Dry needling is a therapeutic technique that involves using thin needles to address trigger points in muscles. This evidence-based approach can help reduce pain, improve muscle function, and support recovery.
          </p>
          <p className="text-gray-600">
            When performed by trained professionals, dry needling is a safe and effective complementary therapy that can be integrated into personalized rehabilitation programs.
          </p>
        </div>
      </Section>

      <Section
        title="Schedule Your Appointment"
        backgroundColor="primary"
        centered
      >
        <div className="max-w-md mx-auto">
          <p className="text-gray-700 mb-6 text-center">
            Experience the benefits of professional dry needling therapy.
          </p>
          <div className="flex gap-3">
            <a
              href={businessInfo.whatsapp}
              className="flex-1 flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <SiWhatsapp size={18} />
              <span>Book</span>
            </a>
            <a
              href={businessInfo.social.phone}
              className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <FiPhone size={18} />
              <span>Call</span>
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
