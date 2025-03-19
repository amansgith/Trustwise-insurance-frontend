"use client";
import { useEffect, useState } from "react";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";

const RESP = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 mt-24 md:mt-6 md:pt-0">
        <InsuranceIntro
          title="Registered Education Savings Plan (RESP)"
          description={
            <>
              <p>
                A Registered Education Savings Plan (RESP) is a tax-advantaged investment account designed to help parents and guardians save for a child's post-secondary education.
              </p>
              <br />
              <h2><b>Key Features of RESP:</b></h2>
              <ul>
                <li>
                  <strong>Government Grants:</strong> The Canadian government contributes to your RESP through programs like the Canada Education Savings Grant (CESG) and the Canada Learning Bond (CLB).
                </li>
                <li>
                  <strong>Tax-Deferred Growth:</strong> Investment earnings within the RESP grow tax-free until withdrawn for educational purposes.
                </li>
                <li>
                  <strong>Flexible Contribution Limits:</strong> There is no annual contribution limit, but the lifetime contribution limit per beneficiary is $50,000.
                </li>
                <li>
                  <strong>Wide Range of Investments:</strong> RESP funds can be invested in mutual funds, segregated funds, GICs, and other financial instruments.
                </li>
              </ul>
              <br />
              <h2><b>Trustwise Insurance's Commitment:</b></h2>
              <p>
                At Trustwise Insurance, we provide RESP solutions to help you plan for your child's future education while maximizing available government grants.
              </p>
              <br />
              <ul>
                <li>
                  <strong>Personalized Investment Options:</strong> We offer diverse RESP investment choices based on your financial goals and risk appetite.
                </li>
                <li>
                  <strong>Expert Guidance:</strong> Our advisors ensure you maximize government grants and optimize your RESP contributions.
                </li>
                <li>
                  <strong>Education-Centered Planning:</strong> We integrate RESP strategies into your broader financial plan to ensure a secure educational future for your child.
                </li>
              </ul>
            </>
          }
          imageSrc="/resp.jpg"
          buttonText="Get a Quote"
        />
      </div>
      <TrustBanner />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default RESP;
