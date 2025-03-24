"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const GeneralLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="General Liability Insurance"
        description={
          <>
            <b>Comprehensive Commercial General Liability Insurance from Trustwise Insurance</b>
            <br /><br />
            At Trustwise Insurance, we understand that no matter the size or type of business, liability risks are always present. Accidents happen—whether it’s a customer slipping on your premises or accidental damage to someone’s property during operations. Our Commercial General Liability Insurance (CGL) ensures your business is protected from these unexpected events.
            <br />
            <br />
            <b>Why Commercial General Liability Insurance Matters?</b>
            <br />
            CGL insurance is essential for businesses that interact with customers, clients, or the public. It offers crucial protection against third-party claims that could otherwise lead to costly legal battles and financial setbacks. With Trustwise Insurance, you get the peace of mind you need to focus on growing your business.
            <br />
            <br />
            <b>What Our CGL Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Bodily Injury & Property Damage Coverage: Protects against claims arising from injuries or property damage caused by your business operations.</li>
              <li>📝 Personal & Advertising Injury Coverage: Covers claims related to libel, slander, copyright infringement, and false advertising.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your business type and risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our CGL insurance helps businesses meet legal insurance requirements, enhancing credibility and trust with clients and partners.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect liability coverage for your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/sean-pollock-PhYq704ffdA-unsplash.jpg"
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

export default GeneralLiabilityInsurance;