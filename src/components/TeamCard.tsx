interface TeamCardProps {
  name: string;
  title: string;
  qualifications: string;
  description: string;
  image?: string;
}

export default function TeamCard({
  name,
  title,
  qualifications,
  description,
  image,
}: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-5">

        {/* Photo */}
        {image && (
          <div className="md:col-span-2 bg-gray-100">
            <div className="h-80 md:h-full min-h-[360px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Information */}
        <div className="md:col-span-3 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-dark-900 mb-2">
            {name}
          </h3>

          <p className="text-primary-600 font-semibold text-base mb-2">
            {title}
          </p>

          <p className="text-gray-500 font-medium text-sm mb-5">
            {qualifications}
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}