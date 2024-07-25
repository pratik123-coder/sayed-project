import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 fixed">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-6 lg:mb-0">
            <div className="text-xl font-bold">RangeQI</div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="mb-6 lg:mb-0">
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-600">Home</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Features</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Pricing</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Blog</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">About</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Contact</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Log in</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-600">Twitter</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Instagram</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">LinkedIn</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">YouTube</a></li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
