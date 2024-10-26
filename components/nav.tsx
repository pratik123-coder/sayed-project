import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded-full hover:text-white ease-in-out duration-500 hover:bg-purple-950 text-black"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 rounded-full hover:text-white ease-in-out duration-500 hover:bg-purple-950 text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="block py-2 px-3 rounded-full hover:text-white ease-in-out duration-500 hover:bg-purple-950 text-black"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contacts"
                className="block py-2 px-3 rounded-full hover:text-white ease-in-out duration-500 hover:bg-purple-950 text-black"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="/raisequery"
            className="lg:inline-flex items-center p-2 px-6 w-full bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/jvhnsqsbivyn1suaafwx)] h-10 justify-center text-sm text-white rounded-xl hidden"
          >
            Raise Query
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
