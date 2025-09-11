import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Users, GraduationCap, ShieldCheck } from "lucide-react"; // install lucide-react if not already

const reasons = [
  {
    icon: <HeartPulse className="w-10 h-10 text-blue-500" />,
    title: "Quality Care",
    desc: "We prioritize compassionate and professional healthcare tailored to each patient’s unique needs.",
  },
  {
    icon: <Users className="w-10 h-10 text-green-500" />,
    title: "Experienced Team",
    desc: "Our staff includes highly skilled nurses, doctors, and healthcare professionals with decades of experience.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-purple-500" />,
    title: "Continuous Training",
    desc: "We invest in training and mentorship to ensure our team stays updated with the latest medical practices.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
    title: "Trusted & Certified",
    desc: "Our institution is recognized and certified for delivering reliable healthcare services across the region.",
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

const WhyChooseUs = () => {
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
          Why Choose Us
        </h3>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1f3a56] mb-4">
          Excellence in Healthcare & Training
        </h2>
        <p className="text-gray-600">
          We are committed to providing exceptional patient care and empowering
          healthcare professionals with the knowledge and tools they need to
          excel.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">{reason.icon}</div>
            <h3 className="text-lg font-semibold text-[#1f3a56] mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
