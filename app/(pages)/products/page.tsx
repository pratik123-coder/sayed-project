// pages/product.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from '@/components/FAQ';

const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 pt-28">
      {/* Header section */}
      <header className="text-center mb-10 ">
        <div className='flex flex-col gap-y-4 px-40 items-center justify-center'>
          <div className="text-4xl font-bold">Our Stack, MoveQI</div>
          <div className='text-xl'>MoveQI Stack is our advanced software suite designed specifically for the transportation and logistics industry which empowers the entire ecosystem of the inderercie connecting</div>
        </div>
      </header>

      <div className='flex items-center justify-center gap-x-10'>
        <Section
          title={"Scalable Architecture"}
        />
        <Section
          title={"Advance Data Synchronization"}
        />
        <Section
          title={"Adaptive Muti-Device Compatibility"}
        />
        <Section
          title={"AI/ML Integration"}
        />
      </div>
      <div className='pt-10'>
        <div className="text-4xl font-bold text-center">OneTKT: All-in-One Bus Management System</div>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-row justify-center items-center gap-x-20 pt-5 px-24'>
            <Section 
              title={"Ticket Management"}
              description='Streamline ticketing with a unified solution
integrating all stakeholders, enhancing
sales clarity, and reducing errors.'
            />
            <Section 
              title={"Expense Management"}
              description='Manage costs with categorised expenses,
integrated bank payments, and centralised
banking for enhanced financial oversight.
'
            />
          </div>
          <div className='flex flex-row justify-center items-center gap-x-14 pt-5'>
          <Section 
              title={"Maintenance Management"}
              description='Track assets and maintenance cycles with
dashboards for effective asset
management and monitoring.'
            />
            <Section 
              title={"Employee Management"}
              description='Track attendance, process payroll, manage
inventory, and monitor performance for
comprehensive staff management and operations.'
            />
            <Section 
              title={"Inventory Management"}
              description='Integrate tax systems, digitize inventory,
and manage seats and pricing with
dashboard insights and KPIs.'
            />
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

const Section: React.FC<{ title: string; description?: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="border p-4 shadow-lg text-center ">
      <h2 className="text-xl font-semibold">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default ProductPage;
