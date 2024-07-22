// components/PricingPage.tsx

import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Transparent pricing for you and your team
        </h1>
        <p className="text-2xl text-gray-700">
          Transparent pricing, with clear, accessible rates.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Everyone can focus on what matters most — achieving your goals.
        </p>
      </div>
      <div className="flex justify-center space-x-6">
        <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Plan</h2>
          <p className="mt-4 text-gray-600">$19/month</p>
          <ul className="mt-4">
            <li className="text-gray-700">Feature 1</li>
            <li className="text-gray-700">Feature 2</li>
            <li className="text-gray-700">Feature 3</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-lg">
            Choose Basic
          </button>
        </div>
        <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Pro Plan</h2>
          <p className="mt-4 text-gray-600">$49/month</p>
          <ul className="mt-4">
            <li className="text-gray-700">Feature 1</li>
            <li className="text-gray-700">Feature 2</li>
            <li className="text-gray-700">Feature 3</li>
            <li className="text-gray-700">Feature 4</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-lg">
            Choose Pro
          </button>
        </div>
        <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Enterprise Plan</h2>
          <p className="mt-4 text-gray-600">$99/month</p>
          <ul className="mt-4">
            <li className="text-gray-700">Feature 1</li>
            <li className="text-gray-700">Feature 2</li>
            <li className="text-gray-700">Feature 3</li>
            <li className="text-gray-700">Feature 4</li>
            <li className="text-gray-700">Feature 5</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-lg">
            Choose Enterprise
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
