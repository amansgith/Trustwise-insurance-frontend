import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const SpecialityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Specialty Insurance"
        description={
          <>
            <b>Comprehensive Specialty Insurance from Trustwise Insurance</b>
            <br /><br />
            Specialty Insurance provides specialized protection against niche and unique risks that are not covered by standard insurance policies. This type of insurance is crucial for businesses and individuals who operate in specialized industries or engage in unique activities that require specialized coverage.
            <br />
            <br />
            <b>Why Specialty Insurance Matters?</b>
            <br />
            Specialty Insurance is essential for businesses and individuals who operate in specialized industries or engage in unique activities. It offers crucial protection against financial losses resulting from niche risks, helping you comply with legal requirements and enhancing your risk management strategy. With Trustwise Insurance, you get the peace of mind you need to focus on your specialized activities.
            <br />
            <br />
            <b>What Our Specialty Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Event Coverage: Protects against financial losses resulting from event cancellations, postponements, or other disruptions.</li>
              <li>🎬 Entertainment Coverage: Provides coverage for film productions, concerts, and other entertainment-related activities.</li>
              <li>⚽ Sports Coverage: Covers sports events, teams, and athletes against various risks.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your unique needs and risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Specialty Insurance helps businesses and individuals enhance their risk management strategies and build trust with clients and partners.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect specialty insurance coverage for your needs.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/linkedin-sales-solutions-7wyEG321GS0-unsplash.jpg"
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

export default SpecialityInsurance;