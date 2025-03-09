import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const PrivateClientInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Private Client Insurance"
        description={
          <>
            <p>
              Private Client Insurance is about you, your <strong>Auto</strong>, <strong>Home</strong>, <strong>Investment properties</strong>, and your <strong>pleasure crafts</strong>. At Trustwise Insurance, we know that each person is unique and has different needs. One of our personal insurance brokers can help you find policies that fit your needs without any overlap of coverage, gaps, or unnecessary extra costs.
            </p>
            <p>
              Our personal insurance brokers will work with some of the best Canadian insurance companies to provide simple, affordable insurance solutions tailored just for you.
            </p>
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