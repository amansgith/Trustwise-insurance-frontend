import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const PrivateClientInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Private Client Insurance"
        description={
          <>
            Private Client Insurance is about you, Your Auto, Home, Investment
            properties and your pleasure crafts. At Aaxel Insurance, we know
            that each person is unique and has different needs. One of our
            personal insurance brokers can help you find policies that fit your
            needs without any overlap of coverage, gaps, or unnecessary extra
            costs. <br />
            <br />
            Our personal insurance brokers will work with one of the best
            Canadian insurance companies to provide simple, affordable insurance
            solutions.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/20200114b62bf4b2-54e2-9767-1438-86275178d5ec.jpg"
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

export default PrivateClientInsurance;
