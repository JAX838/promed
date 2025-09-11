import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-50 text-promed-blue p-4 fixed w-full top-0 shadow-sm  border-promed-green-200 z-10 sm:bg-sky-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-promed-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="none"
              strokeLinejoin="none"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <h1 className="text-xl font-bold text-promed-green-700">PROMED</h1>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 text-green-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden sm:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>

        <button className="hidden sm:block bg-promed-blue text-white px-4 py-2 rounded-md font-semibold hover:bg-promed-blue/90">
          Book Appointment
        </button>
      </div>

      {/* Mobile dropdown with animation + new colors */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden overflow-hidden mt-2 rounded-lg shadow-md bg-sky-300 text-white"
          >
            <ul className="flex flex-col space-y-3 p-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-promed-green-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-promed-green-200"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-promed-green-200"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-promed-green-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="p-4 border-t border-promed-green-500">
              <button className="w-full bg-promed-blue text-white px-4 py-2 rounded-md font-semibold hover:bg-promed-blue/90">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
