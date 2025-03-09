"use client";
import { FaLink, FaPiggyBank, FaClockRotateLeft } from "react-icons/fa6";

const TrustBanner = () => {
  const trustItems = [
    {
      icon: <FaLink />,
      title: "Join thousands plus customers",
      text: "who have trusted Aaxel!",
    },
    {
      icon: <FaPiggyBank />,
      title: "Get a quote now",
      text: "and save up to 30%",
    },
    {
      icon: <FaClockRotateLeft />,
      title: "You are just Moments away",
      text: "from getting covered & saving.",
    },
  ];

  return (
    <div className="py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {trustItems.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-xl shadow-lg transition duration-300 hover:bg-primary hover:text-white"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl text-blue-600 group-hover:text-white transition duration-300">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 text-sm transition duration-300">
                  {item.text}
                </p>
              </div>
            </div>
            {/* Numbering in background */}
            <span className="absolute top-4 right-6 text-5xl font-bold text-gray-200 group-hover:text-white transition duration-300">
              0{index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBanner;