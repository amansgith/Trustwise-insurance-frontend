"use client";
import { useEffect, useState } from "react";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";

const TFSA = () => {
  return (
    <>
      <InsuranceIntro
        title="Tax-Free Savings Account (TFSA)"
        description={
          <>
            <p>
              A Tax-Free Savings Account (TFSA) is a versatile investment
              vehicle that allows individuals to grow their savings without
              incurring taxes on the earnings.
            </p>
            <br />
            <h2>
              <b>Key Features of TFSA:</b>
            </h2>
            <ul>
              <li>
                <strong>Tax-Free Growth:</strong> All earnings within a TFSA are
                exempt from taxes, allowing your investments to compound more
                effectively.
              </li>
              <li>
                <strong>Flexible Contributions:</strong> While there are annual
                contribution limits, any unused room can be carried forward
                indefinitely.
              </li>
              <li>
                <strong>Penalty-Free Withdrawals:</strong> Funds can be
                withdrawn at any time without penalties, and withdrawn amounts
                can be re-contributed in the following year.
              </li>
            </ul>
            <br />
            <h2>
              <b>Trustwise Insurance's Commitment:</b>
            </h2>
            <p>
              At Trustwise Insurance, we understand the importance of aligning
              financial products with our clients' unique goals and
              circumstances. Our TFSA offerings provide:
            </p>
            <br />
            <ul>
              <li>
                <strong>Personalized Investment Options:</strong> We offer a
                range of investment choices within the TFSA to match your risk
                tolerance and financial objectives.
              </li>
              <li>
                <strong>Expert Guidance:</strong> Our team of financial advisors
                helps you navigate the intricacies of TFSAs, ensuring you
                maximize the benefits.
              </li>
              <li>
                <strong>Integrated Financial Planning:</strong> We incorporate
                TFSA strategies into your broader financial plan, considering
                factors like retirement goals and tax implications.
              </li>
            </ul>
          </>
        }
        imageSrc="/tfsa.jpg"
        buttonText="Get a Quote"
      />
      <TrustBanner />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default TFSA;
