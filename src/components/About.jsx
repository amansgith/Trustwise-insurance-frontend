import { ArrowRight } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className="bg-[#f7f7f7] py-16 px-6">
      <div className='max-w-screen-2xl mx-auto flex gap-10'>
        <div className="flex flex-col justify-between">
            <div className="w-fit flex flex-col gap-4">
                <h3 className='uppercase text-[46px] leading-[56px] font-bold'>About Us</h3>
                <p className='h-0.5 w-9/12 bg-[#2a80b4]'></p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-medium">Founded in 2006, Aaxel Insurance is an independent insurance broker serving throughout Ontario and Alberta. Aaxel Insurance provides innovative Personal and Commercial Insurance solutions to its client’s Home, Auto, Life and Businesses through our trusted insurance partners.</p>
              <p className="font-medium">
                Aaxel Insurance deliver best-in-class insurance solutions backed by excellent customer service. We have locations across Ontario and Alberta and proudly serving thousands of customers.
              </p>
              <p className="font-medium">
                Aaxel Insurance provides innovative insurance solutions for all your insurance needs at very comparative rates.
              </p>
            </div>
            <div className="">
            <button className='py-3.5 px-10 bg-[#9ecb75] hover:bg-[#2a80b4] hover:text-white flex items-center'>
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </div>
          <img src="/Emblem.jpg" alt="" width={867} height={400} className='h-[400px]' />
      </div>
    </div>
  )
}

export default About