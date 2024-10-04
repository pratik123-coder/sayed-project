import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="px-10 bg-white  shadow-2xl">
      <div className='rounded-t-[40px] overflow-hidden'>
        <section className="relative bg-cover bg-center bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/y237jhu4kccrzaqkna3o)] rounded-t-[40px]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-[40vh] text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight mt-12">
              Fix your <span className="font-semibold">&apos;Failure&apos;</span> here...
            </h1>
            <p className="text-lg md:text-xl max-w-5xl mb-6">
              Say goodbye to inefficiencies and hello to streamlined operations. Manage your business effortlessly, track key metrics, and enhance performance with ease. We&apos;ve got everything you need to succeed.
            </p>
            <a
              href="/contacts"
              className="bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/jvhnsqsbivyn1suaafwx)] bg-cover text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
              Book a call ➜
            </a>
          </div>

          {/* Dashboard Image */}
          <div className="relative z-10 flex justify-center mt-6">
            <Image
              src="https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/oigbys8zjidd4muha872"
              alt="Dashboard"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;