import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const ContractorsInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Contractors Insurance"
        description={
          <>
            <b>Reliable Contractors Insurance from Trustwise Insurance</b>
            <br /><br />
            At Trustwise Insurance, we know that working in the construction industry comes with its share of risks. From accidents on-site to property damage and potential lawsuits, contractors face challenges that can impact both their projects and reputation. Our Contractors Insurance solutions provide the protection you need to handle these risks confidently.
            <br />
            <br />
            <b>Why Choose Contractors Insurance from Trustwise?</b>
            <br />
            Whether you’re an independent contractor or manage large construction projects, having the right insurance is crucial. Our coverage protects your business from unexpected financial losses while helping you meet legal requirements and enhancing your reputation for safety and reliability.
            <br />
            <br />
            <b>Coverage Options Designed for Contractors:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ General Liability Insurance: Protection against claims for bodily injury, property damage, and more.</li>
              <li>🛠 Workers' Compensation Insurance: Covers medical expenses and lost wages if your employees are injured on the job.</li>
              <li>🚚 Commercial Auto Insurance: Safeguards vehicles used for your business operations.</li>
              <li>🏗 Umbrella Insurance: Provides extra liability coverage for large claims that exceed standard policy limits.</li>
            </ul>
            <br />
            We customize each policy based on the size and scope of your projects, ensuring you get the coverage you need without paying for extras you don’t.
            <br />
            <br />
            <b>Build with confidence. Protect your business with Trustwise Insurance.</b>
            <br />
            📞 Call us today at 780-255-5151 and let us help you secure the right protection for your contracting projects.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/james-kovin-YQGPSblLPz0-unsplash.jpg"
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

export default ContractorsInsurance;