"use client";
import Image from "next/image";
import { FaLink, FaPiggyBank, FaClockRotateLeft } from "react-icons/fa6";

const TrustBanner = () => {
  const trustItems = [
    { icon: <FaLink />, text: "Join thousands of customers who have trusted Aaxel!" },
    { icon: <FaPiggyBank />, text: "Get a quote and save up to 30%" },
    { icon: <FaClockRotateLeft />, text: "You are just moments away from getting covered & saving." },
  ];

  return (
    <div className="bg-blue-50 py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-gray-800">
            <div className="text-4xl md:text-7xl text-secondary hover:text-primary transition duration-300">
              {item.icon}
            </div>
            <p className="text-base md:text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBanner;