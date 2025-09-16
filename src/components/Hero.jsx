import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero from "../assets/hero-image.jpg";

const Hero = () => {
  // Words to rotate in red
  const words = [
    "Home care nursing",
    "First Aid and Emergency Response",
    "Nutrition",
    "Advanced Wound Care",
    "Medical equipment & accessories shop",
  ];
  const [index, setIndex] = useState(0);

  // Change word every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative w-full h-[90vh] flex items-center">
      {/* Background image */}
      <img
        src={hero}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Dedicated Medical Care
          <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]} // unique key for animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-sky-400 inline-block ml-2"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-100 max-w-xl">
          Welcome to PROMED, your trusted partner in comprehensive healthcare
          services. We are committed to providing top-notch medical care with a
          focus on patient well-being and satisfaction, in sports, events,
          communities, and individual care settings.
        </p>

        {/* CTA button */}
        <div className="mt-8">
          <a
            href="https://wa.me/+254115294467"
            className="inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h2l3.5 7-1.5 4H6v2h12v-2h-1.5l-1.5-4L19 5h2"
              />
            </svg>
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
