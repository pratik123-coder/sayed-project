"use client";
import Image from "next/image";
import { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/RangeQI/Navbar/uzaz41k3ghx9eeux546d"
            height={200}
            width={190}
            className=""
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className={`fixed z-50 top-0 left-0 w-screen flex flex-col justify-center items-center ${
          isOpen
            ? " origin-left duration-700 backdrop-blur-2xl backdrop-brightness-50 overflow-hidden"
            : "-translate-x-[100%] origin-center duration-700"
        } h-screen touch-none`}
      >
        <svg
          className="w-5 h-5 text-white absolute top-8 right-8 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l12 12M13 1L1 13"
          />
        </svg>
        <div className="flex flex-col items-center gap-y-4 tracking-wide">
          <ul className="text-[1.2rem] flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg space-y-4 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded-full hover:text-white ease-in-out duration-500 hover:bg-purple-950"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 rounded-full hover:text-white ease-in-out duration-500 hover:bg-purple-950"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="block py-2 px-3 rounded-full hover:text-white ease-in-out duration-500 hover:bg-purple-950"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contacts"
                className="block py-2 px-3 rounded-full hover:text-white ease-in-out duration-500 hover:bg-purple-950"
              >
                Contact
              </a>
            </li>
          </ul>
          <div>
            <a
              href="/raisequery"
              className="inline-flex items-center p-2 px-6 w-full bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/jvhnsqsbivyn1suaafwx)] h-10 justify-center text-sm text-white rounded-xl"
            >
              Raise Query
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const DesktopNavbar = () => {
  return (
    <nav className="lg:flex hidden bg-white shadow-xl">
      <div className="flex flex-row items-center justify-between mx-16 p-4 w-full">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/RangeQI/Navbar/uzaz41k3ghx9eeux546d"
            height={200}
            width={190}
            className=""
            alt="Flowbite Logo"
          />
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded-md hover:text-white ease-in-out duration-500 hover:bg-black text-black"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 rounded-md hover:text-white ease-in-out duration-500 hover:bg-black text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="block py-2 px-3 rounded-md hover:text-white ease-in-out duration-500 hover:bg-black text-black"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contacts"
                className="block py-2 px-3 rounded-md hover:text-white ease-in-out duration-500 hover:bg-black text-black"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Raise Query */}
        <div>
          <a
            href="/raisequery"
            className="inline-flex items-center p-2 px-6 w-full bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/jvhnsqsbivyn1suaafwx)] h-10 justify-center text-sm text-white rounded-xl"
          >
            Raise Query
          </a>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <div>
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
};
export default Navbar;
