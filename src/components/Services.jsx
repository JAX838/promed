import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/storage.jpg";
import img6 from "../assets/patient1.jpg";
const services = [
  {
    title: "First Aid and Emergency Response",
    image: img1,
    button: true,
  },
  {
    title: "Home Care Nursing",
    image: img2,
  },
  {
    title: "Physiotherapy and Occupational Therapy",
    image: img6,
  },
  {
    title: "Nutrition",
    image: img3,
  },
  {
    title: "Advanced Wound Care",
    image: img4,
  },
  {
    title: "Medical Equipment & Accessories Shop",
    image: img5,
  },
];

// Animation variants for stagger effect
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Services = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      {/* Title */}
      <p className="text-center text-sky-600 text-lg">OUR SERVICES</p>
      <motion.h2
        className="text-3xl font-serif lg:text-4xl font-semibold text-center text-[#1f3a56] mb-45 mt-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Center of Excellence
      </motion.h2>

      {/* Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
            variants={item}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-150 object-cover transform transition duration-500 group-hover:scale-110 rounded-none"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1f3a56]/90 text-white p-4 text-center transition duration-500 group-hover:bg-[#1f3a56]/95 h-45 text-xl">
              <h3 className="text-lg font-medium text-center">
                {service.title}
              </h3>
              {service.button && (
                <button className="mt-3 bg-blue-400 px-4 py-1 rounded-md hover:bg-blue-500 transition">
                  Learn more
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
