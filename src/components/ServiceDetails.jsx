import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import services from "./servicesData.jsx";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <p className="p-6 text-red-500">Service not found.</p>;
  }

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white py-30 px-6 lg:px-20 sm:py-10">
      {/* Breadcrumb */}
      <motion.nav
        className="text-sm text-gray-500 mb-6"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">→</span>
        <Link to="/services" className="hover:text-blue-600">
          Services
        </Link>
        <span className="mx-2">→</span>
        <span className="text-gray-700 font-medium">{service.title}</span>
      </motion.nav>

      {/* Page layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <motion.div
          className="lg:col-span-2"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-[#1f3a56] mb-6">
            {service.title}
          </h1>
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-lg shadow mb-6 object-cover max-h-[400px]"
          />
          <p className="text-gray-700 mb-6 leading-relaxed">
            {service.description}
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {service.details.map((d, index) => (
              <li key={index}>{d}</li>
            ))}
          </ul>
        </motion.div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Service Include Box */}
          <motion.div
            className="p-6 bg-green-50 rounded-lg shadow"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h2 className="text-lg font-semibold text-[#1f3a56] mb-4">
              Service Include
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {service.details.map((d, index) => (
                <li key={index}>{d}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Box */}
          <motion.div
            className="p-6 bg-blue-50 rounded-lg shadow"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h2 className="text-lg font-semibold text-[#1f3a56] mb-4">
              Have a Question?
            </h2>
            <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
              Because quality patient care is our specialty, our doors are open
              within the specified times. We are also available on weekends and
              public holidays.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Back button */}
      <div className="mt-10">
        <Link
          to="/services"
          className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
