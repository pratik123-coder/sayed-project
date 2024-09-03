import React from "react";
export default function Features() {
  return (
    <section className="py-12" id="features">
      <div className="container mx-auto px-4 p-20">
        <h2 className="text-4xl lg:text-7xl font-bold text-center mb-12 pb-10">Features</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 h-[9rem]">

              <h3 className="text-xl font-bold mb-2 text-center">Real-Time Insights</h3>
              <p>Track real-time business updates, gain clarity, and identify improvement areas with our software</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 ">
            <div className="bg-white shadow-lg rounded-lg p-6 h-[19rem] lg:h-[9rem]">

              <h3 className="text-xl font-bold mb-2 text-center">Multi-Device Access</h3>
              <p className="pb-4">Operable on multiple devices with seamless integration for effortless use across all your daily tools.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6  h-[9rem]">

              <h3 className="text-xl font-bold mb-2  text-center">Unified User Management</h3>
              <p>Centralise user data management and streamline analysis with our software, eliminating the need for tedious data reviews.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6  h-[9rem]">

              <h3 className="text-xl font-bold mb-2  text-center">Secure Privacy</h3>
              <p>Data security is our priority because we understand the importance of your business's privacy. We've simplified it for you.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6  h-[9rem]">

              <h3 className="text-xl font-bold mb-2  text-center">Automated Savings</h3>
              <p>Save on costs by automating and digitizing your business. Say goodbye to manual methods.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6  h-[9rem]">

              <h3 className="text-xl font-bold mb-2  text-center">Operational Oversight</h3>
              <p>"Efficiently track and manage inventory and assets, optimising demand and supply with our software.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
