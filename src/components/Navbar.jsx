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
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (title) => {
    setDropdownOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <header className="z-20 font-montserrat shadow-md text-black bg-white sticky top-0">
      <div className="mx-auto flex items-center pt-2 px-8 transition-transform duration-300">
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

        {/* Right Section */}
        <div className="w-3/4 mr-10">
          {/* Top Bar */}
          <div className="flex justify-between items-center px-6 py-6 text-sm">
            <div className="flex justify-end w-full space-x-6 text-xs px-4">
              <Link href="/careers" className="relative group">
                <span className="group-hover:text-blue-500 transition duration-300">
                  Join Our Team
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
              <Link href="/our-location" className="relative group">
                Our Locations
                <span className="group-hover:text-blue-500 transition duration-300"></span>
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
          <div className="flex justify-between items-center px-4 py-3">
            {/* Navigation Menu (Desktop) */}
            <div className="flex space-x-6 font-semibold text-sm">
              <Dropdown
                title="AUTO"
                links={[
                  { name: "Auto Insurance", href: "/auto" },
                  { name: "Bundle Insurance", href: "/auto/bundle-insurance" },
                  { name: "Boat Insurance", href: "/auto/boat-insurance" },
                  { name: "Classic Car Insurance", href: "/auto/classic-car-insurance" },
                  { name: "Private Client Insurance", href: "/auto/private-client-insurance" },
                  { name: "Motorcycle Insurance", href: "/auto/motorcycle-insurance" },
                  { name: "RV Insurance", href: "/auto/rv-insurance" },
                  { name: "Snowmobile Insurance", href: "/auto/snowmobile-insurance" },
                  { name: "Commercial Automobile Insurance", href: "/auto/commercial-automobile-insurance" },
                ]}
              />

              <Dropdown
                title="HOME"
                links={[
                  { name: "Home Insurance", href: "/Home" },
                  { name: "Condo Insurance", href: "/Home/condo-insurance" },
                  { name: "Tenant Insurance", href: "/Home/tenant-insurance" },
                  { name: "Cottage Insurance", href: "/Home/cottage-insurance" },
                  { name: "Rental Property Insurance", href: "/Home/rental-property-insurance" },
                  { name: "Pet Insurance", href: "/Home/pet-insurance" },
                ]}
              />

              <Dropdown
                title="GROUPS"
                links={[
                  { name: "Group Insurance", href: "/groups" },
                  { name: "Association – CHPTA", href: "/groups/association-chpta" },
                  { name: "Association – COPA", href: "/groups/association-copa" },
                  { name: "Association – emergiTEL", href: "/groups/association-emergitel" },
                  { name: "Association – SBPA", href: "/groups/association-sbpa" },
                  { name: "Association – PAU Alumni", href: "/groups/association-pau" },
                  { name: "Association – Pakmen Volleyball Club", href: "/groups/association-pakmen" },
                  { name: "Association – IIM", href: "/groups/association-iim" },
                  { name: "Association – CTAO", href: "/groups/association-ctao" },
                  { name: "Association – CASAL", href: "/groups/association-casal" },
                  { name: "Association – PAO", href: "/groups/association-pao" },
                  { name: "Charger Logistics Inc.", href: "/groups/charger-logistics" },
                  { name: "HRAI", href: "/groups/hrai" },
                  { name: "Mobile-Live", href: "/groups/mobilelive" },
                ]}
              />

              <Dropdown
                title="BUSINESS"
                links={[
                  { name: "Business Insurance", href: "/business" },
                  { name: "Home-Based Business Insurance", href: "/business/home-business-insurance" },
                  { name: "Small Medium Business Insurance", href: "/business/smb-insurance" },
                  { name: "Corporate Insurance", href: "/business/corporate-insurance" },
                  { name: "Contractors Insurance", href: "/business/contractors-insurance" },
                  { name: "General Liability Insurance", href: "/business/general-liability-insurance" },
                  { name: "Commercial Property Insurance", href: "/business/commercial-property-insurance" },
                  { name: "Account Receivable Insurance", href: "/business/account-receivable-insurance" },
                  { name: "Builder’s Risk Insurance", href: "/business/builders-risk-insurance" },
                  { name: "Commercial Automobile Insurance", href: "/auto/commercial-automobile-insurance" },
                  { name: "Cyber Liability Insurance", href: "/business/cyber-liability-insurance" },
                  { name: "Employee Liability Insurance", href: "/business/employee-liability-insurance" },
                  { name: "Garage Insurance", href: "/business/garage-insurance" },
                  { name: "Product Liability Insurance", href: "/business/environmental-liability-insurance" },
                  { name: "Environmental Impairment Liability Insurance", href: "/business/product-liability-insurance" },
                  { name: "Professional Liability Insurance", href: "/business/professional-liability-insurance" },
                  { name: "Legal Expense Insurance", href: "/business/legal-expense-insurance" },
                  { name: "Malpractice Insurance", href: "/business/malpractice-insurance" },
                  { name: "Private Client Insurance", href: "/auto/private-client-insurance" },
                  { name: "Speciality Insurance", href: "/business/speciality-insurance" },
                ]}
              />

              <Dropdown
                title="LIFE & FINANCIAL"
                links={[
                  { name: "Life Insurance", href: "/life-financial" },
                  { name: "Disability Insurance", href: "/life-financial/disability-insurance" },
                  { name: "Critical Illness Insurance", href: "/life-financial/critical-illness-insurance" },
                  { name: "Mortgage Insurance", href: "/life-financial/mortgage-insurance" },
                  { name: "Investments", href: "/life-financial/investments" },
                  { name: "Long-Term Care", href: "/life-financial/long-term-care" },
                  { name: "Group Benefits", href: "/life-financial/group-benefits" },
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
              {/* <FaSearch className="text-xl cursor-pointer" /> */}
              <a
                href="tel:+18663582860"
                className="cursor-pointer bg-cyan-600 hover:bg-black text-white px-9 py-4 rounded-md transition duration-300"
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
        <div className="absolute top-9 -left-20 rounded-lg bg-white shadow-md py-2 w-48 transition duration-300 z-10">
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

export default Navbar;