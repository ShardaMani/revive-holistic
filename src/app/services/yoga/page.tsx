
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
  title: 'Yoga in Najafgarh | Revive Holistic',
  description:
    'Looking for yoga classes in Najafgarh? Revive Holistic Wellness Centre offers personalized yoga sessions focused on flexibility, mobility, strength, relaxation, and overall well-being.',
  alternates: {
    canonical: '/services/yoga',
  },
  keywords: [
    'yoga in Najafgarh',
    'yoga classes Delhi',
    'yoga for beginners',
    'yoga for flexibility',
    'yoga for mobility',
    'wellness yoga Najafgarh',
  ],
};

export default function YogaPage() {
  const benefits = [
    'Improved flexibility and mobility',
    'Better posture and body awareness',
    'Improved balance and coordination',
    'Support for strength and physical conditioning',
    'Relaxation and stress management',
    'Improved breathing awareness',
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description:
        'Understanding your current mobility, flexibility, experience level, and personal wellness goals.',
    },
    {
      step: 2,
      title: 'Personalized Yoga Plan',
      description:
        'A yoga routine tailored according to your individual needs, experience, mobility, and goals.',
    },
    {
      step: 3,
      title: 'Guided Yoga Session',
      description:
        'Instructor-guided yoga practice including postures, breathing techniques, mindful movement, and relaxation.',
    },
    {
      step: 4,
      title: 'Progress & Guidance',
      description:
        'Ongoing guidance to help you gradually improve flexibility, mobility, balance, strength, and overall well-being.',
    },
  ];

  const faqs = [
    {
      q: 'What does a yoga session involve?',
      a: 'A typical yoga session may include warm-up movements, yoga postures, breathing techniques, mindful movement, relaxation, and guidance based on your individual needs.',
    },
    {
      q: 'Do I need previous yoga experience?',
      a: 'No. Yoga sessions can be adapted according to your experience level, mobility, physical ability, and individual goals.',
    },
    {
      q: 'How long does a yoga session take?',
      a: 'A standard session is approximately 1 hour, depending on the type of session and your individual requirements.',
    },
    {
      q: 'Can beginners join the yoga sessions?',
      a: 'Yes. Beginners can participate, and the practice can be adjusted according to their current level of flexibility, mobility, and experience.',
    },
    {
      q: 'Can yoga help improve flexibility and mobility?',
      a: 'Regular yoga practice can support flexibility, mobility, balance, posture, mindful movement, and general physical well-being when practiced appropriately.',
    },
    {
      q: 'How can I book a yoga session?',
      a:
        'You can book your session through WhatsApp by clicking the WhatsApp button or by calling us directly at ' +
        businessInfo.phone +
        '.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Yoga', url: '/services/yoga' },
        ]}
      />

      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Yoga in Najafgarh"
        subtitle="Personalized Yoga & Wellness Sessions"
        description="Guided yoga sessions focused on flexibility, mobility, strength, mindful movement, relaxation, and overall well-being."
        image="/images/yoga.jpeg"
        primaryCTA={{
          text: 'Book a Session',
          href: businessInfo.whatsapp,
        }}
        fullHeight={false}
      />

      {/* What is Yoga */}
      <Section
        title="What is Yoga?"
        backgroundColor="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Yoga is a practice that combines physical postures, breathing
              techniques, mindful movement, and relaxation to support physical
              and mental well-being.
            </p>

            <p className="text-gray-600 mb-4">
              At Revive Holistic Wellness Centre, our yoga sessions are
              designed around the individual. Whether you are new to yoga or
              already have experience, the practice can be adapted according to
              your mobility, flexibility, physical ability, and wellness goals.
            </p>

            <p className="text-gray-600">
              Our approach focuses on helping you develop better movement,
              flexibility, balance, body awareness, breathing, and relaxation
              through a structured and guided yoga practice.
            </p>
          </div>

          <img
            src="/images/yoga.jpeg"
            alt="Yoga session at Revive Holistic Wellness Centre"
            className="rounded-lg shadow-lg w-full"
            loading="lazy"
          />
        </div>
      </Section>

      
      {/* Our Yoga Approach */}
      <Section
        title="Our Yoga Approach"
        backgroundColor="white"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-600 text-white font-bold">
                    {item.step}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-dark-900 mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section
        title="Benefits of Yoga"
        subtitle="Support your movement, flexibility, and overall well-being"
        backgroundColor="gray"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
            >
              <FiCheckCircle
                className="text-primary-600 mt-1 flex-shrink-0"
                size={20}
              />

              <span className="text-gray-700 font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Yoga for Wellness & Movement */}
      <Section
        title="Yoga for Wellness & Movement"
        subtitle="A practice that can be adapted to different needs and experience levels"
        backgroundColor="white"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            'Flexibility & Mobility',
            'Postural Awareness',
            'Balance & Coordination',
            'Mindful Movement',
            'Breathing & Relaxation',
            'Gentle Movement',
            'Strength & Conditioning',
            'Overall Wellness',
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-5 shadow-sm"
            >
              <FiCheckCircle
                className="text-primary-600 mx-auto mb-3"
                size={22}
              />

              <p className="text-gray-700 font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently Asked Questions"
        backgroundColor="gray"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h4 className="text-lg font-bold text-dark-900 mb-3">
                {faq.q}
              </h4>

              <p className="text-gray-600">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing & Booking */}
      <Section
        title="Pricing & Booking"
        subtitle="Book your personalized yoga session"
        backgroundColor="primary"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              ₹350
            </h3>

            <p className="text-gray-600 mb-6">
              Per 1-hour session
            </p>

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
            <h3 className="text-xl font-bold text-dark-900 mb-4">
              Ready to Start?
            </h3>

            <p className="text-gray-600 mb-6">
              Contact us today to schedule your yoga session and begin your
              journey toward better movement and overall wellness.
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
            {
              name: 'Physiotherapy & Rehabilitation',
              slug: 'physiotherapy',
            },
            {
              name: 'Sports Rehabilitation',
              slug: 'sports-rehabilitation',
            },
            {
              name: 'Acupressure Therapy',
              slug: 'acupressure-therapy',
            },
            {
              name: 'Chiropractic Care',
              slug: 'chiropractic-care',
            },
            {
              name: 'Cupping Therapy',
              slug: 'cupping-therapy',
            },
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
