"use client"
import React, { useState } from 'react';

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState('Ticket Management');

  const navbarItems = [
    'Ticket Management',
    'Expense Management',
    'Inventory Management',
    'Employee Management',
    'Maintenance Management',
  ];

  type PricingPlan = {
    name: string;
    price: number;
    features: string[];
  };
  
  type PricingPlans = {
    [key: string]: {
      plans: PricingPlan[];
    };
  };
  
  const pricingPlans: PricingPlans = {
    'Ticket Management': {
      plans: [
        { name: 'Standart', price: 5, features: ['5 collections', 'Worldwide accessibility', '25 automation actions', 'Access all features', '24/7 support', 'Sync across devices', 'Share with up to 5 users'] },
        { name: 'Extended', price: 12, features: ['Unlimited collections', 'Worldwide accessibility', 'Unlimited automation actions', 'Access all features', '24/7 support', 'Sync across devices', 'Share with unlimited users'] },
        { name: 'Premium+', price: 16, features: ['Unlimited collections', 'Worldwide accessibility', 'Unlimited automation actions', 'Access all features', '24/7 support', 'Sync across devices', 'Share with unlimited users'] },
      ],
    },
    // Other sections like 'Expense Management', 'Inventory Management', etc., can be added similarly.
  };

  const currentPlans = pricingPlans[selectedTab]?.plans || [];

  return (
    <div className="w-full bg-white">
    
      {/* Navbar */}
      <div className="flex justify-center bg-black mx-24 rounded-full  text-white p-4 space-x-8">
        {navbarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(item)}
            className={`text-lg p-2 rounded-full  ${selectedTab === item ? 'bg-white text-black transition-transform ease-in-out duration-300 ' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold">Our Pricing</h2>
        <p className="text-gray-600">Pay securely online and manage the booking via desktop or the mobile app.</p>

        {/* Toggle for Monthly/Annually */}
        <div className="flex justify-center my-6">
          <button className="px-4 py-2 mx-2 bg-gray-200 rounded-full">Monthly</button>
          <button className="px-4 py-2 mx-2 bg-gray-200 rounded-full">Annually</button>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-36">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6  rounded-lg shadow-lg ${plan.name === 'Extended' ? 'bg-black text-white' : 'bg-white text-black'} transition-all`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="my-4">${plan.price}/month</p>
              <button className="bg-black text-white py-2 px-6 rounded-lg mt-4">Select Plan</button>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
