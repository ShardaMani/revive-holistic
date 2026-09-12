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
  title: 'Alternative Medicine in Najafgarh | Revive Holistic Wellness Centre',
  description: 'Holistic alternative medicine approaches at Revive Holistic Wellness Centre in Najafgarh, Delhi.',
  alternates: {
    canonical: '/services/alternative-medicine',
  },
};

export default function AlternativeMedicinePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Alternative Medicine', url: '/services/alternative-medicine' },
        ]}
      />
      <Navbar />

      <Hero
        title="Alternative Medicine in Najafgarh"
        subtitle="Holistic Wellness Approaches"
        description="Evidence-informed alternative medicine and holistic wellness approaches tailored to your individual requirements."
        image="/images/alternative-medicine.jpeg"
        primaryCTA={{
          text: 'Book a Consultation',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      <Section
        title="Our Alternative Medicine Approach"
        backgroundColor="white"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">
            Our alternative medicine services integrate complementary and holistic approaches to support overall wellness and health. These approaches work alongside conventional therapies to address the individual needs of each patient.
          </p>
          <p className="text-gray-600 mb-4">
            Under the direction of Abhimanyu Vats (MD in Alternative Medicine), we provide evidence-informed alternative medicine approaches that focus on supporting the body's natural healing processes.
          </p>
          <p className="text-gray-600">
            Alternative medicine at Revive complements our physiotherapy, chiropractic, and other therapeutic services for comprehensive care.
          </p>
        </div>
      </Section>

      <Section
        title="Schedule Your Consultation"
        backgroundColor="primary"
        centered
      >
        <div className="max-w-md mx-auto">
          <p className="text-gray-700 mb-6 text-center">
            Discuss your wellness goals with our alternative medicine practitioners.
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
