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
  title: 'Manual Therapy in Najafgarh | Revive Holistic Wellness Centre',
  description: 'Manual therapy services at Revive Holistic Wellness Centre focusing on hands-on therapeutic techniques for mobility and recovery.',
  alternates: {
    canonical: '/services/manual-therapy',
  },
};

export default function ManualTherapyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Manual Therapy', url: '/services/manual-therapy' },
        ]}
      />
      <Navbar />

      <Hero
        title="Manual Therapy in Najafgarh"
        subtitle="Hands-On Therapeutic Care"
        description="Specialized hands-on therapeutic techniques focused on mobility, movement, and functional recovery."
        image="/images/manual-therapy.jpg"
        primaryCTA={{
          text: 'Book a Session',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      <Section
        title="About Manual Therapy"
        backgroundColor="white"
        centered
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">
            Manual therapy refers to hands-on techniques used by our skilled therapists to treat musculoskeletal pain and dysfunction. These techniques include massage, joint mobilization, and soft tissue work.
          </p>
          <p className="text-gray-600 mb-4">
            Manual therapy is often integrated into physiotherapy programs to improve mobility, reduce pain, and enhance functional movement.
          </p>
        </div>
      </Section>

      <Section
        title="Book Your Session"
        backgroundColor="primary"
        centered
      >
        <div className="max-w-md mx-auto">
          <p className="text-gray-700 mb-6 text-center">
            Experience the benefits of professional manual therapy.
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
