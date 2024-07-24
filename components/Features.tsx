import React from "react";
export default function Features() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-12">RangeQI is built for you</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 h-[15rem]">
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
              <h3 className="text-xl font-semibold mb-2 text-center">Streamline your work</h3>
              <p>Efficiency starts here. Streamline your Business with our project tracking features. Simplify business operations and maximise efficiency.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 ">
            <div className="bg-white shadow-lg rounded-lg p-6 h-[15rem]">
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
              <h3 className="text-xl font-semibold mb-2 text-center">Works with your business</h3>
              <p>Integrate quickly and directly with your business. It’s as easy as one, two, three.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6  h-[15rem]">
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
              <h3 className="text-xl font-semibold mb-2  text-center">Save at business</h3>
              <p>Unlock more time and savings for what matters. Save hours every week with us. Optimize your workflow and reclaim your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
