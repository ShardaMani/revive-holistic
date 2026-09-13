'use client';

import { useEffect, useState } from 'react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
}

interface PartnersSliderProps {
  partners: Partner[];
}

export default function PartnersSlider({
  partners,
}: PartnersSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (partners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [partners.length]);

  if (!partners.length) return null;

  const currentPartner = partners[currentIndex];

  const previousSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + partners.length) % partners.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % partners.length
    );
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative flex items-center justify-center">

        {/* Previous button */}
        {partners.length > 1 && (
          <button
            onClick={previousSlide}
            aria-label="Previous partner"
            className="absolute left-0 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
          >
            ‹
          </button>
        )}

        {/* Partner logo */}
        <a
          href={currentPartner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-3xl h-56 md:h-64 bg-white rounded-xl shadow-md flex items-center justify-center p-8 md:p-12 hover:shadow-lg transition-shadow"
          aria-label={`Visit ${currentPartner.name} website`}
        >
          <img
            src={currentPartner.logo}
            alt={currentPartner.name}
            className="max-w-full max-h-full object-contain"
          />
        </a>

        {/* Next button */}
        {partners.length > 1 && (
          <button
            onClick={nextSlide}
            aria-label="Next partner"
            className="absolute right-0 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
          >
            ›
          </button>
        )}
      </div>

      {/* Slide indicators */}
      {partners.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {partners.map((partner, index) => (
            <button
              key={partner.id}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to ${partner.name}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary-600 w-6'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}

      <p className="text-center text-sm text-gray-500 mt-4">
        Click a partner logo to visit their website
      </p>
    </div>
  );
}