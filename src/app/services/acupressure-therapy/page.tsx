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
  title: 'Acupressure Therapy in Najafgarh | Revive Holistic Wellness Centre',
  description: 'Discover acupressure therapy at Revive Holistic Wellness Centre in Najafgarh. Complementary treatment for pain relief and wellness.',
  alternates: {
    canonical: '/services/acupressure-therapy',
  },
};

export default function AcupressureTherapyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Acupressure Therapy', url: '/services/acupressure-therapy' },
        ]}
      />
      <Navbar />

      <Hero
        title="Acupressure Therapy in Najafgarh"
        subtitle="Healing Through Ancient Techniques"
        description="Complementary acupressure-based care tailored to your individual needs for pain relief and wellness."
        image="/images/accupressure_therapy.jpg"
        primaryCTA={{
          text: 'Book a Session',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      <Section
        title="What is Acupressure Therapy?"
        backgroundColor="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/accupressure_therapy.jpg"
            alt="Acupressure therapy"
            className="rounded-lg shadow-lg order-2 md:order-1"
            loading="lazy"
          />
          <div className="order-1 md:order-2">
            <p className="text-gray-600 mb-4">
              Acupressure is an ancient healing technique that uses gentle pressure on specific points on the body to promote relaxation, improve circulation, and support the body's natural healing processes.
            </p>
            <p className="text-gray-600 mb-6">
              This complementary therapy complements our primary treatment services and can be used alongside physiotherapy for enhanced results.
            </p>
            <div className="space-y-3">
              {[
                'Relieves muscle tension and stiffness',
                'Improves blood circulation',
                'Promotes relaxation and stress relief',
                'Supports natural healing processes',
                'Complements other therapies',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Our Acupressure Sessions"
        backgroundColor="gray"
        centered
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">Session Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-dark-900 mb-2">Duration</h4>
                <p className="text-gray-600">1 hour per session</p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-900 mb-2">Price</h4>
                <p className="text-primary-600 text-2xl font-bold">₹500</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Each session includes a brief consultation, customized acupressure treatment based on your needs, and advice for at-home wellness practices.
            </p>
            <div className="flex gap-3">
              <a
                href={businessInfo.whatsapp}
                className="flex-1 flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                <SiWhatsapp size={18} />
                <span>Book Now</span>
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
        </div>
      </Section>

      <Footer />
    </>
  );
}
