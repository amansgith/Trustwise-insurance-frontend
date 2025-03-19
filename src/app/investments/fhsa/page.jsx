"use client";
import { useEffect, useState } from "react";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";

const FHSA = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 mt-24 md:mt-6 md:pt-0">
        <InsuranceIntro
          title="First Home Savings Account (FHSA)"
          description={
            <>
              <p>
                A First Home Savings Account (FHSA) is a tax-advantaged account designed to help first-time homebuyers save for a down payment on their first home in Canada.
              </p>
              <br />
              <h2><b>Key Features of FHSA:</b></h2>
              <ul>
                <li>
                  <strong>Tax-Free Growth:</strong> Contributions to an FHSA grow tax-free, meaning you don’t pay taxes on any investment earnings.
                </li>
                <li>
                  <strong>Tax-Deductible Contributions:</strong> Contributions to an FHSA are tax-deductible, similar to an RRSP, reducing your taxable income.
                </li>
                <li>
                  <strong>Flexible Withdrawals:</strong> Qualifying withdrawals for purchasing a first home are completely tax-free.
                </li>
              </ul>
              <br />
              <h2><b>Trustwise Insurance's Commitment:</b></h2>
              <p>
                At Trustwise Insurance, we offer FHSA solutions that help you save efficiently and take advantage of tax benefits while planning for your first home purchase.
              </p>
              <br />
              <ul>
                <li>
                  <strong>Tailored Investment Strategies:</strong> We help you choose the right investment options within your FHSA to maximize returns.
                </li>
                <li>
                  <strong>Expert Financial Advice:</strong> Our advisors guide you through FHSA contributions, tax deductions, and withdrawal rules.
                </li>
                <li>
                  <strong>Seamless Homebuying Planning:</strong> We integrate FHSA savings into your broader financial plan, ensuring a smooth path to homeownership.
                </li>
              </ul>
            </>
          }
          imageSrc="/fhsa.jpg"
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

export default FHSA;
