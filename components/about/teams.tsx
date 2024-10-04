import Image from 'next/image';
import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sayed Ashraf Ali',
    role: 'Chief Executive Officer',
    imageUrl: 'https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/b0uy56ivsf0p5zv6b7mu', 
    linkedinUrl: 'https://linkedin.com/in/sayedashrafali-661521207',
  },
  {
    name: 'Ranjan B Goswami',
    role: 'Chief Operating Officer',
    imageUrl: 'https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/r7jp9bzq9ohdk4zyitb4', 
    linkedinUrl: 'https://linkedin.com/in/biswaranjangoswami1979',
  },
  {
    name: 'Sabyasachi Baral',
    role: 'Chief Marketing Officer',
    imageUrl: 'https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/ts6gq6esmlq0juoazfkl', 
    linkedinUrl: 'https://linkedin.com/in/sabyasachi1',
  },
  {
    name: 'Joyjit Sinha',
    role: 'Financial Advisor',
    imageUrl: 'https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/nwbcjjk9vuqfegudb2kc', 
    linkedinUrl: 'https://linkedin.com/in/joyjit-sinha-6547b358',
  },
];

const Teams = () => {
  return (
    <div className='bg-white px-10 pb-10'>
    <div className="bg-black text-white py-10 px-4 rounded-[50px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-6">Humans of RangeQI</h2>
        <p className="text-center text-gray-400 mb-12">
          At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-black border border-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-60">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  height={400}
                  width={400}
                  className="w-full h-full object-cover"
                />
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.028-3.037-1.851-3.037-1.852 0-2.136 1.445-2.136 2.937v5.669h-3.555v-11.5h3.413v1.571h.049c.475-.9 1.637-1.851 3.367-1.851 3.6 0 4.264 2.368 4.264 5.448v6.332zM5.337 8.433c-1.144 0-2.067-.928-2.067-2.071 0-1.144.923-2.071 2.067-2.071s2.067.927 2.067 2.071c0 1.143-.923 2.071-2.067 2.071zm-1.782 12.019h3.554v-11.5h-3.554v11.5zm15.195-18.452h-15.558c-.897 0-1.624.729-1.624 1.625v15.75c0 .897.727 1.625 1.624 1.625h15.558c.896 0 1.624-.728 1.624-1.625v-15.75c0-.896-.728-1.625-1.624-1.625z"/>
                  </svg>
                </a>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Teams;
