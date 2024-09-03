// components/AdminTask.tsx
import Image from 'next/image';
import React from 'react';
import image from '../public/8.png';

const GrowBusiness: React.FC = () => {
  return (
    <section className="lg:py-12 p-1 bg-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-x-24 gap-y-10">
        <div className="bg-indigo-50 p-6 rounded-2xl shadow-lg flex items-center justify-center px-10">
          <Image src={image} height={500} width={500} alt="Admin Task" />
        </div>
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mt-2 lg:mb-4 pb-6">
            Grow with your Business
          </h2>
          <p className="text-lg text-gray-500">
            Now you can grow confidently, nothing is holding you back. Our platform grows as you grow. Adapting to your needs. Scale from a small business to an enterprise with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;
