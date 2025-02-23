"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCar, FaLayerGroup } from "react-icons/fa";
import {
  MdGavel,
  MdAssignment,
  MdOutlineElectricBolt,
  MdSavings,
} from "react-icons/md";
import { PiStudentFill, PiSteeringWheelFill } from "react-icons/pi";
import { SiCoronaengine } from "react-icons/si";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiCarKey } from "react-icons/gi";
import { IoMdArrowForward } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TrustBanner from "@/components/CommonComponents/Banner";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import FAQSection from "@/components/CommonComponents/FAQ";
import ContactUs from "@/components/CommonComponents/ContactUs";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const AutoInsurance = () => {
  return (
    <div>
      <InsuranceIntro
        title="Auto Insurance"
        description="You can buy Auto Insurance through various channels. It is up to you to decide if you want your Automobile Insurance needs met through insurance call centres of multi-nationals, or the option of meeting your Auto Insurance needs through a local independent insurance broker."
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/04/Auto-Insurance.jpg"
        buttonText="Get a Free Quote"
        extraButtons={[
          { text: "CLASSIC CAR", href: "/auto/classic-car-insurance" },
          { text: "BOAT", href: "/auto/boat-insurance" },
          { text: "RV", href: "/auto/rv-insurance" },
          { text: "MOTORCYCLE", href: "/auto/motorcycle-insurance" },
          { text: "BUNDLE", href: "/auto/bundle-insurance" },
          {
            text: "COMMERCIAL AUTO",
            href: "/auto/commercial-automobile-insurance",
          },
          { text: "PRIVATE CLIENT", href: "/auto/private-client-insurance" },
          { text: "SNOWMOBILE", href: "/auto/snowmobile-insurance" },
          { text: "+ MORE" },
        ]}
      />

      <TrustBanner />

      {/* Discounts Section */}
      <DiscountsSection
        discounts={[
          {
            icon: <FaCar />,
            title: "Multi-Vehicle Discount",
            description:
              "By insuring two or more vehicles in your policy, you could pay lower rates.",
          },
          {
            icon: <FaLayerGroup />,
            title: "Multi-Policy Discount",
            description:
              "Bundle your insurance with home. Get up to 20% discount on your insurance rates.",
          },
          {
            icon: <MdGavel />,
            title: "Conviction-free Discount",
            description:
              "Maintaining a clean driving record - no tickets or infractions can help you save.",
          },
          {
            icon: <MdAssignment />,
            title: "License Discount",
            description:
              "Drivers in their first year with a G2 or G license may qualify for a discount.",
          },
          {
            icon: <MdOutlineElectricBolt />,
            title: "Electric or Hybrid Vehicle Discount",
            description:
              "Making the choice to drive an electric or hybrid car offers another way to save.",
          },
          {
            icon: <PiStudentFill />,
            title: "Good Student Discount",
            description:
              "Drivers under 25 with an 80% average in school may be eligible for a discount.",
          },
          {
            icon: <SiCoronaengine />,
            title: "AEB System Discount",
            description:
              "If your car is fitted with Autonomous Emergency Braking System. It could save you money on your insurance rates.",
          },
          {
            icon: <MdSavings />,
            title: "Retiree Discount",
            description:
              "If you are at least 65 and retired, you may save on your insurance rates.",
          },
          {
            icon: <HiMiniUserGroup />,
            title: "Group Discount",
            description:
              "Some insurance providers offer discounts to individuals who work in certain professions or belong to specific professional groups or organizations.",
          },
          {
            icon: <PiSteeringWheelFill />,
            title: "Low Mileage Discount",
            description:
              "If you are at least 65 and retired, you may save on your insurance rates.",
          },
          {
            icon: <GiCarKey />,
            title: "Anti-Theft Device Discount",
            description:
              "If your vehicle is equipped with anti-theft devices or security systems, you may be eligible for a discount.",
          },
        ]}
      />
      <CoverageSection />
      <Features />
      <CTA />
      <ContactUs />
      <FAQSection />
    </div>
  );
};

/* Discounts Section */
const DiscountsSection = ({ discounts }) => {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold text-center">
        Check out the savings you may qualify for.
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Discount options eligibility criteria and availability vary by insurer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {discounts.map((discount, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="items-center text-5xl text-gray-700 mb-4">
              {discount.icon}
            </div>
            <h3 className="text-xl font-semibold">{discount.title}</h3>
            <p className="text-gray-600">{discount.description}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <Link href="/call-back-request" className="flex mx-auto">
          <button className="flex mx-auto mt-10 justify-center bg-cyan-500 hover:bg-green-700 text-xl text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Get Quote <IoMdArrowForward className="mx-1 mt-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

/* Coverage Section */
const CoverageSection = () => {
  // Set all items to be open initially
  const [openIndex, setOpenIndex] = useState([0, 1, 2, 3]);

  const toggleIndex = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index)); // Close section
    } else {
      setOpenIndex([...openIndex, index]); // Open section
    }
  };

  const coverages = [
    {
      title: "Liability",
      description: (
        <>
          Protects you if you cause an accident.{" "}
          <span className="font-semibold text-blue-600">
            Liability coverage
          </span>{" "}
          pays for property damage and injuries you cause to others while
          driving. It also covers{" "}
          <span className="font-semibold text-blue-600">
            court and attorney costs
          </span>
          .
        </>
      ),
    },
    {
      title: "Comprehensive & Collision",
      description: (
        <>
          Protects your car from{" "}
          <span className="font-semibold text-blue-600">unexpected events</span>{" "}
          such as theft, vandalism, hitting an animal, or natural disasters.{" "}
          <br />
          <br />
          <span className="font-semibold text-blue-600">
            Collision coverage
          </span>{" "}
          pays for damages to your vehicle if you’re in an accident, regardless
          of fault.
        </>
      ),
    },
    {
      title: "Uninsured Automobile",
      description: (
        <>
          Protects you from{" "}
          <span className="font-semibold text-blue-600">
            drivers who can’t pay
          </span>{" "}
          for damages in case of an accident. <br />
          <br />
          <span className="font-semibold text-blue-600">
            Uninsured automobile coverage
          </span>{" "}
          pays for your injuries and damaged property if you’re hit by a driver
          with little or no insurance.
        </>
      ),
    },
    {
      title: "Roadside Assistance",
      description: (
        <>
          Pays for{" "}
          <span className="font-semibold text-blue-600">
            towing services and more
          </span>
          . <br />
          <br />
          Our roadside assistance covers towing, flat tire changes, fuel
          delivery, lock-out services, and other emergency roadside services.
        </>
      ),
    },
  ];

  return (
    <div className="my-12 max-w-1/2 px-20 py-10 bg-gradient-to-r from-blue-50 to-blue-200">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Customize Your Car Insurance Coverage
      </h2>
      <p className="text-center text-gray-600 mb-6 px-4 leading-relaxed">
        From vehicular mishaps and glass impairments to legal disputes and
        beyond, we provide cost-effective automobile insurance solutions
        designed to safeguard you against a wide array of risks.
      </p>
      <p className="text-center text-gray-600 mb-8 px-4 leading-relaxed">
        Request an online quote for your car insurance and tailor your policy to
        meet your specific needs today.
      </p>

      <div className="space-y-6 w-full md:space-y-4 rounded-md">
        {coverages.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md bg-white"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center p-5 text-left text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-800"
            >
              {item.title}
              {openIndex.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {openIndex.includes(index) && (
              <div className="p-5 text-gray-700 leading-relaxed">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoInsurance;
