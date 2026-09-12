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
  title: 'Orthopedic Rehabilitation in Najafgarh | Revive Holistic',
  description: 'Orthopedic rehabilitation services at Revive Holistic Wellness Centre for musculoskeletal conditions and recovery.',
  alternates: {
    canonical: '/services/orthopedic-rehabilitation',
  },
};

export default function OrthopedicRehabilitationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Orthopedic Rehabilitation', url: '/services/orthopedic-rehabilitation' },
        ]}
      />
      <Navbar />

      <Hero
        title="Orthopedic Rehabilitation"
        subtitle="Recovery from Musculoskeletal Conditions"
        description="Specialized rehabilitation for musculoskeletal conditions, injuries, and functional recovery."
        image="/images/OrthopedicRehab.jpg"
        primaryCTA={{
          text: 'Book a Session',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      <Section
        title="Orthopedic Rehabilitation Program"
        backgroundColor="white"
        centered
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">
            Orthopedic rehabilitation focuses on recovery from musculoskeletal injuries, conditions, and post-surgical recovery. Our programs are designed to restore function, strength, and mobility.
          </p>
          <p className="text-gray-600">
            We work with patients to rebuild strength, improve movement patterns, and return to their normal activities safely and effectively.
          </p>
        </div>
      </Section>

      <Section
        title="Get Started Today"
        backgroundColor="primary"
        centered
      >
        <div className="max-w-md mx-auto">
          <p className="text-gray-700 mb-6 text-center">
            Schedule a consultation to begin your rehabilitation journey.
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
