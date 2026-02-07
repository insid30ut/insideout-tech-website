import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imageSrc?: string; // Optional image at the bottom
}

export default function ServiceCard({ title, description, features, icon, imageSrc }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6 text-blue-500">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600 font-medium">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      {imageSrc && (
        <div className="h-48 relative w-full mt-auto">
           {/* Fallback color if image fails or is placeholder */}
           <div className="absolute inset-0 bg-gray-200"></div>
           <Image 
             src={imageSrc} 
             alt={title}
             fill
             className="object-cover"
           />
        </div>
      )}
    </div>
  );
}
