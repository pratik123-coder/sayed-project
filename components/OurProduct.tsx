
import Image from 'next/image';
import React from 'react';
import logo from '../public/onetkt.svg'; // Replace with the path to your logo image

const OurProduct: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-5xl  text-center lg:text-5xl font-bold text-gray-900 mb-8">
            Our Product
          </h2>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-x-12 gap-y-8">
        <div className="lg:w-1/2 lg:order-1 flex justify-center lg:justify-start">
          <Image src={logo} alt="Logo" width={250} height={250}  />
        </div>
        <div className="lg:w-1/2 lg:order-2 text-center lg:text-left">
          <p className="text-lg text-gray-600">
            OneTKT is part of our software range, serving as a comprehensive Bus Management System (BMS). It allows Bus Operators to manage ticketing, inventory, staff, expenses, maintenance, and more from a single dashboard. 
            RangeQI also plans to integrate AI and Machine Learning into OneTKT to enhance business efficiency and predictability with greater precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
