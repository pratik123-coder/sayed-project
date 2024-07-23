// components/AdminTask.tsx
import React from 'react';

const AdminTask: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h3 className="text-sm text-indigo-600 font-semibold">Easy admin</h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Take the pain out of company admin
          </h2>
          <p className="text-lg text-gray-500">
            Eliminate the hassle, nobody wants it. Take the pain out of company admin with our all-in-one platform. Simplify projects and focus on what really drives your business forward.
          </p>
        </div>
        <div className="lg:w-1/2 bg-indigo-50 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Tasks</h3>
            <a href="#" className="text-sm text-indigo-600 font-semibold">View all</a>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-indigo-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.293 9.293a1 1 0 011.414 0L9 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                </div>
                <span className="text-gray-900">Finance reporting</span>
              </div>
              <span className="text-gray-600">84%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-green-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.293 9.293a1 1 0 011.414 0L9 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                </div>
                <span className="text-gray-900">Business proposal</span>
              </div>
              <span className="text-gray-600">100%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-indigo-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.293 9.293a1 1 0 011.414 0L9 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                </div>
                <span className="text-gray-900">Update leadership</span>
              </div>
              <span className="text-gray-600">28%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-indigo-200 p-2 rounded-full">
                  <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.293 9.293a1 1 0 011.414 0L9 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                </div>
                <span className="text-gray-900">Onboarding plan</span>
              </div>
              <span className="text-gray-600">0%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminTask;