const HeroSection = () => {
  return (
    <div className='rounded-2xl overflow-hidden mx-10'>
      <section className="relative bg-cover bg-center bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/y237jhu4kccrzaqkna3o)] ">
        {/* Overlay */}
        <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/de7hlbfce/video/upload/v1727800501/ijvhn5bjpw1fsstvslkz.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        {/* <div className="absolute inset-0 bg-black opacity-80"></div> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
            We would love to hear from you
          </h1>
          <p className="text-lg md:text-xl max-w-5xl">
            Have questions or just want to say hi? Send us a message below or you can <br/>
            <a
                href="mailto:contact@greyplatforms.com"
                className="underline hover:text-gray-200"
              >
                contact@greyplatforms.com
              </a> .
          </p>

        </div>

      </section>

    </div>
  );
}

export default HeroSection;