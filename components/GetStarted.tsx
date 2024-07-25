import React from 'react';

const ReadyToGetStarted: React.FC = () => {
  return (
    <footer className="bg-purple-100 rounded-lg p-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-4">Take the first step to growing your business</p>
      <a
        href="#"
        className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700"
      >
        Contact Us
      </a>
      <p className="mt-4 text-gray-600 text-sm">
        TicketCo Solutions Private Limited | CIN: U72900OR2022PTC039033 | 
        <a href="mailto:queries@rangeqi.com" className="text-blue-600 hover:underline"> Mail: queries@rangeqi.com </a> | 
        <a href="tel:+918903572614" className="text-blue-600 hover:underline"> Phone: +91-8903572614 </a> | 
        Address: Flat: 3B, Block II, Krishna Garden Apartment, Jagamara, 751030
      </p>
    </footer>
  );
};

export default ReadyToGetStarted;
