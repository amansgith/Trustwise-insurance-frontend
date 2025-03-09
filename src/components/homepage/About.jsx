// "use client";
// import { ArrowRight } from 'lucide-react';
// import Companylogo from '../../public/companylogo1.png';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const About = () => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row gap-10 items-center bg-[#2A3591] text-white">
//         <div className="flex flex-col  justify-between md:w-1/2 px-6 py-4 md:pl-20">
//           <div className="w-fit flex flex-col gap-2 mb-2">
//             <h2 className="uppercase text-[36px] md:text-[46px] leading-[46px] md:leading-[56px] font-bold">About Us</h2>
//             <div className="h-0.5 w-9/12 bg-[#2a80b4]"></div>
//           </div>
//           <div className="flex flex-col gap-4">
//             <p className="font-medium text-base md:text-lg">
//               Founded in 2006, Aaxel Insurance is an independent insurance broker serving throughout Ontario and Alberta. Aaxel Insurance provides innovative Personal and Commercial Insurance solutions to its client’s Home, Auto, Life and Businesses through our trusted insurance partners.
//             </p>
//             <p className="font-medium text-base md:text-lg">
//               Aaxel Insurance delivers best-in-class insurance solutions backed by excellent customer service. We have locations across Ontario and Alberta and proudly serve thousands of customers.
//             </p>
//             <p className="font-medium text-base md:text-lg">
//               Aaxel Insurance provides innovative insurance solutions for all your insurance needs at very competitive rates.
//             </p>
//           </div>
//           <div className="my-4">
//             <Link href="/about">
//               <button className="py-3.5 px-10 bg-secondary text-black rounded-lg hover:text-white flex items-center transition duration-300">
//                 Learn More <ArrowRight size={16} className="ml-2" />
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 mt-6 md:mt-0 overflow-hidden">
//           <Image src={Companylogo} alt="Company Logo" className="w-full h-auto md:-skew-x-6 object-cover" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import oneshape from '../../../public/oneshape.webp';
import Link from "next/link";

const About = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 md:py-32 lg:px-24 py-16 overflow-hidden">
      {/* IMAGE SECTION */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* BACKGROUND IMAGE (White Transparent) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute w-[110%] right-[-310px] bottom-[-20px] h-full opacity-100"
        >
          <Image
            src={oneshape}
            alt="Background"
            width={300}
            height={400}
            className="hidden md:block object-cover w-1/2 h-full rounded-lg"
          />
        </motion.div>

        {/* MAIN IMAGE 1 (Fades in) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <Image
            src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Teamwork"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* MAIN IMAGE 2 (Overlapping - Fades in with delay) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-[-100px] left-[-120px] z-10"
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Business Discussion"
            width={450}
            height={300}
            className="hidden md:block rounded-lg shadow-lg"
          />
        </motion.div>

        {/* EXPERIENCE BADGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute md:bottom-[-80px] md:right-[-10px] z-10"
        >
          <div className="left-6 bg-primary text-white text-lg font-bold px-4 py-2 rounded-lg shadow-md">
            20+ Years of Excellence
          </div>
        </motion.div>
      </div>

      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 z-10"
      >
        <h2 className="text-primary uppercase text-sm font-semibold tracking-wide">
          {`>>> About Us <<<`}
        </h2>
        <h1 className="text-4xl font-bold mt-2 flex-nowrap">
          Your Trusted <span className="text-secondary">Insurance Partner</span>
        </h1>
        <p className="text-gray-600 mt-4">
          At <span className="text-primary font-extrabold">TrustWise Insurance</span>, we believe in securing your future with integrity and care. With a focus on personalized solutions, we offer comprehensive coverage tailored to meet the unique needs of individuals, families, and businesses. Our experienced team is committed to providing exceptional service, ensuring peace of mind through life’s uncertainties.<br/> <em className="font-semibold">TrustWise—where protection meets trust.</em>
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center space-x-4">
          <Link href="/about">
            <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-secondary transition-all">
              Learn More
            </button>
          </Link>
          <div className="flex items-center space-x-2 text-gray-700">
            <span className="text-blue-500 text-2xl">📞</span>
            <div>
              <p className="text-lg font-semibold">+1 (234) 567-890</p>
              <p className="text-sm text-gray-500">Call Our Experts</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;