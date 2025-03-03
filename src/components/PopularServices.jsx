"use client";
import Image from "next/image";
import ClockImage from "../../public/clock.webp"; // Adjust the path
import vectorlines from "../../public/vectorlines.jpg";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// const CTA = () => {
//   return (
//     <>
//       {/* Content Wrapper */}
//       <div
//         className="bg-black flex flex-col md:flex-row items-center px-8 md:px-36 pt-10 bg-no-repeat bg-cover"
//         style={{
//           backgroundImage:
//             "url('https://img.freepik.com/free-photo/deep-blue-texture-background_24837-398.jpg?ga=GA1.1.610996962.1739565719&semt=ais_hybrid')",
//         }}
//       >
//         {/* Left Side (Text) */}
//         <div className="md:w-1/2 text-white text-left pt-0">
//           <h1 className="text-3xl md:text-6xl font-semibold">
//             "Your Time & Money is Important."
//           </h1>
//           <p className="text-lg md:text-2xl text-gray-300 font-thin my-9 max-w-lg">
//             With our Bundle Insurance (Auto + Home), we will help you save your
//             time and money by combining your insurance plan in one.
//           </p>
//           <button className="mt-6 bg-cyan-700 hover:bg-green-600 transition duration-300 text-xl text-white font-bold py-4 px-8 rounded-lg">
//             Get A Quote
//           </button>
//         </div>

//         {/* Right Side (Clock Image) */}
//         <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
//           <Image
//             src={ClockImage}
//             alt="Watch Image"
//             className="max-w-full h-auto"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

const services = [
  {
    title: "Car insurance",
    description: "Secure your vehicle with our coverage.",
    image: "https://www.aaxel.ca/wp-content/uploads/2023/04/Auto-Insurance.jpg",
    icon: "🚗",
    href: "/auto/classic-car-insurance",
  },
  {
    title: "Life insurance",
    description: "Protect your loved ones with life insurance.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/03/name_-gravity-_AdUs32i0jc-unsplash.jpg",
    icon: "❤️",
    href: "/life-financial",
  },
  {
    title: "Home insurance",
    description: "Your home deserves the best protection.",
    image: "https://www.aaxel.ca/wp-content/uploads/2023/04/Home-Insurance.jpg",
    icon: "🏡",
    href: "/Home",
  },
  {
    title: "Bundle insurance",
    description: "Stay covered with quality health plans.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/03/Header-Compressed-Webp.webp",
    icon: "🏥",
    href: "/auto/bundle-insurance",
  },
  {
    title: "Business insurance",
    description: "Keep your business safe and secure.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/04/Business-Insuranc.jpg",
    icon: "💼",
    href: "/business",
  },
  {
    title: "Group insurance",
    description: "Protect against fire-related damages.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/04/Group-Insurance.jpg",
    icon: "🔥",
    href: "/groups",
  },
  {
    title: "Travel insurance",
    description: "Travel with peace of mind.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/03/jeshoots-com-mSESwdMZr-A-unsplash.jpg",
    icon: "✈️",
    href: "/travel",
  },
  {
    title: "Disability insurance",
    description: "Travel with peace of mind.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/03/yomex-owo-gRTzhQsiVG0-unsplash.jpg",
    icon: "✈️",
    href: "/life-financial/disability-insurance",
  },
];

const PopularServices = () => {
  return (
    <section id="popular-product" className="relative bg-gray-50 py-16 px-6">
      <div className="absolute inset-0 w-full h-full opacity-60">
        <Image
          src={vectorlines}
          alt="Golden Wave"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Header Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-primary text-lg md:text-6xl font-extrabold uppercase tracking-wide">
          Popular Services
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          We’re covering all the insurance fields
        </h3>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          We provide a wide range of insurance services tailored to your needs.
          Choose what fits best for you!
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link key={index} href={service.href}>
            <div className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Image Section */}
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col items-start">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{service.icon}</span>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h4>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white flex gap-2 text-lg font-bold">Explore Now<FaArrowUpRightFromSquare/> </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
