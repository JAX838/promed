import React from "react";
import { motion } from "framer-motion";
import foundersImg from "../assets/founders.png"; // replace with your image path

const WhoWeAre = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-[#e6f1ec]">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={foundersImg}
            alt="Founders"
            className="max-h-[450px] object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="uppercase text-sm tracking-widest text-gray-600 mb-3">
            Who We Are
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#1f3a56] mb-4">
            Mentorship, Care and Innovation
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PROMED is more than a healthcare provider. We are partners in
            health, sports, and community development. By combining medical
            services, chronic illness care, health education and sports
            empowerment, PROMED represents a new model of sustainable healthcare
            delivery in Africa
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our Vision is to be Africa's most trusted healthcare partner,
            empowering individuals, and communities to live healthier, longer,
            and more productive lives through accessible, innovative, nad
            sustainable healthcare solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-400 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
