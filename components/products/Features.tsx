import Image from 'next/image';
import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Ticket Management',
      icon: 'https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/qntg6s9a9fd2orbyqm9v',
      link: 'https://example.com/ticket-management',
      features: ['Unified Ticketing Solutions', 'Enhanced Sales Clarity', 'Comprehensive Channel Integration'],
    },
    {
      title: 'Expense Management',
      icon: 'https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/qntg6s9a9fd2orbyqm9v', // Replace with actual image link
      link: 'https://example.com/expense-management',
      features: ['Unified Ticketing Solutions', 'Enhanced Sales Clarity', 'Comprehensive Channel Integration'],
    },
    {
      title: 'Inventory Management',
      icon: 'https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/qntg6s9a9fd2orbyqm9v', // Replace with actual image link
      link: 'https://example.com/inventory-management',
      features: ['Unified Ticketing Solutions', 'Enhanced Sales Clarity', 'Comprehensive Channel Integration'],
    },
    {
      title: 'Employee Management',
      icon: 'https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/qntg6s9a9fd2orbyqm9v', // Replace with actual image link
      link: 'https://example.com/employee-management',
      features: ['Unified Ticketing Solutions', 'Enhanced Sales Clarity', 'Comprehensive Channel Integration'],
    },
    {
      title: 'Maintenance Management',
      icon: 'https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/qntg6s9a9fd2orbyqm9v', // Replace with actual image link
      link: 'https://example.com/maintenance-management',
      features: ['Unified Ticketing Solutions', 'Enhanced Sales Clarity', 'Comprehensive Channel Integration'],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white">
      {/* Doodle Image */}
      <div className="w-full px-20 pb-10">
        <img
          src="https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/agrjlc37upp3ojv3ifqq"
          alt="Doodle"
          className="w-full h-auto"
        />
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 px-10 rounded-lg shadow-lg flex flex-col items-center"
          >
            {/* Title and Icon Flexbox */}
            <div className="flex justify-between items-center w-full mb-4">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              {/* Clickable Icon */}
              <a href={feature.link} target="_blank" rel="noopener noreferrer">
                <Image
                  height={40}
                  width={40}
                  alt={feature.title}
                  className="ml-4"
                  src={feature.icon}
                />
              </a>
            </div>
            {/* Feature List */}
            <ul className="text-left">
              {feature.features.map((item, idx) => (
                <li key={idx} className="mb-2">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {features.slice(3).map((feature, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 px-10 rounded-lg shadow-lg flex flex-col items-center"
          >
            {/* Title and Icon Flexbox */}
            <div className="flex justify-between items-center  mb-4">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              {/* Clickable Icon */}
              <a href={feature.link} target="_blank" rel="noopener noreferrer">
                <Image
                  height={40}
                  width={40}
                  alt={feature.title}
                  className="ml-4"
                  src={feature.icon}
                />
              </a>
            </div>
            {/* Feature List */}
            <ul className="text-left">
              {feature.features.map((item, idx) => (
                <li key={idx} className="mb-2">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
