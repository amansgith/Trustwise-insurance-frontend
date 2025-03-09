import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const BuilderRiskInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Builder's Risk Insurance"
        description={
          <>
            <b>Comprehensive Builder's Risk Insurance from Trustwise Insurance</b>
            <br />
            Builder's Risk Insurance provides protection to construction projects against various risks, including property damage, theft, and other unexpected events that can occur during the construction process. This type of insurance is essential for builders and contractors who want to ensure that their projects are adequately covered and protected in the event of unforeseen circumstances.
            <br />
            <br />
            <b>Why Builder's Risk Insurance Matters</b>
            <br />
            Builder's Risk Insurance is essential for builders and contractors. It offers crucial protection against financial losses resulting from property damage, theft, and other risks during construction, helping you maintain financial stability and focus on delivering quality projects. With Trustwise Insurance, you get the peace of mind you need to focus on your construction projects.
            <br />
            <br />
            <b>What Our Builder's Risk Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Property Damage Coverage: Protects against damage to the construction site and materials.</li>
              <li>🔒 Theft Coverage: Covers losses due to theft of materials and equipment.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your project type and risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Builder's Risk Insurance helps builders and contractors enhance their risk management strategies and build trust with clients and partners.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect builder's risk insurance coverage for your construction projects.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/2018042103c32dde-3aa6-2784-1197-a124394a9889-1.jpg"
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

export default BuilderRiskInsurance;