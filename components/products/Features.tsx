import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

interface FeatureCardProps {
  title: string;
  icon: string;
  link: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, link, features }) => (
  <div className="bg-white text-black m-4  mx-4 rounded-lg flex flex-col items-center">
    {/* Title and Icon Flexbox */}
    <div className="flex justify-between p-3 px-10 bg-black text-white items-center w-full mb-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Go to ${title}`}>
        <Image height={40} width={40} alt={title} className="ml-4" src={icon} />
      </a>
    </div>
    {/* Feature List */}
    <ul className="text-left px-6 py-6">
      {features.map((item, idx) => (
        <li key={idx} className="mb-2 flex items-center ">
          <FaCheckCircle className='me-2 bg-gradient-to-b bg-clip-text from-[#141446] to-[#3F4279]'/> {item}
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
      <div>
      <Image height={500} alt='he' width={1700} className='pb-10 px-10' src="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/ljdmgpnow96iitnffnaw" />
    </div>
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.slice(0, 3).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {features.slice(3).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
