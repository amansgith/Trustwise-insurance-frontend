// "use client";
// import Link from "next/link";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const Hero = () => {

//   const scrollToSection = () => {
//     const section = document.getElementById("popular-product");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="bg-white w-full flex flex-col md:flex-row px-8 md:px-20 pb-14 items-center pt-16 md:pt-10">
//       <div className="flex flex-col gap-4 md:w-1/2 pt-16 md:pt-0">
//         <h3 className="uppercase text-[18px] md:text-[30px] font-bold leading-normal">
//           Your Coverage, Your Way!
//         </h3>
//         <h3 className="text-[36px] md:text-[64px] font-extrabold leading-[36px] md:leading-[64px]">
//           Save Up To 30% on <br />
//           Auto, Home and Business Insurance
//         </h3>
//         <p className="text-lg md:text-2xl pb-4">
//           Your Trusted Insurance Partner. Customized Solutions for Your Insurance Needs!
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 pb-14">
//           <Link href="/call-back-request">
//             <button className="py-2.5 md:py-3.5 px-8 sm:px-10 rounded-lg uppercase text-white bg-primary hover:bg-secondary hover:text-black text-base md:text-xl font-bold transition duration-300">
//               Get a Quote
//             </button>
//           </Link>
//           <button onClick={scrollToSection} className="w-auto py-2.5 md:py-3.5 px-8 sm:px-10 rounded-lg uppercase bg-secondary hover:bg-primary hover:text-white text-base md:text-xl font-bold transition duration-300">
//             + Popular Products
//           </button>
//         </div>
//       </div>
//       <div className="w-full md:w-1/2 overflow-hidden mt-6 md:mt-0">
//         <DotLottieReact className="w-full h-auto object-cover"
//           src="https://lottie.host/397d32a7-2186-49d0-bb55-be44eb491188/zhpbIoyUWT.lottie"
//           loop
//           autoplay
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;


"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import shape from "../../../public/heroshape.webp"

const slides = [
  {
    title: "Insure your long Drives without any",
    highlight: "worries.",
    description:
      "Get the Best Car Insurance plans for your Ride.",
    buttonText: "Get Started",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Build your business without any",
    highlight: "problem.",
    description:
      "Your peace of mind matters. Get insured today and prosper your business ideas.",
    buttonText: "Get a Quote",
    image: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "We Protect What Matters",
    highlight: "Most.",
    description: "Coverage for your health, home, and loved ones.",
    buttonText: "Explore Plans",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Hero  () {
  const swiperRef = useRef(null); 
  return (
    <div className="relative w-full h-[90vh] mt-8 overflow-hidden z-0">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        navigation={{
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-between h-full px-12 md:px-24 lg:px-32">
              {/* LEFT SIDE: TEXT CONTENT */}
              <div className="relative max-w-lg z-10 text-white drop-shadow-lg">
                {/* Shape Image */}
                <div className="absolute -top-10 -left-10 w-64 h-1/2 opacity-30">
                  <Image
                    src={shape}
                    alt="Shape"
                    layout="fill"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.title} // Re-trigger animation per slide
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="h-3 rounded-lg w-2/3 mb-4 bg-gradient-to-r from-primary to-secondary"></div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      {slide.title}{" "}
                      <span className="text-blue-300">{slide.highlight}</span>
                    </h1>
                  </motion.div>

                  <motion.p
                    key={slide.description} // Ensures fresh animation
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-lg mt-4"
                  >
                    {slide.description}
                  </motion.p>

                  <Link href='/call-back-request'>
                  <motion.button
                    key={slide.buttonText} // Ensure button animation per slide
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                    className="mt-6 px-6 py-3 text-white font-semibold bg-primary rounded-lg shadow-md hover:bg-secondary hover:text-black transition-all"
                  >
                    {slide.buttonText}
                  </motion.button>
                  </Link>
                </AnimatePresence>
              </div>

              {/* RIGHT SIDE: IMAGE */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute right-0 top-0 w-full h-full"
              >
                <img
                  src={slide.image}
                  alt="Insurance"
                  className="object-cover w-full h-full"
                />
                {/* Dark gradient for better contrast */}
                <div className="absolute inset-0 bg-black/30"></div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};