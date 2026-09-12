import Link from 'next/link';
import { businessInfo, services } from '@/config/constants';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-500 mb-2">REVIVE</h3>
            <p className="text-gray-400 text-sm mb-4">Holistic Wellness Centre</p>
            <p className="text-gray-400 text-sm">{businessInfo.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#team" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiPhone className="text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href={businessInfo.social.phone}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiMail className="text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href={businessInfo.social.email}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm break-all"
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <SiWhatsapp className="text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href={businessInfo.whatsapp}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    Message WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start space-x-3">
              <FiMapPin className="text-primary-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Address</h4>
                <p className="text-gray-400 text-sm">{businessInfo.address}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Hours</h4>
              <p className="text-gray-400 text-sm">
                <strong>{businessInfo.hours.open}</strong> – <strong>{businessInfo.hours.close}</strong>
              </p>
              <p className="text-gray-400 text-sm">
                Lunch: {businessInfo.hours.lunchStart} – {businessInfo.hours.lunchEnd}
              </p>
              <p className="text-gray-400 text-sm">{businessInfo.hours.holidays}</p>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <div>
                <p className="text-gray-400 text-sm">
                  © {currentYear} {businessInfo.name} - All Rights Reserved.
                </p>
              </div>
              <div className="flex gap-4 md:justify-end">
                <Link href="/privacy" className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
