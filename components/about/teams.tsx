import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sayed Ashraf Ali",
    role: "CEO",
    imageUrl:
      "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/RangeQI/About%20Us/Teams/iilacsynmmsit3uodq4m",
    linkedinUrl: "https://linkedin.com/in/sayedashrafali-661521207",
  },
  {
    name: "Ranjan B Goswami",
    role: "COO",
    imageUrl:
      "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/RangeQI/About%20Us/Teams/kpmgzfi6s2dan6zglzyb",
    linkedinUrl: "https://linkedin.com/in/biswaranjangoswami1979",
  },
  {
    name: "Sabyasachi Baral",
    role: "CMO",
    imageUrl:
      "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/RangeQI/About%20Us/Teams/v2kql2digr5naj2aj0qw",
    linkedinUrl: "https://linkedin.com/in/sabyasachi1",
  },
  // {
  //   name: "Joyjit Sinha",
  //   role: "Financial Advisor",
  //   imageUrl:
  //     "https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/nwbcjjk9vuqfegudb2kc",
  //   linkedinUrl: "https://linkedin.com/in/joyjit-sinha-6547b358",
  // },
];

const Teams = () => {
  return (
    <div className="bg-white px-10 pb-10">
      <div className="bg-black text-white py-10 px-4 rounded-[50px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-6">
            Humans of RangeQI
          </h2>
          {/* <p className="text-center text-gray-400 mb-12">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p> */}

          <div className="flex flex-row flex-wrap justify-center gap-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-black shadow-lg"
              >
                <div className="relative">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    height={400}
                    width={400}
                    className="w-80 h-80 object-cover p-4"
                  />
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#141446] to-[#3F4279] text-white p-2 px-4 rounded-full"
                  >
                    <FaLinkedin />
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
