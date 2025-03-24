"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaTiktok,
  FaTimes,
} from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import Navlogo from "../../public/logocomp.png";
import Image from "next/image";
import Link from "next/link";
import Search from "@/components/Search";

// const auto = [
//   { name: "Auto Insurance", href: "/auto" },
//   {
//     name: "Bundle Insurance",
//     href: "/auto/bundle-insurance",
//   },
//   { name: "Boat Insurance", href: "/auto/boat-insurance" },
//   {
//     name: "Classic Car Insurance",
//     href: "/auto/classic-car-insurance",
//   },
//   {
//     name: "Private Client Insurance",
//     href: "/auto/private-client-insurance",
//   },
//   {
//     name: "Motorcycle Insurance",
//     href: "/auto/motorcycle-insurance",
//   },
//   { name: "RV Insurance", href: "/auto/rv-insurance" },
//   {
//     name: "Snowmobile Insurance",
//     href: "/auto/snowmobile-insurance",
//   },
//   {
//     name: "Commercial Automobile Insurance",
//     href: "/auto/commercial-automobile-insurance",
//   },
// ];

const home = [
  { name: "Home Insurance", href: "/Home" },
  { name: "Condo Insurance", href: "/Home/condo-insurance" },
  {
    name: "Tenant Insurance",
    href: "/Home/tenant-insurance",
  },
  {
    name: "Cottage Insurance",
    href: "/Home/cottage-insurance",
  },
  {
    name: "Rental Property Insurance",
    href: "/Home/rental-property-insurance",
  },
  { name: "Pet Insurance", href: "/Home/pet-insurance" },
];

const business = [
  { name: "Business Insurance", href: "/business" },
  {
    name: "Home-Based Business Insurance",
    href: "/business/home-business-insurance",
  },
  {
    name: "Small Medium Business Insurance",
    href: "/business/smb-insurance",
  },
  {
    name: "Corporate Insurance",
    href: "/business/corporate-insurance",
  },
  {
    name: "Contractors Insurance",
    href: "/business/contractors-insurance",
  },
  {
    name: "General Liability Insurance",
    href: "/business/general-liability-insurance",
  },
  {
    name: "Commercial Property Insurance",
    href: "/business/commercial-property-insurance",
  },
  {
    name: "Account Receivable Insurance",
    href: "/business/account-receivable-insurance",
  },
  {
    name: "Builder’s Risk Insurance",
    href: "/business/builders-risk-insurance",
  },
  {
    name: "Commercial Automobile Insurance",
    href: "/auto/commercial-automobile-insurance",
  },
  {
    name: "Cyber Liability Insurance",
    href: "/business/cyber-liability-insurance",
  },
  {
    name: "Employee Liability Insurance",
    href: "/business/employee-liability-insurance",
  },
  {
    name: "Garage Insurance",
    href: "/business/garage-insurance",
  },
  {
    name: "Product Liability Insurance",
    href: "/business/product-liability-insurance",
  },
  {
    name: "Environmental Impairment Liability Insurance",
    href: "/business/environmental-liability-insurance",
  },
  {
    name: "Professional Liability Insurance",
    href: "/business/professional-liability-insurance",
  },
  {
    name: "Legal Expense Insurance",
    href: "/business/legal-expense-insurance",
  },
  {
    name: "Malpractice Insurance",
    href: "/business/malpractice-insurance",
  },
  {
    name: "Private Client Insurance",
    href: "/auto/private-client-insurance",
  },
  {
    name: "Speciality Insurance",
    href: "/business/speciality-insurance",
  },
];
// const groups = [
//   { name: "Group Insurance", href: "/groups" },
//   {
//     name: "Association – CHPTA",
//     href: "/groups/association-chpta",
//   },
//   {
//     name: "Association – COPA",
//     href: "/groups/association-copa",
//   },
//   {
//     name: "Association – emergiTEL",
//     href: "/groups/association-emergitel",
//   },
//   {
//     name: "Association – SBPA",
//     href: "/groups/association-sbpa",
//   },
//   {
//     name: "Association – PAU Alumni",
//     href: "/groups/association-pau",
//   },
//   {
//     name: "Association – Pakmen Volleyball Club",
//     href: "/groups/association-pakmen",
//   },
//   {
//     name: "Association – IIM",
//     href: "/groups/association-iim",
//   },
//   {
//     name: "Association – CTAO",
//     href: "/groups/association-ctao",
//   },
//   {
//     name: "Association – CASAL",
//     href: "/groups/association-casal",
//   },
//   {
//     name: "Association – PAO",
//     href: "/groups/association-pao",
//   },
//   {
//     name: "Charger Logistics Inc.",
//     href: "/groups/charger-logistics",
//   },
//   { name: "HRAI", href: "/groups/hrai" },
//   { name: "Mobile-Live", href: "/groups/mobilelive" },
// ];

const life = [
  { name: "Life Insurance", href: "/life-financial" },
  {
    name: "Disability Insurance",
    href: "/life-financial/disability-insurance",
  },
  {
    name: "Critical Illness Insurance",
    href: "/life-financial/critical-illness-insurance",
  },
  {
    name: "Mortgage Insurance",
    href: "/life-financial/mortgage-insurance",
  },
  {
    name: "Investments",
    href: "/life-financial/investments",
  },
  {
    name: "Long-Term Care",
    href: "/life-financial/long-term-care",
  },
  {
    name: "Group Benefits",
    href: "/life-financial/group-benefits",
  },
];

const investments = [
  { name: "Segregated Funds", href: "/investments/segregated-funds" },
  { name: "TFSA", href: "/investments/tfsa" },
  { name: "RESP", href: "/investments/resp" },
  { name: "FHSA", href: "/investments/fhsa" },
];

const travel = [
  { name: "Travel Insurance", href: "/travel/travel-insurance" },
  { name: "Super Visa", href: "/travel/super-visa" },
  { name: "Visitor Visa", href: "/travel/visitor-visa" },
];

const navItems = [
  // { name: "Auto", submenu: auto },
  { name: "Home", submenu: home },
  { name: "Business", submenu: business },
  // { name: "Groups", submenu: groups },
  { name: "Life", submenu: life },
  { name: "Investments", submenu: investments },
  { name: "Travel", submenu: travel },
  { name: "Tickets", href: "/tickets" },
  { name: "Claims", href: "/claims" },
  { name: "Blog", href: "/blogs" },
];

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:block">
        <DeskNavbar />
      </div>
      <div className="block w-full lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};

const DeskNavbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const pathname = usePathname();

  const handleMouseEnter = (index) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdown(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdown(null);
    }, 300); // Delay of 300ms before closing
    setDropdownTimeout(timeout);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search overlay
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="z-[9999] font-montserrat text-black navbar-animation">
      {/* Top Navbar */}
      <div className="bg-[#0E1E40] text-sm text-gray-300 py-2 px-8 flex justify-between items-center">
        <div className="flex space-x-6">
          <a
            href="mailto:info@trustwiseinsurance.com"
            className="flex items-center"
          >
            ✉️ info@trustwiseinsurance.com
          </a>
        </div>
        <div className="flex space-x-6">
          {[
            { name: "Join Our Team", path: "/careers" },
            { name: "Our Locations", path: "/our-location" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((link) => (
            <Link key={link.path} href={link.path} className="hover:underline">
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/trustwiseinsurance/">
              <FaFacebookF className="cursor-pointer hover:text-blue-500 transition duration-300" />
            </Link>
            <Link href="https://www.instagram.com/trustwise_insurance/">
              <FaInstagram className="cursor-pointer hover:text-red-500 transition duration-300" />
            </Link>
            <Link href="https://www.linkedin.com">
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700 transition duration-300" />
            </Link>
            <Link href="mailto:info@trustwiseinsurance.com">
              <FaEnvelope className="cursor-pointer hover:text-orange-300 transition duration-300" />
            </Link>
            <Link href="https://wa.me/17802555151">
              <FaWhatsapp className="cursor-pointer hover:text-green-500 transition duration-300" />
            </Link>
            {/* <Link href="https://www.tiktok.com">
            <FaTiktok className="cursor-pointer hover:text-red-400 transition duration-300" />
          </Link> */}
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src={Navlogo}
              alt="Trustwise Insurance"
              priority
              className="h-auto max-w-[200px]"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="bg-zinc-100 border pl-4 rounded-lg border-gray-200 flex gap-8 justify-between items-center">
          {/* Navigation */}
          <ul className="flex space-x-6 z-40">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group text-sm"
                onMouseEnter={() => handleMouseEnter(index)} // Keep dropdown open when hovering over it
                onMouseLeave={handleMouseLeave}
              >
                {/* If item has a submenu, show the dropdown */}
                {item.submenu ? (
                  <>
                    <Link
                      href="#"
                      className={`text-gray-700 font-medium hover:border-b-2 hover:pb-5 hover:border-blue-800 hover:text-blue-600 ${
                        item.submenu.some((sub) =>
                          pathname.startsWith(sub.href)
                        )
                          ? "border-b-2 pb-5 border-blue-800 text-blue-600"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                    {dropdown === index && (
                      <motion.ul
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-200 origin-top transform 
                                   max-h-[300px] overflow-y-auto custom-scrollbar z-50"
                      >
                        {item.submenu.map((sub, idx) => (
                          <li key={idx}>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 text-gray-700 hover:text-secondary"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </>
                ) : (
                  // If no submenu, it's a simple link
                  <Link
                    href={item.href}
                    className={`text-gray-700 font-medium hover:text-blue-600 ${
                      isActive(item.href)
                        ? "border-b-2 pb-5 border-blue-800 text-blue-600"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <span className="opacity-40">|</span>
          <FiSearch className="cursor-pointer text-lg" onClick={toggleSearch} />
          <Link href="/call-back-request">
            <button className="bg-secondary text-white px-6 py-4 rounded-r-md hover:bg-primary transition">
              Get a Quote
            </button>
          </Link>
        </nav>

        {/* Right Section: Search, Cart, Get a Quote, and Contact */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
              📞
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="tel:+17802555151"
                className="cursor-pointer text-sm font-bold"
              >
                +1 (780) 255-5151
              </a>
              <a
                href="tel:+17802555252"
                className="cursor-pointer text-sm font-bold"
              >
                +1 (780) 255-5252
              </a>
              <p className="text-xs text-gray-500">Call to Our Experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Search navItems={navItems} toggleSearch={toggleSearch} />
        </div>
      )}
    </header>
  );
};

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const menuItems = [
    // { title: "AUTO", links: auto },
    { title: "HOME", links: home },
    // { title: "GROUPS", links: groups },
    { title: "BUSINESS", links: business },
    { title: "LIFE & FINANCIAL", links: life },
    { title: "Investments", links: investments },
    { title: "Travel", links: travel },
  ];

  return (
    <header className="container-fluid mx-auto z-50 bg-white fixed top-0 w-full px-4 py-3 flex justify-between items-center">
      {/* Logo on Left */}
      <Link href="/">
        <Image
          src={Navlogo}
          alt="Trustwise Insurance"
          width={160}
          height={120}
        />
      </Link>

      {/* Toggle Button on Right */}
      <button
        onClick={() => setMenuOpen(true)}
        className="p-2 bg-gray-200 rounded-md"
      >
        <HiMiniBars3BottomLeft className="text-3xl" />
      </button>

      {/* Animated Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Animated Sidebar Menu */}
      <motion.nav
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }} // Adjusted transition properties
        className="fixed top-0 left-0 w-3/4 h-full bg-primary text-white z-50 p-6 flex flex-col shadow-md"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        {/* Phone Contact */}
        <Link
          href="tel:+17802555252"
          className="text-secondary font-bold text-lg mb-4"
        >
          +1 (780) 255-5252
        </Link>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-white mb-4">
          <FaFacebookF className="hover:text-blue-500 transition duration-300" />
          <FaInstagram className="hover:text-pink-500 transition duration-300" />
          <FaLinkedinIn className="hover:text-blue-700 transition duration-300" />
          <FaEnvelope className="hover:text-red-500 transition duration-300" />
          <FaWhatsapp className="hover:text-green-600 transition duration-300" />
          <FaTiktok className="hover:text-black transition duration-300" />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                className="w-full text-left font-bold py-2 border-b hover:text-secondary"
                onClick={() => toggleDropdown(item.title)}
              >
                {item.title}
              </button>

              {openDropdown === item.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }} // Adjusted transition properties
                  className="pl-2 mt-2 space-y-2 max-h-60 overflow-y-auto text-white"
                >
                  {item.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block font-thin hover:text-cyan-600 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          {/* Additional Links */}

          <Link
            href="/claims"
            className="block hover:text-cyan-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Claims
          </Link>
          <Link
            href="/blogs"
            className="block hover:text-cyan-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="tel:+17802555151"
            className="text-secondary font-bold text-lg mb-4"
          >
            +1 (780) 255-5151
          </Link>
          <Link
            href="tel:+17802555353"
            className="text-secondary font-bold text-lg mb-4"
          >
            +1 (780) 255-5353
          </Link>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
