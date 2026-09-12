import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { businessInfo } from '@/config/constants';
import { FiCheckCircle, FiPhone } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Physiotherapy & Rehabilitation in Najafgarh | Revive Holistic',
  description: 'Looking for physiotherapy in Najafgarh? Revive Holistic Wellness Centre provides personalized physiotherapy and rehabilitation focused on mobility, function and recovery.',
  alternates: {
    canonical: '/services/physiotherapy',
  },
  keywords: [
    'physiotherapy in Najafgarh',
    'physical therapy Delhi',
    'rehabilitation Najafgarh',
    'movement therapy',
  ],
};

export default function PhysiotherapyPage() {
  const benefits = [
    'Improved mobility and flexibility',
    'Reduced pain and discomfort',
    'Enhanced functional strength',
    'Faster recovery from injury',
    'Prevention of future injuries',
    'Better posture and movement patterns',
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of your condition, medical history, and functional limitations.',
    },
    {
      step: 2,
      title: 'Personalized Plan',
      description: 'Development of a customized rehabilitation program based on your specific needs.',
    },
    {
      step: 3,
      title: 'Therapeutic Treatment',
      description: 'Evidence-based physiotherapy techniques and therapeutic exercises.',
    },
    {
      step: 4,
      title: 'Progress Monitoring',
      description: 'Regular assessment and adjustment of treatment to optimize results.',
    },
  ];

  const faqs = [
    {
      q: 'What does a physiotherapy session involve?',
      a: 'A typical session includes assessment, manual therapy techniques, therapeutic exercises, mobility work, and advice on home exercises for your condition.',
    },
    {
      q: 'How long does a physiotherapy session take?',
      a: 'Standard sessions are 1 hour long, which includes assessment, treatment, and exercise instruction.',
    },
    {
      q: 'Do I need an appointment?',
      a: 'Yes, we recommend booking an appointment through WhatsApp or calling us at ' + businessInfo.phone + ' for the best experience.',
    },
    {
      q: 'What conditions can physiotherapy help with?',
      a: 'Physiotherapy can help with many conditions including back pain, neck pain, sports injuries, post-surgical rehabilitation, mobility issues, and functional movement problems.',
    },
    {
      q: 'How much does physiotherapy cost?',
      a: 'Our physiotherapy sessions are ₹350 per hour. Please contact us for more details or package pricing.',
    },
    {
      q: 'How can I book an appointment?',
      a: 'You can book through WhatsApp by clicking the WhatsApp button, call us directly, or fill out our contact form.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Physiotherapy', url: '/services/physiotherapy' },
        ]}
      />
      <Navbar />

      <Hero
        title="Physiotherapy & Rehabilitation in Najafgarh"
        subtitle="Personalized Movement & Mobility Care"
        description="Evidence-based physiotherapy focused on improving your movement, strength, and functional recovery."
        image="/images/physiotherapy.jpg"
        primaryCTA={{
          text: 'Book a Session',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      {/* What is Physiotherapy */}
      <Section
        title="What is Physiotherapy?"
        backgroundColor="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Physiotherapy, also known as physical therapy, is a healthcare profession focused on improving movement, function, and quality of life through evidence-based assessment, treatment, and rehabilitation.
            </p>
            <p className="text-gray-600 mb-4">
              At Revive Holistic Wellness Centre, our physiotherapists use a combination of manual therapy, therapeutic exercises, and mobility techniques to help patients recover from injury, manage pain, and improve their functional ability.
            </p>
            <p className="text-gray-600">
              Whether you're recovering from surgery, dealing with chronic pain, or looking to improve your movement quality, physiotherapy offers effective, non-invasive solutions tailored to your specific needs.
            </p>
          </div>
          <img
            src="/images/physiotherapy.jpg"
            alt="Physiotherapy session"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </Section>

      {/* Our Physiotherapy Approach */}
      <Section
        title="Our Physiotherapy Approach"
        backgroundColor="gray"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {processSteps.map((item) => (
            <div key={item.step} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-600 text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section
        title="Benefits of Physiotherapy"
        subtitle="Improve your health and quality of life"
        backgroundColor="white"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-4 bg-primary-50 rounded-lg">
              <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Conditions Treated */}
      <Section
        title="Conditions We Treat"
        subtitle="Physiotherapy can help with a wide range of conditions"
        backgroundColor="gray"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            'Back Pain',
            'Neck Pain',
            'Sports Injuries',
            'Post-Surgical Rehabilitation',
            'Joint Pain',
            'Mobility Issues',
            'Muscle Weakness',
            'Postural Problems',
            'Sciatica',
            'Shoulder Pain',
            'Knee Problems',
            'Functional Recovery',
          ].map((condition, idx) => (
            <div key={idx} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
              <FiCheckCircle className="text-primary-600 flex-shrink-0" size={18} />
              <span className="text-gray-700">{condition}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently Asked Questions"
        backgroundColor="white"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-dark-900 mb-3">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing & Booking */}
      <Section
        title="Pricing & Booking"
        subtitle="Affordable physiotherapy services"
        backgroundColor="primary"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">₹350</h3>
            <p className="text-gray-600 mb-6">Per 1-hour session</p>
            <a
              href={businessInfo.whatsapp}
              className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center mb-3"
            >
              Book Now
            </a>
            <a
              href={businessInfo.social.phone}
              className="block w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-bold py-3 px-4 rounded-lg transition-colors text-center"
            >
              Call Us
            </a>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-dark-900 mb-4">Ready to Start?</h3>
            <p className="text-gray-600 mb-6">
              Contact us today to schedule your physiotherapy session and begin your journey to better health.
            </p>
            <div className="space-y-3">
              <a
                href={businessInfo.whatsapp}
                className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors font-medium"
              >
                <SiWhatsapp size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href={businessInfo.social.phone}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors font-medium"
              >
                <FiPhone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Other Services */}
      <Section
        title="Other Services"
        subtitle="Explore our complete range of wellness services"
        backgroundColor="white"
        centered
      >
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {[
            { name: 'Sports Rehabilitation', slug: 'sports-rehabilitation' },
            { name: 'Acupressure Therapy', slug: 'acupressure-therapy' },
            { name: 'Chiropractic Care', slug: 'chiropractic-care' },
            { name: 'Cupping Therapy', slug: 'cupping-therapy' },
          ].map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="px-6 py-3 bg-gray-100 hover:bg-primary-100 text-dark-900 rounded-lg transition-colors font-medium"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
