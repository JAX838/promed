import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-promed-green-50 text-promed-blue p-4 fixed w-full top-0 shadow-sm border-b border-promed-green-200 z-10 sm:bg-sky-500">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
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
        {/* Menu - Uses Link for routing */}
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 items-center">
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

        <button className="bg-promed-blue text-white px-4 py-2 rounded-md font-semibold hover:bg-promed-blue/90 w-full sm:w-auto">
          Book Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
