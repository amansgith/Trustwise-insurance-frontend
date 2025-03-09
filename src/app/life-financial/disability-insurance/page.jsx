import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const DisabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Disability Insurance"
        description={
          <>
            At Trustwise Insurance, we understand that unexpected accidents and illnesses can happen at any time, impacting your life and livelihood. That's why we offer customizable Disability Insurance policies designed to provide financial protection in the event of a disability that prevents you from working.
            <br />
            <br />
            Our Disability Insurance policies offer flexibility to choose the level of coverage you need, with both short-term and long-term disability options. Our team of experts works closely with you to understand your specific needs and help you make informed decisions about your Disability Insurance coverage.
            <br />
            <br />
            With Trustwise Insurance, you can have peace of mind knowing that you are protected in the event of an unexpected disability. We offer competitive rates and a range of options to ensure you get the coverage you need at a price you can afford.
            <br />
            <br />
            Contact us today to learn more about our Disability Insurance policies and how we can help you protect yourself and your family from the financial impact of a disability.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/yomex-owo-gRTzhQsiVG0-unsplash.jpg"
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

export default DisabilityInsurance;