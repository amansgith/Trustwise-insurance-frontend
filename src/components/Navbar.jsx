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
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Navlogo from "../../public/logocomp.png";
import Image from "next/image";
import Link from "next/link";

const auto = [
  { name: "Auto Insurance", href: "/auto" },
  {
    name: "Bundle Insurance",
    href: "/auto/bundle-insurance",
  },
  { name: "Boat Insurance", href: "/auto/boat-insurance" },
  {
    name: "Classic Car Insurance",
    href: "/auto/classic-car-insurance",
  },
  {
    name: "Private Client Insurance",
    href: "/auto/private-client-insurance",
  },
  {
    name: "Motorcycle Insurance",
    href: "/auto/motorcycle-insurance",
  },
  { name: "RV Insurance", href: "/auto/rv-insurance" },
  {
    name: "Snowmobile Insurance",
    href: "/auto/snowmobile-insurance",
  },
  {
    name: "Commercial Automobile Insurance",
    href: "/auto/commercial-automobile-insurance",
  },
];
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
const groups = [
  { name: "Group Insurance", href: "/groups" },
  {
    name: "Association – CHPTA",
    href: "/groups/association-chpta",
  },
  {
    name: "Association – COPA",
    href: "/groups/association-copa",
  },
  {
    name: "Association – emergiTEL",
    href: "/groups/association-emergitel",
  },
  {
    name: "Association – SBPA",
    href: "/groups/association-sbpa",
  },
  {
    name: "Association – PAU Alumni",
    href: "/groups/association-pau",
  },
  {
    name: "Association – Pakmen Volleyball Club",
    href: "/groups/association-pakmen",
  },
  {
    name: "Association – IIM",
    href: "/groups/association-iim",
  },
  {
    name: "Association – CTAO",
    href: "/groups/association-ctao",
  },
  {
    name: "Association – CASAL",
    href: "/groups/association-casal",
  },
  {
    name: "Association – PAO",
    href: "/groups/association-pao",
  },
  {
    name: "Charger Logistics Inc.",
    href: "/groups/charger-logistics",
  },
  { name: "HRAI", href: "/groups/hrai" },
  { name: "Mobile-Live", href: "/groups/mobilelive" },
];
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

const navItems = [
  { name: "Auto", submenu: auto },
  { name: "Home", submenu: home },
  { name: "Business", submenu: business },
  { name: "Groups", submenu: groups },
  { name: "Life", submenu: life },
  { name: "Travel", href: "/travel" },
  { name: "Claims", href: "/claims" },
  { name: "Blog", href: "/blogs" },
];

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:block">
        <DeskNavbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};

const DeskNavbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

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

  return (
    <header className="z-[9999] font-montserrat text-black navbar-animation">
      {/* Top Navbar */}
      <div className="bg-[#0E1E40] text-sm text-gray-300 py-2 px-8 flex justify-between items-center">
        <div className="flex space-x-6">
          <span className="flex items-center">
            📍 30 Commercial Road Fratton, Australia
          </span>
          <span className="flex items-center">✉️ needhelp@company.com</span>
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
            <FaFacebookF className="cursor-pointer hover:text-blue-500 transition duration-300" />
            <FaInstagram className="cursor-pointer hover:text-red-500 transition duration-300" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700 transition duration-300" />
            <FaEnvelope className="cursor-pointer hover:text-orange-300 transition duration-300" />
            <FaWhatsapp className="cursor-pointer hover:text-green-500 transition duration-300" />
            <FaTiktok className="cursor-pointer hover:text-red-400 transition duration-300" />
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
              alt="Aaxel Insurance"
              priority
              className="h-auto max-w-[200px]"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="bg-zinc-100 border pl-4 rounded-lg border-gray-200 flex gap-6 justify-between items-center">
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
                      className="text-gray-700 font-medium hover:text-blue-600"
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
                              className="block px-4 py-2 text-gray-700"
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
                    className="text-gray-700 font-medium hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <span className="opacity-40">|</span>
          <FiSearch className="cursor-pointer text-lg" onClick={toggleSearch} />
          <button className="bg-secondary text-white px-6 py-4 rounded-r-md hover:bg-primary transition">
            Get a Quote
          </button>
        </nav>

        {/* Right Section: Search, Cart, Get a Quote, and Contact */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
              📞
            </div>
            <div>
              <a
                href="tel:+18663582860"
                className="cursor-pointer text-sm font-bold"
              >
                +1 866-358-2860
                <p className="text-xs text-gray-500">Call to Our Experts</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={toggleSearch}
            >
            <FaTimes className="ml-2" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border rounded-lg mb-4"
            />
            <button className="w-full p-3 bg-cyan-700 text-white rounded-lg">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// const DeskNavbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState({});
//   const pathname = usePathname();

//   const toggleDropdown = (title) => {
//     setDropdownOpen((prev) => ({ ...prev, [title]: !prev[title] }));
//   };

//   const isActive = (path) => pathname === path;

//   return (
//     <header className="z-20 font-montserrat shadow-md border-red-50 text-black bg-white rounded-full sticky top-0">
//       <div className="mx-auto flex items-center pb-3 md:px-8 mb-2 transition-transform duration-300">
//         {/* Center Section - Logo */}
//         <div className="flex-1 flex justify-center md:justify-start min-w-60 pl-8 relative overflow-hidden">
//           <Link href="/">
//             <Image
//               src={Navlogo}
//               alt="Aaxel Insurance"
//               priority
//               className="w-full h-auto md:w-3/4"
//             />
//           </Link>
//         </div>

//         {/* Right Section */}
//         <div className="w-3/4 mr-10">
//           {/* Top Bar */}
//           <div className="flex justify-between items-center px-6 py-6 text-sm">
//             <div className="flex justify-end w-full space-x-6 text-xs px-4">
//               {[
//                 { name: "Join Our Team", path: "/careers" },
//                 { name: "Our Locations", path: "/our-location" },
//                 { name: "About Us", path: "/about" },
//                 { name: "Contact Us", path: "/contact" },
//               ].map((link) => (
//                 <Link
//                   key={link.path}
//                   href={link.path}
//                   className="relative group"
//                 >
//                   <span
//                     className={`transition duration-300 ${
//                       isActive(link.path)
//                         ? "text-primary"
//                         : "group-hover:text-primary"
//                     }`}
//                   >
//                     {link.name}
//                   </span>
//                   <span
//                     className={`absolute left-0 bottom-0 w-full h-[3px] bg-primary transition-all duration-300 ${
//                       isActive(link.path)
//                         ? "scale-x-100"
//                         : "scale-x-0 group-hover:scale-x-100"
//                     }`}
//                   ></span>
//                 </Link>
//               ))}
//             </div>
//             <div className="flex space-x-4 text-gray-700">
//               <FaFacebookF className="cursor-pointer hover:text-primary transition duration-300" />
//               <FaInstagram className="cursor-pointer hover:text-primary transition duration-300" />
//               <FaLinkedinIn className="cursor-pointer hover:text-primary transition duration-300" />
//               <FaEnvelope className="cursor-pointer hover:text-primary transition duration-300" />
//               <FaWhatsapp className="cursor-pointer hover:text-primary transition duration-300" />
//               <FaTiktok className="cursor-pointer hover:text-primary transition duration-300" />
//             </div>
//           </div>
//           <hr className="w-full" />

//           {/* Bottom Bar - Main Navigation */}
//           <div className="flex justify-between items-center px-4 pt-5">
//             <div className="flex space-x-6 font-semibold text-sm">
//               {[
//                 {
//                   title: "AUTO",
//                   links: auto,
//                 },
//                 {
//                   title: "HOME",
//                   links: home,
//                 },
//                 {
//                   title: "GROUPS",
//                   links: groups,
//                 },
//                 {
//                   title: "BUSINESS",
//                   links: business,
//                 },
//                 {
//                   title: "LIFE & FINANCIAL",
//                   links: life,
//                 },
//               ].map((item) => (
//                 <Dropdown
//                   key={item.title}
//                   title={item.title}
//                   links={item.links}
//                   pathname={pathname}
//                 />
//               ))}

//               {[
//                 { name: "TRAVEL", path: "/travel" },
//                 { name: "CLAIMS", path: "/claims" },
//                 { name: "BLOG", path: "/blogs" },
//               ].map((link) => (
//                 <Link
//                   key={link.path}
//                   href={link.path}
//                   className="relative group"
//                 >
//                   <span
//                     className={`transition duration-300 ${
//                       isActive(link.path)
//                         ? "text-primary"
//                         : "group-hover:text-primary"
//                     }`}
//                   >
//                     {link.name}
//                   </span>
//                   <span
//                     className={`absolute left-0 bottom-0 w-full h-[3px] bg-primary transition-all duration-300 ${
//                       isActive(link.path)
//                         ? "scale-x-100"
//                         : "scale-x-0 group-hover:scale-x-100"
//                     }`}
//                   ></span>
//                 </Link>
//               ))}
//             </div>

//             {/* Right - Contact Button */}
//             <div className="flex items-center space-x-6">
//               <a
//                 href="tel:+18663582860"
//                 className="cursor-pointer bg-secondary hover:bg-primary text-black hover:text-white px-9 py-4 rounded-md transition duration-300"
//               >
//                 +1 866-358-2860
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// const Dropdown = ({ title, links, pathname }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className="relative group"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <button className="flex items-center group-hover:text-primary transition duration-300">
//         <span className="relative pb-4">
//           {title}
//           <span
//             className={`absolute left-0 bottom-0 w-full h-[3px] bg-primary transition-all duration-300 ${
//               open || links.some((link) => pathname.startsWith(link.href))
//                 ? "scale-x-100"
//                 : "scale-x-0"
//             }`}
//           ></span>
//         </span>
//         <RiArrowDropDownLine className="text-lg mb-4" />
//       </button>

//       {open && (
//         <div className="absolute top-9 -left-20 rounded-lg bg-white shadow-md py-2 w-48 transition-all duration-300 z-10 max-h-80 overflow-y-auto custom-scrollbar">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`relative group block px-4 py-2 text-[10px] font-medium transition duration-300 ${
//                 pathname.startsWith(link.href)
//                   ? "text-primary"
//                   : "hover:text-primary"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const menuItems = [
    { title: "AUTO", links: auto },
    { title: "HOME", links: home },
    { title: "GROUPS", links: groups },
    { title: "BUSINESS", links: business },
    { title: "LIFE & FINANCIAL", links: life },
  ];

  return (
    <header className="container mx-auto z-50 bg-white fixed top-0 w-full px-4 py-3 flex justify-between items-center">
      {/* Logo on Left */}
      <Link href="/">
        <Image src={Navlogo} alt="Trustwise Insurance" width={160} height={120} />
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
        transition={{ type: "tween", duration: 0.4, delay: 0.3 }}
        className="fixed top-0 left-0 w-3/4 h-full bg-primary text-white z-50 p-6 flex flex-col shadow-md"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        {/* Phone Contact */}
        <Link href="tel:+18663582860" className="text-secondary font-bold text-lg mb-4">
          +1 866-358-2860
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
                  transition={{ duration: 0.3 }}
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
          <Link href="/travel" className="block hover:text-cyan-700 transition" onClick={() => setMenuOpen(false)}>
            Travel
          </Link>
          <Link href="/claims" className="block hover:text-cyan-700 transition" onClick={() => setMenuOpen(false)}>
            Claims
          </Link>
          <Link href="/blogs" className="block hover:text-cyan-700 transition" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
