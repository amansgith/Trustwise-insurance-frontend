import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import Features from "@/components/homepage/Features";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const BundleInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Bundle Insurance"
        description={
          <>
            <p>
              Bundle Insurance is designed to provide comprehensive coverage for all your insurance needs, including <strong>Auto</strong>, <strong>Home</strong>, <strong>Investment properties</strong>, and your <strong>pleasure crafts</strong>. At Trustwise Insurance, we understand that each individual is unique and has different requirements.
            </p>
            <p>
              Our dedicated personal insurance brokers can help you find policies that fit your specific needs without any overlap of coverage, gaps, or unnecessary extra costs. We work with some of the best Canadian insurance companies to provide simple, affordable insurance solutions tailored just for you.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/Header-Compressed-Webp.webp"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      {/* get quote form  */}
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default BundleInsurance;