import React from 'react';

const values = [
  { icon: '⭐', title: 'Do the right thing' },
  { icon: '👑', title: 'Set the bar for quality' },
  { icon: '🌐', title: 'Celebrate diversity' },
  { icon: '🌍', title: 'Leave the world a bit better' },
  { icon: '👥', title: 'Work as one team' },
  { icon: '❓', title: 'It’s okay to not know' }
];

const Values: React.FC = () => {
  return (
    <div className="text-center py-16 bg-white w-full flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8">Our values guide us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div key={index} className="flex flex-col items-start p-10 ps-10 pe-24 bg-gray-100 rounded-lg">
            <div className="text-4xl mb-4 pb-10">{value.icon}</div>
            <p className="text-lg font-medium">{value.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
