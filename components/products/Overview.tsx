import Image from "next/image";

const Overview = () => {
  return (
    <div>
      {/* Video Background */}
      <div className="relative bg-white rounded-2xl mx-10 shadow-md">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 rounded-2xl"
        >
          <source
            src="https://res.cloudinary.com/dajq9hekb/video/upload/f_auto:video,q_auto/q6bjurn19cdixozndasf"
            type="video/mp4"
            className="rounded-2xl px-10"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content Layer */}
        <div className="relative z-10 py-4 bg-cover rounded-2xl">
          {/* Our Stack Section */}
          <div className="flex lg:flex-row flex-col items-center justify-center px-8">
            <div>
              <h2 className="lg:text-5xl text-2xl font-bold mb-4 lg:text-left text-center">
                Our Stack
              </h2>
              <p className="lg:text-left text-center text-xl max-w-4xl mb-8">
                Our Stack is our advanced software suite designed
                specifically for the transportation and logistics industry,
                empowering the entire ecosystem of the industry and connecting
                verticals for better efficiency.
              </p>
              <div className="grid md:grid-cols-2 place-content-center items-center justify-center gap-6 mb-8 text-[1.15rem] font-semibold">
                <div className="flex items-center justify-center transition-transform duration-200 hover:scale-105 bg-black text-white rounded-md h-28 lg:w-[20rem] w-full text-center mb-4">
                  Scalable Architecture
                </div>
                <div className="flex items-center justify-center transition-transform duration-200 hover:scale-105 bg-black text-white rounded-md h-28 lg:w-[20rem] w-full text-center mb-4 px-3">
                  Advanced Data Synchronisation
                </div>
                <div className="flex items-center justify-center transition-transform duration-200 hover:scale-105 bg-black text-white rounded-md h-28 lg:w-[20rem] w-full text-center mb-4 px-3">
                  Adaptive Multi-Device Compatibility
                </div>
                <div className="flex items-center justify-center transition-transform duration-200 hover:scale-105 bg-black text-white rounded-md h-28 lg:w-[20rem] w-full text-center mb-4">
                  AI/ML Integration
                </div>
              </div>
            </div>
            <div className="lg:flex hidden mb-8 relative">
              <Image
                src="https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/x28czy2wcgnmmtikhunx"
                alt="MoveQI Image"
                width={800}
                height={600}
                layout="intrinsic"
                objectFit="cover"
                
              />
            </div>
          </div>

          {/* OneTKT Section */}
        </div>
      </div>

      {/* OneTKT Section */}
      <div className="py-8 px-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          OneTKT: All-in-One Bus Management System
        </h2>
        <div className="lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-black text-white rounded-lg p-6 shadow-lg text-center transition-transform duration-200 hover:scale-105">
              <h3 className="font-semibold mb-6 text-[1.5rem]">Ticket Management</h3>
              <p>
                Streamline ticketing with a unified solution integrating all
                stakeholders, enhancing sales clarity, and reducing errors.
              </p>
            </div>
            <div className="bg-black text-white rounded-lg p-6 shadow-lg text-center transition-transform duration-200 hover:scale-105">
              <h3 className="font-semibold mb-6 text-[1.5rem]">Expense Management</h3>
              <p>
                Manage costs with categorized expenses, integrated bank
                payments, and centralized banking for enhanced financial
                oversight.
              </p>
            </div>
            <div className="bg-black text-white rounded-lg p-6 shadow-lg text-center transition-transform duration-200 hover:scale-105">
              <h3 className="font-semibold mb-6 text-[1.5rem]">Maintenance Management</h3>
              <p>
                Track assets and maintenance cycles with dashboards for
                effective asset management and monitoring.
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            <div className="bg-black text-white rounded-lg p-6 shadow-lg text-center transition-transform duration-200 hover:scale-105">
              <h3 className="font-semibold mb-6 text-[1.5rem]">Employee Management</h3>
              <p>
                Track attendance, process payroll, manage inventory, and monitor
                performance for comprehensive staff management and operations.
              </p>
            </div>
            <div className="bg-black text-white rounded-lg p-6 shadow-lg text-center transition-transform duration-200 hover:scale-105">
              <h3 className="font-semibold mb-6 text-[1.5rem]">Inventory Management</h3>
              <p>
                Integrate tax systems, digitize inventory, and manage seats and
                pricing with dashboard insights and KPIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
