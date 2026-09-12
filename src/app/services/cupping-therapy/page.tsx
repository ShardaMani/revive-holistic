import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { businessInfo } from '@/config/constants';
import { FiCheckCircle, FiPhone } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'Cupping Therapy in Najafgarh | Revive Holistic Wellness Centre',
  description: 'Cupping therapy services at Revive Holistic Wellness Centre in Najafgarh for pain relief and wellness support.',
  alternates: {
    canonical: '/services/cupping-therapy',
  },
};

export default function CuppingTherapyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Cupping Therapy', url: '/services/cupping-therapy' },
        ]}
      />
      <Navbar />

      <Hero
        title="Cupping Therapy in Najafgarh"
        subtitle="Traditional Healing Technique"
        description="Cupping therapy as part of our complementary wellness and therapeutic services."
        image="/images/cupping_therapy.jpg"
        primaryCTA={{
          text: 'Book a Session',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      <Section
        title="About Cupping Therapy"
        backgroundColor="white"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Cupping therapy is a traditional healing technique that uses special cups to create suction on the skin. This therapeutic method promotes blood circulation, relieves muscle tension, and supports the body's natural healing processes.
            </p>
            <p className="text-gray-600 mb-6">
              Our cupping therapy services complement our other wellness offerings and can be integrated into personalized treatment plans.
            </p>
            <h4 className="font-semibold text-dark-900 mb-3">Benefits include:</h4>
            <div className="space-y-2">
              {[
                'Improved blood circulation',
                'Muscle tension relief',
                'Pain management support',
                'Enhanced healing',
                'Relaxation and stress relief',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/images/cupping_therapy.jpg"
            alt="Cupping therapy"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </Section>

      <Section
        title="Session Information"
        backgroundColor="gray"
        centered
      >
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-dark-900 mb-2">Duration</h3>
            <p className="text-gray-600">30 minutes</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-bold text-dark-900 mb-2">Price</h3>
            <p className="text-primary-600 text-3xl font-bold">₹200</p>
          </div>
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
