import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Privacy Policy | Revive Holistic Wellness Centre',
  description: 'Privacy Policy for Revive Holistic Wellness Centre',
  robots: 'noindex, follow',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <Hero
        title="Privacy Policy"
        description="How we protect your personal information"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
        fullHeight={false}
      />

      <Section
        title="Privacy Policy"
        backgroundColor="white"
      >
        <div className="max-w-3xl mx-auto prose prose-lg text-gray-600">
          <h3 className="text-2xl font-bold text-dark-900 mb-4">Introduction</h3>
          <p className="mb-4">
            Revive Holistic Wellness Centre ("we", "our", or "us") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
          </p>

          <h3 className="text-2xl font-bold text-dark-900 mb-4 mt-8">Information Collection and Use</h3>
          <p className="mb-4">
            We collect several different types of information for various purposes to provide and improve our service to you.
          </p>

          <h4 className="text-xl font-bold text-dark-900 mb-2">Types of Data Collected</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Personal Data: Name, email address, phone number, and other contact information</li>
            <li>Usage Data: Information about how you interact with our website</li>
            <li>Device Data: Information about your device, browser, and IP address</li>
          </ul>

          <h3 className="text-2xl font-bold text-dark-900 mb-4 mt-8">Use of Data</h3>
          <p className="mb-4">
            Revive Holistic Wellness Centre uses the collected data for various purposes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To provide and maintain our website</li>
            <li>To notify you about changes to our website</li>
            <li>To provide customer service</li>
            <li>To gather analysis or valuable information for improving our website</li>
            <li>To monitor website usage</li>
          </ul>

          <h3 className="text-2xl font-bold text-dark-900 mb-4 mt-8">Security of Data</h3>
          <p className="mb-4">
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
          </p>

          <h3 className="text-2xl font-bold text-dark-900 mb-4 mt-8">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at reviveholisticwellnesscentre@gmail.com or call +91 9818515259.
          </p>
        </div>
      </Section>

      <Footer />
    </>
  );
}
