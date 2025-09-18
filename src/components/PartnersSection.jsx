import { motion } from "framer-motion";
import Gria from "../assets/partners1.png";
import SIEL from "../assets/partners2.jpeg";
import Advance from "../assets/partners3.jpeg";

const partners = [
  { name: "Gria", logo: Gria },
  { name: "SIEL", logo: SIEL },
  { name: "Advance", logo: Advance },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Trusted <span className="text-indigo-600">Partners</span>
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          We collaborate with industry leaders to bring you the best solutions.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-4 rounded-1xl hover:shadow-md transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain grayscale hover:grayscale-0 transition "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
