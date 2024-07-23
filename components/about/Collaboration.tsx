import React from 'react';
import Image from 'next/image';

const Collaboration: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-16 p-28 bg-white">
      <div className="md:w-1/2 text-center md:text-left p-8">
        <h2 className="text-4xl font-bold mb-4">Collaboration is in our nature</h2>
        <p className="text-lg">
          Collaboration isn’t just a goal — it’s woven into the very fabric of who we are. Experience the power of teamwork and collective innovation with us.
        </p>
      </div>
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
    </div>
  );
};

export default Collaboration;
