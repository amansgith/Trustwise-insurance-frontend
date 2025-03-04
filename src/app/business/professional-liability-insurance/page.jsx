import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const ProfessionalLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Professional Liability Insurance"
        description={
          <>
            <b>Comprehensive Professional Liability Insurance from Trustwise Insurance</b>
            <br /><br />
            Professional Liability Insurance, also known as Errors and Omissions (E&O) insurance, is a type of insurance that provides coverage for businesses and individuals against claims for negligence or errors in the services they provide. This type of insurance is essential for professionals who provide specialized services, such as lawyers, doctors, architects, and consultants.
            <br />
            <br />
            <b>Why Professional Liability Insurance Matters?</b>
            <br />
            Professional Liability Insurance is essential for professionals who provide specialized services. It offers crucial protection against financial losses resulting from claims for negligence or errors, helping you comply with legal requirements and enhancing your risk management strategy. With Trustwise Insurance, you get the peace of mind you need to focus on providing quality services.
            <br />
            <br />
            <b>What Our Professional Liability Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Legal Defense Costs: Covers legal expenses related to defending against claims for negligence or errors.</li>
              <li>💼 Settlements and Judgments: Covers costs associated with settlements and judgments resulting from claims for negligence or errors.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your profession and risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Professional Liability Insurance helps professionals enhance their risk management strategies and build trust with clients and partners.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect professional liability coverage for your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/dylan-gillis-KdeqA3aTnBY-unsplash.jpg"
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

export default ProfessionalLiabilityInsurance;