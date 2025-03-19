"use client";
import { useEffect, useState } from "react";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";

const SuperVisa = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 mt-24 md:mt-6 md:pt-0">
        <InsuranceIntro
          title="Super Visa Insurance"
          description={
            <>
              <p>
                Super Visa Insurance is a mandatory health insurance policy required for parents and grandparents visiting Canada under the Super Visa program. It provides emergency medical coverage during their stay in Canada.
              </p>
              <br />
              <h2><b>Key Features of Super Visa Insurance:</b></h2>
              <ul>
                <li>
                  <strong>Emergency Medical Coverage:</strong> Covers hospitalization, doctor visits, prescription drugs, and other medical expenses in case of an emergency.
                </li>
                <li>
                  <strong>Flexible Coverage Options:</strong> Choose from various coverage amounts and deductible options to fit your budget.
                </li>
                <li>
                  <strong>Coverage for Up to 2 Years:</strong> Policies can be purchased for one or two years and can be extended if necessary.
                </li>
              </ul>
              <br />
              <h2><b>Trustwise Insurance's Commitment:</b></h2>
              <p>
                At Trustwise Insurance, we offer affordable and reliable Super Visa Insurance plans to ensure your loved ones are protected while visiting Canada.
              </p>
              <br />
              <ul>
                <li>
                  <strong>Competitive Rates:</strong> We offer the best coverage at competitive prices to meet Super Visa requirements.
                </li>
                <li>
                  <strong>Quick Approval Process:</strong> Get instant quotes and approvals to support your Super Visa application.
                </li>
                <li>
                  <strong>24/7 Emergency Assistance:</strong> Our plans provide access to 24/7 emergency medical assistance for your peace of mind.
                </li>
              </ul>
            </>
          }
          imageSrc="/supervisa.png"
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

export default SuperVisa;
