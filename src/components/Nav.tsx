import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => setIsOpen(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 py-2">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <p className="text-lg logo font-bold ">I AM AKINOLAVICTOR</p>

        <button
          onClick={toggleNavbar}
          className="text-3xl text-gray-700 md:hidden focus:outline-none"
        >
          <i className="bx bx-menu"></i>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              to="/"
              onClick={closeNavbar}
              className="text-gray-800 font-medium hover:text-blue-600"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={closeNavbar}
              className="text-gray-800 font-medium hover:text-blue-600"
            >
              My Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeNavbar}
              className="text-gray-800 font-medium hover:text-blue-600"
            >
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Mobile Offcanvas */}
        <div
          className={`fixed top-0 right-0 h-full w-[45vh] bg-[rgba(74,91,248,0.59)] backdrop-blur-[5px]  shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={closeNavbar}
              className="text-white text-5xl font-semibold focus:outline-none"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col gap-6 p-6">
            <li>
              <Link
                to="/"
                onClick={closeNavbar}
                className="text-white text-2xl font-medium"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={closeNavbar}
                className="text-white text-2xl font-medium"
              >
                My Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeNavbar}
                className="text-white text-2xl font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
