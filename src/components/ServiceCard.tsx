import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  slug: string;
  price?: string;
  duration?: string;
  compact?: boolean;
}

export default function ServiceCard({
  title,
  description,
  image,
  slug,
  price,
  duration,
  compact = false,
}: ServiceCardProps) {
  if (compact) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-dark-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
        >
          Learn More
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {image && (
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {price && (
          <div className="mb-4 pb-4 border-b border-gray-200">
            <p className="text-primary-600 font-semibold">
              {price} {duration && <span className="text-sm text-gray-600"> • {duration}</span>}
            </p>
          </div>
        )}

        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          Learn More
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
