import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  backgroundColor?: 'white' | 'gray' | 'primary';
  className?: string;
  centered?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  backgroundColor = 'white',
  className = '',
  centered = false,
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
  };

  return (
    <section id={id} className={`${bgColors[backgroundColor]} py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center mx-auto' : ''}`}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg text-gray-600 ${centered ? 'mx-auto' : ''}`} style={centered ? { maxWidth: '600px' } : {}}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
