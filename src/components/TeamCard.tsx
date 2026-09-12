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
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {image && (
        <div className="relative h-64 bg-gray-300 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-900 mb-1">{name}</h3>
        <p className="text-primary-600 font-semibold text-sm mb-1">{title}</p>
        <p className="text-gray-500 text-xs mb-3">{qualifications}</p>
        <p className="text-gray-600 text-sm line-clamp-4">{description}</p>
      </div>
    </div>
  );
}
