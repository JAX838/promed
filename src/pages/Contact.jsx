import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-blue-500" />,
    title: "Phone",
    detail: "+254 743379955",
  },
  {
    icon: <Mail className="w-6 h-6 text-green-500" />,
    title: "Email",
    detail: "mongarebrian@gmail.com.com",
  },
  {
    icon: <MapPin className="w-6 h-6 text-red-500" />,
    title: "Address",
    detail: "Nairobi, Kenya",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50">
      {/* Title */}
      <motion.div
        className="text-center mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="uppercase text-sm tracking-widest text-blue-500 font-semibold mb-2">
          Contact Us
        </h3>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1f3a56] mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600">
          Have questions or need support? We’re here to help you. Reach out
          anytime and we’ll respond as soon as possible.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              variants={item}
            >
              <div className="flex-shrink-0">{info.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-[#1f3a56]">
                  {info.title}
                </h4>
                <p className="text-gray-600">{info.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white p-8 rounded-xl shadow space-y-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
