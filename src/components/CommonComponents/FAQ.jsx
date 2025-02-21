"use client";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    "Best Practices for Managing Commercial Auto Insurance Claims",
    "Common Misconceptions About Commercial Auto Insurance",
    "Seasonal Vehicles and Commercial Auto Insurance",
    "Do You Need Commercial Auto Insurance for Rideshare Services?",
    "Top Factors That Affect Commercial Auto Insurance Premiums",
    "Commercial Auto Insurance: What Coverage Do Delivery Drivers Need?",
    "How to Insure a Fleet of Vehicles for Your Business?",
    "Understanding Non-Owned Auto Insurance for Businesses",
    "Why Businesses Need Commercial Auto Insurance",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 6; // Number of visible items at a time

  const nextSlide = () => {
    if (currentIndex + visibleItems < faqs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="my-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-cyan-600 mb-6">
        Frequently Asked Questions...
      </h2>

      <div className="border-t border-gray-300"></div>

      <div className="relative mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs
            .slice(currentIndex, currentIndex + visibleItems)
            .map((faq, index) => (
              <div
                key={index}
                className="p-3 bg-blue-50 rounded-lg shadow-md h-40 flex flex-col justify-between"
              >
                <h3 className="font-semibold text-lg text-gray-800">{faq}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Aaxel Insurance - {new Date().toLocaleDateString()}
                </p>
              </div>
            ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-0 bottom-[-50px] flex gap-4">
          <button
            onClick={prevSlide}
            className={`p-3 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all duration-500 ${
              currentIndex === 0 && "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentIndex === 0}
          >
            <IoMdArrowBack />
          </button>
          <button
            onClick={nextSlide}
            className={`p-3 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all ${
              currentIndex + visibleItems >= faqs.length &&
              "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentIndex + visibleItems >= faqs.length}
          >
            <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;