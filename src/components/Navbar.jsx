"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
import { RiArrowDropDownLine } from "react-icons/ri";
import Navlogo from "../../public/Navlogo.png";
import Image from "next/image";
import Link from "next/link";

const auto=[
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
]
const home=[
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
]
const business=[
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
    href: "/business/environmental-liability-insurance",
  },
  {
    name: "Environmental Impairment Liability Insurance",
    href: "/business/product-liability-insurance",
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
]
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
const life=[
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
]

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
  const [dropdownOpen, setDropdownOpen] = useState({});
  const pathname = usePathname();

  const toggleDropdown = (title) => {
    setDropdownOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="z-20 font-montserrat shadow-md border-red-50 text-black bg-white rounded-full top-20">
      <div className="mx-auto flex items-center pb-3 md:px-8 mb-2 transition-transform duration-300">
        {/* Center Section - Logo */}
        <div className="flex-1 flex justify-center md:justify-start min-w-60 pl-8 relative overflow-hidden">
          <Link href="/">
            <Image
              src={Navlogo}
              alt="Aaxel Insurance"
              priority
              className="w-full h-auto md:w-3/4"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-3/4 mr-10">
          {/* Top Bar */}
          <div className="flex justify-between items-center px-6 py-6 text-sm">
            <div className="flex justify-end w-full space-x-6 text-xs px-4">
              {[
                { name: "Join Our Team", path: "/careers" },
                { name: "Our Locations", path: "/our-location" },
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative group"
                >
                  <span
                    className={`transition duration-300 ${
                      isActive(link.path)
                        ? "text-[#2A3591]"
                        : "group-hover:text-[#2A3591]"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#2A3591] transition-all duration-300 ${
                      isActive(link.path)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
            <div className="flex space-x-4 text-gray-700">
              <FaFacebookF className="cursor-pointer hover:text-[#2A3591] transition duration-300" />
              <FaInstagram className="cursor-pointer hover:text-[#2A3591] transition duration-300" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#2A3591] transition duration-300" />
              <FaEnvelope className="cursor-pointer hover:text-[#2A3591] transition duration-300" />
              <FaWhatsapp className="cursor-pointer hover:text-[#2A3591] transition duration-300" />
              <FaTiktok className="cursor-pointer hover:text-[#2A3591] transition duration-300" />
            </div>
          </div>
          <hr className="w-full" />

          {/* Bottom Bar - Main Navigation */}
          <div className="flex justify-between items-center px-4 pt-5">
            <div className="flex space-x-6 font-semibold text-sm">
              {[
                {
                  title: "AUTO",
                  links: auto,
                },
                {
                  title: "HOME",
                  links: home,
                },
                {
                  title: "GROUPS",
                  links: groups,
                },
                {
                  title: "BUSINESS",
                  links: business,
                },
                {
                  title: "LIFE & FINANCIAL",
                  links: life,
                },
              ].map((item) => (
                <Dropdown
                  key={item.title}
                  title={item.title}
                  links={item.links}
                  pathname={pathname}
                />
              ))}

              {[
                { name: "TRAVEL", path: "/travel" },
                { name: "CLAIMS", path: "/claims" },
                { name: "BLOG", path: "/blogs" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative group"
                >
                  <span
                    className={`transition duration-300 ${
                      isActive(link.path)
                        ? "text-[#2A3591]"
                        : "group-hover:text-[#2A3591]"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#2A3591] transition-all duration-300 ${
                      isActive(link.path)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Right - Contact Button */}
            <div className="flex items-center space-x-6">
              <a
                href="tel:+18663582860"
                className="cursor-pointer bg-[#FEDF83] hover:bg-[#2A3591] text-black hover:text-white px-9 py-4 rounded-md transition duration-300"
              >
                +1 866-358-2860
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Dropdown = ({ title, links, pathname }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center group-hover:text-[#2A3591] transition duration-300">
        <span className="relative pb-4">
          {title}
          <span
            className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#2A3591] transition-all duration-300 ${
              open || links.some((link) => pathname.startsWith(link.href))
                ? "scale-x-100"
                : "scale-x-0"
            }`}
          ></span>
        </span>
        <RiArrowDropDownLine className="text-lg mb-4" />
      </button>

      {open && (
        <div className="absolute top-9 -left-20 rounded-lg bg-white shadow-md py-2 w-48 transition-all duration-300 z-10 max-h-80 overflow-y-auto custom-scrollbar">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative group block px-4 py-2 text-[10px] font-medium transition duration-300 ${
                pathname.startsWith(link.href)
                  ? "text-[#2A3591]"
                  : "hover:text-[#2A3591]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const menuItems = [
    {
      title: "AUTO",
      links: auto,
    },
    {
      title: "HOME",
      links: home,
    },
    {
      title: "GROUPS",
      links: groups,
    },
    {
      title: "BUSINESS",
      links: business,
    },
    {
      title: "LIFE & FINANCIAL",
      links: life,
    },
  ];

  return (
    <header className="z-30 bg-white shadow-md fixed top-0 w-screen md:hidden">
      <div className="flex justify-between items-center p-4">
        {/* Menu Toggle Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex-1 flex justify-center">
          <Image src={Navlogo} alt="Aaxel Insurance" width={120} height={40} />
        </Link>

        {/* Search Button */}
        <button className="text-2xl" onClick={toggleSearch}>
          <FaSearch />
        </button>
      </div>

      {/* Search Slide */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col p-6 shadow-lg transform ${
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Cross Button */}
        <button
          className="absolute top-4 left-4 text-2xl"
          onClick={toggleSearch}
        >
          <FaTimes />
        </button>

        {/* Search Input and Button */}
        <div className="flex flex-col items-center justify-center h-full">
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

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-4 text-lg font-bold gap-2">
          <Link href="tel:+18663582860" className="text-cyan-600">
            +1 866-358-2860
          </Link>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-gray-700">
            <FaFacebookF className="cursor-pointer hover:text-blue-500 transition duration-300" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition duration-300" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700 transition duration-300" />
            <FaEnvelope className="cursor-pointer hover:text-red-500 transition duration-300" />
            <FaWhatsapp className="cursor-pointer hover:text-green-600 transition duration-300" />
            <FaTiktok className="cursor-pointer hover:text-black transition duration-300" />
          </div>

          {/* Dropdown Sections */}
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                className="w-full text-left font-bold py-2 border-b hover:text-cyan-700"
                onClick={() => toggleDropdown(item.title)}
              >
                {item.title}
              </button>

              {openDropdown === item.title && (
                <div className="pl-2 mt-2 space-y-2 max-h-60 overflow-y-auto hover:text-cyan-600">
                  {item.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block font-thin"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Additional Links */}
          <Link
            href="/travel"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            Travel
          </Link>
          <Link
            href="/claims"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            Claims
          </Link>
          <Link
            href="/blogs"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
        </div>
      </nav>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 -z-10"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
