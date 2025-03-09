"use client";
import Image from "next/image";
import vectorlines from "../../../public/vectorlines.jpg";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Car insurance",
    description: "Drive with confidence and peace of mind.",
    image: "https://www.aaxel.ca/wp-content/uploads/2023/04/Auto-Insurance.jpg",
    icon: "🚗",
    href: "/auto/classic-car-insurance",
  },
  {
    title: "Life insurance",
    description: "Secure your family's future and live carefree.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/03/name_-gravity-_AdUs32i0jc-unsplash.jpg",
    icon: "❤️",
    href: "/life-financial",
  },
  {
    title: "Home insurance",
    description: "Protect your home and everything in it.",
    image: "https://www.aaxel.ca/wp-content/uploads/2023/04/Home-Insurance.jpg",
    icon: "🏡",
    href: "/Home",
  },
  {
    title: "Bundle insurance",
    description: "Combine and save on your insurance plans with additional discounts.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/03/Header-Compressed-Webp.webp",
    icon: "📦",
    href: "/auto/bundle-insurance",
  },
  {
    title: "Business insurance",
    description: "Keep your business safe and secure. Evolve your ideas into action.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/04/Business-Insuranc.jpg",
    icon: "💼",
    href: "/business",
  },
  {
    title: "Group insurance",
    description: "Get the advantage of group power. Unlock discounts and facilities.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/04/Group-Insurance.jpg",
    icon: "👥",
    href: "/groups",
  },
  {
    title: "Travel insurance",
    description: "Travel with peace of mind. Make your heart leap around the world.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/03/jeshoots-com-mSESwdMZr-A-unsplash.jpg",
    icon: "✈️",
    href: "/travel",
  },
  {
    title: "Disability insurance",
    description: "Financial support when you need it most. Fastest claims readily available.",
    image:
      "https://www.aaxel.ca/wp-content/uploads/2023/03/yomex-owo-gRTzhQsiVG0-unsplash.jpg",
    icon: "🦽",
    href: "/life-financial/disability-insurance",
  },
];

const PopularServices = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (inView && !isMobile) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [controls, inView, isMobile]);

  return (
    <section id="popular-product" className="relative bg-gray-50 py-16 px-6">
      <motion.div
        whileInView={{
          y: [0, -10, 0],
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1.5,
          },
        }}
        className={`absolute inset-0 w-full h-full opacity-50 ${isMobile ? 'h-1/2' : 'h-full'}`} // Adjust height for mobile
      >
        <Image
          src={vectorlines}
          alt="Golden Wave"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      {/* Header Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-primary text-lg md:text-xl font-extrabold uppercase tracking-wide">
          {`>>> Popular Services <<<`}
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
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link key={index} href={service.href}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isMobile ? { opacity: 1, y: 0 } : controls}
              className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isMobile ? { opacity: 1, y: 0 } : controls}
                className="relative w-full h-48"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </motion.div>

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
                <span className="text-white flex gap-2 text-lg font-bold">
                  Explore Now
                  <FaArrowUpRightFromSquare />
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularServices;

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
