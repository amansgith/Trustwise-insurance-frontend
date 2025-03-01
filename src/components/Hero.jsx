"use client";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const buttons = [
//   { label: "Auto", link: "/auto" },
//   { label: "Home", link: "/Home" },
//   { label: "Business", link: "/business" },
//   { label: "Life & Financial", link: "/life-financial" },
//   { label: "Travel", link: "/travel" },
// ];

const Hero = () => {

  const scrollToSection = () => {
    const section = document.getElementById("popular-product");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="bg-white w-full flex flex-col md:flex-row px-8 md:px-20 pb-14 items-center">
      <div className="flex flex-col gap-4 md:w-1/2 pt-16">
        <h3 className="uppercase text-[18px] md:text-[30px] font-bold leading-normal">
          Your Coverage, Your Way!
        </h3>
        <h3 className="text-[36px] md:text-[64px] font-extrabold leading-[36px] md:leading-[64px]">
          Save Up To 30% on <br />
          Auto, Home and Business Insurance
        </h3>
        <p className="text-lg md:text-2xl pb-4">
          Your Trusted Insurance Partner. Customized Solutions for Your Insurance Needs!
        </p>
        {/* <h3 className="text-lg md:text-xl font-bold">+ Popular Products</h3> */}
        {/* <div className="flex flex-wrap gap-2 items-center text-[14px] md:text-[16px] font-bold">
          {buttons.map((button, index) => (
            <Link key={index} href={button.link} passHref>
              <button className="p-2.5 md:p-3.5 uppercase rounded bg-[#FEDF83] hover:bg-[#2A3591] hover:text-white transition duration-300">
                {button.label}
              </button>
            </Link>
          ))}
          <Link href="/groups">
            <p className="text-[#2A3591] transition translate-x-2 duration-500">
              + MORE
            </p>
          </Link>
        </div> */}
        <div className="flex gap-4 pb-14">
          <Link href="/call-back-request">
            <button className="py-2.5 md:py-3.5 px-8 rounded-lg md:px-10 uppercase text-white bg-primary hover:bg-secondary hover:text-black text-base md:text-xl font-bold transition duration-300">
              Get a Quote
            </button>
          </Link>
            <button onClick={scrollToSection} className="w-auto py-2.5 md:py-3.5 px-8 rounded-lg md:px-8 uppercase bg-secondary hover:bg-primary hover:text-white text-lg md:text-xl font-bold transition duration-300">
              + Popular Products
            </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 overflow-hidden mt-6 md:mt-0">
        <DotLottieReact className="w-full h-auto object-cover"
          src="https://lottie.host/397d32a7-2186-49d0-bb55-be44eb491188/zhpbIoyUWT.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Hero;
