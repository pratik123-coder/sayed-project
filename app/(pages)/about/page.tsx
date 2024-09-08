// pages/about.tsx
import FAQ from '@/components/FAQ';
import Team from '@/components/Members';
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-8 pt-28 ">
      {/* Mission Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl font-bold mb-4">Our 'Mission' Has Meaning</h1>
        <p className="text-lg">
          Every action we take is one step closer to achieving our mission:
          to bring meaningful change to the world.
        </p>
      </section>

      {/* Culture Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-8">Our Six-point Culture</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Column */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Customer Obsession</h3>
            <p>
              Our Leaders start with the customer and work backwards.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Ownership</h3>
            <p>
              Our Leaders act on behalf of the entire company, beyond just their own team.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Invent & Simplify</h3>
            <p>
              Our Leaders start with the customer and work backwards.
            </p>
          </div>

          {/* Second Column */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Think Big</h3>
            <p>
              Our Leaders create and communicate a bold direction that inspires results.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Earn Trust</h3>
            <p>
              Our Leaders listen attentively, speak candidly, and treat others respectfully.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Bias for Action</h3>
            <p>
              Our Leaders value calculated risk-taking.
            </p>
          </div>
        </div>
      </section>
      <Team />
      <FAQ />
    </div>
  );
};

export default About;
