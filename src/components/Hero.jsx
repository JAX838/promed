import hero from "../assets/hero-image.jpg";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="pt-4 pb-16  relative overflow-hidden bg-[#C8E6C8]">
      <div className="absolute top-0 right-0 opacity-10 hidden md:block">
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 
               3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 
               0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 
               12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Replaced h2 with logo */}
          <div className="space-y-6 text-center lg:text-left">
            <img
              src={logo}
              alt="Company Logo"
              className="
                   mx-auto lg:mx-0 
                  w-16 h-16 rounded-full       
                  sm:w-28 sm:h-28 sm:rounded-full 
                  md:w-40 md:h-auto md:rounded-none 
                  object-contain"
            />
            <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 lg:text-5xl">
              We believe that integrated medical solutions present highly
              <br />
              valuable economic and social development resources within sports,
              events, communities, and individual care settings.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <img
              src={hero}
              alt="Wellness care"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center lg:justify-start">
          <a
            href="https://wa.me/+254115294467"
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
