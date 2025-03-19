"use client";
import { useEffect, useState } from "react";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";

const SegregatedFunds = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 mt-24 md:mt-6 md:pt-0">
        <InsuranceIntro
          title="Segregated Funds"
          description={
            <>
              <p>
                Segregated funds are a unique investment option that combines the growth potential of mutual funds with the security of life insurance benefits. They offer protection and financial growth in a single product.
              </p>
              <br />
              <h2><b>Key Features of Segregated Funds:</b></h2>
              <ul>
                <li>
                  <strong>Capital Protection:</strong> Segregated funds offer guarantees on a portion of the principal investment, ensuring financial security.
                </li>
                <li>
                  <strong>Estate Planning Benefits:</strong> These funds bypass probate, allowing for a quicker and more cost-effective transfer of assets to beneficiaries.
                </li>
                <li>
                  <strong>Creditor Protection:</strong> In certain situations, segregated funds can be protected from creditors, making them an excellent option for business owners and professionals.
                </li>
                <li>
                  <strong>Potential for Growth:</strong> While offering security, segregated funds also provide access to various market-driven investment options.
                </li>
              </ul>
              <br />
              <h2><b>Trustwise Insurance's Commitment:</b></h2>
              <p>
                At Trustwise Insurance, we provide segregated fund solutions tailored to your financial goals, offering security and growth in one package.
              </p>
              <br />
              <ul>
                <li>
                  <strong>Customized Investment Strategies:</strong> We help you select the right segregated funds based on your risk tolerance and long-term financial objectives.
                </li>
                <li>
                  <strong>Expert Advice:</strong> Our financial specialists guide you through the benefits of segregated funds, ensuring you maximize their potential.
                </li>
                <li>
                  <strong>Comprehensive Financial Planning:</strong> We integrate segregated funds into your broader wealth management strategy to enhance financial security.
                </li>
              </ul>
            </>
          }
          imageSrc="/segregated.jpg"
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

export default SegregatedFunds;
