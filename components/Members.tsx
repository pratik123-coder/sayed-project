// components/Team.tsx
import Image from 'next/image';
import React from 'react';
import ceo from "./team/ceo.png";
import coo from "./team/coo.png";
import cmo from "./team/cmo.png";
import fi from "./team/fi.png";

const teamMembers = [
  { name: 'Sayed Ashraf Ali', designation: 'CEO', photo: ceo },
  { name: 'Ranjan B Goswami', designation: 'COO', photo: coo },
  { name: 'Sabyasachi Baral', designation: 'CMO', photo: cmo },
  { name: 'Joyjit Sinha', designation: 'Financial Advisor', photo: fi }
];

const Team: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
        <div className="flex justify-center space-x-4 lg:space-x-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg w-full lg:w-1/4 mb-4 lg:mb-0">
              <div className="flex justify-center">
                <Image
                  src={member.photo}
                  alt={member.name}
                  height={128}
                  width={128}
                  className="rounded-full mb-10 h-30 w-30 shadow-md"
                />
              </div>
              <p className="text-xl font-bold text-gray-900">{member.name}</p>
              <p className="text-gray-500">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
