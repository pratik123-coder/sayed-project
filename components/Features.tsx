import React from "react";
export default function Features() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Wedge is built for you</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
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
              <p>Efficiency starts here. Streamline your work with our project tracking features. Simplify tasks and maximise productivity.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
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
              <h3 className="text-xl font-semibold mb-2 text-center">Works with your favourite tools</h3>
              <p>Integrate quickly and directly with your tools you already love. It’s as easy as 1, 2, 3.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
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
              <h3 className="text-xl font-semibold mb-2  text-center">Save hours every week</h3>
              <p>Unlock more time for what matters. Save hours every week with Slice. Optimize your workflow and reclaim your time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
