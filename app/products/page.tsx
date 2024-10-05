"use client";
import Features from "@/components/products/Features";
import Needs from "@/components/products/Need";
import Overview from "@/components/products/Overview";
import Pricing from "@/components/products/Pricing";
import Image from "next/image";
import { SetStateAction, useState } from "react";

const Products = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div className="py-8">
      <div className="flex items-center justify-between px-36">
        <div>
          <Image 
            src="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/prj5f6avsuobrfzi85cb" 
            alt="onetkt" 
            width={100} 
            height={100} 
          />
        </div>
        <div className="flex items-center h-12 space-x-6 justify-center rounded-full bg-gradient-to-tl from-blue-950 to-gray-800 px-8">
          <button
            className={`text-white px-4 py-2 ${activeTab === "overview" ? "font-semibold" : ""}`}
            onClick={() => handleTabClick("overview")}
          >
            Overview
          </button>
          <button
            className={`text-white px-4 py-2 ${activeTab === "features" ? "font-semibold" : ""}`}
            onClick={() => handleTabClick("features")}
          >
            Features
          </button>
          <button
            className={`text-white px-4 py-2 ${activeTab === "pricing" ? "font-semibold" : ""}`}
            onClick={() => handleTabClick("pricing")}
          >
            Pricing
          </button>
          <button
            className={`text-white px-4 py-2 ${activeTab === "needs" ? "font-semibold" : ""}`}
            onClick={() => handleTabClick("needs")}
          >
            Know your needs
          </button>
        </div>
      </div>
      
      <div className="mt-8">
        {activeTab === "overview" && <Overview />}
        {activeTab === "features" && <Features />}
        {activeTab === "pricing" && <Pricing />}
        {activeTab === "needs" && <Needs />}
      </div>
    </div>
  );
};

export default Products;
