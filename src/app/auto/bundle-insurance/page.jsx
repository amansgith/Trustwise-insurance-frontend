import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const BundleInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Bundle Insurance"
        description={`Bundle Insurance is about you, Your Auto, Home, Investment properties and your pleasure crafts. At Aaxel Insurance, we know that each person is unique and has different needs. ${"\n\n"}One of our personal insurance brokers can help you find policies that fit your needs without any overlap of coverage, gaps, or unnecessary extra costs. Our personal insurance brokers will work with one of the best Canadian insurance companies to provide simple, affordable insurance solutions.`}
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/Header-Compressed-Webp.webp"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      {/* get quote form  */}
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default BundleInsurance;