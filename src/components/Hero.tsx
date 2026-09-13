import Button from './Button';
import { businessInfo } from '@/config/constants';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  fullHeight?: boolean;
}

export default function Hero({
  title,
  description,
  image = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
  primaryCTA,
  secondaryCTA,
  fullHeight = true,
}: HeroProps) {
  return (
    <section className={`relative ${fullHeight ? 'min-h-screen' : 'py-20'} overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
          <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${fullHeight ? 'h-full flex flex-col justify-center translate-y-8' : 'py-20'}`}>        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title.split(' ').map((word, idx) => {
              const highlightWords = ['Revive', 'Restore', 'Reclaim'];
              if (highlightWords.includes(word)) {
                return (
                  <span key={idx} className="text-primary-400">
                    {word}{' '}
                  </span>
                );
              }
              return <span key={idx}>{word} </span>;
            })}
          </h1>

          {description && (
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl leading-relaxed">              {description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCTA && (
              <Button
                href={primaryCTA.href}
                size="lg"
                className="text-center"
              >
                {primaryCTA.text}
              </Button>
            )}

            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className="text-center border-white text-white hover:bg-white/10"
              >
                {secondaryCTA.text}
              </Button>
            )}

            {!primaryCTA && !secondaryCTA && (
              <Button
                href={businessInfo.social.phone}
                external
                size="lg"
                className="text-center"
              >
                Call Us
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
