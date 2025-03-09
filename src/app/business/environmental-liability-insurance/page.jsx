import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const EnvironmentLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Environmental Impairment Liability Insurance"
        description={
          <>
            <b>Comprehensive Environmental Impairment Liability Insurance from Trustwise Insurance</b>
            <br />
            At Trustwise Insurance, we understand that businesses handling hazardous materials or engaging in activities that pose environmental risks face unique challenges. Our Environmental Impairment Liability Insurance provides the protection you need to navigate these risks confidently.
            <br />
            <br />
            <b>Why Environmental Impairment Liability Insurance Matters?</b>
            <br />
            Environmental Impairment Liability Insurance is essential for businesses that handle hazardous materials or engage in activities that may pose environmental risks. It offers crucial protection against financial losses resulting from environmental incidents, helping you comply with legal requirements and enhancing your risk management strategy. With Trustwise Insurance, you get the peace of mind you need to focus on growing your business.
            <br />
            <br />
            <b>What Our Environmental Impairment Liability Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Cleanup Costs: Covers costs associated with cleaning up pollution incidents.</li>
              <li>⚖️ Legal Defense Costs: Covers legal expenses related to defending against environmental claims.</li>
              <li>💼 Third-Party Bodily Injury or Property Damage: Covers costs associated with third-party bodily injury or property damage resulting from pollution incidents.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your business type and risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Environmental Impairment Liability Insurance helps businesses comply with legal requirements for environmental protection and enhances their risk management strategies.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect environmental impairment liability coverage for your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/matthew-smith-Rfflri94rs8-unsplash.jpg"
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

export default EnvironmentLiabilityInsurance;