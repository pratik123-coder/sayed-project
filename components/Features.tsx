import React from "react";
export default function Features() {
  return (
    <section className="py-12" id="features">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">OneTKT is built for you</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 h-[17rem]">
              <div className="text-purple-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">⁠Ticket Management</h3>
              <p>Streamline ticketing across all channels with a unified solution integrating operators, managers, conductors, agents, counters, kiosks, and OTAs. Enhance sales clarity and eliminate manual errors for a seamless process.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 ">
            <div className="bg-white shadow-lg rounded-lg p-6 h-[17rem]">
              <div className="text-purple-500 mb-4">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Expense Management</h3>
              <p className="pb-4">Manage costs efficiently with categorized expense pockets, integrated bank payments, and centralized banking. Track expenses by category and monitor key metrics and KPIs to ensure better financial oversight and more effective budget management.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6  h-[17rem]">
              <div className="text-purple-500 mb-4">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 13c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4z"
                  />
                </svg>
                
              </div>
              <h3 className="text-xl font-bold mb-2  text-center">Maintenance Management</h3>
              <p>Integrate with vendors to track spare parts, garages, and tire distributors. Use dashboards for breakdown maintenance, asset tracking, and maintenance logs to ensure effective monitoring and preventive care.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6  h-[17rem]">
              <div className="text-purple-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2  text-center">⁠Inventory Management</h3>
              <p>Integrate tax management systems and digitize inventory documents, accessible by bus via the dashboard. Manage seats and pricing while gaining insights and KPIs for effective and efficient inventory management.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6  h-[17rem]">
              <div className="text-purple-500 mb-4">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 13c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2  text-center">⁠Staff Management</h3>
              <p>Track employee attendance and absences, process payroll, assign inventory, and monitor performance to manage staff effectively and gain insights into overall business operations. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
