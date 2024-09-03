"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ceo from './team/ceo.png';
import coo from './team/coo.png';
import cmo from './team/cmo.png';
import fi from './team/fi.png';

const teamMembers = [
  { 
    name: 'Sayed Ashraf Ali', 
    designation: 'Chief Executive Officer', 
    photo: ceo, 
    linkedin: 'https://linkedin.com/in/sayedashrafali-661521207' 
  },
  { 
    name: 'Ranjan B Goswami', 
    designation: 'Chief Operating Officer', 
    photo: coo, 
    linkedin: 'https://linkedin.com/in/biswaranjangoswami1979' 
  },
  { 
    name: 'Sabyasachi Baral', 
    designation: 'Chief Marketing Officer', 
    photo: cmo, 
    linkedin: 'https://linkedin.com/in/sabyasachi1' 
  },
  { 
    name: 'Joyjit Sinha', 
    designation: 'Financial Advisor', 
    photo: fi, 
    linkedin: 'https://linkedin.com/in/joyjit-sinha-6547b358' 
  }
];

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setSelectedMember(selectedMember === name ? null : name);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center min-w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
        <div className="lg:flex grid items-center justify-center lg:space-x-4 lg:space-x-8">
          {teamMembers.map((member, index) => (
            
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg w-full lg:w-1/4 mb-4 lg:mb-0">
              <a
                onClick={() => handleClick(member.name)}

              >
              <div className="flex justify-center cursor-pointer">
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
              
            
              
              <div
                className={`mt-4 flex items-center justify-center space-x-2 transition-opacity duration-300 ${selectedMember === member.name ? 'opacity-100' : 'opacity-0'}`}
              >
                {selectedMember === member.name && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.5 19h-2.5v-11h2.5v11zm-1.25-12.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm13.75 12.5h-2.5v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-2.5v-11h2.5v1.182c.731-.9 1.84-1.682 3.318-1.682 2.379 0 4.182 1.804 4.182 4.182v7.318z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
