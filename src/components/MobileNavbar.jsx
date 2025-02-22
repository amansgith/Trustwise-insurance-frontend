"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.png";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const menuItems = [
    {
      title: "AUTO",
      links: [
        { name: "Auto Insurance", href: "/auto" },
        { name: "Bundle Insurance", href: "/auto/bundle-insurance" },
        { name: "Boat Insurance", href: "/auto/boat-insurance" },
        { name: "Classic Car Insurance", href: "/auto/classic-car-insurance" },
        { name: "Private Client Insurance", href: "/auto/private-client-insurance" },
        { name: "Motorcycle Insurance", href: "/auto/motorcycle-insurance" },
        { name: "RV Insurance", href: "/auto/rv-insurance" },
        { name: "Snowmobile Insurance", href: "/auto/snowmobile-insurance" },
        { name: "Commercial Automobile Insurance", href: "/auto/commercial-automobile-insurance" },
      ],
    },
    {
      title: "HOME",
      links: [
        { name: "Home Insurance", href: "/Home" },
        { name: "Condo Insurance", href: "/Home/condo-insurance" },
        { name: "Tenant Insurance", href: "/Home/tenant-insurance" },
        { name: "Cottage Insurance", href: "/Home/cottage-insurance" },
        { name: "Rental Property Insurance", href: "/Home/rental-property-insurance" },
        { name: "Pet Insurance", href: "/Home/pet-insurance" },
      ],
    },
    {
      title: "GROUPS",
      links: [
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
      ],
    },
    {
      title: "BUSINESS",
      links: [
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
        { name: "Environmental Impairment Liability Insurance", href: "/business/environmental-liability-insurance" },
      ],
    },
    {
      title: "LIFE & FINANCIAL",
      links: [
        { name: "Life Insurance", href: "/life-financial" },
        { name: "Disability Insurance", href: "/life-financial/disability-insurance" },
        { name: "Critical Illness Insurance", href: "/life-financial/critical-illness-insurance" },
        { name: "Mortgage Insurance", href: "/life-financial/mortgage-insurance" },
        { name: "Investments", href: "/life-financial/investments" },
        { name: "Long-Term Care", href: "/life-financial/long-term-care" },
        { name: "Group Benefits", href: "/life-financial/group-benefits" },
      ],
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
          <Image src={Logo} alt="Aaxel Insurance" width={120} height={40} />
        </Link>

        {/* Search Button */}
        <button className="text-2xl">
          <FaSearch />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-6 space-y-4 text-lg font-semibold">
          {/* Static Links */}
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

          {/* Dropdown Sections */}
          {menuItems.map((item) => (
            <div key={item.title}>
              {/* Dropdown Title */}
              <button 
                className="w-full text-left font-bold py-2 border-b"
                onClick={() => toggleDropdown(item.title)}
              >
                {item.title}
              </button>

              {/* Dropdown Links */}
              {openDropdown === item.title && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.links.map((link) => (
                    <Link key={link.name} href={link.href} className="block" onClick={() => setMenuOpen(false)}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Phone Number */}
          <Link href="tel:+18663582860" className="text-cyan-600">
            +1 866-358-2860
          </Link>
        </div>
      </nav>

      {/* Background Overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default MobileNavbar;