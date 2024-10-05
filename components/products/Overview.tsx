import Image from "next/image";

const Overview = () => {
  return (
    <div >
      <div className="bg-white">
        <div className="py-4 z-10 bg-[url('https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/haztmote8weisksxgmns')] bg-cover rounded-2xl">
          {/* Our Stack Section */}
          <div className="flex items-center justify-center px-8">
            <div>
              <h2 className="text-5xl font-bold mb-4 text-center">Our Stack, MoveQI</h2>
              <p className="text-center text-xl max-w-4xl mb-8">
                MoveQI Stack is our advanced software suite designed specifically for the transportation and logistics industry,
                empowering the entire ecosystem of the industry and connecting verticals for better efficiency.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center justify-center bg-black text-white rounded-md h-20 w-80 text-center mb-4">
                  Scalable Architecture
                </div>
                <div className="flex items-center justify-center bg-black text-white rounded-md h-20 w-80 text-center mb-4">
                  Advanced Data Synchronisation
                </div>
                <div className="flex items-center justify-center bg-black text-white rounded-md h-20 w-80 text-center mb-4">
                  Adaptive Multi-Device Compatibility
                </div>
                <div className="flex items-center justify-center bg-black text-white rounded-md h-20 w-80 text-center mb-4">
                  AI/ML Integration
                </div>
              </div>
            </div>
            <div className="mb-8 relative">
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
      <div className="py-8 px-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          OneTKT: All-in-One Bus Management System
        </h2>
        <div className="px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black text-white rounded-lg p-6 shadow-lg text-center">
              <h3 className="font-semibold mb-6">Ticket Management</h3>
              <p>Streamline ticketing with a unified solution integrating all stakeholders, enhancing sales clarity, and reducing errors.</p>
            </div>
            <div className="bg-black text-white rounded-lg p-6 shadow-lg text-center">
              <h3 className="font-semibold mb-6">Expense Management</h3>
              <p>Manage costs with categorized expenses, integrated bank payments, and centralized banking for enhanced financial oversight.</p>
            </div>
            <div className="bg-black text-white rounded-lg p-6 shadow-lg text-center">
              <h3 className="font-semibold mb-6">Maintenance Management</h3>
              <p>Track assets and maintenance cycles with dashboards for effective asset management and monitoring.</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            <div className="bg-black text-white rounded-lg p-6 shadow-lg text-center">
              <h3 className="font-semibold mb-6">Employee Management</h3>
              <p>Track attendance, process payroll, manage inventory, and monitor performance for comprehensive staff management and operations.</p>
            </div>
            <div className="bg-black text-white rounded-lg p-6 shadow-lg text-center">
              <h3 className="font-semibold mb-6">Inventory Management</h3>
              <p>Integrate tax systems, digitize inventory, and manage seats and pricing with dashboard insights and KPIs.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Overview;
