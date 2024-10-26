import Culture from "@/components/about/culture";
import Teams from "@/components/about/teams";

const About = () => {
  return (
    <div>
      <div className="mx-8">
        <div className="rounded-[40px] overflow-hidden mx-10">
          <section className="relative bg-contain bg-center bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/y237jhu4kccrzaqkna3o)] rounded-t-[40px]">
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
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black opacity-80"></div> */}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-[40vh] text-white text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight mt-12">
                our ‘Mission’ has meaning
              </h1>
              <p className="text-lg md:text-xl max-w-5xl mb-6">
                Every action we take is one step closer to achieving our
                mission:
                <br />
                to bring meaningful change to the world.
              </p>
            </div>
          </section>
        </div>
        <Culture />
        <Teams />
      </div>
    </div>
  );
};

export default About;
