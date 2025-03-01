"use client";
import { ArrowRight } from 'lucide-react';
import Companylogo from '../../public/companylogo1.png';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 items-center bg-[#2A3591] text-white">
        <div className="flex flex-col  justify-between md:w-1/2 px-6 py-4 md:pl-20">
          <div className="w-fit flex flex-col gap-2 mb-2">
            <h2 className="uppercase text-[36px] md:text-[46px] leading-[46px] md:leading-[56px] font-bold">About Us</h2>
            <div className="h-0.5 w-9/12 bg-[#2a80b4]"></div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-base md:text-lg">
              Founded in 2006, Aaxel Insurance is an independent insurance broker serving throughout Ontario and Alberta. Aaxel Insurance provides innovative Personal and Commercial Insurance solutions to its client’s Home, Auto, Life and Businesses through our trusted insurance partners.
            </p>
            <p className="font-medium text-base md:text-lg">
              Aaxel Insurance delivers best-in-class insurance solutions backed by excellent customer service. We have locations across Ontario and Alberta and proudly serve thousands of customers.
            </p>
            <p className="font-medium text-base md:text-lg">
              Aaxel Insurance provides innovative insurance solutions for all your insurance needs at very competitive rates.
            </p>
          </div>
          <div className="my-4">
            <button className="py-3.5 px-10 bg-secondary text-black rounded-lg hover:  hover:text-white flex items-center transition duration-300">
              Learn More <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 overflow-hidden">
          <Image src={Companylogo} alt="Company Logo" className="w-full h-auto md:-skew-x-6 object-cover" />
        </div>
      </div>
    </>
  );
};

export default About;