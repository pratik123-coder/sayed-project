import Image from 'next/image';
import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="text-center py-16 bg-white">
      <h2 className="text-4xl font-bold mb-4">Our mission has meaning</h2>
      <p className="text-gray-600 mb-8">
        Every action we take is one step closer to achieving our mission: to bring meaningful change to the workplace.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="w-full md:w-1/3 p-4">
          <Image src="/path/to/your/image1.jpg" height={500} width={1000} alt="Image 1" className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/3 p-4">
          <Image src="/path/to/your/image2.jpg" height={500} width={1000} alt="Image 2" className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/3 p-4">
          <Image src="/path/to/your/image3.jpg" height={500} width={1000} alt="Image 3" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
