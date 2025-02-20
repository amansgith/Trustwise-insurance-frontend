"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaTiktok,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (title) => {
    setDropdownOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <header className=" z-20 font-montserrat shadow-md text-black sticky top-0 bg-white">
      <div
        className={`mx-auto flex items-center pt-2 px-8 transition-transform duration-300 ${
          menuOpen || searchOpen ? "transform scale-95" : ""
        }`}
      >
        {/* Mobile View - Left Section - Toggle Button */}
        <button
          className="md:hidden text-2xl mr-4"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

        {/* Center Section - Logo */}
        <div className="flex-1 flex justify-center md:justify-start py-3 min-w-80 pr-4 relative overflow-hidden">
          <Link href="/">
            <Image
              src={Logo}
              alt="Aaxel Insurance"
              priority
              className="w-full h-auto md:w-auto"
            />
          </Link>
        </div>

        {/* Mobile View - Right Section - Search Icon */}
        <FaSearch
          className="text-xl cursor-pointer md:hidden ml-4"
          onClick={() => setSearchOpen(true)}
        />

        {/* Right Section */}
        <div className="w-3/4 mr-10">
          {/* Top Bar */}
          <div className="hidden md:flex justify-between items-center px-6 py-6 text-sm">
            <div className="flex justify-end w-full space-x-6 text-xs px-4">
              <Link href="/careers" className="relative group">
                <span className="group-hover:text-blue-500 transition duration-300">
                  Join Our Team
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
              <Link href="/locations" className="relative group">
                <span className="group-hover:text-blue-500 transition duration-300">
                  Our Locations
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
              <Link href="/about" className="relative group">
                <span className="group-hover:text-blue-500 transition duration-300">
                  About Us
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
              <Link href="/contact" className="relative group">
                <span className="group-hover:text-blue-500 transition duration-300">
                  Contact Us
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
            </div>
            <div className="flex space-x-4 text-gray-700">
              <FaFacebookF className="cursor-pointer hover:text-blue-500 transition duration-300" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition duration-300" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700 transition duration-300" />
              <FaEnvelope className="cursor-pointer hover:text-red-500 transition duration-300" />
              <FaWhatsapp className="cursor-pointer hover:text-green-600 transition duration-300" />
              <FaTiktok className="cursor-pointer hover:text-black transition duration-300" />
            </div>
          </div>
          <hr className="w-full" />
          {/* Bottom Bar - Main Navigation */}
          <div className="flex justify-between items-center px-6 py-3">
            {/* Navigation Menu (Desktop) */}
            <div className="hidden md:flex space-x-6 font-semibold text-sm">
              <Dropdown
                title="AUTO"
                links={[
                  { name: "Auto Insurance", href: "/services/auto-insurance" },
                  {
                    name: "Bundle Insurance",
                    href: "/services/bundle-insurance",
                  },
                  { name: "Boat Insurance", href: "/services/boat-insurance" },
                  {
                    name: "Classic Car Insurance",
                    href: "/services/classic-car-insurance",
                  },
                  {
                    name: "Private Client Insurance",
                    href: "/services/private-client-insurance",
                  },
                  {
                    name: "Motorcycle Insurance",
                    href: "/services/motorcycle-insurance",
                  },
                  { name: "RV Insurance", href: "/services/rv-insurance" },
                  {
                    name: "Snowmobile Insurance",
                    href: "/services/snowmobile-insurance",
                  },
                  {
                    name: "Commercial Automobile Insurance",
                    href: "/services/commercial-auto-insurance",
                  },
                ]}
              />

              <Dropdown
                title="HOME"
                links={[
                  { name: "Home Insurance", href: "/services/home-insurance" },
                  {
                    name: "Condo Insurance",
                    href: "/services/condo-insurance",
                  },
                  {
                    name: "Tenant Insurance",
                    href: "/services/tenant-insurance",
                  },
                  {
                    name: "Cottage Insurance",
                    href: "/services/cottage-insurance",
                  },
                  {
                    name: "Rental Property Insurance",
                    href: "/services/rental-property-insurance",
                  },
                  { name: "Pet Insurance", href: "/services/pet-insurance" },
                ]}
              />

              <Dropdown
                title="GROUPS"
                links={[
                  {
                    name: "Group Insurance",
                    href: "/services/group-insurance",
                  },
                  {
                    name: "Association – CHPTA",
                    href: "/services/association-chpta",
                  },
                  {
                    name: "Association – COPA",
                    href: "/services/association-copa",
                  },
                  {
                    name: "Association – emergiTEL",
                    href: "/services/association-emergitel",
                  },
                  {
                    name: "Association – SBPA",
                    href: "/services/association-sbpa",
                  },
                  {
                    name: "Association – PAU Alumni",
                    href: "/services/association-pau",
                  },
                  {
                    name: "Association – Pakmen Volleyball Club",
                    href: "/services/association-pakmen",
                  },
                  {
                    name: "Association – IIM",
                    href: "/services/association-iim",
                  },
                  {
                    name: "Association – CTAO",
                    href: "/services/association-ctao",
                  },
                  {
                    name: "Association – CASAL",
                    href: "/services/association-casal",
                  },
                  {
                    name: "Association – PAO",
                    href: "/services/association-pao",
                  },
                  {
                    name: "Charger Logistics Inc.",
                    href: "/services/charger-logistics",
                  },
                  { name: "HRAI", href: "/services/hrai" },
                ]}
              />

              <Dropdown
                title="BUSINESS"
                links={[
                  {
                    name: "Business Insurance",
                    href: "/services/business-insurance",
                  },
                  {
                    name: "Home-Based Business Insurance",
                    href: "/services/home-business-insurance",
                  },
                  {
                    name: "Small Medium Business Insurance",
                    href: "/services/smb-insurance",
                  },
                  {
                    name: "Corporate Insurance",
                    href: "/services/corporate-insurance",
                  },
                  {
                    name: "Contractors Insurance",
                    href: "/services/contractors-insurance",
                  },
                  {
                    name: "General Liability Insurance",
                    href: "/services/general-liability",
                  },
                  {
                    name: "Commercial Property Insurance",
                    href: "/services/commercial-property",
                  },
                  {
                    name: "Account Receivable Insurance",
                    href: "/services/account-receivable",
                  },
                  {
                    name: "Builder’s Risk Insurance",
                    href: "/services/builders-risk",
                  },
                  {
                    name: "Commercial Automobile Insurance",
                    href: "/services/commercial-auto",
                  },
                  {
                    name: "Cyber Liability Insurance",
                    href: "/services/cyber-liability",
                  },
                  {
                    name: "Employee Liability Insurance",
                    href: "/services/employee-liability",
                  },
                  {
                    name: "Environmental Impairment Liability Insurance",
                    href: "/services/environmental-liability",
                  },
                ]}
              />

              <Dropdown
                title="LIFE & FINANCIAL"
                links={[
                  { name: "Life Insurance", href: "/services/life-insurance" },
                  {
                    name: "Disability Insurance",
                    href: "/services/disability-insurance",
                  },
                  {
                    name: "Critical Illness Insurance",
                    href: "/services/critical-illness",
                  },
                  {
                    name: "Mortgage Insurance",
                    href: "/services/mortgage-insurance",
                  },
                  { name: "Investments", href: "/services/investments" },
                  { name: "Long-Term Care", href: "/services/long-term-care" },
                  { name: "Group Benefits", href: "/services/group-benefits" },
                ]}
              />

              <Link href="/travel" className="relative group">
                <span className="group-hover:text-cyan-700 transition duration-300">
                  TRAVEL
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-cyan-700 scale-x-0 group-hover:scale-x-150 transition-all duration-300"></span>
              </Link>
              <Link href="/claims" className="relative group">
                <span className="group-hover:text-cyan-700 transition duration-300">
                  CLAIMS
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-cyan-700 scale-x-0 group-hover:scale-x-150 transition-all duration-300"></span>
              </Link>
              <Link href="/blogs" className="relative group">
                <span className="group-hover:text-cyan-700 transition duration-300">
                  BLOG
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-cyan-700 scale-x-0 group-hover:scale-x-150 transition-all duration-300"></span>
              </Link>
            </div>

            {/* Right - Search Icon & Contact Button */}
            <div className="flex items-center space-x-6">
              <FaSearch
                className="text-xl cursor-pointer md:hidden"
                onClick={() => setSearchOpen(true)}
              />
              <a
                href="tel:+18663582860"
                className="hidden cursor-pointer md:block bg-cyan-600 hover:bg-black text-white px-9 py-4 rounded-md transition duration-300"
              >
                +1 866-358-2860
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide from Left) */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-blue-500 bg-opacity-80 text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg overflow-y-auto`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex space-x-3">
            <FaFacebookF className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-500" />
            <FaEnvelope className="cursor-pointer hover:text-red-400" />
            <FaWhatsapp className="cursor-pointer hover:text-green-400" />
            <FaTiktok className="cursor-pointer hover:text-white" />
          </div>
          <button className="text-2xl" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <nav className="flex flex-col text-lg font-semibold mt-4 px-6 space-y-4">
          <MobileDropdown
            title="AUTO"
            links={[
              { name: "Auto Insurance", href: "/services/auto-insurance" },
              { name: "Bundle Insurance", href: "/services/bundle-insurance" },
              { name: "Boat Insurance", href: "/services/boat-insurance" },
              {
                name: "Classic Car Insurance",
                href: "/services/classic-car-insurance",
              },
              {
                name: "Private Client Insurance",
                href: "/services/private-client-insurance",
              },
              {
                name: "Motorcycle Insurance",
                href: "/services/motorcycle-insurance",
              },
              { name: "RV Insurance", href: "/services/rv-insurance" },
              {
                name: "Snowmobile Insurance",
                href: "/services/snowmobile-insurance",
              },
              {
                name: "Commercial Automobile Insurance",
                href: "/services/commercial-auto-insurance",
              },
            ]}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
          />

          <MobileDropdown
            title="HOME"
            links={[
                { name: "Home Insurance", href: "/services/home-insurance" },
                {
                  name: "Condo Insurance",
                  href: "/services/condo-insurance",
                },
                {
                  name: "Tenant Insurance",
                  href: "/services/tenant-insurance",
                },
                {
                  name: "Cottage Insurance",
                  href: "/services/cottage-insurance",
                },
                {
                  name: "Rental Property Insurance",
                  href: "/services/rental-property-insurance",
                },
                { name: "Pet Insurance", href: "/services/pet-insurance" },
              ]}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
          />
          <MobileDropdown
            title="GROUPS"
            links={[
                {
                  name: "Group Insurance",
                  href: "/services/group-insurance",
                },
                {
                  name: "Association – CHPTA",
                  href: "/services/association-chpta",
                },
                {
                  name: "Association – COPA",
                  href: "/services/association-copa",
                },
                {
                  name: "Association – emergiTEL",
                  href: "/services/association-emergitel",
                },
                {
                  name: "Association – SBPA",
                  href: "/services/association-sbpa",
                },
                {
                  name: "Association – PAU Alumni",
                  href: "/services/association-pau",
                },
                {
                  name: "Association – Pakmen Volleyball Club",
                  href: "/services/association-pakmen",
                },
                {
                  name: "Association – IIM",
                  href: "/services/association-iim",
                },
                {
                  name: "Association – CTAO",
                  href: "/services/association-ctao",
                },
                {
                  name: "Association – CASAL",
                  href: "/services/association-casal",
                },
                {
                  name: "Association – PAO",
                  href: "/services/association-pao",
                },
                {
                  name: "Charger Logistics Inc.",
                  href: "/services/charger-logistics",
                },
                { name: "HRAI", href: "/services/hrai" },
              ]}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
          />
          <MobileDropdown
            title="BUSINESS"
            links={[
                {
                  name: "Business Insurance",
                  href: "/services/business-insurance",
                },
                {
                  name: "Home-Based Business Insurance",
                  href: "/services/home-business-insurance",
                },
                {
                  name: "Small Medium Business Insurance",
                  href: "/services/smb-insurance",
                },
                {
                  name: "Corporate Insurance",
                  href: "/services/corporate-insurance",
                },
                {
                  name: "Contractors Insurance",
                  href: "/services/contractors-insurance",
                },
                {
                  name: "General Liability Insurance",
                  href: "/services/general-liability",
                },
                {
                  name: "Commercial Property Insurance",
                  href: "/services/commercial-property",
                },
                {
                  name: "Account Receivable Insurance",
                  href: "/services/account-receivable",
                },
                {
                  name: "Builder’s Risk Insurance",
                  href: "/services/builders-risk",
                },
                {
                  name: "Commercial Automobile Insurance",
                  href: "/services/commercial-auto",
                },
                {
                  name: "Cyber Liability Insurance",
                  href: "/services/cyber-liability",
                },
                {
                  name: "Employee Liability Insurance",
                  href: "/services/employee-liability",
                },
                {
                  name: "Environmental Impairment Liability Insurance",
                  href: "/services/environmental-liability",
                },
              ]}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
          />
          <MobileDropdown
            title="LIFE & FINANCIAL"
            links={[
                { name: "Life Insurance", href: "/services/life-insurance" },
                {
                  name: "Disability Insurance",
                  href: "/services/disability-insurance",
                },
                {
                  name: "Critical Illness Insurance",
                  href: "/services/critical-illness",
                },
                {
                  name: "Mortgage Insurance",
                  href: "/services/mortgage-insurance",
                },
                { name: "Investments", href: "/services/investments" },
                { name: "Long-Term Care", href: "/services/long-term-care" },
                { name: "Group Benefits", href: "/services/group-benefits" },
              ]}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
          />
          <Link href="/travel" className="relative group hover:text-gray-400">
            <span className="group-hover:text-gray-400 transition duration-300">
              Travel
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gray-400 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </Link>
          <Link href="/claims" className="relative group hover:text-gray-400">
            <span className="group-hover:text-gray-400 transition duration-300">
              Claims
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gray-400 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </Link>
          <Link href="/blogs" className="relative group hover:text-gray-400">
            <span className="group-hover:text-gray-400 transition duration-300">
              Blog
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gray-400 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Contact Button (Inside Menu) */}
        <div className="px-6 mt-6">
          <a
            href="tel:+18663582860"
            className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            +1 866-358-2860
          </a>
        </div>
      </div>

      {/* Mobile Search Bar (Slide from Right) */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-blue-600 bg-opacity-85 text-black transform ${
          searchOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg flex flex-col items-center justify-center`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setSearchOpen(false)}
        >
          <FaTimes />
        </button>
        <div className="text-center mt-10">
          <h2 className="text-xl mb-4">Search</h2>
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-600"
          />
        </div>
      </div>

      {/* Overlay for Mobile Menu and Search Bar */}
      {(menuOpen || searchOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => {
            setMenuOpen(false);
            setSearchOpen(false);
          }}
        ></div>
      )}
    </header>
  );
};

// Dropdown Component (for Desktop)
const Dropdown = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center group-hover:text-cyan-600 transition duration-300">
        <span className="relative pb-4">
          {title}
          {/* Underline Effect */}
          <span
            className={`absolute left-0 bottom-0 w-full h-[3px] bg-cyan-600 transition-all duration-300 ${
              open ? "scale-x-100" : "scale-x-0"
            }`}
          ></span>
        </span>
        <RiArrowDropDownLine className="text-lg mb-4" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-9 -left-20 rounded-lg bg-white shadow-md py-6 w-48 transition duration-300 z-10">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative group block px-4 py-2 text-[10px] font-light hover:text-cyan-700 transition duration-300"
            >
              <span className="hover:text-cyan-700 transition duration-300">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Mobile Dropdown Component
const MobileDropdown = ({ title, links, dropdownOpen, toggleDropdown }) => {
  return (
    <div>
      <button
        className="flex items-center justify-between w-full"
        onClick={() => toggleDropdown(title)}
      >
        <span>{title}</span>
        <RiArrowDropRightLine
          className={`text-2xl transition-transform duration-300 ${
            dropdownOpen[title] ? "rotate-90" : ""
          }`}
        />
      </button>
      {dropdownOpen[title] && (
        <div className="mt-2 pl-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative group block py-1 text-sm hover:text-gray-400"
            >
              <span className="group-hover:text-gray-400 transition duration-300">
                {link.name}
              </span>
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gray-400 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const NavItem = ({ title, href }) => {
  return (
    <Link href={href} className="relative group">
      <span className="group-hover:text-blue-500 transition duration-300">
        {title}
      </span>
      {/* Underline Effect */}
      <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
    </Link>
  );
};

export default Navbar;
