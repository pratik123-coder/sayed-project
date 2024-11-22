"use client";
import Features from "@/components/products/Features";
import Needs from "@/components/products/Need";
import Overview from "@/components/products/Overview";
import Pricing from "@/components/products/Pricing";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/magicui/dropdownMenu";

const Products = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div className="py-8">
      <div className="flex lg:flex-row flex-col items-center justify-between lg:px-36">
        <div>
          <Image
            src="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/prj5f6avsuobrfzi85cb"
            alt="onetkt"
            width={1000}
            height={1000}
            className="h-14 w-56"
          />
        </div>
        <div className="mt-10 md:flex hidden items-center h-12 space-x-6 justify-center rounded-full bg-gradient-to-tl from-blue-950 to-gray-800 px-8">
          <button
            className={`text-white px-4 py-2 ${
              activeTab === "overview" ? "font-semibold" : ""
            }`}
            onClick={() => handleTabClick("Overview")}
          >
            Overview
          </button>
          <button
            className={`text-white px-4 py-2 ${
              activeTab === "features" ? "font-semibold" : ""
            }`}
            onClick={() => handleTabClick("Features")}
          >
            Features
          </button>
          <button
            className={`text-gray-400 px-4 py-2 ${
              activeTab === "pricing" ? "font-semibold" : ""
            }`}
            // onClick={() => handleTabClick("pricing")}
          >
            Pricing
          </button>
          <button
            className={`text-gray-400 px-4 py-2 ${
              activeTab === "needs" ? "font-semibold" : ""
            }`}
            // onClick={() => handleTabClick("needs")}
          >
            Know your needs
          </button>
        </div>
        <div className="md:hidden flex w-full">
          <DropdownMenu>
            <DropdownMenuTrigger className="my-8 mx-16 w-full bg-gradient-to-tl from-blue-950 to-gray-800 text-white text-[1rem] py-2 rounded-xl">{activeTab}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg></DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem onClick={() => handleTabClick("Overview")}>Overview</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTabClick("Features")}>Features</DropdownMenuItem>
              <DropdownMenuItem className="text-gray-400">Pricing</DropdownMenuItem>
              <DropdownMenuItem className="text-gray-400">Know your needs</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mt-4">
        {activeTab === "Overview" && <Overview />}
        {activeTab === "Features" && <Features />}
        {activeTab === "pricing" && <Pricing />}
        {activeTab === "needs" && <Needs />}
      </div>
    </div>
  );
};

export default Products;
