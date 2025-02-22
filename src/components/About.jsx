"use client";
import { ArrowRight } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <div className="bg-[#f7f7f7] py-16 px-6">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex flex-col justify-between md:w-1/2">
          <div className="w-fit flex flex-col gap-4">
            <h3 className="uppercase text-[36px] md:text-[46px] leading-[46px] md:leading-[56px] font-bold">About Us</h3>
            <p className="h-0.5 w-9/12 bg-[#2a80b4]"></p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-base md:text-lg">
              Founded in 2006, Aaxel Insurance is an independent insurance broker serving throughout Ontario and Alberta. Aaxel Insurance provides innovative Personal and Commercial Insurance solutions to its client’s Home, Auto, Life and Businesses through our trusted insurance partners.
            </p>
            <p className="font-medium text-base md:text-lg">
              Aaxel Insurance deliver best-in-class insurance solutions backed by excellent customer service. We have locations across Ontario and Alberta and proudly serving thousands of customers.
            </p>
            <p className="font-medium text-base md:text-lg">
              Aaxel Insurance provides innovative insurance solutions for all your insurance needs at very comparative rates.
            </p>
          </div>
          <div className="mt-4">
            <button className="py-3.5 px-10 bg-[#9ecb75] hover:bg-[#2a80b4] hover:text-white flex items-center">
              Learn More <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img src="/Emblem.jpg" alt="Emblem" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;