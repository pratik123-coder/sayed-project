import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
  title: string;
  icon: string;
  link: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, link, features }) => (
  <div className="bg-white text-black m-6 mx-10 rounded-lg shadow-lg flex flex-col items-center">
    {/* Title and Icon Flexbox */}
    <div className="flex justify-between p-3 px-10 bg-black text-white items-center w-full mb-4 rounded-t-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Go to ${title}`}>
        <Image height={40} width={40} alt={title} className="ml-4" src={icon} />
      </a>
    </div>
    {/* Feature List */}
    <ul className="text-left px-10 py-6">
      {features.map((item, idx) => (
        <li key={idx} className="mb-2">
          • {item}
        </li>
      ))}
    </ul>
  </div>
);

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
      icon: 'https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/qntg6s9a9fd2orbyqm9v',
      link: 'https://example.com/expense-management',
      features: ['Unified Ticketing Solutions', 'Enhanced Sales Clarity', 'Comprehensive Channel Integration'],
    },
    {
      title: 'Inventory Management',
      icon: 'https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/qntg6s9a9fd2orbyqm9v',
      link: 'https://example.com/inventory-management',
      features: ['Unified Ticketing Solutions', 'Enhanced Sales Clarity', 'Comprehensive Channel Integration'],
    },
    {
      title: 'Employee Management',
      icon: 'https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/qntg6s9a9fd2orbyqm9v',
      link: 'https://example.com/employee-management',
      features: ['Unified Ticketing Solutions', 'Enhanced Sales Clarity', 'Comprehensive Channel Integration'],
    },
    {
      title: 'Maintenance Management',
      icon: 'https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/qntg6s9a9fd2orbyqm9v',
      link: 'https://example.com/maintenance-management',
      features: ['Unified Ticketing Solutions', 'Enhanced Sales Clarity', 'Comprehensive Channel Integration'],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white">
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {features.slice(0, 3).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {features.slice(3).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
