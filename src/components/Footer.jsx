"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Quick Links",
    sublinks: [
      { url: "/careers", text: "Join Our Team" },
      { url: "/our-location", text: "Our Locations" },
      { url: "/about", text: "About Us" },
      { url: "/contact", text: "Contact Us" },
    ],
  },
  {
    title: "Menu",
    sublinks: [
      { url: "/auto", text: "Auto Insurance" },
      { url: "/Home", text: "Home Insurance" },
      { url: "/auto/bundle-insurance", text: "Bundle Insurance" },
      { url: "/business", text: "Business Insurance" },
      { url: "/life-financial", text: "Life & Financial" },
    ],
  },
  {
    title: "Resources",
    sublinks: [
      { url: "/", text: "Blog" },
      { url: "/", text: "Get A Quote" },
      { url: "/", text: "Claim" },
      { url: "/", text: "Policy Insurances" },
      { url: "/", text: "Regulation" },
      { url: "/how-we-conduct-business", text: "How we Conduct Business?" },
      { url: "/term-of-use", text: "Term of Use" },
      { url: "/privacy-policy", text: "Privacy Policy" },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`); // Replace this with actual API call
    setEmail(""); // Clear input field after submission
  };

  return (
    <footer className="relative bg-white text-gray-800 py-10">
      {/* Footer Content */}
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Row 1: Logo & Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-start">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image src="/Navlogo.png" alt="Logo" width={600} height={400} />
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.sublinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.url}
                      className="text-gray-600 hover:text-primary transition"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Row 2: Newsletter Subscription & Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 space-y-6 md:space-y-0">
          {/* Newsletter Subscription */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
            <p className="text-gray-600 text-sm mt-1">Get the latest updates and news.</p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row mt-4 max-w-lg mx-auto md:mx-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-gray-600">
            <Link href="#" className="hover:text-blue-600">
              <FaTwitter size={24} />
            </Link>
            <Link href="#" className="hover:text-blue-600">
              <FaFacebookF size={24} />
            </Link>
            <Link href="#" className="hover:text-red-500">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" className="hover:text-blue-700">
              <FaLinkedin size={24} />
            </Link>
            <Link href="#" className="hover:text-red-600">
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>

        {/* Row 3: Call Section */}
        <div className="bg-green-700 text-white py-2 text-center font-bold text-lg md:text-2xl fixed z-20 bottom-0 left-0 right-0">
          Call for a quote:{" "}
          <span className="text-white pl-3">1-866-358-2860</span>
        </div>

        {/* Copyright */}
        <div className="py-2 mt-6">
          <h3 className="font-extrabold text-lg text-center mb-8">
            &copy; {new Date().getFullYear()} Trustwise Insurance Brokers Ltd. All
            Rights Reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;