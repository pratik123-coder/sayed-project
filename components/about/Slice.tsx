// components/SliceInNumbers.tsx
import React from 'react';

const SliceInNumbers: React.FC = () => {
  const stats = [
    { value: '8,017', label: 'Customers' },
    { value: '21', label: 'Employees' },
    { value: '$850k', label: 'Investment raised' }
  ];

  return (
    <section className="py-12 px-24 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Slice in numbers</h2>
        <div className="flex justify-center space-x-4 lg:space-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg w-1/3">
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliceInNumbers;
