"use client"
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isActive = (href: string) => {
    return 1;
  }


  // Function to check if the link is active

  return (
    <header className="fixed shadow-lg z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between gap-x-8">
          <a
            className="flex-none text-xl font-semibold dark:text-white flex gap-x-4 justify-center items-center"
            href="/"
          >
            <Image src={logo} alt="logo" width={150} height={150} />
          </a>
          <div className="hidden sm:flex flex-none text-xl font-semibold dark:text-white gap-x-4 justify-center items-center">
            <Link
              className={`font-medium ${
                isActive("/") ? "text-blue-500" : "text-gray-600 hover:text-gray-400"
              } dark:text-neutral-400 dark:hover:text-neutral-500`}
              href="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className={`font-medium ${
                isActive("/products")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              } dark:text-neutral-400 dark:hover:text-neutral-500`}
              href="/products"
            >
              Products
            </Link>
            <Link
              className={`font-medium ${
                isActive("/about")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              } dark:text-neutral-400 dark:hover:text-neutral-500`}
              href="/about"
            >
              About Us
            </Link>
            <Link
              className={`font-medium ${
                isActive("/contact")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              } dark:text-neutral-400 dark:hover:text-neutral-500`}
              href="/contact"
            >
              Contact Us
            </Link>
          </div>

          {/* Toggle button for mobile */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 basis-full grow sm:hidden`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              className={`font-medium ${
                isActive("/") ? "text-blue-500" : "text-gray-600 hover:text-gray-400"
              } dark:text-neutral-400 dark:hover:text-neutral-500`}
              href="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className={`font-medium ${
                isActive("/products")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              } dark:text-neutral-400 dark:hover:text-neutral-500`}
              href="/products"
            >
              Products
            </Link>
            <Link
              className={`font-medium ${
                isActive("/about")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              } dark:text-neutral-400 dark:hover:text-neutral-500`}
              href="/about"
            >
              About Us
            </Link>
            <Link
              className={`font-medium ${
                isActive("/contact")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              } dark:text-neutral-400 dark:hover:text-neutral-500`}
              href="/contact"
            >
              Contact Us
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="#"
            >
              Raise Query
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
