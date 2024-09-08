import React from 'react';
import Image from 'next/image';

interface HoverImageProps {
  src: string;
  alt: string;
  text: string;
}

const HoverImage: React.FC<HoverImageProps> = ({ src, alt, text }) => {
  return (
    <div className="relative inline-block w-96 h-72 rounded-lg overflow-hidden ">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-300 ease-in-out "
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <span className="text-white text-center text-xl font-semibold">{text}</span>
      </div>
    </div>
  );
};

export default HoverImage;
