"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const EmployeeLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Employee Liability Insurance"
        description={
          <>
            <b>Comprehensive Employee Liability Insurance from Trustwise Insurance</b>
            <br />
            At Trustwise Insurance, we understand that managing employees comes with its share of risks. From wrongful termination and discrimination to harassment claims, businesses face potential legal challenges that can impact their operations and reputation. Our Employee Liability Insurance provides the protection you need to navigate these challenges confidently.
            <br />
            <br />
            <b>Why Employee Liability Insurance Matters?</b>
            <br />
            Employee Liability Insurance is essential for businesses of all sizes. It offers crucial protection against employee-related claims, helping you avoid costly legal battles and financial setbacks. With Trustwise Insurance, you get the peace of mind you need to focus on growing your business.
            <br />
            <br />
            <b>What Our Employee Liability Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Defense Costs: Covers legal expenses related to defending against employee-related claims.</li>
              <li>💼 Settlements and Judgments: Covers costs associated with settlements and judgments resulting from employee-related claims.</li>
              <li>⚖️ Customized Policies: Tailored coverage based on your business type and risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Employee Liability Insurance helps businesses attract and retain talented employees by providing them with peace of mind that their rights are protected.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect employee liability coverage for your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default EmployeeLiabilityInsurance;