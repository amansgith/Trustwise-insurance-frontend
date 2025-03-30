"use client";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const SideBanner = () => {
  return (
    <div className="fixed top-40 -right-28 z-50 flex flex-col space-y-4">
      {/* WhatsApp Banner */}
      <div className="group relative">
        <a
          href="https://wa.me/17802555151"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white p-3 rounded-l-lg shadow-md transition-all duration-300 transform group-hover:-translate-x-28"
        >
          <FaWhatsapp size={24} />
          <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Phone Banner */}
      <div className="group relative">
        <a
          href="tel:+17802555151"
          className="flex items-center bg-secondary p-3 rounded-l-lg shadow-md transition-all duration-300 transform group-hover:-translate-x-16"
        >
          <FaPhone size={24} />
          <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Call Us
          </span>
        </a>
      </div>
    </div>
  );
};

export default SideBanner;