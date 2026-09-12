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
  title: 'Neuromuscular Re-education in Najafgarh | Revive Holistic',
  description: 'Neuromuscular re-education services focused on movement quality and functional rehabilitation.',
  alternates: {
    canonical: '/services/neuromuscular-reeducation',
  },
};

export default function NeuromusularReeducationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Neuromuscular Re-education', url: '/services/neuromuscular-reeducation' },
        ]}
      />
      <Navbar />

      <Hero
        title="Neuromuscular Re-education"
        subtitle="Movement Quality & Functional Control"
        description="Movement-focused rehabilitation designed to improve coordination, control, and functional movement."
        image="/images/neuromuscular-reeducation.jpg"
        primaryCTA={{
          text: 'Book a Session',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      <Section
        title="Improve Your Movement Quality"
        backgroundColor="white"
        centered
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">
            Neuromuscular re-education is a therapeutic approach designed to restore proper movement patterns and improve the coordination between your nervous system and muscles.
          </p>
          <p className="text-gray-600">
            This specialized training helps develop better movement control, improves function, and prevents future injuries through focused movement practice and correction.
          </p>
        </div>
      </Section>

      <Section
        title="Start Your Movement Journey"
        backgroundColor="primary"
        centered
      >
        <div className="max-w-md mx-auto">
          <p className="text-gray-700 mb-6 text-center">
            Develop better movement patterns with our specialized programs.
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
