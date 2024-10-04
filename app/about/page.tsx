import Culture from "@/components/about/culture";
import Teams from "@/components/about/teams";

const About = () => {
  return (
    <div>
      <div className=" shadow-xl">
        <div className='rounded-[40px] overflow-hidden mx-10'>
          <section className="relative bg-cover bg-center bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/y237jhu4kccrzaqkna3o)] rounded-t-[40px]">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-[40vh] text-white text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight mt-12">
                our ‘Mission’ has meaning
              </h1>
              <p className="text-lg md:text-xl max-w-5xl mb-6">
                Every action we take is one step closer to achieving our mission:<br />to bring meaningful change to the world.
              </p>

            </div>

          </section>
          
        </div>
        <Culture />
        <Teams/>
      </div>
      
    </div>
  );
}

export default About;