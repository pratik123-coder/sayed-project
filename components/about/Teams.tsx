import React from 'react';
import Image from 'next/image';

const Teams: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-16 p-28 bg-white">
      <div className="md:w-1/2 p-8">
        <Image 
          src="/path/to/your/image.jpg" 
          alt="People collaborating" 
          className="rounded-lg"
          layout="responsive"
          height={300}
          width={300}
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left p-8">
        <h2 className="text-4xl font-bold mb-4">We Invest in our team</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt atque eaque inventore et, amet officia sunt tempora nemo. Sequi, delectus! Nesciunt quibusdam, molestias ex deleniti veritatis suscipit! Eveniet, sunt minus!
        </p>
      </div>
      
    </div>
  );
};

export default Teams;
