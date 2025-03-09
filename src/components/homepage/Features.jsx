"use client";
import { useEffect } from "react";
import Image from "next/image";
import { FaHeadset, FaEye, FaClipboardCheck, FaShieldAlt, FaLaptopCode, FaPiggyBank } from "react-icons/fa";
import featureimg from '../../../public/featureimg.webp';

const features = [
  { icon: <FaHeadset />, title: "24/7 Support" },
  { icon: <FaEye />, title: "Full Transparency" },
  { icon: <FaClipboardCheck />, title: "Hassle-Free Claims" },
  { icon: <FaShieldAlt />, title: "Your Coverage, Your Way" },
  { icon: <FaLaptopCode />, title: "Best Digital Experience" },
  { icon: <FaPiggyBank />, title: "Savings" },
];

const Features = () => {
  return (
    <section className="relative bg-primary text-white py-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      {/* Left Content */}
      <div className="lg:w-1/2 z-10 px-4">
        <h2 className="text-blue-400 font-bold text-xl md:text-6xl uppercase tracking-wide">
          Why Choose TrustWise?
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold mt-2">
          Few reasons for people choosing us
        </h3>
        <p className="text-gray-400 mt-4 max-w-lg">
          We provide top-tier insurance services with transparency, hassle-free
          claims, and the best digital experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <span className="text-blue-400 text-2xl">{feature.icon}</span>
              <h4 className="text-lg font-semibold">{feature.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image (Diamond Shape) */}
      <div className="hidden lg:flex absolute right-0 top-0 w-full h-full lg:w-1/2 justify-center lg:mt-0 overflow-hidden">
        <div className="relative w-full h-full transform rotate-45 overflow-hidden">
          <Image
            src={featureimg} // Update the image path accordingly
            alt="Why Choose Us"
            layout="fill"
            objectFit="cover"
            className="-rotate-45"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;