import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logoo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white text-gray-800 p-4 fixed w-full top-0 shadow-sm z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden sm:flex space-x-6 items-center font-medium">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? "text-sky-600 border-b-2 border-sky-600"
                    : "hover:text-sky-500"
                } pb-1`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Appointment Button */}
        <a
          href="https://wa.me/254115294467"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block bg-sky-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900"
        >
          Book Appointment
        </a>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden overflow-hidden mt-2 rounded-lg shadow-md bg-white text-gray-800"
          >
            <ul className="flex flex-col space-y-3 p-4 font-medium">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? "text-sky-600"
                        : "hover:text-sky-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 border-t">
              <a
                href="https://wa.me/254115294467"
                className="w-full block text-center bg-sky-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
