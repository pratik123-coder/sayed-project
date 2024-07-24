// components/AdminTask.tsx
import Image from 'next/image';
import React from 'react';
import image from '../public/8.png';

const GrowBusiness: React.FC = () => {
  return (
    <section className="lg:py-12 p-1  bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-x-24 gap-y-10">
      <div className=" bg-indigo-50 p-6 rounded-2xl  shadow-lg lg:flex flex-row-reverse items-center justify-center px-10">
          {/* <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Tasks</h3>
            <a href="#" className="text-sm text-indigo-600 font-semibold">View all</a>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-indigo-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.293 9.293a1 1 0 011.414 0L9 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                </div>
                <span className="text-gray-900">Finance reporting</span>
              </div>
              <span className="text-gray-600">84%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-green-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.293 9.293a1 1 0 011.414 0L9 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                </div>
                <span className="text-gray-900">Business proposal</span>
              </div>
              <span className="text-gray-600">100%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-indigo-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.293 9.293a1 1 0 011.414 0L9 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                </div>
                <span className="text-gray-900">Update leadership</span>
              </div>
              <span className="text-gray-600">28%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-indigo-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.293 9.293a1 1 0 011.414 0L9 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                </div>
                <span className="text-gray-900">Onboarding plan</span>
              </div>
              <span className="text-gray-600">0%</span>
            </div>
          </div> */}
          <Image src={image} height={500} width={500} alt="Admin Task "  />
        </div>
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mt-2 lg:mb-4 mb-14">
            Grow with your Business
          </h2>
          <p className="text-lg text-gray-500">
            Now you can grow confidently, nothing is holding you back. Our platform grows as you grow. Adapting to your needs. Scale from a small business to a enterprise with us.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default GrowBusiness;
