import React from 'react';
import Image from 'next/image';

interface SlidingCardProps {
  imageUrl: string;
  title: string;
  description: string;
  animation: 'slideInRight' | 'slideInLeft' | string;
}

const SlidingCard: React.FC<SlidingCardProps> = ({ imageUrl, title, description, animation }) => {
  return (
    <div className={`animate-${animation} transition-all duration-500 ease-in-out max-w-sm bg-white shadow-lg rounded overflow-hidden`}>
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h5 className="text-lg font-bold mb-2">{title}</h5>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SlidingCard;
