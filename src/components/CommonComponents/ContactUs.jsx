"use client";
import { FaUsers, FaPlus } from "react-icons/fa";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className=" py-20 w-full bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-200 mb-10 leading-relaxed">
          Want to get in touch? We make it our priority to respond as soon as
          possible. However, please allow us at least{" "}
          <span className="font-semibold">24 hours</span> to get back to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Talk to Us */}
          <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-white text-primary">
            <FaUsers className="text-primary text-6xl mb-4" />
            <h3 className="text-xl font-semibold">Talk to Us</h3>
            <p className="text-center my-4">
              Insurance inquiries, general questions, bundle insurance, auto
              insurance, or any other issues.
            </p>
            <Link href="/contact">
              <button className="bg-primary hover:bg-secondary hover:scale-110 duration-300 text-white font-semibold py-3 px-6 rounded-full transition-all">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Bundle Insurance */}
          <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-white text-primary">
            <FaPlus className="text-primary text-6xl mb-4" />
            <h3 className="text-xl font-semibold">Bundle Insurance</h3>
            <p className="text-center my-4">
              Bundle insurance helps you to get everything in one place from
              your car to home insurance.
            </p>
            <Link href="/call-back-request">
              <button className="bg-primary hover:bg-secondary hover:scale-110 duration-300 text-white font-semibold py-3 px-6 rounded-full transition-all">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
