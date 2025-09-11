import hero from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-4 pb-16 bg-white relative overflow-hidden">
      {" "}
      {/* Adjusted pt for navbar offset */}
      {/* Decorative leaves - Hidden on small screens for simplicity */}
      <div className="absolute top-0 right-0 opacity-10 hidden md:block">
        {/* SVG as before */}
        <svg
          className="w-24 h-24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {/* Other decorative SVG */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-promed-blue leading-tight">
              Empowering and
              <br />
              <span className="text-promed-green-700">
                Supporting Wellness.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              We believe that integrated medical solutions present highly
              valuable economic and social development resources within sports,
              events, communities, and individual care settings.
            </p>
          </div>
          <div className="relative">
            <img
              src={hero}
              alt="Wellness care"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center lg:justify-start">
          <a
            href="https://wa.me/+254790940818"
            className="bg-promed-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-promed-green-600 flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <span className="bg-sky-600 border-3 px-8 py-3">
              Book Appointment
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
