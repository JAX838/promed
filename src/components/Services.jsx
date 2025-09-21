import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import services from "./ServicesData.jsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <motion.h2
        className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-center text-[#1f3a56] mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        OUR SERVICES
      </motion.h2>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-xl shadow-lg group bg-white cursor-pointer"
          >
            <Link to={`/services/${service.id}`} className="block">
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-80 xl:h-80 object-cover transform transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1f3a56]/95 via-[#1f3a56]/80 to-transparent text-white p-6 text-center">
                <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 drop-shadow-lg">
                  {service.title}
                </h3>

                {/* Button inside overlay */}
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-xs sm:text-sm md:text-base font-medium shadow-md transition">
                  Learn more
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
