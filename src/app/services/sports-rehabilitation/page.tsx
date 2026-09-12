import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { businessInfo } from '@/config/constants';
import { FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Sports Rehabilitation in Najafgarh, Delhi | Revive Holistic',
  description: 'Sports rehabilitation in Najafgarh for injury recovery, mobility and return to activity. Explore personalized rehabilitation at Revive Holistic Wellness Centre.',
  alternates: {
    canonical: '/services/sports-rehabilitation',
  },
};

export default function SportsRehabilitationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Sports Rehabilitation', url: '/services/sports-rehabilitation' },
        ]}
      />
      <Navbar />

      <Hero
        title="Sports Rehabilitation in Najafgarh"
        subtitle="Get Back in the Game"
        description="Specialized rehabilitation programs designed to help athletes recover from injuries and safely return to their sport."
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80"
        primaryCTA={{
          text: 'Book a Session',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      <Section
        title="Sports Rehabilitation"
        backgroundColor="white"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Sports rehabilitation is a specialized form of physiotherapy designed to help athletes recover from injuries and return to their sport safely and effectively.
            </p>
            <p className="text-gray-600 mb-4">
              Our sports rehabilitation program focuses on rebuilding strength, restoring mobility, improving functional movement patterns, and preventing re-injury. We work with athletes of all levels to achieve their performance goals.
            </p>
            <h3 className="text-lg font-bold text-dark-900 mb-3">We Help With:</h3>
            <div className="space-y-2">
              {[
                'Ligament and muscle injuries',
                'Joint sprains and strains',
                'Return-to-sport planning',
                'Performance optimization',
                'Injury prevention strategies',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80"
            alt="Sports rehabilitation"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </Section>

      <Section
        title="Why Choose Our Sports Rehabilitation"
        backgroundColor="gray"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: 'Specialized Training',
              description: 'Our team specializes in sports-related injuries and athlete rehabilitation.',
            },
            {
              title: 'Personalized Plans',
              description: 'Customized rehabilitation programs based on your sport and injury.',
            },
            {
              title: 'Return-to-Sport Focus',
              description: 'Guided progression back to your sport with confidence and safety.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-dark-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Pricing & Booking"
        backgroundColor="primary"
        centered
      >
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <h3 className="text-xl font-bold text-dark-900 mb-2">Sports Rehabilitation</h3>
          <p className="text-gray-600 mb-6">Consultation required to determine program and pricing</p>
          <a
            href={businessInfo.whatsapp}
            className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center mb-3"
          >
            Book a Consultation
          </a>
          <a
            href={businessInfo.social.phone}
            className="block w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-bold py-3 px-4 rounded-lg transition-colors text-center"
          >
            Call {businessInfo.phone}
          </a>
        </div>
      </Section>

      <Footer />
    </>
  );
}
