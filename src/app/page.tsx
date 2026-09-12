import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import TeamCard from '@/components/TeamCard';
import Button from '@/components/Button';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LocalBusinessSchema, OrganizationSchema } from '@/components/StructuredData';
import { businessInfo, services, specializations, team, conditions, whyChooseUs } from '@/config/constants';
import { FiCheckCircle, FiPhone, FiMapPin } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Revive Holistic Wellness Centre | Physiotherapy in Najafgarh, Delhi',
  description: 'Revive Holistic Wellness Centre in Najafgarh, South-West Delhi offers personalized physiotherapy, rehabilitation, sports therapy, chiropractic care, acupressure, cupping therapy and holistic wellness services.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <OrganizationSchema />

      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Your path to better physical wellness starts here"
        description="Personalized holistic care solutions for improved mobility and wellness. Located in Najafgarh, South-West Delhi."
        image="/images/front_image.jpg"
        primaryCTA={{
          text: 'Book a Therapy',
          href: '#appointments',
        }}
        secondaryCTA={{
          text: `Call ${businessInfo.phone}`,
          href: businessInfo.social.phone,
        }}
        fullHeight={true}
      />

      {/* What We Offer Section */}
      <Section
        id="services"
        title="What We Offer"
        subtitle="Comprehensive wellness and rehabilitation services tailored to your needs"
        backgroundColor="gray"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.name}
              description={service.shortDescription}
              slug={service.slug}
            />
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        title="About Revive Holistic Wellness Centre"
        backgroundColor="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/about_image.jpg"
              alt="Revive Holistic Wellness Centre"
              className="rounded-lg shadow-lg w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Revive Your Health. Restore Your Movement. Reclaim Your Wellness.
            </h3>
            <p className="text-gray-600 mb-4">
              Revive Holistic Wellness Centre, located in Najafgarh, South-West Delhi, is a holistic healthcare and wellness centre dedicated to helping individuals achieve better health, mobility, comfort, and overall well-being through an integrated approach to care.
            </p>
            <p className="text-gray-600 mb-6">
              Under the direction of Dr Tanya Mehra, Dr Kapil Davirkar, and Abhimanyu Vats, Revive Holistic Wellness Centre brings together complementary and evidence-informed therapeutic approaches with the aim of addressing the individual needs of every patient.
            </p>
            <p className="text-gray-600 mb-6">
              Our approach focuses not only on managing symptoms but also on understanding contributing factors such as posture, movement patterns, lifestyle, physical stress, and overall wellness. Treatment plans are designed according to the patient's condition, requirements, and therapeutic goals.
            </p>
            <Button href="#about" variant="outline">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Our Approach Section */}
      <Section
        id="approach"
        title="Our Approach to Wellness"
        backgroundColor="primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80"
              alt="Our Wellness Approach"
              className="rounded-lg shadow-lg w-full"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-gray-700 mb-4">
              At Revive Holistic Wellness Centre, we believe that every individual is different. Therefore, our goal is to develop a personalized approach rather than relying on a single treatment method for everyone.
            </p>
            <p className="text-gray-700 mb-6">
              Depending on the patient's assessment and requirements, our services may include physiotherapy and rehabilitation, therapeutic exercises, manual therapy and mobility techniques, chiropractic care, sports rehabilitation, posture and movement assessment, acupressure and complementary therapies, alternative medicine approaches, pain and functional rehabilitation, and lifestyle and wellness guidance.
            </p>
            <div className="space-y-3">
              {[
                'Personalized Assessment & Treatment',
                'Multidisciplinary Care Approach',
                'Evidence-Informed Therapies',
                'Patient-Centered Focus',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <FiCheckCircle className="text-primary-700 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What We Specialize In */}
      <Section
        id="specializations"
        title="What We Specialize In"
        subtitle="Advanced therapeutic techniques and rehabilitative care"
        backgroundColor="gray"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec) => (
            <div key={spec.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-dark-900 mb-3">{spec.name}</h4>
              <p className="text-gray-600 text-sm mb-4">{spec.description}</p>
              <Link
                href={`/services/${spec.slug}`}
                className="inline-flex text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Conditions We Help Manage */}
      <Section
        id="conditions"
        title="Conditions We May Help Manage"
        subtitle="Our team provides assessment and therapeutic care for:"
        backgroundColor="white"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {conditions.map((condition, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-700">{condition}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
          <p className="text-sm text-blue-900">
            <strong>Disclaimer:</strong> These are conditions we may provide assessment and therapeutic care for. 
            Always consult with a healthcare professional for accurate diagnosis and personalized treatment.
          </p>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section
        id="why-choose-us"
        title="Why Choose Revive Holistic Wellness Centre?"
        backgroundColor="gray"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((reason) => (
            <div key={reason.id} className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-4">✓</div>
              <h4 className="text-lg font-bold text-dark-900 mb-3">{reason.title}</h4>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Vision */}
      <Section
        id="vision"
        title="Our Vision"
        backgroundColor="primary"
        centered
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Our vision is to create a trusted wellness destination in Najafgarh and South-West Delhi where people can access personalized, professional, and holistic approaches to physical health and well-being.
          </p>
          <p className="text-lg text-gray-700">
            At Revive Holistic Wellness Centre, we believe that recovery is not simply about reducing discomfort—it is about helping people move better, function better, and work toward a healthier and more active lifestyle.
          </p>
        </div>
      </Section>

      {/* Our Clinical Team */}
      <Section
        id="team"
        title="Our Clinical & Wellness Team"
        backgroundColor="white"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              title={member.title}
              qualifications={member.qualifications}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </Section>

      {/* Appointments & Pricing */}
      <Section
        id="appointments"
        title="Online Appointments"
        subtitle="Choose your preferred therapy and book your session"
        backgroundColor="gray"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-dark-900 mb-2">{service.name}</h3>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-2">{service.shortDescription}</p>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-600 mb-2">{service.price}</p>
                <p className="text-gray-600 text-sm">Duration: {service.duration}</p>
              </div>
              <a
                href={businessInfo.whatsapp}
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center"
              >
                BOOK
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-dark-900 mb-6 text-center">Book Your Appointment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={businessInfo.whatsapp}
              className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg transition-colors font-medium"
            >
              <SiWhatsapp size={20} />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={businessInfo.social.phone}
              className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-colors font-medium"
            >
              <FiPhone size={20} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Contact Us"
        subtitle="Better yet, see us in person!"
        backgroundColor="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-900 mb-4 flex items-center space-x-2">
                <FiMapPin className="text-primary-600" />
                <span>Our Location</span>
              </h3>
              <p className="text-gray-700 font-semibold mb-2">{businessInfo.name}</p>
              <p className="text-gray-600 text-sm">{businessInfo.address}</p>
              <Button
                href={`https://www.google.com/maps/search/${encodeURIComponent(businessInfo.address)}`}
                external
                variant="outline"
                size="sm"
                className="mt-4"
              >
                Get Directions
              </Button>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-900 mb-4">Clinic Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <strong className="text-dark-900">Opening Hours:</strong><br />
                  {businessInfo.hours.open} – {businessInfo.hours.close}
                </p>
                <p>
                  <strong className="text-dark-900">Lunch Break:</strong><br />
                  {businessInfo.hours.lunchStart} – {businessInfo.hours.lunchEnd}
                </p>
                <p>
                  <strong className="text-dark-900">Holidays:</strong><br />
                  {businessInfo.hours.holidays}
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 className="text-lg font-bold text-dark-900 mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <a
                  href={businessInfo.social.phone}
                  className="flex items-center space-x-3 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <FiPhone size={20} />
                  <span>{businessInfo.phone}</span>
                </a>
                <a
                  href={businessInfo.social.email}
                  className="flex items-center space-x-3 text-primary-600 hover:text-primary-700 font-medium break-all"
                >
                  <span>✉️</span>
                  <span>{businessInfo.email}</span>
                </a>
                <a
                  href={businessInfo.whatsapp}
                  className="flex items-center space-x-3 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <SiWhatsapp size={20} />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
