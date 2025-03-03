"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
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

// const Footer = () => {
//   return (
//     <>
//       {/* Exclusive Access Section */}
//       <div className="bg-gray-100 py-10 px-6 text-center">
//         <h3 className="text-xl font-bold text-cyan-800">
//           Enjoy exclusive access to our content
//         </h3>
//         <p className="text-gray-700 mt-2 max-w-xl mx-auto">
//           Get an online subscription and you can unlock any article you come
//           across, getting instant emails when our site updates, too.
//         </p>
//         <button className="mt-4 bg-cyan-600 text-white px-6 py-2 rounded-md hover:bg-cyan-700 transition">
//           Subscribe Today →
//         </button>
//       </div>

//       {/* Logos Section */}
//       <div className="bg-white w-full py-10 px-2 flex flex-wrap justify-center items-center gap-8 border-t">
//         <Image
//           src="https://www.aaxel.ca/wp-content/uploads/2023/03/12ef9182-e08a-4826-8b32-834d7ddf1284.webp"
//           alt="RIBO"
//           width={200}
//           height={100}
//           className="w-full md:w-auto h-auto"
//         />
//         <Image
//           src="https://www.aaxel.ca/wp-content/uploads/2023/03/Logo.png"
//           alt="CISRO"
//           width={200}
//           height={100}
//           className="w-full md:w-auto h-auto"
//         />
//         <Image
//           src="https://www.aaxel.ca/wp-content/uploads/2023/03/cfib_logo-en.png"
//           alt="CFIB"
//           width={200}
//           height={100}
//           className="w-full md:w-auto h-auto"
//         />
//         <Image
//           src="https://www.aaxel.ca/wp-content/uploads/2023/03/IBAO.png"
//           alt="IBAO"
//           width={300}
//           height={100}
//           className="w-full md:w-auto h-auto"
//         />
//         <Image
//           src="https://www.aaxel.ca/wp-content/uploads/2023/03/bbb.webp"
//           alt="BBB Accredited Business"
//           width={300}
//           height={100}
//           className="w-full md:w-auto h-auto"
//         />
//       </div>

//       {/* Charity Section */}
//       <div className="bg-[#f7f7f7] px-6 pt-[10px] pb-[10px] w-full flex flex-col md:flex-row items-center border-b-2">
//         <h4 className="text-3xl font-bold mb-4 md:mb-0">Charity We Support</h4>
//         <div className="flex-1 flex flex-wrap justify-around items-center gap-4">
//           <div className="w-full md:w-[300px] h-auto">
//             <Image
//               src="https://www.aaxel.ca/wp-content/uploads/2023/03/Heart-Stroke-Foundation.png"
//               alt="Heart Stroke Foundation"
//               width={300}
//               height={200}
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="w-full md:w-[300px] h-auto">
//             <Image
//               src="https://www.aaxel.ca/wp-content/uploads/2023/03/Khaslsa_Aid-removebg-preview.png"
//               alt="Khalsa Aid"
//               width={300}
//               height={200}
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="w-full md:w-[300px] h-auto">
//             <Image
//               src="https://www.aaxel.ca/wp-content/uploads/2023/03/Diabetes-Hope-Foundation.png"
//               alt="Diabetes Hope Foundation"
//               width={300}
//               height={200}
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Footer Links Section */}
//       <div className="bg-[#f7f7f7] px-6 pt-[30px] pb-[60px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="flex justify-center md:justify-start">
//           <Image
//             src="/logo-footer.png"
//             alt="Footer Logo"
//             width={400}
//             height={50}
//             className="-translate-y-6"
//           />
//         </div>
//         {footerLinks.map((flinks, ind) => (
//           <div
//             key={ind}
//             className="w-full px-6 border-l border-gray-500 flex flex-col gap-2"
//           >
//             <h4 className="text-lg font-extrabold">{flinks.title}</h4>
//             <div className="flex flex-col gap-2">
//               {flinks.sublinks.map((links, index) => (
//                 <Link key={index} href={links.url}>
//                   <p className="font-medium hover:text-[#4db2ec]">
//                     {links.text}
//                   </p>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Call Section */}
//       <div className="bg-green-700 text-white py-2 text-center font-bold text-lg md:text-2xl fixed z-20 bottom-0 left-0 right-0">
//         Call for a quote:{" "}
//         <span className="text-white pl-3">1-866-358-2860</span>
//       </div>

//       {/* Copyright */}
//       <div className="py-6 bg-[#f7f7f7]">
//         <h3 className="font-extrabold text-lg text-center mb-12">
//           &copy; {new Date().getFullYear()} Aaxel Insurance Brokers Ltd. All
//           Rights Reserved.
//         </h3>
//       </div>
//     </>
//   );
// };

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`); // Replace this with actual API call
    setEmail(""); // Clear input field after submission
  };

  return (
    <>
      <footer className="relative bg-white text-gray-800 py-10">
        {/* Footer Content */}
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          {/* Row 1: Logo & Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-start">
            {/* Logo */}
            <div className="flex md:justify-start">
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
              <h3 className="text-lg font-semibold">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Get the latest updates and news.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex mt-4 max-w-lg mx-auto md:mx-0"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-r-md hover:bg-blue-700 transition"
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

          {/* Row 3: Copyright */}
          <div className="bg-green-700 text-white py-2 text-center font-bold text-lg md:text-2xl fixed z-20 bottom-0 left-0 right-0">
            Call for a quote:{" "}
            <span className="text-white pl-3">1-866-358-2860</span>
          </div>

          {/* Copyright */}
          <div className="py-6 mt-6">
            <h3 className="font-extrabold text-lg text-center mb-12">
              &copy; {new Date().getFullYear()} Trustwise Insurance Brokers Ltd. All
              Rights Reserved.
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
