import Image from "next/image";

const Overview = () => {
  return (
    <div className="py-4 px-4 bg-[url-(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/haztmote8weisksxgmns)]">
      {/* Our Stack Section */}
      <div className="flex   items-center justify-center px-8">
        <div>
        <h2 className="text-5xl font-bold mb-4 text-center">Our Stack, MoveQI</h2>
        <p className="text-center text-xl max-w-4xl mb-8">
          MoveQI Stack is our advanced software suite designed specifically for the transportation and logistics industry 
          which empowers the entire ecosystem of the industry and connecting verticals for better efficiency.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center justify-center bg-black text-white rounded-md h-20 w-80 text-center">Scalable Architecture</div>
          <div className="flex items-center justify-center bg-black text-white rounded-md h-20 w-80 text-center">Advanced Data Synchronisation</div>
          <div className="flex items-center justify-center bg-black text-white rounded-md h-20 w-80 text-center">Adaptive Multi-Device Compatibility</div>
          <div className="flex items-center justify-center bg-black text-white rounded-md h-20 w-80 text-center">AI/ML Integration</div>
        </div>
        </div>
        <div className="mb-8">
          <Image
            src="https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/x28czy2wcgnmmtikhunx"
            alt="MoveQI Image"
            width={800}
            height={600}
            objectFit=" absolute"
          />
        </div>
      </div>

      {/* OneTKT Section */}
      <div className="py-8 px-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          OneTKT: All-in-One Bus Management System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-black text-white rounded-md p-6 text-center">
            <h3 className="font-semibold mb-2">Ticket Management</h3>
            <p>Streamline ticketing with unified solution integrating all audiences, ensuring sales clarity, and reducing errors.</p>
          </div>
          <div className="bg-black text-white rounded-md p-6 text-center">
            <h3 className="font-semibold mb-2">Expense Management</h3>
            <p>Manage costs with categorized expenses, integrating payment interfaces, and enabling banking for a professional oversight.</p>
          </div>
          <div className="bg-black text-white rounded-md p-6 text-center">
            <h3 className="font-semibold mb-2">Maintenance Management</h3>
            <p>Track associated maintenance cycles with data-driven tools for effective asset management and reporting.</p>
          </div>
          <div className="bg-black text-white rounded-md p-6 text-center">
            <h3 className="font-semibold mb-2">Employee Management</h3>
            <p>Track attendance, process payroll, manage inventory, and optimize performance for comprehensive staff management.</p>
          </div>
          <div className="bg-black text-white rounded-md p-6 text-center">
            <h3 className="font-semibold mb-2">Inventory Management</h3>
            <p>Integrate the systems, digitize inventory, and manage assets with data-backed insights and analytics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
