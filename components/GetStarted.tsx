import React from 'react';

const ReadyToGetStarted: React.FC = () => {
  return (
    <div className="bg-purple-100 rounded-lg p-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-8">Take the first step to growing your business</p>
      <a
        href="#"
        className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700"
      >
        Get started →
      </a>
    </div>
  );
};

export default ReadyToGetStarted;
