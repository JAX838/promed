import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1f3a56] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">PROMED</h2>
          <p className="text-gray-300 mb-6">
            Dedicated to providing compassionate care, professional training,
            and healthcare support services with excellence.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-blue-500 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-blue-500 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-blue-500 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#why-choose" className="hover:text-blue-400 transition">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" /> +254 743379955
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" /> mongarebrian@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" /> Nairobi, Kenya
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-12 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} PROMED Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
