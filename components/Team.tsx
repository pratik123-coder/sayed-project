import Image from 'next/image';
import React from 'react';

const teamMembers = [
  { name: 'Freddy', role: 'Marketing', avatar: '/avatars/freddy.png' },
  { name: 'Iliana', role: 'Design', avatar: '/avatars/iliana.png' },
  { name: 'Julianna', role: 'Finance', avatar: '/avatars/julianna.png' },
  { name: 'Ethen', role: 'Product', avatar: '/avatars/ethen.png' },
];

const TeamManagement: React.FC = () => {
  return (
    <div className="flex justify-evenly items-center p-36 ">
      <div>
        <h2 className="text-lg text-blue-600 font-medium">Central platform</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Manage your team in one place</h1>
        <p className="text-lg text-gray-700 mt-4">
          Centralise your team management. Manage your entire team in one tool.<br />
          Easy communication, project management, and smooth collaboration with your team.
        </p>
      </div>
      <div className="bg-purple-100 p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Team at a glance</h3>

        </div>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index} className="flex items-center mb-4">
              <Image className="w-12 h-12 rounded-full mr-4" height={500} width={500} src={member.avatar} alt={member.name} />
              <div>
                <p className="text-lg font-medium text-gray-900">{member.name}</p>
                <span className="text-sm text-gray-500">{member.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamManagement;
