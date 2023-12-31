import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import myImage from '../images/isa.jpg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gradient-to-r from-green-700 to-green-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="rounded-full h-8 w-8"
                  src={myImage}
                  alt="Avatar"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                    className="text-white hover:bg-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="text-white hover:bg-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </NavLink>

                  <NavLink
                    to="/portfolio"
                    className="text-white hover:bg-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </NavLink>

                  <NavLink
                    to="/resume"
                    className="text-white hover:bg-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Resume
                  </NavLink>

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gradient-to-r from-green-400 to-green-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gradient-to-r hover:from-green-900 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  className="hover:bg-yellow-300 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </NavLink>

                <NavLink
                  to="/contact"
                  className="text-white hover:bg-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </NavLink>

                <NavLink
                  to="/portfolio"
                  className="text-white hover:bg-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </NavLink>

                <NavLink
                  to="/resume"
                  className="text-white hover:bg-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Resume
                </NavLink>

              </div>
            </div>
          )}
        </Transition>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold isaias">Isaias</h1>
        </div>
      </header>
      
    </div>
  );
}

export default Header;