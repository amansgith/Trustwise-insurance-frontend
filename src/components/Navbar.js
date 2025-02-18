import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaTiktok, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import Logo from "../../public/Logo.png";
import Image from "next/image";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({});

    const toggleDropdown = (title) => {
        setDropdownOpen((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <header className="font-montserrat shadow-md text-black">
            <div className={`mx-auto flex items-center pt-2 px-8 transition-transform duration-300 ${menuOpen || searchOpen ? "transform scale-95" : ""}`}>
                {/* Mobile View - Left Section - Toggle Button */}
                <button className="md:hidden text-2xl mr-4" onClick={() => setMenuOpen(true)}>
                    <FaBars />
                </button>

                {/* Center Section - Logo */}
                <div className="flex-1 flex justify-center md:justify-start py-3 min-w-80 pr-4 relative overflow-hidden">
                    <Link href="/">
                        <Image src={Logo} alt="Aaxel Insurance" priority className="w-full h-auto md:w-auto" />
                    </Link>
                </div>

                {/* Mobile View - Right Section - Search Icon */}
                <FaSearch className="text-xl cursor-pointer md:hidden ml-4" onClick={() => setSearchOpen(true)} />

                {/* Right Section */}
                <div className="w-3/4 mr-10">
                    {/* Top Bar */}
                    <div className="hidden md:flex justify-between items-center px-6 py-6 text-sm">
                        <div className="flex justify-end w-full space-x-6 text-xs px-4">
                            <Link href="/careers">Join Our Team</Link>
                            <Link href="/locations">Our Locations</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/contact">Contact Us</Link>
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
                            <Dropdown title="AUTO" links={[{ name: "Car Insurance", href: "/services/auto-insurance" }, { name: "Motorcycle Insurance", href: "/services/motorcycle-insurance" }]} />
                            <Dropdown title="HOME" links={[{ name: "Home Insurance", href: "/services/home-insurance" }, { name: "Renters Insurance", href: "/services/renters-insurance" }]} />
                            <Dropdown title="GROUPS" links={[{ name: "Group Benefits", href: "/services/group-insurance" }, { name: "Health Insurance", href: "/services/health-insurance" }]} />
                            <Dropdown title="BUSINESS" links={[{ name: "Business Insurance", href: "/services/business-insurance" }, { name: "Commercial Auto Insurance", href: "/services/commercial-auto-insurance" }]} />
                            <Dropdown title="LIFE & FINANCIAL" links={[{ name: "Life Insurance", href: "/services/life-insurance" }, { name: "Retirement Planning", href: "/services/retirement-planning" }]} />
                            <Link href="/travel" className="hover:underline transition duration-300">TRAVEL</Link>
                            <Link href="/claims" className="hover:underline transition duration-300">CLAIMS</Link>
                            <Link href="/blog" className="hover:underline transition duration-300">BLOG</Link>
                        </div>

                        {/* Right - Search Icon & Contact Button */}
                        <div className="flex items-center space-x-6">
                            <FaSearch className="text-xl cursor-pointer md:hidden" onClick={() => setSearchOpen(true)} />
                            <a href="tel:+18663582860" className="hidden cursor-pointer md:block bg-cyan-600 hover:bg-black text-white px-9 py-4 rounded-md transition duration-300">
                                +1 866-358-2860
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Slide from Left) */}
            <div
                className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-blue-500 bg-opacity-80 text-white transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
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
                    <MobileDropdown title="AUTO" links={[{ name: "Car Insurance", href: "/services/auto-insurance" }, { name: "Motorcycle Insurance", href: "/services/motorcycle-insurance" }]} dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
                    <MobileDropdown title="HOME" links={[{ name: "Home Insurance", href: "/services/home-insurance" }, { name: "Renters Insurance", href: "/services/renters-insurance" }]} dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
                    <MobileDropdown title="GROUPS" links={[{ name: "Group Benefits", href: "/services/group-insurance" }, { name: "Health Insurance", href: "/services/health-insurance" }]} dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
                    <MobileDropdown title="BUSINESS" links={[{ name: "Business Insurance", href: "/services/business-insurance" }, { name: "Commercial Auto Insurance", href: "/services/commercial-auto-insurance" }]} dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
                    <MobileDropdown title="LIFE & FINANCIAL" links={[{ name: "Life Insurance", href: "/services/life-insurance" }, { name: "Retirement Planning", href: "/services/retirement-planning" }]} dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
                    <Link href="/travel" className="hover:text-gray-400">Travel</Link>
                    <Link href="/claims" className="hover:text-gray-400">Claims</Link>
                    <Link href="/blog" className="hover:text-gray-400">Blog</Link>
                </nav>

                {/* Contact Button (Inside Menu) */}
                <div className="px-6 mt-6">
                    <a href="tel:+18663582860" className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md">
                        +1 866-358-2860
                    </a>
                </div>
            </div>

            {/* Mobile Search Bar (Slide from Right) */}
            <div
                className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-blue-600 bg-opacity-85 text-black transform ${searchOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out shadow-lg flex flex-col items-center justify-center`}
            >
                <button className="absolute top-4 right-4 text-2xl" onClick={() => setSearchOpen(false)}>
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
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => { setMenuOpen(false); setSearchOpen(false); }}></div>
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
                        className={`absolute left-0 bottom-0 w-full h-[3px] bg-cyan-600 transition-all duration-300 ${open ? "scale-x-100" : "scale-x-0"
                            }`}
                    ></span>
                </span>
                <RiArrowDropDownLine className="text-lg mb-4" />
            </button>

            {/* Dropdown Menu */}
            {open && (
                <div className="absolute top-12 bg-white shadow-md py-6 w-48 transition duration-300 z-10">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="block px-4 py-2 text-[10px] font-light hover:text-cyan-600 transition duration-300"
                        >
                            {link.name}
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
            <button className="flex items-center justify-between w-full" onClick={() => toggleDropdown(title)}>
                <span>{title}</span>
                <RiArrowDropRightLine className={`text-2xl transition-transform duration-300 ${dropdownOpen[title] ? "rotate-90" : ""}`} />
            </button>
            {dropdownOpen[title] && (
                <div className="mt-2 pl-4">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className="block py-1 text-sm hover:text-gray-400">
                            {link.name}
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