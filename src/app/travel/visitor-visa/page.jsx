"use client";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";

const VisitorVisa = () => {
  return (
    <>
      <InsuranceIntro
        title="Visitor Visa Insurance"
        description={
          <>
            <p>
              Visitor Visa Insurance provides essential health coverage for
              travelers visiting Canada. It ensures financial protection against
              unexpected medical emergencies during the stay.
            </p>
            <br />
            <h2>
              <b>Key Features of Visitor Visa Insurance:</b>
            </h2>
            <ul>
              <li>
                <strong>Emergency Medical Coverage:</strong> Covers hospital
                stays, doctor visits, and emergency medical treatments in case
                of illness or injury.
              </li>
              <li>
                <strong>Accident and Illness Protection:</strong> Includes
                coverage for unexpected accidents, illnesses, and prescription
                medications.
              </li>
              <li>
                <strong>Travel Assistance Services:</strong> 24/7 emergency
                medical support, ensuring peace of mind during the visit.
              </li>
            </ul>
            <br />
            <h2>
              <b>Trustwise Insurance's Commitment:</b>
            </h2>
            <p>
              At Trustwise Insurance, we offer affordable and comprehensive
              Visitor Visa Insurance plans tailored to meet your travel needs
              while ensuring a worry-free stay in Canada.
            </p>
            <br />
            <ul>
              <li>
                <strong>Affordable Plans:</strong> Competitive rates with
                customizable options to fit different travel durations and
                budgets.
              </li>
              <li>
                <strong>Easy and Fast Approval:</strong> Quick application and
                approval process to ensure you get covered before your trip.
              </li>
              <li>
                <strong>Reliable Customer Support:</strong> Our dedicated team
                is available to assist you with claims and inquiries anytime.
              </li>
            </ul>
          </>
        }
        imageSrc="/visitor-visa.png"
        buttonText="Get a Quote"
      />
      <TrustBanner />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default VisitorVisa;
