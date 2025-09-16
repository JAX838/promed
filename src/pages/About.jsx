import React from "react";
import bedImg from "../assets/bed.jpg";
import patientImg from "../assets/patient1.jpg";
import storeImg from "../assets/storage.jpg";
import nurseImg from "../assets/nurse.jpg";
const About = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left side - Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <img
              src={patientImg}
              alt="Patient care"
              className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="col-span-1">
            <img
              src={bedImg}
              alt="Hospital bed"
              className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="col-span-1">
            <img
              src={storeImg}
              alt="Hospital storage"
              className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="col-span-1">
            <img
              src={nurseImg}
              alt="Nurse"
              className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right side - Text */}
        <div className="bg-[#1f3a56] text-white p-10 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/leaf-pattern.png')] bg-contain bg-right bg-no-repeat"></div>
          <h3 className="uppercase text-sm tracking-widest text-gray-300 mb-3 relative">
            About Us
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 relative">
            Quality Patient Care
          </h2>
          <p className="font-semibold mb-4 relative">
            To be the world’s leading nurse center by nurses for nurses.
          </p>
          <p className="text-gray-200 mb-6 relative max-w-prose">
            At PROMED, we provide integrated healthcare and wellness solutions
            that enhance safety, performance, and well-being in sports, events,
            communities, and individual care. With a focus on innovation,
            professionalism, and compassion, our team of experts delivers
            reliable medical services tailored to diverse needs whether
            protecting athletes, supporting large gatherings, empowering
            communities, or offering personalized care.
          </p>
          <button className="bg-blue-400 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition relative">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
