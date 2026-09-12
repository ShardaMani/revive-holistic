import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Revive Holistic Wellness Centre',
  description: 'Terms and Conditions for Revive Holistic Wellness Centre',
  robots: 'noindex, follow',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <Hero
        title="Terms & Conditions"
        description="Please read our terms carefully"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
        fullHeight={false}
      />

      <Section
        title="Terms & Conditions"
        backgroundColor="white"
      >
        <div className="max-w-3xl mx-auto prose prose-lg text-gray-600">
          <h3 className="text-2xl font-bold text-dark-900 mb-4">1. Acceptance of Terms</h3>
          <p className="mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h3 className="text-2xl font-bold text-dark-900 mb-4 mt-8">2. Use License</h3>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on Revive Holistic Wellness Centre's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h3 className="text-2xl font-bold text-dark-900 mb-4 mt-8">3. Disclaimer</h3>
          <p className="mb-4">
            The materials on Revive Holistic Wellness Centre's website are provided on an 'as is' basis. Revive Holistic Wellness Centre makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h3 className="text-2xl font-bold text-dark-900 mb-4 mt-8">4. Limitations</h3>
          <p className="mb-4">
            In no event shall Revive Holistic Wellness Centre or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
          </p>

          <h3 className="text-2xl font-bold text-dark-900 mb-4 mt-8">5. Accuracy of Materials</h3>
          <p className="mb-4">
            The materials appearing on Revive Holistic Wellness Centre's website could include technical, typographical, or photographic errors. Revive Holistic Wellness Centre does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>

          <h3 className="text-2xl font-bold text-dark-900 mb-4 mt-8">6. Contact</h3>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at reviveholisticwellnesscentre@gmail.com or call +91 9818515259.
          </p>
        </div>
      </Section>

      <Footer />
    </>
  );
}
