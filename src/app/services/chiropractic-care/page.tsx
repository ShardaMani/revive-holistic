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
  title: 'Chiropractic Care in Najafgarh | Revive Holistic Wellness Centre',
  description: 'Chiropractic care services at Revive Holistic Wellness Centre in Najafgarh for spinal health and movement.',
  alternates: {
    canonical: '/services/chiropractic-care',
  },
};

export default function ChiropracticCarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Chiropractic Care', url: '/services/chiropractic-care' },
        ]}
      />
      <Navbar />

      <Hero
        title="Chiropractic Care in Najafgarh"
        subtitle="Spinal Health & Movement"
        description="Individualized chiropractic and movement-focused care focused on improving spinal health and functional movement."
        image="/images/chiropractic.jpg"
        primaryCTA={{
          text: 'Book a Consultation',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      <Section
        title="About Chiropractic Care"
        backgroundColor="white"
        centered
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">
            Chiropractic care focuses on the diagnosis and treatment of musculoskeletal disorders, particularly those affecting the spine. Our chiropractors use specialized techniques to improve spinal alignment, reduce pain, and enhance overall movement quality.
          </p>
          <p className="text-gray-600 mb-4">
            At Revive Holistic Wellness Centre, chiropractic care is integrated into personalized treatment plans that may include other therapeutic approaches for optimal results.
          </p>
        </div>
      </Section>

      <Section
        title="Ready to Improve Your Spinal Health?"
        backgroundColor="primary"
        centered
      >
        <div className="max-w-md mx-auto">
          <p className="text-gray-700 mb-6 text-center">
            Schedule a consultation with our chiropractors to discuss your condition and develop a personalized care plan.
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
